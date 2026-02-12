import type { AllData } from './types';

// Resolves any entity ID to a route + display name
// Used by EntityLink to make every reference clickable

export interface EntityRef {
  href: string;
  label: string;
  type: string;
}

export function resolveEntity(id: string, data: AllData, basePath: string): EntityRef | null {
  // Problem IDs: FP01, FP02, etc.
  if (/^FP\d+$/.test(id)) {
    const problem = data.problems.find((p) => p.id === id);
    if (problem) {
      return { href: `${basePath}/#problem-${id}`, label: problem.key, type: 'problem' };
    }
  }

  // Mechanism IDs: MECH01, etc.
  if (/^MECH\d+$/.test(id)) {
    const mech = data.mechanisms.find((m) => m.id === id);
    if (mech) {
      return { href: `${basePath}/#mechanism-${id}`, label: mech.key, type: 'mechanism' };
    }
  }

  // Model IDs: M1, M2, etc.
  if (/^M\d+$/.test(id)) {
    const model = data.engagementModels.find((m) => m.id === id);
    if (model) {
      return { href: `${basePath}/options#model-${id}`, label: model.key, type: 'model' };
    }
  }

  // Claim IDs: C001, C002, etc.
  if (/^C\d+$/.test(id)) {
    const claim = data.claims.find((c) => c.key === id);
    if (claim) {
      return { href: `${basePath}/#claim-${id}`, label: id, type: 'claim' };
    }
  }

  // Meta-challenge IDs: MC1, MC2, etc.
  if (/^MC\d+$/.test(id)) {
    const mc = data.metaChallenges.find((m) => m.id === id);
    if (mc) {
      return { href: `${basePath}/options#mc-${id}`, label: mc.key, type: 'meta-challenge' };
    }
  }

  // Foundation IDs: FDN01, etc.
  if (/^FDN\d+$/.test(id)) {
    const fdn = data.foundations.find((f) => f.id === id);
    if (fdn) {
      return { href: `${basePath}/foundations#foundation-${id}`, label: fdn.key, type: 'foundation' };
    }
  }

  // Implication IDs: IMP01, etc.
  if (/^IMP\d+$/.test(id)) {
    const imp = data.implications.find((i) => i.key === id);
    if (imp) {
      return { href: `${basePath}/foundations#implication-${id}`, label: imp.name, type: 'implication' };
    }
  }

  // Cluster IDs: CL_A, CL_B, CL_C, etc.
  if (/^CL_/.test(id)) {
    const cluster = data.clusters.find((c) => c.id === id);
    if (cluster) {
      return { href: `${basePath}/#cluster-${id}`, label: cluster.key, type: 'cluster' };
    }
  }

  // Source IDs: try matching by key
  const source = data.sources.find((s) => s.key === id);
  if (source) {
    return { href: source.url || `${basePath}/#source-${id}`, label: source.name, type: 'source' };
  }

  // Try matching by name against problems
  const problemByName = data.problems.find(
    (p) => p.key === id || p.key.toLowerCase() === id.toLowerCase()
  );
  if (problemByName) {
    return {
      href: `${basePath}/#problem-${problemByName.id}`,
      label: problemByName.key,
      type: 'problem',
    };
  }

  // Try matching by name against mechanisms
  const mechByName = data.mechanisms.find(
    (m) => m.key === id || m.key.toLowerCase() === id.toLowerCase()
  );
  if (mechByName) {
    return {
      href: `${basePath}/#mechanism-${mechByName.id}`,
      label: mechByName.key,
      type: 'mechanism',
    };
  }

  // Try matching by name against engagement models
  const modelByName = data.engagementModels.find(
    (m) => m.key === id || m.key.toLowerCase() === id.toLowerCase()
  );
  if (modelByName) {
    return {
      href: `${basePath}/options#model-${modelByName.id}`,
      label: modelByName.key,
      type: 'model',
    };
  }

  return null;
}

// Helpers to find entities by various lookups
export function findModelByName(name: string, data: AllData) {
  return data.engagementModels.find(
    (m) => m.key === name || m.key.toLowerCase() === name.toLowerCase()
  );
}

export function findProblemByName(name: string, data: AllData) {
  return data.problems.find(
    (p) => p.key === name || p.key.toLowerCase() === name.toLowerCase() || p.id === name
  );
}

export function findMechanismByName(name: string, data: AllData) {
  return data.mechanisms.find(
    (m) => m.key === name || m.key.toLowerCase() === name.toLowerCase() || m.id === name
  );
}
