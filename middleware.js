// Vercel Edge Middleware — injects per-route meta tags and structured data
// for bots that don't execute JavaScript (social crawlers + search engines + AI crawlers)

const ROUTE_META = {
  '/': {
    title: 'NHS Maternity Pay Calculator \u2014 Free Estimate for NHS Staff',
    description: 'Free NHS maternity pay calculator. Estimate your Occupational Maternity Pay, SMP, and total leave income based on your NHS pay band. Instant results, no sign-up.',
    ogType: 'website',
  },
  '/calculator': {
    title: 'Calculate Your NHS Maternity Pay | mymatpay.com',
    description: 'Use our free calculator to estimate your NHS maternity pay. Enter your pay band, salary, and leave details to get an instant breakdown of your take-home pay.',
    ogType: 'website',
  },
  '/guide': {
    title: 'NHS Maternity Pay Guide 2026/27 | How It Works',
    description: 'Complete guide to NHS maternity pay. Learn about OMP, SMP, eligibility, how your salary is calculated, bank shifts, part-time pay, pension, and KIT days.',
    ogType: 'article',
  },
  '/faq': {
    title: 'NHS Maternity Pay FAQ \u2014 Common Questions Answered',
    description: 'Answers to frequently asked questions about NHS maternity pay, eligibility, overtime, part-time pay, KIT days, annual leave, and more.',
    ogType: 'website',
  },
  '/blog': {
    title: 'NHS Maternity Pay Blog | Tips & Updates',
    description: 'Tips, guides, and updates about NHS maternity pay. Learn how to maximise your pay, budget for maternity leave, and understand your rights.',
    ogType: 'website',
  },
  '/blog/bank-shifts-maternity-pay': {
    title: 'How Bank Shifts Can Boost Your NHS Maternity Pay | mymatpay.com',
    description: 'A practical guide to strategically timing extra shifts to maximise your average weekly earnings and increase your maternity pay. Learn what counts, what doesn\'t, and how to plan.',
    ogType: 'article',
    datePublished: '2026-03-02',
    dateModified: '2026-03-13',
  },
  '/blog/understanding-nhs-maternity-pay': {
    title: 'Understanding NHS Maternity Pay: A Complete Guide | mymatpay.com',
    description: 'Everything you need to know about NHS occupational maternity pay, including eligibility, payment structure, and how it compares to statutory maternity pay.',
    ogType: 'article',
    datePublished: '2026-03-01',
    dateModified: '2026-03-13',
  },
  '/blog/budgeting-for-maternity-leave': {
    title: 'Budgeting for Maternity Leave: NHS Staff Guide | mymatpay.com',
    description: 'Practical advice on how to prepare financially for maternity leave, including budgeting strategies and money-saving tips for NHS staff.',
    ogType: 'article',
    datePublished: '2026-02-28',
    dateModified: '2026-03-13',
  },
  '/blog/maternity-pay-by-band': {
    title: 'NHS Maternity Pay by Band: Band 2 vs Band 5 vs Band 8 | mymatpay.com',
    description: 'How maternity pay varies across different NHS bands and what you can expect based on your salary grade.',
    ogType: 'article',
    datePublished: '2026-02-25',
    dateModified: '2026-03-13',
  },
  '/blog/nhs-maternity-leave-rights': {
    title: 'Your Rights: NHS Maternity Leave Policy Explained | mymatpay.com',
    description: 'A comprehensive guide to your legal rights during maternity leave, including job protection and return-to-work options.',
    ogType: 'article',
    datePublished: '2026-02-20',
    dateModified: '2026-03-13',
  },
  '/blog/returning-to-work-after-maternity': {
    title: 'Returning to NHS Work After Maternity Leave | mymatpay.com',
    description: 'Tips and guidance for planning your return to work, including flexible working options and childcare considerations.',
    ogType: 'article',
    datePublished: '2026-02-15',
    dateModified: '2026-03-13',
  },
  '/blog/kit-days-explained': {
    title: 'KIT Days Explained: How They Work for NHS Staff | mymatpay.com',
    description: 'Everything you need to know about Keeping in Touch days, including how to use them and how they affect your maternity pay.',
    ogType: 'article',
    datePublished: '2026-02-10',
    dateModified: '2026-03-13',
  },
  '/nhs-maternity-pay-band-2': {
    title: 'NHS Maternity Pay Band 2 (2026/27) | Calculator & Guide',
    description: 'NHS maternity pay for Band 2 healthcare assistants and support workers. Week-by-week breakdown, take-home estimates, and tips to boost your pay.',
    ogType: 'website',
  },
  '/nhs-maternity-pay-band-3': {
    title: 'NHS Maternity Pay Band 3 (2026/27) | Calculator & Guide',
    description: 'NHS maternity pay for Band 3 senior healthcare assistants and pharmacy technicians. Week-by-week breakdown and take-home estimates.',
    ogType: 'website',
  },
  '/nhs-maternity-pay-band-4': {
    title: 'NHS Maternity Pay Band 4 (2026/27) | Calculator & Guide',
    description: 'NHS maternity pay for Band 4 assistant practitioners and senior admin staff. Week-by-week breakdown and take-home estimates.',
    ogType: 'website',
  },
  '/nhs-maternity-pay-band-5': {
    title: 'NHS Maternity Pay Band 5 (2026/27) | Calculator & Guide',
    description: 'NHS maternity pay for Band 5 nurses, midwives, and allied health professionals. Week-by-week breakdown, take-home estimates, and tips to boost your pay.',
    ogType: 'website',
  },
  '/nhs-maternity-pay-band-6': {
    title: 'NHS Maternity Pay Band 6 (2026/27) | Calculator & Guide',
    description: 'NHS maternity pay for Band 6 senior nurses and specialist practitioners. Week-by-week breakdown, take-home estimates, and tips to boost your pay.',
    ogType: 'website',
  },
  '/nhs-maternity-pay-band-7': {
    title: 'NHS Maternity Pay Band 7 (2026/27) | Calculator & Guide',
    description: 'NHS maternity pay for Band 7 advanced practitioners and team leads. Week-by-week breakdown, take-home estimates, and tips to boost your pay.',
    ogType: 'website',
  },
  '/nhs-maternity-pay-band-8': {
    title: 'NHS Maternity Pay Band 8 (2026/27) | Calculator & Guide',
    description: 'NHS maternity pay for Band 8a-8d managers and senior managers. Week-by-week breakdown, take-home estimates, and financial planning tips.',
    ogType: 'website',
  },
  '/for-trusts': {
    title: 'For NHS Trusts | Maternity Pay Calculator',
    description: 'White-label NHS maternity pay calculator for NHS Trusts. Help your staff understand their maternity pay entitlements with an accurate, easy-to-use tool.',
    ogType: 'website',
  },
  '/about': {
    title: 'About mymatpay.com | Free NHS Maternity Pay Calculator',
    description: 'Learn about mymatpay.com, the free NHS maternity pay calculator built to help NHS staff understand their maternity pay entitlements.',
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact Us | mymatpay.com',
    description: 'Get in touch with the mymatpay.com team. We\'d love to hear your feedback or answer any questions about NHS maternity pay.',
    ogType: 'website',
  },
  '/terms': {
    title: 'Terms of Service | mymatpay.com',
    description: 'Terms of service for mymatpay.com, the free NHS maternity pay calculator.',
    ogType: 'website',
  },
  '/privacy': {
    title: 'Privacy Policy | mymatpay.com',
    description: 'Privacy policy for mymatpay.com. Learn how we handle your data when using our NHS maternity pay calculator.',
    ogType: 'website',
  },
};

