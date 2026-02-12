import React from 'react';
import type { CompatibilityRating, VulnerabilityRating } from '@/lib/types';

interface CompatibilityCellProps {
  rating: CompatibilityRating;
}

const COMPAT_STYLES: Record<CompatibilityRating, { bg: string; text: string; label: string }> = {
  S: { bg: 'bg-emerald-900/50', text: 'text-emerald-300', label: 'S' },
  P: { bg: 'bg-amber-900/40', text: 'text-amber-300', label: 'P' },
  X: { bg: 'bg-red-900/40', text: 'text-red-300', label: 'X' },
};

export function CompatibilityCell({ rating }: CompatibilityCellProps) {
  const style = COMPAT_STYLES[rating] || COMPAT_STYLES.X;
  return (
    <td className={`px-2 py-1.5 text-center font-semibold text-sm ${style.bg} ${style.text}`}>
      {style.label}
    </td>
  );
}

interface VulnerabilityCellProps {
  rating: VulnerabilityRating;
}

const VULN_STYLES: Record<VulnerabilityRating, { bg: string; text: string; label: string }> = {
  H: { bg: 'bg-red-900/40', text: 'text-red-300', label: 'H' },
  M: { bg: 'bg-amber-900/40', text: 'text-amber-300', label: 'M' },
  L: { bg: 'bg-emerald-900/50', text: 'text-emerald-300', label: 'L' },
};

export function VulnerabilityCell({ rating }: VulnerabilityCellProps) {
  const style = VULN_STYLES[rating] || VULN_STYLES.M;
  return (
    <td className={`px-2 py-1.5 text-center font-semibold text-sm ${style.bg} ${style.text}`}>
      {style.label}
    </td>
  );
}

// Legend component for matrices
export function CompatibilityLegend() {
  return (
    <div className="flex gap-4 text-xs text-slate-400">
      <span><span className="text-emerald-400 font-semibold">S</span> = Strongly compatible</span>
      <span><span className="text-amber-400 font-semibold">P</span> = Partially compatible</span>
      <span><span className="text-red-400 font-semibold">X</span> = Incompatible</span>
    </div>
  );
}

export function VulnerabilityLegend() {
  return (
    <div className="flex gap-4 text-xs text-slate-400">
      <span><span className="text-red-400 font-semibold">H</span> = High vulnerability</span>
      <span><span className="text-amber-400 font-semibold">M</span> = Moderate</span>
      <span><span className="text-emerald-400 font-semibold">L</span> = Low</span>
    </div>
  );
}
