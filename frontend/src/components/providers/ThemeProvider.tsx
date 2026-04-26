'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useUIStore } from '@/store'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useUIStore()

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
  }, [theme])

  return <>{children}</>
}
