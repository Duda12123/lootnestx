"use client"

import ReactMarkdown from "react-markdown"

/** Renders markdown body in a product review. Tailwind prose applied. */
export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none
      prose-headings:font-semibold prose-headings:tracking-tight
      prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
      prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
      prose-p:text-muted prose-p:leading-relaxed
      prose-li:text-muted prose-li:leading-relaxed
      prose-strong:text-foreground prose-strong:font-semibold
      prose-a:text-accent prose-a:no-underline hover:prose-a:underline
      prose-hr:border-card-border
    ">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}