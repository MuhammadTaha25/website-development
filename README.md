# Bright Smile Dental — Website

A production-ready marketing website for a single-location dental practice, built with
Next.js (App Router), TypeScript, and Tailwind CSS. Currently populated with placeholder
content for a fictional practice ("Bright Smile Dental", Austin, TX) — see
[Placeholders to replace before launch](#placeholders-to-replace-before-launch).

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS 4** with a custom calming/neutral dental-brand palette defined as theme tokens
  (`app/globals.css`)
- **Sanity.io** — schema defined (`/sanity/schemas`), not yet wired to a live project; the site
  runs entirely on mock content until a Sanity project ID is supplied
- Deploy target: **Vercel**

## Running locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000` with zero required environment variables — every
value in `/lib/config.ts` has a sensible placeholder fallback, and content comes from
`/content/mock-content.ts`.

To build for production:

```bash
npm run build
npm run start
```

To lint:

```bash
npm run lint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values before deploying. See that file
for a full list with inline comments. Key ones:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_PRACTICE_NAME`, `NEXT_PUBLIC_PRACTICE_PHONE`, etc. | Practice identity — read by `/lib/config.ts` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Enables real Sanity CMS content once set (see below) |
| `BOOKING_LEAD_DESTINATION` | Where new-patient booking form leads are forwarded (email endpoint or webhook URL) |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Enables Google Analytics 4 |
| `NEXT_PUBLIC_CALLRAIL_SWAP_ID` | Enables CallRail call tracking (stub only, see `app/layout.tsx`) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACES_ID` | Would enable live review pulling on `/reviews` (not yet implemented — currently mock reviews) |

## What's stubbed vs. fully functional

**Fully functional:**
- All routes render real (placeholder) copy, no lorem ipsum
- Booking form at `/new-patients` and `/contact` POSTs to `/app/api/book-appointment`, which
  validates server-side and forwards to `BOOKING_LEAD_DESTINATION` if set (logs and no-ops if
  not configured, so local dev works without it)
- SEO: unique metadata per route, JSON-LD (Dentist/LocalBusiness, Service, FAQPage,
  AggregateRating), `sitemap.ts`, `robots.ts`
- Fully responsive 375px–1920px, keyboard-accessible, labeled form fields, WCAG AA color
  contrast

**Stubbed (intentionally, ready to wire up):**
- **Sanity CMS** — schema definitions exist in `/sanity/schemas` but there's no live Sanity
  Studio or `sanity` package installed yet. `/lib/sanity-client.ts` is the single integration
  point: every page calls its getters (`getServices`, `getBlogPosts`, etc.), which currently
  return data from `/content/mock-content.ts`. To go live:
  1. `npm create sanity@latest` (or add to this repo) and point it at `/sanity/schemas`
  2. `npm install next-sanity @sanity/client`
  3. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` (and `SANITY_API_READ_TOKEN` if previewing drafts)
  4. Replace the function bodies in `/lib/sanity-client.ts` with real `client.fetch(...)` calls
     — no page code needs to change
- **GA4** — component is a no-op until `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is set
- **Call tracking (CallRail)** — commented placeholder in `app/layout.tsx`; add the swap script
  once you have a CallRail account
- **Google Places reviews** — `/reviews` shows seeded mock reviews; wiring in
  `GOOGLE_PLACES_API_KEY` would require adding a fetch call in `getReviews()` (not implemented)

## Placeholders to replace before launch

Search the codebase for `TODO:` comments — every one marks something to swap before going
live. The main ones:

- **Practice identity** — `lib/config.ts` (name, phone, address, hours, geo coordinates, social
  links) or the matching `.env.local` values
- **Copy** — hero/about copy marked `// TODO: replace with real ...` in `app/page.tsx`,
  `app/about/page.tsx`
- **Team bios & headshots** — `app/about/page.tsx` (`team` array) and
  `public/images/team-placeholder.svg`
- **Images** — everything in `public/images/*.svg` is a placeholder; replace with real
  photography (hero, service photos, smile gallery before/afters) and keep using `next/image`
- **Services & blog content** — `content/mock-content.ts` (or migrate into Sanity once it's
  wired up)
- **Insurance list** — `app/insurance-financing/page.tsx` (`acceptedInsurance` array)
- **Legal pages** — `privacy-policy`, `accessibility-statement`, and `terms` pages contain
  boilerplate text marked for legal review before launch
- **API keys** — Sanity, GA4, CallRail, Google Places (see Environment variables above)

## Adding a second location or a real PMS/EHR integration later

This pass intentionally scopes to a single location with a generic lead-capture form. To
extend later without a rebuild:

- **Second location:** `lib/config.ts` would need to become per-location (e.g. an array of
  location objects) rather than a flat singleton, and routes like `/emergency-dentist-austin`
  would need a `[location]` dynamic segment. The component structure (Header, Footer,
  BookingForm, service/blog content) doesn't need to change — it already reads everything from
  config rather than hardcoding values, so a multi-location refactor is additive, not a rewrite.
- **Real PMS/EHR booking integration** (e.g. Dolphin, Dentrix, Open Dental, NexHealth): replace
  the `fetch(destination, ...)` call in `app/api/book-appointment/route.ts` with a call to the
  PMS's scheduling API, and extend the `BookingPayload` type/form fields to match what that API
  requires. Keep the explicit note in that file about never collecting clinical/PHI data through
  this marketing form — a real PMS integration should use the PMS's own compliant intake flow
  for anything beyond a basic lead.
- **Custom CMS backend:** out of scope for this pass; Sanity's hosted Studio (free tier) is the
  intended path per the schema already defined in `/sanity/schemas`.
