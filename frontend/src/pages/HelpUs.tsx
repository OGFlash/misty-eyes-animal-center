import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const WAYS = [
  { img: '/images/0033_4b9f5a_231b1ded77b04cb792ca59a602e34e1e_mv2.jpg', title: 'Volunteer', desc: 'Donate your time and skills. From welcome desk to events team, there\'s a role for everyone. No experience required — just a heart for animals.', href: '/volunteer', cta: 'Volunteer With Us' },
  { img: '/images/0034_c51cc4_56099d895c6d4187903eeb325cba52cc_mv2.png', title: 'Foster A Pet', desc: 'Misty Eyes is foster-based. Opening your home is one of the most impactful things you can do. Fosters provide the love; we provide food, supplies, and vet care.', href: '/foster-1', cta: 'Become a Foster' },
  { img: '/images/0035_11062b_f1f9edbeea9a42bca61fc28dff207f85_mv2.jpg', title: 'Every Day Ways', desc: 'Shop through Chewy and earn a $20 donation. Enroll in Kroger Community Rewards. Passive giving that adds up over time.', href: '/shop', cta: 'Shop & Give' },
  { img: '/images/0036_7fa6da7a44d5498d8b66f74b6d2a076b.jpg', title: 'Donate', desc: 'Your financial gift directly supports the animals in our care. Every dollar saves lives. We are a 501(c)(3) nonprofit — your donation is tax-deductible.', href: '/donate', cta: 'Donate Now' },
  { img: '/images/0037_a252d9f6d9d4112a37893b5369349f72.jpg', title: 'Wish List', desc: 'Browse our wish lists on Amazon and Chewy to send supplies directly to Misty Eyes. Every item purchased makes a difference.', href: '/wishlist', cta: 'Shop Wish Lists' },
  { img: '/images/0038_11062b_841a038a35fe4e4da9c2871f63caed93_mv2.jpg', title: 'Host a Fundraiser', desc: 'Organize a community fundraiser or third-party event to benefit Misty Eyes. We\'ll support your efforts every step of the way.', href: '/host-a-fundraiser', cta: 'Get Started' },
]

export default function HelpUs() {
  return (
    <div>
      <PageHero badge="Make a Difference" title="How to Help" subtitle="There are many ways to support the animals in our care. Find the one that works for you — every act of kindness counts." />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WAYS.map((w, i) => (
              <motion.div key={w.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="group bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3">{w.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-5">{w.desc}</p>
                  <Link to={w.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    {w.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Every Action Matters</h2>
            <p className="text-teal-100 mb-8 text-lg">Misty Eyes Animal Center is entirely volunteer-run and donor-supported. None of our work would be possible without people like you.</p>
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 px-8 py-3 font-semibold transition-colors">
              Donate Today <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
