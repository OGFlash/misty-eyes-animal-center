import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const CATEGORIES = [
  {
    title: 'For Pet Owners',
    links: [
      { label: 'Low-Cost Spay/Neuter Programs', href: 'https://www.hsus.org', ext: true },
      { label: 'Indiana Animal Control Directory', href: '#', ext: false },
      { label: 'Lost & Found Resources', href: '/lost-and-found', ext: false },
      { label: 'Pet Food Assistance Programs', href: '#', ext: false },
      { label: 'Dog Training Tips', href: '/dog-training', ext: false },
    ],
  },
  {
    title: 'Reporting & Safety',
    links: [
      { label: 'Report Animal Abuse', href: '/animal-abuse', ext: false },
      { label: 'Puppy Mills: What to Know', href: '/puppy-mills', ext: false },
      { label: 'ASPCA Animal Poison Control', href: 'https://www.aspca.org/pet-care/animal-poison-control', ext: true },
      { label: 'Indiana State Animal Laws', href: '#', ext: false },
    ],
  },
  {
    title: 'Partner Organizations',
    links: [
      { label: 'Humane Society of the United States', href: 'https://www.hsus.org', ext: true },
      { label: 'ASPCA', href: 'https://www.aspca.org', ext: true },
      { label: 'Best Friends Animal Society', href: 'https://bestfriends.org', ext: true },
      { label: 'Petfinder', href: 'https://www.petfinder.com', ext: true },
    ],
  },
]

export default function Resources() {
  return (
    <div>
      <PageHero badge="Helpful Links" title="Resources" subtitle="A curated collection of resources for pet owners, animal advocates, and community members." />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {CATEGORIES.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-secondary/50 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg mb-5 pb-3 border-b">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.links.map(link => (
                    <li key={link.label}>
                      {link.ext ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1.5">
                          {link.label} <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <Link to={link.href} className="text-sm text-primary hover:underline flex items-center gap-1.5">
                          {link.label} <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
