import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Target, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { cn } from '@/lib/utils'

const ABOUT_TABS = [
  { label: 'About Us',        href: '/about-us' },
  { label: 'Leadership Team', href: '/leadership' },
  { label: 'Contact Us',      href: '/contact-us' },
]

function AboutSubNav() {
  const { pathname } = useLocation()
  return (
    <div className="border-b bg-white">
      <div className="container">
        <nav className="flex gap-1 overflow-x-auto">
          {ABOUT_TABS.map(tab => (
            <Link
              key={tab.href}
              to={tab.href}
              className={cn(
                'shrink-0 px-5 py-3.5 text-sm font-medium border-b-2 transition-colors',
                pathname === tab.href
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border',
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const VALUES = [
  { icon: Users, title: 'Team Work', desc: 'Every volunteer, foster, and donor is part of one unified team working toward a common goal.' },
  { icon: Shield, title: 'Integrity', desc: 'We operate transparently, with honesty and accountability in everything we do.' },
  { icon: Target, title: 'Professionalism', desc: 'We hold ourselves to the highest standards in animal care, adoption counseling, and community education.' },
  { icon: Heart, title: 'Kindness', desc: 'Compassion guides every interaction — with animals, adopters, fosters, volunteers, and the community.' },
]

const MILESTONES = [
  { year: '2009', text: 'Founders Renee Harlor and Cherie Fox meet while volunteering for Our Lil Bit Of Heaven in Poland, Indiana.' },
  { year: '2011', text: 'Misty Eyes Animal Center is officially founded in October, adopting core values of Team Work, Integrity, Professionalism, and Kindness.' },
  { year: '2013', text: 'In just two years, the organization turned away over 5,400 animals due to space constraints — driving the urgency for a permanent facility.' },
  { year: 'Phase 1', text: 'First phase of the permanent facility is completed — the Adoption Center opens in Avon, Indiana.' },
  { year: 'Kitty City', text: 'Dedicated cat shelter building opens, dramatically expanding capacity for cats and kittens.' },
  { year: 'Today', text: 'Raising funds for a dog building, education & training center, and garden area with walking paths.' },
]

export default function AboutUs() {
  return (
    <div>
      <PageHero badge="Our Story" title="About Misty Eyes Animal Center" subtitle="A 100% volunteer-run nonprofit dedicated to ending the needless euthanasia of pets throughout Indiana, one rescue at a time." />
      <AboutSubNav />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">How It All Began</span>
              <h2 className="font-heading text-3xl font-bold mb-5">From a Shared Passion to a Lasting Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Renee Harlor and Cherie Fox were introduced in 2009 while volunteering for Our Lil Bit Of Heaven, a dog rescue in Poland, Indiana. Over the next two years, they spent their time separately working to save the lives of homeless animals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                It wasn't until a September evening two years later that the two actually had a conversation. They will tell you it was simply a case of "too many animals being euthanized, a lot of talk and a lot of negativity, but no action" that brought them together.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                They agreed it was time to fill the void in Hendricks County. Thus, Misty Eyes Animal Center was founded in October 2011.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="font-heading text-xl font-bold text-teal-800 mb-6">Our Mission</h3>
              <p className="text-teal-700 leading-relaxed text-lg font-medium mb-6 italic">
                "It is the mission of Misty Eyes to end the needless euthanasia of domesticated pets throughout Indiana, to reduce owner surrenders and to teach responsible pet ownership and kindness towards all living things."
              </p>
              <div className="space-y-3">
                {[
                  '100% volunteer-run — no paid employees',
                  'No government funding — supported entirely by community',
                  '501(c)(3) charitable organization',
                  'Operates on a balanced-budget principle for long-term sustainability',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-teal-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/0061_102-IMG_9474.jpg', alt: 'Misty Eyes volunteers' },
              { src: '/images/0062_424810_410873608980755_1219081742_n.jpg', alt: 'Misty Eyes community' },
              { src: '/images/0063_Collecting_20Donations.jpg', alt: 'Collecting Donations' },
              { src: '/images/0064_Cat_20and_20Dog.jpg', alt: 'Cat and Dog' },
            ].map((photo, i) => (
              <motion.div key={photo.src} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="rounded-2xl overflow-hidden aspect-square">
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="bg-white rounded-2xl p-6 border text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Our Journey</h2>
            <p className="text-muted-foreground">From a conversation between two volunteers to a thriving community anchor.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-100" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="flex gap-6 pl-16 relative">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold text-center leading-tight">{m.year}</div>
                  <p className="text-muted-foreground leading-relaxed pt-3">{m.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 border">
              <h3 className="font-heading text-xl font-bold mb-4">Financial Transparency</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Misty Eyes Animal Center is a 501(c)(3) charitable organization. We do not receive any government funding. Our funds come from personal and corporate contributions, fundraisers, and grants.</p>
              <p className="text-muted-foreground leading-relaxed">We operate under the principal of a balanced budget — we will never take on more than we can handle financially, which ensures our long-term sustainability.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-teal-700 text-white rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Our Future</h3>
              <p className="text-teal-100 leading-relaxed mb-4">Building a permanent facility has always been our goal. Our facility is being developed in phases. Phase one — the Adoption Center — is complete. Next up: an expanded dog building, an education and training center, and a garden area with walking paths.</p>
              <Link to="/donate" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors">
                Support Our Future <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
