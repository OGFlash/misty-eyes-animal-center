import { motion } from 'framer-motion'
import { Building2, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const SPONSORSHIP_TYPES = [
  {
    title: 'Event Sponsorship',
    desc: 'Our two signature events — Raise the Woof and the Bow Wow Bash — provide a wonderful opportunity to reach a local audience. Sponsorship packages are available for both events.',
  },
  {
    title: 'Suite Sponsorship',
    desc: 'Sponsor one of twenty-five suites in Kitty City. Your company name will be displayed in our lobby, on the suite, and in our online directory. You also get to choose colors and décor.',
    link: { label: 'View Suite Details', href: '/copy-of-naiming-opportunities' },
  },
  {
    title: 'Program Supporters',
    desc: 'We are seeking sponsors for our student newsletter (grades 4–6, teaching responsible pet ownership) and our IMPACT program, which reaches students and families in underserved areas.',
  },
]

export default function CorporateGiving() {
  return (
    <div>
      <PageHero badge="Business Partners" title="Corporate Sponsorships" subtitle="This program creates partnerships between companies and Misty Eyes Animal Center through sponsorship of events or programs. Benefits packages are customized to each company's objectives." />

      {/* Sponsorship types */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid gap-6 mb-14">
            {SPONSORSHIP_TYPES.map((o, i) => (
              <motion.div key={o.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 bg-secondary/40 rounded-2xl border p-6">
                <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{o.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{o.desc}</p>
                  {o.link && (
                    <a href={o.link.href} className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                      {o.link.label} <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Matching gifts */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-teal-50 border border-teal-200 rounded-2xl p-8 mb-8">
            <h3 className="font-heading text-xl font-bold mb-3">Giving Through Your Company</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Many employers offer <strong>matching gift programs</strong> that double or even triple charitable donations made by their employees. Some companies even match gifts made by retirees and spouses. Employers may also offer <strong>volunteer matching programs</strong> that match volunteer hours with a corporate donation.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border rounded-2xl p-8 text-center">
            <Building2 className="h-10 w-10 text-teal-600 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold mb-3">Start a Corporate Partnership</h3>
            <p className="text-muted-foreground text-sm mb-6">Contact us to discuss how your company can make a meaningful impact. We're flexible and happy to customize a partnership that works for you.</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Contact Us to Partner <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
