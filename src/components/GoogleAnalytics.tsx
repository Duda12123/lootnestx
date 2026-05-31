"use client"

import Script from "next/script"

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  if (!measurementId || measurementId === "G-XXXXXXXXXX") return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('[GA] Initializing with ID: ${measurementId}');
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true,
              debug_mode: true
            });
            console.log('[GA] gtag config sent');
          `,
        }}
      />
    </>
  )
}