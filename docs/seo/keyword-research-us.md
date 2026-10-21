# US Keyword Research — Bright Smile Dental

**Target market:** United States (location id `2840`, resolved via Ubersuggest `location_suggest`). Austin, TX also resolved (`1026201`) for reference, but used only for context — none of the researched terms had enough Austin-specific volume to report separately; see "Local SEO" note below.
**Language:** English (`en`)
**Data source:** Ubersuggest MCP (`keyword_overview` / `location_suggest`), account tier0, authenticated as `infomist123@gmail.com`.
**Date retrieved:** 2026-10-21
**Business details used:** Pulled from `lib/config.ts` — practice name, Austin/TX address, phone, and the six services actually defined in `content/mock-content.ts` (Dental Implants, Invisalign, Teeth Whitening, Root Canal Therapy, Emergency Dentistry, Veneers). No services or locations were invented.

## Methodology

1. Resolved the US location and Austin, TX location via `location_suggest`.
2. Built a seed list from the practice's actual services plus the audit's suggested categories (general, cosmetic, restorative, emergency, cost/financial).
3. Queried each seed with `keyword_overview` (US location, English), which returns volume, CPC, SEO difficulty, paid difficulty, competition, and a search-intent label in one call.
4. Checked account quota before and after (`user_limits`) — well within the 50/month keyword-metrics allowance and the 100/month report allowance (18 `keyword_overview` calls used).
5. Discarded keywords with no genuine relevance to a real practice capability.

**Limitation:** Ubersuggest returned `search_volume: 0` / `search_intent: null` for several long-tail "near me" and cost queries (noted below as *unavailable*). This is a data-availability gap in the free/tier0 tool, not a fabricated zero — it is reported honestly rather than estimated.

## Keyword Data

| Keyword | US Monthly Volume | SEO Difficulty | Paid Difficulty | CPC | Search Intent | Target Page | Priority |
|---|---:|---:|---:|---:|---|---|---|
| dental implants near me | 90,500 | 8 | 22 | $39.71 | Commercial | /services/dental-implants | **P1** |
| teeth whitening near me | 60,500 | 10 | 11 | $6.82 | *unavailable* | /services/teeth-whitening | **P1** |
| dentist near me | 1,830,000 | 21 | 61 | $13.35 | Commercial | / (homepage) | **P1** |
| cosmetic dentist | 90,500 | 31 | 12 | $15.17 | Commercial | /services | **P2** |
| dental implants cost | 165,000 | 41 | 24 | $16.46 | Informational | /services/dental-implants (FAQ) | **P2** |
| teeth whitening cost | 9,900 | 23 | 70 | $6.03 | Informational | /services/teeth-whitening (FAQ) | **P2** |
| general dentist | 27,100 | 42 | 17 | $10.15 | Informational | /about, /services | **P3** |
| dentist in austin tx | 6,600 | 34 | 54 | $17.87 | Navigational | / (homepage, local/brand) | **P3** |
| new patient dentist near me | 210 | 43 | 63 | $18.45 | Commercial | /new-patients | **P3** |
| family dentist austin | 260 | 40 | 55 | $8.07 | Navigational | / (homepage) | **P4** |
| emergency dentist near me | *unavailable* | 27 | 1 | $0 | Navigational | /emergency-dentist-austin | **P3** (relevance override) |
| same day dentist | *unavailable* | 12 | 1 | $0 | *unavailable* | /emergency-dentist-austin | **P4** |
| invisalign cost | *unavailable* | 37 | 1 | $0 | *unavailable* | /services/invisalign (FAQ) | **P4** |
| invisalign near me | *unavailable* | 26 | 1 | $0 | *unavailable* | /services/invisalign | **P4** |
| porcelain veneers | *unavailable* | 40 | 1 | $0 | *unavailable* | /services/veneers | **P4** |
| veneers cost | *unavailable* | 28 | 1 | $0 | Commercial | /services/veneers (FAQ) | **P4** |
| root canal cost | *unavailable* | 31 | 1 | $0 | *unavailable* | /services/root-canal-therapy (FAQ) | **P4** |
| affordable dentist near me | *unavailable* | 4 | 1 | $0 | *unavailable* | /insurance-financing | **P4** |
| dentist that accepts my insurance | *unavailable* | 4 | 1 | $0 | *unavailable* | /insurance-financing | **P4** |

*"Unavailable" = Ubersuggest returned `0`/`null` for this metric at the time of retrieval. Treat these as plausible long-tail targets based on relevance and low difficulty, not as confirmed demand.*

## Top 10 priorities and reasoning

