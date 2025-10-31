'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { VideoMediaDataFragmentDoc, type VideoMediaDataFragment } from "@/gql/graphql";

/**
 * VideoMedia
 *
 */
export const VideoMediaComponent : CmsComponent<VideoMediaDataFragment> = ({ data, children }) => {
    // TODO: Implement your component logic here

    return (
        <div className="cms-videomedia">
            <h2>VideoMedia</h2>
            {/* Add your component markup here */}
            {children}
        </div>
    );
}
VideoMediaComponent.displayName = "VideoMedia (component/VideoMedia)"
VideoMediaComponent.getDataFragment = () => ['VideoMediaData', VideoMediaDataFragmentDoc]

export default VideoMediaComponent
