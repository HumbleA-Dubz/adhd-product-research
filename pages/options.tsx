import React, { useState } from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import EvidenceBadge from '@/components/EvidenceBadge';
import EntityLink from '@/components/EntityLink';
import { ClaimsList } from '@/components/ClaimDetail';
import {
  CompatibilityCell,
  VulnerabilityCell,
  CompatibilityLegend,
  VulnerabilityLegend,
} from '@/components/CompatibilityCell';
import { loadAllData } from '@/lib/data';
import type { AllData, EngagementModel, CompatibilityRating, VulnerabilityRating } from '@/lib/types';

interface PageProps {
  data: AllData;
}

function ModelCard({ model, data }: { model: EngagementModel; data: AllData }) {
  const [expanded, setExpanded] = useState(false);

  // Get vulnerability row for this model
  const vulnRow = data.vulnerabilityMatrix.find(
    (v) => v.modelKey === model.key
  );

  // Get the compatibility column for this model
  const compatEntries = data.compatibilityMatrix.map((row) => ({
    rowKey: row.key,
    rating: row.ratings[model.key] as CompatibilityRating | undefined,
  }));

  return (
    <div
      id={`model-${model.id}`}
      className="bg-slate-800/60 rounded-lg border border-slate-700/50 overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-3 hover:bg-slate-700/30 transition-colors"
      >
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <h3 className="font-semibold text-violet-300">{model.key}</h3>
          <span className="text-xs text-slate-500 font-mono">{model.id}</span>
          {vulnRow && (
            <span className="text-xs text-slate-500 ml-auto">{vulnRow.summary}</span>
          )}
        </div>

        {/* Dimensions grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {[
            { label: 'Initiation', value: model.dimensions.initiation },
            { label: 'Effort', value: model.dimensions.effort },
            { label: 'Timing', value: model.dimensions.timing },
            { label: 'Continuity', value: model.dimensions.continuity },
          ].map((dim) => (
            <div key={dim.label} className="bg-slate-900/50 rounded px-2 py-1.5">
              <div className="text-slate-500 mb-0.5">{dim.label}</div>
              <div className="text-slate-300 font-medium">{dim.value}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
          <span>Habit burden: <span className="text-slate-400">{model.habit_burden}</span></span>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-slate-700/50 px-4 py-4 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">{model.plain_language}</p>

          {/* Primary & Secondary problems */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {model.primary_problems.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Primary Problems</h4>
                <div className="space-y-1">
                  {model.primary_problems.map((p, i) => (
                    <div key={i} className="text-sm text-indigo-400">{p}</div>
                  ))}
                </div>
              </div>
            )}
            {model.secondary_problems.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Secondary Problems</h4>
                <div className="space-y-1">
                  {model.secondary_problems.map((p, i) => (
                    <div key={i} className="text-sm text-slate-400">{p}</div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Retention risk */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Retention Risk</h4>
            <p className="text-sm text-slate-400">{model.retention_risk}</p>
          </div>

          {/* Vulnerability profile */}
          {vulnRow && (
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Meta-Challenge Vulnerability</h4>
              <div className="overflow-x-auto">
                <table className="text-sm border-collapse">
                  <thead>
                    <tr>
                      {Object.keys(vulnRow.ratings).map((mc) => (
                        <th key={mc} className="px-2 py-1 text-xs text-slate-400 font-normal text-center whitespace-nowrap">
                          {mc}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Object.values(vulnRow.ratings).map((rating, i) => (
                        <VulnerabilityCell key={i} rating={rating} />
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-1"><VulnerabilityLegend /></div>
            </div>
          )}

          {/* Compatibility for this model */}
          {compatEntries.some((e) => e.rating) && (
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">
                Problem Compatibility
              </h4>
              <div className="space-y-1">
                {compatEntries
                  .filter((e) => e.rating)
                  .map((entry) => (
                    <div key={entry.rowKey} className="flex items-center gap-2 text-sm">
                      <span
                        className={`w-6 text-center font-semibold ${
                          entry.rating === 'S'
                            ? 'text-emerald-400'
                            : entry.rating === 'P'
                            ? 'text-amber-400'
                            : 'text-red-400'
                        }`}
                      >
                        {entry.rating}
                      </span>
                      <span className="text-slate-400">{entry.rowKey}</span>
                    </div>
                  ))}
              </div>
              <div className="mt-2"><CompatibilityLegend /></div>
            </div>
          )}

          {/* Required foundations */}
          {(() => {
            const requiredFdns = data.foundations.filter(
              (f) => f.required_by.required.includes(model.id)
            );
            const optionalFdns = data.foundations.filter(
              (f) => f.required_by.optional.includes(model.id)
            );
            if (requiredFdns.length === 0 && optionalFdns.length === 0) return null;
            return (
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Foundations</h4>
                <div className="space-y-1 text-sm">
                  {requiredFdns.map((f) => (
                    <div key={f.id} className="flex items-center gap-2">
                      <span className="text-emerald-400 text-xs font-semibold">REQ</span>
                      <EntityLink id={f.id} data={data} />
                    </div>
                  ))}
                  {optionalFdns.map((f) => (
                    <div key={f.id} className="flex items-center gap-2">
                      <span className="text-slate-500 text-xs font-semibold">OPT</span>
                      <EntityLink id={f.id} data={data} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Claims */}
          {model.claims.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Evidence</h4>
              <ClaimsList claimIds={model.claims} data={data} compact />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function OptionSpace({ data }: PageProps) {
  const modelNames = data.engagementModels.map((m) => m.key);
  const mcNames = data.metaChallenges.map((mc) => mc.key);

  return (
    <>
      <Head>
        <title>Option Space | ADHD Workplace Research</title>
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
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Option Space</h1>
          <p className="text-slate-400 max-w-3xl">
            {data.engagementModels.length} structurally distinct engagement models, their compatibility
            with problems, and vulnerability to {data.metaChallenges.length} meta-challenges.
            These are structural categories, not product concepts.
          </p>
        </div>

        {/* Engagement Models */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4">Engagement Models</h2>
          <div className="grid gap-3">
            {data.engagementModels.map((model) => (
              <ModelCard key={model.id} model={model} data={data} />
            ))}
          </div>
        </section>

        {/* Compatibility Matrix */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-2">Compatibility Matrix</h2>
          <p className="text-sm text-slate-400 mb-4">
            How well each engagement model structurally fits each problem area.
          </p>
          <CompatibilityLegend />
          <div className="overflow-x-auto mt-3">
            <table className="text-sm border-collapse w-full">
              <thead>
                <tr>
                  <th className="text-left px-3 py-2 text-xs text-slate-500 font-normal sticky left-0 bg-slate-900 z-10">
                    Problem / Cluster
                  </th>
                  {modelNames.map((name) => (
                    <th
                      key={name}
                      className="px-2 py-2 text-xs text-slate-400 font-normal text-center whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', minWidth: '40px' }}
                    >
                      {name.split(' ').slice(0, 2).join(' ')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.compatibilityMatrix.map((row) => (
                  <tr key={row.key} className="border-t border-slate-800">
                    <td className="px-3 py-1.5 text-sm text-slate-300 sticky left-0 bg-slate-900 z-10 whitespace-nowrap">
                      {row.key}
                    </td>
                    {modelNames.map((name) => {
                      const rating = row.ratings[name];
                      if (!rating) {
                        return <td key={name} className="px-2 py-1.5 text-center text-slate-600">-</td>;
                      }
                      return <CompatibilityCell key={name} rating={rating} />;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Meta-Challenge Vulnerability Matrix */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-2">Meta-Challenge Vulnerability</h2>
          <p className="text-sm text-slate-400 mb-4">
            How vulnerable each model is to the {data.metaChallenges.length} structural challenges
            that affect any ADHD product.
          </p>
          <VulnerabilityLegend />
          <div className="overflow-x-auto mt-3">
            <table className="text-sm border-collapse w-full">
              <thead>
                <tr>
                  <th className="text-left px-3 py-2 text-xs text-slate-500 font-normal sticky left-0 bg-slate-900 z-10">
                    Model
                  </th>
                  {mcNames.map((name) => (
                    <th key={name} className="px-2 py-2 text-xs text-slate-400 font-normal text-center whitespace-nowrap">
                      {name.length > 20 ? name.split(' ').slice(0, 2).join(' ') : name}
                    </th>
                  ))}
                  <th className="px-2 py-2 text-xs text-slate-500 font-normal text-center">Summary</th>
                </tr>
              </thead>
              <tbody>
                {data.vulnerabilityMatrix.map((row) => (
                  <tr key={row.modelKey} className="border-t border-slate-800">
                    <td className="px-3 py-1.5 text-sm text-slate-300 sticky left-0 bg-slate-900 z-10 whitespace-nowrap">
                      {row.modelKey.split(' ').slice(0, 3).join(' ')}
                    </td>
                    {mcNames.map((mcName) => {
                      const rating = row.ratings[mcName];
                      if (!rating) {
                        return <td key={mcName} className="px-2 py-1.5 text-center text-slate-600">-</td>;
                      }
                      return <VulnerabilityCell key={mcName} rating={rating} />;
                    })}
                    <td className="px-2 py-1.5 text-center text-xs text-slate-500">{row.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Meta-Challenges Detail */}
        <section>
          <h2 className="text-xl font-bold text-slate-200 mb-4">Meta-Challenges</h2>
          <p className="text-sm text-slate-400 mb-4">
            Structural constraints that affect any ADHD product regardless of engagement model.
          </p>
          <div className="grid gap-3">
            {data.metaChallenges.map((mc) => (
              <div
                key={mc.id}
                id={`mc-${mc.id}`}
                className="bg-slate-800/60 rounded-lg border border-slate-700/50 p-4"
              >
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="font-semibold text-red-300">{mc.key}</h3>
                  <span className="text-xs text-slate-500 font-mono">{mc.id}</span>
                  <EvidenceBadge tier={mc.evidence_tier} />
                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                    mc.severity === 'Critical'
                      ? 'bg-red-900/50 text-red-300 border border-red-700/50'
                      : mc.severity.includes('High')
                      ? 'bg-orange-900/50 text-orange-300 border border-orange-700/50'
                      : 'bg-amber-900/50 text-amber-300 border border-amber-700/50'
                  }`}>
                    {mc.severity}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">{mc.plain_language}</p>

                {mc.key_evidence && (
                  <p className="text-xs text-slate-400 italic mb-2">{mc.key_evidence}</p>
                )}

                <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                  {mc.clusters_affected && mc.clusters_affected.length > 0 && (
                    <span>Clusters: {mc.clusters_affected.join(', ')}</span>
                  )}
                  {mc.compound_effects?.amplifies && mc.compound_effects.amplifies.length > 0 && (
                    <span>Amplifies: {mc.compound_effects.amplifies.join(', ')}</span>
                  )}
                  {mc.compound_effects?.amplified_by && mc.compound_effects.amplified_by.length > 0 && (
                    <span>Amplified by: {mc.compound_effects.amplified_by.join(', ')}</span>
                  )}
                </div>

                {mc.claims.length > 0 && (
                  <div className="mt-3">
                    <ClaimsList claimIds={mc.claims} data={data} compact />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = loadAllData();
  return { props: { data } };
};
