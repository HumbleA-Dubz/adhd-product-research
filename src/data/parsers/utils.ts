import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const DATA_DIR = path.join(process.cwd(), '3 - The map', 'System_of_Record');

export function readYaml(filename: string): Record<string, any> {
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

export function clean(val: any): string {
  if (typeof val === 'string') return val.trim();
  if (val == null) return '';
  return String(val).trim();
}

export function toArray(val: any): string[] {
  if (Array.isArray(val)) return val.map((v: any) => clean(v));
  if (val == null) return [];
  return [clean(val)];
}
