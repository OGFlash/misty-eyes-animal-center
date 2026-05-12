import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const GRADE_GROUPS = [
  {
    label: 'Grades',
    grade: 'K-2',
    color: 'bg-amber-400',
    topics: ['Responsible Pet Ownership', 'Safety Around Pets'],
  },
  {
    label: 'Grades',
    grade: '3-5',
    color: 'bg-rose-500',
    topics: ['Responsible Pet Ownership', 'Careers with Animals'],
  },
  {
    label: 'Grades',
    grade: '6-8',
    color: 'bg-indigo-700',
    topics: ['Responsible Pet Ownership', 'Careers with Animals', 'Become an Advocate'],
  },
  {
    label: '',
    grade: 'Teens / Adults',
    color: 'bg-teal-500',
    topics: ['Responsible Pet Ownership', 'History of Dogs', 'History of Cats', 'Become an Advocate'],
  },
]

export default function HumaneEducation() {
  return (
    <div>
      <PageHero
        badge="Education"
        title="Humane Education"
        subtitle="Teaching kindness and respect toward all living things — in classrooms, organizations, and communities across Central Indiana."
      />

      {/* ── Mission intro ── */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              It is the mission of Misty Eyes Animal Center to educate our community in matters relating to responsible pet ownership as well as kindness and respect towards all living things.
            </p>
            <p>
              Not only does Misty Eyes offer free educational programs and presentations at our adoption center in Avon, these same programs are also available on-site at your school, business, organization or club!
            </p>
            <p className="text-foreground font-medium">
              Please review our offerings below. We are happy to customize a program to fit your needs.{' '}
              Please contact{' '}
              <a href="mailto:JV@MistyEyes.org" className="text-primary font-bold hover:underline">
                JV@MistyEyes.org
              </a>{' '}
              for more information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Grade-level cards ── */}
      <section className="pb-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GRADE_GROUPS.map((g, i) => (
              <motion.div
                key={g.grade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${g.color} rounded-2xl p-6 text-white flex flex-col items-center text-center`}
              >
                {g.label && (
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{g.label}</span>
                )}
                <span className="font-heading font-extrabold text-4xl mb-5 leading-none">{g.grade}</span>
                <ul className="space-y-2 w-full">
                  {g.topics.map(t => (
                    <li key={t} className="text-sm font-semibold leading-snug">{t}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-secondary/50">
        <div className="container text-center max-w-xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-2xl font-bold mb-3">Request a Program</h3>
            <p className="text-muted-foreground mb-6">
              Ready to bring humane education to your school, troop, or group? Contact our Programs Director, JV, to schedule your visit or on-site presentation.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:JV@MistyEyes.org" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
                Email JV@MistyEyes.org
              </a>
              <a href="/contact-us" className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors">
                Contact Form <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
