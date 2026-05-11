import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const CATEGORIES = [
  { title: 'For Cats & Kittens', items: ['Kitten milk replacer (KMR)', 'Baby bottles & nipples', 'Cat litter (unscented)', 'Soft cat beds', 'Interactive cat toys', 'Stainless steel bowls', 'Cat carriers', 'Feliway spray / diffusers'] },
  { title: 'For Dogs & Puppies', items: ['Puppy food (dry & wet)', 'Dog beds & crate pads', 'Collars, leashes, harnesses', 'Kong toys & chews', 'Poop bags', 'Dog crates (all sizes)', 'Enzymatic cleaner', 'Treats (low-calorie)'] },
  { title: 'For the Center', items: ['Paper towels & cleaning supplies', 'Laundry detergent (fragrance-free)', 'Bleach', 'Ziplock bags (all sizes)', 'Gift cards (Walmart, Amazon, Chewy)', 'Postage stamps', 'Printer paper & ink', 'Volunteer snacks & refreshments'] },
]

export default function Wishlist() {
  return (
    <div>
      <PageHero badge="Donate Supplies" title="Wish Lists" subtitle="Send supplies directly to Misty Eyes through our Amazon and Chewy wish lists, or drop items off during our open hours." />

      {/* Online lists */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Shop Our Online Lists</h2>
            <p className="text-muted-foreground">Order directly from Amazon or Chewy and have items shipped straight to us.</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <motion.a variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-orange-50 border border-orange-200 rounded-2xl px-8 py-6 hover:shadow-md transition-shadow">
              <ShoppingBag className="h-7 w-7 text-orange-500" />
              <div>
                <p className="font-heading font-bold text-lg">Amazon Wish List</p>
                <p className="text-sm text-muted-foreground">Items ship directly to Misty Eyes</p>
              </div>
              <ArrowRight className="h-5 w-5 text-orange-400 ml-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} href="https://www.chewy.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-blue-50 border border-blue-200 rounded-2xl px-8 py-6 hover:shadow-md transition-shadow">
              <ShoppingBag className="h-7 w-7 text-blue-500" />
              <div>
                <p className="font-heading font-bold text-lg">Chewy Wish List</p>
                <p className="text-sm text-muted-foreground">Pet supplies shipped for free</p>
              </div>
              <ArrowRight className="h-5 w-5 text-blue-400 ml-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Most needed */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Most Needed Items</h2>
            <p className="text-muted-foreground">You can also drop donations off at the Adoption Center during open hours.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div key={cat.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="bg-white rounded-2xl border p-6">
                <h3 className="font-heading font-bold text-lg mb-4 pb-3 border-b">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map(item => (<li key={item} className="text-sm text-muted-foreground flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />{item}</li>))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
