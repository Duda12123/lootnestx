"use client"

import { useEffect, useRef } from "react"
import { useLocale } from "@/lib/i18n"

interface DisqusCommentsProps {
  slug: string
  title: string
  url: string
}

export function DisqusComments({ slug, title, url }: DisqusCommentsProps) {
  const locale = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || container.children.length > 0) return

    // Reset Disqus on re-render
    const d = document
    const s = d.createElement("script")
    s.src = "https://lootnestx-com.disqus.com/embed.js"
    s.setAttribute("data-timestamp", String(+new Date()))
    ;(d.head || d.body).appendChild(s)
  }, [slug])

  const disqusConfig = {
    url: url,
    identifier: slug,
    title: title,
    language: locale === "zh" ? "zh" : "en",
  }

  return (
    <section className="mt-12 border-t border-card-border pt-8">
      <h2 className="text-xl font-bold tracking-tight mb-6">
        {locale === "zh" ? "评论" : "Comments"}
      </h2>
      <div ref={containerRef}>
        <div id="disqus_thread" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var disqus_config = function () {
                this.page.url = '${disqusConfig.url}';
                this.page.identifier = '${disqusConfig.identifier}';
                this.page.title = '${disqusConfig.title}';
                this.language = '${disqusConfig.language}';
              };
            `,
          }}
        />
      </div>
      <noscript>
        <p className="text-sm text-muted">
          {locale === "zh"
            ? "请启用 JavaScript 以查看评论。"
            : "Please enable JavaScript to view the comments."}
        </p>
      </noscript>
    </section>
  )
}