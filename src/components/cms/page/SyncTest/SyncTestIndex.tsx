'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { SyncTestDataFragmentDoc, type SyncTestDataFragment } from "@/gql/graphql";

/**
 * Sync Test Page Component
 */
export const SyncTestPage: CmsComponent<SyncTestDataFragment> = ({ data, children }) => {
    const displayName = data._metadata?.displayName || 'Sync Test Page';

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{displayName}</h1>

            {/* TODO: Implement your design here */}
            <div className="prose max-w-none">
                <pre className="bg-gray-100 p-4 rounded">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>

            {children}
        </div>
    );
}

SyncTestPage.displayName = "Sync Test Page (Page/SyncTest)";
SyncTestPage.getDataFragment = () => ['SyncTestData', SyncTestDataFragmentDoc];

export default SyncTestPage;
