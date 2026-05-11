import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, BookOpen, Calendar, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const PROGRAMS = [
  { icon: GraduationCap, title: 'For Students, By Students', href: '/for-students-by-students', color: 'bg-purple-50 text-purple-600', desc: 'A student-led program that gives teens and young adults hands-on experience in animal rescue, nonprofit management, and community service. Earn community service hours while making a real difference.' },
  { icon: BookOpen, title: 'Humane Education', href: '/humane-education', color: 'bg-teal-50 text-teal-600', desc: 'We bring humane education programs to classrooms, scout troops, and community groups. Lessons cover animal welfare, responsible pet ownership, and compassion for all living things.' },
  { icon: Users, title: 'Community Outreach', href: '/community-outreach', color: 'bg-amber-50 text-amber-600', desc: 'Our outreach team works with local organizations and community members to expand our reach and impact. From pet food banks to community resource fairs.' },
  { icon: Calendar, title: 'JV Kids Club', href: '/jv-kids-club', color: 'bg-rose-50 text-rose-600', desc: 'A fun, educational program for younger children that teaches kindness, empathy, and responsibility toward animals through age-appropriate activities and crafts.' },
]

export default function Programs() {
  return (
    <div>
      <PageHero badge="Education & Outreach" title="Programs" subtitle="Beyond adoption, Misty Eyes is committed to humane education and community outreach. Explore our programs designed for all ages." />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROGRAMS.map((p, i) => (
              <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="group bg-white border rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${p.color}`}>
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <Link to={p.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl font-bold mb-3">Bring a Program to Your School or Group</h2>
            <p className="text-muted-foreground mb-6">Request a Misty Eyes program visit for your classroom, scout troop, birthday party, or community organization.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Request a Visit <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
