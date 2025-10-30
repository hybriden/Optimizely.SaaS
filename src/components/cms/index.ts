// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
import NodeComponent from "./node";
import UtilsContentAreaRendererComponent from "./utils/contentAreaRenderer";
import PageFactory from "./page";
import ExperienceFactory from "./experience";
import ComponentFactory from "./component";

// Register page teasers for content area rendering
import "./page/teaserRegistry";

// Build dictionary
export const CmsFactory : ComponentTypeDictionary = {
    "Node": NodeComponent,
    "utils/contentAreaRenderer": UtilsContentAreaRendererComponent,
    ...PageFactory,
    ...ExperienceFactory,
    ...ComponentFactory
};

// Export dictionary
export default CmsFactory;
