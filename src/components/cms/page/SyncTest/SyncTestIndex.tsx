'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { SyncTestDataFragmentDoc, type SyncTestDataFragment } from "@/gql/graphql";

/**
 * SyncTest Page Component
 * Test page for verifying SDK synchronization
 */
export const SyncTestPage: CmsComponent<SyncTestDataFragment> = ({ data, children }) => {
    const displayName = data._metadata?.displayName || 'Sync Test Page';
    const url = data._metadata?.url?.default || '#';

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="w-full py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Success Badge */}
                    <div className="flex gap-2 mb-6">
                        <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-semibold">
                            ✓ SDK Sync Successful
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        {displayName}
                    </h1>

                    {/* Info */}
                    <div className="space-y-3 text-slate-300">
                        <p className="text-lg">
                            This page type was created via the Optimizely SDK and successfully synchronized to the CMS.
                        </p>
                        <p className="text-sm text-slate-400">
                            Content Type: <span className="font-mono text-emerald-400">{data.__typename}</span>
                        </p>
                        <p className="text-sm text-slate-400">
                            Key: <span className="font-mono text-emerald-400">{data._metadata?.key}</span>
                        </p>
                    </div>

                    {/* Properties Info */}
                    <div className="mt-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                        <h2 className="text-xl font-semibold text-white mb-4">Content Type Properties:</h2>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>• Heading (string, required)</li>
                            <li>• Subtitle (string)</li>
                            <li>• MainIntro (richText)</li>
                            <li>• MainBody (contentReference)</li>
                            <li>• IsPublished (boolean)</li>
                            <li>• Priority (string)</li>
                            <li>• PublishDate (string)</li>
                            <li>• ContentArea (array of content)</li>
                            <li>• Tags (array of strings)</li>
                            <li>• ExternalLink (string)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {children && (
                <div className="w-full py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

SyncTestPage.displayName = "Sync Test Page (Page/SyncTest)";
SyncTestPage.getDataFragment = () => ['SyncTestData', SyncTestDataFragmentDoc];

export default SyncTestPage;
