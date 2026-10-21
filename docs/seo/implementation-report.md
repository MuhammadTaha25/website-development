# SEO Implementation Report — Bright Smile Dental

Date: 2026-10-21
Stack detected: Next.js 16.4.2 (App Router), React 19, Tailwind CSS v4, TypeScript. No CMS connected yet (Sanity client falls back to mock content in `content/mock-content.ts`).

## 1. Audit findings

The project already had a mature SEO foundation before this pass:

| Area | Status found | Notes |
|---|---|---|
| Metadata | ✅ Good | `lib/metadata.ts` generates unique, templated titles/descriptions/canonicals/OG/Twitter tags per page via `pageMetadata()`. |
| Canonical URLs | ✅ Good | Absolute, built from `siteConfig.siteUrl`, set per page. |
| Sitemap | ✅ Good | `app/sitemap.ts` lists all static routes + dynamic service/blog routes from the actual content source. |
| Robots | ✅ Good | `app/robots.ts` allows `/`, disallows `/api/`, references the sitemap. |
| Structured data | ✅ Partial | `Dentist`/`LocalBusiness` schema on every page (root layout), `Service` + `FAQPage` schema on service detail pages. **Missing: `BreadcrumbList`.** |
| GA4 | ⚠️ Gap | `GoogleAnalytics.tsx` existed but only fired `gtag('config', …)` once on initial load — the App Router doesn't reload on client-side navigation, so subsequent route changes were never recorded as page views. No conversion events existed. |
| Images | ⚠️ Gap | Hero image was a literal placeholder graphic with "replace before launch" text baked into the SVG (fixed in a prior pass this session). Alt text elsewhere is descriptive and appropriate. |
| Content/FAQ coverage | ⚠️ Gap | 4 of 6 services had no cost-related FAQ despite "cost" being a top informational query category for every treatment. |
| Local SEO (NAP) | ✅ Good | Single source of truth in `lib/config.ts`; address/phone/hours consistent across header, footer, contact page, and JSON-LD. |
| URLs | ✅ Good | Short, descriptive, stable (`/services/[slug]`, `/emergency-dentist-austin`, etc.). No changes needed. |

Nothing was rewritten unnecessarily — the existing architecture (mock-content → sanity-client abstraction, `pageMetadata()` helper, `JsonLd` component) was reused as-is.

## 2. Keyword research

See [`docs/seo/keyword-research-us.md`](./keyword-research-us.md) for the full table, methodology, and honest reporting of unavailable metrics. Summary: 19 keywords evaluated via Ubersuggest MCP (`keyword_overview`, US location id `2840`), top priorities are **dental implants near me** (SD 8, 90.5K/mo), **teeth whitening near me** (SD 10, 60.5K/mo), and **dentist near me** (1.83M/mo, SD 21).

## 3. Keyword → page mapping (implemented)

| Page | Primary keyword | Secondary / FAQ keyword | Change made |
|---|---|---|---|
| `/services/dental-implants` | dental implants near me | dental implants cost | Title/description already keyword-aligned via existing `pageMetadata()`; cost FAQ already present — no duplicate added. Added `BreadcrumbList` schema. |
| `/services/teeth-whitening` | teeth whitening near me | teeth whitening cost | Added a "How much does professional teeth whitening cost?" FAQ (was missing). |
| `/services/invisalign` | invisalign near me | invisalign cost | Added a "How much does Invisalign cost?" FAQ. |
| `/services/veneers` | porcelain veneers | veneers cost | Added a "How much do veneers cost?" FAQ. |
| `/services/root-canal-therapy` | — | root canal cost | Added a "How much does a root canal cost?" FAQ. |
| `/emergency-dentist-austin` | emergency dentist near me | same day dentist | Added `BreadcrumbList` schema; content/title already matches. |
| `/` (homepage) | dentist near me | dentist in austin tx, family dentist austin | Already uses `pageMetadata("Family & Cosmetic Dentist", …)` → correctly targets "family dentist" + "cosmetic dentist" + city. No title change needed; previously added trust badges/urgency copy (this session) already reinforce commercial intent. |
| `/new-patients` | new patient dentist near me | — | Not modified this pass — already has its own booking-focused metadata; flagged for future copy review in the roadmap. |
| `/insurance-financing` | dentist that accepts my insurance | affordable dentist near me | Not modified this pass (both target keywords had unavailable volume data) — flagged in roadmap, not acted on speculatively. |

No new pages were created — every targeted keyword maps to a real, existing page for a real, existing service. No keyword cannibalization was introduced (one primary keyword per page).

## 4. Files changed

