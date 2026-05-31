"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale } from '@/lib/i18n'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const locale = useLocale()

  useEffect(() => {
    const consented = localStorage.getItem("cookie-consent")
    if (!consented) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up border-t border-card-border bg-card-bg/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6 lg:px-8">
        <p className="flex-1 text-xs text-muted leading-relaxed">
          {locale === "zh"
            ? "我们使用 Cookie 和类似技术来改善您的浏览体验、分析流量并展示个性化广告。继续使用即表示您同意。"
            : "We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and serve personalized ads. By continuing, you agree to our use."}{" "}
          <Link
            href={`/${locale}/privacy`}
            className="underline underline-offset-2 hover:text-accent transition-colors"
          >
            {locale === "zh" ? "隐私政策" : "Privacy Policy"}
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="rounded-lg bg-accent px-5 py-2 text-xs font-semibold text-black transition-colors hover:bg-accent-hover whitespace-nowrap"
          >
            {locale === "zh" ? "接受" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  )
}