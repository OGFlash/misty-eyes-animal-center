import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'

export default function CommunityOutreach() {
  return (
    <div>
      <PageHero badge="Outreach" title="Community Outreach" subtitle="Bringing Misty Eyes right to your doorstep — fostering connections and making a positive impact in our local neighborhoods." />

      {/* ── Intro ── */}
      <section className="py-16 bg-amber-400">
        <div className="container max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
            <div>
              <p className="font-bold text-gray-900 mb-2">Welcome to the heart of Misty Eyes Animal Center's Community Outreach initiative!</p>
              <p className="text-sm text-gray-900 leading-relaxed">
                Our dedicated team of volunteers is on a mission to bring Misty Eyes right to your doorstep, fostering connections and making a positive impact in our local neighborhoods.
              </p>
            </div>
            <div>
              <p className="font-bold text-primary mb-2">At Misty Eyes, we believe in the power of community.</p>
              <p className="text-sm text-gray-900 leading-relaxed">
                Our Community Outreach team embodies this spirit by actively participating in various events throughout the year. Whether it's setting up engaging booths at community events, hosting delightful fundraisers like dine-to-donate events at popular restaurants, or collaborating on creative projects that raise funds while spreading awareness about the Misty Eyes mission,{' '}
                <em className="font-semibold">we're all about making a difference together.</em>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Photos ── */}
      <section className="py-12 bg-amber-400">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src="/images/0041_outreach_tent.jpg" alt="Misty Eyes outreach tent at community event" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src="/images/0042_outreach_booth.jpg" alt="Misty Eyes outreach booth banner" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="py-12 bg-amber-300">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-amber-200/70 rounded-2xl p-8 text-center text-sm text-gray-900 leading-relaxed space-y-3">
            <p>
              Please join us on the 1st Wednesday of every month - either in person at the Adoption Center or virtually via Zoom - as we brainstorm, plan, and execute initiatives that touch the lives of both our furry friends and the wonderful people who support us.
            </p>
            <p>
              If you're passionate about making a positive impact and have ideas that can help us grow, we want you on our team! Please contact{' '}
              <a href="mailto:outreach@mistyeyes.org" className="font-bold underline text-primary hover:text-teal-700">
                outreach@mistyeyes.org
              </a>{' '}
              to join the committee and help build a stronger, more compassionate community for our beloved animals -{' '}
              <em className="font-semibold">together.</em>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
