import Link from "next/link"
import type { ReactNode } from "react"

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[]
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-accent transition-colors transition-none:line-clamp-1"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-foreground line-clamp-1">{item.name}</span>
            )}
            {i < items.length - 1 && (
              <span className="text-muted/40" aria-hidden="true">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}