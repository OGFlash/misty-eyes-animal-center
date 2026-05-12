import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Heart, PawPrint, BookOpen, ChevronRight, X, PlayCircle } from 'lucide-react'

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

const VIDEO_ID = 'BU5F6u0s9fY'
const SESSION_KEY = 'mistyeyes_video_seen'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    const timer = setTimeout(() => setShowModal(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  function closeModal() {
    setShowModal(false)
    sessionStorage.setItem(SESSION_KEY, '1')
  }

  return (
    <div>
      {/* Video modal — auto-opens after 4s, once per session */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              key="video-modal-panel"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 rounded-full bg-black/60 hover:bg-black/80 text-white p-1.5 transition-colors"
                aria-label="Close video"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Warning header */}
              <div className="bg-orange-500 text-white text-center py-3 px-6">
                <p className="font-bold text-sm tracking-wide uppercase">
                  ⚠️ WARNING: This video may cause tail wags and unexpected generosity
                </p>
              </div>

              {/* Text */}
              <div className="px-8 pt-5 pb-4 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                  Our volunteers and animals recently starred in a joyful new video that captures the heart of Misty Eyes — compassion, second chances, wagging tails, and happy, hopeful futures!
                </p>
                <p className="font-bold text-sm">Check it out!</p>
              </div>

              {/* YouTube embed */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="Welcome to Misty Eyes Animal Center"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/misty_eyes_building.jpg"
            alt="Misty Eyes Animal Center — Avon, Indiana"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/75 via-teal-900/60 to-teal-900/80" />
        </div>
        <div className="container relative z-10 text-center py-24">
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="font-heading text-5xl md:text-7xl font-bold mb-3 leading-tight"
          >
            Misty Eyes Animal Center
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-amber-300 font-bold tracking-widest uppercase text-sm mb-6"
          >
            Rescue. Love. Repeat. &nbsp;·&nbsp; Avon, Indiana
          </motion.p>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-xl md:text-2xl text-teal-100 mb-10 max-w-2xl mx-auto"
          >
            A nonprofit animal rescue dedicated to giving every animal a loving second chance.
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
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/40 transition-colors px-6 py-4 text-base font-semibold"
            >
              <PlayCircle className="h-5 w-5" />
              Watch Our Story
            </button>
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
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/0051_Community_20Outreach_202_edited.jpg"
                alt="Misty Eyes community outreach"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-12 bg-secondary/40 border-t">
        <div className="container">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">Thank You to Our Supporters</p>
          <div className="flex flex-wrap items-center justify-center gap-10 grayscale opacity-60 hover:opacity-80 transition-opacity">
            {[
              { src: '/images/0006_BAC_logo.jpg',               alt: 'BAC Logo' },
              { src: '/images/0008_barkefellers-logo.png',      alt: 'Barkefellers' },
              { src: '/images/0011_USA-Roofing-footer-logo.png',alt: 'USA Roofing' },
              { src: '/images/0014_AndyMohrLogo_FORD_2016.jpg', alt: 'Andy Mohr Ford' },
              { src: '/images/0020_Kenneth_20Scott_20logo.png', alt: 'Kenneth Scott' },
            ].map(s => (
              <img key={s.alt} src={s.src} alt={s.alt} className="h-10 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
