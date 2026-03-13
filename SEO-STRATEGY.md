# mymatpay.com SEO Strategy 2026

## Executive Summary

mymatpay.com is a free NHS maternity pay calculator targeting NHS Agenda for Change staff. The site has strong technical SEO foundations (bot-friendly middleware, semantic HTML, structured data) but faces two critical challenges: **zero Google indexation** (SPA architecture) and **thin content relative to competitors**. This strategy focuses on fixing indexation, building topical authority through band-specific and tool-based content, and exploiting gaps no competitor covers.

**Primary goal**: Rank page 1 for "NHS maternity pay calculator" and related long-tail keywords within 6 months.

---

## Competitive Landscape

### Top 5 Competitors

| Rank | Site | Strength | Weakness | Threat Level |
|------|------|----------|----------|:------------:|
| 1 | **gov.uk** maternity calculator | Massive DA, official | Generic SMP only, no NHS OMP, no bands | Low (different tool) |
| 2 | **nhstakehomepaycalculator.co.uk** | Full tools hub, band guides, 2026/27 data | Broad focus (pay, pension, redundancy) | **High** |
| 3 | **maternitycalculator.co.uk/nhs** | Ranks well, simple UX | Thin content (2 pages), no blog, no bands | Medium |
| 4 | **affinityadvice.co.uk** | Deep NHS maternity guide, upsells financial products | No calculator tool | Medium |
| 5 | **maternitypaycalculator.com** | Exact-match domain | Generic, not NHS-specific | Low |

### Our Competitive Advantage

1. **NHS-only focus** - deeper than any competitor on maternity pay specifically
2. **Interactive calculator** with band-level granularity, bank shifts modelling, and net pay
3. **Bot-friendly middleware** serving full HTML + structured data to crawlers
4. **B2B angle** (For Trusts page) that no competitor has
5. **Content depth** - 7 blog posts + guide + FAQ already written

### Key Gaps to Exploit

No competitor offers:
- Band-specific landing pages (e.g., "/nhs-maternity-pay-band-5")
- Spread pay comparison calculator (lumped vs spread over 12 months)
- Shared Parental Leave (SPL) calculator for NHS
- Adoption pay calculator for NHS
- Annual leave accrual calculator during maternity
- Pension impact calculator during maternity
- Maternity pay timeline/calendar view

---

## Keyword Strategy

### Primary Keywords (High Priority)

| Keyword | Est. Monthly Volume | Difficulty | Current Ranking | Target Page |
|---------|:-------------------:|:----------:|:---------------:|-------------|
| nhs maternity pay calculator | High | Medium | Not indexed | `/calculator` |
| nhs maternity pay | High | Medium | Not indexed | `/guide` |
| nhs maternity pay 2026 | Medium | Low | Not indexed | `/guide` |
| nhs occupational maternity pay | Medium | Low | Not indexed | `/guide` |
| nhs maternity pay calculator 2026/27 | Medium | Low | Not indexed | `/calculator` |

### Secondary Keywords (Band-Specific)

| Keyword | Target Page |
|---------|-------------|
| nhs maternity pay band 5 | `/nhs-maternity-pay-band-5` (NEW) |
| nhs maternity pay band 6 | `/nhs-maternity-pay-band-6` (NEW) |
| nhs maternity pay band 3 | `/nhs-maternity-pay-band-3` (NEW) |
| nhs maternity pay band 2 | `/nhs-maternity-pay-band-2` (NEW) |
| nhs maternity pay band 7 | `/nhs-maternity-pay-band-7` (NEW) |
| nhs maternity pay band 8a | `/nhs-maternity-pay-band-8` (NEW) |

### Long-Tail Keywords (Blog/Content Targets)

| Keyword | Target Content |
|---------|---------------|
| how much maternity pay nhs band 5 | Band 5 landing page |
| nhs maternity pay spread over 12 months | NEW blog post |
| nhs shared parental leave calculator | NEW tool page |
| nhs maternity pay and pension | NEW blog post |
| nhs maternity pay less than 12 months | FAQ expansion |
| can I pick up bank shifts to boost maternity pay | Existing blog post |
| nhs kit days pay | Existing blog post |
| nhs maternity pay second baby | NEW blog post |
| nhs adoption pay calculator | NEW tool page |
| nhs annual leave during maternity | NEW blog post |

