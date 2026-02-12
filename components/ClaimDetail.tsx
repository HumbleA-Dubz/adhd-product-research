import React from 'react';
import type { AllData, Claim } from '@/lib/types';
import ClaimTypeBadge from './ClaimTypeBadge';
import EntityLink from './EntityLink';

interface ClaimDetailProps {
  claim: Claim;
  data: AllData;
  compact?: boolean;
}

export default function ClaimDetail({ claim, data, compact = false }: ClaimDetailProps) {
  if (compact) {
    return (
      <div id={`claim-${claim.key}`} className="border-l-2 border-slate-700 pl-3 py-1">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xs text-slate-500 font-mono">{claim.key}</span>
          <ClaimTypeBadge type={claim.type} />
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">{claim.statement}</p>
        {claim.sources.length > 0 && (
          <div className="flex gap-2 mt-1 flex-wrap">
            {claim.sources.map((sourceId) => (
              <EntityLink key={sourceId} id={sourceId} data={data} className="text-xs" />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div id={`claim-${claim.key}`} className="bg-slate-800/50 rounded-lg border border-slate-700 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-slate-500 font-mono">{claim.key}</span>
        <ClaimTypeBadge type={claim.type} />
      </div>
      <p className="text-slate-200 leading-relaxed">{claim.statement}</p>
      {claim.comments && (
        <p className="text-sm text-slate-400 mt-2 italic">{claim.comments}</p>
      )}
      {claim.sources.length > 0 && (
        <div className="mt-3 flex gap-2 flex-wrap items-center">
          <span className="text-xs text-slate-500">Sources:</span>
          {claim.sources.map((sourceId) => (
            <EntityLink key={sourceId} id={sourceId} data={data} className="text-xs" />
          ))}
        </div>
      )}
      {claim.relationships && (
        <div className="mt-2 flex gap-4 flex-wrap text-xs text-slate-500">
          {claim.relationships.supports && claim.relationships.supports.length > 0 && (
            <span>
              Supports:{' '}
              {claim.relationships.supports.map((id, i) => (
                <React.Fragment key={id}>
                  {i > 0 && ', '}
                  <EntityLink id={id} data={data} className="text-xs" />
                </React.Fragment>
              ))}
            </span>
          )}
          {claim.relationships.challenged_by && claim.relationships.challenged_by.length > 0 && (
            <span>
              Challenged by:{' '}
              {claim.relationships.challenged_by.map((id, i) => (
                <React.Fragment key={id}>
                  {i > 0 && ', '}
                  <EntityLink id={id} data={data} className="text-xs" />
                </React.Fragment>
              ))}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// Renders a list of claims by their IDs
export function ClaimsList({ claimIds, data, compact = true }: { claimIds: string[]; data: AllData; compact?: boolean }) {
  if (claimIds.length === 0) return null;

  const claims = claimIds
    .map((id) => data.claims.find((c) => c.key === id))
    .filter((c): c is Claim => c != null);

  if (claims.length === 0) return null;

  return (
    <div className="space-y-2">
      {claims.map((claim) => (
        <ClaimDetail key={claim.key} claim={claim} data={data} compact={compact} />
      ))}
    </div>
  );
}
