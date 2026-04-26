import Link from 'next/link'
import type { Article } from '@/lib/types'
import { ArticleCard } from '@/components/ui/Card'

export function NewsGrid({
  title,
  articles,
  viewAllLink,
}: {
  title: string
  articles: Article[]
  viewAllLink: string
}) {
  return (
    <section className="bb-section">
      <div className="bb-section__header">
        <h2>{title}</h2>
        <Link href={viewAllLink}>সব দেখুন</Link>
      </div>
      <div className="bb-grid bb-grid--three">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
