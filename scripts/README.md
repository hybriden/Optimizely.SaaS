# Build Scripts

This directory contains automated build tooling for the Proxima.SaaS project.

## 📋 Scripts Overview

### Core Generator Scripts

- **`config.mjs`** - Centralized configuration for all scripts
  - Paths, naming conventions, templates
  - GraphQL type mappings
  - Validation rules
  - Single source of truth for all build tooling

- **`generate-component.mjs`** - Interactive component generator
  - Creates new CMS components (page/component/experience)
  - Generates GraphQL fragments
  - Creates React component boilerplate
  - Updates factory files automatically
  - Regenerates registries after creation

- **`generate-factories.mjs`** - Factory file generator
  - Auto-generates `component/index.ts` (discovers all components)
  - Auto-generates `page/index.ts` (discovers all pages)
  - Auto-generates `experience/index.ts` (discovers all experiences)
  - Scans filesystem for components and creates factory exports

- **`generate-registry.mjs`** - Server-side registry generator
  - Auto-generates `src/components/cms/registry.ts`
  - Imports from auto-generated factories
  - Discovers and registers teasers
  - Server-safe (can use server components)

- **`generate-client-registry.mjs`** - Client-side registry generator
  - Auto-generates `src/components/cms/client-registry.ts`
  - Direct component imports (no factory indirection)
  - Client-safe ('use client' directive)
  - Used by ContentAreaRenderer

- **`generate-shared-fragments.mjs`** - GraphQL fragments generator
  - Auto-generates `src/gql/fragments/shared-fragments.ts`
  - Reads fragment definitions from component .graphql files
  - Combines all fragments into organized categories
  - Eliminates duplicate fragment definitions

- **`generate-functions.mjs`** - GraphQL functions generator
  - Auto-generates `src/gql/functions.ts`
  - Discovers all content types (pages, experiences)
  - Generates GraphQL inline fragments automatically
  - Eliminates hardcoded type references in queries

- **`cleanup-stale-types.mjs`** - Cleanup utility
  - Removes references to deleted content types
  - Cleans factory files
  - Cleans GraphQL queries
  - Run after deleting components

## 🔄 Execution Order

The build chain runs in this order:

```
1. generate-factories.mjs
   ├─ Scans src/components/cms/component/
   ├─ Scans src/components/cms/page/
   ├─ Scans src/components/cms/experience/
   └─ Creates factory index.ts files

2. generate-registry.mjs
   ├─ Imports from factories
   ├─ Discovers teasers
   └─ Creates registry.ts

3. generate-client-registry.mjs
   ├─ Discovers components directly
   ├─ Discovers teasers directly
   └─ Creates client-registry.ts

4. generate-shared-fragments.mjs
   ├─ Reads .graphql files from components
   ├─ Combines fragment definitions
   └─ Creates shared-fragments.ts

5. generate-functions.mjs
   ├─ Discovers pages and experiences
   ├─ Generates GraphQL inline fragments
   └─ Creates functions.ts
```

This order ensures:
- Factories exist before registries import them
- Registries are always in sync with discovered components
- Both server and client registries stay aligned
- GraphQL fragments are extracted from source .graphql files
- GraphQL query functions include all discovered content types

## 🚀 Usage

### Development Workflow

```bash
# Start development server (auto-generates everything)
yarn dev

# Build for production (auto-generates everything)
yarn build

# Full build with types (includes GraphQL codegen)
yarn build:full
```

### Manual Generation

```bash
# Create a new component
yarn generate <ComponentName> <page|component|experience>

# Regenerate all factories
yarn generate:factories

# Regenerate all registries
yarn generate:registries

# Regenerate GraphQL fragments
yarn generate:fragments

# Regenerate GraphQL functions
yarn generate:functions

# Regenerate everything
yarn generate:all

# Clean up stale references
yarn cleanup
```

### Common Scenarios

**Adding a new component:**
```bash
yarn generate BlogPost page
# This automatically:
# 1. Creates BlogPost.ts (content type definition)
# 2. Creates BlogPostIndex.tsx (React component)
# 3. Creates BlogPostTeaser.tsx (if it's a page)
# 4. Creates BlogPost.graphql (GraphQL fragment)
# 5. Regenerates factories
# 6. Regenerates registries
```

**After deleting a component:**
```bash
# Remove the component folder, then:
yarn cleanup
# This removes stale references from factories and queries
```

## ⚙️ Configuration

All paths and patterns are centralized in `config.mjs`:

