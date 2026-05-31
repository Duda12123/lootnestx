import enMessages from "@/i18n/en.json"
import zhMessages from "@/i18n/zh.json"

const messages = { en: enMessages, zh: zhMessages } as Record<string, Record<string, Record<string, string>>>

export function getStaticT(locale: string, ns: string) {
  const safeLocale = locale === "zh" ? "zh" : "en"
  return (key: string): string => {
    const nsMap = messages[safeLocale]?.[ns] as Record<string, string> | undefined
    return nsMap?.[key] ?? key
  }
}

export function getStaticMessages(locale: string) {
  const safeLocale = locale === "zh" ? "zh" : "en"
  return messages[safeLocale] ?? messages.en
}