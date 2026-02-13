import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { parseProblems } from './parsers/problems';
import { parseClusters } from './parsers/clusters';
import { parseMechanisms } from './parsers/mechanisms';
import { parseEngagementModels } from './parsers/models';
import { parseMetaChallenges } from './parsers/meta-challenges';
import { parseFoundations } from './parsers/foundations';
import { parseClaims } from './parsers/claims';
import { parseSources } from './parsers/sources';
import { parseImplications } from './parsers/implications';
import { parseCompatibility } from './parsers/compatibility';
import { readYaml } from './parsers/utils';
import { EntityLookup } from './resolvers';
import { validateGraph } from './validators';
import type { GraphNode, GraphEdge, GraphData, EdgeType } from '../graph/types';

function normalizeEvidenceTier(tier: number | string): number {
  if (typeof tier === 'number') return tier;
  const str = String(tier).trim();

  // "Tier N" format
  const tierMatch = str.match(/^Tier\s+(\d+(?:\.\d+)?)$/i);
  if (tierMatch) return parseFloat(tierMatch[1]);

  // "Tier N-M" format (average)
  const rangeMatch = str.match(/^Tier\s+(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)$/i);
  if (rangeMatch) {
    const n1 = parseFloat(rangeMatch[1]);
    const n2 = parseFloat(rangeMatch[2]);
    return (n1 + n2) / 2;
  }

  // "Derived" format
  if (str.toLowerCase() === 'derived') return 4.0;

  // Already a decimal
  const num = parseFloat(str);
  if (!isNaN(num)) return num;

  return 0;
}

