'use client'

import Link from 'next/link'
import { useUserStore } from '@/store'

export function AuthEntry() {
  const { user, isAuthenticated } = useUserStore()

  if (!isAuthenticated) {
    return (
      <Link href="/login" className="bb-auth-entry">
        লগইন
      </Link>
    )
  }

  return (
    <Link href="/dashboard" className="bb-auth-entry">
      {user?.name || 'প্রোফাইল'}
    </Link>
  )
}
