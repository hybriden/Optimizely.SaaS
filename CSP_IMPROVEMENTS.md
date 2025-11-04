# CSP Improvements for Dynamic Pages

## Problem with Current Implementation

The existing CSP configuration in `next.config.mjs` has significant security weaknesses:

### Issues:
1. **`'unsafe-inline'` for scripts** - Allows any inline script to execute, defeating the purpose of CSP
2. **`'unsafe-eval'`** - Allows eval() and similar functions, a major XSS vector
3. **`'unsafe-inline'` for styles** - Less critical but still weakens security
4. **Static headers for dynamic content** - Not optimal for Next.js App Router with dynamic pages

```javascript
// ❌ OLD (Insecure)
"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.optimizely.com"
```

## Solution: Nonce-Based CSP with Proxy

### What Changed:

1. **Added `src/proxy.ts`** (Next.js 16+ convention, replaces middleware)
   - Generates unique nonce per request
   - Applies CSP with nonce instead of `'unsafe-inline'`
   - Uses `'strict-dynamic'` for better security with dynamic scripts

2. **Updated `src/lib/optimizely-cms/OpeScript.tsx`**
   - Accepts `nonce` prop
   - Applies nonce to dynamically created Optimizely script tag

3. **Updated `src/lib/optimizely-cms/preview.tsx`**
   - Retrieves nonce from request headers
   - Passes nonce to OpeScript component

4. **Updated `next.config.mjs`**
   - Removed CSP headers (now in middleware)
   - Kept other security headers (X-Frame-Options, etc.)

### New CSP Policy:

```javascript
// ✅ NEW (Secure)
script-src 'self' 'nonce-{random}' 'strict-dynamic' https://*.optimizely.com
```

## How Nonce-Based CSP Works

1. **Request arrives** → Proxy function generates unique nonce (cryptographically random)
2. **Nonce added to headers** → Both CSP header and custom `x-nonce` header
3. **Page renders** → Server components retrieve nonce from headers
4. **Scripts tagged** → All inline scripts and dynamically created scripts get the nonce
5. **Browser enforces** → Only scripts with matching nonce execute

### Benefits:

✅ **No `'unsafe-inline'`** - Much more secure against XSS attacks
✅ **Dynamic per-request** - Each request gets a unique nonce
✅ **Supports dynamic pages** - Works with Next.js App Router and SSR
✅ **`'strict-dynamic'`** - Scripts can load other scripts, but inline blocked
✅ **Framework compatible** - Works with Next.js, React, and Optimizely

## Testing the Changes

### Development Testing:
```bash
yarn dev
```

Visit preview pages and check:
1. Browser console for CSP violations
2. On-Page Editing functionality still works
3. Preview mode loads correctly

### Production Testing:

Check CSP headers:
```bash
curl -I https://your-domain.com | grep -i content-security-policy
```

Expected output:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-ABC123...' 'strict-dynamic' https://*.optimizely.com; ...
```

### Browser DevTools:

1. Open DevTools → Network tab
2. Click any page request
3. Check Response Headers for `Content-Security-Policy`
4. Each request should have a DIFFERENT nonce

## Known Considerations

### When `'unsafe-eval'` Might Be Needed:

Some scenarios still require `'unsafe-eval'`:
- Next.js development mode (hot reload)
- Optimizely On-Page Editing scripts

**Implemented approach:**
- ✅ Production pages: NO `'unsafe-eval'` (secure)
- ✅ Preview pages (`/preview`): `'unsafe-eval'` enabled (needed for Optimizely edit mode)

This provides the best balance: secure CSP for public pages, functional CSP for editor experience.

### Frame-Ancestors for CMS Preview:

**IMPLEMENTED:** Preview pages now use relaxed CSP to work in Optimizely CMS iframe:

```javascript
// Preview routes (/preview):
"frame-ancestors 'self' https://*.cms.optimizely.com https://*.optimizelyedit.com"

// All other routes:
"frame-ancestors 'self'"
```

### Strict-Dynamic Limitations:

`'strict-dynamic'` ignores host allowlists for scripts loaded by trusted scripts:
- ✅ Good: Automatically trusts dynamically loaded scripts from trusted sources
- ⚠️ Watch: May allow unintended scripts if trusted script is compromised

## Migration Steps (If Rolling Back)

If nonce-based CSP causes issues:

1. **Revert proxy.ts** (delete file)
2. **Restore old CSP in next.config.mjs:**
   ```javascript
   async headers() {
     return [{
       source: '/:path*',
       headers: [{
         key: 'Content-Security-Policy',
         value: "script-src 'self' 'unsafe-inline' ..."
       }]
     }];
   }
   ```
3. **Revert OpeScript.tsx** (remove nonce prop)
4. **Revert preview.tsx** (remove nonce passing)

## Further Reading

- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [CSP with Nonces](https://content-security-policy.com/nonce/)
- [Next.js Security Headers](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [Google CSP Evaluator](https://csp-evaluator.withgoogle.com/)

## Security Checklist

- [ ] CSP header includes unique nonce per request
- [ ] No `'unsafe-inline'` in production CSP
- [ ] `'unsafe-eval'` removed or justified
- [ ] Dynamically created scripts receive nonce
- [ ] Preview/edit mode still functional
- [ ] No CSP violations in browser console
- [ ] All external scripts explicitly allowed
- [ ] `frame-ancestors` configured for CMS preview
