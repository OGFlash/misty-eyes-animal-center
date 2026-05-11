import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const SERVICES = [
  { title: 'Basic Obedience', desc: 'Sit, stay, come, down, leave it — the core commands every dog should know for a safe, happy life.' },
  { title: 'Leash Manners', desc: 'Address pulling, lunging, and reactivity so walks become enjoyable for you and your dog.' },
  { title: 'Behavior Issues', desc: 'Jumping, excessive barking, counter surfing, separation anxiety, and more — positive-based approaches that work.' },
  { title: 'Puppy Foundations', desc: 'Start your puppy off right with socialization, bite inhibition, crate training, and house training.' },
]

export default function DogTraining() {
  return (
    <div>
      <PageHero badge="Training" title="Dog Training" subtitle="Proper training builds the bond between you and your dog. A well-trained dog is a happier dog — and a more adoptable one. We support positive, force-free training methods." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-teal-50 border border-teal-200 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold mb-3">Training Resources & Referrals</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">Misty Eyes supports positive reinforcement training. We can connect you with trusted trainers in the Central Indiana area. Adopters are also encouraged to use our training resources to help newly adopted pets adjust to their forever home.</p>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Ask for a Referral <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
