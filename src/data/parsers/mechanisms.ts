import { readYaml, clean, toArray } from './utils';

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

export function parseMechanisms(): Mechanism[] {
  const raw = readYaml('mechanisms.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    id: clean(val.id),
    plain_language: clean(val.plain_language),
    affects_problems: toArray(val.affects_problems),
    underlies_challenges: toArray(val.underlies_challenges),
    favours_models: toArray(val.favours_models),
    disfavours_models: toArray(val.disfavours_models),
    variability: clean(val.variability),
    evidence: toArray(val.evidence),
    does_not_explain: clean(val.does_not_explain),
    note_on_distinction: val.note_on_distinction ? clean(val.note_on_distinction) : undefined,
  }));
}
