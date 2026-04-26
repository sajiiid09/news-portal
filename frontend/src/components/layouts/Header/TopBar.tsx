import Link from 'next/link'
import { MobileMenuToggle } from './MobileMenuToggle'
import { SearchLauncher } from './SearchLauncher'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import { AuthEntry } from './AuthEntry'
import { BanglaDate } from './BanglaDate'

export function TopBar() {
  return (
    <div className="bb-topbar">
      <div className="bb-topbar__left">
        <MobileMenuToggle />
        <BanglaDate />
      </div>
      <div className="bb-topbar__right">
        <Link href="/epaper" className="bb-static-utility" aria-label="ই-পেপার স্থির সংস্করণ">
          ই-পেপার
        </Link>
        <LanguageToggle />
        <ThemeToggle />
        <SearchLauncher />
        <AuthEntry />
      </div>
    </div>
  )
}
