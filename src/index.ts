// ADHD Research Navigator — Main entry point
// Loads graph data, initialises state store, mounts renderer + UI

import { Graph } from './graph/graph';
import { Store } from './state/store';
import type { GraphData } from './graph/types';
import { initRenderer } from './renderer/renderer';
import { initDetailPanel } from './ui/detail-panel';
import { initQuestionBar } from './ui/question-bar';
import { initSearch } from './ui/search';
import { initTooltip } from './ui/tooltip';
import { initModeIndicator } from './ui/mode-indicator';
import { initLegend } from './ui/legend';
import { computeVisualOverrides } from './state/derived';
import * as d3 from 'd3';

async function main() {
  console.log('ADHD Navigator loading...');

  // Load graph data
  const response = await fetch(import.meta.env.BASE_URL + 'data/graph.json');
  if (!response.ok) {
    console.error('Failed to load graph data:', response.status);
    return;
  }
  const data: GraphData = await response.json();
  console.log(`Loaded graph: ${data.metadata.nodeCount} nodes, ${data.metadata.edgeCount} edges`);

  if (data.metadata.warnings.length > 0) {
    console.warn(`Graph has ${data.metadata.warnings.length} warnings`);
  }

  // Create graph and store
  const graph = new Graph(data);
  const store = new Store();

  // Global keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      store.escape();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      store.toggleSearch();
    }
  });

  // Initialise renderer
  initRenderer(graph, store);

  // Initialise UI components
  initDetailPanel(graph, store);
  initQuestionBar(graph, store);
  initSearch(graph, store);
  initTooltip(graph, store);
  initModeIndicator(graph, store);
  initLegend(graph, store);

  // Wire preset visual overrides to renderer
  wirePresetOverrides(graph, store);

  // Run onboarding choreography (staged reveal)
  runOnboardingChoreography();

  // Expose to console for debugging
  (window as any).__graph = graph;
  (window as any).__store = store;

  console.log('ADHD Navigator ready.');
}

/**
 * Select the shape element inside a node group (either circle or rect).
 */
function selectShape(nodeEl: d3.Selection<any, any, any, any>): d3.Selection<any, any, any, any> {
  const circle = nodeEl.select('circle');
  if (!circle.empty()) return circle;
  return nodeEl.select('rect');
}

/**
 * Wire preset activation/clearing to SVG visual overrides.
 * Handles both circle (Tier 2+) and rect (Tier 1) node shapes.
 */
