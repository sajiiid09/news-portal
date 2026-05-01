import Link from 'next/link'
import type { SubCategory } from '@/lib/types'

export function CategorySubNav({
  categorySlug,
  items,
}: {
  categorySlug: string
  items?: SubCategory[]
}) {
  if (!items?.length) {
    return null
  }

  return (
    <nav className="bb-category-subnav" aria-label="উপবিভাগ">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/${categorySlug}/${item.slug}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
