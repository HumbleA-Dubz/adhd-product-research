import { Graph } from '../graph/graph';
import { Store } from '../state/store';
import { PRESETS } from '../state/presets';

export function initQuestionBar(graph: Graph, store: Store): void {
  const questionBar = document.getElementById('question-bar');
  if (!questionBar) {
    console.error('Question bar element not found');
    return;
  }

  // Clear existing content
  questionBar.innerHTML = '';

  // Create container
  const container = document.createElement('div');
  container.className = 'question-bar-container';

  // Create preset buttons
  PRESETS.forEach(preset => {
    if (preset.parameter) {
      // Parameterised preset - needs dropdown
      const wrapper = createParameterisedPresetButton(preset, graph, store);
      container.appendChild(wrapper);
    } else {
      // Simple preset button
      const button = createSimplePresetButton(preset, store);
      container.appendChild(button);
    }
  });

  // Add Clear button
  const clearBtn = document.createElement('button');
  clearBtn.className = 'preset-button clear-button';
  clearBtn.textContent = 'Clear';
  clearBtn.onclick = () => store.clearPreset();
  container.appendChild(clearBtn);

  // Add Reset button (AC22) — returns to BROWSE + default viewport + no preset
  const resetBtn = document.createElement('button');
  resetBtn.className = 'preset-button reset-button';
  resetBtn.textContent = 'Reset';
  resetBtn.title = 'Reset to initial view (clears preset, deselects node, resets viewport)';
  resetBtn.onclick = () => store.reset();
  container.appendChild(resetBtn);

  questionBar.appendChild(container);

  // Subscribe to preset changes to update button states
  store.subscribe('preset:activated', (state) => {
    updateButtonStates(container, state.activePreset, state.presetParam);
  });

  store.subscribe('preset:cleared', () => {
    updateButtonStates(container, null, null);
  });
}

function createSimplePresetButton(preset: any, store: Store): HTMLElement {
  const button = document.createElement('button');
  button.className = 'preset-button';
  button.textContent = preset.label;
  button.dataset.preset = preset.name;
  button.onclick = () => {
    const state = store.getState();
    if (state.activePreset === preset.name) {
      // Clicking active preset clears it
      store.clearPreset();
    } else {
      store.activatePreset(preset.name);
    }
  };
  return button;
}

function createParameterisedPresetButton(
  preset: any,
  graph: Graph,
  store: Store
): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'preset-dropdown-wrapper';

  const button = document.createElement('button');
  button.className = 'preset-button';
  button.textContent = preset.label;
  button.dataset.preset = preset.name;

  const dropdown = document.createElement('div');
  dropdown.className = 'preset-dropdown hidden';

  // Get models for parameter
  if (preset.parameter.type === 'model') {
    const models = graph.getNodesByType('model');

    if (models.length === 0) {
      button.disabled = true;
      button.title = 'No models available';
    } else {
      models.forEach(model => {
        const option = document.createElement('button');
        option.className = 'dropdown-option';
        option.textContent = model.displayName;
        option.dataset.modelId = model.id;
        option.onclick = (e) => {
          e.stopPropagation();
          const state = store.getState();
          if (state.activePreset === preset.name && state.presetParam === model.id) {
            // Clicking active preset with same param clears it
            store.clearPreset();
          } else {
            store.activatePreset(preset.name, model.id);
          }
          dropdown.classList.add('hidden');
        };
        dropdown.appendChild(option);
      });
    }
  }

  // Toggle dropdown on button click
  button.onclick = (e) => {
    e.stopPropagation();
    const state = store.getState();

    // If this preset is active, clear it
    if (state.activePreset === preset.name) {
      store.clearPreset();
      dropdown.classList.add('hidden');
    } else {
      // Close all other dropdowns
      document.querySelectorAll('.preset-dropdown').forEach(d => {
        if (d !== dropdown) d.classList.add('hidden');
      });

      // Toggle this dropdown
      dropdown.classList.toggle('hidden');
    }
  };

  wrapper.appendChild(button);
  wrapper.appendChild(dropdown);

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target as Node)) {
      dropdown.classList.add('hidden');
    }
  });

  return wrapper;
}

function updateButtonStates(
  container: HTMLElement,
  activePreset: string | null,
  presetParam: string | null
): void {
  // Update all preset buttons
  container.querySelectorAll('.preset-button').forEach(btn => {
    const button = btn as HTMLButtonElement;
    const presetName = button.dataset.preset;

    if (!presetName) return; // Skip clear button

    if (activePreset === presetName) {
      button.classList.add('active');

      // Update dropdown option states for parameterised presets
      const wrapper = button.parentElement;
      if (wrapper && wrapper.classList.contains('preset-dropdown-wrapper')) {
        const dropdown = wrapper.querySelector('.preset-dropdown');
        if (dropdown) {
          dropdown.querySelectorAll('.dropdown-option').forEach(opt => {
            const option = opt as HTMLButtonElement;
            if (option.dataset.modelId === presetParam) {
              option.classList.add('active');
            } else {
              option.classList.remove('active');
            }
          });
        }
      }
    } else {
      button.classList.remove('active');
    }
  });
}
