import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'বিজ্ঞাপন',
  description: 'বর্তমান বাংলায় বিজ্ঞাপন সংক্রান্ত তথ্য।',
}

export default function AdvertisePage() {
  return (
    <div className="bb-container bb-section">
      <h1>বিজ্ঞাপন</h1>
      <p>রেট কার্ড এবং মিডিয়া কিটের জন্য আমাদের সাথে যোগাযোগ করুন।</p>
    </div>
  )
}
