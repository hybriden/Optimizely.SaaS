'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { StartPageDataFragmentDoc, type StartPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";

/**
 * StartPage - Futuristic Dark Neon Theme
 */
export const StartPagePage : CmsComponent<StartPageDataFragment> = ({ data, children }) => {
    const heading = data.Heading || '';
    const mainIntro = data.MainIntro || '';
    const mainContentArea = data.MainContentArea || [];

    return (
        <div className="min-h-screen relative">
            {/* Hero Section with glowing background */}
            {(heading || mainIntro) && (
                <section className="relative section section-glow overflow-hidden">
                    {/* Animated gradient orbs */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--neon-cyan)] rounded-full opacity-10 blur-[150px] animate-float" />
                    <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[var(--neon-purple)] rounded-full opacity-10 blur-[150px] animate-float" style={{ animationDelay: '3s' }} />
                    <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-[var(--neon-pink)] rounded-full opacity-10 blur-[150px] animate-float" style={{ animationDelay: '6s' }} />

                    <div className="container text-center relative z-10">
                        <div className="max-w-5xl mx-auto animate-slide-up">
                            {heading && (
                                <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent">
                                    {heading}
                                </h1>
                            )}
                            {mainIntro && (
                                <p className="text-xl md:text-2xl lg:text-3xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto">
                                    {mainIntro}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Bottom neon line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-50" />
                </section>
            )}

            {/* Main Content Area with dark styling */}
            {mainContentArea.length > 0 && (
                <div className="relative">
                    <ContentAreaRenderer items={mainContentArea} />
                </div>
            )}

            {/* Fallback children */}
            {!mainContentArea.length && children && (
                <div className="relative">
                    {children}
                </div>
            )}
        </div>
    );
}

StartPagePage.displayName = "StartPage (Page/StartPage)"
StartPagePage.getDataFragment = () => ['StartPageData', StartPageDataFragmentDoc]
StartPagePage.getMetaData = async (contentLink, locale, client) => {
    return {}
}

export default StartPagePage
