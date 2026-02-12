import React from 'react';
import Link from 'next/link';
import type { AllData } from '@/lib/types';
import { resolveEntity } from '@/lib/lookup';

interface EntityLinkProps {
  id: string;
  data: AllData;
  className?: string;
  showId?: boolean;
}

const TYPE_COLORS: Record<string, string> = {
  problem: 'text-indigo-400 hover:text-indigo-300',
  mechanism: 'text-emerald-400 hover:text-emerald-300',
  model: 'text-violet-400 hover:text-violet-300',
  claim: 'text-amber-400 hover:text-amber-300',
  'meta-challenge': 'text-red-400 hover:text-red-300',
  foundation: 'text-cyan-400 hover:text-cyan-300',
  implication: 'text-orange-400 hover:text-orange-300',
  cluster: 'text-blue-400 hover:text-blue-300',
  source: 'text-slate-400 hover:text-slate-300',
};

export default function EntityLink({ id, data, className, showId = false }: EntityLinkProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/adhd-product-research' : '';
  const ref = resolveEntity(id, data, basePath);

  if (!ref) {
    return <span className="text-slate-500">{id}</span>;
  }

  const colorClass = TYPE_COLORS[ref.type] || 'text-slate-400 hover:text-slate-300';

  // For source links with external URLs
  if (ref.type === 'source' && ref.href.startsWith('http')) {
    return (
      <a
        href={ref.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`underline decoration-dotted underline-offset-2 ${colorClass} ${className || ''}`}
      >
        {showId ? `${id}: ${ref.label}` : ref.label}
      </a>
    );
  }

  return (
    <Link
      href={ref.href}
      className={`underline decoration-dotted underline-offset-2 ${colorClass} ${className || ''}`}
    >
      {showId ? `${id}: ${ref.label}` : ref.label}
    </Link>
  );
}

// Inline version for use in text — just renders the ID as a link
export function ClaimLink({ id, data }: { id: string; data: AllData }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/adhd-product-research' : '';
  const ref = resolveEntity(id, data, basePath);

  if (!ref) {
    return <span className="text-slate-500 text-xs">[{id}]</span>;
  }

  return (
    <Link
      href={ref.href}
      className="text-amber-400/70 hover:text-amber-300 text-xs"
    >
      [{id}]
    </Link>
  );
}
