import { getFeedPagination, getPaginatedFeedArticles } from '@/lib/seo/feed'

const BASE_URL = 'https://your-domain.com'

export async function GET(request: Request) {
  const { page, pageSize } = getFeedPagination(request)
  const { items: articles, totalPages } = await getPaginatedFeedArticles(page, pageSize)
  const nextPage = page < totalPages ? `${BASE_URL}/feed.xml?page=${page + 1}&pageSize=${pageSize}` : ''
  const prevPage = page > 1 ? `${BASE_URL}/feed.xml?page=${page - 1}&pageSize=${pageSize}` : ''

  const items = articles
    .map(
      (article) => `
      <item>
        <title><![CDATA[${article.title}]]></title>
        <link>${BASE_URL}/article/${article.slug}</link>
        <guid>${BASE_URL}/article/${article.slug}</guid>
        <description><![CDATA[${article.summary}]]></description>
        <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
        <category>${article.categoryId}</category>
      </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>বর্তমান বাংলা</title>
      <link>${BASE_URL}</link>
      <description>বাংলাদেশের সর্বাধিক পঠিত বাংলা নিউজ পেপার</description>
      <language>bn-bd</language>
      <generator>BortomanBangla Feed</generator>
      <atom:link href="${BASE_URL}/feed.xml?page=${page}&pageSize=${pageSize}" rel="self" type="application/rss+xml" />
      ${nextPage ? `<atom:link href="${nextPage}" rel="next" type="application/rss+xml" />` : ''}
      ${prevPage ? `<atom:link href="${prevPage}" rel="previous" type="application/rss+xml" />` : ''}
      ${items}
    </channel>
  </rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
    },
  })
}
