# Migration Guide: Removing @remkoj Packages

This guide will help you completely remove the `@remkoj` packages and replace them with the custom Optimizely CMS library.

## What We've Created

A complete custom library at `src/lib/optimizely-cms` that includes:

- ✅ GraphQL Client (`client.ts`)
- ✅ Component Factory (`factory.ts`)
- ✅ Type Definitions (`types.ts`)
- ✅ Server Context (`context.ts`)
- ✅ React Server Components utilities (`rsc.tsx`)
- ✅ Page Generation (`page.tsx`)
- ✅ Preview/Edit Mode (`preview.tsx`)
- ✅ Webhook Handler (`publish.ts`)

## Migration Steps

### Step 1: Update Component Type Imports

Replace all `@remkoj` imports in component files with the custom library.

**Files to update:**
- `src/components/cms/**/*.tsx`
- `src/app/**/*.tsx`

**Find and replace:**

```typescript
// OLD
import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";

// NEW
import { type CmsComponent } from "@/lib/optimizely-cms";
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
```

### Step 2: Update Factory Usage

**File: `src/components/factory.ts`**

```typescript
// OLD
import 'server-only'
import { getFactory as getBaseFactory, RichTextComponentDictionary } from "@remkoj/optimizely-cms-react/rsc";

// NEW
import 'server-only'
import { getFactory as getBaseFactory, RichTextComponentDictionary } from "@/lib/optimizely-cms/rsc";

// Rest stays the same
import components from './cms';

export const factory = getBaseFactory()
factory.registerAll(RichTextComponentDictionary)
factory.registerAll(components)

export default factory
```

### Step 3: Update Main Page Route

**File: `src/app/[[...path]]/page.tsx`**

```typescript
// OLD
import { createPage } from "@remkoj/optimizely-cms-nextjs/page";
import { createClient, AuthMode } from "@remkoj/optimizely-graph-client";

// NEW
import { createPage } from "@/lib/optimizely-cms/page";
import { createClient, AuthMode } from "@/lib/optimizely-cms";

// Rest of the file stays mostly the same
```

### Step 4: Update Preview Page

**File: `src/app/preview/page.tsx`**

```typescript
// OLD
import { createEditPageComponent as createEditPage } from "@remkoj/optimizely-cms-nextjs/preview";
import { createClient } from '@remkoj/optimizely-graph-client'

// NEW
import { createEditPageComponent as createEditPage } from "@/lib/optimizely-cms/preview";
import { createClient } from '@/lib/optimizely-cms'

// Rest stays the same
```

### Step 5: Update Layout

**File: `src/app/layout.tsx`**

```typescript
// OLD
import { getServerContext } from "@remkoj/optimizely-cms-react/rsc";

// NEW
import { getServerContext } from "@/lib/optimizely-cms/rsc";

// Rest stays the same
```

### Step 6: Update Webhook Handler

**File: `src/app/api/content/publish/route.ts`**

```typescript
// OLD
import createPublishApi from '@remkoj/optimizely-cms-nextjs/publish'

// NEW
import createPublishApi from '@/lib/optimizely-cms/publish'

// Rest stays the same
```

### Step 7: Update Sitemap

**File: `src/app/sitemap.ts`**

```typescript
// OLD
import { RouteResolver } from "@remkoj/optimizely-graph-client"

// NEW
import { RouteResolver } from "@/lib/optimizely-cms"

// Rest stays the same
```

### Step 8: Update RSC Utilities in Components

For files using RSC utilities like `CmsEditable`, `OptimizelyComposition`:

```typescript
// OLD
import { CmsEditable, OptimizelyComposition, isNode } from "@remkoj/optimizely-cms-react/rsc";

// NEW
import { CmsEditable, OptimizelyComposition, isNode } from "@/lib/optimizely-cms/rsc";
```

### Step 9: Update Component Type Dictionaries

**Files: `src/components/cms/index.ts`, `page/index.ts`, `component/index.ts`, `experience/index.ts`**

```typescript
// OLD
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";

// NEW
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
```

### Step 10: Update Proxima CLI Templates

**File: `tools/proxima-cli/src/generators/templates.ts`**

```typescript
// OLD
import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";

// NEW
import { type CmsComponent } from "@/lib/optimizely-cms";
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
```

Update the template generation to use the new imports.

### Step 11: Update CodeGen Configuration

**File: `codegen.ts`**

```typescript
// OLD
import getSchemaInfo from '@remkoj/optimizely-graph-client/codegen'
import OptimizelyGraphPreset from '@remkoj/optimizely-graph-functions/preset'

// NEW
// Remove these imports entirely
// You'll use standard GraphQL codegen configuration instead
```

Update the config to remove Optimizely-specific presets and use standard GraphQL codegen.

### Step 12: Remove Package Dependencies

**File: `package.json`**

Remove from `dependencies`:
```json
"@remkoj/optimizely-cms-nextjs": "^5.1.1",
"@remkoj/optimizely-cms-react": "^5.1.1",
"@remkoj/optimizely-graph-client": "^5.1.1",
```

Remove from `devDependencies`:
```json
"@remkoj/optimizely-cms-api": "^5.1.1",
"@remkoj/optimizely-cms-cli": "^5.1.1",
"@remkoj/optimizely-graph-cli": "^5.1.1",
"@remkoj/optimizely-graph-functions": "^5.1.1",
```

### Step 13: Clean Install

```bash
# Remove node_modules and yarn.lock
rm -rf node_modules yarn.lock

# Reinstall
yarn install
```

### Step 14: Update TypeScript Paths (if needed)

**File: `tsconfig.json`**

Ensure paths are set correctly:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

## Testing Checklist

After migration, test these features:

- [ ] Homepage loads correctly
- [ ] Dynamic pages load by path
- [ ] Component rendering works
- [ ] Preview mode works
- [ ] Webhook handler receives and processes events
- [ ] Metadata generation works
- [ ] GraphQL queries execute successfully
- [ ] Static generation (if used)
- [ ] Visual Builder integration (if used)

## Troubleshooting

### Issue: Cannot find module '@/lib/optimizely-cms'

**Solution:** Check your `tsconfig.json` paths configuration and restart your IDE.

### Issue: Components not rendering

**Solution:** Make sure all components are registered in the factory and type names match exactly.

### Issue: GraphQL client authentication fails

**Solution:** Verify your `.env.local` has the correct Optimizely Graph credentials.

### Issue: Preview mode not working

**Solution:** Check that `setEditMode` is being called and the preview URL includes all required parameters.

## Rollback Plan

If you need to rollback:

1. Restore `package.json` from git
2. Run `yarn install`
3. Revert all import changes

Keep the custom library in place - it won't interfere with @remkoj packages.

## Need Help?

The custom library is designed to be a drop-in replacement. If you encounter issues:

1. Check that all imports are updated
2. Verify environment variables are set
3. Check the browser/server console for errors
4. Compare with the working @remkoj implementation
