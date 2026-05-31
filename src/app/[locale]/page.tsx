"use client"

import { useState } from "react"
import { useT, useLocale } from '@/lib/i18n'
import { HeroSection } from "@/components/HeroSection"
import { ProductCard } from "@/components/ProductCard"
import { AdSlot } from "@/components/AdSlot"
import { products, getCategories } from "@/lib/products"

export default function Home() {
  const t = useT("home")
  const locale = useLocale()
  const categories = getCategories()
  const [selectedCat, setSelectedCat] = useState<string | null>(null)
  const filtered = selectedCat ? products.filter(p => p.category === selectedCat) : products

  return (
    <div>
      <HeroSection />

      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t("latestFinds")}
            </h2>
            <p className="mt-2 text-muted">{t("freshReviews")}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCat(null)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${selectedCat === null ? 'bg-accent text-black' : 'border border-card-border bg-card-bg text-muted hover:border-accent/30 hover:text-foreground'}`}
            >
              {t("all")}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${selectedCat === cat ? 'bg-accent text-black' : 'border border-card-border bg-card-bg text-muted hover:border-accent/30 hover:text-foreground'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Banner Ad between grid and newsletter */}
        <div className="mt-12">
          <AdSlot type="banner" className="max-w-full" />
        </div>
      </section>

      <section className="border-t border-card-border bg-card-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t("neverMiss")}
            </h2>
            <p className="mt-3 text-muted">{t("newsletterDesc")}</p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:mx-auto sm:max-w-md">
              <input
                type="email"
                placeholder={t("enterEmail")}
                className="flex-1 rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}