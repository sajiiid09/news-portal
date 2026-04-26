import Link from 'next/link'
import { navigation } from '@/config'
import { subCategories } from '@/lib/data/categories/subcategories'

export function NavigationMenu() {
  const grouped = subCategories.reduce<Record<string, typeof subCategories>>((acc, item) => {
    acc[item.categoryId] = [...(acc[item.categoryId] || []), item]
    return acc
  }, {})

  return (
    <div className="bb-nav-shell">
      <nav className="bb-nav" aria-label="প্রধান নেভিগেশন">
        {navigation.map((item) => {
          const key = item.href.replace('/', '')
          const children = grouped[key] || []

          return (
            <div key={item.href} className="bb-nav-item">
              <Link href={item.href}>{item.label}</Link>
              {children.length ? (
                <div className="bb-nav-dropdown" aria-label={`${item.label} উপবিভাগ`}>
                  {children.map((sub) => (
                    <Link key={sub.id} href={`${item.href}/${sub.slug}`}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
