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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent"></div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 500 Number */}
        <div className="relative mb-8">
          <h1 className="text-[200px] md:text-[280px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 leading-none animate-fade-in">
            500
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-50">
            <h1 className="text-[200px] md:text-[280px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 leading-none">
              500
            </h1>
          </div>
        </div>
        
        {/* Error Message */}
        <div className="space-y-6 animate-slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Noe gikk galt
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Beklager, det oppstod en feil på serveren. Vi jobber med å løse problemet.
          </p>
          
          {/* Error details (only in development) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-6 p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-red-500/20 text-left">
              <p className="text-sm text-red-400 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={reset}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105"
            >
              <svg className="w-5 h-5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="relative z-10">Prøv igjen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <Link 
              href="/"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-slate-800/70 hover:border-white/20 hover:scale-105"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="relative z-10">Gå til forsiden</span>
            </Link>
          </div>
        </div>
        
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}
