"use client"

import { useT, useLocale } from '@/lib/i18n'
import Link from "next/link"

export default function AboutPage() {
  const t = useT("about")
  const locale = useLocale()

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h1>
      <div className="space-y-4 text-muted leading-relaxed">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
        <p className="mt-8">
          <Link href={`/${locale}/submit`} className="inline-flex items-center gap-1 text-accent hover:underline font-medium">
            {t("submitCTA")}
          </Link>
        </p>
      </div>
    </div>
  )
}