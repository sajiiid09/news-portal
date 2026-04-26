import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'
import type { Article } from '@/lib/types'

export function useArticles(options?: {
  category?: string
  subCategory?: string
  author?: string
  tag?: string
  limit?: number
  featured?: boolean
}) {
  const queryFn = async () => {
    let articles: Article[] = await DataService.articles.getAll()

    if (options?.category) {
      articles = await DataService.articles.getByCategory(options.category)
    }
    if (options?.subCategory) {
      articles = await DataService.articles.getBySubCategory(options.subCategory)
    }
    if (options?.author) {
      articles = await DataService.articles.getByAuthor(options.author)
    }
    if (options?.tag) {
      articles = await DataService.articles.getByTag(options.tag)
    }
    if (options?.featured) {
      articles = articles.filter((article) => article.isFeatured)
    }
    if (options?.limit) {
      articles = articles.slice(0, options.limit)
    }

    return articles
  }

  return useQuery({
    queryKey: ['articles', options],
    queryFn,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })
}

export function useArticle(slug: string) {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => DataService.articles.getBySlug(slug),
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  })
}

export function useMostRead(limit: number = 10) {
  return useQuery({
    queryKey: ['most-read', limit],
    queryFn: () => DataService.articles.getMostRead(limit),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
  })
}

export function useLatestNews(limit: number = 20) {
  return useQuery({
    queryKey: ['latest-news', limit],
    queryFn: () => DataService.articles.getLatest(limit),
    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60,
  })
}

export function useFeaturedArticles(limit: number = 5) {
  return useQuery({
    queryKey: ['featured', limit],
    queryFn: () => DataService.articles.getFeatured(limit),
    staleTime: 1000 * 60 * 10,
  })
}
