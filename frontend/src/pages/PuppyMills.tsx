import { motion } from 'framer-motion'
import { AlertTriangle, ShieldOff, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const SIGNS = [
  'Selling multiple breeds at once',
  'Puppies always available, no waiting',
  'Meeting in a parking lot or public place',
  'Refusing to let you visit the facility',
  'Seller has minimal knowledge about the breed',
  'Puppies appear dirty, lethargic, or underweight',
  'No health records or vaccination documentation',
  'Pressure to buy immediately',
]

export default function PuppyMills() {
  return (
    <div>
      <PageHero badge="Animal Welfare" title="Puppy Mills" subtitle="Puppy mills are commercial breeding operations that prioritize profit over the health and welfare of animals. Learn how to identify them and make a compassionate choice." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-14 mb-14">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-4">What is a Puppy Mill?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">Puppy mills are large-scale, for-profit breeding facilities where dogs are kept in overcrowded, unsanitary conditions with little to no veterinary care. Breeding dogs are often kept in cages for their entire lives, producing litter after litter until they are no longer profitable.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">Puppies from mills are often sold through pet stores, online ads, and roadside stands. They frequently suffer from genetic diseases, parasites, and behavioral issues. The parents are never seen.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldOff className="h-5 w-5 text-amber-600" />
                  <h3 className="font-heading font-bold text-base">Red Flags to Watch For</h3>
                </div>
                <ul className="space-y-2">
                  {SIGNS.map(s => (<li key={s} className="flex items-start gap-2 text-sm"><AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />{s}</li>))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold mb-3">Adopt, Don't Shop</h3>
            <p className="text-muted-foreground text-sm mb-5">Thousands of animals in rescues and shelters need homes. Choosing to adopt from a reputable rescue like Misty Eyes means you\'re giving a second chance to an animal that truly needs it — and you\'re not funding the cycle of cruelty.</p>
            <a href="/adoptable-pets" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Meet Our Adoptable Pets <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
