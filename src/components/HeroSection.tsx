"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-card-border">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/3 via-background to-background" />
      <div className="absolute inset-0 hero-dots opacity-40" />

      {/* Ambient glows */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/4 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent/3 blur-[120px]" />

      {/* Center top glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/4 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-40 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trending ticker */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-accent/15 bg-accent-soft/60 px-5 py-2 text-sm font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-muted tracking-wide">{t("trending")}</span>
            <span className="hidden w-px self-stretch bg-accent/15 sm:block" />
            <span className="hidden sm:inline-block min-w-[200px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={keywordIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="text-accent font-semibold"
                >
                  {TRENDING_KEYWORDS[keywordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {t("title1")}{" "}
            <span className="text-gradient">{t("title2")}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl"
          >
            {t("description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="#products"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/20 active:scale-[0.98]"
            >
              <span className="relative z-10">{t("startExploring")}</span>
              <motion.svg
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </Link>
            <Link
              href={`/${locale}/submit`}
              className="rounded-xl border border-card-border bg-card-bg px-8 py-3.5 text-base font-semibold text-foreground transition-all duration-300 hover:border-accent/20 hover:bg-card-bg-hover active:scale-[0.98]"
            >
              {t("submitProduct")}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-16 flex items-center justify-center gap-8 sm:gap-16"
          >
            {[
              { value: "25+", label: t("productsReviewed") },
              { value: "4.5", label: t("avgRating") },
              { value: "100%", label: t("honestReviews") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-muted-soft sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  )
}