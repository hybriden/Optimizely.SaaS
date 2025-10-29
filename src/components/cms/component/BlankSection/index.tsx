'use client';
// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file

import { type CmsComponent } from "@/lib/optimizely-cms";
import { BlankSectionDataFragmentDoc, type BlankSectionDataFragment } from "@/gql/graphql";

/**
 * BlankSection
 *
 */
export const BlankSectionComponent : CmsComponent<BlankSectionDataFragment> = ({ data, children }) => {
    // TODO: Implement your component logic here

    return (
        <div className="cms-blanksection">
            <h2>BlankSection</h2>
            {/* Add your component markup here */}
            {children}
        </div>
    );
}
BlankSectionComponent.displayName = "BlankSection (component/BlankSection)"
BlankSectionComponent.getDataFragment = () => ['BlankSectionData', BlankSectionDataFragmentDoc]

export default BlankSectionComponent
