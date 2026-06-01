# MDX Content System — Complete Migration

**Date:** 2026-06-01 18:55-19:15 GMT+8  
**Commit:** 9d768a3 (pushed to GitHub `Duda12123/lootnestx`)

## Objective
Replace hardcoded `src/lib/products.ts` data with a file-based MDX content system, so adding a new product review requires only creating a `.mdx` file.

## Key Architecture Decisions

1. **`src/lib/content.ts`**: Server-only module (`import "server-only"`) that reads `content/products/*.mdx` files using `fs`, `path`, and `gray-matter`. Exports: `getProducts()`, `getFeaturedProducts()`, `getProductBySlug()`, `getProductsByCategory()`, `getCategories()`, `localStr()`, `localArr()`.

2. **`src/lib/products.ts`**: Reduced to `export type { Product } from "./content"` — type-only re-exports for client components.

3. **Home page refactoring**: Split `[locale]/page.tsx` (server component, fetches data) from `[locale]/HomeContent.tsx` (client component, category filtering UI). This resolved the `fs` import issue in client components.

4. **`MarkdownContent.tsx`**: Client component wrapping `react-markdown` with Tailwind prose styling. Used in product detail page.

## Files Created
- `content/products/_TEMPLATE.mdx` — review template
- `content/products/self-stirring-mug.mdx`
- `content/products/magnetic-pickup-tool.mdx`
- `content/products/portable-blender.mdx`
- `content/products/led-strip-lights.mdx`
- `content/products/mini-projector.mdx`
- `content/products/smart-wallet-tracker.mdx`
- `scripts/new-review.js` — CLI tool to scaffold a review
- `src/lib/content.ts`
- `src/app/[locale]/HomeContent.tsx`
- `src/components/MarkdownContent.tsx`

## Files Modified
- `src/lib/products.ts` — type-only re-export
- `src/app/[locale]/page.tsx` — server wrapper
- `src/app/[locale]/products/[slug]/page.tsx` — added MarkdownContent, fixed imports
- `src/app/[locale]/category/[category]/page.tsx` — fixed imports
- `src/app/sitemap.ts` — fixed imports
- `package.json` — added `"new-review"` script

## Build Result
✅ Next.js 16.2.6 (Turbopack) — 29 pages, 0 errors, TypeScript passed

## Known Issues
- Vercel CLI deploy hit ECONNRESET (China network), but GitHub auto-deploy should handle it
- CRLF warnings on push (Windows) — cosmetic only