import type { MetadataRoute } from 'next'
import { buildSitemapEntries, SITEMAP_PAGE_SIZE, sliceSitemapEntries } from '@/lib/seo/sitemap'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await buildSitemapEntries()
  return sliceSitemapEntries(entries, 1, SITEMAP_PAGE_SIZE)
}
