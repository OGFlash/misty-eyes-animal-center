import { motion } from 'framer-motion'

export default function JVKidsClub() {
  return (
    <div>
      {/* ── Hero banner ── */}
      <section className="bg-amber-400 py-14">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
            {/* Left photo */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="rounded-xl overflow-hidden h-72 shadow-lg">
              <img
                src="/images/0039_jvkids_girl_cat.jpg"
                alt="Girl holding cat"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Center content */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center px-4 max-w-xs">
              <img src="/images/0001_mistylogotransparent.png" alt="Misty Eyes logo" className="h-16 mx-auto mb-3" />
              <h1 className="font-heading font-extrabold text-2xl leading-snug mb-1 text-gray-900">
                Misty Eyes Animal Center<br />Junior Volunteers
              </h1>
              <p className="font-bold text-gray-800 mb-5">(Grades 3-6)</p>

              <p className="text-sm font-semibold text-gray-900 leading-relaxed mb-4">
                The JV Kids Club is a monthly program for students which includes fun, animal-related craft projects and activities that teach the basics of responsible pet ownership at the kids' level.
              </p>

              <p className="text-sm font-semibold text-gray-900 leading-relaxed">
                If you wish to enroll your child in our Junior Volunteer Kids Club, just complete the enrollment form below to get sign-up links for future meetings!
              </p>
            </motion.div>

            {/* Right photo */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="rounded-xl overflow-hidden h-72 shadow-lg">
              <img
                src="/images/0040_jvkids_boy_dog.jpg"
                alt="Boy petting dog"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Enrollment form ── */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-extrabold text-2xl text-center mb-2">Enrollment Form</h2>
            <p className="text-center text-sm text-muted-foreground mb-8">Fill out the form below to receive sign-up links for upcoming JV Kids Club meetings.</p>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <iframe
                src="https://form.jotform.com/221426119632046"
                title="JV Kids Club Enrollment Form"
                width="100%"
                height="650"
                frameBorder="0"
                scrolling="yes"
                allowFullScreen
                className="block"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
