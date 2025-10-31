// Component factory - manually maintained
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
import StartPageComponent from "./StartPage/StartPageIndex";
import LandingPageComponent from "./LandingPage/LandingPageIndex";
import ArticlePageComponent from "./ArticlePage/ArticlePageIndex";
import NewsPageComponent from "./NewsPage/NewsPageIndex";

// Build dictionary
export const PageFactory : ComponentTypeDictionary = {
    "StartPage": StartPageComponent,
    "LandingPage": LandingPageComponent,
    "ArticlePage": ArticlePageComponent,
    "NewsPage": NewsPageComponent
};

// Export dictionary
export default PageFactory;
