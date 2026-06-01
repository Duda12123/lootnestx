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
  ]

  return (
    <footer className="border-t border-card-border bg-card-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link href={`/${locale}`} className="flex items-center gap-0 text-lg font-bold">
              <span translate="no">LootNest</span>
              <span className="ml-0.5 rounded bg-accent px-1.5 py-0 text-xs font-black text-black">X</span>
            </Link>
            <p className="text-sm text-muted">{t("description")}</p>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              {t("categories")}
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.key}>
                  <Link
                    href={`/${locale}/category/${cat.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {tc(cat.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              {t("lootnest")}
            </h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/about`} className="text-sm text-muted transition-colors hover:text-foreground">{t("about")}</Link></li>
              <li><Link href={`/${locale}/submit`} className="text-sm text-muted transition-colors hover:text-foreground">{t("submitFind")}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-sm text-muted transition-colors hover:text-foreground">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              {t("legal")}
            </h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/privacy`} className="text-sm text-muted transition-colors hover:text-foreground">{t("privacy")}</Link></li>
              <li><Link href={`/${locale}/terms`} className="text-sm text-muted transition-colors hover:text-foreground">{t("terms")}</Link></li>
              <li><Link href={`/${locale}/affiliate-disclosure`} className="text-sm text-muted transition-colors hover:text-foreground">{t("affiliateDisclosure")}</Link></li>
              <li><Link href={`/${locale}/dmca`} className="text-sm text-muted transition-colors hover:text-foreground">{t("dmca")}</Link></li>
              <li><Link href={`/${locale}/accessibility`} className="text-sm text-muted transition-colors hover:text-foreground">{t("accessibility")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-card-border pt-6">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} LootNest. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}