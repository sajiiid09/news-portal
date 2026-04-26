'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bb-widget">
      <h3>নিউজলেটার</h3>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="আপনার ইমেইল"
      />
      <Button onClick={() => setSubmitted(true)} fullWidth>
        সাবস্ক্রাইব
      </Button>
      {submitted ? <p className="bb-meta">সাবস্ক্রিপশন সফল হয়েছে।</p> : null}
    </section>
  )
}
