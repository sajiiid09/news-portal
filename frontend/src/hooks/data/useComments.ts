import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { DataService } from '@/lib/data'
import type { Comment } from '@/lib/types'

export function useComments(articleId: string) {
  return useQuery({
    queryKey: ['comments', articleId],
    queryFn: () => DataService.comments.getByArticle(articleId),
    enabled: !!articleId,
  })
}

export function useAddComment(articleId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (comment: Omit<Comment, 'id' | 'createdAt'>) => DataService.comments.add(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', articleId] })
    },
  })
}
