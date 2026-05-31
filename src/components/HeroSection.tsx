"use client"

import Link from "next/link"
import { useT, useLocale } from '@/lib/i18n'

export function HeroSection() {
  const t = useT("hero")
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden border-b border-card-border">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-purple-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
            {t("badge")}
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t("title1")}{" "}
            <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent" translate="no">
              {t("title2")}
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#products"
              className="rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-black transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              {t("startExploring")}
            </Link>
            <Link
              href={`/${locale}/submit`}
              className="rounded-xl border border-card-border bg-card-bg px-8 py-3.5 text-base font-medium text-foreground transition-all hover:border-accent/30 hover:bg-card-bg/80"
            >
              {t("submitProduct")}
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">6</p>
              <p>{t("productsReviewed")}</p>
            </div>
            <div className="h-10 w-px bg-card-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">★</p>
              <p>{t("monthlyReaders")}</p>
            </div>
            <div className="h-10 w-px bg-card-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p>{t("honestReviews")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}