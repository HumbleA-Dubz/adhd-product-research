import * as d3 from 'd3';
import type { Graph } from '../graph/graph';
import type { GraphEdge } from '../graph/types';
import type { Position } from './layout';

/**
 * Render edges between nodes on the canvas.
 * Only structural edges are visible by default.
 */
export function renderEdges(
  edgeLayer: d3.Selection<SVGGElement, unknown, null, undefined>,
  edges: GraphEdge[],
  positions: Map<string, Position>
): void {
  // Create arrowhead marker for directed edges
  const defs = edgeLayer.append('defs');
  defs
    .append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 8)
    .attr('refY', 5)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto-start-reverse')
    .append('polygon')
    .attr('points', '0 0, 10 5, 0 10')
    .attr('fill', 'var(--edge-structural)');

  // Render each edge
  const edgeSelection = edgeLayer
    .selectAll<SVGLineElement, GraphEdge>('.edge')
    .data(edges, (d: GraphEdge) => d.id)
    .join('line')
    .attr('class', (d) => {
      const classes = ['edge', `edge-${d.type}`];
      if (d.structural) classes.push('edge-structural');
      return classes.join(' ');
    })
    .attr('x1', (d) => positions.get(d.source)?.x ?? 0)
    .attr('y1', (d) => positions.get(d.source)?.y ?? 0)
    .attr('x2', (d) => positions.get(d.target)?.x ?? 0)
    .attr('y2', (d) => positions.get(d.target)?.y ?? 0)
    .attr('marker-end', (d) => (d.directed ? 'url(#arrowhead)' : null));
}

/**
 * Render cluster boundaries as rectangles around member problems.
 */
export function renderClusterBoundaries(
  clusterLayer: d3.Selection<SVGGElement, unknown, null, undefined>,
  graph: Graph,
  positions: Map<string, Position>
): void {
  const clusters = graph.getNodesByType('cluster').filter(c => c.canvasVisible);
  const padding = 30;

  clusterLayer
    .selectAll<SVGRectElement, any>('.cluster-boundary')
    .data(clusters, (d: any) => d.id)
    .join('rect')
    .attr('class', 'cluster-boundary')
    .each(function (clusterNode) {
      // Get member problem positions
      const members = graph
        .getEdgesTo(clusterNode.id, 'belongs_to')
        .map(e => e.source)
        .map(id => positions.get(id))
        .filter(p => p !== undefined) as Position[];

      if (members.length === 0) {
        d3.select(this).attr('display', 'none');
        return;
      }

      // Compute bounding box
      const xs = members.map(p => p.x);
      const ys = members.map(p => p.y);
      const minX = Math.min(...xs) - padding;
      const maxX = Math.max(...xs) + padding;
      const minY = Math.min(...ys) - padding;
      const maxY = Math.max(...ys) + padding;

      // Position the rectangle
      d3.select(this)
        .attr('x', minX)
        .attr('y', minY)
        .attr('width', maxX - minX)
        .attr('height', maxY - minY);
    });
}
