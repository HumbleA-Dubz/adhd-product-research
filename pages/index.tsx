import React, { useState } from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import EvidenceBadge from '@/components/EvidenceBadge';
import RoleBadge from '@/components/RoleBadge';
import EntityLink from '@/components/EntityLink';
import { ClaimsList } from '@/components/ClaimDetail';
import { CompatibilityCell, CompatibilityLegend } from '@/components/CompatibilityCell';
import { loadAllData } from '@/lib/data';
import type { AllData, Problem, CompatibilityRating } from '@/lib/types';

interface PageProps {
  data: AllData;
}

// Cluster grouping config
const CLUSTER_GROUPS = [
  {
    id: 'CL_A',
    label: 'Cluster A',
    name: 'Time-Perception Cascade',
    color: 'border-indigo-500/50 bg-indigo-950/20',
    headerColor: 'text-indigo-400',
    filter: (p: Problem) => p.cluster.startsWith('A'),
  },
  {
    id: 'CL_B',
    label: 'Cluster B',
    name: 'Initiation-Execution Bottleneck',
    color: 'border-violet-500/50 bg-violet-950/20',
    headerColor: 'text-violet-400',
    filter: (p: Problem) => p.cluster.startsWith('B'),
  },
  {
    id: 'CL_C',
    label: 'Cluster C',
    name: 'Attention-Quality Chain',
    color: 'border-cyan-500/50 bg-cyan-950/20',
    headerColor: 'text-cyan-400',
    filter: (p: Problem) => p.cluster.startsWith('C'),
  },
  {
    id: 'cross',
    label: 'Cross-Cluster',
    name: 'Affects Multiple Clusters',
    color: 'border-orange-500/50 bg-orange-950/20',
    headerColor: 'text-orange-400',
    filter: (p: Problem) =>
      p.cluster.toLowerCase().includes('cross') ||
      (p.cluster.includes('A and') || p.cluster.includes('B and') || p.cluster.includes('and B') || p.cluster.includes('and C')),
  },
  {
    id: 'standalone',
    label: 'Standalone',
    name: 'Independent Problems',
    color: 'border-slate-600/50 bg-slate-900/50',
    headerColor: 'text-slate-400',
    filter: (p: Problem) => p.cluster.toLowerCase().includes('standalone'),
  },
];

