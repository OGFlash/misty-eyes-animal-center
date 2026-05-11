import { motion } from 'framer-motion'
import { Heart, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const TIERS = [
  { name: 'Kitten Suite Sponsorship', price: '$500/year', desc: 'Name a kitten suite in our Kitty City in honor of a beloved pet or person. Includes a nameplate and recognition on our website and social media.' },
  { name: 'Dog Suite Sponsorship', price: '$750/year', desc: 'Sponsor a dog kennel suite in our Adoption Center. Perfect to honor a dog that brought joy to your life.' },
  { name: 'Cat Colony Sponsor', price: '$1,000/year', desc: 'Sponsor an entire cat room with recognition throughout the year including event programs and annual report.' },
]

export default function SponsorASuite() {
  return (
    <div>
      <PageHero badge="Legacy Giving" title="Sponsor a Suite" subtitle="Honor a pet or person you love by sponsoring a suite or kennel space at the Misty Eyes Adoption Center." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-5 mb-12">
            {TIERS.map((tier, i) => (
              <motion.div key={tier.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start bg-secondary/50 rounded-2xl border p-7">
                <Heart className="h-6 w-6 text-rose-400 fill-rose-100 shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading font-bold text-lg">{tier.name}</h3>
                    <span className="text-primary font-bold text-sm whitespace-nowrap">{tier.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{tier.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-muted-foreground mb-5">Ready to create a lasting tribute? We\'d love to help you find the right sponsorship.</p>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Inquire About Sponsorship <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
