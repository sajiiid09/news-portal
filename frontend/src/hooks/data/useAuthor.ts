import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'

export function useAuthor(slug: string) {
  return useQuery({
    queryKey: ['author', slug],
    queryFn: () => DataService.authors.getBySlug(slug),
    enabled: !!slug,
  })
}

export function useAuthorArticles(authorId: string) {
  return useQuery({
    queryKey: ['author-articles', authorId],
    queryFn: () => DataService.authors.getArticles(authorId),
    enabled: !!authorId,
  })
}
