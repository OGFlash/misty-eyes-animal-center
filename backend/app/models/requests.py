from pydantic import BaseModel, EmailStr


class ApiResponse(BaseModel):
    success: bool
    message: str


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    subject: str
    message: str


class AdoptionApplicationRequest(BaseModel):
    # Applicant
    first_name: str
    last_name: str
    email: EmailStr
    phone: str
    address: str
    city: str
    state: str
    zip: str
    # Household
    housing_type: str
    landlord_permission: bool | None = None
    adults_in_home: int
    children_in_home: int
    child_ages: str | None = None
    current_pets: str | None = None
    # Pet
    pet_of_interest: str | None = None
    why_adopt: str
    experience_with_pets: str
    # Agreement
    agree_to_home_check: bool
    agree_to_terms: bool


class VolunteerRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: str
    availability: list[str]
    interests: list[str]
    experience: str | None = None
    message: str | None = None


class FosterRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: str
    address: str
    city: str
    state: str
    zip: str
    housing_type: str
    landlord_permission: bool | None = None
    current_pets: str | None = None
    foster_types: list[str]
    can_foster_kittens: bool | None = None
    can_foster_neonatal: bool | None = None
    experience: str | None = None
    message: str | None = None


class SurrenderRequest(BaseModel):
    owner_name: str
    email: EmailStr
    phone: str
    animal_name: str
    animal_species: str
    animal_breed: str | None = None
    animal_age: str | None = None
    reason: str
    medical_history: str | None = None
    behavioral_notes: str | None = None
    timeline: str | None = None


class NewsletterRequest(BaseModel):
    email: EmailStr
    first_name: str | None = None


class FundraiserRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    organization: str | None = None
    event_type: str
    proposed_date: str | None = None
    estimated_attendees: int | None = None
    message: str
