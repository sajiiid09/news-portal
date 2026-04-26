import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'আমাদের সম্পর্কে',
  description: 'বর্তমান বাংলা সম্পর্কে জানুন।',
}

export default function AboutPage() {
  return (
    <div className="bb-container bb-section">
      <h1>আমাদের সম্পর্কে</h1>
      <p>বর্তমান বাংলা একটি আধুনিক বাংলা নিউজ প্ল্যাটফর্ম।</p>
    </div>
  )
}
