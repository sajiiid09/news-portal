import { getFeedPagination, getPaginatedFeedArticles } from '@/lib/seo/feed'

const BASE_URL = 'https://your-domain.com'

export async function GET(request: Request) {
  const { page, pageSize } = getFeedPagination(request)
  const { items: articles, totalPages } = await getPaginatedFeedArticles(page, pageSize)

  const payload = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'বর্তমান বাংলা',
    home_page_url: BASE_URL,
    feed_url: `${BASE_URL}/feed.json?page=${page}&pageSize=${pageSize}`,
    description: 'বাংলাদেশের সর্বাধিক পঠিত বাংলা নিউজ পেপার',
    language: 'bn-BD',
    _pagination: {
      page,
      pageSize,
      totalPages,
      next: page < totalPages ? `${BASE_URL}/feed.json?page=${page + 1}&pageSize=${pageSize}` : null,
      prev: page > 1 ? `${BASE_URL}/feed.json?page=${page - 1}&pageSize=${pageSize}` : null,
    },
    items: articles.map((article) => ({
      id: article.id,
      url: `${BASE_URL}/article/${article.slug}`,
      title: article.title,
      content_text: article.body,
      summary: article.summary,
      image: article.image,
      date_published: article.publishedAt,
      date_modified: article.updatedAt || article.publishedAt,
      tags: article.tags,
    })),
  }

  return Response.json(payload, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
    },
  })
}
