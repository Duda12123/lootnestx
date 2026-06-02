"use client"

import { useT, useLocale } from '@/lib/i18n'
import { ShareButtons } from "@/components/ShareButtons"
import { ReactionButtons } from "@/components/ReactionButtons"

interface SidebarProps {
  product: {
    slug: string
    title: string
    price: string
    category: string
    rating: number
    date: string
    buyUrl: string
    image: string
  }
}

export function ProductSidebar({ product }: SidebarProps) {
  const t = useT("product")
  const locale = useLocale()
  const pageUrl = `https://lootnestx.com/${locale}/products/${product.slug}`

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="space-y-5">
        {/* Price card */}
        <div className="rounded-2xl border border-card-border bg-card-bg p-6 space-y-5">
          {/* Price */}
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-soft">{t("price")}</p>
            <p className="mt-1 text-4xl font-bold text-accent">{product.price}</p>
          </div>

          <div className="space-y-3 border-t border-card-border pt-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-soft">{t("category")}</span>
              <span className="font-medium text-foreground">{product.category}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-soft">{t("rating")}</span>
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium text-foreground">{product.rating} / 5.0</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-soft">{t("published")}</span>
              <span className="font-medium text-foreground">{product.date}</span>
            </div>
          </div>

          {/* Buy Button */}
          <a
            href={product.buyUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/15 active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            {locale === "zh" ? "去购买" : "Check Price"}
          </a>
          <p className="text-center text-[11px] text-muted-soft">
            {locale === "zh" ? "含推广链接 · 不影响价格" : "Affiliate link · No extra cost to you"}
          </p>
        </div>

        {/* Share */}
        <div className="rounded-2xl border border-card-border bg-card-bg p-5">
          <ShareButtons url={pageUrl} title={product.title} />
        </div>

        {/* Reactions */}
        <div className="rounded-2xl border border-card-border bg-card-bg p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-soft">
            {locale === "zh" ? "这篇评测有用吗？" : "Was this review helpful?"}
          </p>
          <ReactionButtons slug={product.slug} />
        </div>
      </div>
    </aside>
  )
}