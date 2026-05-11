import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Heart, Home, Shield, ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { fosterSchema, type FosterFormData } from '@/lib/schemas'
import api from '@/lib/api'

const BENEFITS = [
  'Misty Eyes provides all food, supplies, toys, and veterinary care',
  'You provide the love, Misty Eyes provides the rest',
  'Help animals adjust to home life before adoption',
  'Your insight helps us find the ideal forever home',
  'Each foster adopted means you can save another life',
]

const HOUSING = ['own', 'rent', 'other'] as const
const FOSTER_TYPES = ['Cats / Kittens', 'Dogs / Puppies', 'Neonatal Kittens', 'Medical Fosters', 'Senior Pets']

export default function Foster() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<FosterFormData>({ resolver: zodResolver(fosterSchema), defaultValues: { fosterTypes: [] } })
  const fosterTypes = watch('fosterTypes') ?? []
  const toggleType = (v: string) => setValue('fosterTypes', fosterTypes.includes(v) ? fosterTypes.filter(x => x !== v) : [...fosterTypes, v])

  const onSubmit = async (data: FosterFormData) => {
    try {
      await api.post('/foster/apply', data)
      setSubmitted(true)
      toast.success('Foster application submitted!')
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <PageHero badge="Save a Life" title="Become a Foster" subtitle="Misty Eyes Animal Center is a foster-based rescue. When you foster, you allow us to save more homeless pets. Fosters provide the love — Misty Eyes provides the rest.">
        <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-3 font-semibold transition-colors">
          Apply to Foster <ArrowRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="bg-red-50 border-b border-red-100">
        <div className="container py-5 flex items-start gap-4">
          <div className="bg-red-100 rounded-full p-2 shrink-0 mt-0.5"><Heart className="h-4 w-4 text-red-500" /></div>
          <p className="text-sm text-red-800">
            <strong>Urgent Need:</strong> With local rescues and shelters in crisis, our surrender requests are the highest we\'ve ever seen. Without foster homes, most pets will likely be euthanized. Your home could save a life today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold mb-5">Why Foster?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Misty Eyes can only accept animals when foster homes are available. Fostering introduces pets to life in a stable, loving home — and your unique knowledge of the pet helps us find the ideal forever family.</p>
              <p className="text-muted-foreground leading-relaxed mb-8">Yes, it\'s bittersweet to say goodbye when your foster gets adopted. But the alternative — euthanasia — is far more painful. Each time your foster is adopted, you can go on to save another.</p>
              <div className="space-y-3">
                {BENEFITS.map(b => (<div key={b} className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" /><p className="text-sm">{b}</p></div>))}
              </div>
              <a href="mailto:Ida@MistyEyes.org" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:underline">
                <Mail className="h-4 w-4" /> Questions? Email Ida@MistyEyes.org
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Home, label: 'Home-Based Care', desc: 'Pets stay in your home, not a kennel' },
                  { icon: Shield, label: 'Fully Supported', desc: 'All supplies and vet care provided' },
                  { icon: Heart, label: 'Save Lives', desc: 'Each foster home saves multiple pets' },
                  { icon: CheckCircle2, label: 'Flexible Terms', desc: 'Short or long-term — your choice' },
                ].map(item => (
                  <div key={item.label} className="bg-teal-50 rounded-2xl p-5 border border-teal-100">
                    <item.icon className="h-6 w-6 text-primary mb-3" />
                    <p className="font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 bg-secondary/50">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-3">Foster Application</h2>
            <p className="text-muted-foreground">Apply to become a Misty Eyes foster family. Our team will review your application and reach out soon.</p>
          </motion.div>

          {submitted ? (
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
              <Heart className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-teal-800 mb-2">Application Received!</h3>
              <p className="text-teal-600">Thank you for opening your heart and home. Our foster coordinator will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border p-8 shadow-sm space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium mb-1.5 block">First Name</label><input {...register('firstName')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />{errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName.message}</p>}</div>
                <div><label className="text-sm font-medium mb-1.5 block">Last Name</label><input {...register('lastName')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />{errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName.message}</p>}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium mb-1.5 block">Email</label><input {...register('email')} type="email" className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />{errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}</div>
                <div><label className="text-sm font-medium mb-1.5 block">Phone</label><input {...register('phone')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />{errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}</div>
              </div>
              <div><label className="text-sm font-medium mb-1.5 block">Street Address</label><input {...register('address')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1"><label className="text-sm font-medium mb-1.5 block">City</label><input {...register('city')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
                <div><label className="text-sm font-medium mb-1.5 block">State</label><input {...register('state')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" defaultValue="IN" /></div>
                <div><label className="text-sm font-medium mb-1.5 block">ZIP</label><input {...register('zip')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Housing Type</label>
                <div className="flex gap-3">
                  {HOUSING.map(h => (<label key={h} className="flex items-center gap-2 cursor-pointer"><input type="radio" {...register('housingType')} value={h} className="accent-primary" /><span className="text-sm capitalize">{h}</span></label>))}
                </div>
              </div>
              <div><label className="text-sm font-medium mb-1.5 block">Current Pets <span className="text-muted-foreground font-normal">(optional)</span></label><input {...register('currentPets')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="e.g. 1 dog, 2 cats" /></div>
              <div>
                <label className="text-sm font-medium mb-2 block">I can foster</label>
                <div className="flex flex-wrap gap-2">
                  {FOSTER_TYPES.map(t => (<button key={t} type="button" onClick={() => toggleType(t)} className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${fosterTypes.includes(t) ? 'bg-primary text-white border-primary' : 'border-border hover:border-primary'}`}>{t}</button>))}
                </div>
                {errors.fosterTypes && <p className="text-xs text-destructive mt-1">{errors.fosterTypes.message}</p>}
              </div>
              <div><label className="text-sm font-medium mb-1.5 block">Experience with Pets <span className="text-muted-foreground font-normal">(optional)</span></label><textarea {...register('experience')} rows={3} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Tell us about your experience with animals..." /></div>
              <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-primary hover:bg-teal-700 text-white font-semibold py-3 transition-colors disabled:opacity-60">
                {isSubmitting ? 'Submitting...' : 'Submit Foster Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
