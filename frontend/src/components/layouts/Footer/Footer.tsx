import Link from 'next/link'
import { FooterLinks } from './FooterLinks'
import { SocialLinks } from './SocialLinks'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'বর্তমান বাংলা',
  url: 'https://your-domain.com',
  logo: 'https://your-domain.com/favicon.ico',
  sameAs: [
    'https://www.facebook.com',
    'https://twitter.com',
    'https://www.youtube.com',
  ],
}

export function Footer() {
  return (
    <footer className="bb-footer">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="bb-container bb-footer__inner">
        <section className="bb-footer__brand" aria-label="বর্তমান বাংলা">
          <Link href="/" className="bb-footer__logo">
            বর্তমান বাংলা
          </Link>
          <p>
            দ্রুত, নির্ভরযোগ্য ও পরিষ্কার বাংলা সংবাদ অভিজ্ঞতার জন্য তৈরি একটি আধুনিক
            ডিজিটাল নিউজরুম।
          </p>
        </section>
        <FooterLinks />
        <section className="bb-footer__contact">
          <h2>নিউজরুম</h2>
          <p>সংবাদ, ছবি, ভিডিও ও বিজ্ঞাপন সংক্রান্ত যোগাযোগের জন্য আমাদের অফিসিয়াল চ্যানেল ব্যবহার করুন।</p>
          <Link href="/contact">যোগাযোগ করুন</Link>
          <SocialLinks />
        </section>
      </div>
      <div className="bb-container bb-footer__bottom">
        <p>© {new Date().getFullYear()} বর্তমান বাংলা</p>
        <p>ই-পেপার ও ইংরেজি সংস্করণ আপাতত স্থির সংস্করণ।</p>
      </div>
    </footer>
  )
}
