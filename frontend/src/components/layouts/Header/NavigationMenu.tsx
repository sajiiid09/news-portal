import Link from 'next/link'
import { navigation } from '@/config'
import { subCategories } from '@/lib/data/categories/subcategories'

export function NavigationMenu() {
  const grouped = subCategories.reduce<Record<string, typeof subCategories>>((acc, item) => {
    acc[item.categoryId] = [...(acc[item.categoryId] || []), item]
    return acc
  }, {})

  return (
    <nav className="bb-nav" aria-label="Main navigation">
      {navigation.map((item) => (
        <div key={item.href} className="bb-nav-item">
          <Link href={item.href}>{item.label}</Link>
          {grouped[item.href.replace('/', '')]?.length ? (
            <div className="bb-nav-dropdown">
              {grouped[item.href.replace('/', '')].map((sub) => (
                <Link key={sub.id} href={`${item.href}/${sub.slug}`}>
                  {sub.name}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  )
}
