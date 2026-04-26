import Link from 'next/link'
import { MobileMenuToggle } from './MobileMenuToggle'
import { SearchLauncher } from './SearchLauncher'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import { AuthEntry } from './AuthEntry'

export function TopBar() {
  return (
    <div className="bb-topbar">
      <div className="bb-topbar__left">
        <MobileMenuToggle />
        <span>শুক্রবার, ২৪ এপ্রিল ২০২৬, ঢাকা</span>
      </div>
      <div className="bb-topbar__right">
        <Link href="/epaper">ই-পেপার</Link>
        <LanguageToggle />
        <ThemeToggle />
        <SearchLauncher />
        <AuthEntry />
      </div>
    </div>
  )
}
