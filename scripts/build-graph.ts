// Build-time script: reads YAML from System_of_Record → outputs graph.json

import fs from 'fs';
import path from 'path';
import { buildGraph } from '../src/data/build-graph';

console.log('Building graph data from YAML sources...\n');

const graphData = buildGraph();

// Ensure output directory exists
const outputDir = path.join(process.cwd(), 'public', 'data');
fs.mkdirSync(outputDir, { recursive: true });

// Write graph data
const outputPath = path.join(outputDir, 'graph.json');
fs.writeFileSync(outputPath, JSON.stringify(graphData, null, 2));

console.log('Graph build complete!');
console.log(`  Nodes: ${graphData.metadata.nodeCount}`);
console.log(`  Edges: ${graphData.metadata.edgeCount}`);
console.log(`  Entity types: ${graphData.metadata.entityTypes.join(', ')}`);
console.log(`  Edge types: ${graphData.metadata.edgeTypes.join(', ')}`);
console.log(`\nWarnings: ${graphData.metadata.warnings.length}`);

if (graphData.metadata.warnings.length > 0) {
  console.log('\n--- Warnings ---');
  for (const warning of graphData.metadata.warnings.slice(0, 50)) {
    console.log(`  - ${warning}`);
  }
  if (graphData.metadata.warnings.length > 50) {
    console.log(`  ... and ${graphData.metadata.warnings.length - 50} more`);
  }
}

console.log(`\nOutput written to: ${outputPath}`);
