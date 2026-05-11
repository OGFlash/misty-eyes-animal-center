import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Mail, Users, Heart, ClipboardList, Monitor, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { volunteerSchema, type VolunteerFormData } from '@/lib/schemas'
import api from '@/lib/api'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const OPENINGS = [
  { icon: Heart, title: 'Foster Homes', badge: 'URGENT', badgeColor: 'bg-red-100 text-red-700', desc: 'There is an urgent need for foster homes. Fosters provide love and comfort in a home-setting while Misty Eyes provides food, supplies, toys, and all veterinary care. Foster families are the bridge between homeless and home.', email: 'foster@mistyeyes.org' },
  { icon: Users, title: 'Community Outreach', badge: null, badgeColor: '', desc: 'Help raise awareness and attend community events. This team works with the community and other nonprofits to give back. There is a little something for everyone!', email: 'outreach@mistyeyes.org' },
  { icon: ClipboardList, title: 'Events Team', badge: null, badgeColor: '', desc: 'Help us plan and execute events for Misty Eyes! From fundraisers to adoption events, our events team makes the magic happen.', email: 'terry@mistyeyes.org' },
  { icon: Monitor, title: 'Welcome Desk', badge: null, badgeColor: '', desc: 'Volunteer at our reception desk in the Adoption Center. Answer phones, greet visitors, assist Adoption Counselors, accept donations, and handle light clerical tasks.', email: 'terry@mistyeyes.org' },
]

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const INTERESTS = ['Foster Homes', 'Community Outreach', 'Events Team', 'Welcome Desk', 'Administrative Support', 'Fundraising', 'Social Media']

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<VolunteerFormData>({ resolver: zodResolver(volunteerSchema), defaultValues: { availability: [], interests: [] } })
  const availability = watch('availability') ?? []
  const interests = watch('interests') ?? []

  const toggle = (field: 'availability' | 'interests', value: string) => {
    const current = field === 'availability' ? availability : interests
    setValue(field, current.includes(value) ? current.filter(v => v !== value) : [...current, value])
  }

  const onSubmit = async (data: VolunteerFormData) => {
    try {
      await api.post('/volunteer/apply', data)
      setSubmitted(true)
      toast.success('Application submitted! We\'ll be in touch soon.')
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <PageHero badge="Get Involved" title="Volunteer With Us" subtitle="Volunteers donate precious time, skills, and expertise. You don’t need to be a trained professional to help — the desire to make a difference is all you need.">
        <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-3 font-semibold transition-colors">
          Apply to Volunteer <ArrowRight className="h-4 w-4" />
        </a>
      </PageHero>

      {/* Volunteer photo strip */}
      <section className="py-14 bg-secondary/40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow">
              <img src="/images/0039_ME_20Volunteers.jpg" alt="Misty Eyes volunteers" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow">
              <img src="/images/0040_ME_20Volunteer_20Group_edited.jpg" alt="Misty Eyes volunteer group" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Current Openings</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Hands-on volunteer opportunities with animals also include working with the public. Find the role that fits you.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OPENINGS.map((o, i) => (
              <motion.div key={o.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="bg-white border rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                    <o.icon className="h-5 w-5 text-primary" />
                  </div>
                  {o.badge && <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${o.badgeColor}`}>{o.badge}</span>}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{o.desc}</p>
                <a href={`mailto:${o.email}`} className="text-xs text-primary font-semibold hover:underline flex items-center gap-1">
                  <Mail className="h-3 w-3" />{o.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 bg-secondary/50">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-3">Volunteer Application</h2>
            <p className="text-muted-foreground">Fill out the form below and we\'ll send you information about our volunteer orientation.</p>
          </motion.div>

          {submitted ? (
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
              <Heart className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-teal-800 mb-2">Thank You!</h3>
              <p className="text-teal-600">We\'ve received your application and will be in touch soon with orientation details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border p-8 shadow-sm space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium mb-1.5 block">First Name</label><input {...register('firstName')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Jane" />{errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName.message}</p>}</div>
                <div><label className="text-sm font-medium mb-1.5 block">Last Name</label><input {...register('lastName')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Doe" />{errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName.message}</p>}</div>
              </div>
              <div><label className="text-sm font-medium mb-1.5 block">Email</label><input {...register('email')} type="email" className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="jane@example.com" />{errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}</div>
              <div><label className="text-sm font-medium mb-1.5 block">Phone</label><input {...register('phone')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="(317) 555-0100" />{errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}</div>
              <div>
                <label className="text-sm font-medium mb-2 block">Availability</label>
                <div className="flex flex-wrap gap-2">
                  {DAYS.map(d => (<button key={d} type="button" onClick={() => toggle('availability', d)} className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${availability.includes(d) ? 'bg-primary text-white border-primary' : 'border-border hover:border-primary'}`}>{d}</button>))}
                </div>
                {errors.availability && <p className="text-xs text-destructive mt-1">{errors.availability.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Areas of Interest</label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map(item => (<button key={item} type="button" onClick={() => toggle('interests', item)} className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${interests.includes(item) ? 'bg-primary text-white border-primary' : 'border-border hover:border-primary'}`}>{item}</button>))}
                </div>
                {errors.interests && <p className="text-xs text-destructive mt-1">{errors.interests.message}</p>}
              </div>
              <div><label className="text-sm font-medium mb-1.5 block">Relevant Experience <span className="text-muted-foreground font-normal">(optional)</span></label><textarea {...register('experience')} rows={3} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Share any relevant background or skills..." /></div>
              <div><label className="text-sm font-medium mb-1.5 block">Anything Else? <span className="text-muted-foreground font-normal">(optional)</span></label><textarea {...register('message')} rows={3} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Questions, comments, or anything else we should know..." /></div>
              <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-primary hover:bg-teal-700 text-white font-semibold py-3 transition-colors disabled:opacity-60">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
