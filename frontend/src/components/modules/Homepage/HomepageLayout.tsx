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
    <p className="bb-home-card__meta">
      <span>{categoryLabel(article, categoryMap)}</span>
      <span>{formatBanglaDate(article.publishedAt)}</span>
    </p>
  )
}

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="bb-home-section__header">
      <h2>{title}</h2>
      <Link href={href}>আরও</Link>
    </div>
  )
}

function LeadStoryCard({
  article,
  categoryMap,
}: {
  article: Article
  categoryMap: Map<string, string>
}) {
  return (
    <article className="bb-home-card bb-home-card--lead" data-bb-reveal>
      <Link href={`/article/${article.slug}`} className="bb-home-card__media bb-home-card__media--lead">
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, (max-width: 1180px) 62vw, 760px"
          priority
        />
      </Link>
      <div className="bb-home-card__body">
        <StoryMeta article={article} categoryMap={categoryMap} />
        <h1 className="bb-home-card__title">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h1>
        <p className="bb-home-card__summary">{article.summary}</p>
      </div>
    </article>
  )
}

function SplitStoryCard({
  article,
  categoryMap,
  mediaPosition = 'right',
  compact = false,
}: {
  article: Article
  categoryMap: Map<string, string>
  mediaPosition?: 'left' | 'right'
  compact?: boolean
}) {
  return (
    <article
      className={`bb-home-card bb-home-card--split ${compact ? 'bb-home-card--compact' : ''} ${
        mediaPosition === 'left' ? 'bb-home-card--split-left' : 'bb-home-card--split-right'
      }`}
      data-bb-reveal
    >
      <Link href={`/article/${article.slug}`} className="bb-home-card__media bb-home-card__media--split">
        <Image
          src={article.image}
          alt={article.title}
          width={420}
          height={280}
          sizes="(max-width: 768px) 100vw, 180px"
        />
      </Link>
      <div className="bb-home-card__body">
        <StoryMeta article={article} categoryMap={categoryMap} />
        <h3 className="bb-home-card__title">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="bb-home-card__summary">{article.summary}</p>
      </div>
    </article>
  )
}

