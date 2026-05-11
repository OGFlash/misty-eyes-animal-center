import { motion } from 'framer-motion'
import { Heart, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const AMOUNTS = [25, 50, 100, 250, 500]
const IMPACT = [
  { amount: '$25', desc: 'Covers routine vaccinations for one pet' },
  { amount: '$50', desc: 'Provides spay/neuter for one animal' },
  { amount: '$100', desc: 'Funds emergency medical care' },
  { amount: '$250', desc: 'Supports a foster family for a month' },
  { amount: '$500', desc: 'Underwrites an adoption event' },
]
const OTHER_WAYS = [
  { title: 'Giving Cards', href: '/giving-cards', desc: 'Give the gift of saving lives. Misty Eyes gift cards make meaningful presents.' },
  { title: 'Corporate Giving', href: '/corporate-giving', desc: 'Partner with us through matching gifts, sponsorships, or workplace campaigns.' },
  { title: 'Sponsor a Suite', href: '/sponsor-a-suite', desc: 'Name a kennel suite in honor of a beloved pet or person.' },
  { title: 'Naming Opportunities', href: '/naming-opportunities', desc: 'Leave a lasting legacy by naming a room or facility in the Adoption Center.' },
]

export default function Donate() {
  return (
    <div>
      <PageHero badge="Support Our Mission" title="Donate" subtitle="Misty Eyes Animal Center is a 501(c)(3) nonprofit organization. Your tax-deductible donation directly funds the care of homeless animals.">
        <div className="flex items-center gap-3 text-sm text-teal-100">
          <Shield className="h-4 w-4" />
          <span>EIN: Available upon request &bull; 100% volunteer-run</span>
        </div>
      </PageHero>

      {/* Donate widget */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold mb-4">Every Dollar Saves Lives</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">Misty Eyes is entirely volunteer-run and donor-supported. Every penny donated goes directly to the animals — food, supplies, veterinary care, and finding forever homes.</p>
              <div className="space-y-3">
                {IMPACT.map(item => (
                  <div key={item.amount} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>{item.amount}</strong> — {item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-secondary/50 rounded-2xl border p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Make a Donation</h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {AMOUNTS.map(a => (<button key={a} className="rounded-full border border-primary/30 hover:bg-primary hover:text-white hover:border-primary px-4 py-1.5 text-sm font-semibold transition-colors">${a}</button>))}
                  <input type="number" placeholder="Custom" className="rounded-full border px-4 py-1.5 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div className="space-y-3 mb-5">
                  <div><label className="text-sm font-medium mb-1 block">Frequency</label><div className="flex gap-2">
                    <button className="flex-1 rounded-lg border bg-primary text-white text-sm py-2 font-medium">One-time</button>
                    <button className="flex-1 rounded-lg border text-sm py-2 font-medium hover:bg-secondary transition-colors">Monthly</button>
                  </div></div>
                  <div><label className="text-sm font-medium mb-1 block">Email</label><input type="email" placeholder="your@email.com" className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
                </div>
                <button className="w-full rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 transition-colors flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4 fill-white" /> Donate Securely
                </button>
                <p className="text-xs text-muted-foreground text-center mt-3">Secured by SSL. Misty Eyes is a 501(c)(3) nonprofit (tax-deductible).</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">More Ways to Give</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OTHER_WAYS.map((item, i) => (
              <motion.a key={item.title} href={item.href} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="group bg-white rounded-2xl border p-6 hover:shadow-md transition-shadow block">
                <h3 className="font-heading font-bold text-base mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">Learn more <ArrowRight className="h-3 w-3" /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
