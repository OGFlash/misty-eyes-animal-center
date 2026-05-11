import { motion } from 'framer-motion'
import { Calendar, MapPin, Ticket, ArrowRight, Star } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function Events() {
  return (
    <div>
      <PageHero badge="Mark Your Calendar" title="Events" subtitle="Join us at our fundraisers, adoption fairs, and community events. Every event you attend helps save animal lives." />

      {/* Bow Wow Bash Feature */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-10 md:p-16 text-white overflow-hidden">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full" />
            <div className="relative z-10 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span className="text-amber-300 text-sm font-bold uppercase tracking-wider">Signature Annual Event</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Bow Wow Bash</h2>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-amber-500 text-white text-2xl font-bold px-5 py-2 rounded-full">SAVE THE DATE</span>
                  <span className="text-3xl font-bold text-amber-300">9/20/26</span>
                </div>
                <p className="text-teal-100 text-lg leading-relaxed mb-8">Our premier annual fundraiser celebrates the animals we love while raising critical funds to keep our rescue running. Each year, the Bow Wow Bash brings together the community for an unforgettable evening of fun, food, and furry friends.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                    <Calendar className="h-4 w-4" /> September 20, 2026
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                    <MapPin className="h-4 w-4" /> Avon, Indiana (details TBA)
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#tickets" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 px-6 py-3 font-semibold transition-colors">
                    <Ticket className="h-4 w-4" /> Get VIP Tickets
                  </a>
                  <a href="#sponsor" className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 px-6 py-3 font-semibold transition-colors">
                    Become a Sponsor <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor & Vendor */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Get Involved with Bow Wow Bash</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Whether you want to attend, sponsor, or set up a vendor booth, we have opportunities for everyone.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 'tickets', title: 'Purchase Tickets', desc: 'General admission and VIP tickets available. VIP packages include exclusive perks and early access. Check back closer to the event date for availability.', cta: 'Reserve Tickets', href: '#tickets' },
              { id: 'sponsor', title: 'Event Sponsorship', desc: 'Sponsoring Bow Wow Bash puts your business in front of hundreds of animal lovers. Packages range from Silver to Title Sponsor with varying benefits.', cta: 'Sponsorship Info', href: '/host-fundraiser' },
              { id: 'vendor', title: 'Vendor Booth', desc: 'Set up a vendor booth and reach our passionate community of animal lovers. Applications open in 2026. Join our mailing list for updates.', cta: 'Vendor Inquiry', href: '/contact' },
            ].map((item, i) => (
              <motion.div key={item.id} id={item.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="bg-white rounded-2xl border p-7">
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.desc}</p>
                <a href={item.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Note */}
      <section className="py-14 bg-white">
        <div className="container text-center max-w-xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-xl font-bold mb-3">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6 text-sm">Follow us on social media and subscribe to our newsletter for the latest event announcements and updates.</p>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Subscribe to Updates <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
