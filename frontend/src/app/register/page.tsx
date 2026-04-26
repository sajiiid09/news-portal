'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks'

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="bb-container bb-section">
      <h1>নিবন্ধন</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault()

          await register({
            id: crypto.randomUUID(),
            name,
            email,
            password,
            role: 'reader',
          })

          router.push('/dashboard')
        }}
      >
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="নাম" />
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <button type="submit">নিবন্ধন</button>
      </form>
    </div>
  )
}
