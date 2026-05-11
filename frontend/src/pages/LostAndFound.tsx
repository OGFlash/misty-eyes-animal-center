import { motion } from 'framer-motion'
import { Search, MapPin, Phone, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const STEPS_LOST = [
  'Search your immediate neighborhood immediately — most pets are found within a few blocks.',
  'Contact local animal control and shelters and file a report with your pet\'s description.',
  'Post on Nextdoor and local Facebook groups with clear photos.',
  'Place flyers within a 1-mile radius of where your pet was last seen.',
  'Contact Misty Eyes — we will post to our social media to help spread the word.',
]
const STEPS_FOUND = [
  'Safely contain the animal and check for a collar with ID tags.',
  'Scan for a microchip at any vet or animal shelter.',
  'Post on Nextdoor and local lost-pet Facebook groups.',
  'Contact local animal control to check for a missing pet report.',
  'Contact Misty Eyes to post on our social media channels.',
]

export default function LostAndFound() {
  return (
    <div>
      <PageHero badge="Lost & Found Pets" title="Lost & Found" subtitle="Losing a pet is terrifying. We\'re here to help. Find resources for locating lost animals and reuniting found pets with their owners." />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-rose-50 border border-rose-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <Search className="h-6 w-6 text-rose-600" />
                <h2 className="font-heading font-bold text-xl">I Lost My Pet</h2>
              </div>
              <ol className="space-y-3">
                {STEPS_LOST.map((s, i) => (<li key={i} className="flex gap-3 text-sm"><span className="text-rose-500 font-bold shrink-0">{i + 1}.</span>{s}</li>))}
              </ol>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-teal-50 border border-teal-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="h-6 w-6 text-teal-600" />
                <h2 className="font-heading font-bold text-xl">I Found a Pet</h2>
              </div>
              <ol className="space-y-3">
                {STEPS_FOUND.map((s, i) => (<li key={i} className="flex gap-3 text-sm"><span className="text-teal-600 font-bold shrink-0">{i + 1}.</span>{s}</li>))}
              </ol>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 max-w-2xl mx-auto bg-secondary rounded-2xl p-8 text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold mb-2">Contact Misty Eyes</h3>
            <p className="text-muted-foreground text-sm mb-5">We\'ll post lost/found pets to our social media to reach as many people as possible.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="tel:3178588022" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">317-858-8022</a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors">Contact Form <ArrowRight className="h-4 w-4" /></a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
