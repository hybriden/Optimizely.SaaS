import { type CmsComponent } from "@/lib/optimizely-cms";
import { TextBlockDataFragmentDoc, type TextBlockDataFragment } from "@/gql/graphql";
import { sanitizeHtml } from "@/lib/sanitize";

/**
 * Text Block - Futuristic Dark Theme
 */
export const TextBlock : CmsComponent<TextBlockDataFragment> = ({ data, children }) => {
    const textHtml = sanitizeHtml(data.Text?.html);

    if (!textHtml && !children) {
        return null;
    }

    return (
        <section className="section relative">
            <div className="container max-w-4xl">
                {textHtml && (
                    <div className="card animate-slide-up">
                        <div
                            className="richtext-content"
                            dangerouslySetInnerHTML={{ __html: textHtml }}
                        />
                    </div>
                )}
                {children && (
                    <div className="mt-8 grid-2">
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}

TextBlock.displayName = "Text Block (Component/TextBlock)"
TextBlock.getDataFragment = () => ['TextBlockData', TextBlockDataFragmentDoc]

export default TextBlock
