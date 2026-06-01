"use client"

import Link from "next/link"
import { useLocale } from '@/lib/i18n'
import type { Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className="group card-hover block overflow-hidden rounded-2xl border border-card-border bg-card-bg"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-card-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category badge - top left */}
        <span className="absolute left-3 top-3 rounded-lg bg-background/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-md">
          {product.category}
        </span>

        {/* Price tag - top right */}
        <span className="absolute right-3 top-3 rounded-lg bg-accent px-2.5 py-1 text-xs font-bold text-black shadow-lg shadow-accent/20">
          {product.price}
        </span>

        {/* Video indicator */}
        {product.video && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-black/70 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            VIDEO
          </span>
        )}

        {/* "Check it out" overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-black shadow-xl">
            Check It Out
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating row */}
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.round(product.rating) ? "text-accent" : "text-card-border"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold text-muted">{product.rating}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-accent">
          {product.title}
        </h3>

        {/* Tagline */}
        <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
          {locale === "zh" ? product.tagline_zh || product.tagline : product.tagline}
        </p>
      </div>
    </Link>
  )
}