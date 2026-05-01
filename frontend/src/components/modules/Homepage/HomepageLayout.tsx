import Image from 'next/image'
import Link from 'next/link'
import type { Article, Category, Gallery, Video } from '@/lib/types'
import { formatBanglaDate } from '@/lib/utils'
import { AdCreative } from '@/components/modules/Ads'
import { HomeMotion } from './HomeMotion'

interface HomepageLayoutProps {
  featuredArticles: Article[]
  latestArticles: Article[]
  mostRead: Article[]
  categories: Category[]
  opinionArticles: Article[]
  bangladeshArticles: Article[]
  politicsArticles: Article[]
  worldArticles: Article[]
  businessArticles: Article[]
  sportsArticles: Article[]
  entertainmentArticles: Article[]
  jobsArticles: Article[]
  lifestyleArticles: Article[]
  videos: Video[]
  galleries: Gallery[]
}

function categoryLabel(article: Article, categoryMap: Map<string, string>) {
  return categoryMap.get(article.categoryId) || article.categoryId
}

function StoryMeta({ article, categoryMap }: { article: Article; categoryMap: Map<string, string> }) {
  return (
    <p className="bb-pa-story__meta">
      <span>{categoryLabel(article, categoryMap)}</span>
      <span>{formatBanglaDate(article.publishedAt)}</span>
    </p>
  )
}

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="bb-pa-section__header">
      <h2>{title}</h2>
      <Link href={href}>আরও</Link>
    </div>
  )
}

