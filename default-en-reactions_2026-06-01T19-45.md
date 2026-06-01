# feat: default English + comment reactions

**Date:** 2026-06-01 19:39-19:45 GMT+8  
**Commit:** 472d7d8 (pushed to GitHub)

## Changes

### 1. Default language to English
- **File:** `middleware.ts`
- **Change:** Removed `Accept-Language` header detection that auto-redirected Chinese browsers to `/zh`
- **Result:** All new visitors now see English by default. Returning visitors who chose Chinese keep their preference via `NEXT_LOCALE` cookie.

### 2. Comment reaction buttons (👍 ❤️ 👎)
- **New file:** `src/components/ReactionButtons.tsx`
- **Modified:** `src/app/[locale]/products/[slug]/page.tsx` — inserted above DisqusComments
- **Features:**
  - Three emoji buttons: Like / Love / Dislike
  - Per-product counts stored in localStorage (keyed by slug)
  - Click to vote, click again to unvote, click different to switch
  - 300ms scale animation on click
  - i18n: English/Chinese labels
  - Total count shown in header when >0
- **Note:** localStorage is per-browser, not shared across users. Upgrade to server-side storage (Vercel KV or Supabase) when needed.

## Build
✅ 29 pages, 0 errors, TypeScript passed
