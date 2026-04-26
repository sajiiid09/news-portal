import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ড্যাশবোর্ড',
  description: 'প্রোফাইল, বুকমার্ক এবং মন্তব্য ব্যবস্থাপনা।',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