1. **dental implants near me** — exceptional combination: real volume (90.5K/mo), very low difficulty (8), high commercial intent, and the highest CPC in the set ($39.71, signaling strong advertiser willingness-to-pay = strong patient value). The practice already offers implants. Primary target for `/services/dental-implants`.
2. **teeth whitening near me** — 60.5K/mo volume at SD 10. Extremely attainable. Primary target for `/services/teeth-whitening`.
3. **dentist near me** — enormous volume (1.83M/mo) with moderate difficulty (21) and Commercial intent. Realistic as a homepage secondary target (won't rank #1 nationally, but supports local-pack and long-tail "near me" variants given the site's `Dentist` LocalBusiness schema).
4. **cosmetic dentist** — 90.5K/mo, Commercial intent, moderate SD (31), strong CPC. Good fit for the services index / cosmetic-leaning content (whitening, veneers, Invisalign all roll up here).
5. **dental implants cost** — 165K/mo, Informational. Doesn't replace the commercial "near me" page but is a strong FAQ/content addition on the same implants page (already had a cost FAQ — kept, not duplicated).
6. **teeth whitening cost** — 9.9K/mo, supports the whitening page FAQ (added).
7. **general dentist** — 27.1K/mo, Informational, moderate difficulty; useful supporting context on `/about` and the services index rather than a page of its own.
8. **dentist in austin tx** — lower volume (6.6K) and Navigational intent (people searching for a specific, already-known business), so it's a secondary/local-relevance signal rather than a primary acquisition target — correctly reflected in the existing title pattern (`[Service] in Austin, TX | Bright Smile Dental`) rather than a dedicated page.
9. **new patient dentist near me** — low volume (210) but Commercial intent and high CPC ($18.45) — a strong-value, low-competition long-tail match for `/new-patients`.
10. **emergency dentist near me** — volume unavailable in this data pull, but SD is low (27) and the query is unambiguously relevant to `/emergency-dentist-austin`, which already exists and already ranks for the exact-match local phrase in its slug/title. Kept as a priority on relevance grounds, flagged as unverified volume.

## Low-difficulty opportunities (SD < 15)

- dental implants near me (SD 8)
- teeth whitening near me (SD 10)
- same day dentist (SD 12, volume unavailable)
- affordable dentist near me / dentist that accepts my insurance (SD 4, volume unavailable — likely long-tail with real but small demand not captured by this tool)

## Commercial / transactional opportunities

dental implants near me, dentist near me, cosmetic dentist, new patient dentist near me, veneers cost. These map to service and conversion pages, not blog content.

## Local relevance

The practice is a **single-location** Austin, TX clinic (`lib/config.ts`). "dentist in austin tx" and "family dentist austin" are both low-volume and Navigational — they describe people who already know (or assume) the practice's city, not people comparing providers. They support the existing city-suffixed title-tag pattern and the `Dentist` LocalBusiness JSON-LD (NAP: name, address, phone all sourced from `siteConfig`), but are not treated as standalone acquisition targets, per the instruction not to over-invest in low-value local variants.

## Excluded keywords and why

- Any insurance-carrier-specific query (e.g., "dentist that accepts Delta Dental") — the codebase has no verified list of accepted carriers to target honestly; `siteConfig` only states "most insurance plans accepted" generically. Targeting a specific carrier name without confirmation would be a false claim.
- Nationwide, chain-scale terms (e.g., generic "dental implants" with no location qualifier at very high difficulty) — unrealistic ranking potential for a single-location site competing against national chains and directories.
- Any treatment not in `content/mock-content.ts` (e.g., braces, dentures, pediatric dentistry) — not offered by this practice per the available data, so not targeted.

## Competitor observations

Ubersuggest's competitor/domain-analysis tools were not run in this pass — the connected account's single project slot is already occupied by an unrelated existing project (`beingguru.com`, 25/25 keywords and 2/2 competitor slots used), and the account is capped at 1 project on tier0. Running true competitor domain comparisons for this dental site would require either freeing that project or upgrading the plan. **This is a documented blocker, not a skipped step** — see the roadmap below.

## Quota / limitations summary

- `monthly_keyword_metrics_updates`: 1/50 used (the per-metric `keyword_metrics` call; switched to the more efficient `keyword_overview` call for the rest, which did not consume this quota in testing).
- `reports`: 25/100 used after this research pass.
- Projects: 1/1 already allocated to an unrelated domain — blocks project-based rank tracking and competitor comparison for this site without an account change.
- No `monthly_searches` local-market breakdown (US-only, not Austin-metro-only) was available from this endpoint — all volumes above are national US, which is the best resolution this tool exposes.
