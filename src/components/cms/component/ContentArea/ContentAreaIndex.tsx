import { type CmsComponent } from "@/lib/optimizely-cms";
import { ContentAreaDataFragmentDoc, type ContentAreaDataFragment } from "@/gql/graphql";
import { ErrorBoundary } from "@/components/ErrorBoundary";

/**
 * ContentArea
 * A reusable component to define a content area.
 * ✅ Error Handling: Wrapped with ErrorBoundary for graceful error recovery
 */
export const ContentAreaComponent : CmsComponent<ContentAreaDataFragment> = ({ data, children }) => {
    if (!children) {
        return null;
    }

    return (
        <div className="w-full">
            <ErrorBoundary>
                <div className="flex flex-col gap-0">
                    {children}
                </div>
            </ErrorBoundary>
        </div>
    );
}
ContentAreaComponent.displayName = "ContentArea (Component/ContentArea)"
ContentAreaComponent.getDataFragment = () => ['ContentAreaData', ContentAreaDataFragmentDoc]

export default ContentAreaComponent