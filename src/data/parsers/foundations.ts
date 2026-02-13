import { readYaml, clean, toArray } from './utils';

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

export function parseFoundations(): Foundation[] {
  const raw = readYaml('foundations.yaml');
  return Object.entries(raw).map(([key, val]: [string, any]) => ({
    key,
    id: clean(val.id),
    required_by: {
      required: toArray(val.required_by?.required),
      optional: toArray(val.required_by?.optional),
    },
    purpose: clean(val.purpose),
    complexity: clean(val.complexity),
    build_or_buy: clean(val.build_or_buy),
    specific_capabilities: toArray(val.specific_capabilities),
    claims: val.claims ? toArray(val.claims) : undefined,
    note: val.note ? clean(val.note) : undefined,
  }));
}
