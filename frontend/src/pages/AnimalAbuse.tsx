import { motion } from 'framer-motion'
import { AlertTriangle, Phone, Shield, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const REPORT_STEPS = [
  { num: '1', title: 'Document What You See', desc: 'Note dates, times, and specifics of what you observed. Photos or videos can be helpful evidence if safe to obtain.' },
  { num: '2', title: 'Contact Local Authorities', desc: 'Animal cruelty is a crime in Indiana. Contact your local animal control agency or county sheriff to file a report.' },
  { num: '3', title: 'Contact the Humane Society', desc: 'The Indiana Humane Society and ASPCA both have resources for reporting animal abuse and following up on cases.' },
  { num: '4', title: 'Notify Misty Eyes', desc: 'While we are not an enforcement agency, we can help connect you with the right resources and provide support.' },
]

export default function AnimalAbuse() {
  return (
    <div>
      <PageHero badge="Animal Welfare" title="Animal Abuse" subtitle="Animal abuse is a serious crime. Learn how to recognize the signs, report suspected mistreatment, and help protect vulnerable animals in your community." />

      <section className="bg-red-50 border-b border-red-200">
        <div className="container py-5 flex items-start gap-4">
          <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800"><strong>Emergency:</strong> If an animal is in immediate danger, call 911 or your local emergency services immediately.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-14 mb-14">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-4">Recognizing Animal Abuse</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">Animal abuse can be active (direct harm) or passive (neglect). Both are serious and warrant reporting.</p>
              <div className="space-y-3">
                {['Visible wounds, injuries, or signs of malnourishment', 'Animals left outside in extreme weather without shelter', 'Tethering an animal for extended periods without food/water', 'Hoarding conditions with overcrowded, unsanitary environments', 'Threatening, hitting, kicking, or deliberately frightening animals'].map(s => (
                  <div key={s} className="flex items-start gap-3 text-sm">
                    <Shield className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-5">How to Report</h2>
              <div className="space-y-4">
                {REPORT_STEPS.map(s => (
                  <div key={s.num} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-sm">{s.num}</div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">{s.title}</p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3178588022" className="flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:bg-teal-700 transition-colors"><Phone className="h-4 w-4" />Call Misty Eyes: 317-858-8022</a>
            <a href="https://www.aspca.org/take-action/report-animal-cruelty" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">ASPCA Reporting Resources <ArrowRight className="h-4 w-4" /></a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
