# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Proxima is a Next.js 16 frontend for Optimizely SaaS CMS with **code-first content type management**. Content types are defined in TypeScript using the official Optimizely Content JS SDK (currently in alpha) and synchronized to the CMS via REST API.

**Tech Stack:**
- Next.js 16 (App Router, React Server Components)
- React 19
- TypeScript 5.8 (strict mode)
- Tailwind CSS v4
- GraphQL with type generation (@graphql-codegen/client-preset)
- Optimizely Content JS SDK (@optimizely/cms-sdk)
- Yarn 4 (Berry with PnP)

## Essential Commands

### Development
```bash
yarn dev              # Generate all files + start dev server
yarn build            # Generate all files + build for production
yarn build:full       # Compile GraphQL types + generate + build (full pipeline)
```

### GraphQL Type Generation
```bash
yarn compile          # Generate TypeScript types from GraphQL schemas
yarn watch            # Watch mode for GraphQL codegen
```

### Code Generation (Auto-Generated Files)
```bash
yarn generate:all           # Regenerate ALL auto-generated files
yarn generate:factories     # Regenerate component factory index files
yarn generate:registries    # Regenerate server & client registries
yarn generate:fragments     # Regenerate shared GraphQL fragments
yarn generate:functions     # Regenerate GraphQL query functions
```

### Component Generation
```bash
yarn generate <Name> <page|component|experience>
# Example: yarn generate BlogPost page
# Creates: BlogPost.ts, BlogPostIndex.tsx, BlogPost.graphql, BlogPostTeaser.tsx
# Then auto-runs: generate:factories, generate:registries
```

### Content Type Management (Optimizely SDK)
```bash
yarn opti:login       # Authenticate with Optimizely CMS
yarn opti:push        # Push content types to CMS (with --force)
yarn opti:push:safe   # Push safely (checks for breaking changes)
```

### Linting & Cleanup
```bash
yarn lint             # Run Next.js ESLint
yarn cleanup          # Remove stale type references after deleting components
```

## Critical Architecture Concepts

### Code-First Content Management

**⚠️ IMPORTANT:** TypeScript content type definitions are the **single source of truth**.

- ✅ Edit `.ts` files → Push to CMS (`yarn opti:push`)
- ❌ NEVER pull from CMS (no `opti:pull` - intentionally removed)
- ✅ GraphQL schema is auto-fetched during `yarn compile`
- Content type definitions live in: `src/components/cms/{page|component|experience}/ComponentName/ComponentName.ts`

**Example content type definition:**
```typescript
import { contentType } from '@optimizely/cms-sdk';

export const MyPageContentType = contentType({
  "key": "MyPage",
  "displayName": "My Page",
  "baseType": "_page",
  "properties": {
    "Heading": {
      "type": "string",
      "displayName": "Heading",
      "required": true
    }
  }
});
```

### Component Structure (Co-location Pattern)

Each CMS component has **all related files in one folder**:

```
src/components/cms/page/StartPage/
├── StartPage.ts              # Content type definition (SDK)
├── StartPageIndex.tsx        # React component
├── StartPage.graphql         # GraphQL fragment
└── StartPageTeaser.tsx       # Teaser/card component (pages only)
```

**Naming conventions are strict:**
- Folder name MUST match component name (e.g., `StartPage/`)
- Content type: `{Name}.ts`
- React component: `{Name}Index.tsx`
- GraphQL fragment: `{Name}.graphql`
- Teaser: `{Name}Teaser.tsx`

### Auto-Generated Files (DO NOT EDIT)

These files are **automatically generated** by build scripts. Manual edits will be overwritten:

```
src/components/cms/
├── component/index.ts        # AUTO-GENERATED factory
├── page/index.ts             # AUTO-GENERATED factory
├── experience/index.ts       # AUTO-GENERATED factory
├── registry.ts               # AUTO-GENERATED (server-side registry)
└── client-registry.ts        # AUTO-GENERATED (client-side registry)

src/gql/
├── fragments/shared-fragments.ts  # AUTO-GENERATED
└── functions.ts                   # AUTO-GENERATED
```

**Important:** These files are tracked in git to provide PR visibility and serve as fallback.

### Component Registry System

The project uses a **centralized registry** for dynamic component resolution:

- **Server Registry** (`registry.ts`): All components (pages, blocks, experiences)
- **Client Registry** (`client-registry.ts`): Only blocks and teasers (to avoid circular dependencies)

**How it works:**
1. Build scripts scan filesystem for components
2. Factories are auto-generated with imports
3. Registries combine factories into lookup dictionaries
4. Components are resolved by GraphQL `__typename` (NO prefixes)

**Adding components:**
- Use `yarn generate <Name> <type>` (recommended)
- OR manually create files following naming conventions, then run `yarn generate:all`

### GraphQL Integration

- **Fragment Masking:** Uses `@graphql-codegen/client-preset` for type safety
- **Type Safety:** Full TypeScript types generated from GraphQL schema
- **Fragments:** Defined in `.graphql` files, combined into `shared-fragments.ts`
- **Queries:** Use typed document nodes from `src/gql/graphql.ts`

