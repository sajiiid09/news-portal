'use client'

import { useEffect, useState } from 'react'

export function ArticleReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const current = doc.scrollTop
      setProgress(total > 0 ? Math.min(100, (current / total) * 100) : 0)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="bb-reading-progress" style={{ width: `${progress}%` }} />
}
