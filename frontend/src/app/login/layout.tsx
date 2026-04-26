import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'লগইন',
  description: 'বর্তমান বাংলা অ্যাকাউন্টে লগইন করুন।',
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
