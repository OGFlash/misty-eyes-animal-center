import { motion } from 'framer-motion'
import { Star, Heart, BookOpen, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const ACTIVITIES = [
  'Learn about different animal species and their needs',
  'Craft projects inspired by animals and nature',
  'Hear stories about rescue animals finding forever homes',
  'Practice compassion and empathy through interactive games',
  'Earn JV Kids Club membership rewards',
]

export default function JVKidsClub() {
  return (
    <div>
      <PageHero badge="Kids Program" title="JV Kids Club" subtitle="A fun, educational program designed for younger children that teaches kindness and compassion toward all animals." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold mb-5">For Our Youngest Animal Lovers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">JV Kids Club is named after our Programs Director JV Kasprowicz, who has a special passion for teaching children about the humane treatment of animals. The program is designed for children ages 4–12.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">Through age-appropriate activities, crafts, and storytelling, children in the JV Kids Club develop empathy, responsibility, and a lifelong love for animals.</p>
              <ul className="space-y-2">
                {ACTIVITIES.map(a => (<li key={a} className="flex items-start gap-2 text-sm"><Star className="h-4 w-4 text-amber-400 fill-amber-400 shrink-0 mt-0.5" />{a}</li>))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-4">
                {[
                  { icon: Heart, label: 'Ages', detail: '4 – 12 years old' },
                  { icon: BookOpen, label: 'Format', detail: 'In-person events, classroom visits, or virtual sessions' },
                  { icon: Star, label: 'Rewards', detail: 'Kids earn special JV Kids Club recognition' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 bg-rose-50 rounded-xl p-4 border border-rose-100">
                    <item.icon className="h-5 w-5 text-rose-500 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 bg-secondary rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold mb-3">Bring JV Kids Club to Your Child\'s Group</h3>
            <p className="text-muted-foreground mb-5 text-sm">Birthday parties, classrooms, daycares, scout meetings — we love visiting young animal lovers wherever they are!</p>
            <a href="mailto:JV@MistyEyes.org" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Contact JV@MistyEyes.org <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
