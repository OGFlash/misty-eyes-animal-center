export interface Animal {
  id: string
  name: string
  species: 'cat' | 'dog' | 'other'
  breed: string
  age: string          // e.g. "2 years", "6 months"
  ageMonths: number
  gender: 'male' | 'female'
  size: 'small' | 'medium' | 'large'
  description: string
  photos: string[]
  tags: string[]       // e.g. "good with kids", "indoor only"
  goodWithKids?: boolean
  goodWithDogs?: boolean
  goodWithCats?: boolean
  isFostered?: boolean
  fosterNotes?: string
  intakeDate: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  address?: string
  link?: string
  image?: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  photo?: string
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  url?: string
  tier?: 'gold' | 'silver' | 'bronze' | 'community'
}

export interface ApiResponse<T = void> {
  success: boolean
  message: string
  data?: T
}
