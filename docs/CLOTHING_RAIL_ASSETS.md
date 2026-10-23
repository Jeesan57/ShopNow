# Clothing rail garment assets

Prepared with the built-in image generation tool from the existing Auvora
product posters. These are reconstructed garment previews, not pixel-exact
background removals: collars, hems and hidden areas required reconstruction.
Original catalog images are unchanged. Review previews against actual stock.

Files in `public/images/rail/`:

- `beige-polo-v1.png`: product 12, Outfit Combo 1
- `taupe-polo-v1.png`: product 13, Outfit Combo 2
- `navy-polo-v1.png`: product 14, Outfit Combo 3
- `maroon-polo-v1.png`: product 15, Outfit combo 4

Each PNG has an alpha channel and transparent exterior. The display uses
Next.js Image optimization. Mapping is in `src/lib/railImages.js`, keyed to the
original catalog photo filename so changing a product image won't silently
reuse an unrelated garment. Products without a prepared cutout remain in the
normal shop and product listings, but do not appear on the garment-only rail.
Only the rail uses these assets; it never substitutes poster thumbnails into
its transparent garment display.

## Prompt set

First image edit target: the beige polo's original product poster.

> Use case: background-extraction / product-mockup. Extract/reconstruct only
> the short-sleeve textured quarter-zip polo as a straight-on front-facing
> empty ghost-mannequin garment, full collar, sleeves and hem visible,
> centered, vertical, with a genuinely transparent alpha background. Remove
> the person entirely, pants, scene, all text, inset pictures, graphics,
> borders, shadows and hanger. Preserve the reference garment's color,
> ribbed knit texture, polo collar, metal quarter zipper, sleeves and hem.
> Shoulders level, sleeves draping naturally. No head, skin, mannequin,
> accessories, logos or background. Leave transparent margins; garment
> occupies approximately 88% image height.

Remaining edits use each product's own poster as the edit target and the
beige output as the pose/framing reference. Repeat the extraction prompt,
with the following color constraints:

- Product 13: preserve the original taupe / khaki brown fabric.
- Product 14: preserve the original deep navy blue fabric.
- Product 15: preserve the original muted burgundy maroon fabric.

Additional instruction for those three edits:

> Match the second image's centered level shoulders, fully visible collar,
> sleeves and hem, uniform scale, soft realistic folds and photographic knit
> quality. Do not copy its beige color. Preserve the first image's garment
> color, ribbed texture, collar, metal zipper, sleeve construction and hem.
> No cast shadow or glow around the garment; single isolated top only.

## Additional sweaters supplied in chat

Built-in image editing prepared transparent previews from the four supplied
sweater images. Files in `public/images/rail/`:

- `olive-sweater-v1.png` — olive cable-knit quarter-zip
- `navy-sweater-v1.png` — navy cable-knit quarter-zip
- `gray-sweater-v1.png` — gray cable-knit quarter-zip
- `beige-sweater-v1.png` — beige plain-knit quarter-zip

These are rail-only previews, listed in `ADDITIONAL_RAIL_GARMENTS` in
`src/lib/railImages.js`. They have an availability enquiry link to Contact,
with no invented price, stock, or product-details route. They do not create
Supabase catalog records or checkout inventory. To sell them, create actual
products in Admin with prices, stock and options, then map their cutouts to
the catalog images and remove the corresponding standalone preview entries.

Prompt used for each attached reference, with the image number and garment
color substituted:

> Use case: background-extraction. Asset: transparent garment cutout for an
> interactive clothing rack on a shopping website. Edit ONLY reference image
> [1 olive / 2 navy / 3 gray / 4 beige] of the four attached sweater images.
> Other references must not influence the garment. Remove just the surrounding
> background and external cast shadows, preserving the exact sweater,
> proportions, color, knit pattern, sleeve lengths, neckline, quarter-zip
> hardware, ribbed cuffs and hem, existing small chest emblem and internal
> brand label. Entire sweater fully visible, front-facing, no cropping, no
> hanger, person, mannequin or new objects. Keep natural shape and drape.
> Center at a consistent catalog scale with transparent margins on every side.
> Genuine transparent alpha background including between sleeves and body.
> No background rectangle, checkerboard, glow, external text or drop shadow.
> Do not add cable knit to the plain beige sweater. One isolated sweater only.
