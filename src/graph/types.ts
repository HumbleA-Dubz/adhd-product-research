// Entity and edge types matching the ADHD research dataset

export type EntityType =
  | 'problem'
  | 'mechanism'
  | 'model'
  | 'meta_challenge'
  | 'foundation'
  | 'implication'
  | 'claim'
  | 'source'
  | 'cluster';

export type EdgeType =
  | 'belongs_to'
  | 'explained_by'
  | 'evidenced_by'
  | 'compatible_with'
  | 'vulnerable_to'
  | 'requires'
  | 'cites'
  | 'derived_from'
  | 'affects'
  | 'favours'
  | 'disfavours'
  | 'supports'
  | 'underlies'
  | 'amplifies';

export interface GraphNode {
  id: string;
  type: EntityType;
  displayName: string;
  secondaryId: string;
  canvasVisible: boolean;
  attributes: Record<string, any>;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
  directed: boolean;
  structural: boolean;
  attributes: Record<string, any>;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
  metadata: {
    nodeCount: number;
    edgeCount: number;
    entityTypes: string[];
    edgeTypes: string[];
    warnings: string[];
    buildTime: string;
  };
}
