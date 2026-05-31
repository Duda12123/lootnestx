"use client"

import { useT } from '@/lib/i18n'

export default function AffiliatePage() {
  const t = useT("affiliate")
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h1>
      <div className="space-y-4 text-muted leading-relaxed">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
        <p className="mt-4 rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm">
          <strong className="text-accent">{t("tldr")}</strong>
        </p>
      </div>
    </div>
  )
}