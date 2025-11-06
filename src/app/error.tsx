'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden bg-[var(--bg-primary)]">
      {/* Subtle teal gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-primary-200)] rounded-full opacity-20 blur-[120px]" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 500 Number with gradient */}
        <div className="mb-8">
          <h1 className="text-[140px] md:text-[200px] font-black text-gradient leading-none">
            500
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Noe gikk galt
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            Beklager, det oppstod en feil på serveren. Vi jobber med å løse problemet.
          </p>

          {/* Error details (only in development) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-6 p-4 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg text-left shadow-md">
              <p className="text-sm text-[var(--color-error)] font-mono break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={reset}
              className="btn btn-primary btn-large inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Prøv igjen
            </button>

            <Link
              href="/"
              className="btn btn-secondary btn-large inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Gå til forsiden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
