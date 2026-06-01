"use client"

import { useState } from "react"
import Link from "next/link"
import { useT, useLocale } from '@/lib/i18n'
import { HeroSection } from "@/components/HeroSection"
import { ProductCard } from "@/components/ProductCard"
import { AdSlot } from "@/components/AdSlot"
import type { Product } from "@/lib/content"

export function HomeContent({
  products,
  categories,
}: {
  products: Product[]
  categories: string[]
}) {
  const t = useT("home")
  const locale = useLocale()
  const [selectedCat, setSelectedCat] = useState<string | null>(null)

  const filtered = selectedCat
    ? products.filter((p) => p.category.toLowerCase() === selectedCat.toLowerCase())
    : products

  const featured = products.find((p) => p.featured)

  return (
    <div>
      <HeroSection />

      {/* Products section */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🔥</span>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                {t("latestFinds")}
              </h2>
            </div>
            <p className="text-muted">{t("freshReviews")}</p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCat(null)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                selectedCat === null
                  ? "bg-accent text-black shadow-lg shadow-accent/20"
                  : "border border-card-border bg-card-bg text-muted hover:border-accent/30 hover:text-foreground"
              }`}
            >
              {t("all")}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCat === cat
                    ? "bg-accent text-black shadow-lg shadow-accent/20"
                    : "border border-card-border bg-card-bg text-muted hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured product highlight */}
        {featured && !selectedCat && (
          <Link
            href={`/${locale}/products/${featured.slug}`}
            className="group mb-10 block overflow-hidden rounded-2xl border border-card-border bg-card-bg transition-all hover:border-accent/30"
          >
            <div className="grid gap-0 sm:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-card-border sm:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card-bg/50 sm:hidden" />
                <span className="absolute left-3 top-3 rounded-lg bg-accent px-2.5 py-1 text-xs font-bold text-black">
                  🔥 Featured
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {featured.category}
                </span>
                <h3 className="text-xl font-bold sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                  {featured.description}
                </p>

                {/* Rating + Price */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(featured.rating) ? "text-accent" : "text-card-border"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm font-semibold text-muted">{featured.rating}</span>
                  </div>
                  <span className="rounded-md bg-accent px-2 py-0.5 text-xs font-bold text-black">
                    {featured.price}
                  </span>
                </div>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read Full Review
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-card-border py-20 text-center">
            <span className="text-4xl">📦</span>
            <p className="mt-4 text-lg font-semibold text-muted">
              {locale === "zh" ? "该分类暂无产品" : "No products in this category yet"}
            </p>
            <Link
              href={`/${locale}/submit`}
              className="mt-3 text-sm text-accent hover:underline"
            >
              {locale === "zh" ? "提交新产品 →" : "Be the first to submit →"}
            </Link>
          </div>
        )}

        {/* Ad after grid */}
        <div className="mt-14">
          <AdSlot type="banner" className="max-w-full" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-accent/10 bg-gradient-to-br from-accent/5 via-card-bg to-card-bg px-6 py-16 text-center sm:px-12">
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-4 py-1 text-sm font-medium text-accent">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t("newsletter")}
              </span>

              <h2 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {t("neverMiss")}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted">
                {t("newsletterDesc")}
              </p>

              <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder={t("enterEmail")}
                  className="flex-1 rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-black transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
                >
                  {t("subscribe")}
                </button>
              </form>

              <p className="mt-4 text-xs text-muted-soft">
                {locale === "zh" ? "不收垃圾邮件。随时退订。" : "No spam. Unsubscribe anytime."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}