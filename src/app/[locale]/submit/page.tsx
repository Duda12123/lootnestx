"use client"

import { useT } from '@/lib/i18n'

export default function SubmitPage() {
  const t = useT("submit")
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">{t("title")}</h1>
      <p className="text-muted mb-8">{t("description")}</p>
      <div className="rounded-2xl border border-card-border bg-card-bg p-8 text-center">
        <div className="mb-4 text-4xl">🚀</div>
        <p className="text-muted mb-4">{t("comingSoon")}</p>
        <form className="space-y-5 opacity-60 pointer-events-none">
          <div>
            <label className="block text-sm font-medium mb-2">{t("productName")}</label>
            <input type="text" className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted" disabled placeholder={t("productNamePlaceholder")} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("link")}</label>
            <input type="url" className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted" disabled placeholder={t("linkPlaceholder")} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("whyCool")}</label>
            <textarea className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted" rows={4} disabled placeholder={t("whyCoolPlaceholder")} />
          </div>
          <button type="submit" className="w-full rounded-xl bg-accent py-3 text-sm font-semibold text-black" disabled>{t("submit")}</button>
        </form>
      </div>
    </div>
  )
}