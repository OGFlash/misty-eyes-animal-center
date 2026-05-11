import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const BOARD = [
  { name: 'Jennifer Luttrell', role: 'President & Founder' },
  { name: 'Allison Buroker', role: 'Vice President' },
  { name: 'Monica Webb', role: 'Secretary' },
  { name: 'Jodi Runde', role: 'Treasurer' },
  { name: 'Bob Kiefer', role: 'Board Member' },
  { name: 'Jennifer Morris', role: 'Board Member' },
]

const OPS = [
  { name: 'Angie Jones', role: 'Adoption Counselor', email: 'Adoption@MistyEyes.org' },
  { name: 'Terry Barker', role: 'Volunteer Coordinator', email: 'Terry@mistyeyes.org' },
  { name: 'Ida Peterson', role: 'Foster Coordinator', email: 'foster@mistyeyes.org' },
  { name: 'JV Kasprowicz', role: 'Programs & Education Director', email: 'JV@MistyEyes.org' },
  { name: 'Sheryl Davis', role: 'Community Outreach Coordinator', email: 'sheryl@mistyeyes.org' },
]

const TEAMS = [
  { heading: 'Board of Directors', members: BOARD },
  { heading: 'Animal Operations & Programs', members: OPS },
]

export default function Leadership() {
  return (
    <div>
      <PageHero badge="Our Team" title="Leadership" subtitle="Misty Eyes Animal Center is run entirely by dedicated volunteers. Meet the people who make our mission possible." />

      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          {TEAMS.map(team => (
            <div key={team.heading} className="mb-16">
              <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-2xl font-bold mb-8 pb-3 border-b">
                {team.heading}
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {team.members.map((m, i) => (
                  <motion.div key={m.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="bg-white border rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                      {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <p className="font-semibold text-base mb-0.5">{m.name}</p>
                    <p className="text-sm text-muted-foreground mb-3">{m.role}</p>
                    {'email' in m && (
                      <a href={`mailto:${(m as typeof OPS[0]).email}`} className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                        <Mail className="h-3 w-3" />{(m as typeof OPS[0]).email}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl font-bold mb-3">Join Our Team</h2>
            <p className="text-muted-foreground mb-6">Misty Eyes is always looking for passionate people to join our volunteer family. Every role matters — from fostering to fundraising.</p>
            <div className="flex justify-center gap-3">
              <a href="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">Volunteer With Us</a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
