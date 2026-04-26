'use client'

import { useEffect, useState } from 'react'
import { DataService } from '@/lib/data'
import type { Comment } from '@/lib/types'

export default function DashboardCommentsPage() {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    let mounted = true

    Promise.all([DataService.articles.getAll(), DataService.comments.getByArticle('article-1')]).then(
      ([articles, firstArticleComments]) => {
        if (!mounted) return

        const liveComments = firstArticleComments.map((comment) => ({
          ...comment,
          message: `${comment.message} (${articles.find((a) => a.id === comment.articleId)?.title || 'Unknown'})`,
        }))

        setComments(liveComments)
      }
    )

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="bb-container bb-section">
      <h1>মন্তব্য ইতিহাস</h1>
      <div className="bb-comment-list">
        {comments.map((comment) => (
          <article key={comment.id} className="bb-comment-item">
            <p>{comment.message}</p>
            <p className="bb-meta">{comment.createdAt}</p>
          </article>
        ))}
      </div>
      {!comments.length ? <p>এখনও কোনো মন্তব্য পাওয়া যায়নি।</p> : null}
    </div>
  )
}
