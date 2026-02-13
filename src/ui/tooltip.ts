import { Graph } from '../graph/graph';
import { Store } from '../state/store';

export function initTooltip(graph: Graph, store: Store): void {
  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip hidden';
  tooltip.id = 'graph-tooltip';
  document.body.appendChild(tooltip);

  let hoverTimer: number | null = null;
  const hoverDelay = 300; // ms

  // Subscribe to hover events
  store.subscribe('node:hovered', (state) => {
    if (state.hoveredNodeId) {
      const node = graph.getNode(state.hoveredNodeId);
      if (node) {
        // Start timer
        hoverTimer = window.setTimeout(() => {
          showTooltip(node, tooltip);
        }, hoverDelay);
      }
    }
  });

  store.subscribe('node:unhovered', () => {
    // Clear timer and hide immediately
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
    hideTooltip(tooltip);
  });

  // Position tooltip near cursor
  document.addEventListener('mousemove', (e) => {
    if (!tooltip.classList.contains('hidden')) {
      positionTooltip(tooltip, e.clientX, e.clientY);
    }
  });
}

function showTooltip(node: any, tooltip: HTMLElement): void {
  tooltip.innerHTML = '';

  // Build tooltip content based on entity type
  switch (node.type) {
    case 'problem':
      renderProblemTooltip(node, tooltip);
      break;
    case 'model':
      renderModelTooltip(node, tooltip);
      break;
    case 'mechanism':
      renderMechanismTooltip(node, tooltip);
      break;
    case 'meta_challenge':
      renderMetaChallengeTooltip(node, tooltip);
      break;
    case 'foundation':
      renderFoundationTooltip(node, tooltip);
      break;
    case 'implication':
      renderImplicationTooltip(node, tooltip);
      break;
    case 'claim':
      renderClaimTooltip(node, tooltip);
      break;
    case 'source':
      renderSourceTooltip(node, tooltip);
      break;
    case 'cluster':
      renderClusterTooltip(node, tooltip);
      break;
    default:
      tooltip.innerHTML = `<strong>${node.displayName}</strong>`;
  }

  tooltip.classList.remove('hidden');
}

function hideTooltip(tooltip: HTMLElement): void {
  tooltip.classList.add('hidden');
}

function positionTooltip(tooltip: HTMLElement, x: number, y: number): void {
  const offset = 15; // px from cursor
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const tooltipRect = tooltip.getBoundingClientRect();

  let left = x + offset;
  let top = y + offset;

  // Keep within viewport bounds
  if (left + tooltipRect.width > viewportWidth) {
    left = x - tooltipRect.width - offset;
  }

  if (top + tooltipRect.height > viewportHeight) {
    top = y - tooltipRect.height - offset;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function renderProblemTooltip(node: any, tooltip: HTMLElement): void {
  const attrs = node.attributes;

  const name = document.createElement('div');
  name.className = 'tooltip-name';
  name.textContent = node.displayName;
  tooltip.appendChild(name);

  if (attrs.scores) {
    const score = document.createElement('div');
    score.className = 'tooltip-field';
    score.textContent = `Total Score: ${attrs.scores.total}/15`;
    tooltip.appendChild(score);
  }

  if (attrs.evidence_tier !== undefined) {
    const tier = document.createElement('div');
    tier.className = 'tooltip-field';
    tier.textContent = `Evidence: Tier ${attrs.evidence_tier}`;
    tooltip.appendChild(tier);
  }

  if (attrs.cluster) {
    const cluster = document.createElement('div');
    cluster.className = 'tooltip-field';
    cluster.textContent = `Cluster: ${attrs.cluster}`;
    tooltip.appendChild(cluster);
  }

  if (attrs.role) {
    const role = document.createElement('div');
    role.className = 'tooltip-field';
    role.textContent = `Role: ${attrs.role}`;
    tooltip.appendChild(role);
  }
}

function renderModelTooltip(node: any, tooltip: HTMLElement): void {
  const attrs = node.attributes;

  const name = document.createElement('div');
  name.className = 'tooltip-name';
  name.textContent = node.displayName;
  tooltip.appendChild(name);

  if (attrs.dimensions && attrs.dimensions.initiation) {
    const initiation = document.createElement('div');
    initiation.className = 'tooltip-field';
    initiation.textContent = `Initiation: ${attrs.dimensions.initiation}`;
    tooltip.appendChild(initiation);
  }

  if (attrs.habit_burden) {
    const burden = document.createElement('div');
    burden.className = 'tooltip-field';
    burden.textContent = `Habit Burden: ${attrs.habit_burden}`;
    tooltip.appendChild(burden);
  }
}

function renderMechanismTooltip(node: any, tooltip: HTMLElement): void {
  const name = document.createElement('div');
  name.className = 'tooltip-name';
  name.textContent = node.displayName;
  tooltip.appendChild(name);
}

function renderMetaChallengeTooltip(node: any, tooltip: HTMLElement): void {
  const name = document.createElement('div');
  name.className = 'tooltip-name';
  name.textContent = node.displayName;
  tooltip.appendChild(name);
}

function renderFoundationTooltip(node: any, tooltip: HTMLElement): void {
  const attrs = node.attributes;

  const name = document.createElement('div');
  name.className = 'tooltip-name';
  name.textContent = node.displayName;
  tooltip.appendChild(name);

  if (attrs.complexity) {
    const complexity = document.createElement('div');
    complexity.className = 'tooltip-field';
    complexity.textContent = `Complexity: ${attrs.complexity}`;
    tooltip.appendChild(complexity);
  }

  if (attrs.build_or_buy) {
    const buildBuy = document.createElement('div');
    buildBuy.className = 'tooltip-field';
    buildBuy.textContent = `${attrs.build_or_buy}`;
    tooltip.appendChild(buildBuy);
  }
}

function renderImplicationTooltip(node: any, tooltip: HTMLElement): void {
  const attrs = node.attributes;

  const name = document.createElement('div');
  name.className = 'tooltip-name';
  name.textContent = node.displayName;
  tooltip.appendChild(name);

  if (attrs.type) {
    const type = document.createElement('div');
    type.className = 'tooltip-field';
    type.textContent = `Type: ${attrs.type}`;
    tooltip.appendChild(type);
  }
}

function renderClaimTooltip(node: any, tooltip: HTMLElement): void {
  const attrs = node.attributes;

  if (attrs.statement) {
    const statement = document.createElement('div');
    statement.className = 'tooltip-statement';
    statement.textContent = attrs.statement;
    tooltip.appendChild(statement);
  } else {
    const name = document.createElement('div');
    name.className = 'tooltip-name';
    name.textContent = node.displayName;
    tooltip.appendChild(name);
  }

  if (attrs.type) {
    const type = document.createElement('div');
    type.className = 'tooltip-field';
    type.textContent = `Type: ${attrs.type}`;
    tooltip.appendChild(type);
  }
}

function renderSourceTooltip(node: any, tooltip: HTMLElement): void {
  const name = document.createElement('div');
  name.className = 'tooltip-name';
  name.textContent = node.displayName;
  tooltip.appendChild(name);
}

function renderClusterTooltip(node: any, tooltip: HTMLElement): void {
  const name = document.createElement('div');
  name.className = 'tooltip-name';
  name.textContent = node.displayName;
  tooltip.appendChild(name);
}
