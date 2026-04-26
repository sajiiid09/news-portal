import {
  BASE_URL,
  buildSitemapEntries,
  countSitemapPages,
  SITEMAP_PAGE_SIZE,
} from '@/lib/seo/sitemap'

export async function GET() {
  const entries = await buildSitemapEntries()
  const totalPages = countSitemapPages(entries.length, SITEMAP_PAGE_SIZE)
  const sitemapRows = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1
    const loc = page === 1 ? `${BASE_URL}/sitemap.xml` : `${BASE_URL}/sitemap/${page}.xml`
    return `<sitemap><loc>${loc}</loc></sitemap>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapRows}
  </sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
