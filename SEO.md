# Auvora BD SEO

The canonical domain is https://www.auvorabd.com. Public pages have individual metadata and canonical URLs without tracking parameters. Product pages render catalog information and Product/Offer/Breadcrumb structured data on the server. The public catalog uses anonymous Supabase access with a 60-second cache; draft products are excluded. Robots can crawl utility pages to read their noindex tags; noindex does not replace authentication.

## Verification

Run `npm run build`, then `npm start`. Run `node scripts/verify-seo.mjs http://localhost:3000` to check rendered metadata, tracking URL canonicals, robots, sitemap, product schema, and missing-product 404s. Catalog requests need the existing public Supabase environment variables. Failed catalog requests do not fabricate product data or turn outages into product 404s.

## After deployment

1. Verify the domain in Google Search Console and submit `https://www.auvorabd.com/sitemap.xml`.
2. Inspect the home, shop, and several product URLs in Search Console. Test product URLs with Google Rich Results Test.
3. Redirect the non-www host and any hosting preview domain to the canonical domain using your hosting settings.
4. Add original product descriptions, accurate images, and clear delivery/return policies. Only add policy structured data once those policies are published and confirmed.
5. Monitor indexing and real-user Core Web Vitals. Create a Google Merchant Center product feed if desired.

Account verification and sitemap submission require the site owner's account. Search rankings and rich-result display are determined by Google.
