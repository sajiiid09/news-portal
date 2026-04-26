'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks'

export default function LogoutPage() {
  const router = useRouter()
  const { logout } = useAuth()

  useEffect(() => {
    void logout().finally(() => router.replace('/'))
  }, [logout, router])

  return <div className="bb-container">লগআউট হচ্ছে...</div>
}
