'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { NewsPageDataFragmentDoc, type NewsPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";

/**
 * NewsPage - An insanely cool news page with stunning animations and visual effects
 */
export const NewsPageComponent : CmsComponent<NewsPageDataFragment> = ({ data, children }) => {
    const metadata = (data as any)._metadata;
    const publishDate = metadata?.published || '2025-01-01';
    const mainContentArea = (data as any).MainContentArea || [];

    // Debug logging to see what we're getting
    if (typeof window !== 'undefined') {
        console.log('NewsPage data:', data);
        console.log('MainContentArea:', mainContentArea);
        console.log('MainContentArea is array?', Array.isArray(mainContentArea));
        console.log('MainContentArea length:', Array.isArray(mainContentArea) ? mainContentArea.length : 'not array');
    }

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
            </div>

            <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 border border-red-500/30 backdrop-blur-sm">
                            <div className="relative flex items-center">
                                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                            </div>
                            <span className="text-red-300 font-bold text-sm uppercase tracking-wider">Breaking News</span>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-6">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                            Latest News
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 leading-tight drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                            & Updates
                        </span>
                    </h1>

                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-slate-300 font-medium">{formatDate(publishDate)}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Render pages from MainContentArea as teaser cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        <ContentAreaRenderer items={mainContentArea} />
                    </div>

                    <div className="relative group mb-20">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/95 via-indigo-900/95 to-slate-900/95 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-md p-12">
                            <div className="relative text-center space-y-6">
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                                        <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                    Stay in the Loop
                                </h2>
                                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                                    Get the latest news and updates delivered straight to your inbox.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all backdrop-blur-sm"
                                    />
                                    <button className="relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white overflow-hidden group/btn transition-all hover:scale-105">
                                        <span className="relative z-10">Subscribe</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        {[
                            { label: 'Articles', value: '1,234', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                            { label: 'Readers', value: '50K+', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                            { label: 'Countries', value: '75+', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                            { label: 'Awards', value: '15+', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' }
                        ].map((stat, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl border border-white/10 p-8 text-center space-y-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                                    <div className="flex justify-center">
                                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10">
                                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-slate-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {children && (
                <section className="relative w-full py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {children}
                    </div>
                </section>
            )}
        </div>
    );
}

NewsPageComponent.displayName = "NewsPage (page/NewsPage)"
NewsPageComponent.getDataFragment = () => ['NewsPageData', NewsPageDataFragmentDoc]

export default NewsPageComponent
