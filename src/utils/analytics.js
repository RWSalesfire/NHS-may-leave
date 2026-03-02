// Analytics utility — wraps GA4 gtag calls.
// No-ops gracefully if gtag is not loaded (consent denied or script blocked).

function getGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
    ? window.gtag
    : null;
}

export function trackEvent(name, params = {}) {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', name, params);
  }
}

export function trackPageView(path, title) {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
}
