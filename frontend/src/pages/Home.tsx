import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, PawPrint, Users, BookOpen, ChevronRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const MISSION_CARDS = [
  { icon: PawPrint, title: 'Rescue', desc: 'We pull animals from shelters, surrender situations, and dangerous environments and give them safe harbor.' },
  { icon: Heart,    title: 'Adopt',  desc: 'We match each animal with the right forever family through a thorough, compassionate adoption process.' },
  { icon: BookOpen, title: 'Educate', desc: 'Through humane education and community programs we build a kinder world for animals and people alike.' },
]

const WAYS_TO_HELP = [
  { label: 'Volunteer',        href: '/volunteer',       color: 'bg-teal-50 hover:bg-teal-100 border-teal-200' },
  { label: 'Foster',           href: '/foster-1',        color: 'bg-amber-50 hover:bg-amber-100 border-amber-200' },
  { label: 'Donate',           href: '/donate',          color: 'bg-rose-50 hover:bg-rose-100 border-rose-200' },
  { label: 'Wish List',        href: '/wishlist',        color: 'bg-purple-50 hover:bg-purple-100 border-purple-200' },
  { label: 'Host Fundraiser',  href: '/host-a-fundraiser', color: 'bg-blue-50 hover:bg-blue-100 border-blue-200' },
  { label: 'Shop Everyday',    href: '/shop',            color: 'bg-green-50 hover:bg-green-100 border-green-200' },
]

const STATS = [
  { value: '2,500+', label: 'Animals Rescued' },
  { value: '200+',   label: 'Active Volunteers' },
  { value: '15+',    label: 'Years of Service' },
  { value: '1,000+', label: 'Happy Adopters' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-teal-800 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center py-24">
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-amber-300 font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Avon, Indiana
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Rescue. Love. Repeat.
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-xl md:text-2xl text-teal-100 mb-10 max-w-2xl mx-auto"
          >
            Misty Eyes Animal Center is a nonprofit animal rescue dedicated to giving every animal a loving second chance.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/adoptablepets"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <PawPrint className="h-5 w-5" />
              Meet Our Pets
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white hover:bg-white hover:text-teal-800 transition-colors px-8 py-4 text-lg font-semibold"
            >
              <Heart className="h-5 w-5" />
              Donate
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MISSION_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="text-center p-8 rounded-2xl bg-secondary"
              >
                <card.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured pets CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container text-center">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
          >
            Find Your Forever Friend
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            Browse cats, kittens, dogs, and puppies all looking for loving homes right now.
          </motion.p>
          <Link
            to="/adoptablepets"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            View Adoptable Pets <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Ways to help */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="font-heading text-3xl font-bold text-center mb-2"
          >
            Ways to Help
          </motion.h2>
          <p className="text-center text-muted-foreground mb-10">Every action — big or small — makes a difference.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WAYS_TO_HELP.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <Link
                  to={item.href}
                  className={`flex flex-col items-center justify-center rounded-xl border p-6 text-center font-semibold transition-colors ${item.color}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="container">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="font-heading text-3xl font-bold text-center mb-10"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-amber-300">{stat.value}</p>
                <p className="text-teal-100 mt-2 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Join us at adoption events, fundraisers, and community gatherings.</p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-teal-700 transition-colors shrink-0"
          >
            See All Events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Education & Community</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond rescue and adoption, Misty Eyes is committed to building a more humane community through school programs, student-led initiatives, and outreach events that teach kindness and responsibility toward animals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/humaneeducation" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  Humane Education <ChevronRight className="h-4 w-4" />
                </Link>
                <Link to="/forstudentsbystudents" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  For Students By Students <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-teal-50 border border-teal-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="font-heading text-2xl font-bold text-teal-800">Community First</p>
                <p className="text-teal-600 mt-2">Programs serving schools, youth, and neighborhoods across central Indiana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
