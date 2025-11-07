# Optimizely CMS Live Preview Setup

This document explains how to configure live preview functionality in Optimizely CMS (SaaS) to enable real-time content editing.

## Features

- ✅ **Live Preview**: See changes immediately without saving or publishing
- ✅ **On-Page Editing (OPE)**: Edit content directly in the preview using property overlays
- ✅ **Draft Content Access**: View unpublished content using preview tokens
- ✅ **Context Modes**: Support for both `edit` and `preview` modes

## Configuration Steps

### 1. Configure Preview URL in Optimizely CMS

1. Navigate to **Settings > Applications** in your Optimizely CMS
2. Select your application
3. Go to the **Live Preview** tab
4. Enable **"Use Preview Tokens"**
5. Configure the Preview URL format:

```
{host}/preview?key={key}&ver={version}&loc={locale}&ctx={context}
```

**Required Parameters:**
- `{host}` - Your frontend application URL (e.g., `http://localhost:3000` or `https://your-domain.com`)
- `{key}` - Content's unique identifier
- `{version}` - Content version number

**Optional Parameters:**
- `{locale}` - Content language (defaults to 'en')
- `{context}` - Context mode: `edit` for On-Page Editing or `preview` for read-only preview

### 2. Understanding Preview Tokens

When "Use Preview Tokens" is enabled, Optimizely automatically appends `preview_token` to the URL:

```
http://localhost:3000/preview?key=abc123&ver=50&loc=en&ctx=edit&preview_token=xyz789
```

**Key Points:**
- Preview tokens are valid for **5 minutes**
- Tokens authorize access to unpublished/draft content in Optimizely Graph
- Tokens automatically refresh when content is saved (via `optimizely:cms:contentSaved` event)

### 3. How It Works

1. **Editor Makes Changes**: When you edit content in Optimizely CMS, changes are stored as draft
2. **Preview Token Generated**: CMS generates a preview token with access to draft content
3. **Frontend Fetches Content**: Your Next.js app uses the token to fetch content from Optimizely Graph
4. **Live Updates**: Changes appear immediately in the preview iframe

### 4. Context Modes

#### Edit Mode (`ctx=edit`)
- Enables On-Page Editing (OPE)
- Shows property overlays for direct editing
- Loads the Optimizely communication injector script
- Best for: Interactive content editing

#### Preview Mode (`ctx=preview`)
- Read-only content preview
- No editing overlays
- Faster rendering
- Best for: Reviewing content before publishing

### 5. Implementation Details

The preview endpoint (`/src/app/preview/page.tsx`) is configured with:

```typescript
export const fetchCache = "force-no-store";     // No caching of fetch results
export const dynamic = "force-dynamic";         // Force SSR
export const revalidate = 0;                    // No page caching
```

This ensures that every preview request fetches the latest content from Optimizely Graph, including draft changes.

### 6. Troubleshooting

#### Preview shows "Content Not Found"
- Verify the content key is correct
- Check that preview tokens are enabled in CMS settings
- Ensure your preview token hasn't expired (5-minute validity)

#### Changes don't appear in preview
- Confirm `fetchCache`, `dynamic`, and `revalidate` settings are correct
- Check browser console for errors
- Verify the preview token is being passed in the URL

#### On-Page Editing doesn't work
- Ensure `ctx=edit` is in the URL
- Check that the communication injector script is loading
- Verify your preview URL uses HTTPS in production (required by Optimizely)

### 7. Development vs Production

**Development** (`localhost`):
```
http://localhost:3000/preview?key={key}&ver={version}&loc={locale}&ctx={context}
```

**Production**:
```
https://your-domain.com/preview?key={key}&ver={version}&loc={locale}&ctx={context}
```

⚠️ **Important**: Optimizely CMS requires HTTPS for On-Page Editing in production environments.

## Example URLs

### Edit Mode with Token
```
http://localhost:3000/preview?key=dbca78c74802485c871ebaa0bd8e28f3&ver=50&loc=en&ctx=edit&preview_token=abc123xyz
```

### Preview Mode
```
http://localhost:3000/preview?key=dbca78c74802485c871ebaa0bd8e28f3&ver=50&loc=en&ctx=preview
```

### Using Short Parameter Names
```
http://localhost:3000/preview?key=dbca78c74802485c871ebaa0bd8e28f3&ver=50&loc=en&ctx=edit
```

## Next Steps

- Test the preview URL in Optimizely CMS
- Try making changes to content and verify they appear immediately
- Test On-Page Editing functionality in edit mode
- Configure preview URL for your production environment
