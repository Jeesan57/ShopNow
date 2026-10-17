# Universal combos

Apply migrations 007 and 008 (after 001–006) in the Supabase SQL Editor. If 007 is already applied, run only `supabase/migrations/008_universal_combos.sql`. The setup script includes both.

In Admin → Products, create or edit a product and enable **Pants + top combo**. New combos start with Pants and T-shirt.

1. Choose the clothing type for each piece: pants/denim paired with a T-shirt, sweater, hoodie, shirt, jacket, kurti, or other clothing.
2. Select available sizes. Common waist and letter sizes are shown immediately. Expand **More sizes or use a saved product** for extra sizes, a custom size, or copying sizes from an existing listing.
3. Optionally open **Size chart** and enter actual measurements. Standard chart headings are supplied for new combos, with no invented measurement values. Columns can be customised and units can be inches or centimetres. Changing units does not convert values. Empty charts stay hidden from shoppers.
4. Set one price and stock quantity for the complete combo, upload images, and publish.

Existing combo names, selected sizes, and measurements are retained, including older bundles with more than two pieces. Existing extra pieces can be removed individually.

Customers select an option for every item in the product page or Quick View. The cart, checkout and admin order details retain the named choices. Discounts/coupons apply once to the full combo price. The database generates valid combinations and rejects forged choices. A combo supports up to 1,024 combinations and 50 options per item; split very large sets into separate listings.

Existing denim/sweater combos are migrated with their original selection labels and measurements. Saved cart labels and historical orders are preserved. Existing normal products remain unchanged.

Apply `009_combo_colors.sql` after 008 to enable separate colors per piece. In each clothing section, open **Available colors** and select the colors in stock. Leave empty when a piece has no color choices. Customers must choose a color for every piece with configured colors. Each named choice is saved in the cart, checkout and order. Legacy combo-wide colors remain valid until an admin saves the per-piece configuration. Existing cart choices made unavailable by a configuration change must be selected again.

Stock represents complete combos shared across all option combinations. Items are configured within the combo listing; they do not link to separately stocked product listings or reserve their inventory.
