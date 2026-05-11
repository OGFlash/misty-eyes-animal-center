import { motion } from 'framer-motion'
import { BookOpen, Users, Heart, Star, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const AUDIENCES = [
  { icon: BookOpen, title: 'Classroom Visits', desc: 'We bring engaging, age-appropriate lessons directly to your classroom. Topics include responsible pet ownership, animal welfare, and humane treatment of all living things.' },
  { icon: Users, title: 'Scout Troops', desc: 'Earn animal-related badges and merit awards through our humane education curriculum. Programs can be customized for all scouting levels.' },
  { icon: Heart, title: 'Birthday Parties', desc: 'A unique, educational birthday experience with an animal welfare theme. Kids leave with lasting lessons about kindness and compassion.' },
  { icon: Star, title: 'Community Groups', desc: 'Youth organizations, faith communities, homeschool co-ops, and more. We\'ll come to you or host you at the Adoption Center.' },
]

export default function HumaneEducation() {
  return (
    <div>
      <PageHero badge="Education" title="Humane Education" subtitle="Teaching the next generation to treat all living things with kindness, empathy, and respect. We bring humane education to classrooms and communities across Central Indiana." />

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold mb-3">Programs For Every Age & Group</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">All programs are facilitated by trained Misty Eyes educators and tailored to the age and needs of your group.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map((a, i) => (
              <motion.div key={a.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <a.icon className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-heading font-bold text-base mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-secondary/50">
        <div className="container text-center max-w-xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-2xl font-bold mb-3">Request a Program</h3>
            <p className="text-muted-foreground mb-6">Ready to bring humane education to your school, troop, or group? Contact our Programs Director, JV, to schedule your visit.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:JV@MistyEyes.org" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">Email JV@MistyEyes.org</a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors">Contact Form <ArrowRight className="h-4 w-4" /></a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
