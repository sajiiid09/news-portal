'use client'

import { useState } from 'react'

interface ArticleShareProps {
  title: string
  url: string
}

export function ArticleShare({ title, url }: ArticleShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const [copied, setCopied] = useState(false)

  const links = [
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      label: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="bb-card bb-section bb-share-panel" aria-label="Share article">
      <h3>শেয়ার করুন</h3>
      <div className="bb-share-actions">
        {links.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
        <button onClick={handleCopy} type="button">
          {copied ? 'কপি হয়েছে' : 'লিংক কপি'}
        </button>
      </div>
    </section>
  )
}
