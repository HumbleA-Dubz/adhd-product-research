import { readYaml, clean, toArray } from './utils';

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

export function parseEngagementModels(): EngagementModel[] {
  const raw = readYaml('engagement_models.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    id: clean(val.id),
    plain_language: clean(val.plain_language),
    dimensions: {
      initiation: clean(val.dimensions?.initiation),
      effort: clean(val.dimensions?.effort),
      timing: clean(val.dimensions?.timing),
      continuity: clean(val.dimensions?.continuity),
    },
    retention_risk: clean(val.retention_risk),
    habit_burden: clean(val.habit_burden),
    primary_problems: toArray(val.primary_problems),
    secondary_problems: toArray(val.secondary_problems),
    meta_challenge_vulnerability: val.meta_challenge_vulnerability ?? {},
    claims: toArray(val.claims),
    derived_from: clean(val.derived_from),
  }));
}
