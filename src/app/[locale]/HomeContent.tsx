"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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
      <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="mb-2 flex items-center gap-2.5">
              <span className="text-xl">🔥</span>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {t("latestFinds")}
              </h2>
            </div>
            <p className="text-muted">{t("freshReviews")}</p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCat(null)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                selectedCat === null
                  ? "bg-accent text-black shadow-lg shadow-accent/20"
                  : "border border-card-border bg-card-bg text-muted hover:border-accent/20 hover:text-foreground"
              }`}
            >
              {t("all")}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  selectedCat === cat
                    ? "bg-accent text-black shadow-lg shadow-accent/20"
                    : "border border-card-border bg-card-bg text-muted hover:border-accent/20 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured product highlight */}
        {featured && !selectedCat && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href={`/${locale}/products/${featured.slug}`}
              className="group mb-12 block overflow-hidden rounded-2xl border border-card-border bg-card-bg transition-all duration-300 hover:border-accent/15"
            >
              <div className="grid gap-0 sm:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-card-border/50 sm:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card-bg/60 sm:hidden" />
                  <span className="absolute left-3 top-3 rounded-lg bg-accent px-2.5 py-1 text-xs font-bold text-black shadow-lg shadow-accent/15">
                    🔥 Featured
                  </span>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                    {featured.category}
                  </span>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                    {featured.description}
                  </p>

                  <div className="mt-5 flex items-center gap-5">
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
                      <span className="ml-1.5 text-sm font-semibold text-muted">{featured.rating}</span>
                    </div>
                    <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-bold text-black">
                      {featured.price}
                    </span>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-light">
                    Read Full Review
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, idx) => (
              <ProductCard key={product.slug} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-card-border py-24 text-center">
            <span className="text-4xl">📦</span>
            <p className="mt-4 text-lg font-medium text-muted">
              {locale === "zh" ? "该分类暂无产品" : "No products in this category yet"}
            </p>
            <Link
              href={`/${locale}/submit`}
              className="mt-3 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              {locale === "zh" ? "提交新产品 →" : "Be the first to submit →"}
            </Link>
          </div>
        )}

        {/* Ad after grid */}
        <div className="mt-16">
          <AdSlot type="banner" className="max-w-full" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-accent/8 bg-gradient-to-br from-accent/3 via-card-bg to-card-bg px-6 py-20 text-center sm:px-12"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/3 blur-[100px]" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t("newsletter")}
              </span>

              <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                {t("neverMiss")}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted">
                {t("newsletterDesc")}
              </p>

              <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder={t("enterEmail")}
                  className="flex-1 rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/15 active:scale-[0.98]"
                >
                  {t("subscribe")}
                </button>
              </form>

              <p className="mt-4 text-xs text-muted-soft">
                {locale === "zh" ? "不收垃圾邮件。随时退订。" : "No spam. Unsubscribe anytime."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}