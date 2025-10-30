import { registerTeaser } from '../utils/contentAreaRenderer';

/**
 * Auto-discover and register all Teaser.tsx components from page subfolders
 *
 * This automatically finds any page type that has a Teaser.tsx file and
 * registers it for rendering in content areas. No manual registration needed!
 *
 * To add a new page teaser:
 * 1. Create YourPageType/Teaser.tsx
 * 2. Export a component as default
 * 3. Done! It will be automatically registered
 */

// Webpack's require.context type definition
interface RequireContext {
  keys(): string[];
  (id: string): any;
  resolve(id: string): string;
}

// Use webpack's require.context to find all Teaser.tsx files
// This looks for any file matching ./*/Teaser.tsx pattern
declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): RequireContext;
};

const teaserModules = require.context('./', true, /^\.\/[^/]+\/Teaser\.tsx$/);

teaserModules.keys().forEach((modulePath) => {
  // Extract page type name from path: ./NewsPage/Teaser.tsx -> NewsPage
  const match = modulePath.match(/^\.\/([^/]+)\/Teaser\.tsx$/);

  if (match) {
    const pageTypeName = match[1];
    const teaserComponent = teaserModules(modulePath).default;

    if (teaserComponent) {
      registerTeaser(pageTypeName, teaserComponent);
      if (process.env.NODE_ENV === 'development') {
        console.log(`[TeaserRegistry] Auto-registered teaser: ${pageTypeName}`);
      }
    }
  }
});
