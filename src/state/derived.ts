import { Graph } from '../graph/graph';
import { PRESETS, type PresetDefinition } from './presets';

export interface NodeOverride {
  fill?: string;
  border?: string;
  opacity?: number;
  label?: string;
  badge?: string;
}

export interface EdgeOverride {
  visible?: boolean;
  color?: string;
  style?: 'solid' | 'dashed' | 'dotted';
  width?: number;
  label?: string;
  opacity?: number;
}

export interface VisualOverrides {
  nodeOverrides: Map<string, NodeOverride>;
  edgeOverrides: Map<string, EdgeOverride>;
  legend: { title: string; entries: { label: string; color: string }[] } | null;
}

export function computeVisualOverrides(
  presetName: string | null,
  presetParam: string | null,
  graph: Graph
): VisualOverrides {
  // Return empty overrides if no preset active
  if (!presetName) {
    return {
      nodeOverrides: new Map(),
      edgeOverrides: new Map(),
      legend: null
    };
  }

  // Find the preset
  const preset = PRESETS.find(p => p.name === presetName);
  if (!preset) {
    console.warn(`Preset not found: ${presetName}`);
    return {
      nodeOverrides: new Map(),
      edgeOverrides: new Map(),
      legend: null
    };
  }

  const nodeOverrides = new Map<string, NodeOverride>();
  const edgeOverrides = new Map<string, EdgeOverride>();

  // Apply node rules
  const allNodes = graph.getAllNodes();
  for (const node of allNodes) {
    for (const rule of preset.nodeRules) {
      if (rule.filter(node.id, graph)) {
        const override = rule.compute(node.id, graph, presetParam || undefined);
        if (Object.keys(override).length > 0) {
          const existing = nodeOverrides.get(node.id) || {};
          nodeOverrides.set(node.id, { ...existing, ...override });
        }
      }
    }
  }

  // Apply edge rules
  const allEdges = graph.getAllEdges();
  for (const edge of allEdges) {
    for (const rule of preset.edgeRules) {
      if (rule.filter(edge, graph)) {
        const override = rule.compute(edge, graph, presetParam || undefined);
        if (Object.keys(override).length > 0) {
          const existing = edgeOverrides.get(edge.id) || {};
          edgeOverrides.set(edge.id, { ...existing, ...override });
        }
      }
    }
  }

  // Build dynamic legend for shared_mechanisms
  let legend = preset.legend;
  if (presetName === 'shared_mechanisms') {
    // Collect unique mechanisms from visible problems
    const mechanisms = new Map<string, { name: string; color: string }>();

    for (const node of allNodes) {
      if (node.type === 'problem') {
        const override = nodeOverrides.get(node.id);
        if (override && override.fill && override.badge) {
          if (!mechanisms.has(override.badge)) {
            mechanisms.set(override.badge, {
              name: override.badge,
              color: override.fill
            });
          }
        }
      }
    }

    if (mechanisms.size > 0) {
      legend = {
        title: 'Mechanisms',
        entries: Array.from(mechanisms.values()).map(m => ({
          label: m.name,
          color: m.color
        }))
      };
    }
  }

  return {
    nodeOverrides,
    edgeOverrides,
    legend
  };
}
