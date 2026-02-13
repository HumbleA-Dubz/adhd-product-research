import * as d3 from 'd3';
import type { Graph } from '../graph/graph';
import type { Store } from '../state/store';
import type { GraphNode } from '../graph/types';
import { computePositions, getCanvasDimensions, type Position } from './layout';
import { renderEdges, renderClusterBoundaries } from './edges';

// Tier 1 entities use rounded rectangles (problems, models)
const TIER1_TYPES = new Set(['problem', 'model']);

// Rounded rectangle dimensions for Tier 1 nodes
const RECT_DIMS = {
  problem: { width: 140, height: 36, rx: 8 },
  model: { width: 130, height: 34, rx: 8 },
};

// Circle radius for Tier 2+ nodes
const CIRCLE_RADIUS: Record<string, number> = {
  mechanism: 16,
  meta_challenge: 16,
  foundation: 14,
  implication: 12,
};

/**
 * Whether a node type uses a rounded rectangle (Tier 1) or circle (Tier 2+).
 */
function isTier1(type: string): boolean {
  return TIER1_TYPES.has(type);
}

/**
 * Get the shape dimensions for a node, used for edge attachment and hit testing.
 */
export function getNodeBounds(type: string): { width: number; height: number } {
  if (isTier1(type)) {
    const dims = RECT_DIMS[type as keyof typeof RECT_DIMS] || { width: 130, height: 34 };
    return dims;
  }
  const r = CIRCLE_RADIUS[type] || 14;
  return { width: r * 2, height: r * 2 };
}

/**
 * Initialize the SVG renderer for the graph.
 * Sets up canvas, layers, zoom, and wires event handlers to the store.
 */
export function initRenderer(graph: Graph, store: Store): void {
  const container = d3.select('#canvas-container');
  const canvasDims = getCanvasDimensions();

  // Clear any existing SVG
  container.selectAll('*').remove();

  // Create SVG
  const svg = container
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', `0 0 ${canvasDims.width} ${canvasDims.height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('class', 'canvas-root');

  // Create root group for zoom/pan
  const rootGroup = svg.append('g').attr('class', 'canvas-zoom-root');

  // Create layers (back to front)
  const edgeLayer = rootGroup.append('g').attr('class', 'edge-layer') as unknown as d3.Selection<SVGGElement, unknown, null, undefined>;
  const clusterLayer = rootGroup.append('g').attr('class', 'cluster-layer') as unknown as d3.Selection<SVGGElement, unknown, null, undefined>;
  const nodeLayer = rootGroup.append('g').attr('class', 'node-layer') as unknown as d3.Selection<SVGGElement, unknown, null, undefined>;
  const labelLayer = rootGroup.append('g').attr('class', 'label-layer') as unknown as d3.Selection<SVGGElement, unknown, null, undefined>;

  // Compute positions for all nodes
  const positions = computePositions(graph);

  // Set up zoom behavior
  const zoom = d3
    .zoom<SVGSVGElement, unknown>()
    .scaleExtent([0.5, 5])
    .on('zoom', (event) => {
      rootGroup.attr('transform', event.transform);
      const { x, y, k } = event.transform;
      store.updateViewport(x, y, k);
    });

  svg.call(zoom as any);

  // Background click handler (deselect)
  svg.on('click', (event) => {
    if (event.target === svg.node()) {
      store.deselectNode();
    }
  });

  // Render edges
  const edges = graph.getAllEdges();
  renderEdges(edgeLayer, edges, positions);

  // Render cluster boundaries
  renderClusterBoundaries(clusterLayer, graph, positions);

  // Render nodes
  const nodes = graph.getAllNodes().filter(n => n.canvasVisible);
  renderNodes(nodeLayer, labelLayer, nodes, positions, store);

  // Fit initial view to show all nodes
  fitViewToNodes(svg as unknown as d3.Selection<SVGSVGElement, unknown, null, undefined>, zoom, positions);

  // Subscribe to store changes
  subscribeToStoreChanges(store, nodeLayer, labelLayer);
}

/**
 * Render nodes with dual form factors:
 * - Tier 1 (problems, models): rounded rectangles with interior labels
 * - Tier 2+ (mechanisms, foundations, meta_challenges, implications): circles with external labels
 */