export function buildGraph(): GraphData {
  const warnings: string[] = [];

  // Parse all entities
  const problems = parseProblems();
  const clusters = parseClusters();
  const mechanisms = parseMechanisms();
  const models = parseEngagementModels();
  const metaChallenges = parseMetaChallenges();
  const foundations = parseFoundations();
  const claims = parseClaims();
  const sources = parseSources();
  const implications = parseImplications();
  const { matrix: compatibilityMatrix, vulnerability: vulnerabilityMatrix } = parseCompatibility();

  // Create entity lookup
  const lookup = new EntityLookup(
    problems,
    clusters,
    mechanisms,
    models,
    metaChallenges,
    foundations,
    claims,
    sources,
    implications
  );

  // Build nodes
  const nodes: GraphNode[] = [];

  // Problems
  for (const p of problems) {
    nodes.push({
      id: `problem-${p.id}`,
      type: 'problem',
      displayName: p.key,
      secondaryId: p.id,
      canvasVisible: true,
      attributes: {
        plain_language: p.plain_language,
        scores: p.scores,
        evidence_tier: p.evidence_tier,
        evidence_tier_normalised: normalizeEvidenceTier(p.evidence_tier),
        cluster: p.cluster,
        role: p.role,
        derived_from: p.derived_from,
      },
    });
  }

  // Clusters
  for (const c of clusters) {
    nodes.push({
      id: `cluster-${c.id}`,
      type: 'cluster',
      displayName: c.key,
      secondaryId: c.id,
      canvasVisible: true,
      attributes: {
        type: c.type,
        hub: c.hub,
        problem: c.problem,
        primary_mechanism: c.primary_mechanism,
        causal_direction: c.causal_direction,
        derived_from: c.derived_from,
      },
    });
  }

  // Mechanisms
  for (const m of mechanisms) {
    nodes.push({
      id: `mechanism-${m.id}`,
      type: 'mechanism',
      displayName: m.key,
      secondaryId: m.id,
      canvasVisible: true,
      attributes: {
        plain_language: m.plain_language,
        variability: m.variability,
        does_not_explain: m.does_not_explain,
        note_on_distinction: m.note_on_distinction,
      },
    });
  }

  // Engagement Models
  for (const m of models) {
    nodes.push({
      id: `model-${m.id}`,
      type: 'model',
      displayName: m.key,
      secondaryId: m.id,
      canvasVisible: true,
      attributes: {
        plain_language: m.plain_language,
        dimensions: m.dimensions,
        retention_risk: m.retention_risk,
        habit_burden: m.habit_burden,
        derived_from: m.derived_from,
      },
    });
  }

  // Meta-Challenges
  for (const mc of metaChallenges) {
    nodes.push({
      id: `meta_challenge-${mc.id}`,
      type: 'meta_challenge',
      displayName: mc.key,
      secondaryId: mc.id,
      canvasVisible: true,
      attributes: {
        plain_language: mc.plain_language,
        severity: mc.severity,
        evidence_tier: mc.evidence_tier,
        evidence_tier_normalised: normalizeEvidenceTier(mc.evidence_tier),
        key_evidence: mc.key_evidence,
        compound_effects: mc.compound_effects,
        derived_from: mc.derived_from,
      },
    });
  }

  // Foundations
  for (const f of foundations) {
    nodes.push({
      id: `foundation-${f.id}`,
      type: 'foundation',
      displayName: f.key,
      secondaryId: f.id,
      canvasVisible: true,
      attributes: {
        purpose: f.purpose,
        complexity: f.complexity,
        build_or_buy: f.build_or_buy,
        specific_capabilities: f.specific_capabilities,
        note: f.note,
      },
    });
  }

  // Claims
  for (const c of claims) {
    nodes.push({
      id: `claim-${c.key}`,
      type: 'claim',
      displayName: c.key,
      secondaryId: c.key,
      canvasVisible: false,
      attributes: {
        statement: c.statement,
        claim_type: c.type,
        comments: c.comments,
      },
    });
  }

  // Sources
  for (const s of sources) {
    nodes.push({
      id: `source-${s.key}`,
      type: 'source',
      displayName: s.name,
      secondaryId: s.key,
      canvasVisible: false,
      attributes: {
        description: s.description,
        source_type: s.type,
        evidence_tier: s.evidence_tier,
        evidence_tier_normalised: normalizeEvidenceTier(s.evidence_tier),
        url: s.url,
        limitations: s.limitations,
      },
    });
  }

  // Implications
  for (const i of implications) {
    nodes.push({
      id: `implication-${i.key}`,
      type: 'implication',
      displayName: i.name,
      secondaryId: i.key,
      canvasVisible: true,
      attributes: {
        implication_type: i.type,
        statement: i.statement,
      },
    });
  }

  // Build edges
  const edges: GraphEdge[] = [];
  let edgeCounter = 0;

  function addEdge(
    source: string | null,
    target: string | null,
    type: EdgeType,
    directed: boolean,
    structural: boolean,
    attributes: Record<string, any> = {}
  ) {
    if (!source || !target) return;

    // Extract secondary IDs for edge ID
    const sourceSecondary = source.split('-').slice(1).join('-');
    const targetSecondary = target.split('-').slice(1).join('-');

    edges.push({
      id: `edge-${sourceSecondary}-${targetSecondary}-${type}`,
      source,
      target,
      type,
      directed,
      structural,
      attributes,
    });
  }

  // Edge Type 1: belongs_to (Problem → Cluster)
  for (const cluster of clusters) {
    if (!cluster.members) continue;
    for (const member of cluster.members) {
      const problemId = lookup.resolve(member.problem, warnings);
      const clusterId = `cluster-${cluster.id}`;
      addEdge(problemId, clusterId, 'belongs_to', true, true, {
        role: member.role,
        evidence: member.evidence,
      });
    }
  }

  // Edge Type 2: explained_by (Problem → Mechanism)
  for (const problem of problems) {
    for (const mechRef of problem.mechanisms) {
      const mechId = lookup.resolve(mechRef, warnings);
      const problemId = `problem-${problem.id}`;
      addEdge(problemId, mechId, 'explained_by', true, false);
    }
  }

  // Edge Type 3: evidenced_by (Problem → Claim)
  for (const problem of problems) {
    for (const claimRef of problem.claims) {
      const claimId = lookup.resolve(claimRef, warnings);
      const problemId = `problem-${problem.id}`;
      addEdge(problemId, claimId, 'evidenced_by', true, false);
    }
  }

  // Edge Type 4: compatible_with (Problem → Model)
  // Expand cluster-level ratings to problems
  for (const row of compatibilityMatrix) {
    // Check if this is a cluster
    const clusterMatch = clusters.find(c => c.key === row.key || c.id === row.key);

    if (clusterMatch && clusterMatch.members) {
      // Expand to all member problems
      for (const member of clusterMatch.members) {
        const problemId = lookup.resolve(member.problem, warnings);
        for (const [modelName, rating] of Object.entries(row.ratings)) {
          const modelId = lookup.resolve(modelName, warnings);
          addEdge(problemId, modelId, 'compatible_with', false, false, { rating });
        }
      }
    } else {
      // Direct problem rating
      const problemId = lookup.resolve(row.key, warnings);
      for (const [modelName, rating] of Object.entries(row.ratings)) {
        const modelId = lookup.resolve(modelName, warnings);
        addEdge(problemId, modelId, 'compatible_with', false, false, { rating });
      }
    }
  }

  // Edge Type 5: vulnerable_to (Model → Meta-Challenge)
  for (const row of vulnerabilityMatrix) {
    const modelId = lookup.resolve(row.modelKey, warnings);
    for (const [mcName, rating] of Object.entries(row.ratings)) {
      const mcId = lookup.resolve(mcName, warnings);
      const narrative = row.narratives[mcName] || '';
      addEdge(modelId, mcId, 'vulnerable_to', true, false, { rating, narrative });
    }
  }

  // Edge Type 6: requires (Model → Foundation)
  for (const foundation of foundations) {
    for (const modelRef of foundation.required_by.required) {
      const modelId = lookup.resolve(modelRef, warnings);
      const foundationId = `foundation-${foundation.id}`;
      addEdge(modelId, foundationId, 'requires', true, false, { strength: 'required' });
    }
    for (const modelRef of foundation.required_by.optional) {
      const modelId = lookup.resolve(modelRef, warnings);
      const foundationId = `foundation-${foundation.id}`;
      addEdge(modelId, foundationId, 'requires', true, false, { strength: 'optional' });
    }
  }

  // Edge Type 7: cites (Claim → Source)
  for (const claim of claims) {
    for (const sourceRef of claim.sources) {
      const sourceId = lookup.resolve(sourceRef, warnings);
      const claimId = `claim-${claim.key}`;
      addEdge(claimId, sourceId, 'cites', true, false);
    }
  }

  // Edge Type 8 & 9: derived_from & affects (Implication → various)
  // Read from root config directory
  const configPath = path.join(process.cwd(), 'config', 'implication_edges.yaml');
  let implEdgesConfig: Record<string, any> = {};
  if (fs.existsSync(configPath)) {
    const content = fs.readFileSync(configPath, 'utf8');
    implEdgesConfig = yaml.load(content) as Record<string, any>;
  } else {
    warnings.push('implication_edges.yaml not found - skipping implication edges');
  }
  for (const impl of implications) {
    const implId = `implication-${impl.key}`;
    const config = (implEdgesConfig as any)[impl.key];

    if (config?.derived_from) {
      for (const ref of config.derived_from) {
        const targetId = lookup.resolve(ref, warnings);
        addEdge(implId, targetId, 'derived_from', true, false);
      }
    }

    if (config?.affects) {
      for (const ref of config.affects) {
        const targetId = lookup.resolve(ref, warnings);
        addEdge(implId, targetId, 'affects', true, false);
      }
    }
  }

  // Edge Type 10: affects (Meta-Challenge → Cluster)
  for (const mc of metaChallenges) {
    for (const clusterRef of mc.clusters_affected) {
      // Map A→CL_A, B→CL_B, C→CL_C
      let clusterId: string | null = null;
      if (clusterRef === 'A') clusterId = 'cluster-CL_A';
      else if (clusterRef === 'B') clusterId = 'cluster-CL_B';
      else if (clusterRef === 'C') clusterId = 'cluster-CL_C';
      else clusterId = lookup.resolve(clusterRef, warnings);

      const mcId = `meta_challenge-${mc.id}`;
      addEdge(mcId, clusterId, 'affects', true, false);
    }
  }

  // Edge Type 11: favours (Mechanism → Model)
  for (const mech of mechanisms) {
    for (const modelRef of mech.favours_models) {
      const modelId = lookup.resolve(modelRef, warnings);
      const mechId = `mechanism-${mech.id}`;
      addEdge(mechId, modelId, 'favours', true, false);
    }
  }

  // Edge Type 12: disfavours (Mechanism → Model)
  for (const mech of mechanisms) {
    for (const modelRef of mech.disfavours_models) {
      const modelId = lookup.resolve(modelRef, warnings);
      const mechId = `mechanism-${mech.id}`;
      addEdge(mechId, modelId, 'disfavours', true, false);
    }
  }

  // Edge Type 13: supports (Claim → various)
  for (const claim of claims) {
    if (!claim.relationships?.supports) continue;
    for (const ref of claim.relationships.supports) {
      const targetId = lookup.resolve(ref, warnings);
      const claimId = `claim-${claim.key}`;
      addEdge(claimId, targetId, 'supports', true, false);
    }
  }

  // Additional edges from mechanisms
  // underlies (Mechanism → Meta-Challenge) - part of "underlies_challenges"
  for (const mech of mechanisms) {
    for (const mcRef of mech.underlies_challenges) {
      const mcId = lookup.resolve(mcRef, warnings);
      const mechId = `mechanism-${mech.id}`;
      addEdge(mechId, mcId, 'underlies', true, false);
    }
  }

  // amplifies (Meta-Challenge → Meta-Challenge) - from compound_effects
  for (const mc of metaChallenges) {
    if (!mc.compound_effects?.amplifies) continue;
    for (const mcRef of mc.compound_effects.amplifies) {
      const targetId = lookup.resolve(mcRef, warnings);
      const mcId = `meta_challenge-${mc.id}`;
      addEdge(mcId, targetId, 'amplifies', true, false);
    }
  }

  // Validate
  const validation = validateGraph(nodes, edges);
  warnings.push(...validation.warnings);

  // Build metadata
  const entityTypes = [...new Set(nodes.map((n) => n.type))];
  const edgeTypes = [...new Set(edges.map((e) => e.type))];

  const graphData: GraphData = {
    nodes,
    edges,
    metadata: {
      nodeCount: nodes.length,
      edgeCount: edges.length,
      entityTypes,
      edgeTypes,
      warnings,
      buildTime: new Date().toISOString(),
    },
  };

  return graphData;
}
