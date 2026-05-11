import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { adoptionApplicationSchema, type AdoptionApplicationData } from '@/lib/schemas'
import api from '@/lib/api'

const STEPS = ['Applicant Info', 'Household', 'About the Pet', 'Agreement']

export default function AdoptionApplication() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, trigger, formState: { errors, isSubmitting } } = useForm<AdoptionApplicationData>({
    resolver: zodResolver(adoptionApplicationSchema),
    defaultValues: { adultsInHome: 1, childrenInHome: 0, agreeToHomeCheck: false, agreeToTerms: false },
  })

  const STEP_FIELDS: (keyof AdoptionApplicationData)[][] = [
    ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zip'],
    ['housingType', 'adultsInHome', 'childrenInHome'],
    ['whyAdopt', 'experienceWithPets'],
    ['agreeToHomeCheck', 'agreeToTerms'],
  ]

  const next = async () => {
    const valid = await trigger(STEP_FIELDS[step])
    if (valid) setStep(s => s + 1)
  }

  const onSubmit = async (data: AdoptionApplicationData) => {
    try {
      await api.post('/adopt/apply', data)
      setSubmitted(true)
      toast.success('Application submitted! We\'ll review it and be in touch soon.')
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  const input = "w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
  const err = (msg?: string) => msg ? <p className="text-xs text-destructive mt-1">{msg}</p> : null

  return (
    <div>
      <PageHero badge="Adopt" title="Adoption Application" subtitle="Fill out our adoption application and we'll match you with the perfect companion. All fields help us ensure the best fit for both you and the animal." />

      <section className="py-16 bg-secondary/30">
        <div className="container max-w-2xl">
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-10">
            {STEPS.map((label, i) => (
              <div key={label} className="flex-1 flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i < step ? 'bg-primary text-white' : i === step ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-border text-muted-foreground'}`}>
                    {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 hidden sm:block">{label}</span>
                </div>
                {i < STEPS.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < step ? 'bg-primary' : 'bg-border'}`} />}
              </div>
            ))}
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-teal-50 border border-teal-200 rounded-2xl p-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-teal-500 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-teal-800 mb-2">Application Submitted!</h3>
              <p className="text-teal-600 mb-6">Thank you for applying to adopt. Our team will review your application and contact you within a few business days.</p>
              <a href="/adoptable-pets" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">Browse More Pets</a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                    <h3 className="font-heading font-bold text-lg mb-1">Your Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="text-sm font-medium mb-1 block">First Name</label><input {...register('firstName')} className={input} />{err(errors.firstName?.message)}</div>
                      <div><label className="text-sm font-medium mb-1 block">Last Name</label><input {...register('lastName')} className={input} />{err(errors.lastName?.message)}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="text-sm font-medium mb-1 block">Email</label><input {...register('email')} type="email" className={input} />{err(errors.email?.message)}</div>
                      <div><label className="text-sm font-medium mb-1 block">Phone</label><input {...register('phone')} className={input} />{err(errors.phone?.message)}</div>
                    </div>
                    <div><label className="text-sm font-medium mb-1 block">Address</label><input {...register('address')} className={input} />{err(errors.address?.message)}</div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1"><label className="text-sm font-medium mb-1 block">City</label><input {...register('city')} className={input} /></div>
                      <div><label className="text-sm font-medium mb-1 block">State</label><input {...register('state')} className={input} defaultValue="IN" /></div>
                      <div><label className="text-sm font-medium mb-1 block">ZIP</label><input {...register('zip')} className={input} /></div>
                    </div>
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                    <h3 className="font-heading font-bold text-lg mb-1">Your Household</h3>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Housing Type</label>
                      <div className="flex gap-3">
                        {['own', 'rent', 'other'].map(v => (<label key={v} className="flex items-center gap-2 cursor-pointer"><input type="radio" {...register('housingType')} value={v} className="accent-primary" /><span className="text-sm capitalize">{v}</span></label>))}
                      </div>
                      {err(errors.housingType?.message)}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="text-sm font-medium mb-1 block">Adults in Home</label><input type="number" {...register('adultsInHome', { valueAsNumber: true })} min={1} className={input} />{err(errors.adultsInHome?.message)}</div>
                      <div><label className="text-sm font-medium mb-1 block">Children in Home</label><input type="number" {...register('childrenInHome', { valueAsNumber: true })} min={0} className={input} />{err(errors.childrenInHome?.message)}</div>
                    </div>
                    <div><label className="text-sm font-medium mb-1 block">Ages of Children <span className="text-muted-foreground font-normal">(optional)</span></label><input {...register('childAges')} className={input} placeholder="e.g. 5, 9, 12" /></div>
                    <div><label className="text-sm font-medium mb-1 block">Current Pets <span className="text-muted-foreground font-normal">(optional)</span></label><input {...register('currentPets')} className={input} placeholder="e.g. 1 dog, 2 cats" /></div>
                    <div><label className="text-sm font-medium mb-1 block">Pet of Interest <span className="text-muted-foreground font-normal">(optional)</span></label><input {...register('petOfInterest')} className={input} placeholder="Name of pet, or leave blank for general inquiry" /></div>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                    <h3 className="font-heading font-bold text-lg mb-1">About You & Your New Pet</h3>
                    <div><label className="text-sm font-medium mb-1 block">Why do you want to adopt?</label><textarea {...register('whyAdopt')} rows={4} className={`${input} resize-none`} placeholder="Tell us about your motivation and what kind of companion you're looking for..." />{err(errors.whyAdopt?.message)}</div>
                    <div><label className="text-sm font-medium mb-1 block">Experience with Pets</label><textarea {...register('experienceWithPets')} rows={3} className={`${input} resize-none`} placeholder="Describe your history with pets, both current and past..." />{err(errors.experienceWithPets?.message)}</div>
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                    <h3 className="font-heading font-bold text-lg mb-1">Agreements</h3>
                    <div className="bg-secondary/50 rounded-xl p-5 text-sm text-muted-foreground leading-relaxed">
                      <p className="mb-3">By submitting this application you agree to:</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Allow Misty Eyes staff to conduct a home check prior to adoption finalization</li>
                        <li>Provide a safe, loving, permanent home for the adopted animal</li>
                        <li>Keep all veterinary care up to date</li>
                        <li>Contact Misty Eyes if you can no longer care for the animal</li>
                      </ul>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" {...register('agreeToHomeCheck')} className="mt-0.5 accent-primary" />
                      <span className="text-sm">I agree to a home check as part of the adoption process</span>
                    </label>
                    {err(errors.agreeToHomeCheck?.message)}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" {...register('agreeToTerms')} className="mt-0.5 accent-primary" />
                      <span className="text-sm">I have read and agree to the adoption terms and conditions</span>
                    </label>
                    {err(errors.agreeToTerms?.message)}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                <button type="button" onClick={() => setStep(s => s - 1)} disabled={step === 0} className="inline-flex items-center gap-1.5 rounded-full border px-5 py-2 text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-40">
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                {step < STEPS.length - 1 ? (
                  <button type="button" onClick={next} className="inline-flex items-center gap-1.5 rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold hover:bg-teal-700 transition-colors">
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-1.5 rounded-full bg-primary text-white px-6 py-2 text-sm font-semibold hover:bg-teal-700 transition-colors disabled:opacity-60">
                    {isSubmitting ? 'Submitting...' : 'Submit Application'} <CheckCircle2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
