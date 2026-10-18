'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { GA_MEASUREMENT_ID, analyticsAllowed, analyticsPageView } from '../lib/analytics';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    let alive = true;
    async function setup() {
      await Promise.resolve();
      if (!alive) return;
      setEnabled(analyticsAllowed());
      analyticsPageView();
    }
    setup();
    return () => { alive = false; };
  }, [pathname]);
  return enabled ? <Script id="auvora-google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive"/> : null;
}