function ProblemCard({ problem, data }: { problem: Problem; data: AllData }) {
  const [expanded, setExpanded] = useState(false);

  // Find compatibility row for this problem
  const compatRow = data.compatibilityMatrix.find((row) => {
    const rowKey = row.key.toLowerCase();
    const probKey = problem.key.toLowerCase();
    const probId = problem.id;
    return rowKey.includes(probKey) || rowKey.includes(probId) || rowKey.includes(`(${probId})`);
  });

  // If no direct match, try matching through cluster
  const clusterCompatRow = !compatRow
    ? data.compatibilityMatrix.find((row) => {
        if (problem.cluster.startsWith('A')) return row.key.includes('Cluster A');
        if (problem.cluster.startsWith('B')) return row.key.includes('Cluster B');
        if (problem.cluster.startsWith('C')) return row.key.includes('Cluster C');
        return false;
      })
    : null;

  const effectiveCompatRow = compatRow || clusterCompatRow;

  return (
    <div
      id={`problem-${problem.id}`}
      className="bg-slate-800/60 rounded-lg border border-slate-700/50 overflow-hidden transition-all"
    >
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-3 hover:bg-slate-700/30 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="font-semibold text-slate-100">{problem.key}</h3>
              <span className="text-xs text-slate-500 font-mono">{problem.id}</span>
              <RoleBadge role={problem.role} />
              <EvidenceBadge tier={problem.evidence_tier} />
            </div>
            <p className="text-sm text-slate-400 line-clamp-2">{problem.plain_language}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="text-2xl font-bold text-slate-200">{problem.scores.total}</div>
            <div className="text-xs text-slate-500">total</div>
          </div>
        </div>
        {/* Score bar preview */}
        <div className="flex gap-3 mt-2 text-xs text-slate-500">
          <span>Freq: <span className="text-slate-300">{problem.scores.frequency}</span></span>
          <span>Diff: <span className="text-slate-300">{problem.scores.differentiation}</span></span>
          <span>Conn: <span className="text-slate-300">{problem.scores.connectedness}</span></span>
        </div>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-slate-700/50 px-4 py-4 space-y-4">
          {/* Full description */}
          <p className="text-sm text-slate-300 leading-relaxed">{problem.plain_language}</p>

          {/* Score breakdown */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Score Breakdown</h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Frequency', value: problem.scores.frequency, max: 5 },
                { label: 'Differentiation', value: problem.scores.differentiation, max: 5 },
                { label: 'Connectedness', value: problem.scores.connectedness, max: 5 },
              ].map((score) => (
                <div key={score.label} className="bg-slate-900/50 rounded p-2">
                  <div className="text-xs text-slate-500 mb-1">{score.label}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-200">{score.value}</span>
                    <span className="text-xs text-slate-600">/ {score.max}</span>
                    <div className="flex-1 bg-slate-700 rounded-full h-1.5">
                      <div
                        className="bg-indigo-500 rounded-full h-1.5"
                        style={{ width: `${(score.value / score.max) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mechanisms */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Explained by</h4>
            <div className="flex gap-2 flex-wrap">
              {problem.mechanisms.map((mech) => (
                <EntityLink key={mech} id={mech} data={data} />
              ))}
            </div>
          </div>

          {/* Compatibility row */}
          {effectiveCompatRow && (
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Engagement Model Compatibility
                {!compatRow && clusterCompatRow && (
                  <span className="font-normal normal-case ml-1">(via cluster)</span>
                )}
              </h4>
              <div className="overflow-x-auto">
                <table className="text-sm border-collapse">
                  <thead>
                    <tr>
                      {Object.keys(effectiveCompatRow.ratings).map((model) => (
                        <th key={model} className="px-2 py-1 text-xs text-slate-400 font-normal text-center whitespace-nowrap">
                          {model.length > 20 ? model.split(' ').slice(0, 2).join(' ') + '...' : model}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Object.entries(effectiveCompatRow.ratings).map(([model, rating]) => (
                        <CompatibilityCell key={model} rating={rating as CompatibilityRating} />
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-1">
                <CompatibilityLegend />
              </div>
            </div>
          )}

          {/* Claims */}
          {problem.claims.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Evidence</h4>
              <ClaimsList claimIds={problem.claims} data={data} compact />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MechanismPanel({ data }: { data: AllData }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-slate-200 mb-4">Mechanisms</h2>
      <p className="text-sm text-slate-400 mb-4">
        Cross-cutting cognitive mechanisms that explain why problems co-occur.
      </p>
      <div className="grid gap-3">
        {data.mechanisms.map((mech) => (
          <div
            key={mech.id}
            id={`mechanism-${mech.id}`}
            className="bg-slate-800/60 rounded-lg border border-slate-700/50 overflow-hidden"
          >
            <button
              onClick={() => setExpandedId(expandedId === mech.id ? null : mech.id)}
              className="w-full text-left px-4 py-3 hover:bg-slate-700/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-emerald-400">{mech.key}</h3>
                <span className="text-xs text-slate-500 font-mono">{mech.id}</span>
              </div>
              <p className="text-sm text-slate-400 mt-1 line-clamp-2">{mech.plain_language}</p>
            </button>
            {expandedId === mech.id && (
              <div className="border-t border-slate-700/50 px-4 py-4 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">{mech.plain_language}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Affects Problems</h4>
                    <ul className="space-y-0.5">
                      {mech.affects_problems.map((p, i) => (
                        <li key={i} className="text-slate-300">{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Variability</h4>
                    <p className="text-slate-400 text-sm">{mech.variability}</p>
                  </div>
                </div>

                {mech.favours_models.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Favours Models</h4>
                    <div className="flex gap-2 flex-wrap">
                      {mech.favours_models.map((m, i) => (
                        <span key={i} className="text-sm text-violet-400">{m}</span>
                      ))}
                    </div>
                  </div>
                )}

                {mech.disfavours_models.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Disfavours Models</h4>
                    <div className="flex gap-2 flex-wrap">
                      {mech.disfavours_models.map((m, i) => (
                        <span key={i} className="text-sm text-red-400">{m}</span>
                      ))}
                    </div>
                  </div>
                )}

                {mech.does_not_explain && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Does Not Explain</h4>
                    <p className="text-sm text-slate-400 italic">{mech.does_not_explain}</p>
                  </div>
                )}

                {mech.evidence.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Evidence</h4>
                    <ClaimsList claimIds={mech.evidence} data={data} compact />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProblemLandscape({ data }: PageProps) {
  // Group problems by cluster
  const grouped = CLUSTER_GROUPS.map((group) => ({
    ...group,
    problems: data.problems.filter(group.filter),
  }));

  // Find any problems that didn't match any group
  const allGroupedIds = grouped.flatMap((g) => g.problems.map((p) => p.id));
  const ungrouped = data.problems.filter((p) => !allGroupedIds.includes(p.id));

  return (
    <>
      <Head>
        <title>Problem Landscape | ADHD Workplace Research</title>
      </Head>
      <Layout
        counts={{
          problems: data.problems.length,
          models: data.engagementModels.length,
          foundations: data.foundations.length,
          claims: data.claims.length,
          sources: data.sources.length,
        }}
      >
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Problem Landscape</h1>
          <p className="text-slate-400 max-w-3xl">
            What goes wrong at work for adults with ADHD, why problems cluster together, and which
            mechanisms drive them. {data.problems.length} functional problems grouped into{' '}
            {data.clusters.filter((c) => !c.type).length} clusters, explained by{' '}
            {data.mechanisms.length} mechanisms.
          </p>
        </div>

        {/* Cluster groups */}
        <div className="space-y-8">
          {grouped.map((group) => {
            if (group.problems.length === 0) return null;
            // Sort by total score descending
            const sorted = [...group.problems].sort((a, b) => b.scores.total - a.scores.total);

            return (
              <section
                key={group.id}
                id={`cluster-${group.id}`}
                className={`rounded-xl border p-4 sm:p-6 ${group.color}`}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className={`text-lg font-bold ${group.headerColor}`}>
                      {group.name}
                    </h2>
                    <span className="text-xs text-slate-500">{group.label}</span>
                  </div>
                  {/* Show cluster's causal direction if available */}
                  {(() => {
                    const cluster = data.clusters.find((c) => c.id === group.id);
                    if (cluster?.causal_direction) {
                      return (
                        <p className="text-xs text-slate-500 mt-1">
                          {cluster.causal_direction}
                        </p>
                      );
                    }
                    return null;
                  })()}
                </div>
                <div className="grid gap-3">
                  {sorted.map((problem) => (
                    <ProblemCard key={problem.id} problem={problem} data={data} />
                  ))}
                </div>
              </section>
            );
          })}

          {/* Ungrouped problems (safety net) */}
          {ungrouped.length > 0 && (
            <section className="rounded-xl border border-slate-600/50 bg-slate-900/50 p-4 sm:p-6">
              <h2 className="text-lg font-bold text-slate-400 mb-4">Other Problems</h2>
              <div className="grid gap-3">
                {ungrouped.map((problem) => (
                  <ProblemCard key={problem.id} problem={problem} data={data} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Mechanisms */}
        <MechanismPanel data={data} />

        {/* All Claims reference section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4">All Claims</h2>
          <p className="text-sm text-slate-400 mb-4">
            {data.claims.length} claims forming the evidence base. Click any claim reference above to jump here.
          </p>
          <div className="space-y-3">
            {data.claims.map((claim) => (
              <div key={claim.key} id={`claim-${claim.key}`}>
                <ClaimsList claimIds={[claim.key]} data={data} compact={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Sources reference section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4">Sources</h2>
          <p className="text-sm text-slate-400 mb-4">{data.sources.length} cited sources.</p>
          <div className="grid gap-2">
            {data.sources.map((source) => (
              <div
                key={source.key}
                id={`source-${source.key}`}
                className="bg-slate-800/40 rounded border border-slate-700/30 px-4 py-3"
              >
                <div className="flex items-start gap-2 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-500 font-mono">{source.key}</span>
                      <EvidenceBadge tier={source.evidence_tier} />
                      <span className="text-xs text-slate-600">{source.type.replace(/_/g, ' ')}</span>
                    </div>
                    <p className="text-sm text-slate-300">{source.name}</p>
                    {source.description && (
                      <p className="text-xs text-slate-500 mt-1">{source.description}</p>
                    )}
                    {source.limitations && (
                      <p className="text-xs text-slate-600 mt-1 italic">
                        Limitations: {source.limitations}
                      </p>
                    )}
                  </div>
                  {source.url && (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-400 hover:text-indigo-300 whitespace-nowrap flex-shrink-0"
                    >
                      Link
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = loadAllData();
  return { props: { data } };
};