// Match social crawlers, search engine crawlers, and AI crawlers
const BOT_CRAWLERS = /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|Slackbot|TelegramBot|Pinterest|Discordbot|Googlebot|bingbot|Baiduspider|YandexBot|DuckDuckBot|GPTBot|OAI-SearchBot|ClaudeBot|PerplexityBot|CCBot|Bytespider|Google-Extended|Applebot/i;

const FAQ_DATA = [
  { q: "Am I eligible for NHS maternity pay?", a: "To qualify for NHS occupational maternity pay, you need at least 12 months of continuous NHS service at the beginning of the 11th week before your baby is due. You must also intend to return to work for at least 3 months after maternity leave." },
  { q: "How much will I get paid during maternity leave?", a: "NHS maternity pay: Full pay for 8 weeks, Half pay + SMP for 18 weeks (capped at full pay), SMP only for 13 weeks, and unpaid for the remaining weeks up to 52 weeks total." },
  { q: "How is my maternity pay calculated?", a: "Your maternity pay is based on your average weekly earnings during the 8 weeks before the 15th week before your due date. This includes your basic salary, regular overtime, shift allowances, and any other regular payments." },
  { q: "What if I work part-time?", a: "If you work part-time, your maternity pay will be calculated based on your part-time salary, pro-rated to your working hours (FTE)." },
  { q: "Does overtime count towards my maternity pay?", a: "Yes. Regular overtime payments are included in the calculation of your average weekly earnings, so your maternity pay will be higher." },
  { q: "Can I boost my maternity pay by picking up extra shifts?", a: "Yes. Your maternity pay is based on your average weekly earnings during the last 2 monthly payslips before the qualifying week. Extra earnings during this period will increase your AWE and therefore your maternity pay." },
  { q: "What happens to my pension during maternity leave?", a: "Your pension contributions are based on the maternity pay you actually receive. However, your employer's contributions continue to be based on your full salary during the period you receive occupational maternity pay (weeks 1-26)." },
  { q: "Can I work during maternity leave?", a: "You can work up to 10 Keeping in Touch (KIT) days during your maternity leave without losing any maternity pay." },
  { q: "What happens to my annual leave?", a: "You continue to accrue annual leave during your maternity leave. This can be added to the end of your maternity leave or taken when you return to work." },
  { q: "When should I notify my employer?", a: "You should notify your employer at least 28 days before you intend to start maternity leave. You'll need to provide your MATB1 form." },
  { q: "Is maternity pay taxed?", a: "Yes, maternity pay is subject to income tax and National Insurance contributions. However, because you're receiving less income, you may fall into a lower tax bracket and pay less tax overall." },
  { q: "Can I spread my NHS maternity pay over 12 months?", a: "Some NHS Trusts allow you to spread your occupational maternity pay evenly across your entire leave period. Check with your Trust's HR or payroll department whether this option is available." },
  { q: "What is the difference between OMP and SMP?", a: "SMP is the legal minimum: 90% of AWE for 6 weeks then a flat rate for 33 weeks. OMP is the NHS top-up: full pay for 8 weeks, then half pay plus SMP for 18 weeks. OMP requires 12 months continuous NHS service." },
  { q: "Do NHS Professionals (NHSP) shifts count towards maternity pay?", a: "NHSP shifts may not count towards your AWE because NHSP is technically a separate employer. Only earnings paid through your substantive Trust's payroll are guaranteed to be included." },
  { q: "What happens if I get pregnant again while on maternity leave?", a: "You are entitled to a new period of maternity leave and pay if you meet eligibility criteria. However, your AWE may be based on the maternity pay you were receiving, which could reduce your pay for the second leave." },
  { q: "What if I have less than 12 months NHS service?", a: "You will not qualify for NHS OMP but may still qualify for SMP if you have 26 weeks of service. If you do not qualify for SMP either, you can apply for Maternity Allowance through Jobcentre Plus." },
  { q: "Does changing NHS Trusts affect my maternity pay?", a: "Continuous NHS service counts across different Trusts, provided there is no break of more than 3 months. Your new Trust should recognise your previous service for maternity pay purposes." },
  { q: "How do unsocial hours affect my maternity pay?", a: "Unsocial hours premiums are included in your AWE calculation if they were paid during the relevant calculation period. Regular unsocial hours will increase your AWE and therefore your maternity pay." },
  { q: "What is the qualifying week?", a: "The qualifying week is the 15th week before your expected week of childbirth. It determines eligibility and is the reference point for calculating your average weekly earnings." },
  { q: "Can my employer refuse my maternity leave request?", a: "No. Maternity leave is a legal right. You are entitled to up to 52 weeks regardless of how long you have worked for your employer." },
  { q: "What benefits can I claim during maternity leave?", a: "You may be eligible for Child Benefit, Tax-Free Childcare, Universal Credit, Sure Start Maternity Grant, and free NHS prescriptions and dental care throughout pregnancy and for 12 months after birth." },
];

