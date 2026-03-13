import { useEffect } from 'react';
import { Platform } from 'react-native';
import { trackPageView } from '../utils/analytics';

export default function usePageMeta({ title, description, ogType }) {
  useEffect(() => {
    if (Platform.OS !== 'web') return;

    document.title = title;

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    const canonicalUrl = 'https://mymatpay.com' + window.location.pathname;

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:type"]', 'content', ogType || 'website');
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    trackPageView(window.location.pathname, title);
  }, [title, description, ogType]);
}
