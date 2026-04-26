'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks'

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('demo@bortomanbangla.com')
  const [password, setPassword] = useState('password123')
  const [error, setError] = useState('')

  return (
    <div className="bb-container bb-section">
      <h1>লগইন</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          setError('')
          const user = await login({ email, password })

          if (!user) {
            setError('ইমেইল বা পাসওয়ার্ড সঠিক নয়')
            return
          }

          router.push('/dashboard')
        }}
      >
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'লোড হচ্ছে...' : 'লগইন'}
        </button>
      </form>
      {error ? <p>{error}</p> : null}
    </div>
  )
}