- `content/mock-content.ts` — added 4 cost-related FAQ entries (Invisalign, Teeth Whitening, Root Canal, Veneers).
- `lib/schema.ts` — added `breadcrumbSchema()` builder.
- `app/services/[slug]/page.tsx` — added `BreadcrumbList` JSON-LD.
- `app/emergency-dentist-austin/page.tsx` — added `BreadcrumbList` JSON-LD.
- `lib/analytics.ts` (new) — typed `trackEvent()` helper pushing to `dataLayer`, documented to never carry PII/health data.
- `components/GoogleAnalytics.tsx` — rewritten as a client component with a `usePathname`/`useSearchParams` tracker (in a `Suspense` boundary) so client-side route changes now send a page view; initial load still fires exactly once (no duplicate init).
- `components/BookingForm.tsx` — fires `booking_form_start` (first field focus), `booking_request_submitted`, `booking_request_error`. No form field values are sent.
- `components/Header.tsx`, `components/Footer.tsx`, `components/CtaBanner.tsx`, `components/MobileStickyBar.tsx` — converted to client components (needed for the click handlers only; no behavior change otherwise) and wired `phone_click` / `appointment_cta_click` events with a `location` label so each CTA's performance is distinguishable in GA4.
- `docs/seo/keyword-research-us.md` (new) — full keyword report.
- `docs/seo/implementation-report.md` (this file).

(Earlier in this session, unrelated to the keyword work: `public/images/hero-smile.svg` replaced the literal placeholder graphic, and `components/Icons.tsx` added icons used across the homepage — kept here for completeness since they also affect "what already works" in a future audit.)

## 5. Technical SEO — verified, not changed

- Sitemap (`app/sitemap.ts`) and robots (`app/robots.ts`) were inspected and are already correct for this single-domain, single-locale site. No dev/preview URLs leak into metadata — `siteConfig.siteUrl` defaults to a placeholder `.example` domain until `NEXT_PUBLIC_SITE_URL` is set in the real environment; **this must be set before launch** or the sitemap/canonicals/OG tags will point at the placeholder domain (see roadmap).
- No `noindex` directives exist anywhere in the codebase (checked all `page.tsx`/`layout.tsx` metadata exports) — nothing was accidentally indexed or deindexed.
- No redirect/rewrite rules exist in `next.config.ts` — none were needed since no URLs changed.

## 6. Analytics — what was verified vs. implemented

- **GA4 measurement ID is not currently set** (`NEXT_PUBLIC_GA4_MEASUREMENT_ID` is empty by default in `lib/config.ts`), so `GoogleAnalytics.tsx` renders nothing in the current environment — this was true before and after this change. The fix only takes effect once a real ID is supplied.
- I could not verify data arriving in a live GA4 property, because no property/ID was provided and no live deployment exists to test against. This is explicitly **not claimed as done** — only the code-level fix (route-change tracking, event wiring) is implemented and type-checked.
- Events implemented and ready to fire once a measurement ID is set: `page_view` (via route tracker), `phone_click`, `appointment_cta_click`, `booking_form_start`, `booking_request_submitted`, `booking_request_error`. `directions_click` and `service_page_view` from the spec were **not** wired — the contact page's map is a static embedded iframe with no clickable "Get Directions" link to attach the event to, and `service_page_view` is redundant with the route-based `page_view` tracker already covering every route including service pages. Documented here rather than added speculatively.

## 7. Google Search Console

No GSC access is connected to this environment. Owner action required once the site is live:
1. Verify the property in Search Console (DNS TXT record, HTML file, or meta tag — once a real domain replaces the placeholder `siteConfig.siteUrl`).
2. Submit `https://<real-domain>/sitemap.xml` (already generated correctly by `app/sitemap.ts`).
3. Monitor Index Coverage and Core Web Vitals reports after the first crawl.

## 8. Performance

Not separately profiled in this pass (no PageSpeed/Lighthouse run against a live URL). The homepage hero image was converted from a raster-adjacent placeholder graphic to a lightweight inline SVG illustration (smaller payload, infinitely scalable, no additional network request beyond the existing `next/image` optimization pipeline) in the earlier UI pass this session — a minor but real LCP-adjacent improvement for the hero element.

## 9. Tests performed

- `npm run build` — see result below.
- `npm run lint` — see result below.
- Manual verification of the updated hero/service/FAQ output in the browser preview (`localhost:3000`) — confirmed JSON-LD renders, no console errors introduced, mobile and desktop layouts intact (carried over from the earlier UI session).

## 10. Known limitations / remaining roadmap

1. **Production domain not set.** `NEXT_PUBLIC_SITE_URL` is a placeholder (`brightsmiledental.example`). Until the real domain is set in the deployment environment, sitemap/canonical/OG URLs will reference that placeholder. This is a one-line env var change, not a code change — flagged, not done, since it requires the real domain.
2. **GA4 measurement ID not set.** Same pattern — `NEXT_PUBLIC_GA4_MEASUREMENT_ID` needs a real property ID before any data flows.
3. **Google Search Console not connected.** Verification and sitemap submission are owner actions once the domain is live.
4. **Ubersuggest competitor analysis not run.** The connected account's single project slot is occupied by an unrelated domain (`beingguru.com`); true competitor-gap analysis for this dental site needs either a freed project slot or a plan upgrade.
5. **`/new-patients` and `/insurance-financing` copy not updated.** Their target keywords either weren't the focus of this pass or returned unavailable volume data in Ubersuggest — flagged for a follow-up pass rather than edited speculatively.
6. **No PageSpeed/Lighthouse run against a live URL** — only qualitative, code-level performance observations were made.
7. **CallRail / call-tracking** is still a documented TODO placeholder in `app/layout.tsx` (pre-existing, not part of this pass).

## 11. Commands to validate

```bash
npm run lint
npm run build
```

Results from this pass are recorded in-session; re-run these before every deploy.
