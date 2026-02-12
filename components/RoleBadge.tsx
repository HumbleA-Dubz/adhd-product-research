import React from 'react';

interface RoleBadgeProps {
  role: string;
}

const ROLE_STYLES: Record<string, { bg: string; text: string }> = {
  hub: { bg: 'bg-indigo-900/50 border border-indigo-600/50', text: 'text-indigo-300' },
  receiver: { bg: 'bg-slate-700/50 border border-slate-600/50', text: 'text-slate-300' },
  'partial receiver': { bg: 'bg-slate-700/50 border border-slate-600/50', text: 'text-slate-400' },
  'shared receiver': { bg: 'bg-slate-700/50 border border-slate-600/50', text: 'text-slate-400' },
  amplifier: { bg: 'bg-orange-900/50 border border-orange-600/50', text: 'text-orange-300' },
  standalone: { bg: 'bg-slate-800/50 border border-slate-700/50', text: 'text-slate-400' },
};

export default function RoleBadge({ role }: RoleBadgeProps) {
  const normalized = role.toLowerCase();
  const style = ROLE_STYLES[normalized] || ROLE_STYLES.standalone;
  return (
    <span className={`inline-flex items-center rounded text-xs px-1.5 py-0.5 font-medium ${style.bg} ${style.text}`}>
      {role}
    </span>
  );
}
