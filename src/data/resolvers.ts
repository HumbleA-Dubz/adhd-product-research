import type { Problem } from './parsers/problems';
import type { Cluster } from './parsers/clusters';
import type { Mechanism } from './parsers/mechanisms';
import type { EngagementModel } from './parsers/models';
import type { MetaChallenge } from './parsers/meta-challenges';
import type { Foundation } from './parsers/foundations';
import type { Claim } from './parsers/claims';
import type { Source } from './parsers/sources';
import type { Implication } from './parsers/implications';
import type { EntityType } from '../graph/types';

export interface EntityLookupEntry {
  nodeId: string;
  secondaryId: string;
  type: EntityType;
  displayName: string;
  yamlKey: string;
}

export class EntityLookup {
  private byId = new Map<string, EntityLookupEntry>();
  private byYamlKey = new Map<string, EntityLookupEntry>();
  private byDisplayName = new Map<string, EntityLookupEntry>();
  private byPlainLanguage = new Map<string, EntityLookupEntry>();

  constructor(
    problems: Problem[],
    clusters: Cluster[],
    mechanisms: Mechanism[],
    models: EngagementModel[],
    metaChallenges: MetaChallenge[],
    foundations: Foundation[],
    claims: Claim[],
    sources: Source[],
    implications: Implication[]
  ) {
    // Index all entities
    this.indexEntities('problem', problems, (p) => p.id, (p) => p.key);
    this.indexEntities('cluster', clusters, (c) => c.id, (c) => c.key);
    this.indexEntities('mechanism', mechanisms, (m) => m.id, (m) => m.key);
    this.indexEntities('model', models, (m) => m.id, (m) => m.key);
    this.indexEntities('meta_challenge', metaChallenges, (mc) => mc.id, (mc) => mc.key);
    this.indexEntities('foundation', foundations, (f) => f.id, (f) => f.key);
    this.indexEntities('claim', claims, (c) => c.key, (c) => c.key);
    this.indexEntities('source', sources, (s) => s.key, (s) => s.key);
    this.indexEntities('implication', implications, (i) => i.key, (i) => i.name);
  }

  private indexEntities<T>(
    type: EntityType,
    entities: T[],
    getId: (e: T) => string,
    getDisplayName: (e: T) => string
  ) {
    for (const entity of entities) {
      const secondaryId = getId(entity);
      const displayName = getDisplayName(entity);
      const yamlKey = (entity as any).key || secondaryId;
      const nodeId = `${type}-${secondaryId}`;

      const entry: EntityLookupEntry = {
        nodeId,
        secondaryId,
        type,
        displayName,
        yamlKey,
      };

      // Index by ID
      this.byId.set(secondaryId, entry);
      this.byId.set(secondaryId.toLowerCase(), entry);

      // Index by YAML key
      this.byYamlKey.set(yamlKey, entry);
      this.byYamlKey.set(yamlKey.toLowerCase(), entry);

      // Index by display name
      this.byDisplayName.set(displayName, entry);
      this.byDisplayName.set(displayName.toLowerCase(), entry);

      // For problems/mechanisms/models with plain_language, also index that
      if ((entity as any).plain_language) {
        const plainLang = (entity as any).plain_language as string;
        this.byPlainLanguage.set(plainLang, entry);
        this.byPlainLanguage.set(plainLang.toLowerCase(), entry);
      }
    }
  }

  resolve(ref: string, warnings: string[]): string | null {
    if (!ref || !ref.trim()) return null;

    const cleaned = ref.trim();

    // Strip parenthetical suffix: "Name (ID)" → try both "Name" and "ID"
    const parenMatch = cleaned.match(/^(.+?)\s*\(([^)]+)\)$/);
    if (parenMatch) {
      const [, name, id] = parenMatch;
      // Try ID first
      const byId = this.resolve(id.trim(), warnings);
      if (byId) return byId;
      // Then try name
      const byName = this.resolve(name.trim(), warnings);
      if (byName) return byName;
    }

