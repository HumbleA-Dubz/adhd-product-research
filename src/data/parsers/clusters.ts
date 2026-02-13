import { readYaml, clean, toArray } from './utils';

export interface ClusterMember {
  problem: string;
  role: string;
  evidence: string;
}

export interface Cluster {
  key: string;
  id: string;
  type?: string;
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

export function parseClusters(): Cluster[] {
  const raw = readYaml('clusters.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    id: clean(val.id),
    type: val.type ? clean(val.type) : undefined,
    hub: val.hub ? clean(val.hub) : undefined,
    problem: val.problem ? clean(val.problem) : undefined,
    members: val.members
      ? val.members.map((m: any) => ({
          problem: clean(m.problem),
          role: clean(m.role),
          evidence: clean(m.evidence),
        }))
      : undefined,
    primary_mechanism: val.primary_mechanism ? clean(val.primary_mechanism) : undefined,
    causal_direction: val.causal_direction ? clean(val.causal_direction) : undefined,
    affects: val.affects ? toArray(val.affects) : undefined,
    receives_from: val.receives_from ? toArray(val.receives_from) : undefined,
    mechanism: val.mechanism ? clean(val.mechanism) : undefined,
    reason: val.reason ? clean(val.reason) : undefined,
    claims: val.claims ? toArray(val.claims) : undefined,
    derived_from: clean(val.derived_from),
  }));
}
