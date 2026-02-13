import { readYaml, clean, toArray } from './utils';

export interface Implication {
  key: string;
  name: string;
  type: 'structural_constraint' | 'paradox' | 'tension' | 'decision_boundary';
  statement: string;
  evidence: string[];
  derived_from: string;
  affects: string[];
}

export function parseImplications(): Implication[] {
  const raw = readYaml('implications.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    name: clean(val.name),
    type: clean(val.type) as Implication['type'],
    statement: clean(val.statement),
    evidence: toArray(val.evidence),
    derived_from: clean(val.derived_from),
    affects: toArray(val.affects),
  }));
}