---

## Site Architecture

### Current Structure
```
mymatpay.com/
  /                          Home (landing)
  /calculator                Main calculator tool
  /guide                     How NHS maternity pay works
  /faq                       16 Q&A items
  /blog                      Blog index (7 posts)
  /blog/:slug                Individual blog posts
  /for-trusts                B2B landing page
  /about                     About page
  /contact                   Contact page
  /terms                     Terms of service
  /privacy                   Privacy policy
```

### Proposed Structure (Phase 2+)
```
mymatpay.com/
  /                                    Home
  /calculator                          Main calculator
  /calculator/shared-parental-leave    SPL calculator (NEW)
  /calculator/adoption-pay             Adoption pay calculator (NEW)
  /calculator/spread-pay               Spread pay comparison (NEW)
  /guide                               Main guide (pillar)
  /guide/eligibility                   Eligibility deep-dive (NEW)
  /guide/how-pay-is-calculated         AWE calculation explained (NEW)
  /nhs-maternity-pay-band-2            Band 2 landing page (NEW)
  /nhs-maternity-pay-band-3            Band 3 landing page (NEW)
  /nhs-maternity-pay-band-4            Band 4 landing page (NEW)
  /nhs-maternity-pay-band-5            Band 5 landing page (NEW)
  /nhs-maternity-pay-band-6            Band 6 landing page (NEW)
  /nhs-maternity-pay-band-7            Band 7 landing page (NEW)
  /nhs-maternity-pay-band-8            Band 8a-8d landing page (NEW)
  /nhs-maternity-pay-band-9            Band 9 landing page (NEW)
  /faq                                 FAQ (expanded)
  /blog                                Blog index
  /blog/:slug                          Blog posts (expanded)
  /for-trusts                          B2B page
  /about                               About
  /contact                             Contact
  /terms                               Terms
  /privacy                             Privacy
```

### Internal Linking Strategy

**Hub-and-Spoke Model:**
- **Hub**: `/guide` (pillar page)
- **Spokes**: Band pages, blog posts, FAQ, calculator
- Every band page links to calculator (pre-filled with that band)
- Every blog post links to at least 2 other internal pages
- FAQ answers link to relevant guide sections and blog posts
- Calculator results page links to relevant blog content

**Cross-linking Rules:**
1. Every page links to `/calculator` (primary CTA)
2. Blog posts include "Related articles" section (2-3 links)
3. Band pages link to each other ("See pay for other bands")
4. Guide sections link to relevant FAQ items
5. Footer contains full sitemap links

---

## Content Strategy

### Content Pillars

1. **Calculator Tools** - Interactive calculators (primary conversion)
2. **Pay Guides** - Band-specific and topic-specific guides (organic traffic)
3. **Rights & Policy** - Employment rights, legal protections (trust/authority)
4. **Financial Planning** - Budgeting, pension, return-to-work (engagement)
5. **Real Scenarios** - Worked examples, case studies (long-tail SEO)

### Content Calendar

#### Month 1 (Foundation)
| Week | Content | Type | Target Keyword |
|------|---------|------|----------------|
| 1 | Fix H1 hierarchy across all pages | Technical | - |
| 1 | Submit to Google Search Console | Technical | - |
| 2 | Band 5 landing page | Landing page | nhs maternity pay band 5 |
| 2 | Band 6 landing page | Landing page | nhs maternity pay band 6 |
| 3 | Band 3 landing page | Landing page | nhs maternity pay band 3 |
| 3 | Band 7 landing page | Landing page | nhs maternity pay band 7 |
| 4 | Blog: "NHS Maternity Pay Spread Over 12 Months" | Blog post | nhs maternity pay spread |
| 4 | Blog: "NHS Maternity Pay and Pension" | Blog post | nhs maternity pay pension |

#### Month 2 (Expansion)
| Week | Content | Type | Target Keyword |
|------|---------|------|----------------|
| 1 | Band 2 + Band 4 landing pages | Landing pages | band-specific |
| 2 | Band 8 + Band 9 landing pages | Landing pages | band-specific |
| 3 | Blog: "Annual Leave During Maternity" | Blog post | nhs annual leave maternity |
| 3 | Blog: "Maternity Pay Second Baby" | Blog post | nhs maternity pay second baby |
| 4 | Spread Pay comparison calculator | Tool | nhs spread maternity pay |

