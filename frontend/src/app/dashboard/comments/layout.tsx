import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ড্যাশবোর্ড - মন্তব্য',
  description: 'আপনার মন্তব্য ইতিহাস দেখুন।',
}

export default function DashboardCommentsLayout({ children }: { children: React.ReactNode }) {
  return children
}
