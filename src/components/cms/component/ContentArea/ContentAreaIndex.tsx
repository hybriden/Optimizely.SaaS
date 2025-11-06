import { type CmsComponent } from "@/lib/optimizely-cms";
import { ContentAreaDataFragmentDoc, type ContentAreaDataFragment } from "@/gql/graphql";

/**
 * ContentArea
 * A reusable component to define a content area.
 */
export const ContentArea : CmsComponent<ContentAreaDataFragment> = ({ data, children }) => {
    if (!children) {
        return null;
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-0">
                {children}
            </div>
        </div>
    );
}
ContentArea.displayName = "ContentArea (Component/ContentArea)"
ContentArea.getDataFragment = () => ['ContentAreaData', ContentAreaDataFragmentDoc]

export default ContentArea