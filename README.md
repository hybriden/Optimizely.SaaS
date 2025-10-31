# Proxima - Optimizely SaaS CMS Frontend <!-- omit in toc -->

A modern [Next.js](https://nextjs.org()) frontend for [Optimizely SaaS CMS](https://www.optimizely.com/cms) with code-first content type management using the official Optimizely Content JS SDK.

- [Overview](#overview)
- [Key Features](#key-features)
  - [Optimizely Content JS SDK Integration](#optimizely-content-js-sdk-integration)
  - [Custom CMS Integration](#custom-cms-integration)
  - [Component Registry System](#component-registry-system)
- [Preconditions](#preconditions)
- [Getting Started](#getting-started)
  - [1. Install Dependencies](#1-install-dependencies)
  - [2. Configure Environment](#2-configure-environment)
  - [3. Compile GraphQL Types](#3-compile-graphql-types)
  - [4. Start Development Server](#4-start-development-server)
- [Workflow](#workflow)
  - [Adding New Content Types](#adding-new-content-types)
  - [Updating Existing Content Types](#updating-existing-content-types)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
  - [Content Type Detection](#content-type-detection)
  - [Component Registration](#component-registration)
  - [GraphQL Integration](#graphql-integration)
- [Migration Notes](#migration-notes)
- [Debugging](#debugging)

## Overview

Proxima is a modern Next.js frontend for Optimizely SaaS CMS with **code-first content type management**. Content types are defined in TypeScript using the official **Optimizely Content JS SDK** and synchronized to the CMS via REST API.

## Tech Stack

- **Next.js 16** - App Router with React Server Components
- **React 19** - Latest React with concurrent rendering
- **TypeScript 5.8** - Strict type safety
- **Tailwind CSS v4** - Utility-first styling
- **GraphQL** - Type-safe content queries via Optimizely Graph
- **Optimizely Content JS SDK** - Official SDK for content type management (alpha)
- **Yarn 4** - Modern package manager with workspaces

## Key Features

### Optimizely Content JS SDK Integration

This project uses the **official Optimizely Content JS SDK** (@optimizely/cms-sdk) for programmatic content type management:

- **Code-First Content Types**: Define content types in TypeScript (`src/contentTypes/`)
- **Bidirectional Sync**: Push local content type definitions to CMS via REST API
- **Type Safety**: Full TypeScript support with type inference
- **Official CLI**: Use `@optimizely/cms-cli` for authentication and deployment

**Available Commands:**
```bash
yarn opti:login      # Authenticate with Optimizely CMS
yarn opti:push       # Push content types (with --force)
yarn opti:push:safe  # Push safely (checks for breaking changes)
yarn opti:pull       # Pull content type definitions from CMS
```

**Configuration:**
- Content types co-located with components (matches folder name)
  - Example: `src/components/cms/page/StartPage/StartPage.ts`
- Configuration in [optimizely.config.mjs](optimizely.config.mjs)
- OAuth credentials in `.env` file (OPTIMIZELY_CMS_CLIENT_ID, OPTIMIZELY_CMS_CLIENT_SECRET)

**Structure:**
Each content type has its definition co-located with its component:
```
src/components/cms/
├── page/
│   └── StartPage/
│       ├── StartPageIndex.tsx  # React component
│       ├── StartPage.ts        # Content type definition (SDK)
│       ├── StartPage.graphql   # GraphQL fragment
│       └── StartPageTeaser.tsx # Teaser component
└── component/
    └── HeroBlock/
        ├── HeroBlockIndex.tsx  # React component
        ├── HeroBlock.ts        # Content type definition (SDK)
        └── HeroBlock.graphql   # GraphQL fragment
```

**Note**: The SDK is currently in alpha (v0.1.0-alpha.11). System content types (media, folders, BlankSection) are excluded as they're read-only.

### Custom CMS Integration

Located in `src/lib/optimizely-cms/`, this provides:

- Custom GraphQL client with fragment masking
- React Server Components support
- Preview mode functionality
- Dynamic page routing
- Content area rendering with nested components
- Multi-path format support (with/without leading/trailing slashes)

### Component Registry System

- **Centralized Registry**: Single source of truth for all components in `registry.ts` and `client-registry.ts`
- **Dynamic Resolution**: Components resolved by GraphQL `__typename` without hardcoded imports
- **No Prefixes**: Matches GraphQL responses exactly
- **Server/Client Split**: Separate registries for server and client components to avoid circular dependencies
- **Teaser Support**: Automatic teaser card rendering for pages in content areas

## Preconditions

- **Node.js**: Latest LTS version
- **Yarn**: Version 4.3 or newer (Yarn Berry with PnP)
  ```bash
  corepack enable
  corepack install -g yarn@latest
  ```
- **Optimizely SaaS CMS**: An active Optimizely SaaS CMS instance
- **Optimizely Graph**: Configured and running

Check your Yarn version: `yarn --version`

## Getting Started

### 1. Install Dependencies

```bash
yarn install
```

### 2. Configure Environment

Create a `.env.local` file in the root directory:

```bash
# Optimizely CMS URL
OPTIMIZELY_CMS_URL=https://your-instance.cms.optimizely.com/

# Optimizely Graph Configuration
OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com/content/v2
OPTIMIZELY_GRAPH_SINGLE_KEY=your_single_key_here
OPTIMIZELY_GRAPH_APP_KEY=your_app_key_here
OPTIMIZELY_GRAPH_SECRET=your_secret_here

# CMS API Credentials
OPTIMIZELY_CMS_CLIENT_ID=your_client_id
OPTIMIZELY_CMS_CLIENT_SECRET=your_client_secret

# Webhook token for content updates
OPTIMIZELY_PUBLISH_TOKEN=your_random_token_here
```

### 3. Compile GraphQL Types

```bash
yarn compile
```

This runs GraphQL Code Generation to:
- Generate TypeScript types from GraphQL schemas
- Create typed query functions
- Generate fragment types with type safety

### 4. Start Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:3000`

## Workflow

### Adding New Content Types (Code-First Approach)

1. **Create TypeScript content type definition**
   - Create folder: `src/components/cms/page/YourPage/`
   - Create file: `YourPage.ts` with SDK content type definition
   - Example:
   ```typescript
   import { contentType } from '@optimizely/cms-sdk';

   export const YourPageContentType = contentType({
     "key": "YourPage",
     "displayName": "Your Page",
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

2. **Push to CMS**
   ```bash
   yarn opti:push
   ```

3. **Create React component**
   - Create file: `YourPageIndex.tsx`
   - Implement your component design

4. **Create GraphQL fragment**
   - Create file: `YourPage.graphql`
   - Define what data to fetch

5. **Register in factory**
   - Add to `src/components/cms/page/index.ts`

6. **Compile and test**
   ```bash
   yarn compile
   yarn dev
   ```

### Updating Existing Content Types

1. **Update the `.ts` file** with new properties
2. **Push changes**: `yarn opti:push`
3. **Update GraphQL fragment** if properties changed
4. **Update component code** to use new properties
5. **Recompile**: `yarn compile`

## Project Structure

```
.
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── [[...path]]/             # Dynamic page routing
│   │   │   └── page.tsx             # Main page handler
│   │   ├── preview/                 # Preview mode
│   │   └── api/                     # API routes
│   ├── components/
│   │   ├── cms/                     # CMS Components
│   │   │   ├── page/               # Page content types
│   │   │   │   ├── StartPage/
│   │   │   │   ├── LandingPage/
│   │   │   │   └── ArticlePage/
│   │   │   ├── experience/         # Experience content types
│   │   │   │   └── BlankExperience/
│   │   │   ├── component/          # Block/Component content types
│   │   │   │   ├── HeroBlock/
│   │   │   │   ├── TextBlock/
│   │   │   │   └── ...
│   │   │   ├── node.tsx            # Base node component
│   │   │   └── index.ts            # Component factory
│   │   └── factory.ts              # Factory utilities
│   ├── lib/
│   │   └── optimizely-cms/         # Custom CMS integration
│   │       ├── client.ts           # GraphQL client
│   │       ├── factory.tsx         # Component factory
│   │       ├── page.tsx            # Page rendering logic
│   │       ├── preview.tsx         # Preview support
│   │       └── types.ts            # TypeScript types
│   └── gql/                        # Generated GraphQL code
│       ├── queries/
│       ├── fragments/
│       └── graphql.ts              # Generated types
├── codegen.ts                      # GraphQL Codegen config
└── package.json
```

## How It Works

### Content Type Detection

Content types are managed via TypeScript definitions synced through the Optimizely SDK:

```graphql
query GetContentTypes {
  __type(name: "_IContent") {
    possibleTypes {
      name
      interfaces {
        name
      }
    }
  }
}
```

It then analyzes the interfaces to determine the base type:
- `_IPage` interface → placed in `page/` folder
- `_IExperience` interface → placed in `experience/` folder
- `_IComponent` or `_IBlock` interface → placed in `component/` folder

### Component Registration

Components are registered in a factory pattern without prefixes:

```typescript
export const CmsFactory: ComponentTypeDictionary = {
  "Node": NodeComponent,
  "utils/contentAreaRenderer": UtilsContentAreaRendererComponent,
  ...PageFactory,           // ← No prefixes!
  ...ExperienceFactory,
  ...ComponentFactory
};
```

This matches the GraphQL `__typename` exactly, so when GraphQL returns `"StartPage"`, the factory can resolve it directly.

### GraphQL Integration

The custom GraphQL client:
- Uses `@graphql-codegen/client-preset` for type-safe queries
- Implements fragment masking for type safety
- Supports multiple path formats for content routing
- Handles both server-side and client-side rendering

## Component Registry

The project uses a centralized component registry system located in:
- `src/components/cms/registry.ts` - Server-side registry (all components)
- `src/components/cms/client-registry.ts` - Client-side registry (blocks & teasers only)

### Adding Components to Registry

**Automatic (Recommended):**
1. Create component in appropriate folder (`component/`, `page/`, or `experience/`)
2. Add to factory file (`component/index.ts`, `page/index.ts`, or `experience/index.ts`)
3. Component is auto-registered via the registry

**Manual Dynamic Registration:**
```typescript
import { registerComponent, registerTeaser } from '@/components/cms';

// Register a component
registerComponent('MyBlock', MyBlockComponent);

// Register a teaser for a page
registerTeaser('MyPage', MyPageTeaser);
```

### Adding Teasers

Teasers must be added to **both** registries:

1. Create teaser: `src/components/cms/page/MyPage/Teaser.tsx`
2. Add import and register in `registry.ts`
3. Add import and register in `client-registry.ts`

**Note:** Pages are NOT added to `client-registry.ts` to avoid circular dependencies.

## Architecture

This project uses a custom CMS integration built specifically for Optimizely SaaS CMS. Key features:

- **Complete custom implementation**: All CMS integration code is included in the project
- **Optimizely SDK**: Official SDK for code-first content type management
- **Centralized Registry**: Dynamic component resolution without hardcoded dependencies
- **No component prefixes**: Components registered by exact typename
- **Interface-based detection**: Uses GraphQL interfaces to determine content type categories
- **Automated workflow**: Pull, create, compile workflow

## Debugging

**Content not updating after publishing:**
- Locally: Navigate to `http://localhost:3000/api/content/publish?token=YOUR_PUBLISH_TOKEN`
- Hosted: Verify webhook registration with `opti-graph webhook:list`
- Check `SITE_DOMAIN` environment variable (defaults to `$VERCEL_BRANCH_URL`)
- Note: Webhook commands use the `opti-graph` CLI tool (installed via npm)

**GraphQL compilation errors:**
```bash
yarn compile --verbose
```

**Component not found errors:**
- Verify component is registered in the factory
- Check that `__typename` from GraphQL matches the factory key
- Ensure no prefix function in `src/components/cms/index.ts`

**Content type in wrong folder:**
- Check the GraphQL interfaces in Optimizely CMS
- Update the content type `.ts` file and re-push with `yarn opti:push`
- Update GraphQL fragments and component code manually

---

Built with [Next.js](https://nextjs.org/) and [Optimizely SaaS CMS](https://www.optimizely.com/cms)