```javascript
// Example configuration
export const PATHS = {
  cms: {
    component: 'src/components/cms/component',
    page: 'src/components/cms/page',
    experience: 'src/components/cms/experience',
  }
};

export const NAMING = {
  indexFile: (name) => `${name}Index.tsx`,
  teaserFile: (name) => `${name}Teaser.tsx`,
  graphqlFile: (name) => `${name}.graphql`,
};
```

**To change folder structure or naming:**
1. Edit `config.mjs`
2. Run `yarn generate:all`
3. All generators will use the new configuration

## 📂 File Structure

```
scripts/
├── config.mjs                     # Configuration (paths, naming, templates)
├── generate-component.mjs         # Component generator (interactive)
├── generate-factories.mjs         # Factory file generator
├── generate-registry.mjs          # Server registry generator
├── generate-client-registry.mjs   # Client registry generator
├── generate-shared-fragments.mjs  # GraphQL fragments generator
├── generate-functions.mjs         # GraphQL functions generator
├── cleanup-stale-types.mjs        # Cleanup utility
└── README.md                      # This file

Generated Files:
├── src/components/cms/
│   ├── component/index.ts         # AUTO-GENERATED
│   ├── page/index.ts              # AUTO-GENERATED
│   ├── experience/index.ts        # AUTO-GENERATED
│   ├── registry.ts                # AUTO-GENERATED (server-side)
│   └── client-registry.ts         # AUTO-GENERATED (client-side)
├── src/gql/
│   ├── fragments/
│   │   └── shared-fragments.ts    # AUTO-GENERATED
│   └── functions.ts               # AUTO-GENERATED
```

## 🔍 How It Works

### Discovery Pattern

All generators use filesystem scanning to discover components:

```javascript
// Scan directory
const folders = fs.readdirSync(componentDir)
  .filter(dirent => dirent.isDirectory());

// Check for index file
for (const folder of folders) {
  const indexFile = path.join(componentDir, folder, `${folder}Index.tsx`);
  if (fs.existsSync(indexFile)) {
    // Component found, register it
  }
}
```

### Auto-Generation Markers

All auto-generated files include this warning:

```typescript
/**
 * ⚠️  AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * This file is automatically generated by build scripts.
 * Any manual changes will be overwritten on the next build.
 */
```

### Why Auto-Generated Files Are Tracked in Git

Auto-generated registry and factory files are **intentionally tracked in git** to:
- Provide visibility into component registration changes during PR reviews
- Serve as fallback if build scripts fail
- Document the component structure explicitly
- Enable builds without requiring node_modules initially

## 🛠️ Troubleshooting

### "Component not found" errors

**Cause:** Registry out of sync with filesystem

**Solution:**
```bash
yarn generate:all
```

### "Module not found" after adding component

**Cause:** TypeScript types not generated

**Solution:**
```bash
yarn compile  # Regenerate GraphQL types
```

### Factory imports not working

**Cause:** Factory files out of date

**Solution:**
```bash
yarn generate:factories
```

### Build fails with "process.exit(1)"

**Cause:** A generator script encountered an error

**Solution:**
1. Check the error message for details
2. Fix the underlying issue (missing files, invalid syntax, etc.)
3. Run the script again

## 🔗 Integration Points

### With GraphQL Codegen

```bash
yarn build:full
  → graphql-codegen  # Generates types from .graphql files
  → generate:all     # Generates factories and registries
  → next build       # Builds application
```

### With Component Generator

```bash
yarn generate BlogPost page
  → Creates content type file
  → Creates component file
  → Creates GraphQL fragment
  → Calls generate-factories.mjs
  → Calls generate-registry.mjs
  → Calls generate-client-registry.mjs
```

## 📝 Best Practices

1. **Never manually edit auto-generated files** - Your changes will be overwritten
2. **Run `yarn generate:all` after pulling changes** - Ensures registries are in sync
3. **Use `yarn cleanup` after deleting components** - Removes stale references
4. **Keep config.mjs as single source of truth** - Don't hardcode paths elsewhere
5. **Test builds after major changes** - Verify all generators still work

## 🚨 Error Handling

All scripts include comprehensive error handling:

```javascript
try {
  // Script logic
} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  console.error(error.stack);
  process.exit(1);  // Fail CI/CD builds
}
```

This ensures:
- Build failures are properly reported
- CI/CD pipelines fail on errors
- Stack traces help debugging

## 📚 Further Reading

- Main project README: `../README.md`
- Configuration reference: `config.mjs` inline documentation
- Optimizely CMS SDK: https://github.com/episerver/optly-cms-saas-vercel
