import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import type {
  AllData,
  Problem,
  Cluster,
  Mechanism,
  EngagementModel,
  MetaChallenge,
  Foundation,
  Claim,
  Source,
  Implication,
  CompatibilityRow,
  VulnerabilityRow,
  CompatibilityRating,
  VulnerabilityRating,
} from './types';

const DATA_DIR = path.join(process.cwd(), '3 - The map', 'System_of_Record');

function readYaml(filename: string): Record<string, any> {
  const filePath = path.join(DATA_DIR, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  // Normalize line endings
  content = content.replace(/\r\n/g, '\n');
  // Fix YAML edge case: list items starting with quotes (e.g. - "Fresh start" capability)
  // are misinterpreted as double-quoted scalars. Wrap the whole value in single quotes.
  content = content.replace(
    /^(\s*-\s)"([^"]+)"(.*)$/gm,
    (_, prefix, quoted, rest) => `${prefix}'"${quoted}"${rest}'`
  );
  return yaml.load(content) as Record<string, any>;
}

function clean(val: any): string {
  if (typeof val === 'string') return val.trim();
  if (val == null) return '';
  return String(val).trim();
}

function toArray(val: any): string[] {
  if (Array.isArray(val)) return val.map((v: any) => clean(v));
  if (val == null) return [];
  return [clean(val)];
}

function parseProblems(): Problem[] {
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

function parseClusters(): Cluster[] {
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

function parseMechanisms(): Mechanism[] {
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

function parseEngagementModels(): EngagementModel[] {
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

function parseMetaChallenges(): MetaChallenge[] {
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

function parseFoundations(): Foundation[] {
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

function parseClaims(): Claim[] {
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

function parseSources(): Source[] {
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

function parseImplications(): Implication[] {
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

function parseCompatibility(): { matrix: CompatibilityRow[]; vulnerability: VulnerabilityRow[] } {
  const raw = readYaml('compatibility.yaml');

  const matrix: CompatibilityRow[] = [];
  const vulnerability: VulnerabilityRow[] = [];

  for (const [key, val] of Object.entries(raw)) {
    if (key === 'meta_challenge_vulnerability') {
      // Parse vulnerability matrix
      for (const [modelKey, mcData] of Object.entries(val as Record<string, any>)) {
        const ratings: Record<string, VulnerabilityRating> = {};
        let summary = '';
        for (const [mcName, rating] of Object.entries(mcData as Record<string, any>)) {
          if (mcName === 'summary') {
            summary = clean(rating);
          } else {
            ratings[mcName] = clean(rating) as VulnerabilityRating;
          }
        }
        vulnerability.push({ modelKey, ratings, summary });
      }
    } else {
      // Parse compatibility rows
      const ratings: Record<string, CompatibilityRating> = {};
      for (const [modelName, rating] of Object.entries(val as Record<string, any>)) {
        ratings[modelName] = clean(rating) as CompatibilityRating;
      }
      matrix.push({ key, ratings });
    }
  }

  return { matrix, vulnerability };
}

export function loadAllData(): AllData {
  const { matrix, vulnerability } = parseCompatibility();

  const data = {
    problems: parseProblems(),
    clusters: parseClusters(),
    mechanisms: parseMechanisms(),
    engagementModels: parseEngagementModels(),
    metaChallenges: parseMetaChallenges(),
    foundations: parseFoundations(),
    claims: parseClaims(),
    sources: parseSources(),
    implications: parseImplications(),
    compatibilityMatrix: matrix,
    vulnerabilityMatrix: vulnerability,
  };

  // Strip undefined values (Next.js getStaticProps requires JSON-serializable data)
  return JSON.parse(JSON.stringify(data));
}
