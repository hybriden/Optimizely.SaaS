// Component factory - manually maintained
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
import BlankExperienceComponent from "./BlankExperience/BlankExperienceIndex";

// Build dictionary
export const ExperienceFactory : ComponentTypeDictionary = {
    "BlankExperience": BlankExperienceComponent
};

// Export dictionary
export default ExperienceFactory;
