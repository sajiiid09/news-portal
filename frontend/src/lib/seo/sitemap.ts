import type { MetadataRoute } from 'next'
import { DataService } from '@/lib/data'

export const BASE_URL = 'https://your-domain.com'
export const SITEMAP_PAGE_SIZE = 50

export async function buildSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const [articles, categories, videos, galleries, epaperIssues] = await Promise.all([
    DataService.articles.getAll(),
    DataService.categories.getAll(),
    DataService.videos.getAll(),
    DataService.galleries.getAll(),
    DataService.epaper.getIssues(),
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/latest',
    '/video',
    '/photo',
    '/epaper',
    '/search',
    '/contact',
    '/about',
    '/terms',
    '/privacy',
    '/advertise',
    '/opinion',
    '/login',
    '/register',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: path === '' ? 1 : 0.7,
  }))

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/article/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: 'hourly',
    priority: article.isFeatured ? 0.9 : 0.75,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  const videoRoutes: MetadataRoute.Sitemap = videos.map((video) => ({
    url: `${BASE_URL}/video/${video.id}`,
    lastModified: new Date(video.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.65,
  }))

  const galleryRoutes: MetadataRoute.Sitemap = galleries.map((gallery) => ({
    url: `${BASE_URL}/photo/${gallery.id}`,
    lastModified: new Date(gallery.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.65,
  }))

  const epaperRoutes: MetadataRoute.Sitemap = epaperIssues.map((issue) => ({
    url: `${BASE_URL}/epaper/${issue.date}`,
    lastModified: new Date(issue.date),
    changeFrequency: 'daily',
    priority: 0.65,
  }))

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...categoryRoutes,
    ...videoRoutes,
    ...galleryRoutes,
    ...epaperRoutes,
  ]
}

export function sliceSitemapEntries(
  entries: MetadataRoute.Sitemap,
  page: number,
  pageSize: number = SITEMAP_PAGE_SIZE
): MetadataRoute.Sitemap {
  const safePage = Math.max(1, page)
  const start = (safePage - 1) * pageSize
  return entries.slice(start, start + pageSize)
}

export function countSitemapPages(totalEntries: number, pageSize: number = SITEMAP_PAGE_SIZE) {
  return Math.max(1, Math.ceil(totalEntries / pageSize))
}

export function toSitemapXml(entries: MetadataRoute.Sitemap): string {
  const rows = entries
    .map((entry) => {
      const lastModified = new Date(entry.lastModified || Date.now()).toISOString()
      const changeFrequency = entry.changeFrequency || 'daily'
      const priority = typeof entry.priority === 'number' ? entry.priority.toFixed(1) : '0.7'

      return `<url><loc>${entry.url}</loc><lastmod>${lastModified}</lastmod><changefreq>${changeFrequency}</changefreq><priority>${priority}</priority></url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${rows}</urlset>`
}
