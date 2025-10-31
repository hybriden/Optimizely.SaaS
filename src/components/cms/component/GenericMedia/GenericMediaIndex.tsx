'use client';
// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file

import { type CmsComponent } from "@/lib/optimizely-cms";
import { GenericMediaDataFragmentDoc, type GenericMediaDataFragment } from "@/gql/graphql";

/**
 * GenericMedia
 *
 */
export const GenericMediaComponent : CmsComponent<GenericMediaDataFragment> = ({ data, children }) => {
    // TODO: Implement your component logic here

    return (
        <div className="cms-genericmedia">
            <h2>GenericMedia</h2>
            {/* Add your component markup here */}
            {children}
        </div>
    );
}
GenericMediaComponent.displayName = "GenericMedia (component/GenericMedia)"
GenericMediaComponent.getDataFragment = () => ['GenericMediaData', GenericMediaDataFragmentDoc]

export default GenericMediaComponent
