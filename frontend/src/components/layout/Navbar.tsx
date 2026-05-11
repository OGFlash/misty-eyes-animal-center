import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Heart, PawPrint } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Adopt', href: '/adoptablepets' },
  {
    label: 'Help Us',
    children: [
      { label: 'Ways to Help',       href: '/help-us' },
      { label: 'Volunteer',          href: '/volunteer' },
      { label: 'Foster',             href: '/foster-1' },
      { label: 'Donate',             href: '/donate' },
      { label: 'Wish List',          href: '/wishlist' },
      { label: 'Host a Fundraiser',  href: '/host-a-fundraiser' },
      { label: 'Shop Everyday',      href: '/shop' },
      { label: 'Giving Cards',       href: '/givingcards' },
      { label: 'Corporate Giving',   href: '/copy-of-sponsor-a-suite' },
      { label: 'Naming Opportunities', href: '/namingopportunities' },
      { label: 'Professional Services', href: '/copy-of-donate-1' },
    ],
  },
  {
    label: 'Programs',
    children: [
      { label: 'All Programs',            href: '/programs' },
      { label: 'For Students by Students', href: '/forstudentsbystudents' },
      { label: 'Humane Education',        href: '/humaneeducation' },
      { label: 'Community Outreach',      href: '/communityoutreach' },
      { label: 'JV Kids Club',            href: '/jv' },
    ],
  },
  { label: 'Events',    href: '/events' },
  { label: 'About',     href: '/about-us' },
  {
    label: 'Resources',
    children: [
      { label: 'Resources Hub',    href: '/resources' },
      { label: 'Dog Training',     href: '/dogtraining' },
      { label: 'Lost & Found',     href: '/lost-and-found-pets' },
      { label: 'Puppy Mills',      href: '/puppy-mills' },
      { label: 'Animal Abuse',     href: '/animal-abuse' },
      { label: 'Owner Surrender',  href: '/owner-surrender' },
    ],
  },
]

interface NavItemChild {
  label: string
  href: string
}

interface NavItem {
  label: string
  href?: string
  children?: NavItemChild[]
}

function DropdownMenu({ items }: { items: NavItemChild[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 z-50 mt-1 min-w-[200px] rounded-lg border bg-white shadow-lg py-1"
    >
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              'block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors',
              isActive && 'font-medium text-primary bg-secondary',
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </motion.div>
  )
}

function NavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  if (item.href) {
    return (
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          cn(
            'text-sm font-medium text-foreground hover:text-primary transition-colors',
            isActive && 'text-primary',
          )
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {open && item.children && <DropdownMenu items={item.children} />}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Misty Eyes Animal Center — Home">
          <PawPrint className="h-7 w-7 text-primary" />
          <span className="font-heading font-bold text-lg text-primary leading-tight hidden sm:block">
            Misty Eyes<br className="hidden" />
            <span className="text-xs font-normal text-muted-foreground block leading-none">Animal Center</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/adoptablepets"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            <PawPrint className="h-4 w-4" />
            Adopt
          </Link>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
          >
            <Heart className="h-4 w-4" />
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t bg-white"
          >
            <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((item) =>
                item.href ? (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary',
                        isActive && 'text-primary bg-secondary',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <div key={item.label} className="pt-2">
                    <p className="px-3 pb-1 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                      {item.label}
                    </p>
                    {item.children?.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            'block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary',
                            isActive && 'text-primary bg-secondary',
                          )
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )
              )}
              <div className="flex gap-2 mt-3 px-3">
                <Link
                  to="/adoptablepets"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center rounded-full bg-primary py-2 text-sm font-semibold text-white"
                >
                  Adopt
                </Link>
                <Link
                  to="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center rounded-full bg-amber-500 py-2 text-sm font-semibold text-white"
                >
                  Donate
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
