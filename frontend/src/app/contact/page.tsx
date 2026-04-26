'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bb-container bb-section">
      <h1>যোগাযোগ</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
        }}
      >
        <input placeholder="নাম" required />
        <input placeholder="ইমেইল" type="email" required />
        <input placeholder="বিষয়" required />
        <textarea placeholder="বার্তা" rows={5} required />
        <button type="submit">পাঠান</button>
      </form>
      {submitted ? <p>বার্তা পাঠানো হয়েছে।</p> : null}
    </div>
  )
}
