import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'গোপনীয়তা নীতি',
  description: 'বর্তমান বাংলার গোপনীয়তা নীতি।',
}

export default function PrivacyPage() {
  return (
    <div className="bb-container bb-section">
      <h1>গোপনীয়তা নীতি</h1>
      <p>আমরা ব্যবহারকারীর তথ্য সুরক্ষিত রাখি এবং নীতিমালা অনুযায়ী ব্যবহার করি।</p>
    </div>
  )
}
