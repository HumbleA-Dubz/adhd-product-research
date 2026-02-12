import React from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import EntityLink from '@/components/EntityLink';
import { ClaimsList } from '@/components/ClaimDetail';
import { loadAllData } from '@/lib/data';
import type { AllData } from '@/lib/types';

interface PageProps {
  data: AllData;
}

const IMPLICATION_TYPE_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  structural_constraint: {
    bg: 'border-blue-500/30 bg-blue-950/20',
    text: 'text-blue-400',
    label: 'Structural Constraint',
  },
  paradox: {
    bg: 'border-orange-500/30 bg-orange-950/20',
    text: 'text-orange-400',
    label: 'Paradox',
  },
  tension: {
    bg: 'border-amber-500/30 bg-amber-950/20',
    text: 'text-amber-400',
    label: 'Tension',
  },
  decision_boundary: {
    bg: 'border-violet-500/30 bg-violet-950/20',
    text: 'text-violet-400',
    label: 'Decision Boundary',
  },
};

const COMPLEXITY_STYLES: Record<string, string> = {
  Trivial: 'text-emerald-400',
  Moderate: 'text-amber-400',
  Significant: 'text-red-400',
};

export default function FoundationsPage({ data }: PageProps) {
  // Group implications by type
  const implGroups = [
    { type: 'structural_constraint', items: data.implications.filter((i) => i.type === 'structural_constraint') },
    { type: 'paradox', items: data.implications.filter((i) => i.type === 'paradox') },
    { type: 'tension', items: data.implications.filter((i) => i.type === 'tension') },
    { type: 'decision_boundary', items: data.implications.filter((i) => i.type === 'decision_boundary') },
  ].filter((g) => g.items.length > 0);

  return (
    <>
      <Head>
        <title>What We&apos;d Need | ADHD Workplace Research</title>
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
          <h1 className="text-2xl font-bold text-slate-100 mb-2">What We&apos;d Need</h1>
          <p className="text-slate-400 max-w-3xl">
            Direction-independent capabilities required across multiple engagement models, and
            structural constraints that shape the decision space. {data.foundations.length} foundations
            and {data.implications.length} implications.
          </p>
        </div>

        {/* Foundations */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-200 mb-2">Foundations</h2>
          <p className="text-sm text-slate-400 mb-6">
            Shared capabilities required across 3+ engagement models. These can be built with
            high confidence regardless of product direction.
          </p>

          <div className="grid gap-4">
            {data.foundations.map((fdn) => {
              const requiredCount = fdn.required_by.required.length;
              const optionalCount = fdn.required_by.optional.length;

              return (
                <div
                  key={fdn.id}
                  id={`foundation-${fdn.id}`}
                  className="bg-slate-800/60 rounded-lg border border-slate-700/50 p-4 sm:p-5"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-semibold text-cyan-300">{fdn.key}</h3>
                        <span className="text-xs text-slate-500 font-mono">{fdn.id}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-slate-500">
                          Complexity:{' '}
                          <span className={COMPLEXITY_STYLES[fdn.complexity] || 'text-slate-400'}>
                            {fdn.complexity}
                          </span>
                        </span>
                        <span className="text-slate-500">
                          Build/Buy:{' '}
                          <span className="text-slate-400">{fdn.build_or_buy}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-bold text-slate-200">{requiredCount}</div>
                      <div className="text-xs text-slate-500">required by</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-3">{fdn.purpose}</p>

                  {/* Required by models */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Required By</h4>
                      <div className="flex gap-1.5 flex-wrap">
                        {fdn.required_by.required.map((modelId) => (
                          <EntityLink key={modelId} id={modelId} data={data} className="text-sm" />
                        ))}
                      </div>
                    </div>
                    {fdn.required_by.optional.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Optional For</h4>
                        <div className="flex gap-1.5 flex-wrap">
                          {fdn.required_by.optional.map((modelId) => (
                            <EntityLink key={modelId} id={modelId} data={data} className="text-sm" />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Specific capabilities */}
                  {fdn.specific_capabilities.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Capabilities</h4>
                      <ul className="space-y-0.5">
                        {fdn.specific_capabilities.map((cap, i) => (
                          <li key={i} className="text-xs text-slate-400 flex gap-2">
                            <span className="text-slate-600 flex-shrink-0">&bull;</span>
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Claims */}
                  {fdn.claims && fdn.claims.length > 0 && (
                    <ClaimsList claimIds={fdn.claims} data={data} compact />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Implications */}
        <section>
          <h2 className="text-xl font-bold text-slate-200 mb-2">Implications</h2>
          <p className="text-sm text-slate-400 mb-6">
            Structural constraints, paradoxes, and decision boundaries that emerge from the evidence.
            These describe the shape of the decision space — not recommendations.
          </p>

          <div className="space-y-8">
            {implGroups.map((group) => {
              const style = IMPLICATION_TYPE_STYLES[group.type] || IMPLICATION_TYPE_STYLES.structural_constraint;
              return (
                <div key={group.type}>
                  <h3 className={`text-lg font-semibold mb-3 ${style.text}`}>{style.label}s</h3>
                  <div className="grid gap-3">
                    {group.items.map((imp) => (
                      <div
                        key={imp.key}
                        id={`implication-${imp.key}`}
                        className={`rounded-lg border p-4 ${style.bg}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-slate-200">{imp.name}</h4>
                          <span className="text-xs text-slate-500 font-mono">{imp.key}</span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed mb-3">{imp.statement}</p>

                        {/* Affects */}
                        {imp.affects.length > 0 && (
                          <div className="mb-2">
                            <h5 className="text-xs font-semibold text-slate-500 uppercase mb-1">Affects</h5>
                            <ul className="space-y-0.5">
                              {imp.affects.map((a, i) => (
                                <li key={i} className="text-xs text-slate-400 flex gap-2">
                                  <span className="text-slate-600 flex-shrink-0">&bull;</span>
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Evidence trail */}
                        {imp.evidence.length > 0 && (
                          <div className="flex gap-2 flex-wrap items-center text-xs text-slate-500">
                            <span>Evidence:</span>
                            {imp.evidence.map((claimId, i) => (
                              <React.Fragment key={claimId}>
                                {i > 0 && <span>,</span>}
                                <EntityLink id={claimId} data={data} className="text-xs" />
                              </React.Fragment>
                            ))}
                          </div>
                        )}

                        {imp.derived_from && (
                          <div className="text-xs text-slate-600 mt-1">
                            Derived from: {imp.derived_from}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
