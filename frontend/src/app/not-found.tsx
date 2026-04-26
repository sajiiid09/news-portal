import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bb-container">
      <h1>পৃষ্ঠাটি খুঁজে পাওয়া যায়নি</h1>
      <p>আপনার কাঙ্ক্ষিত পেজটি পাওয়া যায়নি।</p>
      <Link href="/">হোমপেজে ফিরে যান</Link>
    </div>
  )
}
