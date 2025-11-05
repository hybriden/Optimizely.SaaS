'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[180px] md:text-[240px] font-semibold text-gray-200 leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Siden ble ikke funnet
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            Beklager, vi kan ikke finne siden du leter etter. Den kan ha blitt flyttet eller slettet.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/"
              className="btn btn-primary btn-large inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Gå til forsiden
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn btn-secondary btn-large inline-flex items-center gap-2"
            >
              Gå tilbake
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
