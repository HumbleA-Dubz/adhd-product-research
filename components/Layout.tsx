import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  counts?: {
    problems: number;
    models: number;
    foundations: number;
    claims: number;
    sources: number;
  };
}

const NAV_ITEMS = [
  { href: '/', label: 'Problem Landscape', shortLabel: 'Problems' },
  { href: '/options', label: 'Option Space', shortLabel: 'Options' },
  { href: '/foundations', label: 'What We\'d Need', shortLabel: 'Foundations' },
];

export default function Layout({ children, counts }: LayoutProps) {
  const router = useRouter();
  const basePath = process.env.NODE_ENV === 'production' ? '/adhd-product-research' : '';
  const currentPath = router.pathname;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-semibold text-slate-100">
                ADHD Workplace Research
              </h1>
              <span className="hidden sm:inline text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded">
                System of Record
              </span>
            </div>
            <nav className="flex gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden">{item.shortLabel}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        {children}
      </main>

      {/* Footer with counts */}
      {counts && (
        <footer className="border-t border-slate-800 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
            <div className="flex flex-wrap gap-4 text-xs text-slate-500">
              <span>{counts.problems} problems</span>
              <span>{counts.models} engagement models</span>
              <span>{counts.foundations} foundations</span>
              <span>{counts.claims} claims</span>
              <span>{counts.sources} sources</span>
              <span className="ml-auto">Read-only view of YAML data</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
