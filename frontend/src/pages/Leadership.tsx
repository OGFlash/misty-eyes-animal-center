import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
}

type Member = { name: string; role: string; photo?: string; email?: string }

const BOARD: Member[] = [
  { name: 'Cherie Fox',               role: 'Founder & President',                photo: '/images/0065_cherie_20website_20pic_202_edited.jpg' },
  { name: 'Renee Harlor',             role: 'Founder & Board Member Emeritus',    photo: '/images/0066_IMG_0339_JPG.jpg' },
  { name: 'Jennifer McCarty',         role: 'Vice President',                     photo: '/images/0067_JenniferMcCarty_edited.jpg' },
  { name: 'Angie Coggan',             role: 'Treasurer',                          photo: '/images/0068_AngieCoggan_edited_edited.png' },
  { name: 'Angela Buhr',              role: 'Secretary',                          photo: '/images/0069_AngelaBuhr_edited_edited.jpg' },
  { name: 'Sheryl (Sackett) Francik', role: 'Board Member',                       photo: '/images/0070_SherylFrancik_edited.jpg' },
  { name: 'Scott Butrum',             role: 'Board Member',                       photo: '/images/0071_ScottButrum_edited.jpg' },
]

const ANIMAL_OPS: Member[] = [
  { name: 'Angela Buhr',     role: 'Adoption Counselor — Food/Medical Inventory',     photo: '/images/0069_AngelaBuhr_edited_edited.jpg' },
  { name: 'Ashley Brill',    role: 'Adoption Counselor — Medical Assistant',          photo: '/images/0072_AshleyBrill_edited.jpg' },
  { name: 'Beth Carr',       role: 'Adoption Counselor — Cat Room Lead',              photo: '/images/0073_Beth_20Carr_edited_edited.jpg' },
  { name: 'Beth Morefield',  role: 'Adoption Counselor — Foster/Medical Scheduler',  photo: '/images/0074_BethMorefield.jpg' },
  { name: 'Kari Myers',      role: 'Adoption Counselor — Organization/Donations',    photo: '/images/0075_KariMyers_edited.jpg' },
  { name: 'Sheila Springer', role: 'Adoption Counselor — Database Administrator',    photo: '/images/0076_SheilaSpringer.jpg' },
  { name: 'Anne Swearingen', role: 'Adoption Assistant',                             photo: '/images/0077_Anne_20Swearingen_edited.jpg' },
  { name: 'Ida Schnabel',    role: 'Adoption Assistant',                             photo: '/images/0079_IdaSchnabel.jpg' },
  { name: 'Diane Sandusky',  role: 'Adoption Assistant' },
  { name: 'Laura Pirino',    role: 'Adoption Assistant' },
]

const FOSTER: Member[] = [
  { name: 'Ida Schnabel',    role: 'Foster Program Co-Coordinator',   photo: '/images/0079_IdaSchnabel.jpg',    email: 'Ida@MistyEyes.org' },
  { name: 'Sheila Springer', role: 'Foster Program Co-Coordinator',   photo: '/images/0076_SheilaSpringer.jpg' },
  { name: 'Beth Carr',       role: 'Foster Family Support Team',      photo: '/images/0073_Beth_20Carr_edited_edited.jpg' },
  { name: 'Beth Morefield',  role: 'Foster Family Support Team',      photo: '/images/0074_BethMorefield.jpg' },
  { name: 'Debbie Draper',   role: 'Foster Family Support Team',      photo: '/images/0081_Debbie_20Draper_edited_edited_edited_edite.jpg' },
  { name: 'Vicki Stump',     role: 'Foster Family Support Team',      photo: '/images/0082_Vicki_20Stump.jpg' },
  { name: 'Brenda Lohsl',    role: 'Foster Family Support Team',      photo: '/images/0086_Brenda.jpg' },
  { name: 'Laura Pirino',    role: 'Foster Family Support Team' },
  { name: 'Coley Stadler',   role: 'Foster Family Support Team' },
  { name: 'Mindy Elliott',   role: 'Foster Family Support Team' },
  { name: 'Mark Berman',     role: 'Foster Family Support Team' },
]

const OUTREACH: Member[] = [
  { name: 'Ida Schnabel',    role: 'Community Outreach Coordinator',  photo: '/images/0079_IdaSchnabel.jpg' },
  { name: 'Kathy Taraschke', role: 'Youth Outreach Coordinator',      photo: '/images/0088_KathyTaraschke.jpg' },
]

const SUPPORT: Member[] = [
  { name: 'Terry Keeler',   role: 'Volunteer Program Coordinator',   photo: '/images/0091_TerryKeeler.jpg',  email: 'Terry@mistyeyes.org' },
  { name: 'Windy Tolliver', role: 'Grounds & Building Coordinator',  photo: '/images/0092_WindyTolliver.jpg' },
  { name: 'Ed Wrin',        role: 'Building Design & Maintenance',   photo: '/images/0089_EdWrin.jpg' },
  { name: 'Tami Hoy',       role: 'Web Administrator' },
]

const TEAMS: { heading: string; members: Member[] }[] = [
  { heading: 'Board of Directors',           members: BOARD },
  { heading: 'Animal Operations',            members: ANIMAL_OPS },
  { heading: 'Foster Program Team',          members: FOSTER },
  { heading: 'Outreach & Education',         members: OUTREACH },
  { heading: 'Volunteer & Support Services', members: SUPPORT },
]

function MemberCard({ m, i }: { m: Member; i: number }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
      className="bg-white border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="h-44 overflow-hidden bg-teal-50">
        {m.photo ? (
          <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-teal-300 select-none">
            {m.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold text-sm mb-0.5">{m.name}</p>
        <p className="text-xs text-muted-foreground leading-snug mb-2">{m.role}</p>
        {m.email && (
          <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
            <Mail className="h-3 w-3" />{m.email}
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Leadership() {
  return (
    <div>
      <PageHero badge="Our Team" title="Leadership Team" subtitle="Misty Eyes Animal Center is run entirely by dedicated volunteers. Meet the people who make our mission possible." />

      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          {TEAMS.map(team => (
            <div key={team.heading} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-heading text-2xl font-bold mb-8 pb-3 border-b"
              >
                {team.heading}
              </motion.h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {team.members.map((m, i) => <MemberCard key={`${m.name}-${i}`} m={m} i={i} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl font-bold mb-3">Join Our Team</h2>
            <p className="text-muted-foreground mb-6">Misty Eyes is always looking for passionate people to join our volunteer family. Every role matters — from fostering to fundraising.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-700 transition-colors">Volunteer With Us</a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
