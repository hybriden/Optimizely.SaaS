#!/bin/bash
# Fix GraphQL Codegen by updating to official package
# Run this script to attempt the fix automatically

set -e  # Exit on error

echo "=========================================="
echo "GraphQL Codegen Fix - Option 1"
echo "=========================================="
echo ""

# Step 1: Backup current state
echo "📦 Step 1: Creating backup..."
git stash push -m "Backup before codegen fix"
cp package.json package.json.backup
echo "   ✅ Backup created"
echo ""

# Step 2: Remove resolutions from package.json
echo "🔧 Step 2: Removing patched package resolution..."
if grep -q "resolutions" package.json; then
    # Create temp file without resolutions
    cat package.json | jq 'del(.resolutions, .comments)' > package.json.tmp
    mv package.json.tmp package.json
    echo "   ✅ Resolutions removed from package.json"
else
    echo "   ⚠️  No resolutions found (already removed?)"
fi
echo ""

# Step 3: Clean install
echo "🧹 Step 3: Cleaning and reinstalling dependencies..."
echo "   This may take a few minutes..."
rm -rf node_modules
rm -f yarn.lock
yarn install
echo "   ✅ Dependencies reinstalled"
echo ""

# Step 4: Test code generation
echo "🔨 Step 4: Testing code generation..."
yarn compile
echo "   ✅ Code generation completed"
echo ""

# Step 5: Verify output
echo "🔍 Step 5: Verifying generated types..."
if grep -q "undefined?: Maybe<Scalars" src/gql/graphql.ts; then
    echo "   ❌ FAILED: Still generating undefined fields"
    echo ""
    echo "Rolling back changes..."
    mv package.json.backup package.json
    yarn install
    git stash pop
    echo ""
    echo "=========================================="
    echo "Option 1 did not work. Try Option 2."
    echo "See .github/CODEGEN_FIX_OPTION_2.md"
    echo "=========================================="
    exit 1
else
    echo "   ✅ Generated types look correct!"
fi
echo ""

# Step 6: Test build
echo "🏗️  Step 6: Testing build..."
yarn build
echo "   ✅ Build successful"
echo ""

# Cleanup
rm -f package.json.backup

echo "=========================================="
echo "✅ SUCCESS! Codegen is fixed."
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Review the changes: git diff package.json"
echo "2. Commit the fix: git add package.json yarn.lock"
echo "3. You can now safely run 'yarn compile'"
echo ""
