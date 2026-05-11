import { motion } from 'framer-motion'
import { Building2, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const OPPORTUNITIES = [
  { title: 'Matching Gifts', desc: 'Double the impact of employee donations through a corporate gift matching program.' },
  { title: 'Event Sponsorship', desc: 'Sponsor the Bow Wow Bash or other Misty Eyes events for brand visibility and community goodwill.' },
  { title: 'Workplace Campaigns', desc: 'Launch an internal fundraising campaign at your office. We\'ll provide materials and support.' },
  { title: 'In-Kind Donations', desc: 'Donate products, services, or materials your company produces that benefit our animals or operations.' },
]

export default function CorporateGiving() {
  return (
    <div>
      <PageHero badge="Business Partners" title="Corporate Giving" subtitle="Partner with Misty Eyes Animal Center to demonstrate your company\'s commitment to community and compassion. We have opportunities for businesses of all sizes." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {OPPORTUNITIES.map((o, i) => (
              <motion.div key={o.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{o.title}</h3>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
            <Building2 className="h-10 w-10 text-teal-600 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold mb-3">Start a Corporate Partnership</h3>
            <p className="text-muted-foreground text-sm mb-6">Contact us to discuss how your company can make a meaningful impact. We\'re flexible and happy to customize a partnership that works for you.</p>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Contact Us to Partner <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
