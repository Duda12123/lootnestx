"use client"

import { createContext, useContext } from "react"
import enMessages from "@/i18n/en.json"
import zhMessages from "@/i18n/zh.json"

const messages = { en: enMessages, zh: zhMessages } as Record<string, Record<string, Record<string, string>>>

const LocaleContext = createContext<{
  locale: string
  t: (ns: string, key: string) => string
}>({ locale: "en", t: () => "" })

export function LocaleProvider({
  locale,
  children,
}: {
  locale: string
  children: React.ReactNode
}) {
  const safeLocale = locale === "zh" ? "zh" : "en"
  const t = (ns: string, key: string): string => {
    const nsMap = messages[safeLocale]?.[ns] as Record<string, string> | undefined
    return nsMap?.[key] ?? key
  }
  return (
    <LocaleContext.Provider value={{ locale: safeLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useT(ns: string) {
  const { t } = useContext(LocaleContext)
  return (key: string) => t(ns, key)
}

export function useLocale() {
  return useContext(LocaleContext).locale
}