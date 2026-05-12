import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Filter, Heart, X, ArrowRight, ExternalLink, Loader2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import api from '@/lib/api'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
}

// Petango auth key (used for "View on Site" external link only — never for server auth)
const AUTH_KEY = 'ishtxjls2bflhq8x02sbyu2ece0hu45k6hrggw161rq8ga07yy'

// ── Types ─────────────────────────────────────────────────────────────────────

type PetSummary = {
  animal_id: string
  name: string
  species: string       // "Cat" | "Dog" | …
  breed: string
  age: string           // "2 years 3 months"
  age_category: string  // "kitten" | "young" | "adult" | "senior"
  gender: string        // "male" | "female"
  gender_status: string // "Male/Neutered"
  location: string
  photo_url: string
}

type PetDetail = PetSummary & {
  Description?: string
  'Photo URL'?: string
  photos?: string[]
  Color?: string
  Size?: string
  'Spayed/Neutered'?: string
  Declawed?: string
  Housetrained?: string
  'Adoption Price'?: string
  'Intake Date'?: string
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AdoptablePets() {
  const [pets, setPets] = useState<PetSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [search, setSearch] = useState('')
  const [species, setSpecies] = useState('all')
  const [age, setAge] = useState('all')
  const [gender, setGender] = useState('all')

  const [selected, setSelected] = useState<PetSummary | null>(null)
  const [detail, setDetail] = useState<PetDetail | null>(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  // Fetch list on mount
  useEffect(() => {
    setLoading(true)
    api
      .get<{ pets: PetSummary[]; total: number }>('/pets')
      .then((res) => setPets(res.data.pets))
      .catch((err: Error) => setError(err.message ?? 'Failed to load pets.'))
      .finally(() => setLoading(false))
  }, [])

  // Fetch full details when a pet is selected
  useEffect(() => {
    if (!selected) { setDetail(null); return }
    setDetailLoading(true)
    setPhotoIndex(0)
    api
      .get<PetDetail>(`/pets/${selected.animal_id}`)
      .then((res) => setDetail(res.data))
      .catch(() => setDetail(null))
      .finally(() => setDetailLoading(false))
  }, [selected])

  const speciesLower = (s: string) => s.toLowerCase()

  const filtered = pets.filter((p) => {
    if (species !== 'all' && speciesLower(p.species) !== species) return false
    if (age !== 'all' && p.age_category !== age) return false
    if (gender !== 'all' && p.gender !== gender) return false
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const photoFor = (p: PetSummary, d?: PetDetail | null) =>
    d?.['Photo URL'] || p.photo_url || ''

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
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name…" className="w-full rounded-full border pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <Filter className="h-4 w-4 text-muted-foreground" />
            {(
              [
                ['species', ['all', 'cat', 'dog'], species, setSpecies, 'All Species'],
                ['age',     ['all', 'kitten', 'young', 'adult', 'senior'], age, setAge, 'All Ages'],
                ['gender',  ['all', 'male', 'female'], gender, setGender, 'All Genders'],
              ] as [string, string[], string, (v: string) => void, string][]
            ).map(([key, opts, val, set, allLabel]) => (
              <select key={key} value={val} onChange={e => set(e.target.value)} className="rounded-full border px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 capitalize">
                {opts.map(o => <option key={o} value={o} className="capitalize">{o === 'all' ? allLabel : o}</option>)}
              </select>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 bg-secondary/30">
        <div className="container">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-muted-foreground">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="text-sm">Loading adoptable pets…</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3 text-muted-foreground">
              <AlertCircle className="h-10 w-10 text-destructive" />
              <p className="text-sm font-semibold">{error}</p>
              <p className="text-xs">Please try refreshing the page or check back shortly.</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🐾</p>
              <h3 className="font-heading text-xl font-bold mb-2">No pets match your filters</h3>
              <p className="text-muted-foreground text-sm">Try adjusting your search or check back soon — new animals arrive regularly.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((pet, i) => (
                <motion.button
                  key={pet.animal_id}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  onClick={() => setSelected(pet)}
                  className="group bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-all duration-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-primary/40 flex"
                >
                  {/* Photo — left column, fills full card height */}
                  <div className="relative w-36 shrink-0 self-stretch overflow-hidden bg-secondary">
                    {pet.photo_url ? (
                      <img
                        src={pet.photo_url}
                        alt={pet.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement
                          el.style.display = 'none'
                          const parent = el.parentElement
                          if (parent) parent.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-5xl">${speciesLower(pet.species) === 'cat' ? '🐱' : '🐶'}</div>`
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-5xl">
                        {speciesLower(pet.species) === 'cat' ? '🐱' : '🐶'}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading font-bold text-base leading-tight group-hover:text-primary transition-colors">{pet.name}</h3>
                        <Heart className="h-4 w-4 text-rose-300 group-hover:text-rose-500 transition-colors shrink-0 mt-0.5" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${speciesLower(pet.species) === 'cat' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'}`}>{pet.species}</span>
                        <span className="text-xs bg-secondary text-foreground/70 px-2 py-0.5 rounded-full capitalize">{pet.gender_status}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">{pet.breed || '—'}</p>
                      <p className="text-xs text-muted-foreground">{pet.age}</p>
                    </div>
                    <p className="text-xs font-semibold text-primary mt-3 group-hover:underline">View Profile →</p>
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
          <p className="text-sm text-muted-foreground">New animals become available regularly. <Link to="/contact-us" className="text-primary font-semibold hover:underline">Contact us</Link> to be added to our waiting list.</p>
        </div>
      </section>

      {/* Pet detail modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop — also closes modal on click */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo carousel */}
                {(() => {
                  const photos = detail?.photos?.length ? detail.photos : [photoFor(selected, detail)].filter(Boolean)
                  const current = photos[photoIndex] || ''
                  const hasMultiple = photos.length > 1
                  return (
                    <div className="relative shrink-0 bg-gray-100 flex items-center justify-center" style={{ minHeight: '14rem' }}>
                      <img
                        key={current}
                        src={current}
                        alt={selected.name}
                        className="w-full max-h-64 object-contain"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                      />
                      {/* Close */}
                      <button onClick={() => setSelected(null)} className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1.5 shadow transition-colors z-10">
                        <X className="h-4 w-4" />
                      </button>
                      {/* Prev / Next */}
                      {hasMultiple && (
                        <>
                          <button
                            onClick={() => setPhotoIndex((photoIndex - 1 + photos.length) % photos.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => setPhotoIndex((photoIndex + 1) % photos.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                          {/* Dot indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {photos.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setPhotoIndex(idx)}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                  idx === photoIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )
                })()}

                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <div className="flex items-start justify-between mb-1">
                    <h2 className="font-heading text-2xl font-bold">{selected.name}</h2>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${speciesLower(selected.species) === 'cat' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'}`}>
                      {selected.species}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{selected.breed || selected.species} · {selected.age} · {selected.gender_status}</p>

                  {detailLoading ? (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Loader2 className="h-4 w-4 animate-spin" /> Loading profile…
                    </div>
                  ) : detail ? (
                    <>
                      {/* Quick-glance badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {detail.Color && <span className="text-xs bg-secondary px-2.5 py-1 rounded-full">{detail.Color}</span>}
                        {detail.Size && <span className="text-xs bg-secondary px-2.5 py-1 rounded-full">{detail.Size}</span>}
                        {detail['Spayed/Neutered'] === 'Yes' && <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full">Spayed / Neutered</span>}
                        {detail.Housetrained === 'Yes' && <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">House-trained</span>}
                        {detail['Adoption Price'] && <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">{detail['Adoption Price']}</span>}
                      </div>
                      {detail.Description && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{detail.Description}</p>
                      )}
                    </>
                  ) : null}

                  <div className="flex gap-3">
                    <Link
                      to="/adoptionprocess"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors"
                    >
                      Adoption Application <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=${selected.animal_id}&css=&authkey=${AUTH_KEY}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
                    >
                      View on Site <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
