import { readYaml, clean, toArray } from './utils';

export interface Problem {
  key: string;
  id: string;
  plain_language: string;
  scores: {
    frequency: number;
    differentiation: number;
    connectedness: number;
    total: number;
  };
  evidence_tier: number | string;
  mechanisms: string[];
  cluster: string;
  role: string;
  claims: string[];
  derived_from: string;
}

export function parseProblems(): Problem[] {
  const raw = readYaml('problems.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    id: clean(val.id),
    plain_language: clean(val.plain_language),
    scores: {
      frequency: val.scores?.frequency ?? 0,
      differentiation: val.scores?.differentiation ?? 0,
      connectedness: val.scores?.connectedness ?? 0,
      total: val.scores?.total ?? 0,
    },
    evidence_tier: val.evidence_tier ?? 0,
    mechanisms: toArray(val.mechanisms),
    cluster: clean(val.cluster),
    role: clean(val.role),
    claims: toArray(val.claims),
    derived_from: clean(val.derived_from),
  }));
}
