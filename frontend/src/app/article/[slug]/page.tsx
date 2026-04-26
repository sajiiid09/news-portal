import type { Metadata } from 'next'
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

  const related = (await DataService.articles.getByCategory(article.categoryId))
    .filter((item) => item.id !== article.id)
    .slice(0, 3)

  const author = await DataService.authors.getAll().then((authors) =>
    authors.find((item) => item.id === article.authorId)
  )
  const readingTime = Math.max(1, Math.ceil(article.body.split(' ').length / 200))
  const articleUrl = `${BASE_URL}/article/${article.slug}`
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
      <article className="bb-section">
        <p className="bb-meta">
          <Link href={`/${article.categoryId}`}>{article.categoryId}</Link>
        </p>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
        <p className="bb-meta">প্রকাশিত: {formatBanglaDate(article.publishedAt)} • {readingTime} মিনিট পড়া</p>
        {article.updatedAt ? <p className="bb-meta">সর্বশেষ আপডেট: {formatBanglaDate(article.updatedAt)}</p> : null}
        {article.image ? (
          <figure className="bb-card">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 75vw"
            />
            <figcaption className="bb-meta">
              {article.imageCaption || article.title}
              {article.imageCredit ? ` • ${article.imageCredit}` : ''}
            </figcaption>
          </figure>
        ) : null}
        <div className="bb-section">
          <p>{article.body}</p>
        </div>
        <div className="bb-card">
          <p className="bb-meta">বিজ্ঞাপন</p>
          <div className="bb-ad-slot">300x250</div>
        </div>

        <section className="bb-section bb-card">
          <h3>লেখক পরিচিতি</h3>
          <p>{author?.name || 'স্টাফ রিপোর্টার'}</p>
          <p className="bb-meta">{author?.designation || 'Reporter'}</p>
          {author ? <Link href={`/author/${author.slug}`}>লেখকের অন্যান্য লেখা</Link> : null}
        </section>

        <div className="bb-tag-list">
          {article.tags.map((tag) => (
            <Link key={tag} href={`/tag/${tag}`}>
              #{tag}
            </Link>
          ))}
        </div>
        <ArticleShare title={article.title} url={articleUrl} />
        <ArticleReactions articleId={article.id} />
      </article>

      <CommentSection articleId={article.id} />

      <section className="bb-section">
        <h2>সম্পর্কিত খবর</h2>
        <div className="bb-grid bb-grid--three">
          {related.map((item) => (
            <article key={item.id} className="bb-card">
              <Link href={`/article/${item.slug}`}>{item.title}</Link>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}
