import { motion } from 'framer-motion'
import { ShoppingCart, RefreshCcw, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function Shop() {
  return (
    <div>
      <PageHero badge="Everyday Giving" title="Shop & Give" subtitle="Support Misty Eyes just by shopping for things you already buy. It costs you nothing extra." />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} className="bg-orange-50 border border-orange-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="font-heading font-bold text-xl">Chewy</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                New Chewy customers can donate <strong>$20</strong> to Misty Eyes by placing their first order through our link. It\'s a great way to stock up on pet supplies while giving back.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">1.</span> Click our Chewy referral link</li>
                <li className="text-sm flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">2.</span> Place your first order</li>
                <li className="text-sm flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">3.</span> Chewy donates $20 to Misty Eyes</li>
              </ul>
              <a href="https://www.chewy.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 text-sm font-semibold transition-colors">
                Shop Chewy <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <RefreshCcw className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="font-heading font-bold text-xl">Kroger Community Rewards</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Link your Kroger Plus card to Misty Eyes Animal Center through the Kroger Community Rewards program. A percentage of every purchase is donated to us at no cost to you.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">1.</span> Sign in to your Kroger account</li>
                <li className="text-sm flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">2.</span> Search for Misty Eyes Animal Center</li>
                <li className="text-sm flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">3.</span> Enroll — remember to re-enroll each year!</li>
              </ul>
              <a href="https://www.kroger.com/i/community/community-rewards" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold transition-colors">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-secondary/50">
        <div className="container text-center max-w-xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-xl font-bold mb-3">Looking for our Wish Lists?</h3>
            <p className="text-muted-foreground mb-5 text-sm">Send supplies directly to Misty Eyes through our curated Amazon and Chewy wish lists.</p>
            <a href="/wishlist" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              View Wish Lists <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
