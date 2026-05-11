# Misty Eyes Animal Center — Website Modernization Prompt

---

## Project Overview

Redesign and rebuild the **Misty Eyes Animal Center** website (`mistyeyes.org`) from scratch.
The current site is a Wix-built nonprofit animal rescue website for an organization based in
Avon, Indiana. The new version must be a fully custom, modern, performant, and accessible web
application hosted entirely on AWS.

**Mission tagline:** *Rescue. Love. Repeat.*
**Primary audiences:** Potential adopters, volunteers, fosters, donors, students, and community partners.

---

## Tech Stack

### Frontend
- **React 18+** (with React Router v6 for client-side routing)
- **TypeScript**
- **Tailwind CSS v3+** (utility-first, responsive-first design)
- **shadcn/ui** component library (built on Radix UI primitives) for accessible, composable UI
- **Framer Motion** for subtle scroll-triggered animations and page transitions
- **React Hook Form + Zod** for all form validation
- **TanStack Query (React Query)** for API data fetching and caching
- **Vite** as the build tool

### Backend (Serverless)
- **FastAPI** running inside **AWS Lambda** (via Mangum ASGI adapter)
- **Pydantic v2** for request/response validation
- **AWS API Gateway (HTTP API)** to route requests to Lambda
- **AWS SES (Simple Email Service)** for transactional emails:
  - Adoption application confirmations
  - Volunteer/foster sign-up confirmations
  - Contact form submissions
  - Donation receipts

### AWS Infrastructure
```
Browser
  │
  ▼
Route 53 (DNS — mistyeyes.org)
  │
  ▼
CloudFront (CDN — global edge caching)
  ├── WAF (Web Application Firewall — rate limiting, bot protection, OWASP rules)
  │
  ├──► S3 (Static hosting — React build artifacts, images, assets)
  │
  └──► API Gateway (HTTP API — /api/* routes)
         │
         ▼
       Lambda (FastAPI via Mangum)
         │
         ▼
       SES (Transactional email delivery)
```

**Additional AWS services:**
- **S3** also stores all uploaded pet photos and org assets
- **CloudFront signed URLs** for private/protected asset access if needed
- **IAM roles** with least-privilege for Lambda → SES access
- **AWS Certificate Manager (ACM)** for the TLS/SSL certificate on CloudFront
- **CloudWatch** for Lambda logging and alerting

---

## Pages & Routes to Build

Replicate and modernize all existing routes:

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, mission statement, top supporters, hours, CTA buttons |
| `/adoptionprocess` | Adopt | Step-by-step adoption process, link to application |
| `/adoptablepets` | Adoptable Pets | Card grid of animals — cats/kittens then dogs/puppies |
| `/adoptionapplication` | Adoption Application | Multi-step form → SES email |
| `/kittycity` | Kitty City | Dedicated shelter building page with hours |
| `/help-us` | Help Us | Hub page linking to all giving options |
| `/volunteer` | Volunteer | Volunteer info + sign-up form → SES |
| `/foster-1` | Foster Program | Foster info + interest form → SES |
| `/shop` | Everyday Ways | Amazon Smile/affiliate shopping links |
| `/wishlist` | Wish List | Amazon wish list embed / link |
| `/host-a-fundraiser` | Host a Fundraiser | Instructions + form → SES |
| `/programs` | Programs | Overview hub for educational programs |
| `/forstudentsbystudents` | For Students by Students | Youth program detail |
| `/humaneeducation` | Humane Education | School outreach program |
| `/communityoutreach` | Community Outreach | Community events and partnerships |
| `/jv` | JV Kids Club | Grades 3–6 club info |
| `/events` | Events | Upcoming events calendar/list |
| `/about-us` | About Us | Org story, mission, values |
| `/leadership` | Leadership Team | Team member cards with photos/bios |
| `/contact-us` | Contact Us | Contact form → SES + address/hours |
| `/resources` | Resources | Links hub |
| `/dogtraining` | Dog Training | Training resources and referrals |
| `/owner-surrender` | Surrender | Owner surrender process and form |
| `/puppy-mills` | Puppy Mills | Educational page |
| `/animal-abuse` | Animal Abuse | Educational page + reporting resources |
| `/lost-and-found-pets` | Lost & Found Pets | Info + external resource links |
| `/donate` | Donate | Donation options — one-time, recurring, in-kind |
| `/givingcards` | Giving Cards | Gift card style donations |
| `/copy-of-sponsor-a-suite` | Corporate Giving | Corporate partnership tiers |
| `/copy-of-naiming-opportunities` | Sponsor a Suite | Suite/room sponsorship |
| `/namingopportunities` | Naming Opportunities | Building naming rights |
| `/copy-of-donate-1` | Professional Services | Pro bono / in-kind professional services |
| `/summer` | Summer Mailer | Seasonal campaign landing page |
| `/annual-report-2023` | Annual Report 2023 | Impact report with stats and stories |

