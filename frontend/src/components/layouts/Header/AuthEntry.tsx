'use client'

import Link from 'next/link'
import { useUserStore } from '@/store'

export function AuthEntry() {
  const { user, isAuthenticated } = useUserStore()

  if (!isAuthenticated) {
    return <Link href="/login">লগইন</Link>
  }

  return <Link href="/dashboard">{user?.name || 'Profile'}</Link>
}