function renderNodes(
  nodeLayer: d3.Selection<SVGGElement, unknown, null, undefined>,
  labelLayer: d3.Selection<SVGGElement, unknown, null, undefined>,
  nodes: GraphNode[],
  positions: Map<string, Position>,
  store: Store
): void {
  const nodeGroups = nodeLayer
    .selectAll<SVGGElement, GraphNode>('.node')
    .data(nodes, (d: GraphNode) => d.id)
    .join('g')
    .attr('class', (d) => `node node-${d.type}`)
    .attr('transform', (d) => {
      const pos = positions.get(d.id);
      return pos ? `translate(${pos.x}, ${pos.y})` : '';
    });

  // Add role-based CSS classes for hub/amplifier distinction
  nodeGroups.each(function (d) {
    const el = d3.select(this);
    if (d.type === 'problem' && d.attributes?.role) {
      el.classed(`node-role-${d.attributes.role}`, true);
    }
  });

  // Render shapes based on tier
  nodeGroups.each(function (d) {
    const el = d3.select(this);

    if (isTier1(d.type)) {
      // Tier 1: Rounded rectangle centered on position
      const dims = RECT_DIMS[d.type as keyof typeof RECT_DIMS] || { width: 130, height: 34, rx: 8 };
      el.append('rect')
        .attr('x', -dims.width / 2)
        .attr('y', -dims.height / 2)
        .attr('width', dims.width)
        .attr('height', dims.height)
        .attr('rx', dims.rx)
        .attr('ry', dims.rx);

      // Interior label (display name, truncated to fit)
      el.append('text')
        .attr('class', 'node-interior-label')
        .attr('x', 0)
        .attr('y', 0)
        .text(truncateText(d.displayName, 20));

    } else {
      // Tier 2+: Circle
      const r = CIRCLE_RADIUS[d.type] || 14;
      el.append('circle')
        .attr('r', r);
    }
  });

  // Wire event handlers to store
  nodeGroups
    .on('mouseenter', function (event, d) {
      store.hoverNode(d.id);
    })
    .on('mouseleave', function () {
      store.unhoverNode();
    })
    .on('click', function (event, d) {
      event.stopPropagation();
      store.selectNode(d.id);
    });

  // Render external labels (only for Tier 2+ circle nodes)
  const circleNodes = nodes.filter(n => !isTier1(n.type));

  const labelGroups = labelLayer
    .selectAll<SVGGElement, GraphNode>('.node-label-group')
    .data(circleNodes, (d: GraphNode) => d.id)
    .join('g')
    .attr('class', 'node-label-group')
    .attr('transform', (d) => {
      const pos = positions.get(d.id);
      return pos ? `translate(${pos.x}, ${pos.y})` : '';
    });

  // Primary label (displayName) below circle
  labelGroups
    .append('text')
    .attr('class', 'node-label')
    .attr('dy', (d) => (CIRCLE_RADIUS[d.type] || 14) + 14)
    .text((d) => truncateText(d.displayName, 30));

  // Secondary label (secondaryId)
  labelGroups
    .append('text')
    .attr('class', 'node-secondary-id')
    .attr('dy', (d) => (CIRCLE_RADIUS[d.type] || 14) + 26)
    .text((d) => d.secondaryId);
}

/**
 * Subscribe to store state changes and update visual classes.
 */
function subscribeToStoreChanges(
  store: Store,
  nodeLayer: d3.Selection<SVGGElement, unknown, null, undefined>,
  labelLayer: d3.Selection<SVGGElement, unknown, null, undefined>
): void {
  // Handle node selection
  store.subscribe('node:selected', (state) => {
    nodeLayer.selectAll('.node').classed('selected', function () {
      const nodeData = d3.select(this).datum() as GraphNode;
      return nodeData.id === state.selectedNodeId;
    });
  });

  store.subscribe('node:deselected', () => {
    nodeLayer.selectAll('.node').classed('selected', false);
  });

  // Handle preset activation (visual overrides)
  store.subscribe('preset:activated', (state) => {
    console.log('Preset activated:', state.activePreset);
  });

  store.subscribe('preset:cleared', () => {
    // Remove all preset override classes
    nodeLayer
      .selectAll('.node')
      .classed('preset-green', false)
      .classed('preset-amber', false)
      .classed('preset-red', false);
  });
}

/**
 * Fit the initial view to show all nodes.
 */
function fitViewToNodes(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  zoom: d3.ZoomBehavior<SVGSVGElement, unknown>,
  positions: Map<string, Position>
): void {
  if (positions.size === 0) return;

  const posArray = Array.from(positions.values());
  const xs = posArray.map(p => p.x);
  const ys = posArray.map(p => p.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const boundsWidth = maxX - minX;
  const boundsHeight = maxY - minY;
  const boundsCenterX = minX + boundsWidth / 2;
  const boundsCenterY = minY + boundsHeight / 2;

  // Get SVG dimensions
  const svgNode = svg.node();
  if (!svgNode) return;
  const bbox = svgNode.getBoundingClientRect();
  const svgWidth = bbox.width;
  const svgHeight = bbox.height;

  // Calculate scale to fit (with 10% padding)
  const scale = Math.min(
    (svgWidth * 0.9) / boundsWidth,
    (svgHeight * 0.9) / boundsHeight
  );

  // Calculate translation to center the bounds
  const translateX = svgWidth / 2 - boundsCenterX * scale;
  const translateY = svgHeight / 2 - boundsCenterY * scale;

  // Apply initial transform
  const initialTransform = d3.zoomIdentity.translate(translateX, translateY).scale(scale);
  svg.call(zoom.transform as any, initialTransform);
}

/**
 * Truncate text to a maximum length.
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 1) + '…';
}
