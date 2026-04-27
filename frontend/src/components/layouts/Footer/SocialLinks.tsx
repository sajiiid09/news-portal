import Link from 'next/link'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'YouTube', href: 'https://www.youtube.com' },
  { label: 'X', href: 'https://twitter.com' },
]

export function SocialLinks() {
  return (
    <nav className="bb-footer-social" aria-label="সামাজিক যোগাযোগ">
      {socialLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
