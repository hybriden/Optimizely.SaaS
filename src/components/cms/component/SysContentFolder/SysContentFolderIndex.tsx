'use client';
// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file

import { type CmsComponent } from "@/lib/optimizely-cms";
import { SysContentFolderDataFragmentDoc, type SysContentFolderDataFragment } from "@/gql/graphql";

/**
 * SysContentFolder
 *
 */
export const SysContentFolderComponent : CmsComponent<SysContentFolderDataFragment> = ({ data, children }) => {
    // TODO: Implement your component logic here

    return (
        <div className="cms-syscontentfolder">
            <h2>SysContentFolder</h2>
            {/* Add your component markup here */}
            {children}
        </div>
    );
}
SysContentFolderComponent.displayName = "SysContentFolder (component/SysContentFolder)"
SysContentFolderComponent.getDataFragment = () => ['SysContentFolderData', SysContentFolderDataFragmentDoc]

export default SysContentFolderComponent
