import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: string
  subtitle?: string
  badge?: string
  children?: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function PageHero({ title, subtitle, badge, children, className, size = 'md' }: PageHeroProps) {
  const paddingMap = { sm: 'py-12', md: 'py-20', lg: 'py-28' }
  return (
    <section className={cn('bg-gradient-to-br from-teal-800 to-teal-600 text-white relative overflow-hidden', paddingMap[size], className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />
      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 rounded-full bg-amber-400/20 border border-amber-400/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-teal-100 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
