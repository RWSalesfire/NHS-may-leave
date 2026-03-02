import React, { useEffect, useRef } from 'react';
import { View, Platform } from 'react-native';

// Renders a Google AdSense ad unit. Only renders on web when consent is granted.
// Falls back to nothing if AdSense isn't loaded.
export default function AdUnit({ slot, format = 'auto', style = {} }) {
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

  return (
    <View style={[{ alignItems: 'center', marginVertical: 16 }, style]}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </View>
  );
}
