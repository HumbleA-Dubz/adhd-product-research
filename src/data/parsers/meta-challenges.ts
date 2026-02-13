import { readYaml, clean, toArray } from './utils';

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

export function parseMetaChallenges(): MetaChallenge[] {
  const raw = readYaml('meta_challenges.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    id: clean(val.id),
    plain_language: clean(val.plain_language),
    severity: clean(val.severity),
    evidence_tier: clean(val.evidence_tier),
    clusters_affected: toArray(val.clusters_affected),
    claims: toArray(val.claims),
    favours_models: val.favours_models ? toArray(val.favours_models) : undefined,
    disfavours_models: val.disfavours_models ? toArray(val.disfavours_models) : undefined,
    key_evidence: val.key_evidence ? clean(val.key_evidence) : undefined,
    compound_effects: val.compound_effects
      ? {
          amplifies: val.compound_effects.amplifies ? toArray(val.compound_effects.amplifies) : undefined,
          amplified_by: val.compound_effects.amplified_by ? toArray(val.compound_effects.amplified_by) : undefined,
        }
      : undefined,
    derived_from: clean(val.derived_from),
  }));
}
