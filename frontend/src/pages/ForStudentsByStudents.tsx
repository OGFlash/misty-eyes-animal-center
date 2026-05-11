import { motion } from 'framer-motion'
import { GraduationCap, Star, Users, Clock, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const BENEFITS = [
  { icon: Clock, title: 'Community Service Hours', desc: 'Earn community service hours that count toward graduation requirements and college applications.' },
  { icon: Star, title: 'Real-World Experience', desc: 'Gain hands-on experience in nonprofit management, marketing, events, and animal care operations.' },
  { icon: Users, title: 'Leadership Development', desc: 'Take ownership of projects, lead teams, and develop skills that matter beyond the classroom.' },
  { icon: GraduationCap, title: 'College Resume Builder', desc: 'Stand out with meaningful, sustained service work that shows long-term commitment and initiative.' },
]

export default function ForStudentsByStudents() {
  return (
    <div>
      <PageHero badge="Student Program" title="For Students, By Students" subtitle="A student-led program empowering young people to lead real projects with real impact at Misty Eyes Animal Center." />

      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold mb-5">Student-Led. Real Impact.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">For Students, By Students is a program designed for teens and young adults who want to make a tangible difference in their community while developing valuable life and career skills.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Students take ownership of projects ranging from social media campaigns and event coordination to community outreach and fundraising. This isn\'t busywork — it\'s real responsibility with real outcomes.</p>
              <p className="text-muted-foreground leading-relaxed">The program is coordinated by JV Kasprowicz, our Programs & Education Director. Students can participate individually or bring their school club or service organization.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                {BENEFITS.map(b => (
                  <div key={b.title} className="bg-purple-50 rounded-2xl border border-purple-100 p-5">
                    <b.icon className="h-5 w-5 text-purple-600 mb-3" />
                    <p className="font-semibold text-sm mb-1">{b.title}</p>
                    <p className="text-xs text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-10 text-white text-center">
            <h3 className="font-heading text-2xl font-bold mb-3">Ready to Get Involved?</h3>
            <p className="text-purple-100 mb-6">Students in middle school through college are welcome. Contact JV to learn how to get started.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="mailto:JV@MistyEyes.org" className="inline-flex items-center gap-2 rounded-full bg-white text-purple-800 px-6 py-2.5 text-sm font-semibold hover:bg-purple-50 transition-colors">
                Email JV@MistyEyes.org
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 px-6 py-2.5 text-sm font-semibold transition-colors">
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
