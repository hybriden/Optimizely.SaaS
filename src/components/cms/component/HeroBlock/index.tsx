import { type CmsComponent } from "@/lib/optimizely-cms";
import { HeroBlockDataFragmentDoc, type HeroBlockDataFragment } from "@/gql/graphql";
import Image from "next/image";

/**
 * Hero
 * 
 */
export const HeroBlockComponent : CmsComponent<HeroBlockDataFragment> = ({ data, children }) => {
    const heading = data.Heading || '';
    const mainIntro = data.MainIntro?.html || '';
    const width = data.Width || 'Full';
    const imageUrl = (data.Image as any)?.url?.default || '';
    
    // Extract ContentLink - use default path for internal links, or full URL for external
    const contentLinkData = (data as any).ContentLink;
    const contentLink = contentLinkData?.url?.default || '';
    
    const widthClasses = {
        'Full': 'max-w-full',
        'Wide': 'max-w-7xl',
        'Medium': 'max-w-5xl',
        'Narrow': 'max-w-3xl'
    };
    
    const containerWidth = widthClasses[width as keyof typeof widthClasses] || widthClasses['Full'];
    
    return (
        <section className="relative w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-20 md:py-28 lg:py-36 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
            
            <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerWidth} relative z-10`}>
                <div className="flex flex-col gap-10">
                    {/* Heading and Text Section */}
                    <div className="space-y-8 text-center">
                        {heading && (
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-fade-in">
                                {heading}
                            </h2>
                        )}
                        {mainIntro && (
                            <div 
                                className="prose prose-xl prose-invert max-w-3xl text-slate-300 mx-auto text-lg md:text-xl animate-slide-in-up"
                                dangerouslySetInnerHTML={{ __html: mainIntro }}
                            />
                        )}
                        {contentLink && (
                            <div className="flex justify-center mt-8 animate-slide-in-up">
                                <a 
                                    href={contentLink}
                                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                                >
                                    <span className="relative z-10">Les mer</span>
                                    <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            </div>
                        )}
                        {children && (
                            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                                {children}
                            </div>
                        )}
                    </div>
                    
                    {/* Image Section */}
                    {imageUrl && (
                        <div className="relative h-[400px] lg:h-[500px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group animate-fade-in">
                            {contentLink ? (
                                <a href={contentLink} className="block w-full h-full">
                                    <Image
                                        src={imageUrl}
                                        alt={heading || 'Hero image'}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
                                </a>
                            ) : (
                                <>
                                    <Image
                                        src={imageUrl}
                                        alt={heading || 'Hero image'}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
HeroBlockComponent.displayName = "Hero (Component/HeroBlock)"
HeroBlockComponent.getDataFragment = () => ['HeroBlockData', HeroBlockDataFragmentDoc]

export default HeroBlockComponent