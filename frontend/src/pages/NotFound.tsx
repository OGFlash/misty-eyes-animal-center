import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-secondary/30">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg px-4">
        <div className="text-8xl mb-6">🐾</div>
        <h1 className="font-heading text-5xl font-bold mb-4">404</h1>
        <h2 className="font-heading text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">Looks like this page ran off. Don\'t worry — let\'s get you back on track. Maybe there\'s a pet waiting to meet you.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-teal-700 transition-colors">
            <Home className="h-4 w-4" /> Go Home
          </Link>
          <Link to="/adoptable-pets" className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 font-semibold hover:bg-white transition-colors">
            <Search className="h-4 w-4" /> Find a Pet <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
