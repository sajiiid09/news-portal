'use client'

import { FormEvent, useState } from 'react'
import { useUserStore } from '@/store'

export default function DashboardProfilePage() {
  const { user, updateUser } = useUserStore()
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [newsletter, setNewsletter] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [message, setMessage] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateUser({ name, email })
    setMessage('প্রোফাইল আপডেট সফল হয়েছে।')
  }

  return (
    <div className="bb-container bb-section">
      <h1>প্রোফাইল</h1>
      <form className="bb-comment-form" onSubmit={onSubmit}>
        <label htmlFor="profile-name">নাম</label>
        <input
          id="profile-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="আপনার নাম"
        />

        <label htmlFor="profile-email">ইমেইল</label>
        <input
          id="profile-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="আপনার ইমেইল"
        />

        <label>
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(event) => setNewsletter(event.target.checked)}
          />{' '}
          নিউজলেটার সাবস্ক্রিপশন
        </label>

        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(event) => setNotifications(event.target.checked)}
          />{' '}
          ব্রেকিং নিউজ নোটিফিকেশন
        </label>

        <button type="submit">সেভ করুন</button>
      </form>

      {message ? <p className="bb-meta">{message}</p> : null}
      <p className="bb-meta">বর্তমান ব্যবহারকারী: {user?.name || 'Guest'} ({user?.email || '-'})</p>
    </div>
  )
}
