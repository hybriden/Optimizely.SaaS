'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { NewsPageDataFragmentDoc, type NewsPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";

/**
 * NewsPage - Absolutely stunning professional news page with breathtaking design
 */
export const NewsPageComponent : CmsComponent<NewsPageDataFragment> = ({ data, children }) => {
    const metadata = (data as any)._metadata;
    const publishDate = metadata?.published || '2025-01-01';
    const mainContentArea = (data as any).MainContentArea || [];

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

            <section className="relative w-full py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20 space-y-6">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-sm mb-4">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest">Featured Stories</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 drop-shadow-2xl">
                                Top Stories
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Discover the latest breaking news, in-depth analysis, and exclusive reports from around the world
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap pt-4">
                            {['All', 'Technology', 'Business', 'World', 'Science'].map((filter, idx) => (
                                <button
                                    key={idx}
                                    className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                                        idx === 0
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                                            : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:border-white/20'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Teaser Cards Grid */}
                    {Array.isArray(mainContentArea) && mainContentArea.length > 0 ? (
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative">
                                <ContentAreaRenderer items={mainContentArea} />
                            </div>

                            {/* Load More Section */}
                            <div className="text-center">
                                <div className="inline-flex items-center gap-4 group cursor-pointer">
                                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-500/50 group-hover:to-blue-500 transition-all duration-300"></div>
                                    <button className="px-8 py-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 hover:from-blue-600/20 hover:to-purple-600/20 border border-white/10 hover:border-white/20 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm relative overflow-hidden group">
                                        <span className="relative z-10 flex items-center gap-3">
                                            Load More Stories
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </button>
                                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-500/50 group-hover:to-purple-500 transition-all duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-32">
                            <div className="max-w-2xl mx-auto relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
                                <div className="relative p-12 bg-slate-900/60 rounded-3xl border border-white/10 backdrop-blur-xl">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                                        No Stories Yet
                                    </h3>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        Add compelling stories to the MainContentArea in the CMS and watch them come alive with stunning teaser cards.
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-300 text-sm font-medium">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Configure in CMS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Newsletter CTA */}
                    <div className="relative group mb-32 mt-32">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-pink-600/20 rounded-[2.5rem] blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/95 via-indigo-900/80 to-slate-900/95 rounded-3xl border border-white/20 overflow-hidden backdrop-blur-xl">
                            {/* Animated Background Pattern */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.1)_25%,rgba(99,102,241,0.1)_50%,transparent_50%,transparent_75%,rgba(99,102,241,0.1)_75%,rgba(99,102,241,0.1))] bg-[length:60px_60px] animate-[slide_20s_linear_infinite]"></div>
                            </div>

                            <div className="relative p-16 text-center space-y-8">
                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
                                        <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 rounded-3xl shadow-2xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Heading */}
                                <div className="space-y-4">
                                    <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 leading-tight drop-shadow-2xl">
                                        Never Miss a Story
                                    </h2>
                                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                        Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">50,000+</span> readers getting exclusive insights delivered weekly
                                    </p>
                                </div>

                                {/* Form */}
                                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto pt-4">
                                    <div className="flex-1 relative group/input">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover/input:opacity-100 blur transition-opacity duration-300"></div>
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="relative w-full px-8 py-5 bg-slate-900/90 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all backdrop-blur-xl font-medium text-lg"
                                        />
                                    </div>
                                    <button className="relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl font-bold text-white text-lg overflow-hidden group/btn transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95">
                                        <span className="relative z-10 flex items-center gap-2 justify-center">
                                            Subscribe Now
                                            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex items-center justify-center gap-6 pt-6 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>No spam</span>
                                    </div>
                                    <div className="h-4 w-px bg-slate-700"></div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span>Secure</span>
                                    </div>
                                    <div className="h-4 w-px bg-slate-700"></div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span>Unsubscribe anytime</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section - Premium Design */}
                    <div className="relative mb-20">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-sm mb-6">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-emerald-300 font-semibold text-sm uppercase tracking-widest">Platform Statistics</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-100 drop-shadow-2xl">
                                Our Global Impact
                            </h2>
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                            {[
                                {
                                    label: 'Articles Published',
                                    value: '1,234',
                                    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                                    gradient: 'from-blue-500 to-cyan-500',
                                    glowColor: 'blue-500'
                                },
                                {
                                    label: 'Active Readers',
                                    value: '50K+',
                                    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                                    gradient: 'from-purple-500 to-pink-500',
                                    glowColor: 'purple-500'
                                },
                                {
                                    label: 'Countries Reached',
                                    value: '75+',
                                    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                                    gradient: 'from-emerald-500 to-teal-500',
                                    glowColor: 'emerald-500'
                                },
                                {
                                    label: 'Industry Awards',
                                    value: '15+',
                                    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                                    gradient: 'from-amber-500 to-orange-500',
                                    glowColor: 'amber-500'
                                }
                            ].map((stat, idx) => (
                                <div key={idx} className="relative group cursor-default">
                                    {/* Outer Glow Effect */}
                                    <div className={`absolute -inset-2 bg-gradient-to-r from-${stat.glowColor}/30 via-${stat.glowColor}/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>

                                    {/* Card Container */}
                                    <div className="relative h-full">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                                        </div>

                                        {/* Main Card */}
                                        <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 rounded-3xl border border-white/10 group-hover:border-white/20 p-10 text-center space-y-6 backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-2 shadow-2xl">
                                            {/* Icon Container with Gradient */}
                                            <div className="flex justify-center">
                                                <div className="relative">
                                                    {/* Icon Glow */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                                    {/* Icon Background */}
                                                    <div className={`relative p-5 bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                                        <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={stat.icon} />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Value with Counter Animation Style */}
                                            <div className="space-y-2">
                                                <div className={`text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} drop-shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                                                    {stat.value}
                                                </div>

                                                {/* Decorative Line */}
                                                <div className="flex items-center justify-center gap-2">
                                                    <div className={`h-1 w-8 bg-gradient-to-r ${stat.gradient} rounded-full opacity-50 group-hover:opacity-100 group-hover:w-12 transition-all duration-500`}></div>
                                                </div>
                                            </div>

                                            {/* Label */}
                                            <div className="text-slate-300 font-bold text-lg uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                                                {stat.label}
                                            </div>

                                            {/* Bottom Accent */}
                                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Decorative Element */}
                        <div className="flex justify-center mt-12">
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                <svg className="w-5 h-5 text-emerald-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <span className="text-slate-300 font-semibold text-sm">Growing daily</span>
                            </div>
                        </div>
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
