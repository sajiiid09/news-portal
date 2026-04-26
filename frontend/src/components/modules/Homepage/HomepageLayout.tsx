import Image from 'next/image'
import Link from 'next/link'
import type { Article, Category, Gallery, Video } from '@/lib/types'
import { formatBanglaDate } from '@/lib/utils'
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
    <p className="bb-home-meta">
      <span>{categoryLabel(article, categoryMap)}</span>
      <span>{formatBanglaDate(article.publishedAt)}</span>
    </p>
  )
}

function LeadStory({ article, categoryMap }: { article: Article; categoryMap: Map<string, string> }) {
  return (
    <article className="bb-home-lead-story" data-bb-reveal>
      <Link href={`/article/${article.slug}`} className="bb-home-media bb-home-media--lead">
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, (max-width: 1180px) 62vw, 720px"
          priority
        />
      </Link>
      <StoryMeta article={article} categoryMap={categoryMap} />
      <h1>
        <Link href={`/article/${article.slug}`}>{article.title}</Link>
      </h1>
      <p>{article.summary}</p>
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
    <article
      className={prominent ? 'bb-home-text-story bb-home-text-story--prominent' : 'bb-home-text-story'}
      data-bb-reveal
    >
      <StoryMeta article={article} categoryMap={categoryMap} />
      <h3>
        <Link href={`/article/${article.slug}`}>{article.title}</Link>
      </h3>
      {prominent ? <p>{article.summary}</p> : null}
    </article>
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
    <article
      className={compact ? 'bb-home-media-story bb-home-media-story--compact' : 'bb-home-media-story'}
      data-bb-reveal
    >
      <Link href={`/article/${article.slug}`} className="bb-home-media">
        <Image
          src={article.image}
          alt={article.title}
          width={720}
          height={405}
          sizes={compact ? '(max-width: 768px) 112px, 160px' : '(max-width: 768px) 100vw, 31vw'}
        />
      </Link>
      <div>
        <StoryMeta article={article} categoryMap={categoryMap} />
        <h3>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        {!compact ? <p>{article.summary}</p> : null}
      </div>
    </article>
  )
}

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="bb-home-section-header">
      <h2>{title}</h2>
      <Link href={href}>সব দেখুন</Link>
    </div>
  )
}

function StoryStrip({
  articles,
  categoryMap,
}: {
  articles: Article[]
  categoryMap: Map<string, string>
}) {
  return (
    <section className="bb-home-story-strip" aria-label="সর্বশেষ সংবাদ">
      {articles.map((article) => (
        <MediaStory key={article.id} article={article} categoryMap={categoryMap} compact />
      ))}
    </section>
  )
}

