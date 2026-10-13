import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getServerCatalog } from "../lib/serverCatalog";
import { SITE_URL, pageMetadata, jsonLd } from "../lib/seo";
import SiteChrome from "../components/SiteChrome";
import ParticleBackground from "../components/ParticleBackground";
import { CartProvider } from "../context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata('Auvora BD | Online Shopping in Bangladesh', 'Shop the latest collections at Auvora BD. Browse products, check prices in BDT, and order with cash on delivery across Bangladesh.', '/'),
  title: { default: 'Auvora BD | Online Shopping in Bangladesh', template: '%s | Auvora BD' },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }) {
  let initialCatalog;
  try { initialCatalog = await getServerCatalog(); } catch { /* Client retries temporary catalog failures. */ }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ '@context': 'https://schema.org', '@graph': [
          { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Auvora BD', url: SITE_URL, logo: `${SITE_URL}/LOGO.png` },
          { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'Auvora BD', url: SITE_URL, publisher: { '@id': `${SITE_URL}/#organization` } },
        ] }) }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('shopnow-theme');
                const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ParticleBackground />
        <CartProvider>
          <SiteChrome initialCatalog={initialCatalog}>{children}</SiteChrome>
        </CartProvider>
      </body>
    </html>
  );
}
