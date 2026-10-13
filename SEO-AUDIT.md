# Auvora BD audit — 13 October 2026

## Live indexing findings

- The homepage returns HTTP 200 over HTTPS.
- The non-www domain returns HTTP 308 to https://www.auvorabd.com/.
- The live homepage still uses the title “Auvora BD” and description “Your one-stop shop for everything”. Its canonical tag is missing.
- Both /robots.txt and /sitemap.xml return HTTP 404 on the live domain.
- The previously implemented SEO changes are not present on the live homepage. Deployment remains necessary.
- These are public crawlability checks; Google Search Console indexing status could not be inspected without the owner's account.

## Mobile Lighthouse results

Lighthouse 13.5.0, default simulated mobile settings, headless Chrome. A single live run and local production run are recorded below. They have different origins and serving environments and are not a controlled before/after comparison. They do not establish real-user Core Web Vitals or guarantee post-deployment scores.

| Metric | Live domain | Final local production build |
| --- | --- | --- |
| First contentful paint | 1.5 s | 0.8 s |
| Largest contentful paint | 2.7 s | 3.0 s |
| Total blocking time | 470 ms | 370 ms |
| Layout shift | 0 | 0 |
| Performance score | 83 | 86 |
| Accessibility score | 90 | 100 |
| Seo score | 100 | 100 |

The live run identified oversized images, missing high fetch priority on the first hero, unused JavaScript, an unnamed wishlist button, and small carousel touch targets. Local fixes address these findings. Lighthouse's SEO score does not establish sitemap availability, canonical correctness, actual indexing, or product rich-result eligibility.

The PageSpeed Insights API returned a shared-project quota error; real-user field data was not obtained. Check the owner's Search Console Core Web Vitals report after deployment.

## Validation and follow-up

- Production webpack build passed.
- SEO response checks passed for page metadata, tracking URL canonical normalization, utility-page noindex tags, robots, sitemap, one published product's schema, and missing-product HTTP 404s.
- ESLint passed for the changed homepage and catalog provider. ParticleBackground retains an existing warning about its inline class declaration.
- Re-run Lighthouse on the public domain after deployment and repeat across several runs. Inspect home, shop, and product URLs in Search Console, and submit /sitemap.xml.
- Shipping/return policy content, merchant account setup, and Search Console submission remain owner-dependent and were not fabricated or submitted.
