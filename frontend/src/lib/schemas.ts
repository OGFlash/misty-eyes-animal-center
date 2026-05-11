import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const adoptionApplicationSchema = z.object({
  // Step 1 — Applicant Info
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  // Step 2 — Household
  housingType: z.enum(['own', 'rent', 'other']),
  landlordPermission: z.boolean().optional(),
  adultsInHome: z.number().int().min(1),
  childrenInHome: z.number().int().min(0),
  childAges: z.string().optional(),
  currentPets: z.string().optional(),
  // Step 3 — Pet Info
  petOfInterest: z.string().optional(),
  whyAdopt: z.string().min(20, 'Please tell us more about why you want to adopt'),
  experienceWithPets: z.string().min(10),
  // Step 4 — Agreement
  agreeToHomeCheck: z.boolean().refine((v) => v === true, 'You must agree to a home check'),
  agreeToTerms: z.boolean().refine((v) => v === true, 'You must accept the terms'),
})

export const volunteerSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  availability: z.array(z.string()).min(1, 'Please select at least one day'),
  interests: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  experience: z.string().optional(),
  message: z.string().optional(),
})

export const fosterSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/),
  housingType: z.enum(['own', 'rent', 'other']),
  landlordPermission: z.boolean().optional(),
  currentPets: z.string().optional(),
  fosterTypes: z.array(z.string()).min(1, 'Please select at least one type'),
  canFosterKittens: z.boolean().optional(),
  canFosterNeonatal: z.boolean().optional(),
  experience: z.string().optional(),
  message: z.string().optional(),
})

export const fundraiserSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  event_type: z.string().min(2, 'Event type required'),
  event_date: z.string().optional(),
  description: z.string().min(10, 'Please describe your event'),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type AdoptionApplicationData = z.infer<typeof adoptionApplicationSchema>
export type VolunteerFormData = z.infer<typeof volunteerSchema>
export type FosterFormData = z.infer<typeof fosterSchema>
export type FundraiserFormData = z.infer<typeof fundraiserSchema>
