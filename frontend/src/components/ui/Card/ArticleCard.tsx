import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/lib/types'
import { formatBanglaDate } from '@/lib/utils'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="bb-card">
      <Link href={`/article/${article.slug}`} className="bb-card-media-link">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="bb-card-media"
        />
      </Link>
      <p className="bb-meta">{article.categoryId}</p>
      <h3>
        <Link href={`/article/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="bb-card__summary">{article.summary}</p>
      <p className="bb-meta">{formatBanglaDate(article.publishedAt)}</p>
    </article>
  )
}
