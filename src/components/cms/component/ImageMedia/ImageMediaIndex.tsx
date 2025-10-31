'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { ImageMediaDataFragmentDoc, type ImageMediaDataFragment } from "@/gql/graphql";

/**
 * ImageMedia
 *
 */
export const ImageMediaComponent : CmsComponent<ImageMediaDataFragment> = ({ data, children }) => {
    // TODO: Implement your component logic here

    return (
        <div className="cms-imagemedia">
            <h2>ImageMedia</h2>
            {/* Add your component markup here */}
            {children}
        </div>
    );
}
ImageMediaComponent.displayName = "ImageMedia (component/ImageMedia)"
ImageMediaComponent.getDataFragment = () => ['ImageMediaData', ImageMediaDataFragmentDoc]

export default ImageMediaComponent
