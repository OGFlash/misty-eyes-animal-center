import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Mail, PawPrint, Clock, MapPin } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const STEPS = [
  { step: '01', title: 'Browse Adoptable Pets', desc: 'View all available cats, kittens, dogs, and puppies. Apply for a specific pet or based on characteristics like species, size, and age.' },
  { step: '02', title: 'Submit an Application', desc: 'Fill out our online adoption application. We keep applications on file for a minimum of six months. We do not grant adoptions on a first-come, first-served basis — we find the best fit.' },
  { step: '03', title: 'Application Review', desc: 'Our team carefully reviews each application to ensure the best possible match between pet and family. We may reach out with follow-up questions.' },
  { step: '04', title: 'Meet & Greet', desc: 'Visit us at the Adoption Center on weekends, or we can arrange a private meet and greet for any pet you are interested in.' },
  { step: '05', title: 'Home Check', desc: 'A brief home check helps us ensure the environment is safe and suitable for your new family member.' },
  { step: '06', title: 'Welcome Home!', desc: 'Once approved, your new pet comes home with you! Our team is always here if you have questions along the way.' },
]

export default function AdoptionProcess() {
  return (
    <div>
      <PageHero badge="Adopt a Pet" title="Our Adoption Process" subtitle="We have wonderful dogs, puppies, cats, and kittens waiting to find their forever homes. Our goal is to ensure the best fit for every pet and family.">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/adoptablepets" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-3 font-semibold transition-colors">
            <PawPrint className="h-4 w-4" /> View Adoptable Pets
          </Link>
          <Link to="/adoptionapplication" className="inline-flex items-center gap-2 rounded-full border-2 border-white hover:bg-white hover:text-teal-800 px-6 py-3 font-semibold transition-colors">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <section className="bg-amber-50 border-b border-amber-100">
        <div className="container py-5 flex items-start gap-4">
          <div className="bg-amber-100 rounded-full p-2 shrink-0 mt-0.5">
            <PawPrint className="h-4 w-4 text-amber-600" />
          </div>
          <p className="text-sm text-amber-800">
            <strong>Foster-Based Rescue:</strong> In addition to our Kitty City shelter building, most of our animals live in loving foster homes while awaiting adoption. We are happy to arrange a private meet and greet for any pet not scheduled to be at the center!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Step-by-Step Process</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From browsing to bringing your new best friend home, here's exactly what to expect.</p>
          </motion.div>
          <div className="space-y-5">
            {STEPS.map((s, i) => (
              <motion.div key={s.step} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="flex gap-6 items-start p-6 rounded-2xl border bg-white hover:shadow-md transition-shadow">
                <div className="shrink-0 w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-200 flex items-center justify-center">
                  <span className="font-heading font-bold text-teal-700 text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />{s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">Questions About Adoption?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We do not grant adoptions on a first-come, first-served basis. You can apply for a specific pet or based on characteristics such as type, size, and age. All applications are kept on file for a minimum of six months.</p>
          <a href="mailto:Adoption@MistyEyes.org" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            <Mail className="h-4 w-4" /> Adoption@MistyEyes.org
          </a>
        </div>
      </section>

      <section className="py-16 bg-teal-700 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Come Visit Us</h2>
              <p className="text-teal-100 mb-6">Several of our adoptable pets are on-location at the Adoption Center on weekends. We post which pets will be there on Facebook, Instagram, and TikTok.</p>
              <div className="flex items-start gap-3 text-teal-100 mb-3">
                <MapPin className="h-5 w-5 text-teal-300 mt-0.5 shrink-0" />
                <div><p>616 S. County Rd. 800 E.</p><p>Avon, Indiana 46123</p><p className="mt-1 font-medium text-white">317-858-8022</p></div>
              </div>
              <div className="flex items-center gap-3 text-teal-100">
                <Clock className="h-5 w-5 text-teal-300 shrink-0" />
                <p>Sat &amp; Sun 10am–1pm · Tue 5–7pm · Also by appointment</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Ready to Apply?', sub: 'Fill out our adoption application', href: '/adoptionapplication' },
                { label: 'Browse Pets', sub: 'See all cats, kittens, dogs & puppies', href: '/adoptablepets' },
                { label: 'Foster Instead?', sub: 'Learn about our foster program', href: '/foster-1' },
              ].map(item => (
                <Link key={item.href} to={item.href} className="flex items-center justify-between rounded-xl bg-white/10 hover:bg-white/20 transition-colors p-5 border border-white/20">
                  <div><p className="font-semibold">{item.label}</p><p className="text-teal-200 text-sm">{item.sub}</p></div>
                  <ArrowRight className="h-5 w-5 text-amber-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
