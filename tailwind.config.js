/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        compat: {
          s: '#22c55e',
          p: '#f59e0b',
          x: '#ef4444',
        },
        vuln: {
          h: '#ef4444',
          m: '#f59e0b',
          l: '#22c55e',
        },
        cluster: {
          a: '#6366f1',
          b: '#8b5cf6',
          c: '#06b6d4',
          cross: '#f97316',
          standalone: '#64748b',
        },
        tier: {
          1: '#22c55e',
          2: '#f59e0b',
          3: '#ef4444',
          derived: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
};
