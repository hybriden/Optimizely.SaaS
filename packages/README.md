# Patched packages

This folder contains specific patched package versions that resolve errors encountered by the specific implementation needs for Optimizely CMS.

## Status: No patched packages currently needed ✅

As of November 2025, all previously patched packages have been replaced with official versions:

### Previously patched:
- ~~`@graphql-codegen/visitor-plugin-common@5.8.0-patched`~~
  - **Replaced with:** Official `@graphql-codegen/visitor-plugin-common@6.1.0`
  - **Reason:** The official v6.1.0 release fixed the original fragment generation issues
  - **Date removed:** 2025-11-02
  - **See commit:** Fix GraphQL codegen by updating to official v6.1.0

## If you need to add patched packages:

1. Place the `.tgz` file in this folder
2. Add to `package.json` resolutions:
   ```json
   "resolutions": {
     "package-name": "file:./packages/package-name-version.tgz"
   }
   ```
3. Document the reason and planned removal in this README
4. Include these packages in your deployment

## Notes

- ✅ Using official packages is preferred over patches
- ✅ Always check for newer official versions before creating patches
- ✅ Document why patches are needed and when they can be removed
