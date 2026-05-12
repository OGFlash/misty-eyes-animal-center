import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Facebook, Instagram, Heart, Mail, CheckCircle } from 'lucide-react'

const HOURS = [
  { day: 'Monday',    ac: 'Closed',           kc: 'Closed' },
  { day: 'Tuesday',   ac: '12pm – 6pm',       kc: '12pm – 6pm' },
  { day: 'Wednesday', ac: '12pm – 6pm',       kc: '12pm – 6pm' },
  { day: 'Thursday',  ac: '12pm – 6pm',       kc: '12pm – 6pm' },
  { day: 'Friday',    ac: '12pm – 6pm',       kc: '12pm – 6pm' },
  { day: 'Saturday',  ac: '10am – 4pm',       kc: '10am – 4pm' },
  { day: 'Sunday',    ac: '12pm – 4pm',       kc: '12pm – 4pm' },
]

const QUICK_LINKS = [
  { label: 'Adopt a Pet',        href: '/adoptablepets' },
  { label: 'Adoption Application', href: '/adoptionapplication' },
  { label: 'Volunteer',          href: '/volunteer' },
  { label: 'Foster',             href: '/foster-1' },
  { label: 'Donate',             href: '/donate' },
  { label: 'Events',             href: '/events' },
  { label: 'About Us',           href: '/about-us' },
  { label: 'Contact Us',         href: '/contact-us' },
  { label: 'Owner Surrender',    href: '/owner-surrender' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, first_name: firstName }),
      })
      if (!res.ok) throw new Error()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="bg-teal-900 text-teal-50">

      {/* ── Newsletter band ── */}
      <div className="bg-teal-800 border-b border-teal-700">
        <div className="container py-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Copy */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="h-5 w-5 text-amber-400" />
              <h3 className="font-heading font-bold text-white text-lg">Stay in the Loop</h3>
            </div>
            <p className="text-sm text-teal-200">Get news about adoptable animals, upcoming events, and ways to help — delivered to your inbox.</p>
          </div>

          {/* Form */}
          <div className="w-full md:w-auto md:min-w-[420px]">
            {status === 'done' ? (
              <div className="flex items-center gap-2 text-green-300 font-semibold text-sm py-3">
                <CheckCircle className="h-5 w-5" />
                You're on the list! Thanks for subscribing.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="w-28 shrink-0 rounded-md bg-teal-700 border border-teal-600 text-white placeholder:text-teal-400 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 min-w-0 rounded-md bg-teal-700 border border-teal-600 text-white placeholder:text-teal-400 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="shrink-0 rounded-md bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-teal-900 font-semibold text-sm px-5 py-2 transition-colors"
                >
                  {status === 'loading' ? 'Signing up…' : 'Sign Up'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-300 text-xs mt-1">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>
      </div>

      <div className="container py-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/0001_mistylogotransparent.png"
              alt="Misty Eyes Animal Center"
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-sm text-teal-200 leading-relaxed">
            A nonprofit animal rescue organization dedicated to giving every animal a second chance at a loving home.
          </p>
          <p className="text-sm font-medium text-amber-400 italic">"Rescue. Love. Repeat."</p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://www.facebook.com/mistyeyesanimalcenter" target="_blank" rel="noopener noreferrer"
               aria-label="Misty Eyes on Facebook"
               className="text-teal-300 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/mistyeyesanimalcenter" target="_blank" rel="noopener noreferrer"
               aria-label="Misty Eyes on Instagram"
               className="text-teal-300 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-heading font-semibold text-white mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4 text-teal-300" />
            Hours of Operation
          </h3>
          <div className="space-y-1 text-xs text-teal-200">
            <div className="grid grid-cols-3 gap-1 font-semibold text-teal-100 mb-2">
              <span></span>
              <span>Animal Center</span>
              <span>Kitty City</span>
            </div>
            {HOURS.map((h) => (
              <div key={h.day} className="grid grid-cols-3 gap-1">
                <span className="text-teal-100">{h.day}</span>
                <span>{h.ac}</span>
                <span>{h.kc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-heading font-semibold text-white mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-teal-300" />
            Location
          </h3>
          <address className="not-italic text-sm text-teal-200 space-y-3">
            <div>
              <p className="text-teal-100 font-medium">Animal Center</p>
              <p>8656 E US Hwy 36</p>
              <p>Avon, IN 46123</p>
            </div>
            <div>
              <p className="text-teal-100 font-medium">Mailing Address</p>
              <p>PO Box 546</p>
              <p>Avon, IN 46123</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal-300 shrink-0" />
              <a href="tel:+13178921655" className="hover:text-white transition-colors">(317) 892-1655</a>
            </div>
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-teal-200 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-800">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-teal-400">
          <p>© {year} Misty Eyes Animal Center. All rights reserved. 501(c)(3) Nonprofit.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-amber-400" /> for the animals
          </p>
        </div>
      </div>
    </footer>
  )
}
