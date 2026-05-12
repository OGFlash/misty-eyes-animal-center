import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@/components/ui/PageHero'
import { contactSchema, type ContactFormData } from '@/lib/schemas'
import api from '@/lib/api'

const STAFF = [
  { name: 'Jennifer', role: 'President & Founder', email: 'adoption@mistyeyes.org' },
  { name: 'Angie', role: 'Adoption Counselor', email: 'Adoption@MistyEyes.org' },
  { name: 'Terry', role: 'Volunteer Coordinator', email: 'Terry@mistyeyes.org' },
  { name: 'Ida', role: 'Foster Coordinator', email: 'foster@mistyeyes.org' },
  { name: 'JV', role: 'Programs Director', email: 'JV@MistyEyes.org' },
  { name: 'Sheryl', role: 'Outreach Coordinator', email: 'sheryl@mistyeyes.org' },
]

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await api.post('/contact', data)
      setSubmitted(true)
      toast.success('Message sent! We\'ll be in touch soon.')
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <PageHero badge="Get In Touch" title="Contact Us" subtitle="We\'d love to hear from you. Reach out with questions about adoption, volunteering, fostering, or anything else." />

      <section className="bg-amber-50 border-b border-amber-200">
        <div className="container py-4 flex items-center gap-3">
          <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
          <p className="text-sm text-amber-800">If you need to surrender a pet, please do not show up unannounced. <Link to="/owner-surrender" className="font-semibold underline">Learn about the surrender process here.</Link></p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">

            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-8">Location & Hours</h2>
              <div className="space-y-5 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0"><MapPin className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Adoption Center</p>
                    <p className="text-sm text-muted-foreground">616 S. County Rd. 800 E.<br />Avon, Indiana 46123</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0"><MapPin className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Mailing Address</p>
                    <p className="text-sm text-muted-foreground">P.O. Box 1202<br />Brownsburg, Indiana 46112</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0"><Phone className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Phone</p>
                    <a href="tel:3178588022" className="text-sm text-primary hover:underline">317-858-8022</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0"><Mail className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Email</p>
                    <a href="mailto:Adoption@MistyEyes.org" className="text-sm text-primary hover:underline">Adoption@MistyEyes.org</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0"><Clock className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Public Hours</p>
                    <div className="text-sm text-muted-foreground space-y-0.5">
                      <p>Saturday &amp; Sunday: 10:00 AM – 1:00 PM</p>
                      <p>Tuesday: 5:00 PM – 7:00 PM</p>
                      <p>Also by appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-lg font-bold mb-5">Staff Directory</h3>
              <div className="grid grid-cols-2 gap-3">
                {STAFF.map(s => (
                  <div key={s.email} className="bg-secondary rounded-xl p-4">
                    <p className="font-semibold text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground mb-1.5">{s.role}</p>
                    <a href={`mailto:${s.email}`} className="text-xs text-primary hover:underline break-all">{s.email}</a>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-8">Send a Message</h2>
              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
                  <Mail className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-teal-800 mb-2">Message Sent!</h3>
                  <p className="text-teal-600">Thank you for reaching out. We\'ll respond as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium mb-1.5 block">Name</label><input {...register('name')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" />{errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}</div>
                    <div><label className="text-sm font-medium mb-1.5 block">Email</label><input {...register('email')} type="email" className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@example.com" />{errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}</div>
                  </div>
                  <div><label className="text-sm font-medium mb-1.5 block">Phone <span className="text-muted-foreground font-normal">(optional)</span></label><input {...register('phone')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="(317) 555-0100" /></div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Subject</label>
                    <select {...register('subject')} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
                      <option value="">Select a subject...</option>
                      <option>Adoption Inquiry</option>
                      <option>Volunteering</option>
                      <option>Fostering</option>
                      <option>Donation</option>
                      <option>Events</option>
                      <option>General Inquiry</option>
                    </select>
                    {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
                  </div>
                  <div><label className="text-sm font-medium mb-1.5 block">Message</label><textarea {...register('message')} rows={5} className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="How can we help you?" />{errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}</div>
                  <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-primary hover:bg-teal-700 text-white font-semibold py-3 transition-colors disabled:opacity-60">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl font-bold mb-2 text-center">Find Us</h2>
            <p className="text-muted-foreground text-sm text-center mb-8">616 S. County Rd. 800 E., Avon, Indiana 46123</p>
            <div className="rounded-2xl overflow-hidden shadow-md border">
              <iframe
                title="Misty Eyes Animal Center"
                src="https://maps.google.com/maps?q=616+S.+County+Rd.+800+E.,+Avon,+IN+46123&z=15&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="https://maps.google.com/?q=616+S+County+Rd+800+E,+Avon,+IN+46123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
