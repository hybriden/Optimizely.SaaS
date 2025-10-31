// Component factory - manually maintained
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
import StartPageComponent from "./StartPage/StartPageIndex";
import MyTestComponent from "./MyTest/MyTestIndex";
import LandingPageComponent from "./LandingPage/LandingPageIndex";
import ArticlePageComponent from "./ArticlePage/ArticlePageIndex";
import NewsPageComponent from "./NewsPage/NewsPageIndex";
import SyncTestComponent from "./SyncTest/SyncTestIndex";

// Build dictionary
export const PageFactory : ComponentTypeDictionary = {
    "StartPage": StartPageComponent,
    "MyTest": MyTestComponent,
    "LandingPage": LandingPageComponent,
    "ArticlePage": ArticlePageComponent,
    "NewsPage": NewsPageComponent,
    "SyncTest": SyncTestComponent
};

// Export dictionary
export default PageFactory;
