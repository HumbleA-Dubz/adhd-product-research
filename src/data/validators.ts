import type { GraphNode, GraphEdge } from '../graph/types';

export interface ValidationResult {
  warnings: string[];
  stats: {
    nodes: Record<string, number>;
    edges: Record<string, number>;
    orphanNodes: string[];
    duplicateEdges: string[];
  };
}

export function validateGraph(nodes: GraphNode[], edges: GraphEdge[]): ValidationResult {
  const warnings: string[] = [];
  const stats = {
    nodes: {} as Record<string, number>,
    edges: {} as Record<string, number>,
    orphanNodes: [] as string[],
    duplicateEdges: [] as string[],
  };

  // Count nodes by type
  for (const node of nodes) {
    stats.nodes[node.type] = (stats.nodes[node.type] || 0) + 1;
  }

  // Count edges by type
  for (const edge of edges) {
    stats.edges[edge.type] = (stats.edges[edge.type] || 0) + 1;
  }

  // Check expected counts (from instructions)
  const expectedCounts = {
    problem: 13,
    mechanism: 6,
    model: 8,
    meta_challenge: 5,
    foundation: 7,
  };

  for (const [type, expectedCount] of Object.entries(expectedCounts)) {
    const actualCount = stats.nodes[type] || 0;
    if (actualCount !== expectedCount) {
      warnings.push(
        `Unexpected ${type} count: expected ${expectedCount}, got ${actualCount}`
      );
    }
  }

  // Find orphan nodes (nodes with no edges)
  const nodeIds = new Set(nodes.map((n) => n.id));
  const connectedNodes = new Set<string>();
  for (const edge of edges) {
    connectedNodes.add(edge.source);
    connectedNodes.add(edge.target);
  }

  for (const nodeId of nodeIds) {
    if (!connectedNodes.has(nodeId)) {
      stats.orphanNodes.push(nodeId);
      warnings.push(`Orphan node (no edges): ${nodeId}`);
    }
  }

  // Find duplicate edges
  const edgeKeys = new Set<string>();
  for (const edge of edges) {
    const key = `${edge.source}->${edge.target}:${edge.type}`;
    if (edgeKeys.has(key)) {
      stats.duplicateEdges.push(key);
      warnings.push(`Duplicate edge: ${key}`);
    }
    edgeKeys.add(key);
  }

  return { warnings, stats };
}
