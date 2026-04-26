'use client'

export default function ArticleError({ reset }: { reset: () => void }) {
  return (
    <div className="bb-container">
      <h1>আর্টিকেল লোড করা যায়নি</h1>
      <button onClick={reset}>আবার চেষ্টা করুন</button>
    </div>
  )
}
