import { motion } from 'framer-motion'
import { AlertTriangle, Phone, Mail, Clock, ArrowRight, Heart } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const STEPS = [
  { step: '01', title: 'Contact Us First', desc: 'Please call or email before bringing any animal to the Adoption Center. We are a foster-based rescue and may not have space available at all times. Do not drop off animals unannounced.' },
  { step: '02', title: 'Complete Intake Form', desc: 'Complete our surrender intake form with as much information as possible about your pet. This helps us find the right foster home and, eventually, the right adopter.' },
  { step: '03', title: 'Wait for Placement', desc: 'We will work to find a foster placement as quickly as possible. Our ability to accept surrenders depends entirely on foster home availability.' },
  { step: '04', title: 'Transfer of Care', desc: 'Once a placement is confirmed, we will make arrangements to transfer care of your pet. We ask for a voluntary surrender donation to help cover initial vet care.' },
]

const RESOURCES = [
  { title: 'Pet Food Assistance', desc: 'If cost is a barrier to keeping your pet, we may be able to connect you with local pet food resources.' },
  { title: 'Low-Cost Veterinary Care', desc: 'We can refer you to low-cost spay/neuter and veterinary clinics in the Indianapolis area.' },
  { title: 'Training Resources', desc: 'Behavioral issues are common reasons for surrender. Free or low-cost training may resolve the issue.' },
  { title: 'Rehoming Assistance', desc: 'If you need to rehome your pet privately, we can provide tips to help ensure a safe placement.' },
]

export default function OwnerSurrender() {
  return (
    <div>
      <PageHero badge="Pet Surrender" title="Owner Surrender" subtitle="We understand that surrendering a pet is an incredibly difficult decision. We are here to help — but please contact us first." />

      <section className="bg-amber-50 border-b border-amber-200">
        <div className="container py-5 flex items-start gap-4">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-900 text-sm mb-1">Important: Please Do Not Arrive Unannounced</p>
            <p className="text-amber-800 text-sm">Misty Eyes is a foster-based rescue. We can only accept animals when space is available. Showing up without a confirmed appointment may result in us being unable to accept your pet at that time.</p>
          </div>
        </div>
      </section>

      {/* Keep Your Pet Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-teal-50 border border-teal-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <Heart className="h-6 w-6 text-teal-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">Before You Surrender — Consider These Resources</h3>
                <p className="text-sm text-muted-foreground mb-5">Surrendering a pet is permanent. Many situations that lead to surrender can be resolved with the right support. Please explore these options before making a final decision.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {RESOURCES.map(r => (
                    <div key={r.title} className="bg-white rounded-xl p-4 border">
                      <p className="font-semibold text-sm mb-1">{r.title}</p>
                      <p className="text-xs text-muted-foreground">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">The Surrender Process</h2>
            <p className="text-muted-foreground">If surrender is necessary, here is what to expect.</p>
          </motion.div>
          <div className="space-y-5">
            {STEPS.map((s, i) => (
              <motion.div key={s.step} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="flex gap-6 items-start bg-white rounded-2xl border p-6">
                <div className="text-3xl font-bold text-teal-200 font-heading shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-2xl border p-8 text-center">
            <h2 className="font-heading text-2xl font-bold mb-5">Contact Us About Surrender</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href="tel:3178588022" className="flex items-center gap-3 bg-teal-50 rounded-xl px-6 py-4 hover:bg-teal-100 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Call Us</p>
                  <p className="text-xs text-muted-foreground">317-858-8022</p>
                </div>
              </a>
              <a href="mailto:Adoption@MistyEyes.org" className="flex items-center gap-3 bg-teal-50 rounded-xl px-6 py-4 hover:bg-teal-100 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Email Us</p>
                  <p className="text-xs text-muted-foreground">Adoption@MistyEyes.org</p>
                </div>
              </a>
              <a href="/contact" className="flex items-center gap-3 bg-teal-50 rounded-xl px-6 py-4 hover:bg-teal-100 transition-colors">
                <ArrowRight className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Contact Form</p>
                  <p className="text-xs text-muted-foreground">Send a message online</p>
                </div>
              </a>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>We respond during business hours: Sat – Sun 10am–1pm, Tue 5–7pm</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