function RankedList({ title, articles }: { title: string; articles: Article[] }) {
  return (
    <section className="bb-home-ranked" data-bb-reveal>
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

function LatestList({ articles, categoryMap }: { articles: Article[]; categoryMap: Map<string, string> }) {
  return (
    <section className="bb-home-latest-panel" data-bb-reveal>
      <div className="bb-home-tabs" role="presentation">
        <span>সর্বশেষ</span>
        <span>জনপ্রিয়</span>
      </div>
      <div className="bb-home-latest-panel__list">
        {articles.map((article) => (
          <TextStory key={article.id} article={article} categoryMap={categoryMap} />
        ))}
      </div>
      <Link href="/latest" className="bb-home-more-link">
        আরও সর্বশেষ
      </Link>
    </section>
  )
}

function CategoryBlock({
  title,
  href,
  articles,
  categoryMap,
  variant = 'standard',
}: {
  title: string
  href: string
  articles: Article[]
  categoryMap: Map<string, string>
  variant?: 'standard' | 'dense'
}) {
  const [feature, ...rest] = articles

  if (!feature) {
    return null
  }

  return (
    <section
      className={variant === 'dense' ? 'bb-home-category bb-home-category--dense' : 'bb-home-category'}
      data-bb-reveal
    >
      <SectionHeader title={title} href={href} />
      <div className="bb-home-category__grid">
        <MediaStory article={feature} categoryMap={categoryMap} />
        <div className="bb-home-category__list">
          {rest.slice(0, variant === 'dense' ? 5 : 4).map((article, index) => (
            <TextStory
              key={article.id}
              article={article}
              categoryMap={categoryMap}
              prominent={variant === 'standard' && index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function OpinionBlock({ articles, categoryMap }: { articles: Article[]; categoryMap: Map<string, string> }) {
  const [feature, ...rest] = articles

  if (!feature) {
    return null
  }

  return (
    <section className="bb-home-opinion" data-bb-reveal>
      <SectionHeader title="মতামত" href="/opinion" />
      <div className="bb-home-opinion__grid">
        <TextStory article={feature} categoryMap={categoryMap} prominent />
        {rest.slice(0, 3).map((article) => (
          <TextStory key={article.id} article={article} categoryMap={categoryMap} />
        ))}
      </div>
    </section>
  )
}

function MediaBlock({ videos, galleries }: { videos: Video[]; galleries: Gallery[] }) {
  return (
    <section className="bb-home-media-block" data-bb-reveal>
      <div>
        <SectionHeader title="ভিডিও" href="/video" />
        <div className="bb-home-media-block__grid">
          {videos.slice(0, 3).map((video) => (
            <article key={video.id} className="bb-home-video-card" data-bb-reveal>
              <Link href={`/video/${video.id}`} className="bb-home-media">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={720}
                  height={405}
                  sizes="(max-width: 768px) 100vw, 28vw"
                />
                <span>{video.duration}</span>
              </Link>
              <h3>
                <Link href={`/video/${video.id}`}>{video.title}</Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
      <div>
        <SectionHeader title="ছবি" href="/photo" />
        <div className="bb-home-gallery-list">
          {galleries.slice(0, 3).map((gallery) => (
            <article key={gallery.id} className="bb-home-gallery-item" data-bb-reveal>
              <Link href={`/photo/${gallery.id}`} className="bb-home-media">
                <Image
                  src={gallery.coverImage}
                  alt={gallery.title}
                  width={240}
                  height={160}
                  sizes="120px"
                />
              </Link>
              <div>
                <p className="bb-home-meta">{gallery.photos.length} ছবি</p>
                <h3>
                  <Link href={`/photo/${gallery.id}`}>{gallery.title}</Link>
                </h3>
              </div>
            </article>
          ))}
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
  const [lead, ...secondaryLead] = leadArticles

  if (!lead) {
    return null
  }

  return (
    <div className="bb-home">
      <HomeMotion />
      <section className="bb-home-lead-grid" aria-label="প্রধান সংবাদ">
        <div className="bb-home-lead-grid__left">
          <LeadStory article={lead} categoryMap={categoryMap} />
          <div className="bb-home-lead-grid__secondary">
            {secondaryLead.slice(0, 4).map((article, index) =>
              index === 0 ? (
                <MediaStory key={article.id} article={article} categoryMap={categoryMap} compact />
              ) : (
                <TextStory key={article.id} article={article} categoryMap={categoryMap} />
              )
            )}
          </div>
        </div>
        <LatestList articles={latestArticles.slice(0, 6)} categoryMap={categoryMap} />
      </section>

      <StoryStrip articles={latestArticles.slice(6, 10)} categoryMap={categoryMap} />

      <div className="bb-home-two-column">
        <div className="bb-home-two-column__main">
          <CategoryBlock
            title="বাংলাদেশ"
            href="/bangladesh"
            articles={bangladeshArticles.slice(0, 5)}
            categoryMap={categoryMap}
          />
          <div className="bb-home-section-pair">
            <CategoryBlock
              title="রাজনীতি"
              href="/politics"
              articles={politicsArticles.slice(0, 5)}
              categoryMap={categoryMap}
              variant="dense"
            />
            <CategoryBlock
              title="বিশ্ব"
              href="/world"
              articles={worldArticles.slice(0, 5)}
              categoryMap={categoryMap}
              variant="dense"
            />
          </div>
          <CategoryBlock
            title="বাণিজ্য"
            href="/business"
            articles={businessArticles.slice(0, 5)}
            categoryMap={categoryMap}
          />
          <OpinionBlock articles={opinionArticles.slice(0, 4)} categoryMap={categoryMap} />
          <div className="bb-home-section-pair">
            <CategoryBlock
              title="খেলা"
              href="/sports"
              articles={sportsArticles.slice(0, 5)}
              categoryMap={categoryMap}
              variant="dense"
            />
            <CategoryBlock
              title="বিনোদন"
              href="/entertainment"
              articles={entertainmentArticles.slice(0, 5)}
              categoryMap={categoryMap}
              variant="dense"
            />
          </div>
          <MediaBlock videos={videos} galleries={galleries} />
          <div className="bb-home-section-pair">
            <CategoryBlock
              title="চাকরি"
              href="/jobs"
              articles={jobsArticles.slice(0, 5)}
              categoryMap={categoryMap}
              variant="dense"
            />
            <CategoryBlock
              title="জীবনযাপন"
              href="/lifestyle"
              articles={lifestyleArticles.slice(0, 5)}
              categoryMap={categoryMap}
              variant="dense"
            />
          </div>
        </div>
        <aside className="bb-home-two-column__rail" aria-label="পাঠকের পছন্দ">
          <RankedList title="সর্বাধিক পঠিত" articles={mostRead.slice(0, 8)} />
          <section className="bb-home-static-note" data-bb-reveal>
            <h2>আজকের আয়োজন</h2>
            <p>ই-পেপার ও ইংরেজি সংস্করণ আপাতত স্থির অবস্থায় রাখা হয়েছে।</p>
          </section>
        </aside>
      </div>
    </div>
  )
}
