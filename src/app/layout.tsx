import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@/components/GoogleAnalytics"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  )
}