import { motion } from 'framer-motion'
import { Briefcase, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const SERVICES = [
  { title: 'Electricians', desc: 'Help with wiring and electrical work for our facilities.' },
  { title: 'Plumbers', desc: 'Plumbing installation and repairs for the Adoption Center and Kitty City.' },
  { title: 'Dry Wall Installers', desc: 'Drywall finishing, patching, and installation expertise.' },
  { title: 'Painters', desc: 'Interior and exterior painting volunteers.' },
  { title: 'Floor Installation', desc: 'Help with flooring projects throughout the center.' },
  { title: 'Carpenters', desc: 'Woodworking and carpentry skills for building and renovation projects.' },
  { title: 'Landscapers', desc: 'Outdoor maintenance and landscaping for our grounds.' },
  { title: 'Graphic Designers', desc: 'Create print and digital materials for campaigns, signage, and events.' },
  { title: 'CPAs', desc: 'Accounting and financial oversight for our nonprofit operations.' },
  { title: 'Vet Techs', desc: 'Hands-on support for animal medical care.' },
  { title: 'Photographers', desc: 'Capture adoptable animal portraits and event photography.' },
  { title: 'Writers', desc: 'Help write newsletters, web content, grant applications, and social media.' },
  { title: 'Teachers / Education Background', desc: 'Support our student programs including the JV Kids Club newsletter and IMPACT program.' },
]

export default function ProfessionalServices() {
  return (
    <div>
      <PageHero badge="Pro Bono & In-Kind" title="Professional Services" subtitle="Many of our greatest supporters contribute their professional expertise. If you have skills to offer, we\'d love to hear from you." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-secondary/50 rounded-2xl border p-6">
                <Briefcase className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-muted-foreground text-sm mb-5">Ready to donate your professional skills? Contact us to discuss how your expertise can benefit the animals at Misty Eyes.</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
