import { registerTeaser } from '../utils/contentAreaRenderer';
import NewsPageTeaser from './NewsPage/Teaser';
import LandingPageTeaser from './LandingPage/Teaser';
import ArticlePageTeaser from './ArticlePage/Teaser';

// Register all page teasers
// This allows pages to render as beautiful cards when added to content areas
registerTeaser('NewsPage', NewsPageTeaser);
registerTeaser('LandingPage', LandingPageTeaser);
registerTeaser('ArticlePage', ArticlePageTeaser);

// Export for potential use elsewhere
export { NewsPageTeaser, LandingPageTeaser, ArticlePageTeaser };