**GraphQL client configuration:**
- Location: `src/lib/optimizely-cms/client.ts`
- Supports preview tokens for draft content
- Multi-path format support (with/without leading/trailing slashes)

### Custom CMS Integration

**Location:** `src/lib/optimizely-cms/`

This is a **complete custom implementation** (not a package). Key modules:
- `client.ts` - GraphQL client with auth modes
- `factory.tsx` - Component factory pattern
- `page.tsx` - Page rendering logic
- `preview.tsx` - Preview/edit mode support
- `context.ts` - Server context management
- `publish.ts` - Webhook handling for content updates
- `types.ts` - Core TypeScript types

## Workflow Guidelines

### Adding New Content Types

1. **Create content type definition:**
   ```bash
   yarn generate BlogPost page
   ```
   This creates:
   - `BlogPost.ts` (with SDK definition)
   - `BlogPostIndex.tsx` (React component)
   - `BlogPost.graphql` (GraphQL fragment with all properties)
   - `BlogPostTeaser.tsx` (if type is "page")
   - Auto-updates factories and registries

2. **Push to CMS:**
   ```bash
   yarn opti:push
   ```

3. **Customize component:**
   - Edit `BlogPostIndex.tsx` to implement design
   - Adjust `BlogPost.graphql` if needed

4. **Compile and test:**
   ```bash
   yarn compile
   yarn dev
   ```

### Updating Existing Content Types

1. **Update `.ts` file** with new properties
2. **Push changes:** `yarn opti:push`
3. **Re-run generator** to update GraphQL fragment:
   ```bash
   yarn generate BlogPost page
   ```
   - ✅ Preserves custom component code
   - ✅ Adds only new properties to GraphQL
   - ✅ Skips already-registered factory entries
4. **Update component** to use new properties
5. **Recompile:** `yarn compile`

### Deleting Components

1. Delete the component folder
2. Run cleanup script:
   ```bash
   yarn cleanup
   ```
   This removes stale references from factories and queries.

### Working with Preview Mode

Preview endpoint: `src/app/preview/page.tsx`

**Configuration:**
- `fetchCache = "force-no-store"` - No fetch caching
- `dynamic = "force-dynamic"` - Force SSR
- `revalidate = 0` - No page caching

**Preview URL format:**
```
/preview?key={contentKey}&ver={version}&loc={locale}&ctx={edit|preview}&preview_token={token}
```

**Context modes:**
- `ctx=edit` - On-Page Editing with property overlays
- `ctx=preview` - Read-only content preview

### Content Type Categories

Content types are categorized by GraphQL interfaces:

- `_IPage` interface → `src/components/cms/page/`
- `_IExperience` interface → `src/components/cms/experience/`
- `_IComponent` or `_IBlock` interface → `src/components/cms/component/`

## Important Conventions

### Path Aliases
```typescript
"@/*" -> "./src/*"
```

### TypeScript Configuration
- Strict mode enabled
- JSX: react-jsx (React 19 automatic runtime)
- Module resolution: bundler
- Target: ES2017

### Content Area Rendering
- Content areas render nested components
- Pages in content areas render as **teasers** (not full page components)
- Teaser components must be in both `registry.ts` AND `client-registry.ts`

### Environment Variables
Required in `.env.local`:
```bash
OPTIMIZELY_CMS_URL=https://your-instance.cms.optimizely.com/
OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com/content/v2
OPTIMIZELY_GRAPH_SINGLE_KEY=your_key
OPTIMIZELY_GRAPH_APP_KEY=your_key
OPTIMIZELY_GRAPH_SECRET=your_secret
OPTIMIZELY_CMS_CLIENT_ID=your_client_id
OPTIMIZELY_CMS_CLIENT_SECRET=your_client_secret
OPTIMIZELY_PUBLISH_TOKEN=your_random_token
```

## Debugging Tips

**Content not updating after publish:**
- Locally: Visit `/api/content/publish?token=YOUR_PUBLISH_TOKEN`
- Check `SITE_DOMAIN` environment variable

**GraphQL compilation errors:**
```bash
yarn compile --verbose
```

**Component not found:**
- Verify component is in registry: Check `registry.ts`
- Ensure `__typename` from GraphQL matches registry key (no prefixes)
- Run `yarn generate:all` to regenerate registries

**Content type in wrong folder:**
- Check GraphQL interfaces in Optimizely CMS
- Update `.ts` file with correct `baseType`
- Re-push: `yarn opti:push`

**Stale type errors after deletion:**
```bash
yarn cleanup
yarn compile
```

## Known Limitations

- Optimizely SDK is in **alpha** (v0.1.0-alpha.11) - expect breaking changes
- System content types (media, folders, BlankSection) are read-only and excluded
- Preview tokens expire after **5 minutes**
- HTTPS required for On-Page Editing in production

## File Discovery Patterns

Build scripts use filesystem scanning:
```javascript
// Looks for: FolderName/FolderNameIndex.tsx
const folders = fs.readdirSync('src/components/cms/page/')
  .filter(item => item.isDirectory());
```

**Critical:** Component folders MUST contain `{Name}Index.tsx` to be discovered.
