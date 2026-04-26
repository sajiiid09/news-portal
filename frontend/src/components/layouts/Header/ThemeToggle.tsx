'use client'

import { useUIStore } from '@/store'

export function ThemeToggle() {
  const { theme, toggleTheme } = useUIStore()

  return (
    <button
      className="bb-icon-button"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'ডার্ক মোড চালু করুন' : 'লাইট মোড চালু করুন'}
    >
      <span aria-hidden="true">{theme === 'light' ? '◐' : '○'}</span>
    </button>
  )
}
