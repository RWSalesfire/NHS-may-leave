import React, { useEffect, useRef } from 'react';
import { View, Platform } from 'react-native';

// Renders a Google AdSense ad unit. Only renders on web when consent is granted.
// Falls back to nothing if AdSense isn't loaded.
// Set layout="in-article" for in-article native ads (uses fluid format automatically).
export default function AdUnit({ slot, format = 'auto', layout, style = {} }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (Platform.OS !== 'web' || pushed.current) return;

    try {
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      }
    } catch (e) {
      // AdSense not loaded — consent denied or ad blocker
    }
  }, []);

  if (Platform.OS !== 'web') return null;

  const isInArticle = layout === 'in-article';

  const insProps = {
    ref: adRef,
    className: 'adsbygoogle',
    style: isInArticle
      ? { display: 'block', textAlign: 'center' }
      : { display: 'block' },
    'data-ad-client': 'ca-pub-7917345563773999',
    'data-ad-slot': slot,
    'data-ad-format': isInArticle ? 'fluid' : format,
    ...(isInArticle
      ? { 'data-ad-layout': 'in-article' }
      : { 'data-full-width-responsive': 'true' }),
  };

  return (
    <View style={[{ alignItems: 'center', marginVertical: 16 }, style]}>
      <ins {...insProps} />
    </View>
  );
}
