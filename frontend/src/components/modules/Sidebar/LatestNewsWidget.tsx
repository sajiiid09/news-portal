import Link from 'next/link'
import type { Article } from '@/lib/types'

export function LatestNewsWidget({ articles }: { articles: Article[] }) {
  return (
    <section className="bb-widget">
      <h3>সর্বশেষ খবর</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
