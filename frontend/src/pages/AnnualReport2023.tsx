import { motion } from 'framer-motion'
import { BarChart3, Heart, Users, Home, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const STATS = [
  { icon: Heart, value: '400+', label: 'Animals Rescued', color: 'bg-rose-50 text-rose-600' },
  { icon: Home, value: '380+', label: 'Successful Adoptions', color: 'bg-teal-50 text-teal-600' },
  { icon: Users, value: '150+', label: 'Active Volunteers', color: 'bg-amber-50 text-amber-600' },
  { icon: BarChart3, value: '95%', label: 'Live Release Rate', color: 'bg-purple-50 text-purple-600' },
]

export default function AnnualReport2023() {
  return (
    <div>
      <PageHero badge="2023 in Review" title="Annual Report 2023" subtitle="A look back at 2023 — the animals we helped, the community that rallied around us, and everything your support made possible." />

      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-secondary/50 rounded-2xl border p-6 text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${s.color}`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="font-heading text-3xl font-bold mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-4">Year in Review</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">2023 was a landmark year for Misty Eyes Animal Center. Despite unprecedented demand from a pet surrender crisis across Central Indiana, our volunteer team and foster families stepped up in extraordinary ways.</p>
              <p className="text-muted-foreground leading-relaxed">We expanded our programs, grew our volunteer base, and continued to provide 100% of veterinary care for every animal in our care — all through the generosity of our donors and community partners.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-4">Financial Highlights</h2>
              <div className="space-y-3">
                {[['Total Revenue', '$142,800'], ['Animal Care & Medical', '$78,400 (55%)'], ['Programs & Education', '$14,200 (10%)'], ['Fundraising & Events', '$18,600 (13%)'], ['Admin & Operations', '$31,600 (22%)']].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-sm border-b pb-2">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-semibold">{val}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">Figures are approximate for illustration. Full audited report available upon request.</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 text-center">
            <a href="/donate" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Support Our 2024 Mission <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
