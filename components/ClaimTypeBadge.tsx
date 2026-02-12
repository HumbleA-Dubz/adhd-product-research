import React from 'react';

interface ClaimTypeBadgeProps {
  type: string;
}

const TYPE_STYLES: Record<string, { bg: string; text: string }> = {
  observation: { bg: 'bg-blue-900/40 border border-blue-700/50', text: 'text-blue-300' },
  interpretation: { bg: 'bg-violet-900/40 border border-violet-700/50', text: 'text-violet-300' },
  synthesis: { bg: 'bg-indigo-900/40 border border-indigo-700/50', text: 'text-indigo-300' },
  caveat: { bg: 'bg-orange-900/40 border border-orange-700/50', text: 'text-orange-300' },
};

export default function ClaimTypeBadge({ type }: ClaimTypeBadgeProps) {
  const style = TYPE_STYLES[type] || TYPE_STYLES.observation;
  return (
    <span className={`inline-flex items-center rounded text-xs px-1.5 py-0.5 font-medium ${style.bg} ${style.text}`}>
      {type}
    </span>
  );
}