function LeadStory({
  article,
  categoryMap,
  followupArticles = [],
}: {
  article: Article
  categoryMap: Map<string, string>
  followupArticles?: Article[]
}) {
  return (
    <div className="bb-pa-lead-grid__main">
      <article className="bb-pa-story bb-pa-story--lead" data-bb-reveal>
        <Link href={`/article/${article.slug}`} className="bb-pa-story__media">
          <Image
            src={article.image}
            alt={article.title}
            width={900}
            height={506}
            sizes="(max-width: 768px) 100vw, (max-width: 1180px) 58vw, 570px"
            priority
          />
        </Link>
        <div className="bb-pa-story__body">
          <StoryMeta article={article} categoryMap={categoryMap} />
          <h1>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </h1>
          <p>{article.summary}</p>
        </div>
      </article>

      {followupArticles.length ? (
        <div className="bb-pa-lead-grid__related">
          {followupArticles.map((followupArticle) => (
            <TextStory
              key={followupArticle.id}
              article={followupArticle}
              categoryMap={categoryMap}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function MediaStory({
  article,
  categoryMap,
  compact = false,
}: {
  article: Article
  categoryMap: Map<string, string>
  compact?: boolean
}) {
  return (
    <article className={`bb-pa-story bb-pa-story--media ${compact ? 'bb-pa-story--compact' : ''}`} data-bb-reveal>
      <Link href={`/article/${article.slug}`} className="bb-pa-story__media">
        <Image
          src={article.image}
          alt={article.title}
          width={420}
          height={236}
          sizes={compact ? '(max-width: 768px) 112px, 132px' : '(max-width: 768px) 100vw, 280px'}
        />
      </Link>
      <div className="bb-pa-story__body">
        <StoryMeta article={article} categoryMap={categoryMap} />
        <h3>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.summary}</p>
      </div>
    </article>
  )
}

function TextStory({
  article,
  categoryMap,
  prominent = false,
}: {
  article: Article
  categoryMap: Map<string, string>
  prominent?: boolean
}) {
  return (
    <article className={`bb-pa-story bb-pa-story--text ${prominent ? 'bb-pa-story--prominent' : ''}`} data-bb-reveal>
      <StoryMeta article={article} categoryMap={categoryMap} />
      <h3>
        <Link href={`/article/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.summary}</p>
    </article>
  )
}

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="bb-pa-story bb-pa-story--video" data-bb-reveal>
      <Link href={`/video/${video.id}`} className="bb-pa-story__media">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={420}
          height={236}
          sizes="(max-width: 768px) 100vw, 260px"
        />
        <span className="bb-pa-story__play" aria-hidden="true">
          ▶
        </span>
      </Link>
      <h3>
        <Link href={`/video/${video.id}`}>{video.title}</Link>
      </h3>
    </article>
  )
}

function GalleryCard({ gallery }: { gallery: Gallery }) {
  return (
    <article className="bb-pa-story bb-pa-story--gallery" data-bb-reveal>
      <Link href={`/photo/${gallery.id}`} className="bb-pa-story__media">
        <Image
          src={gallery.coverImage}
          alt={gallery.title}
          width={420}
          height={280}
          sizes="(max-width: 768px) 100vw, 260px"
        />
      </Link>
      <h3>
        <Link href={`/photo/${gallery.id}`}>{gallery.title}</Link>
      </h3>
    </article>
  )
}

function RankedList({ title, articles }: { title: string; articles: Article[] }) {
  return (
    <section className="bb-pa-ranked" data-bb-reveal>
      <h2>{title}</h2>
      <ol>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

function CategorySection({
  title,
  href,
  articles,
  categoryMap,
  dense = false,
}: {
  title: string
  href: string
  articles: Article[]
  categoryMap: Map<string, string>
  dense?: boolean
}) {
  const [lead, ...rest] = articles

  if (!lead) {
    return null
  }

  return (
    <section className={`bb-pa-section ${dense ? 'bb-pa-section--dense' : ''}`} data-bb-reveal>
      <SectionHeader title={title} href={href} />
      <div className="bb-pa-section__grid">
        <MediaStory article={lead} categoryMap={categoryMap} />
        <div className="bb-pa-section__side">
          {rest.slice(0, 4).map((article, index) =>
            index === 0 && dense ? (
              <TextStory key={article.id} article={article} categoryMap={categoryMap} prominent />
            ) : (
              <MediaStory key={article.id} article={article} categoryMap={categoryMap} compact />
            )
          )}
        </div>
      </div>
    </section>
  )
}

function MediaSection({
  videos,
  galleries,
}: {
  videos: Video[]
  galleries: Gallery[]
}) {
  return (
    <section className="bb-pa-section bb-pa-section--media" data-bb-reveal>
      <div className="bb-pa-media-pair">
        <div>
          <SectionHeader title="ভিডিও" href="/video" />
          <div className="bb-pa-media-grid">
            {videos.slice(0, 3).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader title="ছবি" href="/photo" />
          <div className="bb-pa-media-grid">
            {galleries.slice(0, 3).map((gallery) => (
              <GalleryCard key={gallery.id} gallery={gallery} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomepageLayout({
  featuredArticles,
  latestArticles,
  mostRead,
  categories,
  opinionArticles,
  bangladeshArticles,
  politicsArticles,
  worldArticles,
  businessArticles,
  sportsArticles,
  entertainmentArticles,
  jobsArticles,
  lifestyleArticles,
  videos,
  galleries,
}: HomepageLayoutProps) {
  const categoryMap = new Map(categories.map((category) => [category.id, category.name]))
  const leadArticles = featuredArticles.length >= 5 ? featuredArticles : latestArticles.slice(0, 5)
  const [lead, ...heroRailArticles] = leadArticles
  const leadFollowupArticles = latestArticles
    .filter((article) => article.id !== lead?.id && !leadArticles.some((leadArticle) => leadArticle.id === article.id))
    .slice(0, 3)
  const storyStripArticles = latestArticles.slice(5, 9)
  const latestRailArticles = latestArticles.slice(9, 15)

  if (!lead) {
    return null
  }

  return (
    <div className="bb-pa-home">
      <HomeMotion />

      <section className="bb-pa-home__leaderboard" aria-label="বিজ্ঞাপন">
        <AdCreative variant="leaderboard" />
      </section>

      <section className="bb-pa-lead-grid" aria-label="প্রধান সংবাদ">
        <LeadStory article={lead} categoryMap={categoryMap} followupArticles={leadFollowupArticles} />
        <div className="bb-pa-lead-grid__secondary">
          {heroRailArticles.slice(0, 4).map((article, index) =>
            index === 0 ? (
              <MediaStory key={article.id} article={article} categoryMap={categoryMap} />
            ) : (
              <TextStory key={article.id} article={article} categoryMap={categoryMap} />
            )
          )}
        </div>
        <aside className="bb-pa-lead-grid__rail" aria-label="বিজ্ঞাপন ও সর্বশেষ">
          <AdCreative variant="inline" />
          <RankedList title="সর্বশেষ" articles={latestRailArticles} />
        </aside>
      </section>

      <section className="bb-pa-strip" aria-label="বাছাই সংবাদ">
        {storyStripArticles.map((article) => (
          <MediaStory key={article.id} article={article} categoryMap={categoryMap} compact />
        ))}
      </section>

      <CategorySection title="বাংলাদেশ" href="/bangladesh" articles={bangladeshArticles.slice(0, 5)} categoryMap={categoryMap} />
      <CategorySection title="রাজনীতি" href="/politics" articles={politicsArticles.slice(0, 5)} categoryMap={categoryMap} dense />
      <CategorySection title="বিশ্ব" href="/world" articles={worldArticles.slice(0, 5)} categoryMap={categoryMap} />
      <CategorySection title="বাণিজ্য" href="/business" articles={businessArticles.slice(0, 5)} categoryMap={categoryMap} dense />
      <CategorySection title="মতামত" href="/opinion" articles={opinionArticles.slice(0, 5)} categoryMap={categoryMap} dense />
      <CategorySection title="খেলা" href="/sports" articles={sportsArticles.slice(0, 5)} categoryMap={categoryMap} />
      <CategorySection title="বিনোদন" href="/entertainment" articles={entertainmentArticles.slice(0, 5)} categoryMap={categoryMap} dense />

      <MediaSection videos={videos} galleries={galleries} />

      <CategorySection title="চাকরি" href="/jobs" articles={jobsArticles.slice(0, 5)} categoryMap={categoryMap} />
      <CategorySection title="জীবনযাপন" href="/lifestyle" articles={lifestyleArticles.slice(0, 5)} categoryMap={categoryMap} dense />

      <section className="bb-pa-bottom-grid" data-bb-reveal>
        <RankedList title="সর্বাধিক পঠিত" articles={mostRead.slice(0, 8)} />
        <AdCreative variant="leaderboard" />
      </section>
    </div>
  )
}
