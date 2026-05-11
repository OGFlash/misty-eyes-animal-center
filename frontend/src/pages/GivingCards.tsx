import { motion } from 'framer-motion'
import { Gift, Heart, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function GivingCards() {
  return (
    <div>
      <PageHero badge="Thoughtful Gifting" title="Giving Cards" subtitle="Give someone the gift of saving an animal's life. Misty Eyes giving cards are a meaningful way to celebrate someone special." />

      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-5">
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-7">
                <Gift className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Perfect for Any Occasion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Birthdays, holidays, milestones — a Misty Eyes giving card says you care about both the recipient and the animals in our care. A donation is made in their honor, and they\'ll receive a personalized card acknowledging the gift.</p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-7">
                <Heart className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">100% Goes to the Animals</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Every dollar from giving card donations goes directly to the care of homeless animals at Misty Eyes. No overhead. No waste. Just lives saved.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-secondary/50 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">Order a Giving Card</h3>
                <p className="text-sm text-muted-foreground mb-6">Contact us to order a personalized giving card for any amount. We\'ll coordinate the card and donation confirmation directly with you.</p>
              </div>
              <div className="space-y-3">
                <a href="mailto:Adoption@MistyEyes.org" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:bg-teal-700 transition-colors">
                  Email Adoption@MistyEyes.org
                </a>
                <a href="/donate" className="w-full inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-white transition-colors">
                  Make a Direct Donation <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
