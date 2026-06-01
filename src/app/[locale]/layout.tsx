import type { Metadata } from "next"
import { getStaticT } from "@/lib/i18n-server"
import { LocaleProvider } from "@/lib/i18n"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"
import { GoogleAnalytics } from "@/components/GoogleAnalytics"
import { OrganizationSchema } from "@/components/StructuredData"

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getStaticT(locale, "meta")
  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    metadataBase: new URL("https://lootnestx.com"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      siteName: "LootNest",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  const safeLocale = locale === "zh" ? "zh" : "en"
  const gaId = process.env.NEXT_PUBLIC_GA_ID || ""

  return (
    <LocaleProvider locale={safeLocale}>
      <GoogleAnalytics measurementId={gaId} />
      <OrganizationSchema />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </LocaleProvider>
  )
}