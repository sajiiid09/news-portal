'use client'

import { useUIStore } from '@/store'

export function MobileMenuToggle() {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore()

  return (
    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open mobile menu">
      ☰
    </button>
  )
}