function wirePresetOverrides(graph: Graph, store: Store) {
  store.subscribe('preset:activated', (state) => {
    const overrides = computeVisualOverrides(
      state.activePreset,
      state.presetParam,
      graph
    );

    const nodeLayer = d3.select('.node-layer');
    const edgeLayer = d3.select('.edge-layer');

    // Apply node overrides
    nodeLayer.selectAll('.node').each(function () {
      const el = d3.select(this);
      const nodeData = el.datum() as any;
      if (!nodeData) return;

      const shape = selectShape(el);
      const override = overrides.nodeOverrides.get(nodeData.id);

      // Reset previous overrides
      shape
        .style('fill', null)
        .style('stroke', null)
        .style('stroke-width', null)
        .style('opacity', null);
      el.classed('preset-green', false)
        .classed('preset-amber', false)
        .classed('preset-red', false);

      // Remove any existing badge
      el.selectAll('.preset-badge').remove();

      if (override) {
        // Apply fill
        if (override.fill) {
          shape.style('fill', override.fill);
        }

        // Apply border
        if (override.border) {
          shape
            .style('stroke', override.border)
            .style('stroke-width', '3px');
        }

        // Apply opacity
        if (override.opacity !== undefined) {
          el.style('opacity', override.opacity);
        }

        // Apply badge — position above shape
        if (override.badge) {
          let badgeY: number;
          const circle = el.select('circle');
          if (!circle.empty()) {
            const r = parseFloat(circle.attr('r')) || 14;
            badgeY = -r - 6;
          } else {
            const rect = el.select('rect');
            const h = parseFloat(rect.attr('height')) || 34;
            badgeY = -(h / 2) - 6;
          }

          el.append('text')
            .attr('class', 'preset-badge')
            .attr('dy', badgeY)
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('font-weight', '600')
            .attr('fill', override.fill || '#333')
            .text(override.badge);
        }
      } else {
        // No override — ghost this node
        el.style('opacity', 0.3);
      }
    });

    // Apply edge overrides
    edgeLayer.selectAll('.edge').each(function () {
      const el = d3.select(this);
      const edgeData = el.datum() as any;
      if (!edgeData) return;

      const override = overrides.edgeOverrides.get(edgeData.id);

      if (override) {
        if (override.visible === false) {
          el.style('display', 'none');
        } else {
          el.style('display', null);
          if (override.color) el.style('stroke', override.color);
          if (override.width) el.style('stroke-width', `${override.width}px`);
          if (override.opacity !== undefined) el.style('opacity', override.opacity);
          if (override.style === 'dashed') el.style('stroke-dasharray', '5,3');
          else if (override.style === 'dotted') el.style('stroke-dasharray', '2,2');
          else el.style('stroke-dasharray', null);
        }
      }
    });
  });

  store.subscribe('preset:cleared', () => {
    const nodeLayer = d3.select('.node-layer');
    const edgeLayer = d3.select('.edge-layer');

    // Reset all node overrides
    nodeLayer.selectAll('.node').each(function () {
      const el = d3.select(this);
      const shape = selectShape(el);
      shape
        .style('fill', null)
        .style('stroke', null)
        .style('stroke-width', null)
        .style('opacity', null);
      el.style('opacity', null);
      el.classed('preset-green', false)
        .classed('preset-amber', false)
        .classed('preset-red', false);
      el.selectAll('.preset-badge').remove();
    });

    // Reset all edge overrides
    edgeLayer.selectAll('.edge').each(function () {
      const el = d3.select(this);
      el.style('display', null)
        .style('stroke', null)
        .style('stroke-width', null)
        .style('stroke-dasharray', null)
        .style('opacity', null);
    });
  });
}

/**
 * Onboarding choreography — staged reveal sequence.
 * T+0.0s: Canvas skeleton visible (background, chrome)
 * T+0.2s: Cluster boundaries fade in
 * T+0.5s: Brief pause (visual breathing room)
 * T+0.7s: Problem/model nodes stagger in
 * T+1.0s: Tier 2+ nodes fade in
 * T+1.3s: Question bar activates (becomes interactive)
 */
function runOnboardingChoreography(): void {
  const clusterLayer = d3.select('.cluster-layer');
  const nodeLayer = d3.select('.node-layer');
  const labelLayer = d3.select('.label-layer');
  const questionBar = d3.select('#question-bar');

  // Start everything hidden
  clusterLayer.style('opacity', 0);
  nodeLayer.selectAll('.node').style('opacity', 0);
  labelLayer.selectAll('.node-label-group').style('opacity', 0);
  questionBar.style('opacity', 0.3).style('pointer-events', 'none');

  // T+200ms: Cluster boundaries fade in
  clusterLayer
    .transition()
    .delay(200)
    .duration(400)
    .style('opacity', 1);

  // T+700ms: Tier 1 nodes (problems, models) stagger in
  nodeLayer.selectAll('.node-problem, .node-model')
    .transition()
    .delay((_, i) => 700 + i * 30)
    .duration(300)
    .style('opacity', 1);

  // T+1000ms: Tier 2+ nodes fade in
  nodeLayer.selectAll('.node-mechanism, .node-meta_challenge, .node-foundation, .node-implication')
    .transition()
    .delay(1000)
    .duration(300)
    .style('opacity', 1);

  // Labels follow their nodes
  labelLayer.selectAll('.node-label-group')
    .transition()
    .delay(1000)
    .duration(300)
    .style('opacity', 1);

  // T+1300ms: Question bar becomes fully interactive
  questionBar
    .transition()
    .delay(1300)
    .duration(300)
    .style('opacity', 1)
    .on('end', function () {
      d3.select(this).style('pointer-events', null);
    });
}

main();
