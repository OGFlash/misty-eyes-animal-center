import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const RESOURCES = [
  {
    title: 'Safety Around Pets',
    grade: 'Grades K-2',
    credit: 'student Kate L.',
    href: 'https://www.canva.com/design/DAEnIE9E52Y/wFwiyogj90tKtBrTVrJ-kA/view?utm_content=DAEnIE9E52Y&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton',
    type: 'Canva Presentation',
  },
  {
    title: 'A Lifetime Commitment',
    grade: 'Grades K-2',
    credit: 'student Kate L.',
    href: 'https://www.canva.com/design/DAElaH2J8y0/USLKkkpJGLYoc_bBCmPThg/view?utm_content=DAElaH2J8y0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
    type: 'Canva Presentation',
  },
  {
    title: 'Adopting vs. Buying Your Next Pet',
    grade: 'All Ages',
    credit: 'students Layla & Olivia',
    href: 'https://youtu.be/7cEsuB5HWhQ',
    type: 'YouTube Video',
  },
]

export default function ForStudentsByStudents() {
  return (
    <div>
      <PageHero
        badge="Student Program"
        title="For Students, By Students"
        subtitle="Student-created resources promoting responsible pet ownership and kindness toward all living things — free to use and share!"
      />

      {/* ── Intro ── */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              The team at Misty Eyes understands the importance of education. This program allows students to be creative while helping us promote responsible pet ownership and kindness toward all living things.
            </p>
            <p className="font-medium text-foreground">
              This content is free to use and we encourage you to share it!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Resource cards ── */}
      <section className="pb-20 bg-white">
        <div className="container max-w-3xl">
          <div className="grid gap-4">
            {RESOURCES.map((r, i) => (
              <motion.a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center justify-between gap-4 bg-purple-50 border border-purple-100 hover:border-purple-300 hover:shadow-md rounded-2xl p-6 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold bg-purple-200 text-purple-800 rounded-full px-2.5 py-0.5">{r.grade}</span>
                    <span className="text-xs text-muted-foreground">{r.type}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base mb-1">{r.title}</h3>
                  <p className="text-xs text-muted-foreground">Created by {r.credit}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-purple-400 group-hover:text-purple-700 shrink-0 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Submit content CTA ── */}
      <section className="py-14 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="container max-w-xl text-center text-white">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-2xl font-bold mb-3">Want to Add Your Content?</h3>
            <p className="text-purple-100 text-sm mb-2">
              If you are interested in adding content to this page, please email{' '}
              <a href="mailto:JV@mistyeyes.org" className="font-bold underline hover:text-white">JV@mistyeyes.org</a>.
            </p>
            <p className="text-purple-200 text-xs mb-6">
              Please note: Parental approval is required prior to any content submission.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="mailto:JV@mistyeyes.org" className="inline-flex items-center gap-2 rounded-full bg-white text-purple-800 px-6 py-2.5 text-sm font-semibold hover:bg-purple-50 transition-colors">
                Email JV@MistyEyes.org
              </a>
              <a href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 px-6 py-2.5 text-sm font-semibold transition-colors">
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
