import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ড্যাশবোর্ড - বুকমার্ক',
  description: 'সংরক্ষিত সংবাদ তালিকা দেখুন।',
}

export default function DashboardBookmarksLayout({ children }: { children: React.ReactNode }) {
  return children
}
