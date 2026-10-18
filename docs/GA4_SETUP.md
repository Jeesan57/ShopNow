# Google Analytics 4 — Auvora BD

Measurement ID: `G-S832ZPVY7K` (public identifier).

## Google Analytics setting required

Open **Admin → Data streams → Auvora BD Website → Enhanced measurement (gear
icon)** in Google Analytics. Turn **Enhanced measurement off** and save.

This application sends its own page views and ecommerce events. Google can
otherwise send additional history-based page views even when `send_page_view:
false` is configured in code. Disabling enhanced measurement also prevents
automatic form tracking on the checkout contact form.

Do not paste a second copy of the tag into GTM, another layout, or hosting
settings. The project loads it once with Next.js Script after hydration.

## Events

- `page_view`: storefront routes, deduplicated on repeated effects.
- `view_item`: product details and quick view.
- `search`: debounced shop searches, omitting email/phone-like terms.
- `add_to_cart`, `remove_from_cart`: successful cart changes only.
- `begin_checkout`: a valid nonempty checkout, once per visit.
- `purchase`: only after `place_order_bd` succeeds. Its saved UUID is the
  `transaction_id`; confirmation reloads do not send another purchase.

Currency: `BDT`. Purchase `value` is merchandise after coupon discounts;
delivery is recorded separately as `shipping`. Item prices allocate coupon
cents to agree with the purchase value. Cash-on-delivery purchases mean orders
placed, not payments received. Admin delivered revenue still uses delivered
orders. Refund/cancellation events are not yet sent.

## Scope and data

Tracking runs only in production builds on `auvorabd.com` and
`www.auvorabd.com`. Localhost, preview domains, and Admin are excluded. The
Google tag does not load on a fresh Admin visit. Google signals and advertising
personalization are disabled.

Checkout names, phones, emails, addresses and notes never enter analytics
payloads. URLs omit fragments and unrelated query parameters. Permitted
campaign parameters are retained. Referrers omit private paths and external
query strings.

Override the ID with `NEXT_PUBLIC_GA_MEASUREMENT_ID` before building. Disable
tracking by building with `NEXT_PUBLIC_GA_ENABLED=false`.

## Verify after deployment

Open the live storefront and Google Analytics **Reports → Realtime**. Browse a
product, add it to the cart, and begin checkout. Each action should appear once.
A completed real order should produce one purchase with the saved order ID.
The automated browser checks intercept Google/Supabase requests to avoid sending
test traffic or creating live orders.

References:
- https://developers.google.com/analytics/devguides/collection/ga4/views
- https://developers.google.com/analytics/devguides/collection/ga4/ecommerce

## Traffic reports inside Admin

Open **Admin → Traffic** for visitors, sessions, page views, engagement,
realtime visitors, sources, popular pages, devices and locations. Choose the
last 7, 28 or 90 days. Reports include today in the property's time zone and
are cached for one minute. Google processing can delay recent data.

Reading reports requires a separate server connection:

1. In Google Analytics, open **Admin → Property details** and copy the numeric
   **Property ID**. `G-S832ZPVY7K` is the Measurement ID; the Stream ID is also
   a different identifier. Neither works as the Property ID.
2. In Google Cloud, enable **Google Analytics Data API** and create a service
   account. Create a JSON key for that account.
3. In Google Analytics **Admin → Property access management**, add the service
   account's `client_email` with **Viewer** access.
4. Set these server environment variables in your hosting settings, or in
   `.env.local` for local development:

   ```dotenv
   GOOGLE_ANALYTICS_PROPERTY_ID=your_numeric_property_id
   GOOGLE_ANALYTICS_CLIENT_EMAIL=your_service_account_email
   GOOGLE_ANALYTICS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   ```

Use `client_email` and `private_key` from the downloaded JSON. Keep the key
private; do not paste it into chat, commit it, or prefix these variables with
`NEXT_PUBLIC_`. Restart locally or redeploy after setting them.

Traffic reports verify the signed-in user's Admin membership before contacting
Google or returning cached reports. Missing configuration displays setup
instructions rather than invented visitor numbers. A realtime API failure
leaves realtime unavailable while the other reports remain usable.

Official reporting setup:
https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart
