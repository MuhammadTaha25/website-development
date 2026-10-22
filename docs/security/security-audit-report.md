# Security Audit Report — Bright Smile Dental Website

**Date:** 2026-10-22
**Scope:** Full codebase audit of the Next.js application at repo root (`D:\website development`, GitHub: `MuhammadTaha25/website-development`).
**Auditor:** Automated security review (Claude Code), acting as application security engineer.

## Executive Summary

This is a marketing/content site (Next.js 16, App Router) for a dental clinic. It has **no database, no user authentication, no sessions, and no admin panel** — content is static mock data (`content/mock-content.ts`), and the only server-side mutation path is a single lead-capture API route that forwards form submissions to an external webhook. This dramatically narrows the attack surface compared to a typical SaaS app: most of the audit's standard phases (authN/authZ, DB/RLS, file uploads, business-logic abuse) are **not applicable** — there is nothing to authenticate against and nothing to escalate privilege into.

The review found **no critical or high-severity vulnerabilities**. Three real, fixable issues were identified and **fixed and verified** in this pass — all defense-in-depth or latent-risk items rather than actively exploitable holes today, because the specific data that would trigger them (user-submitted reviews, third-party API output echoed into page content) isn't currently wired into the site. They were fixed anyway because the gaps are cheap to close and the site's own roadmap (autoblog pipeline, planned live Google reviews) will start feeding exactly that kind of data through these code paths. One informational item (missing CSP) is documented but intentionally not auto-implemented, per the audit's own guardrail against breaking legitimate integrations (Google Analytics' inline script) with a rushed CSP.

No secrets, credentials, or API keys were found committed to the repository. `npm audit` found zero vulnerabilities in production dependencies.

## Findings Table

