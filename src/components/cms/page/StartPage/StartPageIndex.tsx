'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { StartPageDataFragmentDoc, type StartPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";

/**
 * StartPage - Professional B2B layout
 */
export const StartPagePage : CmsComponent<StartPageDataFragment> = ({ data, children }) => {
    const heading = data.Heading || '';
    const mainIntro = data.MainIntro || '';
    const mainContentArea = data.MainContentArea || [];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            {(heading || mainIntro) && (
                <section className="section bg-gradient-to-b from-white to-gray-50">
                    <div className="container text-center">
                        <div className="max-w-4xl mx-auto animate-fade-in">
                            {heading && (
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
                                    {heading}
                                </h1>
                            )}
                            {mainIntro && (
                                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                                    {mainIntro}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content Area */}
            {mainContentArea.length > 0 && (
                <div>
                    <ContentAreaRenderer items={mainContentArea} />
                </div>
            )}

            {/* Fallback children */}
            {!mainContentArea.length && children && (
                <div>
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
