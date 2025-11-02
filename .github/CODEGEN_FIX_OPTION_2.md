# Option 2: Alternative GraphQL Code Generators

If updating the official package doesn't work, here are alternative approaches:

## A. GraphQL Code Generator with Different Preset

Instead of the `client` preset, use the `typescript` preset with individual plugins:

### Configuration Change

Edit `codegen.ts`:

```typescript
const config: CodegenConfig = {
    schema: [{
        [`${GRAPHQL_ENDPOINT}?auth=${GRAPHQL_KEY}`]: {
            headers: {}
        }
    }],
    documents: [
        'src/**/*.graphql',
        'src/**/!(*.d).{ts,tsx}'
    ],
    generates: {
        './src/gql/graphql.ts': {
            // Instead of preset: 'client', use plugins directly
            plugins: [
                'typescript',
                'typescript-operations',
                'typed-document-node'
            ],
            config: {
                useTypeImports: true,
                skipTypename: false,
                enumsAsTypes: true,
                scalars: {
                    DateTime: 'string',
                    Date: 'string'
                }
            }
        }
    },
    ignoreNoDocuments: false
}
```

### Required Dependencies

```bash
yarn add -D @graphql-codegen/typescript@^4.0.0
yarn add -D @graphql-codegen/typescript-operations@^4.0.0
yarn add -D @graphql-codegen/typed-document-node@^5.0.0
```

### Pros
- More control over output
- Doesn't depend on visitor-plugin-common issues
- Well-established plugins

### Cons
- No automatic fragment masking (would need custom implementation)
- Different API for generated code
- More manual configuration

---

## B. gql.tada (Modern Alternative)

A newer, zero-runtime GraphQL client with full type-safety:

### Installation

```bash
yarn add gql.tada
yarn add -D @0no-co/graphqlsp
```

### Configuration

Create `graphql-env.d.ts`:

```typescript
import { introspection } from './src/gql/introspection';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: typeof introspection;
  }
}
```

### Usage

```typescript
import { graphql } from 'gql.tada';

const ArticlePageQuery = graphql(`
  query GetArticlePage($path: String!) {
    ArticlePage(where: { url: { eq: $path } }) {
      Heading
      Intro
      MainBody { html }
    }
  }
`);
```

### Pros
- ✅ No code generation step needed (uses TypeScript LSP)
- ✅ Better type inference
- ✅ Modern, actively maintained
- ✅ Smaller bundle size

### Cons
- ❌ Different API (requires code changes)
- ❌ Requires VSCode/editor setup
- ❌ Migration effort

---

## C. genql (Type-Safe Query Builder)

Generates a composable, type-safe query builder:

### Installation

```bash
yarn add genql
yarn add -D @genql/cli
```

### Configuration

```json
{
  "scripts": {
    "genql": "genql --endpoint ${GRAPHQL_ENDPOINT}?auth=${GRAPHQL_KEY} --output src/generated"
  }
}
```

### Usage

```typescript
import { createClient } from './generated'

const client = createClient()

const data = await client.query({
  ArticlePage: {
    Heading: true,
    Intro: true,
    MainBody: { html: true }
  }
})
```

### Pros
- ✅ No GraphQL string parsing at runtime
- ✅ Fully type-safe
- ✅ Composable queries

### Cons
- ❌ Different API
- ❌ Migration required
- ❌ Less mature than graphql-codegen

---

## D. Stay with Broken Codegen (Current State)

Keep using the patched package but never run `yarn compile`:

### Strategy

1. **Never regenerate types** - Use existing `src/gql/` files
2. **Manual updates** when schema changes:
   - Download schema with GraphQL introspection
   - Manually update type definitions
   - Or temporarily fix the patch

### Pros
- ✅ No migration needed
- ✅ Works right now

### Cons
- ❌ Cannot update when schema changes
- ❌ Adding new types is painful
- ❌ Technical debt

---

## Recommendation

**Try Option 1 first** (update to official v6.1.0), then:
- If that works: Done! ✅
- If that fails: Try Option 2A (individual plugins)
- If you want modern approach: Consider Option 2B (gql.tada) for new projects

For this existing project with working code, **Option 1 has the highest success probability with minimal changes**.
