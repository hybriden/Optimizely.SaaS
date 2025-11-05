import { type CmsComponent } from "@/lib/optimizely-cms";
import { TextBlockDataFragmentDoc, type TextBlockDataFragment } from "@/gql/graphql";

/**
 * Text Block - Professional styling
 */
export const TextBlockComponent : CmsComponent<TextBlockDataFragment> = ({ data, children }) => {
    const textHtml = data.Text?.html || '';

    if (!textHtml && !children) {
        return null;
    }

    return (
        <section className="section section-gray">
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

TextBlockComponent.displayName = "Text Block (Component/TextBlock)"
TextBlockComponent.getDataFragment = () => ['TextBlockData', TextBlockDataFragmentDoc]

export default TextBlockComponent
