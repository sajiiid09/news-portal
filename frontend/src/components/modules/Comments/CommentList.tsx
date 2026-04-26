'use client'

import type { Comment } from '@/lib/types'

function CommentItem({
  comment,
  children,
  onReply,
}: {
  comment: Comment
  children: React.ReactNode
  onReply: (commentId: string) => void
}) {
  return (
    <li className="bb-comment-item">
      <p>
        <strong>{comment.userName}</strong>
      </p>
      <p>{comment.message}</p>
      <button onClick={() => onReply(comment.id)}>Reply</button>
      {children}
    </li>
  )
}

export function CommentList({
  comments,
  sortBy,
  onReply,
}: {
  comments: Comment[]
  sortBy: 'latest' | 'popular'
  onReply: (commentId: string) => void
}) {
  const sorted = [...comments].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }

    return a.message.length - b.message.length
  })

  const roots = sorted.filter((comment) => !comment.parentId)

  return (
    <ul className="bb-comment-list">
      {roots.map((root) => {
        const replies = sorted.filter((item) => item.parentId === root.id)

        return (
          <CommentItem key={root.id} comment={root} onReply={onReply}>
            {!!replies.length && (
              <ul className="bb-comment-replies">
                {replies.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} onReply={onReply}>
                    {null}
                  </CommentItem>
                ))}
              </ul>
            )}
          </CommentItem>
        )
      })}
    </ul>
  )
}
