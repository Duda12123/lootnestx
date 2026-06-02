"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useT, useLocale } from '@/lib/i18n'
import { LocaleSwitcher } from "./LocaleSwitcher"

export function Header() {
  const t = useT("nav")
  const locale = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/category/kitchen`, label: t("kitchen") },
    { href: `/${locale}/category/tech`, label: t("tech") },
    { href: `/${locale}/category/tools`, label: t("tools") },
    { href: `/${locale}/category/smart-home`, label: t("smartHome") },
    { href: `/${locale}/category/everyday-carry`, label: t("everydayCarry") },
    { href: `/${locale}/category/fun-games`, label: t("funGames") },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-card-border/50 bg-background/75 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-0 text-xl font-bold tracking-tight shrink-0 transition-opacity duration-200 hover:opacity-80"
        >
          <span className="text-foreground" translate="no">LootNest</span>
          <span className="ml-0.5 rounded-md bg-accent px-1.5 py-0 text-sm font-black text-black shadow-sm shadow-accent/20">X</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-muted transition-colors duration-200 hover:bg-accent-soft/50 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          <Link
            href={`/${locale}/submit`}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/15 active:scale-[0.97]"
          >
            {t("submit")}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-card-bg"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-card-border bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-card-bg hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-card-border" />
              <Link
                href={`/${locale}/submit`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-black transition-all hover:bg-accent-hover active:scale-[0.98]"
              >
                {t("submit")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}