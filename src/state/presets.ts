export interface PresetDefinition {
  name: string;
  label: string;
  parameter: { type: 'model'; label: string } | null;
  nodeRules: NodeRule[];
  edgeRules: EdgeRule[];
  legend: { title: string; entries: { label: string; color: string }[] };
}

export interface NodeRule {
  filter: (nodeId: string, graph: any) => boolean;
  compute: (nodeId: string, graph: any, param?: string) => {
    fill?: string;
    badge?: string;
    opacity?: number;
    border?: string;
  };
}

export interface EdgeRule {
  filter: (edge: any, graph: any) => boolean;
  compute: (edge: any, graph: any, param?: string) => {
    visible?: boolean;
    color?: string;
    style?: 'solid' | 'dashed' | 'dotted';
    width?: number;
    opacity?: number;
  };
}

// Preset 1: Evidence Strength
const evidenceStrengthPreset: PresetDefinition = {
  name: 'evidence_strength',
  label: 'Evidence Strength',
  parameter: null,
  nodeRules: [
    {
      filter: (nodeId, graph) => {
        const node = graph.getNode(nodeId);
        return node && node.attributes.evidence_tier_normalised !== undefined;
      },
      compute: (nodeId, graph) => {
        const node = graph.getNode(nodeId);
        if (!node) return {};

        const tier = node.attributes.evidence_tier_normalised;
        if (tier === undefined) return {};

        // Map tier to color (1 = darkest blue, 4 = lightest blue)
        const colors = [
          '#1D4ED8', // Tier 1
          '#3B82F6', // Tier 2
          '#93C5FD', // Tier 3
          '#DBEAFE'  // Tier 4
        ];

        const tierIndex = Math.round(tier) - 1;
        const fill = colors[Math.max(0, Math.min(3, tierIndex))];
        const badge = `Tier ${Math.round(tier)}`;

        return { fill, badge };
      }
    }
  ],
  edgeRules: [],
  legend: {
    title: 'Evidence Tier',
    entries: [
      { label: 'Tier 1 (Strongest)', color: '#1D4ED8' },
      { label: 'Tier 2', color: '#3B82F6' },
      { label: 'Tier 3', color: '#93C5FD' },
      { label: 'Tier 4 (Weakest)', color: '#DBEAFE' }
    ]
  }
};

// Preset 2: Model Fit
const modelFitPreset: PresetDefinition = {
  name: 'model_fit',
  label: 'Model Fit',
  parameter: { type: 'model', label: 'Select Model' },
  nodeRules: [
    {
      // Color problems based on compatibility rating
      filter: (nodeId, graph) => {
        const node = graph.getNode(nodeId);
        return node && node.type === 'problem';
      },
      compute: (nodeId, graph, param) => {
        if (!param) return {};

        const node = graph.getNode(nodeId);
        if (!node) return {};

        // Find compatible_with edge from this problem to the selected model
        const compatEdge = graph.getEdgeBetween(nodeId, param, 'compatible_with');
        if (!compatEdge) return {};

        const rating = compatEdge.attributes.rating;
        if (!rating) return {};

        const colorMap: Record<string, string> = {
          'S': '#16A34A', // Green
          'P': '#F59E0B', // Amber
          'X': '#DC2626'  // Red
        };

        return {
          fill: colorMap[rating] || undefined,
          badge: rating
        };
      }
    },
    {
      // Highlight selected model
      filter: (nodeId, graph) => true,
      compute: (nodeId, graph, param) => {
        if (!param || nodeId !== param) return {};
        return { border: '#1D4ED8' };
      }
    }
  ],
  edgeRules: [
    {
      // Show compatible_with edges to selected model
      filter: (edge, graph) => edge.type === 'compatible_with',
      compute: (edge, graph, param) => {
        if (!param || edge.target !== param) return { visible: false };

        const rating = edge.attributes.rating;
        const style = rating === 'S' ? 'solid' : 'dashed';

        return { visible: true, style, opacity: 1 };
      }
    }
  ],
  legend: {
    title: 'Compatibility',
    entries: [
      { label: 'S - Strong fit', color: '#16A34A' },
      { label: 'P - Partial fit', color: '#F59E0B' },
      { label: 'X - Poor fit', color: '#DC2626' }
    ]
  }
};

