'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { StartPageDataFragmentDoc, type StartPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";

/**
 * Startpage Component
 */
export const StartPagePage : CmsComponent<StartPageDataFragment> = ({ data, children }) => {
    const heading = data.Heading || '';
    const mainIntro = data.MainIntro || '';
    const mainContentArea = data.MainContentArea || [];
    
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section with Heading and MainIntro */}
            {(heading || mainIntro) && (
                <section className="relative w-full bg-gradient-to-br from-blue-950 via-purple-950 to-slate-950 py-24 md:py-32 lg:py-40 overflow-hidden">
                    {/* Animated background effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            {heading && (
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight mb-8 px-4 animate-fade-in drop-shadow-2xl">
                                    {heading}
                                </h1>
                            )}
                        </div>
                    </div>
                </section>
            )}
            
            {/* Main Content Area - Generic Renderer */}
            {mainContentArea.length > 0 && (
                <div className="w-full">
                    <ContentAreaRenderer items={mainContentArea} />
                </div>
            )}
            
            {/* Fallback to children if provided by CMS */}
            {!mainContentArea.length && children && (
                <div className="w-full">
                    {children}
                </div>
            )}
        </div>
    );
}
StartPagePage.displayName = "Startpage (Page/StartPage)"
StartPagePage.getDataFragment = () => ['StartPageData', StartPageDataFragmentDoc]
StartPagePage.getMetaData = async (contentLink, locale, client) => {
    // Add your metadata logic here
    return {}
}

export default StartPagePage