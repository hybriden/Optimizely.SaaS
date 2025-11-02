# Component Generator Improvements

This document summarizes the improvements made to `scripts/generate-component.mjs` in the `improve-component-generator` branch.

## Changes Overview

### 1. Fixed Component Naming Bug ✅

**Problem:** Generated component names had double suffixes (e.g., `ArticlePagePage`)

**Solution:**
- Check if content type key already ends with a standard suffix (Page, Block, Experience, Component)
- Only add suffix if not already present
- Results in cleaner naming: `ArticlePage` instead of `ArticlePagePage`

**Code:**
```javascript
let componentName = key;
const suffixes = ['Page', 'Block', 'Experience', 'Component'];
const hasSuffix = suffixes.some(suffix => key.endsWith(suffix));

if (!hasSuffix) {
  componentName = `${key}${baseType === '_page' ? 'Page' : ...}`;
}
```

### 2. Enhanced Property Type Detection ✅

**Problem:** Limited type detection only handled richText, xhtmlString, and arrays

**Solution:**
- Created dedicated `mapPropertyTypeToGraphQL()` function
- Added support for:
  - Images and media types
  - Content references with proper field selection
  - Better array handling
  - Content areas and content links

**Supported Types:**
- `richText` / `xhtmlString` → Generates `{ html }` field
- `image` / `contentReference` (with "image" in name) → Generates `{ url { default } }`
- `contentArea` / `contentReference` / `contentLink` → Generates `{ __typename, _metadata { key, displayName } }`
- `array` → Generates collection fields
- Scalars (string, number, boolean, date) → Simple field

### 3. Corrected Workflow Instructions ✅

**Problem:** Script instructed users to run `yarn compile`, which breaks the build due to codegen bug

**Solution:**
```javascript
console.log(`\n✨ Done! Next steps:`);
console.log(`   1. Push to CMS: yarn opti:push`);
console.log(`   2. Customize: ${componentFile}`);
console.log(`   3. Test: yarn dev`);
console.log(`   ⚠️  Note: Avoid running 'yarn compile' until codegen issue is resolved\n`);
```

### 4. Added Comprehensive Error Handling ✅

**Problem:** No error handling or rollback mechanism for partial failures

**Solution:**
- Wrapped main execution in async try-catch
- Track all created files during generation
- Automatic rollback on failure (removes created files)
- Better error messages with stack traces
- Graceful handling of missing directories

**Features:**
```javascript
try {
  // Track created files
  const createdFiles = [];

  // Generation steps...

} catch (error) {
  // Rollback created files
  for (const file of createdFiles) {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  }
  throw error;
}
```

### 5. Simplified Factory Update Logic ✅

**Problem:** Complex regex-based string manipulation was fragile and hard to maintain

**Solution:**
- Line-by-line parsing instead of regex
- Find last import statement by iteration
- Find dictionary closing brace by iteration
- Smart comma insertion logic
- More robust and readable code

**Before:** Complex regex with substring manipulation
**After:** Simple line-based parsing with clear logic flow

## Testing

The script was validated for:
- ✅ Syntax correctness (runs without errors)
- ✅ Maintains backward compatibility
- ✅ All functions preserved and enhanced
- ✅ Error handling doesn't break existing functionality

## Benefits

1. **Cleaner Component Names** - No more double suffixes
2. **Better Type Support** - Handles more property types correctly
3. **Correct Instructions** - Won't break user's build
4. **Safer Execution** - Automatic rollback on failure
5. **Easier Maintenance** - Simpler, more readable factory logic

## Migration Notes

- ✅ No breaking changes - fully backward compatible
- ✅ Existing components continue to work
- ✅ New components benefit from improvements immediately
- ⚠️ Note: Existing components with double suffixes (like `ArticlePagePage`) will need manual renaming if desired

## Next Steps

1. Review and test the changes in this branch
2. Merge to main when approved
3. Consider adding unit tests for the generator script
4. Update documentation if needed

## Related Issues

- Fixes component naming inconsistency
- Addresses GraphQL codegen warning about undefined fields
- Improves developer experience with better error messages