// Preset 3: Shared Mechanisms
const sharedMechanismsPreset: PresetDefinition = {
  name: 'shared_mechanisms',
  label: 'Shared Mechanisms',
  parameter: null,
  nodeRules: [
    {
      filter: (nodeId, graph) => {
        const node = graph.getNode(nodeId);
        return node && node.type === 'problem';
      },
      compute: (nodeId, graph) => {
        const node = graph.getNode(nodeId);
        if (!node) return {};

        // Find explained_by edges
        const mechEdges = graph.getEdgesFrom(nodeId, 'explained_by');
        if (mechEdges.length === 0) return {};

        // Get first mechanism for coloring
        const mechNode = graph.getNode(mechEdges[0].target);
        if (!mechNode) return {};

        // Assign color based on mechanism ID
        const mechanismColors: Record<string, string> = {
          'mechanism-MECH01': '#8B5CF6', // Purple
          'mechanism-MECH02': '#EC4899', // Pink
          'mechanism-MECH03': '#F59E0B', // Amber
          'mechanism-MECH04': '#10B981', // Green
          'mechanism-MECH05': '#3B82F6', // Blue
          'mechanism-MECH06': '#EF4444', // Red
        };

        const fill = mechanismColors[mechNode.id] || '#6B7280';
        const badge = mechNode.displayName;

        return { fill, badge };
      }
    }
  ],
  edgeRules: [
    {
      filter: (edge, graph) => edge.type === 'explained_by',
      compute: (edge, graph) => {
        return { visible: true, opacity: 1 };
      }
    }
  ],
  legend: {
    title: 'Mechanisms',
    entries: [
      { label: 'Problems grouped by mechanism', color: '#6B7280' }
    ]
  }
};

// Preset 4: Vulnerability
const vulnerabilityPreset: PresetDefinition = {
  name: 'vulnerability',
  label: 'Vulnerability',
  parameter: { type: 'model', label: 'Select Model' },
  nodeRules: [
    {
      // Color meta-challenges by vulnerability rating
      filter: (nodeId, graph) => {
        const node = graph.getNode(nodeId);
        return node && node.type === 'meta_challenge';
      },
      compute: (nodeId, graph, param) => {
        if (!param) return {};

        const node = graph.getNode(nodeId);
        if (!node) return {};

        // Find vulnerable_to edge from selected model to this meta-challenge
        const vulnEdge = graph.getEdgeBetween(param, nodeId, 'vulnerable_to');
        if (!vulnEdge) return {};

        const rating = vulnEdge.attributes.rating;
        if (!rating) return {};

        const colorMap: Record<string, string> = {
          'H': '#DC2626', // Red
          'M': '#F59E0B', // Amber
          'L': '#16A34A'  // Green
        };

        return {
          fill: colorMap[rating] || undefined,
          badge: rating
        };
      }
    },
    {
      // Highlight selected model
      filter: (nodeId, graph) => true,
      compute: (nodeId, graph, param) => {
        if (!param || nodeId !== param) return {};
        return { border: '#1D4ED8' };
      }
    }
  ],
  edgeRules: [
    {
      // Show vulnerable_to edges from selected model
      filter: (edge, graph) => edge.type === 'vulnerable_to',
      compute: (edge, graph, param) => {
        if (!param || edge.source !== param) return { visible: false };
        return { visible: true, opacity: 1 };
      }
    }
  ],
  legend: {
    title: 'Vulnerability Rating',
    entries: [
      { label: 'H - High', color: '#DC2626' },
      { label: 'M - Medium', color: '#F59E0B' },
      { label: 'L - Low', color: '#16A34A' }
    ]
  }
};

// Export all presets
export const PRESETS: PresetDefinition[] = [
  evidenceStrengthPreset,
  modelFitPreset,
  sharedMechanismsPreset,
  vulnerabilityPreset
];

export function getPreset(name: string): PresetDefinition | null {
  return PRESETS.find(p => p.name === name) || null;
}
