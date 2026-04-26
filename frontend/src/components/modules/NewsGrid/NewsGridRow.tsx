import type { Article } from '@/lib/types'
import { ArticleCard } from '@/components/ui/Card'

export function NewsGridRow({ articles }: { articles: Article[] }) {
  return (
    <div className="bb-grid bb-grid--three">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
