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
      <div
        className="bb-mobile-menu-overlay"
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <aside className="bb-mobile-menu" aria-label="মোবাইল মেনু">
        <div className="bb-mobile-menu__header">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            বর্তমান বাংলা
          </Link>
          <button
            className="bb-icon-button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="মেনু বন্ধ করুন"
          >
            ×
          </button>
        </div>

        <label className="bb-mobile-menu__search">
          <span className="bb-sr-only">মেনুতে সার্চ করুন</span>
          <input placeholder="খুঁজুন..." />
        </label>

        <nav className="bb-mobile-menu__nav" aria-label="মোবাইল প্রধান নেভিগেশন">
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
                      className="bb-mobile-accordion-trigger"
                      onClick={() =>
                        setOpenSections((state) => ({ ...state, [key]: !state[key] }))
                      }
                      aria-expanded={!!openSections[key]}
                      aria-label={`${item.label} উপবিভাগ ${openSections[key] ? 'বন্ধ করুন' : 'খুলুন'}`}
                    >
                      {openSections[key] ? '−' : '+'}
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
        </nav>

        <div className="bb-mobile-menu-footer">
          <div>
            <p>ই-পেপার ও Eng সংস্করণ আপাতত স্থির</p>
            <ThemeToggle />
          </div>
          <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
            লগইন
          </Link>
        </div>
      </aside>
    </>
  )
}
