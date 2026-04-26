import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'লগআউট',
  description: 'বর্তমান বাংলা অ্যাকাউন্ট থেকে লগআউট।',
}

export default function LogoutLayout({ children }: { children: React.ReactNode }) {
  return children
}
