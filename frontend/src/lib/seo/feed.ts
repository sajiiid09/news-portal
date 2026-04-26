import { DataService } from '@/lib/data'

export const DEFAULT_FEED_PAGE_SIZE = 10
export const MAX_FEED_PAGE_SIZE = 50

export interface FeedPagination {
  page: number
  pageSize: number
}

export function getFeedPagination(request: Request): FeedPagination {
  const url = new URL(request.url)
  const page = Math.max(1, Number.parseInt(url.searchParams.get('page') || '1', 10) || 1)
  const requestedPageSize = Number.parseInt(
    url.searchParams.get('pageSize') || String(DEFAULT_FEED_PAGE_SIZE),
    10
  )
  const pageSize = Math.min(MAX_FEED_PAGE_SIZE, Math.max(1, requestedPageSize || DEFAULT_FEED_PAGE_SIZE))

  return { page, pageSize }
}

export async function getPaginatedFeedArticles(page: number, pageSize: number) {
  const all = await DataService.articles.getAll()
  const sorted = [...all].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  const totalItems = sorted.length
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * pageSize

  return {
    items: sorted.slice(start, start + pageSize),
    totalItems,
    totalPages,
    page: safePage,
    pageSize,
  }
}
