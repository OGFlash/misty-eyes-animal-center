import { motion } from 'framer-motion'
import { Building2, Cat } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const ADMIN_OPPS = [
  { price: '$250,000', label: 'Admin Building Naming Rights' },
  { price: '$10,000',  label: 'Dog Training Room' },
]

const KITTY_OPPS = [
  { price: '$250,000', label: 'Kitty City Building Naming Rights', highlight: true },
  { price: '$7,000',   label: 'Quarantine Room' },
  { price: '$7,000',   label: 'Laundry Room', highlight: true },
  { price: '$7,000',   label: 'Food Storage Room' },
  { price: '$7,000',   label: 'Food Prep Room', highlight: true },
  { price: '$7,000',   label: 'Volunteer Room' },
]

function OpportunityTable({ rows }: { rows: { price: string; label: string; highlight?: boolean }[], highlight?: boolean }) {
  return (
    <table className="w-full border border-gray-300 text-sm">
      <tbody>
        {rows.map((r) => (
          <tr key={r.label} className={r.highlight ? 'bg-yellow-400/20' : ''}>
            <td className={`border border-gray-300 px-4 py-2 font-bold whitespace-nowrap ${r.highlight ? 'text-yellow-600' : ''}`}>{r.price}</td>
            <td className={`border border-gray-300 px-4 py-2 ${r.highlight ? 'font-semibold text-yellow-700' : ''}`}>{r.label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function NamingOpportunities() {
  return (
    <div>
      <PageHero
        badge="Legacy Giving"
        title="Lifetime Naming Opportunities"
        subtitle="Leave a permanent legacy at Misty Eyes by naming a building, room, or space in honor of a person or pet you love."
      />

      {/* ── Administration Building ── */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="w-full rounded-2xl overflow-hidden mb-8 shadow">
              <img src="/images/0146_NamingOpps.jpg" alt="Misty Eyes Administration Building" className="w-full object-cover" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <h2 className="font-heading font-extrabold text-2xl uppercase tracking-wide">Administration Building</h2>
            </div>
            <OpportunityTable rows={ADMIN_OPPS} />
          </motion.div>
        </div>
      </section>

      {/* ── Kitty City ── */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Cat className="h-6 w-6 text-primary" />
              <h2 className="font-heading font-extrabold text-2xl uppercase tracking-wide">Kitty City</h2>
            </div>
            <OpportunityTable rows={KITTY_OPPS} />
          </motion.div>
        </div>
      </section>

      {/* ── Kitty City Suite Sponsorship ── */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-center mb-6">Kitty City Suite Sponsorship</h2>
            <div className="w-full rounded-2xl overflow-hidden mb-8 shadow">
              <img src="/images/0145_CatSuiteSponsorship.jpg" alt="Kitty City Suites" className="w-full object-cover" />
            </div>
            <p className="text-center font-bold text-lg mb-2 uppercase">
              Kitty City gives us the ability to save approximately 400 additional cats each year!
            </p>
            <p className="text-muted-foreground text-sm text-center mb-6">
              Please consider sponsoring a cat suite. You will have the option to choose paint colors and decorate the suite with logos and graphics that represent either you or your company. You will also receive a plaque on the entry of the suite!
            </p>
            <div className="border border-gray-300 rounded-xl overflow-hidden mb-6 max-w-sm mx-auto">
              <div className="flex items-center gap-4 border-b border-gray-300 px-5 py-3">
                <span className="font-bold text-sm whitespace-nowrap">ONE YEAR SPONSORSHIP:</span>
                <span className="font-bold text-primary text-sm">$2,500</span>
              </div>
              <div className="flex items-center gap-4 px-5 py-3">
                <span className="font-bold text-sm whitespace-nowrap">LIFETIME SPONSORSHIP:</span>
                <span className="font-bold text-primary text-sm">$12,000</span>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <span className="bg-yellow-400 text-yellow-900 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wide">Only 1 Lifetime Suite Left!</span>
            </div>
            <div className="w-full rounded-2xl overflow-hidden shadow">
              <img src="/images/0147_CatSuiteSponsorship.jpg" alt="Cat looking up" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-14 bg-pink-50">
        <div className="container max-w-xl text-center">
          <p className="text-sm text-muted-foreground mb-3">
            If you are interested in any of these lifetime naming opportunities or suite sponsorships, please contact:
          </p>
          <a href="mailto:sheryl@mistyeyes.org" className="text-primary font-semibold text-lg hover:underline">
            sheryl@mistyeyes.org
          </a>
        </div>
      </section>
    </div>
  )
}
