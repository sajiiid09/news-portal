'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="bb-container">
      <h1>একটি সমস্যা হয়েছে</h1>
      <button onClick={reset}>পুনরায় চেষ্টা করুন</button>
    </div>
  )
}
