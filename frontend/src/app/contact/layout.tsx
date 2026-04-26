import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'যোগাযোগ',
  description: 'বর্তমান বাংলার সাথে যোগাযোগ করুন।',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
