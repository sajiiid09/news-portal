import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ড্যাশবোর্ড - প্রোফাইল',
  description: 'আপনার প্রোফাইল এবং পছন্দসমূহ আপডেট করুন।',
}

export default function DashboardProfileLayout({ children }: { children: React.ReactNode }) {
  return children
}