#### Month 3 (Authority)
| Week | Content | Type | Target Keyword |
|------|---------|------|----------------|
| 1 | Shared Parental Leave calculator | Tool | nhs shared parental leave calculator |
| 2 | Blog: "NHS SPL Explained" | Blog post | nhs shared parental leave |
| 3 | Adoption Pay calculator | Tool | nhs adoption pay |
| 4 | Blog: "Unsocial Hours and Maternity Pay" | Blog post | nhs unsocial hours maternity |

#### Months 4-6 (Scale)
- Expand FAQ to 25+ questions
- Add "Related articles" sections to all blog posts
- Create comparison content: "NHS Maternity Pay vs Private Sector"
- Build topical authority with data-driven posts
- Outreach to NHS staff forums, Mumsnet, Reddit r/nhsstaff

### E-E-A-T Signals

**Experience:**
- Add author byline to blog posts (real person, not brand)
- Include "Written by [name], reviewed by [NHS HR professional]" where possible
- Add "Last updated" timestamps to all content pages

**Expertise:**
- Cite NHS Employers guidance, AfC handbook, gov.uk directly
- Link to primary sources (nhsemployers.org, gov.uk)
- Include methodology disclosure on calculator page

**Authoritativeness:**
- Build backlinks from NHS staff forums and communities
- Get listed on Mumsnet, NetMums as a resource
- Pursue mentions in NHS staff newsletters

**Trust:**
- Clear disclaimer on every calculator/guide page
- Privacy policy and terms already in place
- Independent tool - not affiliated with NHS (stated clearly)

---

## Technical SEO Priorities

### CRITICAL: Indexation Fix

The site is a React Native/Expo SPA. Search engines may struggle to index client-rendered content. Your middleware partially solves this by serving HTML to bots, but you should verify:

1. **Google Search Console**: Submit site, check "URL Inspection" for each key page
2. **Test bot rendering**: `curl -H "User-Agent: Googlebot" https://mymatpay.com/` - verify full HTML is returned
3. **Verify middleware coverage**: Ensure ALL routes (including future band pages) get proper meta injection
4. **Consider**: If GSC shows indexation issues, implement full SSR via pre-rendering service or migrate to Next.js

### H1 Hierarchy Fix

Currently `PageHeader` renders `<H2>` as the top heading. Every page should have exactly one `<H1>`:

| Page | Current Top Heading | Fix |
|------|-------------------|-----|
| Home | H1 (correct) | None |
| Calculator | H2 via PageHeader | Change to H1 |
| Guide | H2 via PageHeader | Change to H1 |
| FAQ | H2 via PageHeader | Change to H1 |
| Blog index | H2 via PageHeader | Change to H1 |
| Blog posts | H2 (articleTitle style) | Wrap in H1 |
| For Trusts | H2 via PageHeader | Change to H1 |
| About | H2 via PageHeader | Change to H1 |
| Contact | H2 via PageHeader | Change to H1 |

### Schema Markup Plan

| Page Type | Schema Types | Status |
|-----------|-------------|--------|
| All pages | Organization, WebSite, BreadcrumbList | Done |
| Home | WebApplication | Done |
| Calculator | WebApplication, HowTo | WebApp done, add HowTo |
| Guide | Article, HowTo | Add |
| FAQ | FAQPage | Done |
| Blog posts | Article, BlogPosting | Done |
| Band pages | WebPage, FAQPage (band-specific Qs) | NEW |
| For Trusts | Product, Organization | Add |
| About | AboutPage, Person | Add |

### Core Web Vitals Targets

| Metric | Target | Notes |
|--------|--------|-------|
| LCP | < 2.5s | Monitor after ad load |
| INP | < 200ms | Calculator interactions are key |
| CLS | < 0.1 | Watch for ad-induced layout shift |

### Other Technical Items

