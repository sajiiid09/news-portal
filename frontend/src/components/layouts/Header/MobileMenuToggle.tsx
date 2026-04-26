'use client'

import { useUIStore } from '@/store'

export function MobileMenuToggle() {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore()

  return (
    <button
      className="bb-icon-button bb-mobile-menu-toggle"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label={mobileMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
      aria-expanded={mobileMenuOpen}
    >
      <span aria-hidden="true">☰</span>
    </button>
  )
}
