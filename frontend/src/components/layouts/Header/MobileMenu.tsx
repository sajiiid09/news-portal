'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { navigation } from '@/config'
import { useUIStore } from '@/store'
import { subCategories } from '@/lib/data/categories/subcategories'
import { ThemeToggle } from './ThemeToggle'

export function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const grouped = useMemo(
    () =>
      subCategories.reduce<Record<string, typeof subCategories>>((acc, item) => {
        acc[item.categoryId] = [...(acc[item.categoryId] || []), item]
        return acc
      }, {}),
    []
  )

  if (!mobileMenuOpen) {
    return null
  }

  return (
    <>
      <div className="bb-mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />
      <aside className="bb-mobile-menu">
        <div className="bb-section__header">
          <h3>মেনু</h3>
          <button onClick={() => setMobileMenuOpen(false)} aria-label="Close mobile menu">
            Close
          </button>
        </div>

        <input placeholder="মেনুতে সার্চ করুন" />

        {navigation.map((item) => {
          const key = item.href.replace('/', '')
          const hasSubs = !!grouped[key]?.length

          return (
            <div key={item.href} className="bb-mobile-accordion-item">
              <div className="bb-mobile-accordion-header">
                <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
                {hasSubs ? (
                  <button
                    onClick={() =>
                      setOpenSections((state) => ({ ...state, [key]: !state[key] }))
                    }
                  >
                    {openSections[key] ? '-' : '+'}
                  </button>
                ) : null}
              </div>
              {hasSubs && openSections[key] ? (
                <div className="bb-mobile-accordion-content">
                  {grouped[key].map((sub) => (
                    <Link
                      key={sub.id}
                      href={`${item.href}/${sub.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          )
        })}

        <div className="bb-mobile-menu-footer">
          <ThemeToggle />
          <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
            লগইন
          </Link>
        </div>
      </aside>
    </>
  )
}
