"use client"

import { useActionState } from "react"
import { useT } from "@/lib/i18n"
import { submitContact } from "@/lib/actions"

export default function ContactPage() {
  const t = useT("contact")
  const [state, action, pending] = useActionState(submitContact, {
    success: false,
    message: "",
  })

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">{t("title")}</h1>
      <p className="text-muted mb-8">{t("description")}</p>

      <div className="rounded-2xl border border-card-border bg-card-bg p-8">
        {state?.success ? (
          <div className="text-center">
            <div className="mb-4 text-4xl">✅</div>
            <p className="text-lg font-semibold text-foreground mb-2">
              {state.message}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-sm text-accent hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form action={action} className="space-y-5">
            {state?.message && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {state.message}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("name")}
              </label>
              <input
                type="text"
                name="name"
                required
                minLength={2}
                className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("email")}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("message")}
              </label>
              <textarea
                name="message"
                required
                minLength={10}
                rows={4}
                className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="What would you like to say?"
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-xl bg-accent py-3 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {pending ? "Sending..." : t("send")}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
