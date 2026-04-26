'use client'

import { useState } from 'react'
import { useAddComment, useComments } from '@/hooks'
import { CommentForm } from './CommentForm'
import { CommentList } from './CommentList'

export function CommentSection({ articleId }: { articleId: string }) {
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest')
  const [replyTo, setReplyTo] = useState<string | undefined>(undefined)
  const { data = [], isLoading } = useComments(articleId)
  const addComment = useAddComment(articleId)

  return (
    <section className="bb-section" id="comments">
      <div className="bb-section__header">
        <h2>মন্তব্য ({data.length})</h2>
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value as 'latest' | 'popular')}>
          <option value="latest">সর্বশেষ</option>
          <option value="popular">সর্বাধিক পঠিত</option>
        </select>
      </div>

      <CommentForm
        articleId={articleId}
        parentId={replyTo}
        onSubmit={addComment.mutateAsync}
        onSubmitted={() => setReplyTo(undefined)}
      />

      {isLoading ? <p>মন্তব্য লোড হচ্ছে...</p> : null}
      <CommentList comments={data} sortBy={sortBy} onReply={setReplyTo} />
    </section>
  )
}
