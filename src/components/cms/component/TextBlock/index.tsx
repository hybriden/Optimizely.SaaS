import { type CmsComponent } from "@/lib/optimizely-cms";
import { TextBlockDataFragmentDoc, type TextBlockDataFragment } from "@/gql/graphql";

/**
 * Text block
 * 
 */
export const TextBlockComponent : CmsComponent<TextBlockDataFragment> = ({ data, children }) => {
    const textHtml = data.Text?.html || '';
    
    if (!textHtml && !children) {
        return null;
    }
    
    return (
        <div className="w-full py-16 md:py-20 relative overflow-hidden">
            {/* Decorative background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {textHtml && (
                    <div className="relative group">
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div 
                            className="prose prose-xl prose-invert max-w-5xl mx-auto relative
                                       backdrop-blur-md bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 
                                       rounded-3xl p-10 md:p-12 lg:p-14 
                                       border border-white/10 shadow-2xl
                                       text-slate-200 text-lg md:text-xl leading-relaxed
                                       prose-headings:font-bold prose-headings:text-white prose-headings:mb-4 
                                       prose-p:text-slate-200 prose-p:leading-relaxed 
                                       prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-300 
                                       prose-strong:text-white 
                                       prose-ul:list-disc prose-ol:list-decimal"
                            dangerouslySetInnerHTML={{ __html: textHtml }}
                        />
                    </div>
                )}
                {children && (
                    <div className="mt-8 space-y-4">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
TextBlockComponent.displayName = "Text block (Component/TextBlock)"
TextBlockComponent.getDataFragment = () => ['TextBlockData', TextBlockDataFragmentDoc]

export default TextBlockComponent