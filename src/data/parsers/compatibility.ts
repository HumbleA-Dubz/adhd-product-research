import { readYaml, clean } from './utils';

export type CompatibilityRating = 'S' | 'P' | 'X';
export type VulnerabilityRating = 'H' | 'M' | 'L';

export interface CompatibilityRow {
  key: string;
  ratings: Record<string, CompatibilityRating>;
}

export interface VulnerabilityRow {
  modelKey: string;
  ratings: Record<string, VulnerabilityRating>;
  narratives: Record<string, string>; // Full text for each meta-challenge
  summary: string;
}

export function parseCompatibility(): { matrix: CompatibilityRow[]; vulnerability: VulnerabilityRow[] } {
  const raw = readYaml('compatibility.yaml');

  const matrix: CompatibilityRow[] = [];
  const vulnerability: VulnerabilityRow[] = [];

  for (const [key, val] of Object.entries(raw)) {
    if (key === 'meta_challenge_vulnerability') {
      // Parse vulnerability matrix
      for (const [modelKey, mcData] of Object.entries(val as Record<string, any>)) {
        const ratings: Record<string, VulnerabilityRating> = {};
        const narratives: Record<string, string> = {};
        let summary = '';

        for (const [mcName, ratingData] of Object.entries(mcData as Record<string, any>)) {
          if (mcName === 'summary') {
            summary = clean(ratingData);
          } else {
            // Parse "H — Narrative text" format
            const str = clean(ratingData);
            // Match em-dash, en-dash, or hyphen with optional spaces
            const match = str.match(/^([HML])\s*[—–-]\s*(.+)$/);
            if (match) {
              ratings[mcName] = match[1] as VulnerabilityRating;
              narratives[mcName] = match[2].trim();
            } else if (['H', 'M', 'L'].includes(str)) {
              // Just a rating without narrative
              ratings[mcName] = str as VulnerabilityRating;
              narratives[mcName] = '';
            } else {
              // Fallback: treat whole thing as narrative, extract H/M/L if present
              const ratingMatch = str.match(/^(Very high|High|H|Moderate|M|Low|L)/i);
              if (ratingMatch) {
                const r = ratingMatch[1].toLowerCase();
                if (r.startsWith('h') || r === 'very high') ratings[mcName] = 'H';
                else if (r.startsWith('m')) ratings[mcName] = 'M';
                else if (r.startsWith('l')) ratings[mcName] = 'L';
                else ratings[mcName] = 'M'; // default
              } else {
                ratings[mcName] = 'M'; // default
              }
              narratives[mcName] = str;
            }
          }
        }
        vulnerability.push({ modelKey, ratings, narratives, summary });
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
