// Transparent garment-only rail previews, keyed to their source catalog photo.
// Products without a prepared cutout remain available throughout the shop.
const cutouts = {
  'c9c01825-3cc3-4d98-b09d-8d6420ec6f5d.png': '/images/rail/beige-polo-v1.png',
  'ac1a8d91-c747-45d6-b1db-1128df5185a7.png': '/images/rail/taupe-polo-v1.png',
  'de7ef8ea-e6ad-4917-b34b-af0d2d76ec61.png': '/images/rail/navy-polo-v1.png',
  'ee4e6345-fab9-4caa-b34e-5cb743815150.png': '/images/rail/maroon-polo-v1.png',
};
export const ADDITIONAL_RAIL_GARMENTS = [
  { id: 'rail-sweater-olive', name: 'Olive cable-knit quarter-zip sweater', rail_image: '/images/rail/olive-sweater-v1.png', category: 'Sweaters', previewOnly: true },
  { id: 'rail-sweater-navy', name: 'Navy cable-knit quarter-zip sweater', rail_image: '/images/rail/navy-sweater-v1.png', category: 'Sweaters', previewOnly: true },
  { id: 'rail-sweater-gray', name: 'Gray cable-knit quarter-zip sweater', rail_image: '/images/rail/gray-sweater-v1.png', category: 'Sweaters', previewOnly: true },
  { id: 'rail-sweater-beige', name: 'Beige quarter-zip sweater', rail_image: '/images/rail/beige-sweater-v1.png', category: 'Sweaters', previewOnly: true },
];

export function railImage(product) {
  if (product.previewOnly && ADDITIONAL_RAIL_GARMENTS.some(item => item.id === product.id && item.rail_image === product.rail_image)) return product.rail_image;
  const filename = (product.image || '').split('?')[0].split('/').at(-1);
  return cutouts[filename] || '';
}

// Measured collar offsets within each transparent PNG. Keep necklines at
// 38px below the rail origin (30px on mobile), independent of image padding.
const collarOffsets = {
  '/images/rail/beige-polo-v1.png': [8, 5],
  '/images/rail/taupe-polo-v1.png': [7, 5],
  '/images/rail/navy-polo-v1.png': [8, 5],
  '/images/rail/maroon-polo-v1.png': [7, 5],
};
// Visible collar-to-cuff bounds, measured from alpha pixels rather than the
// canvas dimensions. All four sweaters share a 240px (195px mobile) height.
const sweaterBounds = {
  '/images/rail/olive-sweater-v1.png': { width: 1122, height: 1402, neck: 18, bottom: 1383 },
  '/images/rail/navy-sweater-v1.png': { width: 1163, height: 1352, neck: 20, bottom: 1334 },
  '/images/rail/gray-sweater-v1.png': { width: 1135, height: 1386, neck: 67, bottom: 1344 },
  '/images/rail/beige-sweater-v1.png': { width: 1214, height: 1296, neck: 19, bottom: 1266 },
};
export function railImageStyle(product) {
  const image = railImage(product);
  const bounds = sweaterBounds[image];
  if (bounds) {
    const styles = {};
    for (const [suffix, visibleHeight, collarTop] of [['', 240, 38], ['-mobile', 195, 30]]) {
      const scale = visibleHeight / (bounds.bottom - bounds.neck);
      const pixels = value => `${Number(value.toFixed(3))}px`;
      styles[`--rail-photo-width${suffix}`] = pixels(bounds.width * scale);
      styles[`--rail-photo-height${suffix}`] = pixels(bounds.height * scale);
      styles[`--rail-photo-top${suffix}`] = pixels(collarTop - bounds.neck * scale);
    }
    return styles;
  }
  const [desktop, mobile] = collarOffsets[image] || [8, 5];
  return { '--rail-photo-top': `${desktop}px`, '--rail-photo-top-mobile': `${mobile}px` };
}
