import Image from 'next/image'
import Link from 'next/link'
import type { Article, DseTickerItem, SectionBlock, SectionPageConfig, SubCategory } from '@/lib/types'
import { formatBanglaDate } from '@/lib/utils'
import { AdCreative } from '@/components/modules/Ads'
import { CategoryFeaturedSlider } from './CategoryFeaturedSlider'
import { CategorySubNav } from './CategorySubNav'
import { DseTickerWidget } from './DseTickerWidget'

interface EditorialSectionPageProps {
  page: SectionPageConfig
  articles: Article[]
  dseItems: DseTickerItem[]
  dseEndpoint: string
  subCategories?: SubCategory[]
}

function makeStoryMap(articles: Article[]) {
  return new Map(articles.map((article) => [article.id, article]))
}

function storiesForIds(storyMap: Map<string, Article>, ids: string[] = []) {
  return ids.flatMap((id) => {
    const story = storyMap.get(id)
    return story ? [story] : []
  })
}

function resolveFeaturedSlider(page: SectionPageConfig, storyMap: Map<string, Article>) {
  const selectedBlock = page.sections.find((block) => {
    if (block.type !== 'selected-grid' && block.type !== 'video-grid') {
      return false
    }

    return storiesForIds(storyMap, block.storyIds).length > 0
  })

  if (selectedBlock) {
    return {
      consumedBlockId: selectedBlock.id,
      stories: storiesForIds(storyMap, selectedBlock.storyIds),
      title: selectedBlock.title || 'নির্বাচিত',
    }
  }

  const leadStoryIds = new Set(
    page.sections.find((block) => block.type === 'lead-grid')?.storyIds || []
  )
  const storyListBlock = page.sections.find((block) => block.type === 'story-list')
  const storyListStories = storiesForIds(storyMap, storyListBlock?.storyIds).filter(
    (story) => !leadStoryIds.has(story.id)
  )

  if (storyListStories.length) {
    return {
      stories: storyListStories,
      title: 'নির্বাচিত',
    }
  }

  const leadBlock = page.sections.find((block) => block.type === 'lead-grid')
  const leadStories = storiesForIds(storyMap, leadBlock?.storyIds)

  if (leadStories.length) {
    return {
      stories: leadStories,
      title: 'নির্বাচিত',
    }
  }

  return null
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="bb-section-page__heading">
      <h2>{title}</h2>
    </div>
  )
}

function StoryCard({
  article,
  variant = 'standard',
  priority = false,
}: {
  article: Article
  variant?: 'lead' | 'standard' | 'compact' | 'text' | 'visual'
  priority?: boolean
}) {
  const isText = variant === 'text'
  const imageSizes =
    variant === 'lead'
      ? '(max-width: 768px) 100vw, (max-width: 1180px) 58vw, 700px'
      : variant === 'compact'
        ? '(max-width: 768px) 112px, 160px'
        : '(max-width: 768px) 100vw, 33vw'

  return (
    <article className={`bb-section-story bb-section-story--${variant}`}>
      {!isText ? (
        <Link href={`/article/${article.slug}`} className="bb-section-story__media">
          <Image
            src={article.image}
            alt={article.title}
            width={variant === 'compact' ? 240 : 800}
            height={variant === 'compact' ? 160 : 450}
            sizes={imageSizes}
            priority={priority}
          />
        </Link>
      ) : null}
      <div className="bb-section-story__body">
        <p className="bb-section-story__meta">{formatBanglaDate(article.publishedAt)}</p>
        <h3>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        {variant === 'lead' || variant === 'standard' ? <p>{article.summary}</p> : null}
      </div>
    </article>
  )
}

