import { Graph } from '../graph/graph';
import { Store } from '../state/store';
import { computeVisualOverrides } from '../state/derived';

export function initLegend(graph: Graph, store: Store): void {
  const legend = document.getElementById('legend');
  if (!legend) {
    console.error('Legend element not found');
    return;
  }

  // Subscribe to preset changes
  store.subscribe('preset:activated', (state) => {
    const overrides = computeVisualOverrides(
      state.activePreset,
      state.presetParam,
      graph
    );

    if (overrides.legend) {
      renderLegend(legend, overrides.legend);
      legend.classList.remove('hidden');
    } else {
      legend.classList.add('hidden');
    }
  });

  store.subscribe('preset:cleared', () => {
    legend.classList.add('hidden');
    legend.innerHTML = '';
  });
}

function renderLegend(
  legend: HTMLElement,
  legendData: { title: string; entries: { label: string; color: string }[] }
): void {
  legend.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'legend-container';

  const title = document.createElement('div');
  title.className = 'legend-title';
  title.textContent = legendData.title;
  container.appendChild(title);

  const entriesContainer = document.createElement('div');
  entriesContainer.className = 'legend-entries';

  legendData.entries.forEach(entry => {
    const item = document.createElement('div');
    item.className = 'legend-item';

    const swatch = document.createElement('div');
    swatch.className = 'legend-swatch';
    swatch.style.backgroundColor = entry.color;
    swatch.setAttribute('aria-label', entry.label);

    const label = document.createElement('span');
    label.className = 'legend-label';
    label.textContent = entry.label;

    item.appendChild(swatch);
    item.appendChild(label);
    entriesContainer.appendChild(item);
  });

  container.appendChild(entriesContainer);
  legend.appendChild(container);
}
