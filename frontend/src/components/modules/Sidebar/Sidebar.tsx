import type { Article, Category } from '@/lib/types'
import Link from 'next/link'
import { DataService } from '@/lib/data'
import { MostReadWidget } from './MostReadWidget'
import { LatestNewsWidget } from './LatestNewsWidget'
import { NewsletterSignup } from './NewsletterSignup'
import { AdvertisementWidget } from './AdvertisementWidget'

interface SidebarProps {
  mostRead: Article[]
  categories: Category[]
  latest?: Article[]
}

export async function Sidebar({ mostRead, categories, latest = [] }: SidebarProps) {
  const videos = await DataService.videos.getLatest(1)
  const galleries = (await DataService.galleries.getAll()).slice(0, 3)
  const opinionSpotlight = (await DataService.articles.getByCategory('opinion')).slice(0, 2)
  const trendingTags = Array.from(new Set(mostRead.flatMap((item) => item.tags))).slice(0, 10)

  return (
    <aside className="bb-sidebar">
      <MostReadWidget articles={mostRead} />
      <LatestNewsWidget articles={latest.length ? latest : mostRead} />

      <section className="bb-widget">
        <h3>মতামত</h3>
        {opinionSpotlight.map((item) => (
          <p key={item.id}>
            <Link href={`/article/${item.slug}`}>{item.title}</Link>
          </p>
        ))}
      </section>

      <section className="bb-widget">
        <h3>Video of the Day</h3>
        {videos[0] ? (
          <Link href={`/video/${videos[0].id}`}>{videos[0].title}</Link>
        ) : (
          <p className="bb-meta">No video available</p>
        )}
      </section>

      <section className="bb-widget">
        <h3>Photo Gallery</h3>
        <ul>
          {galleries.map((gallery) => (
            <li key={gallery.id}>
              <Link href={`/photo/${gallery.id}`}>{gallery.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bb-widget">
        <h3>E-paper Preview</h3>
        <Link href="/epaper">আজকের ই-পেপার দেখুন</Link>
      </section>

      <section className="bb-widget">
        <h3>ক্যাটাগরি</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </section>
      <NewsletterSignup />

      <section className="bb-widget">
        <h3>Trending Topics</h3>
        <div className="bb-tag-list">
          {trendingTags.map((tag) => (
            <Link key={tag} href={`/tag/${tag}`}>
              #{tag}
            </Link>
          ))}
        </div>
      </section>

      <AdvertisementWidget />
    </aside>
  )
}
