import React from 'react';

interface EvidenceBadgeProps {
  tier: string | number;
  size?: 'sm' | 'md';
}

function getTierColor(tier: string | number): string {
  const t = typeof tier === 'number' ? tier : parseFloat(tier.toString().replace('Tier ', ''));
  if (isNaN(t)) {
    // Handle "Derived" or non-numeric
    if (String(tier).toLowerCase().includes('derived')) return 'bg-slate-600 text-slate-300';
    return 'bg-slate-600 text-slate-300';
  }
  if (t <= 1.0) return 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50';
  if (t <= 1.5) return 'bg-emerald-900/40 text-emerald-400 border border-emerald-800/50';
  if (t <= 2.0) return 'bg-amber-900/40 text-amber-300 border border-amber-700/50';
  if (t <= 2.5) return 'bg-amber-900/30 text-amber-400 border border-amber-800/50';
  if (t <= 3.0) return 'bg-orange-900/40 text-orange-300 border border-orange-700/50';
  return 'bg-red-900/40 text-red-300 border border-red-700/50';
}

function formatTier(tier: string | number): string {
  const s = String(tier);
  // Already formatted like "Tier 1" or "Tier 1-2"
  if (s.startsWith('Tier')) return s;
  if (s.toLowerCase() === 'derived') return 'Derived';
  // Numeric — format as "Tier X"
  const n = parseFloat(s);
  if (isNaN(n)) return s;
  if (Number.isInteger(n)) return `Tier ${n}`;
  return `Tier ${n.toFixed(1)}`;
}

export default function EvidenceBadge({ tier, size = 'sm' }: EvidenceBadgeProps) {
  const colorClass = getTierColor(tier);
  const sizeClass = size === 'sm' ? 'text-xs px-1.5 py-0.5' : 'text-sm px-2 py-0.5';

  return (
    <span className={`inline-flex items-center rounded font-medium ${colorClass} ${sizeClass}`}>
      {formatTier(tier)}
    </span>
  );
}
