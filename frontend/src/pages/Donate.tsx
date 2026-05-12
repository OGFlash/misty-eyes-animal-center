import { motion } from 'framer-motion'
import { Heart, Shield, ArrowRight, CheckCircle2, FileDown } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const IMPACT = [
  { amount: '$25', desc: 'Covers routine vaccinations for one pet' },
  { amount: '$50', desc: 'Provides spay/neuter for one animal' },
  { amount: '$100', desc: 'Funds emergency medical care' },
  { amount: '$250', desc: 'Supports a foster family for a month' },
  { amount: '$500', desc: 'Underwrites an adoption event' },
]

const DONATE_OPTIONS = [
  {
    title: 'Make a One-Time Donation',
    desc: 'A single gift that goes directly to the animals in our care.',
    href: 'https://interland3.donorperfect.net/weblink/weblink.aspx?name=E231966&id=2',
    color: 'bg-teal-600 hover:bg-teal-700',
  },
  {
    title: 'Make a Monthly Donation',
    desc: 'Become a sustaining donor and provide reliable support month after month.',
    href: 'https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E231966&id=73',
    color: 'bg-amber-500 hover:bg-amber-600',
  },
  {
    title: 'Make a Tribute or Memorial Donation',
    desc: 'Honor a person or pet with a heartfelt donation in their name.',
    href: 'https://interland3.donorperfect.net/weblink/weblink.aspx?name=E231966&id=2',
    color: 'bg-rose-500 hover:bg-rose-600',
  },
]

const OTHER_WAYS = [
  { title: 'Giving Cards', href: '/givingcards', desc: 'Give the perfect gift for any pet lover — a Misty Eyes Giving Card supports animals in their honor.' },
  { title: 'Corporate Giving', href: '/copy-of-sponsor-a-suite', desc: 'Partner with us through matching gifts, event sponsorships, or workplace campaigns.' },
  { title: 'Sponsor a Suite', href: '/copy-of-naiming-opportunities', desc: 'Sponsor one of our Kitty City suites — your company name displayed prominently on-site.' },
  { title: 'Naming Opportunities', href: '/namingopportunities', desc: 'Leave a lasting legacy by naming a room or space in the Adoption Center.' },
  { title: 'Donate from Wish List', href: '/wishlist', desc: 'Send supplies directly via our Amazon or Chewy wish lists, or drop items off at the center.' },
  { title: 'Donate Professional Services', href: '/copy-of-donate-1', desc: 'Volunteer your professional skills — we need electricians, designers, vets, writers, and more.' },
]

export default function Donate() {
  return (
    <div>
      <PageHero badge="Support Our Mission" title="Donate" subtitle="Misty Eyes Animal Center is a 501(c)(3) nonprofit organization. Your tax-deductible donation directly funds the care of homeless animals.">
        <div className="flex items-center gap-3 text-sm text-teal-100">
          <Shield className="h-4 w-4" />
          <span>100% volunteer-run &bull; Every dollar goes to the animals</span>
        </div>
      </PageHero>

      {/* Donation options */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold mb-4">There are many ways to make a difference.</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">Misty Eyes is entirely volunteer-run and donor-supported. Every penny donated goes directly to the animals — food, supplies, veterinary care, and finding forever homes.</p>
              <div className="space-y-3">
                {IMPACT.map(item => (
                  <div key={item.amount} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>{item.amount}</strong> — {item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              {DONATE_OPTIONS.map((opt) => (
                <a
                  key={opt.title}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between gap-4 rounded-2xl p-6 text-white transition-colors ${opt.color}`}
                >
                  <div>
                    <p className="font-heading font-bold text-base mb-1">{opt.title}</p>
                    <p className="text-sm opacity-90">{opt.desc}</p>
                  </div>
                  <Heart className="h-6 w-6 shrink-0 fill-white/30" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">More Ways to Give</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OTHER_WAYS.map((item, i) => (
              <motion.a key={item.title} href={item.href} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="group bg-white rounded-2xl border p-6 hover:shadow-md transition-shadow block">
                <h3 className="font-heading font-bold text-base mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">Learn more <ArrowRight className="h-3 w-3" /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Donors Bill of Rights */}
      <section className="py-12 bg-white border-t">
        <div className="container text-center">
          <motion.a
            href="https://www.mistyeyes.org/_files/ugd/4b9f5a_bf5cd19feadd4f8c82a21ecc474b3be2.docx?dn=donors%20bill%20of%20rights.docx"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <FileDown className="h-4 w-4" />
            Download the Donors Bill of Rights
          </motion.a>
        </div>
      </section>
    </div>
  )
}
