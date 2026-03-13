# SEO Implementation Roadmap - mymatpay.com

## Phase 1: Foundation (This Week)

### 1.1 Fix H1 Hierarchy
**File**: `src/components/PageHeader.js`
- Add `headingLevel` prop (default: 'h2', option: 'h1')
- Update all page components to pass `headingLevel="h1"` for their primary heading
- Verify HomePage already uses `<H1>` correctly
- Blog post titles should be wrapped in `<H1>` semantic component

### 1.2 Submit to Search Engines
- [ ] Google Search Console: verify via DNS TXT record or HTML file
- [ ] Submit `sitemap.xml` in GSC
- [ ] Request indexing for: `/`, `/calculator`, `/guide`, `/faq`, `/blog`
- [ ] Bing Webmaster Tools: submit site + sitemap
- [ ] Verify bot rendering: `curl -A "Googlebot" https://mymatpay.com/`

### 1.3 Internal Linking Pass
Add to each blog post a "Related Articles" section linking to 2-3 other internal pages:
- "Understanding NHS Maternity Pay" -> Guide, FAQ, Calculator
- "Bank Shifts" -> Calculator, Guide (AWE section), Maternity Pay by Band
- "Budgeting" -> Calculator, KIT Days, Returning to Work
- "Pay by Band" -> Calculator, Guide, Bank Shifts
- "Maternity Leave Rights" -> FAQ, KIT Days, Returning to Work
- "Returning to Work" -> KIT Days, Budgeting, Calculator
- "KIT Days" -> FAQ, Returning to Work, Calculator

### 1.4 Author Bylines
Add to all blog posts:
- Author name and brief credential
- "Last updated: [date]" visible on page
- Update Article schema to include author name

---

## Phase 2: Band Landing Pages (Weeks 2-4)

### Page Template
Each band page (e.g., `/nhs-maternity-pay-band-5`) should include:

1. **H1**: "NHS Maternity Pay for Band [X] Staff ([Year]/[Year])"
2. **Salary table**: Current AfC Band [X] salary points
3. **Week-by-week breakdown**: Full pay, half pay + SMP, SMP only, unpaid
4. **Monthly take-home comparison**: Normal salary vs maternity pay (net)
5. **Bank shifts impact**: "Pick up X extra per week = Y more over 39 weeks"
6. **CTA**: Link to calculator pre-filled with this band
7. **Related bands**: Links to adjacent bands
8. **FAQ section**: 3-4 band-specific questions

### Priority Order
1. Band 5 (nurses - highest search volume)
2. Band 6 (senior nurses, AHPs)
3. Band 3 (HCAs)
4. Band 7 (team leads, specialist practitioners)
5. Band 2 (support workers)
6. Band 4 (admin, assistant practitioners)
7. Band 8a-8d (management)
8. Band 9 (directors)

### Middleware Updates
Each new band page needs a corresponding entry in `middleware.js` ROUTE_META with:
- Unique title: "NHS Maternity Pay Band [X] [Year] | Calculator & Guide"
- Unique description targeting "nhs maternity pay band [X]"
- BreadcrumbList schema
- Canonical URL

### Sitemap Updates
Add all band pages to `sitemap.xml` with priority 0.8.

---

## Phase 3: New Blog Content (Weeks 3-8)

### Post 1: "Can You Spread NHS Maternity Pay Over 12 Months?"
- Target: "nhs maternity pay spread over 12 months"
- Content: Explain how spreading works, side-by-side comparison, pros/cons
- Word count: 1,200+
- Internal links: Calculator, Guide, Budgeting post

### Post 2: "NHS Maternity Pay and Your Pension"
- Target: "nhs maternity pay pension contributions"
- Content: How NHS pension works during maternity, employer vs employee contributions
- Word count: 1,000+
- Internal links: Guide, Calculator, FAQ

### Post 3: "Annual Leave During NHS Maternity Leave"
- Target: "nhs annual leave during maternity"
- Content: How leave accrues, can you add it to maternity, calculating days owed
- Word count: 800+
- Internal links: Rights post, Guide, FAQ

### Post 4: "NHS Maternity Pay for a Second Baby"
- Target: "nhs maternity pay second baby"
- Content: Eligibility if less than 12 months since return, concurrent leave rules
- Word count: 1,000+
- Internal links: Guide, Eligibility FAQ, Calculator

---

## Phase 4: New Calculator Tools (Weeks 8-16)

### Spread Pay Calculator
- Route: `/calculator/spread-pay`
- Input: Annual salary, band, due date
- Output: Side-by-side comparison of lumped vs spread monthly payments
- Schema: WebApplication

### Shared Parental Leave Calculator
- Route: `/calculator/shared-parental-leave`
- Input: Both parents' details, desired split
- Output: Week-by-week breakdown for each parent
- Schema: WebApplication

### Adoption Pay Calculator
- Route: `/calculator/adoption-pay`
- Input: Same as maternity but with adoption-specific dates
- Output: Same format as maternity calculator
- Schema: WebApplication

---

## Phase 5: Technical Improvements (Ongoing)

### Dynamic Sitemap
Create a build-time script that:
1. Reads all routes from a central config
2. Sets `lastmod` to build date for static pages
3. Sets `lastmod` to `datePublished` for blog posts
4. Outputs `sitemap.xml` to `public/`

### Unique OG Images
Create page-type-specific OG images:
- Calculator: Show calculator UI mockup
- Guide: "NHS Maternity Pay Guide 2026/27" text overlay
- Blog posts: Post title on branded background
- Band pages: "Band [X] Maternity Pay" text overlay

### Schema Expansion
- Add `HowTo` schema to calculator page
- Add `Person` schema for author on blog posts
- Add `FAQPage` schema to band pages (band-specific questions)
- Add `Product` schema to For Trusts page

---

## Tracking & Measurement

### Weekly Checks
- GSC: Index coverage, crawl errors, search queries
- GA4: Organic traffic, top landing pages, calculator conversions
- Bing Webmaster: Index status

### Monthly Reviews
- Keyword ranking changes (use GSC Performance report)
- Content performance: which blog posts drive traffic
- Core Web Vitals status
- Backlink growth (GSC Links report)
- Update this roadmap based on data
