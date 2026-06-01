"use client"

import { useState, useEffect } from "react"
import { useLocale } from "@/lib/i18n"

type Reaction = "like" | "love" | "dislike"

interface ReactionButtonsProps {
  slug: string
}

const STORAGE_PREFIX = "lootnest_reactions_"

function loadReactions(slug: string): Record<Reaction, number> {
  if (typeof window === "undefined") return { like: 0, love: 0, dislike: 0 }
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + slug)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return { like: 0, love: 0, dislike: 0 }
}

function loadUserVote(slug: string): Reaction | null {
  if (typeof window === "undefined") return null
  try {
    return localStorage.getItem(STORAGE_PREFIX + slug + "_vote") as Reaction | null
  } catch { return null }
}

const REACTIONS: { key: Reaction; emoji: string; label: string; labelZh: string }[] = [
  { key: "like", emoji: "👍", label: "Like", labelZh: "点赞" },
  { key: "love", emoji: "❤️", label: "Love", labelZh: "爱心" },
  { key: "dislike", emoji: "👎", label: "Dislike", labelZh: "不喜欢" },
]

export function ReactionButtons({ slug }: ReactionButtonsProps) {
  const locale = useLocale()
  const [counts, setCounts] = useState<Record<Reaction, number>>({ like: 0, love: 0, dislike: 0 })
  const [userVote, setUserVote] = useState<Reaction | null>(null)
  const [animating, setAnimating] = useState<Reaction | null>(null)

  useEffect(() => {
    setCounts(loadReactions(slug))
    setUserVote(loadUserVote(slug))
  }, [slug])

  function handleReaction(reaction: Reaction) {
    // If clicking the same reaction, toggle off
    const newVote = userVote === reaction ? null : reaction
    const updated = { ...counts }

    // Remove old vote
    if (userVote) updated[userVote] = Math.max(0, updated[userVote] - 1)
    // Add new vote
    if (newVote) updated[newVote] += 1

    setCounts(updated)
    setUserVote(newVote)
    setAnimating(newVote ?? reaction)

    localStorage.setItem(STORAGE_PREFIX + slug, JSON.stringify(updated))
    if (newVote) {
      localStorage.setItem(STORAGE_PREFIX + slug + "_vote", newVote)
    } else {
      localStorage.removeItem(STORAGE_PREFIX + slug + "_vote")
    }

    setTimeout(() => setAnimating(null), 300)
  }

  const total = counts.like + counts.love + counts.dislike

  return (
    <div className="rounded-xl border border-card-border bg-card-bg p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-foreground">
          {locale === "zh" ? "这篇文章怎么样？" : "What do you think?"}
        </span>
        {total > 0 && (
          <span className="text-xs text-muted">
            ({total})
          </span>
        )}
      </div>
      <div className="flex gap-3">
        {REACTIONS.map(({ key, emoji, label, labelZh }) => {
          const count = counts[key]
          const active = userVote === key
          const isAnimating = animating === key
          return (
            <button
              key={key}
              onClick={() => handleReaction(key)}
              title={locale === "zh" ? labelZh : label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                active
                  ? "border-accent bg-accent/10 text-accent shadow-sm"
                  : "border-card-border bg-background text-muted hover:border-accent/40 hover:text-foreground"
              } ${isAnimating ? "scale-110" : ""}`}
            >
              <span className="text-lg leading-none">{emoji}</span>
              {count > 0 && (
                <span className="text-xs tabular-nums">{count}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}