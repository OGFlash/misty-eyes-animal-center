import { motion } from 'framer-motion'
import { Megaphone, Heart, Users, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function CommunityOutreach() {
  return (
    <div>
      <PageHero badge="Outreach" title="Community Outreach" subtitle="Misty Eyes extends its mission beyond adoption through meaningful partnerships and community programs across Central Indiana." />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, title: 'Community Partnerships', desc: 'We work with local nonprofits, schools, businesses, and community organizations to expand our reach and create more opportunities to help animals and people.' },
              { icon: Heart, title: 'Pet Resource Programs', desc: 'Connecting pet owners in need with food assistance, low-cost vet care, and community resources to help families keep their pets during difficult times.' },
              { icon: Megaphone, title: 'Awareness Campaigns', desc: 'From tabling at community events to social media campaigns, our outreach team raises awareness about animal welfare, adoption, and responsible pet ownership.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold mb-3">Get Involved in Outreach</h3>
            <p className="text-muted-foreground mb-5 text-sm">Our community outreach team is always looking for volunteers and partner organizations. Reach out to Sheryl to learn more.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:sheryl@mistyeyes.org" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">Email sheryl@mistyeyes.org</a>
              <a href="/volunteer" className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold hover:bg-white transition-colors">Volunteer <ArrowRight className="h-4 w-4" /></a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