---

## Design System & UI/UX Guidelines

### Visual Identity
- **Primary color:** Warm teal/teal-green (trust, compassion, rescue — animal welfare brand feel)
- **Accent color:** Warm amber/orange (energy, warmth, action — CTA buttons)
- **Neutral palette:** Warm off-whites and soft grays (not cold/corporate)
- **Logo:** Use existing Misty Eyes logo (`mistylogotransparent.png`) — preserve brand
- **Typography:**
  - Headings: `Nunito` or `Poppins` (rounded, friendly, approachable)
  - Body: `Inter` (clean, readable at small sizes)
- **Tone:** Warm, hopeful, community-driven — never sterile or transactional

### Layout & Navigation
- **Sticky top navbar** with logo left, nav links center/right, prominent "Adopt" and "Donate" CTA buttons (amber)
- **Mobile hamburger menu** with smooth slide-in drawer
- **Mega-menu dropdowns** for Help Us, Programs, Resources (matching current nav hierarchy)
- **Footer** with: hours of operation (Animal Center + Kitty City), physical address, mailing address, phone number, social media links, quick links, newsletter signup

### Home Page Sections (in order)
1. **Hero:** Full-width image/video carousel of adoptable animals — tagline *"Rescue. Love. Repeat."* — two CTAs: "Meet Our Pets" (primary) + "Donate" (secondary)
2. **Mission Strip:** 3-column icon cards — Rescue / Adopt / Educate with short descriptions
3. **Featured Adoptable Pets:** Horizontally scrollable card row — animal photo, name, breed, age, quick "Learn More" link
4. **Ways to Help:** Grid of giving options (Volunteer, Foster, Donate, Wish List, Host Fundraiser, Shop)
5. **Upcoming Events:** 2–3 card previews with date/location
6. **Programs Highlight:** Brief overview of humane education + community outreach with call to learn more
7. **Impact Stats:** Animated counters — animals rescued per year, volunteers, years of service, etc.
8. **Top Supporters / Sponsors:** Logo carousel — responsive marquee scroll
9. **Hours & Location:** Map embed + hours block with Animal Center and Kitty City schedules

### Adoptable Pets Page
- **Card grid layout** (3-col desktop, 2-col tablet, 1-col mobile)
- **Filter bar:** Species (Cat / Dog / Other), Age, Size, Gender, Good with kids/dogs/cats
- **Animal card:** Photo (with placeholder if none), name, breed, age, short bio, "Apply to Adopt" CTA
- **Detail modal or detail route** per animal: full bio, photo gallery, temperament tags, foster home notes, apply button
- **Search by name**

### Forms (Adoption Application, Volunteer, Foster, Contact, Surrender)
- Multi-step wizard UI for longer forms (adoption application, surrender)
- Progress indicator (step 1 of 4, etc.)
- Client-side validation with Zod + React Hook Form
- On submit: POST to `/api/...` → Lambda → FastAPI handler → SES confirmation email to both the user and the org's inbox
- Success/error toast notifications (use `sonner` or shadcn `toast`)

### Accessibility
- WCAG 2.1 AA compliance minimum
- Keyboard navigable
- Screen-reader friendly (`aria-label`, semantic HTML)
- Sufficient color contrast ratios
- `prefers-reduced-motion` respected in Framer Motion animations

### Performance
- Lazy-load all images (`loading="lazy"`, with BlurHash placeholder)
- Code-split each route with `React.lazy` + `Suspense`
- Serve images from S3 via CloudFront with aggressive cache headers
- Lighthouse score targets: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95

---

## Backend API Endpoints (FastAPI on Lambda)

