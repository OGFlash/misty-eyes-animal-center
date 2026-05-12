import { motion } from 'framer-motion'
import { Calendar, MapPin, Ticket, Clock, ArrowRight, Star, Mail, Heart, Users, ShoppingBag, Gavel } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const INVOLVEMENT = [
  {
    id: 'tickets',
    icon: Ticket,
    title: 'VIP Tickets',
    label: 'VIP TICKETS ON SALE NOW',
    desc: 'Snag your VIP tickets for an exclusive experience at the Bow Wow Bash. VIP packages include special perks and priority access.',
    cta: 'Get VIP Tickets',
    href: 'http://weblink.donorperfect.com/2026-bwb-vip',
  },
  {
    id: 'sponsor',
    icon: Star,
    title: 'Sponsorship',
    label: 'SPONSORSHIP INFO',
    desc: 'Align your business with a great cause and reach hundreds of passionate animal lovers. Packages available at multiple levels.',
    cta: 'Inquire About Sponsoring',
    href: 'mailto:sheryl@mistyeyes.org?subject=Bow%20Wow%20Bash%20%2726%20Sponsorship',
  },
  {
    id: 'auction',
    icon: Gavel,
    title: 'Silent Auction Donation',
    label: 'SILENT AUCTION DONATION INFO',
    desc: 'Donate an item for our silent auction and help us raise even more for the animals. Businesses and individuals welcome.',
    cta: 'Donate an Auction Item',
    href: 'mailto:sa@mistyeyes.org?subject=Bow%20Wow%20Bash%20%2726%20Silent%20Auction%20Donation',
  },
  {
    id: 'vendor',
    icon: ShoppingBag,
    title: 'Vendor Booth',
    label: 'VENDOR INFO',
    desc: 'Set up a booth and connect with our passionate community of animal lovers. Pet-friendly vendors especially welcome.',
    cta: 'Vendor Inquiry',
    href: 'mailto:vendors@mistyeyes.org?subject=Bow%20Wow%20Bash%20%2726%20Vendors',
  },
]

const SCHEDULE = [
  { time: '12:00 PM', label: 'Gates Open — Huge Adoption Event, 100 Vendors & Silent Auction' },
  { time: '1:30 PM',  label: 'Pet Blessing' },
  { time: '2:00 PM',  label: 'Top Dog & Top Cat Contest' },
  { time: '2:30 PM',  label: 'Doggy Skydiving Spectacular' },
  { time: '3:00 PM',  label: 'Pet Contests' },
  { time: '4:45 PM',  label: 'Hendricks Power Ball Drop' },
]

const FLYERS = [
  '/images/0056_0be29d_567a9905fe624d8db3b9d4b885c8be80_mv2.jpg',
  '/images/0057_0be29d_14485f89ee43427a8c056c8ef02684cd_mv2.jpg',
  '/images/0058_0be29d_4e219ace03a2460185d6fbd3477367d7_mv2.jpg',
  '/images/0059_0be29d_4b3b4e5619dd49e3bf98ef5a2bbbcab5_mv2.jpg',
  '/images/0060_0be29d_d66fb60e536442778d1c91ae9f83eae9_mv2.jpg',
]

export default function Events() {
  return (
    <div>
      <PageHero badge="Mark Your Calendar" title="Events" subtitle="Join us at our fundraisers, adoption fairs, and community events. Every event you attend helps save animal lives." />

      {/* Bow Wow Bash — Hero with Featured Flyer */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: flyer image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={FLYERS[0]}
                alt="2026 Bow Wow Bash Event Flyer"
                className="w-full max-w-sm rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Right: event details */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-amber-600 text-sm font-bold uppercase tracking-wider">— Our Signature Event —</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-1">Bow Wow Bash</h2>
              <p className="text-lg text-primary font-semibold italic mb-2">And Meow, Too!</p>
              <p className="text-muted-foreground mb-6">Don't miss this tail-wagging good time! Join us for a day full of fun, furry friends, and fundraising for a great cause. Let's make this year's Bow Wow Bash the BIGGEST and BEST yet!</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 text-sm font-medium">
                  <Calendar className="h-4 w-4 text-primary" /> Sunday, September 20, 2026
                </div>
                <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 text-sm font-medium">
                  <Clock className="h-4 w-4 text-primary" /> 12:00 PM – 5:00 PM
                </div>
                <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-primary" /> Washington Township Park, 435 Whipple Ln, Avon
                </div>
                <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 text-sm font-medium">
                  <Users className="h-4 w-4 text-primary" /> 100 Vendors · Silent Auction · Huge Adoption Event
                </div>
              </div>

              {/* Schedule */}
              <div className="mb-8">
                <h3 className="font-heading font-bold text-lg mb-3">Event Schedule</h3>
                <div className="space-y-2">
                  {SCHEDULE.map((item) => (
                    <div key={item.time} className="flex items-start gap-3 text-sm">
                      <span className="font-bold text-primary w-16 shrink-0">{item.time}</span>
                      <span className="text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="http://weblink.donorperfect.com/2026-bwb-vip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-white px-6 py-3 font-semibold transition-colors"
                >
                  <Ticket className="h-4 w-4" /> Get VIP Tickets
                </a>
                <a
                  href="https://www.bowwowbash.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-semibold transition-colors"
                >
                  bowwowbash.net <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Be Part of the Magic */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Be Part of the Magic</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Whether you want to attend, sponsor, donate an auction item, or set up a vendor booth — there's a way for everyone to get involved.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INVOLVEMENT.map((item, i) => (
              <motion.div key={item.id} id={item.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="bg-white rounded-2xl border p-7 flex flex-col">
                <item.icon className="h-6 w-6 text-primary mb-3" />
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{item.label}</p>
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{item.desc}</p>
                <a href={item.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  <Mail className="h-3.5 w-3.5 shrink-0" /> {item.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Flyers Gallery */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Event Flyers</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">See all of this year's event flyers and spread the word!</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FLYERS.map((src, i) => (
              <motion.a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img src={src} alt={`Event flyer ${i + 1}`} className="w-full h-auto object-cover" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* For the Animals CTA */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto"
          >
            <Heart className="h-10 w-10 text-amber-500 mx-auto mb-4 fill-amber-200" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-amber-900">For the Animals!</h2>
            <p className="text-amber-800 text-lg leading-relaxed mb-8">
              Every dollar raised at Bow Wow Bash goes directly toward caring for the animals at Misty Eyes Animal Center. Your attendance, sponsorship, or donation makes a real difference in the lives of rescue animals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="http://weblink.donorperfect.com/2026-bwb-vip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-white px-7 py-3 font-semibold transition-colors"
              >
                <Ticket className="h-4 w-4" /> Get VIP Tickets
              </a>
              <a
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white px-7 py-3 font-semibold transition-colors"
              >
                Donate Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stay in the Loop */}
      <section className="py-14 bg-white">
        <div className="container text-center max-w-xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-xl font-bold mb-3">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6 text-sm">Follow us on social media and subscribe to our newsletter for the latest event announcements and updates.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
                Subscribe to Updates <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/MistyEyes.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Follow on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
