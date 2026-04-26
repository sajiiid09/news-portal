import type { Article } from '@/lib/types'
import Link from 'next/link'
import { ArticleCard } from '@/components/ui/Card'

export function OpinionSection({ articles = [] }: { articles?: Article[] }) {
  return (
    <section className="bb-section bb-opinion">
      <div className="bb-section__header">
        <h2>মতামত</h2>
        <Link href="/opinion">সব কলাম</Link>
      </div>
      <div className="bb-grid bb-grid--two">
        {articles.length ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p>নতুন মতামত শীঘ্রই আসছে।</p>
        )}
      </div>
    </section>
  )
}
