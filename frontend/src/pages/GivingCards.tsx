import { motion } from 'framer-motion'
import { Gift, Heart, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function GivingCards() {
  return (
    <div>
      <PageHero badge="The Perfect Gift for Any Pet Lover" title="Misty Eyes Giving Cards" subtitle="Are you looking for a unique gift for someone who already has everything? Misty Eyes Giving Cards are always the perfect fit!" />

      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Card image */}
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="/images/giving_cards.jpg"
                alt="Misty Eyes Giving Cards — dog and cat designs"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>

            {/* Description */}
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
              <div>
                <p className="text-lg font-heading font-bold text-primary mb-3">GIVE by GIVING!</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Misty Eyes Giving Cards are a wonderful way to celebrate a friend or family member while supporting a great cause! Simply click the link below and donate the gift amount that you would like to spend. Misty Eyes will mail a Giving Card to the recipient to let them know that they are helping to save the lives of animals through your donated gift.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your gift will go to the <strong>Misty Eyes Medical Care Fund</strong> in the recipient's name.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Misty Eyes Giving Cards are available in your choice of <strong>Dog or Cat designs</strong>. Please indicate your preference and whether you would like the recipient to know the amount of your gift. We'll take care of the rest!
                </p>
              </div>

              <a
                href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E231966&id=82"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-8 py-3 text-sm font-semibold hover:bg-teal-700 transition-colors"
              >
                <Gift className="h-4 w-4" /> Purchase Giving Cards
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WIN-WIN-WIN */}
      <section className="py-16 bg-secondary/50">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold mb-6">
              Misty Eyes Giving Cards are a <span className="text-primary">WIN-WIN-WIN</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              {[
                { label: 'A WIN for you!', color: 'bg-teal-50 border-teal-200' },
                { label: 'A WIN for the recipient!', color: 'bg-amber-50 border-amber-200' },
                { label: 'A WIN FOR THE ANIMALS!!', color: 'bg-rose-50 border-rose-200' },
              ].map(w => (
                <div key={w.label} className={`rounded-2xl border p-5 font-heading font-bold text-sm ${w.color}`}>
                  <Heart className="h-6 w-6 mx-auto mb-2 text-primary" />
                  {w.label}
                </div>
              ))}
            </div>
            <a
              href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E231966&id=82"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-sm font-semibold transition-colors"
            >
              Purchase Giving Cards <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
