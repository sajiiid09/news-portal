import Link from 'next/link'

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

const footerLinks = [
  { label: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'যোগাযোগ', href: '/contact' },
  { label: 'গোপনীয়তা নীতি', href: '/privacy' },
  { label: 'ব্যবহারের শর্তাবলী', href: '/terms' },
  { label: 'বিজ্ঞাপন', href: '/advertise' },
]

export function Footer() {
  return (
    <footer className="bb-footer">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="bb-container bb-footer__inner">
        <p>© {new Date().getFullYear()} বর্তমান বাংলা</p>
        <nav>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
