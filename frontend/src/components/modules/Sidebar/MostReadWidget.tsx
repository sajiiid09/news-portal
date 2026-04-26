import Link from 'next/link'
import type { Article } from '@/lib/types'

export function MostReadWidget({ articles }: { articles: Article[] }) {
  return (
    <section className="bb-widget">
      <h3>সর্বাধিক পঠিত</h3>
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