function buildFAQSchema() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  });
}

function buildBreadcrumbSchema(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const items = [{ name: 'Home', url: 'https://mymatpay.com' }];

  if (parts[0] === 'blog') {
    items.push({ name: 'Blog', url: 'https://mymatpay.com/blog' });
    if (parts[1]) {
      const meta = ROUTE_META[pathname];
      items.push({ name: meta ? meta.title.split(' | ')[0] : parts[1] });
    }
  } else if (parts.length > 0) {
    const meta = ROUTE_META[pathname];
    items.push({ name: meta ? meta.title.split(' | ')[0].split(' \u2014 ')[0] : parts[0] });
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  });
}

function buildArticleSchema(meta, ogUrl) {
  if (meta.ogType !== 'article') return '';
  return `<script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title.split(' | ')[0],
    url: ogUrl,
    datePublished: meta.datePublished || '',
    dateModified: meta.dateModified || meta.datePublished || '',
    author: { '@type': 'Organization', '@id': 'https://mymatpay.com/#organization', name: 'MyMatPay' },
    publisher: {
      '@type': 'Organization',
      name: 'MyMatPay',
      url: 'https://mymatpay.com',
      logo: { '@type': 'ImageObject', url: 'https://mymatpay.com/og-image.png' },
    },
    description: meta.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': ogUrl },
    image: 'https://mymatpay.com/og-image.png',
  })}
  </script>`;
}

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  if (!BOT_CRAWLERS.test(userAgent)) {
    return; // Pass through for real users
  }

  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, '') || '/';
  const meta = ROUTE_META[pathname];

  // If no route matches, return 404 for bots (fixes soft 404 issue)
  if (!meta) {
    return new Response(`<!DOCTYPE html><html lang="en"><head><title>Page Not Found | mymatpay.com</title></head><body><h1>404 - Page Not Found</h1></body></html>`, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  const ogUrl = `https://mymatpay.com${pathname === '/' ? '' : pathname}`;
  const isArticle = meta.ogType === 'article';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  <link rel="canonical" href="${ogUrl}" />
  <meta property="og:type" content="${meta.ogType || 'website'}" />
  <meta property="og:url" content="${ogUrl}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="https://mymatpay.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="MyMatPay" />
  ${isArticle ? `<meta property="article:published_time" content="${meta.datePublished}" />` : ''}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="https://mymatpay.com/og-image.png" />
  <script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://mymatpay.com/#organization',
    name: 'MyMatPay',
    url: 'https://mymatpay.com',
    description: 'Free NHS maternity pay calculator for NHS staff. Calculates Occupational Maternity Pay, Statutory Maternity Pay, and total leave income based on NHS Agenda for Change pay bands.',
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://mymatpay.com/contact' },
  })}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MyMatPay',
    url: 'https://mymatpay.com',
    publisher: { '@id': 'https://mymatpay.com/#organization' },
  })}
  </script>
  <script type="application/ld+json">
  ${buildBreadcrumbSchema(pathname)}
  </script>
  ${buildArticleSchema(meta, ogUrl)}
  ${pathname === '/faq' ? `<script type="application/ld+json">${buildFAQSchema()}</script>` : ''}
</head>
<body>
  <h1>${meta.title.split(' | ')[0].split(' \u2014 ')[0]}</h1>
  <p>${meta.description}</p>
  <nav>
    <a href="https://mymatpay.com/">Home</a>
    <a href="https://mymatpay.com/calculator">Calculator</a>
    <a href="https://mymatpay.com/guide">How It Works</a>
    <a href="https://mymatpay.com/faq">FAQ</a>
    <a href="https://mymatpay.com/blog">Blog</a>
    <a href="https://mymatpay.com/for-trusts">For NHS Trusts</a>
    <a href="https://mymatpay.com/about">About</a>
    <a href="https://mymatpay.com/contact">Contact</a>
  </nav>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export const config = {
  matcher: ['/((?!_next|_expo|api|favicon\\.ico|og-image\\.png|sitemap\\.xml|robots\\.txt|manifest\\.json|icon-.*\\.png|apple-touch-icon\\.png|llms\\.txt).*)'],
};
