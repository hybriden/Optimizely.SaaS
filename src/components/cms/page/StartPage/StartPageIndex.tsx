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
        <div className="min-h-screen w-full bg-[#DEE5E4]">
            {/* Hero Section with Heading and MainIntro */}
            {(heading || mainIntro) && (
                <section className="relative w-full bg-white py-24 md:py-32 lg:py-40">
                    <div className="max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            {heading && (
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                                    {heading}
                                </h1>
                            )}
                            {mainIntro && (
                                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                                    {mainIntro}
                                </p>
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