- [ ] Dynamic sitemap generation (build-time script)
- [ ] Unique OG images per page type (at least calculator, guide, blog)
- [ ] Image alt text audit
- [ ] Verify canonical URLs are correct on all pages
- [ ] Add `dateModified` to article schema when content is updated
- [ ] Monitor Core Web Vitals in GSC after AdSense deployment

---

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-4)

**Goal**: Get indexed and fix critical SEO issues

- [ ] Submit to Google Search Console
- [ ] Verify bot rendering returns full HTML for all routes
- [ ] Fix H1 hierarchy (PageHeader component)
- [ ] Add `dateModified` to article/blog schema
- [ ] Create Band 5 and Band 6 landing pages (highest traffic bands)
- [ ] Add "Related articles" to existing blog posts
- [ ] Add author bylines to blog posts
- [ ] Submit sitemap to Google and Bing
- [ ] Request indexing for key pages via GSC URL Inspection

**KPI**: 10+ pages indexed in Google

### Phase 2: Expansion (Weeks 5-12)

**Goal**: Build content depth and topical authority

- [ ] Create remaining band landing pages (2, 3, 4, 7, 8, 9)
- [ ] Publish 4 new blog posts (spread pay, pension, annual leave, second baby)
- [ ] Build Spread Pay comparison calculator
- [ ] Expand FAQ to 25+ questions
- [ ] Implement internal linking strategy across all pages
- [ ] Add HowTo schema to calculator and guide
- [ ] Create unique OG images for calculator, guide, and blog index
- [ ] Build dynamic sitemap generation into build process

**KPI**: 25+ pages indexed, ranking for 5+ long-tail keywords

### Phase 3: Scale (Weeks 13-24)

**Goal**: Target competitive keywords and build authority

- [ ] Launch SPL calculator
- [ ] Launch Adoption Pay calculator
- [ ] Publish 6+ new blog posts targeting long-tail gaps
- [ ] Outreach to NHS staff communities (Mumsnet, Reddit, Facebook groups)
- [ ] Submit to "NHS resources" directories and link roundups
- [ ] Monitor and optimise Core Web Vitals
- [ ] A/B test meta descriptions for CTR improvement
- [ ] Track and respond to GSC performance data

**KPI**: Top 10 for "nhs maternity pay calculator", 50+ indexed pages, 1,000+ monthly organic sessions

### Phase 4: Authority (Months 7-12)

**Goal**: Dominate the NHS maternity pay niche

- [ ] Build comparison content (NHS vs private sector maternity pay)
- [ ] Create downloadable resources (maternity pay checklist PDF)
- [ ] Pursue NHS Trust partnerships and backlinks
- [ ] Expand to Scotland/Wales-specific maternity pay differences
- [ ] Launch annual "NHS Maternity Pay Guide [Year]" update cycle
- [ ] Consider featured snippets optimisation for FAQ answers
- [ ] Explore PR/media mentions (NHS staff publications)

**KPI**: Top 3 for primary keywords, 5,000+ monthly organic sessions, DA 20+

---

## KPI Targets

| Metric | Current | 3 Month | 6 Month | 12 Month |
|--------|---------|---------|---------|----------|
| Indexed Pages | 0 | 15+ | 30+ | 50+ |
| Organic Traffic (monthly) | 0 | 200+ | 1,500+ | 5,000+ |
| Top 10 Rankings | 0 | 5+ | 15+ | 30+ |
| Domain Authority | New | 5+ | 10+ | 20+ |
| Core Web Vitals | Unknown | All green | All green | All green |
| Backlinks | 0 | 5+ | 15+ | 40+ |

---

## Quick Wins (Do This Week)

1. **Google Search Console** - Submit site, verify ownership, submit sitemap
2. **Bing Webmaster Tools** - Submit site
3. **Fix H1s** - Update PageHeader to support H1 variant
4. **Request indexing** - Use GSC URL Inspection for `/`, `/calculator`, `/guide`
5. **Check bot rendering** - `curl -A Googlebot https://mymatpay.com/` and verify full HTML

---

## Budget Considerations

This strategy requires **zero paid tools or services**. All recommendations use:
- Free Google Search Console and Bing Webmaster Tools
- Content created by you/Claude
- Existing Vercel hosting (no additional cost)
- Community outreach (time investment only)

The only potential cost is if SSR migration becomes necessary (currently mitigated by middleware).
