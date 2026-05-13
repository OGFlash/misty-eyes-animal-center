import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ConceptBanner from './ConceptBanner'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ConceptBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
