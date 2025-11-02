# Known Issues

This document tracks known issues, warnings, and their status.

## Deprecation Warnings

### `punycode` Module Deprecation Warning

**Status:** Harmless, waiting for upstream fix
**Severity:** Low (cosmetic only)
**Affects:** All Node.js operations (build, compile, dev)

#### The Warning

```
(node:XXXXX) [DEP0040] DeprecationWarning: The `punycode` module is deprecated.
Please use a userland alternative instead.
```

#### Root Cause

The warning comes from the following dependency chain:

```
eslint@9.39.0
  └─ ajv@6.12.6
      └─ uri-js@4.4.1
          └─ punycode@2.3.1 (deprecated Node.js built-in)
```

ESLint uses `ajv@6.12.6` for JSON schema validation, which depends on `uri-js` for URI parsing. The `uri-js` package still uses Node.js's deprecated built-in `punycode` module instead of the standalone userland version.

#### Why It's Harmless

1. **Still works:** The `punycode` module still functions correctly in all current Node.js versions
2. **Deprecation only:** Node.js hasn't removed it, only marked it as deprecated
3. **No security issues:** This is just about module organization, not security
4. **No functional impact:** Doesn't affect build output or runtime behavior

#### Solutions

**Option 1: Ignore it (RECOMMENDED)**
- The warning is cosmetic and safe to ignore
- Will be resolved when upstream packages update
- No action needed from your side

**Option 2: Suppress the warning**

Add to your npm scripts (not recommended as it hides other warnings):

```json
"scripts": {
  "build": "NODE_NO_WARNINGS=1 next build",
  "compile": "NODE_NO_WARNINGS=1 graphql-codegen"
}
```

**Option 3: Wait for upstream updates**
- ESLint needs to update to ajv@8+ (which doesn't use uri-js)
- Or uri-js needs to update to use standalone punycode package
- This will happen naturally with future dependency updates

#### Status Tracking

- ⏳ **eslint@9.39.0**: Uses ajv@6.x (causes warning)
- 🔄 **Future:** ESLint may migrate to ajv@8+ in future releases
- 📅 **Estimated fix:** Q1-Q2 2025 (when ESLint updates)

#### Action Items

- ✅ **No action required** - Safe to ignore
- ✅ Document the issue (this file)
- ⏳ Monitor ESLint releases for updates
- ⏳ Update ESLint when new version doesn't trigger warning

---

## Other Known Issues

### Yarn Peer Dependency Warnings

**Status:** Harmless, can be ignored
**Severity:** Low (informational only)
**Affects:** `yarn install`

#### The Warnings

```
➤ YN0086: │ Some peer dependencies are incorrectly met by dependencies
➤ YN0068: │ @typescript-eslint/type-utils ➤ dependencies ➤ eslint: No matching package
➤ YN0068: │ @typescript-eslint/utils ➤ dependencies ➤ typescript: No matching package
```

#### Root Cause

These warnings occur because:

1. **Phantom dependencies:** Some package in your dependency tree declares `@typescript-eslint/*` packages as dependencies, but you don't actually have them installed
2. **Yarn PnP strict mode:** Yarn 4's Plug'n'Play mode is stricter about peer dependencies
3. **Package metadata issues:** The package declaring these dependencies may have incorrect or outdated metadata

#### Why It's Harmless

1. **Not using TypeScript ESLint:** Your project uses basic ESLint without TypeScript-specific rules
2. **No functionality broken:** Everything works correctly despite the warnings
3. **Informational only:** Yarn is just reporting inconsistencies in package metadata
4. **Not your packages:** The issue is in a transitive dependency, not your direct dependencies

#### Solution

**Option 1: Ignore it (RECOMMENDED)**
- The warnings are informational and don't affect functionality
- Your ESLint setup works fine without TypeScript-specific packages
- No action needed

**Option 2: Suppress specific warnings (if they bother you)**

Add to `.yarnrc.yml`:

```yaml
logFilters:
  - code: YN0086
    level: discard
  - code: YN0068
    level: discard
```

**Not recommended** as it hides all peer dependency warnings, some of which might be important.

#### Action Items

- ✅ **No action required** - Safe to ignore
- ✅ Document the issue (this file)
- ⏳ Will likely resolve itself with future dependency updates

---

## Previously Resolved Issues

### GraphQL Codegen `undefined` Fields (RESOLVED ✅)

**Status:** Fixed in commit `c5e95f2`
**Date Fixed:** 2025-11-02

**Problem:** GraphQL code generator was creating `undefined` field names instead of actual field names (Heading, Intro, MainBody, etc.), causing TypeScript compilation errors.

**Solution:** Updated from patched `@graphql-codegen/visitor-plugin-common@5.8.0` to official `@graphql-codegen/visitor-plugin-common@6.1.0`.

---

### Component Generator Double Suffix Bug (RESOLVED ✅)

**Status:** Fixed in commit `025f7f2`
**Date Fixed:** 2025-11-02

**Problem:** Component generator was creating names like `ArticlePagePage` (double suffix).

**Solution:** Added logic to check if suffix already exists before adding baseType suffix.

---

*Last updated: 2025-11-02*
