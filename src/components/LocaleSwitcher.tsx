"use client"

import { useLocale } from '@/lib/i18n'
import Link from "next/link"

export function LocaleSwitcher() {
  const locale = useLocale()

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/en"
        className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
          locale === "en"
            ? "bg-accent/10 text-accent"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </Link>
      <Link
        href="/zh"
        className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
          locale === "zh"
            ? "bg-accent/10 text-accent"
            : "text-muted hover:text-foreground"
        }`}
      >
        中文
      </Link>
    </div>
  )
}