import type { Metadata } from 'next'
import { HomepageLayout } from '@/components/modules/Homepage'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'
import { SITE_CONFIG } from '@/lib/constants/siteConfig'

export const dynamic = 'force-static'
export const revalidate = 60
export const metadata: Metadata = {
  title: SITE_CONFIG.siteName,
  description: SITE_CONFIG.siteDescription,
  alternates: {
    canonical: '/',
  },
}

export default async function HomePage() {
  const [
    featuredArticles,
    latestArticles,
    mostRead,
    categories,
    videos,
    galleries,
    opinionArticles,
    bangladeshArticles,
    politicsArticles,
    worldArticles,
    businessArticles,
    sportsArticles,
    entertainmentArticles,
    jobsArticles,
    lifestyleArticles,
  ] = await Promise.all([
    DataService.articles.getFeatured(5),
    DataService.articles.getLatest(14),
    DataService.articles.getMostRead(10),
    DataService.categories.getAll(),
    DataService.videos.getLatest(6),
    DataService.galleries.getAll(),
    DataService.articles.getByCategory('opinion'),
    DataService.articles.getByCategory('bangladesh'),
    DataService.articles.getByCategory('politics'),
    DataService.articles.getByCategory('world'),
    DataService.articles.getByCategory('business'),
    DataService.articles.getByCategory('sports'),
    DataService.articles.getByCategory('entertainment'),
    DataService.articles.getByCategory('jobs'),
    DataService.articles.getByCategory('lifestyle'),
  ])

  return (
    <Container>
      <HomepageLayout
        featuredArticles={featuredArticles}
        latestArticles={latestArticles}
        mostRead={mostRead}
        categories={categories}
        opinionArticles={opinionArticles}
        bangladeshArticles={bangladeshArticles}
        politicsArticles={politicsArticles}
        worldArticles={worldArticles}
        businessArticles={businessArticles}
        sportsArticles={sportsArticles}
        entertainmentArticles={entertainmentArticles}
        jobsArticles={jobsArticles}
        lifestyleArticles={lifestyleArticles}
        videos={videos}
        galleries={galleries}
      />
    </Container>
  )
}
