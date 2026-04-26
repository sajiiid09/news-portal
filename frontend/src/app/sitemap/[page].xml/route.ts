import {
  BASE_URL,
  buildSitemapEntries,
  countSitemapPages,
  SITEMAP_PAGE_SIZE,
  sliceSitemapEntries,
  toSitemapXml,
} from '@/lib/seo/sitemap'

export async function GET(
  _request: Request,
  { params }: { params: Promise<Record<string, string>> }
) {
  const page = (await params).page
  const pageNumber = Math.max(1, Number.parseInt(page, 10) || 1)
  const allEntries = await buildSitemapEntries()
  const totalPages = countSitemapPages(allEntries.length, SITEMAP_PAGE_SIZE)

  if (pageNumber === 1) {
    return Response.redirect(`${BASE_URL}/sitemap.xml`, 302)
  }

  if (pageNumber > totalPages) {
    return new Response('Not found', { status: 404 })
  }

  const entries = sliceSitemapEntries(allEntries, pageNumber, SITEMAP_PAGE_SIZE)

  return new Response(toSitemapXml(entries), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
