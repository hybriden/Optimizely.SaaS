// Component factory - manually maintained
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
import TextBlockComponent from "./TextBlock/TextBlockIndex";
import SliderBlockComponent from "./SliderBlock/SliderBlockIndex";
import HeroBlockComponent from "./HeroBlock/HeroBlockIndex";

// Build dictionary
export const ComponentFactory : ComponentTypeDictionary = {
    "TextBlock": TextBlockComponent,
    "SliderBlock": SliderBlockComponent,
    "HeroBlock": HeroBlockComponent,
};

// Export dictionary
export default ComponentFactory;
