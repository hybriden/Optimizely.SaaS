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
        <div className="w-full py-20 md:py-28 bg-white">
            <div className="max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8">
                {textHtml && (
                    <div className="richtext-content">
                        <div
                            className="prose prose-lg max-w-4xl mx-auto
                                       prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-6
                                       prose-p:text-gray-800 prose-p:leading-relaxed prose-p:font-light
                                       prose-a:text-[#75E6DA] prose-a:no-underline hover:prose-a:text-[#5fd1c0]
                                       prose-strong:text-gray-900
                                       prose-ul:list-disc prose-ol:list-decimal"
                            dangerouslySetInnerHTML={{ __html: textHtml }}
                        />
                    </div>
                )}
                {children && (
                    <div className="mt-12 space-y-6">
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