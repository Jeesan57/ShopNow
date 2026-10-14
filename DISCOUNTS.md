# Product discounts and checkout coupons

Apply `supabase/migrations/005_discounts_coupons.sql` in the Supabase SQL editor before deploying this application. The database setup script includes it. Existing products default to 0% off, and existing orders default to no coupon discount.

## Admin controls

- **Products → Edit → Product discount (%)** sets the product discount, from 0 to 100. Set 0 to remove it. The editor previews the customer price; the regular price remains stored separately.
- **Coupons** creates or edits case-insensitive checkout codes. Choose percentage or fixed BDT discount, minimum merchandise subtotal, optional maximum discount, schedule, total usage limit, and enabled status. Schedule fields use Bangladesh time (UTC+6).
- Disable a coupon to stop further use, or delete it permanently using the Delete button. Existing orders retain their saved coupon code and discount amount. Usage is counted when an order is successfully placed, including cash-on-delivery orders. Cancellation does not automatically restore coupon usage; adjust the usage limit if needed.

## Pricing rules

Product discounts apply first, rounded per unit to two decimal places. One coupon can apply to the resulting merchandise subtotal; it never reduces delivery fees or makes merchandise totals negative. There are no customer-specific or per-customer limits.

Checkout validates the code through `quote_checkout`. If the cart or product subtotal changes, the coupon must be reapplied. At order submission the database locks product rows in ID order and the coupon row, validates stock and color/size selections again, computes authoritative prices, and increments coupon usage within the same transaction. A failed order rolls back stock, the order, and coupon usage. An expected-total check prevents shoppers being charged a changed total silently.

The coupons table uses admin-only row-level security. Public customers can quote a supplied code without listing the coupons table. Orders retain coupon codes, coupon discounts, delivery charges, and discounted product prices for admin review. Stock remains shared across sizes/colors.

## Verification

`node scripts/verify-discounts.mjs` requires `@electric-sql/pglite`; alternatively pass its module entry path as the first argument. Tests cover rounding, percentage/fixed coupons, caps, minimums, schedules, exhausted usage limits, trusted prices, order persistence, transaction rollback, and access controls. Browser checks use mocked Supabase requests and create no live coupons or orders.
