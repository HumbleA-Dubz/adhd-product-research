import { Graph } from '../graph/graph';
import { Store } from '../state/store';
import type { GraphNode } from '../graph/types';

export function initSearch(graph: Graph, store: Store): void {
  const searchOverlay = document.getElementById('search-overlay')!;
  if (!searchOverlay) {
    console.error('Search overlay element not found');
    return;
  }

  let searchInput: HTMLInputElement | null = null;
  let resultsContainer: HTMLElement | null = null;

  // Subscribe to search toggle
  store.subscribe('search:toggled', (state) => {
    if (state.searchOpen) {
      openSearch();
    } else {
      closeSearch();
    }
  });

  function openSearch() {
    searchOverlay.classList.remove('hidden');

    // Create search UI if not exists
    if (!searchInput) {
      const searchBox = document.createElement('div');
      searchBox.className = 'search-box';

      searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.className = 'search-input';
      searchInput.placeholder = 'Search entities...';
      searchInput.setAttribute('aria-label', 'Search entities');

      resultsContainer = document.createElement('div');
      resultsContainer.className = 'search-results';

      searchBox.appendChild(searchInput);
      searchBox.appendChild(resultsContainer);

      searchOverlay.appendChild(searchBox);

      // Handle input
      searchInput.addEventListener('input', (e) => {
        const query = (e.target as HTMLInputElement).value;
        updateSearchResults(query);
      });

      // Handle escape
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          store.escape();
        }
      });
    }

    // Clear previous search
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }

    if (resultsContainer) {
      resultsContainer.innerHTML = '';
    }
  }

  function closeSearch() {
    searchOverlay.classList.add('hidden');
  }

  function updateSearchResults(query: string) {
    if (!resultsContainer) return;

    resultsContainer.innerHTML = '';

    if (query.length === 0) {
      return;
    }

    // Search all nodes
    const allNodes = graph.getAllNodes();
    const lowerQuery = query.toLowerCase();

    const matches = allNodes.filter(node => {
      const nameMatch = node.displayName.toLowerCase().includes(lowerQuery);
      const idMatch = node.secondaryId.toLowerCase().includes(lowerQuery);
      return nameMatch || idMatch;
    });

    // Group by entity type
    const grouped = new Map<string, GraphNode[]>();
    matches.forEach(node => {
      if (!grouped.has(node.type)) {
        grouped.set(node.type, []);
      }
      grouped.get(node.type)!.push(node);
    });

    // Limit to top 10 results
    let count = 0;
    const maxResults = 10;

    // Define type order for display
    const typeOrder = [
      'problem',
      'model',
      'mechanism',
      'meta_challenge',
      'foundation',
      'implication',
      'claim',
      'source',
      'cluster'
    ];

    for (const type of typeOrder) {
      if (count >= maxResults) break;

      const nodes = grouped.get(type);
      if (!nodes || nodes.length === 0) continue;

      // Create type group
      const typeGroup = document.createElement('div');
      typeGroup.className = 'search-type-group';

      const typeHeader = document.createElement('div');
      typeHeader.className = 'search-type-header';
      typeHeader.textContent = formatTypeName(type);
      typeGroup.appendChild(typeHeader);

      const typeResults = document.createElement('div');
      typeResults.className = 'search-type-results';

      for (const node of nodes) {
        if (count >= maxResults) break;

        const resultItem = createSearchResultItem(node, store);
        typeResults.appendChild(resultItem);
        count++;
      }

      typeGroup.appendChild(typeResults);
      resultsContainer.appendChild(typeGroup);
    }

    // Show "no results" message if needed
    if (count === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'search-no-results';
      noResults.textContent = 'No results found';
      resultsContainer.appendChild(noResults);
    }
  }

  // Click backdrop to close
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      store.escape();
    }
  });
}

function createSearchResultItem(node: GraphNode, store: Store): HTMLElement {
  const item = document.createElement('button');
  item.className = 'search-result-item';

  if (!node.canvasVisible) {
    item.classList.add('off-canvas');
  }

  const nameSpan = document.createElement('span');
  nameSpan.className = 'result-name';
  nameSpan.textContent = node.displayName;

  const idSpan = document.createElement('span');
  idSpan.className = 'result-id';
  idSpan.textContent = node.secondaryId;

  item.appendChild(nameSpan);
  item.appendChild(idSpan);

  if (node.canvasVisible) {
    item.onclick = () => {
      store.selectNode(node.id);
      store.escape(); // Close search
    };
  } else {
    // Off-canvas entity - show disabled button
    item.disabled = true;
    item.title = 'This entity is not visible on canvas';

    const offCanvasLabel = document.createElement('span');
    offCanvasLabel.className = 'off-canvas-label';
    offCanvasLabel.textContent = 'Off canvas';
    item.appendChild(offCanvasLabel);
  }

  return item;
}

function formatTypeName(type: string): string {
  const typeNames: Record<string, string> = {
    'problem': 'Problems',
    'model': 'Models',
    'mechanism': 'Mechanisms',
    'meta_challenge': 'Meta-Challenges',
    'foundation': 'Foundations',
    'implication': 'Implications',
    'claim': 'Claims',
    'source': 'Sources',
    'cluster': 'Clusters'
  };

  return typeNames[type] || type;
}
