"use client"

import { useT } from '@/lib/i18n'

export default function PrivacyPage() {
  const t = useT("privacy")
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h1>
      <div className="space-y-4 text-muted leading-relaxed">
        <p><strong className="text-foreground">{t("updated")}</strong></p>
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">{t("h2_1")}</h2>
        <p>{t("p3")}</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">{t("h2_2")}</h2>
        <p>{t("p4")}</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">{t("h2_3")}</h2>
        <p>{t("p5")}</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">{t("h2_4")}</h2>
        <p>{t("p6")}</p>
      </div>
    </div>
  )
}