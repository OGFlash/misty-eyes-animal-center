import { motion } from 'framer-motion'
import { MapPin, Clock, Heart, Cat, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function KittyCity() {
  return (
    <div>
      <PageHero badge="Our Cat Sanctuary" title="Kitty City" subtitle="Kitty City is our dedicated cat adoption space. Come meet our feline residents in a free-roam environment where personalities shine." />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold mb-5">A Special Place for Cats</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Kitty City is a free-roam cat adoption room where our feline friends can express their true personalities in a home-like setting. Visitors can interact with the cats in a comfortable environment away from the stress of a traditional kennel.</p>
              <p className="text-muted-foreground leading-relaxed mb-8">All cats at Kitty City are spayed/neutered, vaccinated, and microchipped before adoption. Each one is cared for by dedicated volunteers who know their story and personality.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0"><Clock className="h-4 w-4 text-amber-600" /></div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Kitty City Hours</p>
                    <p className="text-sm text-muted-foreground">Saturday &amp; Sunday: 10:00 AM – 1:00 PM</p>
                    <p className="text-sm text-muted-foreground">Tuesday: 5:00 PM – 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Also by appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0"><MapPin className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Location</p>
                    <p className="text-sm text-muted-foreground">616 S. County Rd. 800 E., Avon, Indiana 46123</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
                <img src="/images/0005_2025_20KC_20Graphic.jpg" alt="Kitty City 2025" className="w-full h-auto object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Cat, label: 'Free-Roam Space', desc: 'Cats can be themselves' },
                  { icon: Heart, label: 'All Vet-Ready', desc: 'Spayed, vaccinated, chipped' },
                  { icon: Clock, label: 'Open Weekends', desc: 'Walk-ins welcome' },
                  { icon: MapPin, label: 'On-Site', desc: 'At the Adoption Center' },
                ].map(item => (
                  <div key={item.label} className="bg-amber-50 rounded-2xl border border-amber-100 p-5">
                    <item.icon className="h-6 w-6 text-amber-600 mb-3" />
                    <p className="font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container text-center max-w-xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl font-bold mb-3">Meet Our Cats</h2>
            <p className="text-muted-foreground mb-6">Browse our available feline friends and start your journey to adoption.</p>
            <a href="/adoptable-pets" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              See Adoptable Cats <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
