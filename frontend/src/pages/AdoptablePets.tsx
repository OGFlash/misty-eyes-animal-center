import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Filter, Heart, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
}

const DEMO_PETS = [
  { id: 1, name: 'Luna',    species: 'cat', age: 'kitten', gender: 'female', breed: 'Domestic Shorthair', desc: 'Luna is a playful, affectionate kitten who loves cuddles and feather toys. Good with kids.',              photo: '/images/0083_Grey_20Kitten.jpg' },
  { id: 2, name: 'Biscuit', species: 'dog', age: 'adult',  gender: 'male',   breed: 'Beagle Mix',         desc: 'Biscuit is a gentle, loyal beagle mix who loves walks, snuggles, and treat puzzles. House-trained.', photo: '/images/0084_Dog_20Portrait.jpg' },
  { id: 3, name: 'Mochi',   species: 'cat', age: 'adult',  gender: 'female', breed: 'Siamese Mix',        desc: 'Mochi is a confident, chatty Siamese mix who will follow you everywhere. Best as only pet.',          photo: '/images/0085_Cat_20Portrait_edited.png' },
  { id: 4, name: 'Rex',     species: 'dog', age: 'senior', gender: 'male',   breed: 'Labrador Mix',       desc: 'Rex is a calm, loving senior who just wants a warm couch and a gentle family. Low energy.',          photo: '/images/0078_Dog.jpg' },
  { id: 5, name: 'Cleo',    species: 'cat', age: 'kitten', gender: 'female', breed: 'Tabby',               desc: 'Cleo is a spunky tabby kitten bursting with personality. She loves climbing and wand toys.',         photo: '/images/0083_Grey_20Kitten.jpg' },
  { id: 6, name: 'Beau',    species: 'dog', age: 'young',  gender: 'male',   breed: 'Border Collie Mix',  desc: 'Beau is an energetic, smart border collie mix perfect for an active family. Knows basic commands.', photo: '/images/0099_Puppy_20Play.jpg' },
]

export default function AdoptablePets() {
  const [search, setSearch] = useState('')
  const [species, setSpecies] = useState('all')
  const [age, setAge] = useState('all')
  const [gender, setGender] = useState('all')

  const filtered = DEMO_PETS.filter(p => {
    if (species !== 'all' && p.species !== species) return false
    if (age !== 'all' && p.age !== age) return false
    if (gender !== 'all' && p.gender !== gender) return false
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div>
      <PageHero badge="Find Your Match" title="Adoptable Pets" subtitle="Every animal at Misty Eyes is cared for in a loving foster home. Meet our available pets and find your forever companion." />

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white border-b shadow-sm">
        <div className="container py-4">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name..." className="w-full rounded-full border pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <Filter className="h-4 w-4 text-muted-foreground" />
            {[['species', ['all', 'cat', 'dog'], species, setSpecies], ['age', ['all', 'kitten', 'young', 'adult', 'senior'], age, setAge], ['gender', ['all', 'male', 'female'], gender, setGender]].map(([key, opts, val, set]) => (
              <select key={key as string} value={val as string} onChange={e => (set as (v: string) => void)(e.target.value)} className="rounded-full border px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 capitalize">
                {(opts as string[]).map(o => <option key={o} value={o} className="capitalize">{o === 'all' ? `All ${key as string}s` : o}</option>)}
              </select>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 bg-secondary/30">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🐾</p>
              <h3 className="font-heading text-xl font-bold mb-2">No pets match your filters</h3>
              <p className="text-muted-foreground text-sm">Try adjusting your search or check back soon — new animals arrive regularly.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pet, i) => (
                <motion.div key={pet.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="group bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden bg-secondary">
                    <img src={pet.photo} alt={pet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-heading font-bold text-xl">{pet.name}</h3>
                      <button className="text-rose-300 hover:text-rose-500 transition-colors"><Heart className="h-5 w-5" /></button>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 capitalize">{pet.breed} &bull; {pet.age} &bull; {pet.gender}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{pet.desc}</p>
                    <Link to="/adopt/apply" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Apply to Adopt <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground mb-1">Don\'t see your perfect match?</p>
          <p className="text-sm text-muted-foreground">New animals become available regularly. <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> to be added to our waiting list.</p>
        </div>
      </section>
    </div>
  )
}
