import type { Metadata } from 'next'
import { HeroSection } from '@/components/modules/HeroSection'
import { NewsGrid } from '@/components/modules/NewsGrid'
import { Sidebar } from '@/components/modules/Sidebar'
import { VideoSection } from '@/components/modules/VideoSection'
import { OpinionSection } from '@/components/modules/OpinionSection'
import Link from 'next/link'
import { GalleryCard } from '@/components/ui/Card'
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
  const featuredArticles = await DataService.articles.getFeatured(5)
  const latestArticles = await DataService.articles.getLatest(12)
  const mostRead = await DataService.articles.getMostRead(10)
  const categories = await DataService.categories.getAll()
  const videos = await DataService.videos.getLatest(6)
  const galleries = await DataService.galleries.getAll()
  const opinionArticles = await DataService.articles.getByCategory('opinion')
  const bangladeshArticles = await DataService.articles.getByCategory('bangladesh')
  const politicsArticles = await DataService.articles.getByCategory('politics')
  const worldArticles = await DataService.articles.getByCategory('world')
  const sportsArticles = await DataService.articles.getByCategory('sports')
  const entertainmentArticles = await DataService.articles.getByCategory('entertainment')
  const jobsArticles = await DataService.articles.getByCategory('jobs')
  const lifestyleArticles = await DataService.articles.getByCategory('lifestyle')

  return (
    <Container>
      <div className="bb-home-layout">
        <div>
          <HeroSection articles={featuredArticles} />
          <NewsGrid title="সর্বশেষ খবর" articles={latestArticles} viewAllLink="/latest" />
          <NewsGrid title="বাংলাদেশ" articles={bangladeshArticles.slice(0, 6)} viewAllLink="/bangladesh" />
          <NewsGrid title="রাজনীতি" articles={politicsArticles.slice(0, 6)} viewAllLink="/politics" />
          <NewsGrid title="বিশ্ব" articles={worldArticles.slice(0, 6)} viewAllLink="/world" />
          {/* <section className="bb-section bb-card">
            <p className="bb-meta">বিজ্ঞাপন</p>
            <div className="bb-ad-slot">728x90</div>
          </section> */}
          <OpinionSection articles={opinionArticles} />
          <NewsGrid title="খেলা" articles={sportsArticles.slice(0, 8)} viewAllLink="/sports" />
          <NewsGrid
            title="বিনোদন"
            articles={entertainmentArticles.slice(0, 6)}
            viewAllLink="/entertainment"
          />
          <VideoSection videos={videos} />
          <section className="bb-section">
            <div className="bb-section__header">
              <h2>ছবি</h2>
              <Link href="/photo">সব গ্যালারি</Link>
            </div>
            <div className="bb-grid bb-grid--three">
              {galleries.map((gallery) => (
                <GalleryCard key={gallery.id} gallery={gallery} />
              ))}
            </div>
          </section>
          <NewsGrid title="চাকরি" articles={jobsArticles.slice(0, 6)} viewAllLink="/jobs" />
          <NewsGrid
            title="জীবনযাপন"
            articles={lifestyleArticles.slice(0, 6)}
            viewAllLink="/lifestyle"
          />
        </div>
        <Sidebar mostRead={mostRead} categories={categories} latest={latestArticles.slice(0, 10)} />
      </div>
    </Container>
  )
}