function LeadGrid({ title, stories }: { title: string; stories: Article[] }) {
  const [lead, ...rest] = stories

  if (!lead) return null

  return (
    <section className="bb-section-page__block bb-section-page__block--lead" data-bb-reveal>
      <div className="bb-section-lead">
        <StoryCard article={lead} variant="lead" priority />
        <div className="bb-section-lead__side">
          {rest.slice(0, 4).map((article, index) => (
            <StoryCard
              key={article.id}
              article={article}
              variant={index === 0 ? 'compact' : 'text'}
            />
          ))}
        </div>
      </div>
      {rest.length > 4 ? (
        <div className="bb-section-page__below-lead" aria-label={title}>
          {rest.slice(4, 12).map((article) => (
            <StoryCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      ) : null}
    </section>
  )
}

function SelectedGrid({ block, stories }: { block: SectionBlock; stories: Article[] }) {
  if (!stories.length) return null

  return (
    <section className="bb-section-page__block" data-bb-reveal>
      <SectionTitle title={block.title} />
      <div className="bb-section-selected-grid">
        {stories.slice(0, 12).map((article, index) => (
          <StoryCard
            key={article.id}
            article={article}
            variant={index < 3 ? 'standard' : 'compact'}
          />
        ))}
      </div>
    </section>
  )
}

function StoryList({ block, stories }: { block: SectionBlock; stories: Article[] }) {
  if (!stories.length) return null

  return (
    <section className="bb-section-page__block" data-bb-reveal>
      <SectionTitle title={block.title} />
      <div className="bb-section-story-list">
        {stories.map((article) => (
          <StoryCard key={`${block.id}-${article.id}`} article={article} variant="compact" />
        ))}
      </div>
    </section>
  )
}

function VisualStrip({ block, stories }: { block: SectionBlock; stories: Article[] }) {
  if (!stories.length) return null

  return (
    <section className="bb-section-page__block bb-section-page__block--visual" data-bb-reveal>
      <SectionTitle title={block.title} />
      <div className="bb-section-visual-strip">
        {stories.slice(0, 12).map((article) => (
          <StoryCard key={article.id} article={article} variant="visual" />
        ))}
      </div>
    </section>
  )
}

function SubsectionGrid({ block, storyMap }: { block: SectionBlock; storyMap: Map<string, Article> }) {
  if (!block.groups?.length) return null

  return (
    <section className="bb-section-page__block" data-bb-reveal>
      <SectionTitle title={block.title} />
      <div className="bb-section-subsections">
        {block.groups.map((group) => {
          const stories = storiesForIds(storyMap, group.storyIds)

          return (
            <section key={group.id} className="bb-section-subsection">
              <h3>{group.title}</h3>
              <div>
                {stories.slice(0, 6).map((article, index) => (
                  <StoryCard
                    key={article.id}
                    article={article}
                    variant={index === 0 ? 'standard' : 'text'}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}

function AdBlock({ title }: { title: string }) {
  return (
    <section className="bb-section-ad" aria-label={title} data-bb-reveal>
      <AdCreative variant="leaderboard" />
    </section>
  )
}

export function EditorialSectionPage({
  page,
  articles,
  dseItems,
  dseEndpoint,
  subCategories,
}: EditorialSectionPageProps) {
  const storyMap = makeStoryMap(articles)
  const featuredSlider = resolveFeaturedSlider(page, storyMap)

  return (
    <div className={`bb-section-page bb-section-page--${page.template}`}>
      <header className="bb-section-page__masthead">
        <h1>{page.label}</h1>
        <CategorySubNav categorySlug={page.slug} items={subCategories} />
      </header>

      {featuredSlider ? (
        <CategoryFeaturedSlider
          title={featuredSlider.title}
          stories={featuredSlider.stories}
          categoryLabel={page.label}
        />
      ) : null}

      {page.sections.map((block) => {
        if (block.id === featuredSlider?.consumedBlockId) {
          return null
        }

        const stories = storiesForIds(storyMap, block.storyIds)

        if (block.type === 'dse') {
          return <DseTickerWidget key={block.id} fallbackItems={dseItems} endpoint={dseEndpoint} />
        }

        if (block.type === 'ad') {
          return <AdBlock key={block.id} title={block.title} />
        }

        if (block.type === 'lead-grid') {
          return <LeadGrid key={block.id} title={block.title} stories={stories} />
        }

        if (block.type === 'selected-grid' || block.type === 'video-grid') {
          return <SelectedGrid key={block.id} block={block} stories={stories} />
        }

        if (block.type === 'visual-strip') {
          return <VisualStrip key={block.id} block={block} stories={stories} />
        }

        if (block.type === 'subsections' || block.type === 'split') {
          return <SubsectionGrid key={block.id} block={block} storyMap={storyMap} />
        }

        return <StoryList key={block.id} block={block} stories={stories} />
      })}
    </div>
  )
}
