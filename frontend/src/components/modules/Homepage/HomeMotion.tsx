'use client'

import { useEffect } from 'react'

const MOTION_ROOT_CLASS = 'bb-motion-ready'
const REVEAL_SELECTOR = '[data-bb-reveal]'

export function HomeMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    document.documentElement.classList.add(MOTION_ROOT_CLASS)

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      }
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove(MOTION_ROOT_CLASS)
    }
  }, [])

  return null
}
