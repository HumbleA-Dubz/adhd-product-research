import { readYaml, clean, toArray } from './utils';

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

export function parseSources(): Source[] {
  const raw = readYaml('sources.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    name: clean(val.name),
    description: val.description ? clean(val.description) : undefined,
    type: clean(val.type),
    evidence_tier: clean(val.evidence_tier),
    url: val.url ? clean(val.url) : undefined,
    cited_in: toArray(val.cited_in),
    limitations: val.limitations ? clean(val.limitations) : undefined,
  }));
}
