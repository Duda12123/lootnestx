"use client"

import Link from "next/link"
import { useLocale } from '@/lib/i18n'
import type { Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const locale = useLocale()

  return (
    <Link href={`/${locale}/products/${product.slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-card-border bg-card-bg transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
        <div className="relative aspect-[3/2] overflow-hidden bg-card-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {product.category}
          </span>

        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-accent transition-colors">
            {product.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted line-clamp-2">
            {locale === "zh" ? product.tagline_zh || product.tagline : product.tagline}
          </p>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "text-accent" : "text-card-border"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted">{product.rating}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}