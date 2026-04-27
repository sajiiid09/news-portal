import Link from 'next/link'
import { navigation } from '@/config'

const utilityLinks = [
  { label: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'যোগাযোগ', href: '/contact' },
  { label: 'গোপনীয়তা নীতি', href: '/privacy' },
  { label: 'ব্যবহারের শর্তাবলী', href: '/terms' },
  { label: 'বিজ্ঞাপন', href: '/advertise' },
]

export function FooterLinks() {
  return (
    <>
      <nav className="bb-footer-links" aria-label="ফুটার বিভাগ">
        <h2>বিভাগ</h2>
        <div>
          {navigation.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <nav className="bb-footer-links" aria-label="সহায়ক লিংক">
        <h2>সহায়তা</h2>
        <div>
          {utilityLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
