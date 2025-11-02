# Option 1: Update to Official Latest Version

## Steps to Fix

### 1. Remove the patched package resolution

Edit `package.json` and remove the resolutions section:

```diff
- "resolutions": {
-   "@graphql-codegen/visitor-plugin-common": "file:./packages/graphql-codegen-visitor-plugin-common-v5.8.0-patched.tgz"
- },
- "comments": {
-   "resolutions": "Patched version fixes TypeScript issues with fragment generation. Remove when official @graphql-codegen/visitor-plugin-common > v5.8.0 is available."
- }
```

### 2. Clean install dependencies

```bash
# Remove node_modules and lock file
rm -rf node_modules
rm yarn.lock

# Reinstall with official packages
yarn install
```

### 3. Test the code generation

```bash
yarn compile
```

### 4. Verify the output

Check that `src/gql/graphql.ts` has proper field names:

```typescript
export type ArticlePage = IData & _IContent & _IPage & {
  __typename?: 'ArticlePage';
  Heading?: Maybe<Scalars['String']['output']>;  // ✅ Should be proper names
  Intro?: Maybe<Scalars['String']['output']>;
  MainBody?: Maybe<RichText>;
  // ... rest of fields
};
```

### 5. Build the project

```bash
yarn build
```

## Expected Outcome

✅ Code generation works without `undefined` fields
✅ Build completes successfully
✅ Fragment masking still works (the original reason for the patch)

## Rollback Plan

If this doesn't work, restore the old configuration:

```bash
git checkout package.json
yarn install
git checkout src/gql/
```
