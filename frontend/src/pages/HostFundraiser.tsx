import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Calendar, Heart, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { fundraiserSchema, type FundraiserFormData } from '@/lib/schemas'
import api from '@/lib/api'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const IDEAS = [
  { icon: DollarSign, title: 'Lemonade Stand / Bake Sale', desc: 'Classic community fundraisers that are easy to organize and always popular.' },
  { icon: Calendar, title: 'Birthday Fundraiser', desc: 'Ask friends to donate to Misty Eyes in lieu of gifts for your next birthday.' },
  { icon: Heart, title: 'Restaurant Night', desc: 'Partner with a local restaurant for a dine-in night where a portion of sales benefits us.' },
  { icon: CheckCircle2, title: 'Charity Run / Walk', desc: 'Organize a pet-friendly walk or run in your neighborhood to raise funds.' },
]

export default function HostFundraiser() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FundraiserFormData>({ resolver: zodResolver(fundraiserSchema) })

  const onSubmit = async (data: FundraiserFormData) => {
    try {
      await api.post('/fundraiser', data)
      setSubmitted(true)
      toast.success('Inquiry submitted! We\'ll be in touch soon.')
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <PageHero badge="Third-Party Events" title="Host a Fundraiser" subtitle="You don\'t have to be a nonprofit to raise money for one. Organize a community event in support of Misty Eyes and make a real difference." />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-3xl font-bold mb-5">Your Event, Our Animals</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Whether it\'s a birthday fundraiser, a community bake sale, or a charity run, third-party events are an incredible way to raise funds and awareness for Misty Eyes Animal Center.</p>
                <p className="text-muted-foreground leading-relaxed mb-8">We\'ll support you with promotional materials, social media shares, and guidance every step of the way. You bring the energy; we\'ll provide the cause.</p>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-4">
                {IDEAS.map((idea, i) => (
                  <motion.div key={idea.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="bg-secondary rounded-xl p-5">
                    <idea.icon className="h-5 w-5 text-primary mb-3" />
                    <p className="font-semibold text-sm mb-1">{idea.title}</p>
                    <p className="text-xs text-muted-foreground">{idea.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-6">Fundraiser Inquiry</h2>
              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-teal-800 mb-2">Request Received!</h3>
                  <p className="text-teal-600">Thank you for planning a fundraiser. We\'ll be in touch with next steps soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium mb-1 block">Name</label><input {...register('name')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />{errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}</div>
                    <div><label className="text-sm font-medium mb-1 block">Email</label><input {...register('email')} type="email" className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />{errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}</div>
                  </div>
                  <div><label className="text-sm font-medium mb-1 block">Event Type</label><input {...register('event_type')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="e.g. Bake Sale, Birthday Fundraiser, 5K Run..." />{errors.event_type && <p className="text-xs text-destructive mt-1">{errors.event_type.message}</p>}</div>
                  <div><label className="text-sm font-medium mb-1 block">Planned Date <span className="text-muted-foreground font-normal">(if known)</span></label><input {...register('event_date')} type="date" className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Tell Us About Your Event</label><textarea {...register('description')} rows={4} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Describe your event idea, expected attendance, how you\'d like to donate proceeds..." />{errors.description && <p className="text-xs text-destructive mt-1">{errors.description.message}</p>}</div>
                  <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-primary hover:bg-teal-700 text-white font-semibold py-3 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                    <ArrowRight className="h-4 w-4" />{isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
