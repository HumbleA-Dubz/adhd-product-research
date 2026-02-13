import type { GraphNode, GraphEdge, GraphData, EntityType, EdgeType } from './types';

export class Graph {
  private nodes: Map<string, GraphNode>;
  private edges: Map<string, GraphEdge>;
  private edgesFromNode: Map<string, GraphEdge[]>;
  private edgesToNode: Map<string, GraphEdge[]>;

  constructor(data: GraphData) {
    this.nodes = new Map();
    this.edges = new Map();
    this.edgesFromNode = new Map();
    this.edgesToNode = new Map();

    for (const node of data.nodes) {
      this.nodes.set(node.id, node);
      this.edgesFromNode.set(node.id, []);
      this.edgesToNode.set(node.id, []);
    }

    for (const edge of data.edges) {
      this.edges.set(edge.id, edge);
      this.edgesFromNode.get(edge.source)?.push(edge);
      this.edgesToNode.get(edge.target)?.push(edge);
    }
  }

  getNode(id: string): GraphNode | null {
    return this.nodes.get(id) ?? null;
  }

  getNodesByType(type: EntityType): GraphNode[] {
    const result: GraphNode[] = [];
    for (const node of this.nodes.values()) {
      if (node.type === type) result.push(node);
    }
    return result;
  }

  getEdgesFrom(nodeId: string, edgeType?: EdgeType): GraphEdge[] {
    const edges = this.edgesFromNode.get(nodeId) ?? [];
    if (edgeType) return edges.filter(e => e.type === edgeType);
    return edges;
  }

  getEdgesTo(nodeId: string, edgeType?: EdgeType): GraphEdge[] {
    const edges = this.edgesToNode.get(nodeId) ?? [];
    if (edgeType) return edges.filter(e => e.type === edgeType);
    return edges;
  }

  getNeighbours(nodeId: string, depth: number = 1): GraphNode[] {
    const visited = new Set<string>([nodeId]);
    let frontier = new Set<string>([nodeId]);

    for (let d = 0; d < depth; d++) {
      const nextFrontier = new Set<string>();
      for (const nid of frontier) {
        for (const edge of this.getEdgesFrom(nid)) {
          if (!visited.has(edge.target)) {
            visited.add(edge.target);
            nextFrontier.add(edge.target);
          }
        }
        for (const edge of this.getEdgesTo(nid)) {
          if (!visited.has(edge.source)) {
            visited.add(edge.source);
            nextFrontier.add(edge.source);
          }
        }
      }
      frontier = nextFrontier;
    }

    visited.delete(nodeId);
    const result: GraphNode[] = [];
    for (const id of visited) {
      const node = this.nodes.get(id);
      if (node) result.push(node);
    }
    return result;
  }

  getEdgesByType(type: EdgeType): GraphEdge[] {
    const result: GraphEdge[] = [];
    for (const edge of this.edges.values()) {
      if (edge.type === type) result.push(edge);
    }
    return result;
  }

  getAllNodes(): GraphNode[] {
    return Array.from(this.nodes.values());
  }

  getAllEdges(): GraphEdge[] {
    return Array.from(this.edges.values());
  }

  getEdgeBetween(sourceId: string, targetId: string, type?: EdgeType): GraphEdge | null {
    const edges = this.edgesFromNode.get(sourceId) ?? [];
    for (const edge of edges) {
      if (edge.target === targetId && (!type || edge.type === type)) {
        return edge;
      }
    }
    return null;
  }
}