function TextStoryCard({
  article,
  categoryMap,
  prominent = false,
}: {
  article: Article
  categoryMap: Map<string, string>
  prominent?: boolean
}) {
  return (
    <article className={`bb-home-card bb-home-card--text ${prominent ? 'bb-home-card--text-prominent' : ''}`} data-bb-reveal>
      <StoryMeta article={article} categoryMap={categoryMap} />
      <h3 className="bb-home-card__title">
        <Link href={`/article/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="bb-home-card__summary">{article.summary}</p>
    </article>
  )
}

function StackStoryCard({
  article,
  categoryMap,
}: {
  article: Article
  categoryMap: Map<string, string>
}) {
  return (
    <article className="bb-home-card bb-home-card--stack" data-bb-reveal>
      <Link href={`/article/${article.slug}`} className="bb-home-card__media bb-home-card__media--stack">
        <Image
          src={article.image}
          alt={article.title}
          width={720}
          height={405}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </Link>
      <div className="bb-home-card__body">
        <StoryMeta article={article} categoryMap={categoryMap} />
        <h3 className="bb-home-card__title">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="bb-home-card__summary">{article.summary}</p>
      </div>
    </article>
  )
}

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="bb-home-card bb-home-card--video" data-bb-reveal>
      <Link href={`/video/${video.id}`} className="bb-home-card__media bb-home-card__media--video">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={720}
          height={405}
          sizes="(max-width: 768px) 100vw, 26vw"
        />
        <span className="bb-home-card__play" aria-hidden="true">
          ▶
        </span>
      </Link>
      <div className="bb-home-card__body bb-home-card__body--video">
        <p className="bb-home-card__eyebrow">ভিডিও</p>
        <h3 className="bb-home-card__title">
          <Link href={`/video/${video.id}`}>{video.title}</Link>
        </h3>
      </div>
    </article>
  )
}

function GalleryCard({ gallery }: { gallery: Gallery }) {
  return (
    <article className="bb-home-card bb-home-card--gallery" data-bb-reveal>
      <Link href={`/photo/${gallery.id}`} className="bb-home-card__media bb-home-card__media--gallery">
        <Image
          src={gallery.coverImage}
          alt={gallery.title}
          width={720}
          height={480}
          sizes="(max-width: 768px) 100vw, 23vw"
        />
      </Link>
      <div className="bb-home-card__body">
        <p className="bb-home-card__eyebrow">{gallery.photos.length} ছবি</p>
        <h3 className="bb-home-card__title">
          <Link href={`/photo/${gallery.id}`}>{gallery.title}</Link>
        </h3>
      </div>
    </article>
  )
}

function RankedList({ title, articles }: { title: string; articles: Article[] }) {
  return (
    <section className="bb-home-ranked" data-bb-reveal>
      <SectionHeader title={title} href="/latest" />
      <ol className="bb-home-ranked__list">
        {articles.map((article) => (
          <li key={article.id} className="bb-home-ranked__item">
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
            <p>{article.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function SplitSection({
  title,
  href,
  articles,
  categoryMap,
  textRail = false,
}: {
  title: string
  href: string
  articles: Article[]
  categoryMap: Map<string, string>
  textRail?: boolean
}) {
  const [lead, ...rest] = articles

  if (!lead) {
    return null
  }

  const sideStories = rest.slice(0, textRail ? 4 : 3)

  return (
    <section className="bb-home-band bb-home-band--split" data-bb-reveal>
      <SectionHeader title={title} href={href} />
      <div className="bb-home-band__split">
        <LeadStoryCard article={lead} categoryMap={categoryMap} />
        <div className={`bb-home-band__rail ${textRail ? 'bb-home-band__rail--text' : ''}`}>
          {sideStories.map((article, index) =>
            textRail ? (
              <TextStoryCard key={article.id} article={article} categoryMap={categoryMap} prominent={index === 0} />
            ) : (
              <SplitStoryCard
                key={article.id}
                article={article}
                categoryMap={categoryMap}
                mediaPosition={index % 2 === 0 ? 'right' : 'left'}
                compact={index > 0}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}

function OpinionBand({ articles, categoryMap }: { articles: Article[]; categoryMap: Map<string, string> }) {
  const [lead, ...rest] = articles

  if (!lead) {
    return null
  }

  return (
    <section className="bb-home-band bb-home-band--opinion" data-bb-reveal>
      <SectionHeader title="মতামত" href="/opinion" />
      <div className="bb-home-band__opinion">
        <TextStoryCard article={lead} categoryMap={categoryMap} prominent />
        <div className="bb-home-band__opinion-side">
          {rest.slice(0, 3).map((article) => (
            <SplitStoryCard key={article.id} article={article} categoryMap={categoryMap} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoBand({ videos }: { videos: Video[] }) {
  return (
    <section className="bb-home-band bb-home-band--video" data-bb-reveal>
      <SectionHeader title="ভিডিও" href="/video" />
      <div className="bb-home-band__video-grid">
        <div className="bb-home-band__video-lead">
          {videos[0] ? <VideoCard video={videos[0]} /> : null}
        </div>
        <div className="bb-home-band__video-side">
          {videos.slice(1, 5).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PhotoBand({ galleries }: { galleries: Gallery[] }) {
  return (
    <section className="bb-home-band bb-home-band--photo" data-bb-reveal>
      <SectionHeader title="ছবি" href="/photo" />
      <div className="bb-home-band__photo-grid">
        {galleries.slice(0, 4).map((gallery) => (
          <GalleryCard key={gallery.id} gallery={gallery} />
        ))}
      </div>
    </section>
  )
}

function StaticRailNote() {
  return (
    <section className="bb-home-static-note" data-bb-reveal>
      <h2>আজকের আয়োজন</h2>
      <p>ই-পেপার ও ইংরেজি সংস্করণ আপাতত স্থির অবস্থায় রাখা হয়েছে।</p>
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
  const storyStripArticles = latestArticles.slice(5, 9)
  const momentArticles = latestArticles.slice(9, 18)

  if (!lead) {
    return null
  }

  return (
    <div className="bb-home bb-home--inspiration">
      <HomeMotion />

      <section className="bb-home-hero" aria-label="প্রধান সংবাদ">
        <LeadStoryCard article={lead} categoryMap={categoryMap} />
        <aside className="bb-home-hero__rail" aria-label="সাম্প্রতিক সংবাদ">
          {heroRailArticles.slice(0, 4).map((article, index) =>
            index === 0 ? (
              <SplitStoryCard key={article.id} article={article} categoryMap={categoryMap} />
            ) : (
              <TextStoryCard key={article.id} article={article} categoryMap={categoryMap} prominent={index === 1} />
            )
          )}
        </aside>
      </section>

      <section className="bb-home-strip" aria-label="বাছাই সংবাদ">
        {storyStripArticles.map((article) => (
          <StackStoryCard key={article.id} article={article} categoryMap={categoryMap} />
        ))}
      </section>

      <SplitSection title="এই মুহূর্তে" href="/latest" articles={momentArticles} categoryMap={categoryMap} />
      <SplitSection title="বাংলাদেশ" href="/bangladesh" articles={bangladeshArticles.slice(0, 5)} categoryMap={categoryMap} />
      <SplitSection title="রাজনীতি" href="/politics" articles={politicsArticles.slice(0, 5)} categoryMap={categoryMap} textRail />
      <SplitSection title="বিশ্ব" href="/world" articles={worldArticles.slice(0, 5)} categoryMap={categoryMap} />
      <SplitSection title="বাণিজ্য" href="/business" articles={businessArticles.slice(0, 5)} categoryMap={categoryMap} textRail />
      <OpinionBand articles={opinionArticles.slice(0, 4)} categoryMap={categoryMap} />
      <SplitSection title="খেলা" href="/sports" articles={sportsArticles.slice(0, 5)} categoryMap={categoryMap} />
      <SplitSection title="বিনোদন" href="/entertainment" articles={entertainmentArticles.slice(0, 5)} categoryMap={categoryMap} textRail />
      <VideoBand videos={videos} />
      <PhotoBand galleries={galleries} />
      <SplitSection title="চাকরি" href="/jobs" articles={jobsArticles.slice(0, 5)} categoryMap={categoryMap} />
      <SplitSection title="জীবনযাপন" href="/lifestyle" articles={lifestyleArticles.slice(0, 5)} categoryMap={categoryMap} textRail />

      <section className="bb-home-band" data-bb-reveal>
        <RankedList title="সর্বাধিক পঠিত" articles={mostRead.slice(0, 8)} />
        <StaticRailNote />
      </section>
    </div>
  )
}