    // 1. Exact ID match (case-insensitive)
    let entry = this.byId.get(cleaned);
    if (entry) return entry.nodeId;

    entry = this.byId.get(cleaned.toLowerCase());
    if (entry) return entry.nodeId;

    // 2. Exact YAML key match
    entry = this.byYamlKey.get(cleaned);
    if (entry) return entry.nodeId;

    entry = this.byYamlKey.get(cleaned.toLowerCase());
    if (entry) return entry.nodeId;

    // 3. Exact display name match
    entry = this.byDisplayName.get(cleaned);
    if (entry) return entry.nodeId;

    entry = this.byDisplayName.get(cleaned.toLowerCase());
    if (entry) return entry.nodeId;

    // 4. Display name starts with ref (for partial matches like "On-Demand Scaffolding" → "On-Demand Cognitive Scaffolding")
    const lower = cleaned.toLowerCase();
    for (const [key, val] of this.byDisplayName.entries()) {
      if (key.toLowerCase().startsWith(lower)) {
        warnings.push(`Fuzzy match (startsWith): "${cleaned}" → "${val.displayName}" (${val.nodeId})`);
        return val.nodeId;
      }
    }

    // 5. Ref starts with display name (for matches like "Calibration Feedback Loop" matching "Calibration...")
    for (const [key, val] of this.byDisplayName.entries()) {
      if (lower.startsWith(key.toLowerCase())) {
        warnings.push(`Fuzzy match (contains): "${cleaned}" → "${val.displayName}" (${val.nodeId})`);
        return val.nodeId;
      }
    }

    // 6. Check if the display name starts with the same words as ref (word-level matching)
    // e.g., "On-Demand Scaffolding" matches "On-Demand Cognitive Scaffolding"
    const refWords = lower.split(/[\s-]+/).filter(w => w.length > 0);
    if (refWords.length >= 2) {
      for (const [key, val] of this.byDisplayName.entries()) {
        const keyWords = key.toLowerCase().split(/[\s-]+/).filter(w => w.length > 0);

        // Count how many consecutive words from the start match
        let matchCount = 0;
        for (let i = 0; i < Math.min(refWords.length, keyWords.length); i++) {
          if (refWords[i] === keyWords[i]) matchCount++;
          else break;
        }

        // Also check if all ref words appear in order in key (not necessarily consecutive)
        let allWordsMatch = true;
        let keyIdx = 0;
        for (const refWord of refWords) {
          let found = false;
          for (let i = keyIdx; i < keyWords.length; i++) {
            if (keyWords[i].startsWith(refWord) || refWord.startsWith(keyWords[i])) {
              keyIdx = i + 1;
              found = true;
              break;
            }
          }
          if (!found) {
            allWordsMatch = false;
            break;
          }
        }

        if ((matchCount >= 2 && matchCount === refWords.length) || (allWordsMatch && refWords.length >= 2)) {
          warnings.push(`Word-level fuzzy match: "${cleaned}" → "${val.displayName}" (${val.nodeId})`);
          return val.nodeId;
        }
      }
    }

    // 7. Display name contains ref (looser fuzzy)
    for (const [key, val] of this.byDisplayName.entries()) {
      if (key.toLowerCase().includes(lower) && lower.length > 5) {
        warnings.push(`Loose fuzzy match: "${cleaned}" → "${val.displayName}" (${val.nodeId})`);
        return val.nodeId;
      }
    }

    warnings.push(`Unresolved reference: "${cleaned}"`);
    return null;
  }

  // Get cluster members for expanding cluster-level compatibility
  getClusterMembers(clusterId: string): string[] {
    const clusterEntry = this.byId.get(clusterId);
    if (!clusterEntry || clusterEntry.type !== 'cluster') return [];

    const memberIds: string[] = [];
    // Find all problems that belong to this cluster
    for (const entry of this.byId.values()) {
      if (entry.type === 'problem') {
        // Check if problem's cluster matches
        // This requires access to the original problem data...
        // We'll handle this in build-graph.ts instead
      }
    }
    return memberIds;
  }
}
