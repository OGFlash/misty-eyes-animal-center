import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const OPPORTUNITIES = [
  { title: 'Adoption Center Lobby', price: '$10,000', desc: 'Name the main lobby of the Misty Eyes Adoption Center, the first space every visitor, adopter, and volunteer enters.' },
  { title: 'Kitty City Main Room', price: '$7,500', desc: 'The free-roam cat sanctuary — one of the most visited and photographed spaces at our facility.' },
  { title: 'Veterinary Suite', price: '$5,000', desc: 'The medical care room where countless lives have been saved. A meaningful tribute to a pet you loved.' },
  { title: 'Outdoor Play Area', price: '$3,500', desc: 'The outdoor dog play yard — where dogs exercise, decompress, and learn to trust again.' },
]

export default function NamingOpportunities() {
  return (
    <div>
      <PageHero badge="Legacy Giving" title="Naming Opportunities" subtitle="Leave a permanent legacy at Misty Eyes by naming a room, space, or facility feature in honor of a person or pet you love." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {OPPORTUNITIES.map((o, i) => (
              <motion.div key={o.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                  <span className="text-primary font-bold text-sm">{o.price}</span>
                </div>
                <h3 className="font-heading font-bold text-base mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-muted-foreground text-sm mb-5">Custom naming opportunities may be available. Contact us to discuss how you can create a lasting legacy at Misty Eyes.</p>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Discuss a Naming Opportunity <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
