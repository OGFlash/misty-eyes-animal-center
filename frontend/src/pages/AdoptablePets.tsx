import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Filter, Heart, X, ArrowRight, ExternalLink } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
}

type Pet = {
  id: number
  name: string
  species: 'cat' | 'dog'
  age: string
  gender: string
  breed: string
  desc: string
  details: string
  photo: string
  bonded?: string
}

const DEMO_PETS: Pet[] = [
  {
    id: 1, name: 'Luna', species: 'cat', age: 'kitten', gender: 'female', breed: 'Domestic Shorthair',
    desc: 'Playful, affectionate kitten. Good with kids.',
    details: 'Luna is a lively, curious kitten who loves chasing feather toys and curling up in laps. She was found as a stray and has blossomed into a social, confident girl. Luna does great with children and would likely get along with other cats. She is spayed, vaccinated, microchipped, and ready for her forever home.',
    photo: '/images/0083_Grey_20Kitten.jpg',
  },
  {
    id: 2, name: 'Biscuit', species: 'dog', age: 'adult', gender: 'male', breed: 'Beagle Mix',
    desc: 'Gentle, loyal beagle mix. House-trained.',
    details: 'Biscuit is a sweet, easy-going beagle mix who loves leisurely walks and snuggling on the couch afterward. He is house-trained, crate-trained, and knows basic commands. Biscuit does well with older children and would love to be the family\'s only dog so he can soak up all the attention.',
    photo: '/images/0084_Dog_20Portrait.jpg',
  },
  {
    id: 3, name: 'Mochi', species: 'cat', age: 'adult', gender: 'female', breed: 'Siamese Mix',
    desc: 'Confident, chatty Siamese mix. Loves following you around.',
    details: 'Mochi is a talkative, opinionated Siamese mix who will tell you exactly how she feels. She is highly affectionate once she trusts you and lives for lap time. Mochi would do best as the only pet in a calm household — she likes to be the center of attention and doesn\'t appreciate competition.',
    photo: '/images/0085_Cat_20Portrait_edited.png',
  },
  {
    id: 4, name: 'Rex', species: 'dog', age: 'senior', gender: 'male', breed: 'Labrador Mix',
    desc: 'Calm, loving senior. Wants a warm couch and a gentle family.',
    details: 'Rex is a dignified 9-year-old Labrador mix with nothing but love to give. He is low-energy, house-trained, and adores gentle petting. Rex is great with adults and calm older children. He would thrive in a quiet home where he can spend his golden years feeling safe and cherished.',
    photo: '/images/0078_Dog.jpg',
  },
  {
    id: 5, name: 'Cleo', species: 'cat', age: 'kitten', gender: 'female', breed: 'Tabby',
    desc: 'Spunky tabby kitten with tons of personality.',
    details: 'Cleo is a bold, adventurous tabby kitten who climbs everything and investigates every corner. She plays hard and snuggles hard in equal measure. Cleo would love a home with another playful cat to keep her company, or a family with the energy to match hers.',
    photo: '/images/0083_Grey_20Kitten.jpg',
  },
  {
    id: 6, name: 'Beau', species: 'dog', age: 'young', gender: 'male', breed: 'Border Collie Mix',
    desc: 'Energetic, smart border collie mix. Knows basic commands.',
    details: 'Beau is a 2-year-old Border Collie mix who is sharp as a tack and eager to please. He knows sit, stay, down, and come, and is ready to learn more. Beau needs daily exercise and mental stimulation — an active family with a yard would be ideal. He loves kids and is working on dog socialization.',
    photo: '/images/0099_Puppy_20Play.jpg',
  },
]

export default function AdoptablePets() {
  const [search, setSearch] = useState('')
  const [species, setSpecies] = useState('all')
  const [age, setAge] = useState('all')
  const [gender, setGender] = useState('all')
  const [selected, setSelected] = useState<Pet | null>(null)

  const filtered = DEMO_PETS.filter(p => {
    if (species !== 'all' && p.species !== species) return false
    if (age !== 'all' && p.age !== age) return false
    if (gender !== 'all' && p.gender !== gender) return false
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div>
      <PageHero badge="Find Your Match" title="Adoptable Pets" subtitle="This list includes all pets currently ready for adoption. Dogs and puppies can be found toward the middle of the page, under the cat and kitten listings." />

      {/* Notice banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container py-3 text-sm text-amber-800">
          <strong>Note:</strong> Click on any pet's name or photo to view their full profile and apply to adopt.
        </div>
      </div>

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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((pet, i) => (
                <motion.button
                  key={pet.id}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  onClick={() => setSelected(pet)}
                  className="group bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow text-left w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  {/* Photo + info side by side */}
                  <div className="flex">
                    <div className="w-32 shrink-0 overflow-hidden bg-secondary">
                      <img src={pet.photo} alt={pet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ minHeight: '120px' }} />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors">{pet.name}</h3>
                          <Heart className="h-4 w-4 text-rose-300 group-hover:text-rose-500 transition-colors shrink-0 mt-0.5" />
                        </div>
                        <p className="text-xs text-muted-foreground mb-2 capitalize">{pet.breed} · {pet.age} · {pet.gender}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{pet.desc}</p>
                      </div>
                      <p className="text-xs font-semibold text-primary mt-3 group-hover:underline">View Profile →</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground mb-1">Don't see your perfect match?</p>
          <p className="text-sm text-muted-foreground">New animals become available regularly. <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> to be added to our waiting list.</p>
        </div>
      </section>

      {/* Pet detail modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="relative">
                <img src={selected.photo} alt={selected.name} className="w-full h-52 object-cover" />
                <button onClick={() => setSelected(null)} className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1.5 shadow transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h2 className="font-heading text-2xl font-bold">{selected.name}</h2>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${selected.species === 'cat' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'}`}>{selected.species}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 capitalize">{selected.breed} · {selected.age} · {selected.gender}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{selected.details}</p>
                <div className="flex gap-3">
                  <Link
                    to="/adoptionprocess"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Adoption Application <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://www.mistyeyes.org/adoptablepets"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    View on Site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
