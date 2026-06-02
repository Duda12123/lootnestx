"use client"

import Link from "next/link"
import { useT, useLocale } from '@/lib/i18n'

export function Footer() {
  const t = useT("footer")
  const tc = useT("cats")
  const locale = useLocale()

  const categories = [
    { key: "kitchen", slug: "kitchen" },
    { key: "tech", slug: "tech" },
    { key: "tools", slug: "tools" },
    { key: "smartHome", slug: "smart-home" },
    { key: "everydayCarry", slug: "everyday-carry" },
    { key: "funGames", slug: "fun-games" },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-card-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="inline-flex items-center gap-0 text-lg font-bold transition-opacity hover:opacity-80">
              <span translate="no">LootNest</span>
              <span className="ml-0.5 rounded bg-accent px-1.5 py-0 text-xs font-black text-black">X</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted">{t("description")}</p>
            {/* Social icons placeholder */}
            <div className="flex items-center gap-3 pt-1">
              {["twitter", "youtube", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border bg-card-bg text-muted-soft transition-colors hover:border-accent/20 hover:text-accent"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    {s === "twitter" && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                    {s === "youtube" && <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />}
                    {s === "instagram" && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-soft">
              {t("categories")}
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.key}>
                  <Link
                    href={`/${locale}/category/${cat.slug}`}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {tc(cat.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-soft">
              {t("lootnest")}
            </h3>
            <ul className="space-y-2.5">
              <li><Link href={`/${locale}/about`} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">{t("about")}</Link></li>
              <li><Link href={`/${locale}/submit`} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">{t("submitFind")}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-soft">
              {t("legal")}
            </h3>
            <ul className="space-y-2.5">
              <li><Link href={`/${locale}/privacy`} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">{t("privacy")}</Link></li>
              <li><Link href={`/${locale}/terms`} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">{t("terms")}</Link></li>
              <li><Link href={`/${locale}/affiliate-disclosure`} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">{t("affiliateDisclosure")}</Link></li>
              <li><Link href={`/${locale}/dmca`} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">{t("dmca")}</Link></li>
              <li><Link href={`/${locale}/accessibility`} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">{t("accessibility")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-card-border pt-8">
          <p className="text-center text-xs text-muted-soft">
            &copy; {currentYear} LootNest. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}