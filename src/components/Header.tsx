"use client"

import { useState } from "react"
import Link from "next/link"
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
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 text-xl font-bold tracking-tight shrink-0">
          <span className="text-accent">&#9673;</span>
          <span className="text-foreground">LootNest</span>
          <span className="hidden rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent sm:inline">
            Beta
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher />
          <Link
            href={`/${locale}/submit`}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
          >
            {t("submit")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-muted hover:bg-card-bg transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-card-border bg-background/95 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-card-bg hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-card-border" />
            <Link
              href={`/${locale}/submit`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
            >
              {t("submit")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}