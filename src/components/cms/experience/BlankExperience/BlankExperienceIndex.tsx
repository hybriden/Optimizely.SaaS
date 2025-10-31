import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { BlankExperienceDataFragmentDoc, type BlankExperienceDataFragment } from "@/gql/graphql";
import { CmsEditable } from "@/lib/optimizely-cms/rsc";

/**
 * Blank Experience
 * An experience without a predefined layout.
 */
export const BlankExperienceExperience : CmsComponent<BlankExperienceDataFragment> = ({ data }) => {
    // TODO: Add composition rendering when GraphQL schema is properly configured
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        <p>Blank Experience - Configure composition in Optimizely</p>
    </CmsEditable>
}
BlankExperienceExperience.displayName = "Blank Experience (Experience/BlankExperience)"
BlankExperienceExperience.getDataFragment = () => ['BlankExperienceData', BlankExperienceDataFragmentDoc]
BlankExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    // Add your metadata logic here
    return {}
}

export default BlankExperienceExperience