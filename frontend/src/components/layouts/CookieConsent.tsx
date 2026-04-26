'use client'

import { useUIStore } from '@/store'
import Link from 'next/link'

export function CookieConsent() {
  const { cookieConsent, acceptCookies } = useUIStore()

  if (cookieConsent) {
    return null
  }

  return (
    <div className="bb-cookie-banner">
      <p>By using this site, you agree to our Privacy Policy.</p>
      <div>
        <button onClick={acceptCookies}>OK</button>
        <button>Settings</button>
        <Link href="/privacy">Learn More</Link>
      </div>
    </div>
  )
}
