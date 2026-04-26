import type { Article } from '@/lib/types'
import { ArticleCard } from '@/components/ui/Card'

export function SearchResults({
  query,
  results,
}: {
  query: string
  results: Article[]
}) {
  if (!query.trim()) {
    return <p className="bb-meta">খুঁজতে একটি কীওয়ার্ড লিখুন।</p>
  }

  if (!results.length) {
    return <p>কোনো ফলাফল পাওয়া যায়নি। বানান পরিবর্তন করে আবার চেষ্টা করুন।</p>
  }

  return (
    <div className="bb-search-results">
      <p className="bb-meta">খুঁজে পাওয়া গেছে &lsquo;{query}&rsquo; এর জন্য {results.length}টি ফলাফল</p>
      <ul>
        {results.map((article) => (
          <li key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  )
}
