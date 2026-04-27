import { adSlots } from '@/config/ads'

export function AdvertisementWidget() {
  return (
    <section className="bb-widget">
      <h3>বিজ্ঞাপন</h3>
      <p className="bb-meta">Sponsored</p>
      <div className="bb-ad-slot bb-ad-slot--sidebar" role="img" aria-label="Advertisement slot">
        {adSlots.inArticle}
      </div>
    </section>
  )
}
