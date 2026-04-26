import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ব্যবহারের শর্তাবলী',
  description: 'বর্তমান বাংলা ওয়েবসাইট ব্যবহারের শর্তাবলী।',
}

export default function TermsPage() {
  return (
    <div className="bb-container bb-section">
      <h1>ব্যবহারের শর্তাবলী</h1>
      <p>এই ওয়েবসাইট ব্যবহারে শর্তাবলী প্রযোজ্য।</p>
    </div>
  )
}
