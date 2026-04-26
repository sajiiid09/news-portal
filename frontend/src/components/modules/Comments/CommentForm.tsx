'use client'

import { useState } from 'react'
import type { Comment } from '@/lib/types'

export function CommentForm({
  articleId,
  onSubmit,
  parentId,
  onSubmitted,
}: {
  articleId: string
  parentId?: string
  onSubmit: (payload: Omit<Comment, 'id' | 'createdAt'>) => Promise<unknown>
  onSubmitted?: () => void
}) {
  const [message, setMessage] = useState('')
  const [isPending, setIsPending] = useState(false)

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault()
        if (!message.trim()) {
          return
        }

        setIsPending(true)
        await onSubmit({
          articleId,
          userId: 'guest',
          userName: 'Guest',
          message,
          parentId,
        })
        setIsPending(false)
        setMessage('')
        onSubmitted?.()
      }}
      className="bb-comment-form"
    >
      <textarea
        rows={3}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder={parentId ? 'Reply লিখুন' : 'মন্তব্য লিখুন'}
      />
      <button disabled={isPending} type="submit">
        {isPending ? 'পাঠানো হচ্ছে...' : 'মন্তব্য পাঠান'}
      </button>
    </form>
  )
}
