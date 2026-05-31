"use client"

import { useT } from '@/lib/i18n'

export default function TermsPage() {
  const t = useT("terms")
  const sections = [
    { h: t("h1"), p: t("b1"), items: [t("b1_1"), t("b1_2"), t("b1_3")] },
    { h: t("h2"), p: t("b2"), items: [t("b2_1"), t("b2_2")] },
    { h: t("h3"), p: t("b3") },
    { h: t("h4"), p: t("b4"), items: [t("b4_1"), t("b4_2")] },
    { h: t("h5"), p: t("b5") },
    { h: t("h6"), p: t("b6") },
    { h: t("h7"), p: t("b7") },
    { h: t("h8"), p: t("b8") },
  ]

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">{t("title")}</h1>
      <p className="text-sm text-muted mb-8">{t("updated")}</p>
      <div className="space-y-8">
        {sections.map((s, i) => (
          <section key={i} className="text-sm text-muted leading-relaxed">
            <h2 className="text-lg font-semibold text-foreground mb-2">{s.h}</h2>
            <p className="mb-2">{s.p}</p>
            {s.items && (
              <ul className="list-disc pl-5 space-y-1">
                {s.items.map((item: string, j: number) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <p className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-xs">
          <strong className="text-accent">{t("summary").replace(/<b>/, "").replace(/<\/b>/, "")}</strong>
        </p>
      </div>
    </div>
  )
}