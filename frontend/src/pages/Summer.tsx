import { motion } from 'framer-motion'
import { Sun, GraduationCap, Heart, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const PROGRAMS = [
  { icon: GraduationCap, title: 'Summer Student Volunteers', desc: 'Students earn community service hours through hands-on work at the Adoption Center. Perfect for summer break volunteering that looks great on college applications.' },
  { icon: Sun, title: 'Summer Camps & Visits', desc: 'Bring your summer camp group to Misty Eyes for a behind-the-scenes educational visit. Kids learn about animal care, rescue operations, and responsible pet ownership.' },
  { icon: Heart, title: 'Summer Foster Drive', desc: 'Summer is kitten season — the busiest time of year for rescues. Our summer foster drive urgently needs temporary homes for kittens, neonates, and adult cats.' },
]

export default function Summer() {
  return (
    <div>
      <PageHero badge="Summer Programs" title="Summer" subtitle="Summer is one of the busiest seasons at Misty Eyes. Get involved through our summer volunteering, educational visits, and foster drive programs." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-6 mb-14">
            {PROGRAMS.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 bg-amber-50 rounded-2xl border border-amber-100 p-7">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <p.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h3 className="font-heading text-xl font-bold mb-3">Get Involved This Summer</h3>
            <p className="text-muted-foreground mb-5 text-sm">Contact us about summer volunteering, visits, or fostering. Summer openings fill fast!</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="/foster" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">Become a Foster <ArrowRight className="h-4 w-4" /></a>
              <a href="/volunteer" className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors">Volunteer</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
