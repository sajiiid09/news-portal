import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'সার্চ',
  description: 'বর্তমান বাংলার সংবাদ খুঁজুন।',
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
