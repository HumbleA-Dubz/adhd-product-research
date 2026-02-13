import { readYaml, clean, toArray } from './utils';

export interface Claim {
  key: string;
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

export function parseClaims(): Claim[] {
  const raw = readYaml('claims.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    statement: clean(val.statement),
    type: clean(val.type) as Claim['type'],
    sources: toArray(val.sources),
    relationships: val.relationships
      ? {
          supports: val.relationships.supports ? toArray(val.relationships.supports) : undefined,
          challenged_by: val.relationships.challenged_by ? toArray(val.relationships.challenged_by) : undefined,
          depends_on: val.relationships.depends_on ? toArray(val.relationships.depends_on) : undefined,
        }
      : undefined,
    comments: val.comments ? clean(val.comments) : undefined,
  }));
}
