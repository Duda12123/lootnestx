"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useT, useLocale } from '@/lib/i18n'

const TRENDING_KEYWORDS = [
  "Viral Kitchen Gadgets",
  "TikTok Made Me Buy It",
  "Smart Home Hacks",
  "Budget Tech Finds",
  "Everyday Carry",
]

export function HeroSection() {
  const t = useT("hero")
  const locale = useLocale()
  const [keywordIndex, setKeywordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % TRENDING_KEYWORDS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-card-border">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
      <div className="absolute inset-0 hero-dots opacity-60" />

      {/* Radial glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-36 lg:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trending ticker */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-5 py-2 text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-accent">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-accent opacity-75" />
            </span>
            <span className="text-muted">{t("trending")}</span>
            <span className="hidden w-px self-stretch bg-accent/20 sm:block" />
            <span className="hidden text-accent transition-all duration-500 sm:inline-block" key={keywordIndex}>
              {TRENDING_KEYWORDS[keywordIndex]}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("title1")}{" "}
            <span className="text-gradient">
              {t("title2")}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#products"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-4 text-base font-bold text-black transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/20"
            >
              <span className="relative z-10">{t("startExploring")}</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/submit`}
              className="rounded-xl border border-card-border bg-card-bg px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-accent/30 hover:bg-card-bg-hover"
            >
              {t("submitProduct")}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex items-center justify-center gap-6 sm:gap-12">
            {[
              { value: "7+", label: t("productsReviewed") },
              { value: "4.5★", label: t("avgRating") },
              { value: "100%", label: t("honestReviews") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-soft sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}