# Product colors and gallery

Apply `supabase/migrations/004_product_colors.sql` in Supabase's SQL editor before deploying the application. It adds available product colors, saves ordered colors, and updates the existing checkout function to validate the selected color while retaining server-side price and stock checks. Existing products and orders default to no color options. The database setup script also includes this migration.

In Admin → Products → Edit, select **Available colors** and save. Products can have multiple selected colors or none. Customers select a swatch on the product page or in quick view. Quick-add buttons use the first available color; the cart displays it. Cart lines distinguish product, size, and color. Checkout and admin order details retain the chosen color. Stock remains shared across all sizes and colors.

The product gallery uses vertical thumbnails on the left and a portrait main image with `object-contain`, preserving the full photograph. Upload multiple product images in the admin. The first image is primary; the editor previews all images and lets you remove photos or make another image primary. Save to publish the image order. Colors do not automatically recolor photos or associate photos with a specific color.

Verification: run `node scripts/verify-product-colors.mjs` with `@electric-sql/pglite` available, or provide its module entry path as the first argument. This tests the migration in a temporary database, invalid/missing colors, stored order colors, authoritative prices, atomic stock rollback, legacy products, and cart identities. No live orders are created.