| ID | Severity | Finding | Affected Component | Evidence | Fix Applied | Verification |
|----|----------|---------|---------------------|----------|-------------|---------------|
| SEC-1 | Medium | JSON-LD script injection via unescaped `<` in `JSON.stringify` output | `components/JsonLd.tsx` | `dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}` — if any field in `data` ever contains the substring `</script>`, it prematurely closes the `<script type="application/ld+json">` tag, letting the remainder of the string be parsed as HTML/script by the browser. Not currently reachable by an external attacker (all current `data` sources are static site config / mock content), but `JsonLd` is used for reviews and blog schema, both of which are slated to become dynamic (live Google reviews, autoblog posts). | Escaped `<` → `\u003c` in the JSON string before injection (valid inside a JSON string, inert in HTML, so it can't close the tag). | Fixed & verified: `npm run build` succeeds; JSON-LD blocks on `/`, `/reviews`, `/services/[slug]`, `/emergency-dentist-austin` render correctly in preview. |
| SEC-2 | Medium | Unsanitized HTML injection point in blog content pipeline | `app/blog/[slug]/page.tsx`, `content/mock-content.ts` | Blog post bodies are authored as raw HTML strings and rendered via `dangerouslySetInnerHTML` with zero sanitization. Today this content is written by a trusted author (clinic owner / the autoblog scheduled task), so it isn't attacker-reachable. The latent risk is the autoblog pipeline itself: it drafts post content partly from third-party keyword-research API responses (Ubersuggest/NeilPatel MCP connector). If that upstream response ever echoed attacker-influenced text (e.g., a crafted "keyword" containing markup) and the draft step copied it verbatim into HTML, it would become stored XSS served to every site visitor. | Added `lib/sanitize-html.ts` — a minimal allowlist sanitizer that strips `<script>/<style>/<iframe>/<object>/<embed>/<form>` and other executable-content tags, all `on*` event-handler attributes, and `javascript:`/`data:`/`vbscript:` URIs in `href`/`src`/`action` attributes — and wired it into the blog render path as the single choke point all post HTML passes through, regardless of which pipeline produced it. | Fixed & verified: `npm run build` succeeds; the existing "All-on-4 Dental Implants" post (headings, lists, bold text, outbound `<a>` links) renders identically after sanitization — nothing legitimate was stripped. |
| SEC-3 | Medium | No baseline HTTP security headers | `next.config.ts` | No `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, or `Strict-Transport-Security` headers were set anywhere in the app, leaving default (absent) browser protections against MIME-sniffing, clickjacking (framing the booking form on an attacker page), and accidental HTTP downgrade. | Added a `headers()` function in `next.config.ts` setting `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, a conservative `Permissions-Policy` (camera/mic/geolocation/payment denied), and HSTS. | Fixed & verified: confirmed via `curl -D -` against the local prod-mode server that all five headers are present on responses. |
| SEC-4 | Informational | `dangerouslyAllowSVG: true` in Next.js image config | `next.config.ts` | SVGs can embed `<script>`, and Next's image optimizer is a documented historical XSS vector when this flag is on *and* the optimizer serves attacker-controllable SVGs. | Not changed — no `images.domains`/`remotePatterns` are configured, so `next/image` only ever optimizes local files already committed to `/public`, never attacker-supplied SVGs. Documented here rather than "fixed" because disabling it would break the existing placeholder gallery SVGs for no real security gain. | Documented only; re-evaluate if remote image domains are ever added. |
| SEC-5 | Informational | No Content-Security-Policy | `next.config.ts` | A CSP would add defense-in-depth against injection scenarios (including SEC-1/SEC-2 if a gap is ever found in those fixes). | Not implemented. Google Analytics (`components/GoogleAnalytics.tsx`) injects an inline `<script>` without a nonce; a correctly-scoped CSP requires either `'unsafe-inline'` (weak) or wiring a per-request nonce through Next's CSP middleware pattern, which is a larger, higher-risk change than this pass should make unreviewed. Per the audit's own instruction not to ship a CSP that breaks legitimate integrations, this is left as a recommendation. | Not implemented — recommendation only. |
| SEC-6 | Informational | Dev-only dependency DoS advisory | `node_modules` (via `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces`) | `npm audit` reports a high-severity stack-exhaustion DoS in `braces`, pulled in transitively by the **lint tooling only** (devDependency, never shipped to the deployed app) via `eslint-config-next@16.4.2`. DoS findings and dependency-version findings are both explicitly out of scope per this audit's exclusion rules, and the only fix path (`npm audit fix --force`) force-downgrades `eslint-config-next` to `14.2.35`, a breaking change to lint tooling for no production security benefit. | Not changed. | N/A — documented only. |

## Remediation Details

**Root cause (SEC-1, SEC-2):** both are instances of the same underlying pattern — HTML/script content injected via `dangerouslySetInnerHTML` without the injected string being escaped or sanitized against the context it's placed in. This is safe *today* only because every current data source feeding those two components happens to be static and author-controlled; the fixes remove that "happens to be" dependency so the components are safe regardless of what future data sources (live reviews, AI-drafted posts) feed them.

**Root cause (SEC-3):** the app was scaffolded without a `headers()` block in `next.config.ts`; Next.js does not set these headers by default.

**Files changed:**
- `components/JsonLd.tsx` — escape `<` in JSON-LD output.
- `lib/sanitize-html.ts` — new file, allowlist HTML sanitizer.
- `app/blog/[slug]/page.tsx` — sanitize blog HTML before rendering.
- `next.config.ts` — added `headers()` with 5 baseline security headers.

**Tests executed:**
- `npm run build` (full production build + type check) — passed, no errors, after each fix.
- `npm audit` (production + full) — 0 vulnerabilities in prod dependencies.
- Manual verification in a live preview browser: blog post page renders correctly post-sanitization (headings, lists, links, image, author bio all intact); `curl -D -` against the local server confirms all 5 new headers are present on every response.
- `git grep` sweep for `process.env`/`NEXT_PUBLIC_` usage — confirmed no server-only secret (`SANITY_API_READ_TOKEN`, `GOOGLE_PLACES_API_KEY`, `BOOKING_LEAD_DESTINATION`) is referenced from any client component or exposed via a `NEXT_PUBLIC_` prefix.
- `git log --all --full-history -- "*.env*"` — confirmed no `.env` file has ever been committed; `.gitignore` correctly excludes `.env*` except the placeholder-only `.env.example`.

No regression tests were added beyond the manual/build verification above, since the project has no existing test suite (`package.json` defines no `test` script) — adding a full testing framework was judged out of scope for a security-fix pass and would be a separate, larger change.

## Areas Reviewed and Found Not Applicable / No Issues

- **Authentication & sessions:** none exist in this app — no login, no user accounts, nothing to attack.
- **Authorization / IDOR / privilege escalation:** no multi-tenant or per-user data; not applicable.
- **Database / RLS:** no database — all content is static TypeScript mock data (`content/mock-content.ts`), explicitly scaffolded to be swapped for a real Sanity CMS client later (`lib/sanity-client.ts`). Noted for a **future** audit once that swap happens — a real CMS integration will need its own read/write token scoping review at that time.
- **File uploads:** the app accepts no file uploads anywhere.
- **SSRF:** the one server-side `fetch()` (`app/api/book-appointment/route.ts`) calls a fixed, operator-configured env var (`BOOKING_LEAD_DESTINATION`), never a user-supplied URL — not attacker-influenceable.
- **SQL/NoSQL/command injection:** no database or shell command execution anywhere in the app.
- **Secrets in source:** none found; `.gitignore` correctly excludes env files; `.env.example` contains only placeholders.
- **CORS:** no custom CORS headers are set; default same-origin Next.js behavior applies and is appropriate (no cross-origin API consumption is intended).
- **CSRF on the booking endpoint:** the lead-capture endpoint has no session/cookie-based auth, so classic session-riding CSRF doesn't apply. A hostile page could still silently POST a fabricated lead to `/api/book-appointment` (lead-spam), but this is a rate-limiting/abuse concern explicitly excluded from this audit's scope, and the endpoint only *forwards* data to an operator-controlled destination — it doesn't expose, store, or mutate any sensitive state itself.
- **Dependency/supply chain:** zero production-dependency vulnerabilities (`npm audit`); the one dev-only finding is documented in SEC-6 and out of scope per the audit's own exclusion rules (DoS, dependency-version management).

## Remaining Risks / Recommendations for the Operator

1. **No CSP (SEC-5).** Recommended before any future feature adds more third-party scripts: migrate Google Analytics' inline init script to Next's nonce-based CSP pattern, then ship a `script-src 'self' 'nonce-...' https://www.googletagmanager.com` policy. This needs deliberate testing against GA4/GTM and was intentionally not rushed in this pass.
2. **Autoblog content trust boundary (mitigated by SEC-2, but process-level recommendation):** the scheduled autoblog task should ideally pass its drafted HTML through `lib/sanitize-html.ts` (or an equivalent check) *before* committing it to `content/mock-content.ts`, not rely solely on render-time sanitization — defense in depth at the source, not just the sink.
3. **When a real CMS (Sanity) replaces the mock content layer**, re-run this audit against the new read/write token scoping, draft-preview auth, and any webhook signature verification Sanity's revalidation hooks would need.
4. **If live Google Reviews are wired up** (`GOOGLE_PLACES_API_KEY`/`GOOGLE_PLACES_ID`, currently unused), the JSON-LD fix (SEC-1) already covers the main injection risk, but review text should still be rendered as plain React children (auto-escaped), not via `dangerouslySetInnerHTML`, when that feature is built.
5. **Lead-capture spam:** if `/api/book-appointment` sees abuse once `BOOKING_LEAD_DESTINATION` is live, add basic bot mitigation (e.g., a honeypot field or simple origin check) — explicitly out of scope for this security pass but worth tracking operationally.

## Final Verification Status

| Item | Status |
|------|--------|
| SEC-1 (JSON-LD escaping) | **Fixed and verified** |
| SEC-2 (blog HTML sanitization) | **Fixed and verified** |
| SEC-3 (security headers) | **Fixed and verified** |
| SEC-4 (SVG image flag) | Reviewed — no fix needed, documented |
| SEC-5 (CSP) | **Confirmed vulnerability-adjacent gap requiring a deliberate follow-up change** — not fixed in this pass |
| SEC-6 (dev dependency DoS) | Reviewed — out of scope, documented |
| Secrets exposure | Reviewed — none found |
| Dependency audit | Reviewed — 0 production vulnerabilities |
