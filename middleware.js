// Vercel Edge Middleware — injects per-route OG tags for social crawler bots
// that don't execute JavaScript (Facebook, Twitter, LinkedIn, WhatsApp, etc.)

const ROUTE_META = {
  '/': {
    title: 'NHS Maternity Pay Calculator \u2014 Free Estimate for NHS Staff',
    description: 'Free NHS maternity pay calculator. Estimate your Occupational Maternity Pay, SMP, and total leave income based on your NHS pay band. Instant results, no sign-up.',
  },
  '/calculator': {
    title: 'Calculate Your NHS Maternity Pay | mymatpay.com',
    description: 'Use our free calculator to estimate your NHS maternity pay. Enter your pay band, salary, and leave details to get an instant breakdown of your take-home pay.',
  },
  '/guide': {
    title: 'NHS Maternity Pay Guide 2025/26 | How It Works',
    description: 'Complete guide to NHS maternity pay. Learn about OMP, SMP, eligibility, how your salary is calculated, bank shifts, part-time pay, pension, and KIT days.',
  },
  '/faq': {
    title: 'NHS Maternity Pay FAQ \u2014 Common Questions Answered',
    description: 'Answers to frequently asked questions about NHS maternity pay, eligibility, overtime, part-time pay, KIT days, annual leave, and more.',
  },
  '/blog': {
    title: 'NHS Maternity Pay Blog | Tips & Updates',
    description: 'Tips, guides, and updates about NHS maternity pay. Learn how to maximise your pay, budget for maternity leave, and understand your rights.',
  },
  '/for-trusts': {
    title: 'For NHS Trusts | Maternity Pay Calculator',
    description: 'White-label NHS maternity pay calculator for NHS Trusts. Help your staff understand their maternity pay entitlements with an accurate, easy-to-use tool.',
  },
  '/about': {
    title: 'About mymatpay.com | Free NHS Maternity Pay Calculator',
    description: 'Learn about mymatpay.com, the free NHS maternity pay calculator built to help NHS staff understand their maternity pay entitlements.',
  },
  '/contact': {
    title: 'Contact Us | mymatpay.com',
    description: 'Get in touch with the mymatpay.com team. We\'d love to hear your feedback or answer any questions about NHS maternity pay.',
  },
  '/terms': {
    title: 'Terms of Service | mymatpay.com',
    description: 'Terms of service for mymatpay.com, the free NHS maternity pay calculator.',
  },
  '/privacy': {
    title: 'Privacy Policy | mymatpay.com',
    description: 'Privacy policy for mymatpay.com. Learn how we handle your data when using our NHS maternity pay calculator.',
  },
};

const SOCIAL_CRAWLERS = /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|Slackbot|TelegramBot|Pinterest|Discordbot/i;

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  if (!SOCIAL_CRAWLERS.test(userAgent)) {
    return; // Pass through for real users
  }

  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, '') || '/';
  const meta = ROUTE_META[pathname] || ROUTE_META['/'];

  const ogUrl = `https://mymatpay.com${pathname === '/' ? '' : pathname}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  <link rel="canonical" href="${ogUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${ogUrl}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="https://mymatpay.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="https://mymatpay.com/og-image.png" />
</head>
<body></body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|og-image\\.png|sitemap\\.xml|robots\\.txt|manifest\\.json|icon-.*\\.png|apple-touch-icon\\.png).*)'],
};
