import * as d3 from 'd3';
import type { Graph } from '../graph/graph';
import type { Store } from '../state/store';
import type { GraphNode } from '../graph/types';
import { computePositions, getCanvasDimensions, type Position } from './layout';
import { renderEdges, renderClusterBoundaries } from './edges';

// Node radius by type
const NODE_RADIUS = {
  problem: 20,
  model: 20,
  mechanism: 18,
  meta_challenge: 18,
  foundation: 18,
  implication: 16,
  cluster: 0, // Clusters don't have circles
  claim: 0,
  source: 0,
};

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
 * Render node circles and labels.
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

  // Render circles
  nodeGroups
    .append('circle')
    .attr('r', (d) => NODE_RADIUS[d.type] || 18)
    .attr('stroke-width', (d) => {
      // Hub problems get a bolder border
      if (d.type === 'problem' && d.attributes.role === 'hub') return 2;
      return 1;
    })
    .attr('stroke', '#333');

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

  // Render labels
  const labelGroups = labelLayer
    .selectAll<SVGGElement, GraphNode>('.node-label-group')
    .data(nodes, (d: GraphNode) => d.id)
    .join('g')
    .attr('class', 'node-label-group')
    .attr('transform', (d) => {
      const pos = positions.get(d.id);
      return pos ? `translate(${pos.x}, ${pos.y})` : '';
    });

  // Primary label (displayName)
  labelGroups
    .append('text')
    .attr('class', 'node-label')
    .attr('dy', (d) => NODE_RADIUS[d.type] + 14)
    .text((d) => truncateText(d.displayName, 40));

  // Secondary label (secondaryId)
  labelGroups
    .append('text')
    .attr('class', 'node-secondary-id')
    .attr('dy', (d) => NODE_RADIUS[d.type] + 26)
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
    // This will be fully implemented during integration
    // For now, just set up the subscription structure
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
