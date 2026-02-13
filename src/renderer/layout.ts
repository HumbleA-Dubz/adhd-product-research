import type { Graph } from '../graph/graph';
import type { GraphNode } from '../graph/types';

// Layout configuration - hardcoded from YAML spec
const LAYOUT_CONFIG = {
  canvas: {
    width: 1920,
    height: 1080,
  },
  regions: {
    problems: {
      x: 300,
      y: 80,
      width: 1320,
      height: 500,
      clusters: {
        CL_A: {
          x: 0,
          y: 0,
          width: 400,
          height: 220,
        },
        CL_B: {
          x: 450,
          y: 0,
          width: 400,
          height: 220,
        },
        CL_C: {
          x: 200,
          y: 240,
          width: 400,
          height: 220,
        },
      },
      standalones: {
        x: 0,
        y: 470,
        spacing: 150,
      },
    },
    models: {
      x: 60,
      y: 620,
      columns: 4,
      spacing: 180,
    },
    mechanisms: {
      x: 800,
      y: 620,
      columns: 3,
      spacing: 180,
    },
    meta_challenges: {
      x: 1400,
      y: 620,
      columns: 3,
      spacing: 180,
    },
    foundations: {
      x: 60,
      y: 850,
      columns: 4,
      spacing: 180,
    },
    implications: {
      x: 800,
      y: 850,
      columns: 5,
      spacing: 150,
    },
  },
};

export interface Position {
  x: number;
  y: number;
}

/**
 * Compute absolute positions for all canvasVisible nodes in the graph.
 * - Problems: positioned within cluster regions or as standalones
 * - Clusters: positioned to contain their member problems (computed later)
 * - Other types: grid layout within type-specific regions
 */
export function computePositions(graph: Graph): Map<string, Position> {
  const positions = new Map<string, Position>();
  const nodes = graph.getAllNodes().filter(n => n.canvasVisible);

  // Group nodes by type
  const problems = nodes.filter(n => n.type === 'problem');
  const clusters = nodes.filter(n => n.type === 'cluster');
  const models = nodes.filter(n => n.type === 'model');
  const mechanisms = nodes.filter(n => n.type === 'mechanism');
  const metaChallenges = nodes.filter(n => n.type === 'meta_challenge');
  const foundations = nodes.filter(n => n.type === 'foundation');
  const implications = nodes.filter(n => n.type === 'implication');

  // Position problems (within clusters or as standalones)
  positionProblems(graph, problems, positions);

  // Position clusters (computed from their member positions)
  positionClusters(graph, clusters, positions);

  // Position other types in grid layouts
  positionGrid(models, positions, LAYOUT_CONFIG.regions.models);
  positionGrid(mechanisms, positions, LAYOUT_CONFIG.regions.mechanisms);
  positionGrid(metaChallenges, positions, LAYOUT_CONFIG.regions.meta_challenges);
  positionGrid(foundations, positions, LAYOUT_CONFIG.regions.foundations);
  positionGrid(implications, positions, LAYOUT_CONFIG.regions.implications);

  return positions;
}

/**
 * Position problems within their cluster regions or as standalone problems.
 */
function positionProblems(
  graph: Graph,
  problems: GraphNode[],
  positions: Map<string, Position>
): void {
  const { problems: problemRegion } = LAYOUT_CONFIG.regions;
  const { clusters: clusterConfigs, standalones } = problemRegion;

  // Group problems by cluster membership
  const problemsByCluster = new Map<string, GraphNode[]>();
  const standaloneProblemList: GraphNode[] = [];

  for (const problem of problems) {
    const clusterEdge = graph.getEdgesFrom(problem.id, 'belongs_to')[0];
    if (clusterEdge) {
      const clusterId = clusterEdge.target;
      if (!problemsByCluster.has(clusterId)) {
        problemsByCluster.set(clusterId, []);
      }
      problemsByCluster.get(clusterId)!.push(problem);
    } else {
      standaloneProblemList.push(problem);
    }
  }

  // Position clustered problems
  for (const [clusterId, clusterProblems] of problemsByCluster) {
    const clusterNode = graph.getNode(clusterId);
    if (!clusterNode) continue;

    const clusterKey = clusterNode.secondaryId as keyof typeof clusterConfigs;
    const clusterConfig = clusterConfigs[clusterKey];
    if (!clusterConfig) continue;

    // Base position is region base + cluster offset
    const baseX = problemRegion.x + clusterConfig.x;
    const baseY = problemRegion.y + clusterConfig.y;

    // Find hub and receivers
    const hub = clusterProblems.find(p => p.attributes.role === 'hub');
    const receivers = clusterProblems.filter(p => p.attributes.role === 'receiver');

    // Position hub at center of cluster region
    if (hub) {
      positions.set(hub.id, {
        x: baseX + clusterConfig.width / 2,
        y: baseY + clusterConfig.height / 2,
      });
    }

    // Position receivers around the hub in a circle
    const radius = Math.min(clusterConfig.width, clusterConfig.height) / 3;
    const centerX = baseX + clusterConfig.width / 2;
    const centerY = baseY + clusterConfig.height / 2;
    receivers.forEach((receiver, i) => {
      const angle = (i * 2 * Math.PI) / receivers.length;
      positions.set(receiver.id, {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      });
    });
  }

  // Position standalone problems in a horizontal line
  standaloneProblemList.forEach((problem, i) => {
    positions.set(problem.id, {
      x: problemRegion.x + standalones.x + i * standalones.spacing,
      y: problemRegion.y + standalones.y,
    });
  });
}

/**
 * Position cluster nodes by computing bounding boxes around their member problems.
 * This is a placeholder - actual cluster rendering happens in edges.ts.
 */
function positionClusters(
  graph: Graph,
  clusters: GraphNode[],
  positions: Map<string, Position>
): void {
  // Clusters don't have explicit positions - they're rendered as boundaries
  // around their members. We'll compute their bounds in the rendering phase.
  // For now, set a placeholder position at the center of their members.
  for (const cluster of clusters) {
    const members = graph
      .getEdgesTo(cluster.id, 'belongs_to')
      .map(e => e.source)
      .map(id => positions.get(id))
      .filter(p => p !== undefined) as Position[];

    if (members.length > 0) {
      const avgX = members.reduce((sum, p) => sum + p.x, 0) / members.length;
      const avgY = members.reduce((sum, p) => sum + p.y, 0) / members.length;
      positions.set(cluster.id, { x: avgX, y: avgY });
    }
  }
}

/**
 * Position nodes in a grid layout.
 */
function positionGrid(
  nodes: GraphNode[],
  positions: Map<string, Position>,
  config: { x: number; y: number; columns: number; spacing: number }
): void {
  nodes.forEach((node, i) => {
    const col = i % config.columns;
    const row = Math.floor(i / config.columns);
    positions.set(node.id, {
      x: config.x + col * config.spacing,
      y: config.y + row * config.spacing,
    });
  });
}

/**
 * Get canvas dimensions.
 */
export function getCanvasDimensions(): { width: number; height: number } {
  return LAYOUT_CONFIG.canvas;
}
