import { AdCreative } from '@/components/modules/Ads'

export function AdvertisementWidget() {
  return (
    <section className="bb-widget">
      <h3>বিজ্ঞাপন</h3>
      <p className="bb-meta">Sponsored</p>
      <AdCreative variant="sidebar" />
    </section>
  )
}
