'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useArticleStore } from '@/store'
import { DataService } from '@/lib/data'
import type { Article } from '@/lib/types'

export default function DashboardBookmarksPage() {
  const { savedArticles } = useArticleStore()
  const [byId, setById] = useState<Record<string, Article>>({})

  useEffect(() => {
    let mounted = true

    DataService.articles.getAll().then((articles) => {
      if (!mounted) return
      const lookup = Object.fromEntries(articles.map((article) => [article.id, article]))
      setById(lookup)
    })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="bb-container bb-section">
      <h1>বুকমার্ক</h1>
      <div className="bb-grid bb-grid--three">
        {savedArticles.map((saved) => {
          const article = byId[saved.id]

          if (!article) {
            return null
          }

          return (
            <article key={saved.id} className="bb-card">
              <p className="bb-meta">সংরক্ষিত সংবাদ</p>
              <h3>{article.title}</h3>
              <Link href={`/article/${article.slug}`}>পড়ুন</Link>
            </article>
          )
        })}
      </div>
      {!savedArticles.length ? <p>কোনো সংরক্ষিত আর্টিকেল নেই।</p> : null}
    </div>
  )
}
