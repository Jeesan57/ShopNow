export const SITE_URL = 'https://www.auvorabd.com';
export const SITE_NAME = 'Auvora BD';
export function pageMetadata(title, description, path, image = '/LOGO.png') {
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, locale: 'en_BD', type: 'website', images: [{ url: image, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
export function jsonLd(data) { return JSON.stringify(data).replace(/</g, '\\u003c'); }
