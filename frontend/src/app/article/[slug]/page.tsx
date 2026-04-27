import type { Metadata } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { DataService } from '@/lib/data'
import { SITE_CONFIG } from '@/lib/constants/siteConfig'
import { Container } from '@/components/layouts/Container'
import { formatBanglaDate } from '@/lib/utils'
import { CommentSection } from '@/components/modules/Comments'
import { ArticleReadingProgress } from '@/components/modules/ArticleReadingProgress'
import { ArticleShare } from '@/components/modules/ArticleShare'
import { ArticleReactions } from '@/components/modules/ArticleReactions'
import { ArticleCard } from '@/components/ui/Card/ArticleCard'
import { AdCreative } from '@/components/modules/Ads'

const BASE_URL = 'https://your-domain.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await DataService.articles.getBySlug(slug)

  if (!article) {
    return {
      title: 'সংবাদ পাওয়া যায়নি',
    }
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/article/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      url: `${BASE_URL}/article/${article.slug}`,
      images: [{ url: article.image, alt: article.title }],
      siteName: SITE_CONFIG.siteName,
      locale: 'bn_BD',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [article.image],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await DataService.articles.getBySlug(slug)

  if (!article) {
    notFound()
  }

  const categories = await DataService.categories.getAll()
  const subCategories = await DataService.subCategories.getByCategory(article.categoryId)
  const category = categories.find((item) => item.id === article.categoryId)
  const subCategory = subCategories.find((item) => item.id === article.subCategoryId)

  const related = (await DataService.articles.getByCategory(article.categoryId))
    .filter((item) => item.id !== article.id)
    .slice(0, 3)

  const author = await DataService.authors.getAll().then((authors) =>
    authors.find((item) => item.id === article.authorId)
  )
  const readingTime = Math.max(1, Math.ceil(article.body.split(' ').length / 200))
  const articleUrl = `${BASE_URL}/article/${article.slug}`
  const bodyParagraphs = article.body
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    image: [article.image],
    mainEntityOfPage: articleUrl,
    author: {
      '@type': 'Person',
      name: author?.name || 'স্টাফ রিপোর্টার',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.ico`,
      },
    },
  }

  return (
    <Container>
      <ArticleReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bb-article-layout">
        <article className="bb-article">
          <nav className="bb-article-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">প্রচ্ছদ</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${category?.slug || article.categoryId}`}>
              {category?.name || article.categoryId}
            </Link>
            {subCategory ? (
              <>
                <span aria-hidden="true">/</span>
                <Link href={`/${category?.slug || article.categoryId}/${subCategory.slug}`}>
                  {subCategory.name}
                </Link>
              </>
            ) : null}
          </nav>

          <header className="bb-article-header">
            <p className="bb-meta bb-article-section">
              <Link href={`/${category?.slug || article.categoryId}`}>
                {category?.name || article.categoryId}
              </Link>
            </p>
            <h1>{article.title}</h1>
            <p className="bb-article-lead">{article.summary}</p>
            <div className="bb-article-meta">
              <div className="bb-article-byline">
                <span className="bb-article-avatar" aria-hidden="true">
                  {(author?.name || 'স্টাফ রিপোর্টার').slice(0, 1)}
                </span>
                <div>
                  <p className="bb-article-author">{author?.name || 'স্টাফ রিপোর্টার'}</p>
                  <p className="bb-meta">{author?.designation || 'Reporter'}</p>
                </div>
              </div>
              <div className="bb-article-meta__time">
                <p className="bb-meta">প্রকাশিত: {formatBanglaDate(article.publishedAt)}</p>
                {article.updatedAt ? (
                  <p className="bb-meta">সর্বশেষ আপডেট: {formatBanglaDate(article.updatedAt)}</p>
                ) : null}
                <p className="bb-meta">পড়তে সময়: {readingTime} মিনিট</p>
              </div>
            </div>
          </header>

          {article.image ? (
            <figure className="bb-article-hero">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, 75vw"
                priority
              />
              <figcaption className="bb-meta">
                {article.imageCaption || article.title}
                {article.imageCredit ? ` • ${article.imageCredit}` : ''}
              </figcaption>
            </figure>
          ) : null}

          <div className="bb-article-body">
            {(bodyParagraphs.length ? bodyParagraphs : [article.body]).map((paragraph, index) => (
              <Fragment key={`${article.id}-p-${index}`}>
                <p>{paragraph}</p>
                {index === 2 ? (
                  <div className="bb-card bb-article-inline-ad" aria-label="Advertisement">
                    <p className="bb-meta">বিজ্ঞাপন</p>
                    <AdCreative variant="inline" />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>

          <div className="bb-tag-list bb-article-tags">
            {article.tags.map((tag) => (
              <Link key={tag} href={`/tag/${tag}`}>
                #{tag}
              </Link>
            ))}
          </div>

          <div className="bb-article-actions">
            <ArticleShare title={article.title} url={articleUrl} />
            <ArticleReactions articleId={article.id} />
          </div>
        </article>

        <aside className="bb-article-rail">
          <div className="bb-card bb-article-ad">
            <p className="bb-meta">বিজ্ঞাপন</p>
            <AdCreative variant="sidebar" />
          </div>
          <section className="bb-card bb-article-author-card">
            <h3>লেখক পরিচিতি</h3>
            <p>{author?.name || 'স্টাফ রিপোর্টার'}</p>
            <p className="bb-meta">{author?.designation || 'Reporter'}</p>
            {author ? <Link href={`/author/${author.slug}`}>লেখকের অন্যান্য লেখা</Link> : null}
          </section>
        </aside>
      </div>

      <section className="bb-section bb-article-related">
        <h2>সম্পর্কিত খবর</h2>
        <div className="bb-grid bb-grid--three">
          {related.map((item) => (
            <ArticleCard key={item.id} article={item} />
          ))}
        </div>
      </section>

      <CommentSection articleId={article.id} />
    </Container>
  )
}
