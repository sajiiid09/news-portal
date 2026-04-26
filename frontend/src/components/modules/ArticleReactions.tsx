'use client'

import { useMemo, useState } from 'react'

const REACTIONS = [
  { key: 'like', label: 'পছন্দ' },
  { key: 'important', label: 'গুরুত্বপূর্ণ' },
  { key: 'insightful', label: 'বিশ্লেষণধর্মী' },
] as const

type ReactionKey = (typeof REACTIONS)[number]['key']

interface ArticleReactionsProps {
  articleId: string
}

export function ArticleReactions({ articleId }: ArticleReactionsProps) {
  const storageKey = useMemo(() => `bb_reactions_${articleId}`, [articleId])
  const [counts, setCounts] = useState<Record<ReactionKey, number>>(() => {
    const initial = { like: 0, important: 0, insightful: 0 }

    if (typeof window === 'undefined') {
      return initial
    }

    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        return JSON.parse(saved) as Record<ReactionKey, number>
      }
    } catch {
      return initial
    }

    return initial
  })

  const react = (key: ReactionKey) => {
    const next = { ...counts, [key]: counts[key] + 1 }
    setCounts(next)
    localStorage.setItem(storageKey, JSON.stringify(next))
  }

  return (
    <section className="bb-card bb-section bb-reaction-panel" aria-label="Article reactions">
      <h3>এই খবরটি কেমন লাগল?</h3>
      <div className="bb-reaction-actions">
        {REACTIONS.map((item) => (
          <button key={item.key} type="button" onClick={() => react(item.key)}>
            {item.label} ({counts[item.key]})
          </button>
        ))}
      </div>
    </section>
  )
}
