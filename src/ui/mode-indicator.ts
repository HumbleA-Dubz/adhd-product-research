import { Graph } from '../graph/graph';
import { Store } from '../state/store';

export function initModeIndicator(graph: Graph, store: Store): void {
  const indicator = document.getElementById('mode-indicator');
  if (!indicator) {
    console.error('Mode indicator element not found');
    return;
  }

  // Subscribe to mode changes
  store.subscribe('mode:changed', (state) => {
    updateModeIndicator(indicator, state.mode, state.selectedNodeId, graph);
  });

  store.subscribe('node:selected', (state) => {
    updateModeIndicator(indicator, state.mode, state.selectedNodeId, graph);
  });

  // Set initial state
  const initialState = store.getState();
  updateModeIndicator(indicator, initialState.mode, initialState.selectedNodeId, graph);
}

function updateModeIndicator(
  indicator: HTMLElement,
  mode: string,
  selectedNodeId: string | null,
  graph: Graph
): void {
  indicator.className = 'mode-indicator';

  switch (mode) {
    case 'BROWSE':
      indicator.textContent = 'Exploring';
      indicator.classList.add('mode-browse');
      break;

    case 'DETAIL':
      if (selectedNodeId) {
        const node = graph.getNode(selectedNodeId);
        if (node) {
          indicator.textContent = `Viewing: ${node.displayName}`;
          indicator.classList.add('mode-detail');
        } else {
          indicator.textContent = 'Exploring';
          indicator.classList.add('mode-browse');
        }
      } else {
        indicator.textContent = 'Exploring';
        indicator.classList.add('mode-browse');
      }
      break;

    case 'REFOCUS':
      indicator.textContent = 'Focused';
      indicator.classList.add('mode-refocus');
      break;

    default:
      indicator.textContent = 'Exploring';
      indicator.classList.add('mode-browse');
  }
}
