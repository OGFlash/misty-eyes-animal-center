import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Layout from '@/components/layout/Layout'
import PageLoader from '@/components/layout/PageLoader'

// Lazy-loaded pages
const Home                = lazy(() => import('@/pages/Home'))
const AdoptionProcess     = lazy(() => import('@/pages/AdoptionProcess'))
const AdoptablePets       = lazy(() => import('@/pages/AdoptablePets'))
const AdoptionApplication = lazy(() => import('@/pages/AdoptionApplication'))
const KittyCity           = lazy(() => import('@/pages/KittyCity'))
const HelpUs              = lazy(() => import('@/pages/HelpUs'))
const Volunteer           = lazy(() => import('@/pages/Volunteer'))
const Foster              = lazy(() => import('@/pages/Foster'))
const Shop                = lazy(() => import('@/pages/Shop'))
const Wishlist            = lazy(() => import('@/pages/Wishlist'))
const HostFundraiser      = lazy(() => import('@/pages/HostFundraiser'))
const Programs            = lazy(() => import('@/pages/Programs'))
const ForStudentsByStudents = lazy(() => import('@/pages/ForStudentsByStudents'))
const HumaneEducation     = lazy(() => import('@/pages/HumaneEducation'))
const CommunityOutreach   = lazy(() => import('@/pages/CommunityOutreach'))
const JVKidsClub          = lazy(() => import('@/pages/JVKidsClub'))
const Events              = lazy(() => import('@/pages/Events'))
const AboutUs             = lazy(() => import('@/pages/AboutUs'))
const Leadership          = lazy(() => import('@/pages/Leadership'))
const ContactUs           = lazy(() => import('@/pages/ContactUs'))
const Resources           = lazy(() => import('@/pages/Resources'))
const DogTraining         = lazy(() => import('@/pages/DogTraining'))
const OwnerSurrender      = lazy(() => import('@/pages/OwnerSurrender'))
const PuppyMills          = lazy(() => import('@/pages/PuppyMills'))
const AnimalAbuse         = lazy(() => import('@/pages/AnimalAbuse'))
const LostAndFound        = lazy(() => import('@/pages/LostAndFound'))
const Donate              = lazy(() => import('@/pages/Donate'))
const GivingCards         = lazy(() => import('@/pages/GivingCards'))
const CorporateGiving     = lazy(() => import('@/pages/CorporateGiving'))
const SponsorASuite       = lazy(() => import('@/pages/SponsorASuite'))
const NamingOpportunities = lazy(() => import('@/pages/NamingOpportunities'))
const ProfessionalServices = lazy(() => import('@/pages/ProfessionalServices'))
const Summer              = lazy(() => import('@/pages/Summer'))
const AnnualReport2023    = lazy(() => import('@/pages/AnnualReport2023'))
const NotFound            = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Layout>
          <Routes>
            <Route path="/"                                  element={<Home />} />
            <Route path="/adoptionprocess"                   element={<AdoptionProcess />} />
            <Route path="/adoptablepets"                     element={<AdoptablePets />} />
            <Route path="/adoptionapplication"               element={<AdoptionApplication />} />
            <Route path="/kittycity"                         element={<KittyCity />} />
            <Route path="/help-us"                           element={<HelpUs />} />
            <Route path="/volunteer"                         element={<Volunteer />} />
            <Route path="/foster-1"                          element={<Foster />} />
            <Route path="/shop"                              element={<Shop />} />
            <Route path="/wishlist"                          element={<Wishlist />} />
            <Route path="/host-a-fundraiser"                 element={<HostFundraiser />} />
            <Route path="/programs"                          element={<Programs />} />
            <Route path="/forstudentsbystudents"             element={<ForStudentsByStudents />} />
            <Route path="/humaneeducation"                   element={<HumaneEducation />} />
            <Route path="/communityoutreach"                 element={<CommunityOutreach />} />
            <Route path="/jv"                                element={<JVKidsClub />} />
            <Route path="/events"                            element={<Events />} />
            <Route path="/about-us"                          element={<AboutUs />} />
            <Route path="/leadership"                        element={<Leadership />} />
            <Route path="/contact-us"                        element={<ContactUs />} />
            <Route path="/resources"                         element={<Resources />} />
            <Route path="/dogtraining"                       element={<DogTraining />} />
            <Route path="/owner-surrender"                   element={<OwnerSurrender />} />
            <Route path="/puppy-mills"                       element={<PuppyMills />} />
            <Route path="/animal-abuse"                      element={<AnimalAbuse />} />
            <Route path="/lost-and-found-pets"               element={<LostAndFound />} />
            <Route path="/donate"                            element={<Donate />} />
            <Route path="/givingcards"                       element={<GivingCards />} />
            <Route path="/copy-of-sponsor-a-suite"           element={<CorporateGiving />} />
            <Route path="/copy-of-naiming-opportunities"     element={<SponsorASuite />} />
            <Route path="/namingopportunities"               element={<NamingOpportunities />} />
            <Route path="/copy-of-donate-1"                  element={<ProfessionalServices />} />
            <Route path="/summer"                            element={<Summer />} />
            <Route path="/annual-report-2023"                element={<AnnualReport2023 />} />
            <Route path="*"                                  element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  )
}
