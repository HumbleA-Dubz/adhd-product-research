// TypeScript interfaces matching the YAML schema exactly

export interface Problem {
  key: string; // The YAML key (e.g. "Time Estimation and Time Blindness")
  id: string;
  plain_language: string;
  scores: {
    frequency: number;
    differentiation: number;
    connectedness: number;
    total: number;
  };
  evidence_tier: number;
  mechanisms: string[];
  cluster: string;
  role: string;
  claims: string[];
  derived_from: string;
}

export interface ClusterMember {
  problem: string;
  role: string;
  evidence: string;
}

export interface Cluster {
  key: string;
  id: string;
  type?: string; // amplifier, convergence_point, standalone
  hub?: string;
  problem?: string;
  members?: ClusterMember[];
  primary_mechanism?: string;
  causal_direction?: string;
  affects?: string[];
  receives_from?: string[];
  mechanism?: string;
  reason?: string;
  claims?: string[];
  derived_from: string;
}

export interface Mechanism {
  key: string;
  id: string;
  plain_language: string;
  affects_problems: string[];
  underlies_challenges: string[];
  favours_models: string[];
  disfavours_models: string[];
  variability: string;
  evidence: string[];
  does_not_explain: string;
  note_on_distinction?: string;
}

export interface EngagementModel {
  key: string;
  id: string;
  plain_language: string;
  dimensions: {
    initiation: string;
    effort: string;
    timing: string;
    continuity: string;
  };
  retention_risk: string;
  habit_burden: string;
  primary_problems: string[];
  secondary_problems: string[];
  meta_challenge_vulnerability: Record<string, string>;
  claims: string[];
  derived_from: string;
}

export interface MetaChallenge {
  key: string;
  id: string;
  plain_language: string;
  severity: string;
  evidence_tier: string;
  clusters_affected: string[];
  claims: string[];
  favours_models?: string[];
  disfavours_models?: string[];
  key_evidence?: string;
  compound_effects?: {
    amplifies?: string[];
    amplified_by?: string[];
  };
  derived_from: string;
}

export interface Foundation {
  key: string;
  id: string;
  required_by: {
    required: string[];
    optional: string[];
  };
  purpose: string;
  complexity: string;
  build_or_buy: string;
  specific_capabilities: string[];
  claims?: string[];
  note?: string;
}

export interface Claim {
  key: string; // C001, C002, etc.
  statement: string;
  type: 'observation' | 'interpretation' | 'synthesis' | 'caveat';
  sources: string[];
  relationships?: {
    supports?: string[];
    challenged_by?: string[];
    depends_on?: string[];
  };
  comments?: string;
}

export interface Source {
  key: string;
  name: string;
  description?: string;
  type: string;
  evidence_tier: string;
  url?: string;
  cited_in: string[];
  limitations?: string;
}

export interface Implication {
  key: string; // IMP01, IMP02, etc.
  name: string;
  type: 'structural_constraint' | 'paradox' | 'tension' | 'decision_boundary';
  statement: string;
  evidence: string[];
  derived_from: string;
  affects: string[];
}

export type CompatibilityRating = 'S' | 'P' | 'X';
export type VulnerabilityRating = 'H' | 'M' | 'L';

export interface CompatibilityRow {
  key: string; // Cluster or problem name
  ratings: Record<string, CompatibilityRating>;
}

export interface VulnerabilityRow {
  modelKey: string;
  ratings: Record<string, VulnerabilityRating>;
  summary: string;
}

export interface AllData {
  problems: Problem[];
  clusters: Cluster[];
  mechanisms: Mechanism[];
  engagementModels: EngagementModel[];
  metaChallenges: MetaChallenge[];
  foundations: Foundation[];
  claims: Claim[];
  sources: Source[];
  implications: Implication[];
  compatibilityMatrix: CompatibilityRow[];
  vulnerabilityMatrix: VulnerabilityRow[];
}
