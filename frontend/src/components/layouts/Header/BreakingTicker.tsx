import Link from 'next/link'
import type { Article } from '@/lib/types'

export function BreakingTicker({ items }: { items: Article[] }) {
  return (
    <section className="bb-ticker" aria-label="Breaking news">
      <span className="bb-ticker__label">ব্রেকিং নিউজ</span>
      <div className="bb-ticker__content">
        {items.map((item) => (
          <Link key={item.id} href={`/article/${item.slug}`}>
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
