"use client"

import { useT } from "@/lib/i18n"

export default function Accessibility() {
  const t = useT("accessibility")
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">{t("title")}</h1>
      <p className="text-sm text-muted mb-8">{t("intro")}</p>
      <div className="space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">{t("h1")}</h2>
          <p>{t("p1")}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">{t("h2")}</h2>
          <p className="mb-2">{t("p2")}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t("i1")}</li><li>{t("i2")}</li><li>{t("i3")}</li><li>{t("i4")}</li><li>{t("i5")}</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">{t("h3")}</h2>
          <p>{t("p3")}</p>
        </section>
      </div>
    </div>
  )
}