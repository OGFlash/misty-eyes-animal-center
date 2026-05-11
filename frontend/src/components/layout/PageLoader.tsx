import { PawPrint } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="text-primary"
        aria-label="Loading…"
      >
        <PawPrint className="h-10 w-10" />
      </motion.div>
    </div>
  )
}
