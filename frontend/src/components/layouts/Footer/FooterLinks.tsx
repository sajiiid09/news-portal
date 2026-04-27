import Link from 'next/link'
const utilityLinks = [
  { label: 'সর্বশেষ', href: '/latest' },
  { label: 'বাংলাদেশ', href: '/bangladesh' },
  { label: 'বাণিজ্য', href: '/business' },
  { label: 'ভিডিও', href: '/video' },
  { label: 'যোগাযোগ', href: '/contact' },
]

export function FooterLinks() {
  return (
    <nav className="bb-footer-links" aria-label="ফুটার লিংক">
      <h2>দ্রুত লিংক</h2>
      <div>
        {utilityLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
