"use client"

import { useT } from '@/lib/i18n'

export default function ContactPage() {
  const t = useT("contact")
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">{t("title")}</h1>
      <p className="text-muted mb-8">{t("description")}</p>
      <div className="rounded-2xl border border-card-border bg-card-bg p-8">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">{t("name")}</label>
            <input type="text" className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("email")}</label>
            <input type="email" className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("message")}</label>
            <textarea className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" rows={4} />
          </div>
          <button type="submit" className="w-full rounded-xl bg-accent py-3 text-sm font-semibold text-black transition-all hover:bg-accent-hover">{t("send")}</button>
        </form>
      </div>
    </div>
  )
}