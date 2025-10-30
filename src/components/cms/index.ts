// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
import NodeComponent from "./node";
import UtilsContentAreaRendererComponent from "./utils/contentAreaRenderer";
import { CmsComponentRegistry } from "./registry";

// Build dictionary using the central registry
export const CmsFactory : ComponentTypeDictionary = {
    "Node": NodeComponent,
    "utils/contentAreaRenderer": UtilsContentAreaRendererComponent,
    ...CmsComponentRegistry
};

// Export dictionary
export default CmsFactory;

// Also export the registry functions for convenience
export {
    registerComponent,
    registerTeaser,
    getComponent,
    getTeaser,
    hasComponent,
    hasTeaser,
    getRegisteredTypes,
    getRegisteredTeasers
} from "./registry";