```
POST /api/contact          → Send contact form email via SES
POST /api/adopt/apply      → Submit adoption application → SES to org + applicant
POST /api/volunteer/apply  → Volunteer interest form → SES
POST /api/foster/apply     → Foster interest form → SES
POST /api/surrender        → Owner surrender intake form → SES
POST /api/fundraiser        → Fundraiser host inquiry → SES
POST /api/newsletter       → Newsletter signup (store email, send welcome via SES)
GET  /api/health           → Health check endpoint
```

All endpoints:
- Return structured JSON responses with `{ success: bool, message: str }`
- Validate input with Pydantic v2 models
- Rate-limited at the API Gateway / WAF level
- CORS configured to allow only `mistyeyes.org` and `www.mistyeyes.org`

### SES Email Templates
Create HTML email templates for:
- Adoption application received (to org + applicant acknowledgement)
- Volunteer sign-up confirmation
- Foster sign-up confirmation
- Contact form reply
- Surrender intake confirmation
- Fundraiser inquiry confirmation

---

## Content Migration

All content and copy has been scraped from the existing site and is available in `content.txt`.
All images (148 assets) are saved locally in the `images/` folder.

Use this content verbatim where appropriate, but improve readability:
- Break up long text blocks into scannable sections with headers and bullet points
- Add calls to action where pages currently end abruptly
- Replace placeholder/missing image alts with descriptive text

---

## Project File Structure

```
mistyeyes-web/
├── frontend/
│   ├── public/
│   │   └── assets/          # Favicon, OG image
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── layout/      # Navbar, Footer, PageWrapper
│   │   │   ├── pets/        # PetCard, PetGrid, PetFilters, PetModal
│   │   │   ├── forms/       # AdoptionForm, VolunteerForm, ContactForm, etc.
│   │   │   └── sections/    # Home page sections (Hero, Stats, Supporters, etc.)
│   │   ├── pages/           # One file per route
│   │   ├── hooks/           # useAnimals, useForms, useEvents
│   │   ├── lib/             # API client, utils, zod schemas
│   │   ├── types/           # TypeScript interfaces
│   │   ├── assets/          # Images migrated from scrape
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI app + Mangum handler
│   │   ├── routers/
│   │   │   ├── contact.py
│   │   │   ├── adopt.py
│   │   │   ├── volunteer.py
│   │   │   ├── foster.py
│   │   │   ├── surrender.py
│   │   │   └── newsletter.py
│   │   ├── models/          # Pydantic request/response models
│   │   ├── services/
│   │   │   └── email.py     # SES email sending logic
│   │   └── config.py        # Environment config (SES region, from-address, etc.)
│   ├── requirements.txt
│   └── Dockerfile           # For local dev / Lambda container image
│
├── infrastructure/
│   ├── cloudformation/      # or CDK / Terraform
│   │   ├── s3.yaml          # S3 static hosting bucket
│   │   ├── cloudfront.yaml  # CloudFront distribution + WAF
│   │   ├── lambda.yaml      # Lambda function + IAM role
│   │   ├── api-gateway.yaml # HTTP API + routes
│   │   └── ses.yaml         # SES domain identity + sending config
│   └── README.md
│
└── README.md
```

---

## Deployment Pipeline

1. **GitHub Actions CI/CD:**
   - On push to `main`: build React app with Vite → sync to S3 → invalidate CloudFront cache
   - On push to `main`: package FastAPI Lambda → deploy to Lambda via AWS CLI or CDK
2. **Environment variables** managed via AWS Systems Manager Parameter Store (SSM)
3. **Staging environment** on a subdomain (e.g., `staging.mistyeyes.org`) before production

---

## Key Improvements Over Current Wix Site

| Current (Wix) | New Version |
|---|---|
| Mobile requires "swipe side-to-side" for pet table — broken UX | Responsive card grid with filtering |
| Adoption app is an external link / separate form | Integrated multi-step form, same domain |
| No search or filtering on adoptable pets | Full filter bar (species, age, size, etc.) |
| Generic Wix SEO | Custom meta tags, OG images, sitemap.xml, robots.txt |
| Wix branding in meta generator | Clean, custom build |
| No animations or visual hierarchy | Framer Motion micro-interactions |
| Slow Wix CDN | CloudFront global edge caching |
| No WAF | AWS WAF with OWASP managed rules |
| Mixed font/color inconsistency | Unified design system with Tailwind tokens |
| No consolidated hours/location block | Sticky info always visible in footer |
