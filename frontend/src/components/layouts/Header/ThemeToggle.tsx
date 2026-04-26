'use client'

import { useUIStore } from '@/store'

export function ThemeToggle() {
  const { theme, toggleTheme } = useUIStore()

  return <button onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button>
}
