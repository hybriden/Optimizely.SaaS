// Component factory - manually maintained
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
import StartPageComponent from "./StartPage/StartPageIndex";
import MyTestComponent from "./MyTest/MyTestIndex";
import LandingPageComponent from "./LandingPage/LandingPageIndex";
import ArticlePageComponent from "./ArticlePage/ArticlePageIndex";
import NewsPageComponent from "./NewsPage/NewsPageIndex";

// Build dictionary
export const PageFactory : ComponentTypeDictionary = {
    "StartPage": StartPageComponent,
    "MyTest": MyTestComponent,
    "LandingPage": LandingPageComponent,
    "ArticlePage": ArticlePageComponent,
    "NewsPage": NewsPageComponent
};

// Export dictionary
export default PageFactory;
