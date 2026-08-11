import { Product, Testimonial } from '../types';

// All prices/sizes/notes below are transcribed directly from the real ASIR
// product artwork supplied in Asir_fragrance/ (now copied to public/products/).
// rating/reviewCount are 0 for every real product until genuine customer
// reviews exist — no review data has been fabricated.
// longevity/sillage are marked 'To be confirmed' because the source artwork
// does not state them; do not fill these with invented performance claims.

export const PRODUCTS: Product[] = [
  {
    id: 'oud-elite',
    slug: 'oud-elite',
    name: 'Oud Elite',
    category: 'Oud',
    gender: 'Unisex',
    shortDescription: 'Elevate every moment. Soft, warm, addictive Assam oud with bergamot and saffron.',
    fullDescription: 'OUD ÉLITE — Elevate Every Moment. Soft. Warm. Addictive. A refined oud composition opening with bergamot, saffron and a spicy accord, resting on a heart of rose, geranium and jasmine, grounded by oud, amber, musk and sandalwood.',
    variants: [
      { size: '10ml', priceINR: 80, stock: 50 },
      { size: '30ml', priceINR: 170, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/oud-elite.png',
    isFeatured: true,
    isArabianCollection: true,
    notes: { top: ['Bergamot', 'Saffron', 'Spicy Accord'], heart: ['Rose', 'Geranium', 'Jasmine'], base: ['Oud', 'Amber', 'Musk', 'Sandalwood'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Oud', 'Woody'],
    occasions: ['Evening', 'Special Occasion'],
    styles: ['Bold', 'Mysterious']
  },
  {
    id: 'nuit-royale',
    slug: 'nuit-royale',
    name: 'Nuit Royale',
    category: 'Oud',
    gender: 'Unisex',
    shortDescription: 'Where mystery meets elegance — a scent that lingers beyond the night.',
    fullDescription: 'NUIT ROYALE — Extrait de Parfum. Where mystery meets elegance. A scent that lingers beyond the night, blending bergamot and saffron with rose, oud, patchouli, amber, musk and vanilla.',
    variants: [
      { size: '10ml', priceINR: 115, stock: 50 },
      { size: '30ml', priceINR: 270, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/nuit-royale.png',
    isFeatured: true,
    isArabianCollection: true,
    notes: { top: ['Bergamot', 'Saffron'], heart: ['Rose', 'Oud'], base: ['Patchouli', 'Amber', 'Musk', 'Vanilla'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Oud', 'Sweet'],
    occasions: ['Evening', 'Special Occasion'],
    styles: ['Mysterious', 'Elegant']
  },
  {
    id: 'arctic-desire',
    slug: 'arctic-desire',
    name: 'Arctic Desire',
    category: 'Fresh',
    gender: 'Unisex',
    shortDescription: 'Fresh energy, timeless appeal — a scent that speaks before you do.',
    fullDescription: 'ARCTIC DESIRE — Fresh Energy. Timeless Appeal. A scent that speaks before you do, built on bergamot, sage, cedarwood and musk.',
    variants: [
      { size: '10ml', priceINR: 65, stock: 50 },
      { size: '30ml', priceINR: 120, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/arctic-desire.png',
    isFeatured: true,
    notes: { top: ['Bergamot'], heart: ['Sage'], base: ['Cedarwood', 'Musk'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Fresh'],
    occasions: ['Daily', 'Office'],
    styles: ['Clean']
  },
  {
    id: 'oud-majesty',
    slug: 'oud-majesty',
    name: 'Oud Majesty',
    category: 'Oud',
    gender: 'Unisex',
    shortDescription: 'Bold, mysterious, timeless — a deep, rich fragrance that leaves a lasting impression.',
    fullDescription: 'OUD MAJESTY — Bold. Mysterious. Timeless. A deep, rich and enchanting fragrance opening spicy and woody, with a heart of oud, rose and patchouli over amber, musk and vanilla.',
    variants: [
      { size: '10ml', priceINR: 110, stock: 50 },
      { size: '30ml', priceINR: 255, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/oud-majesty.png',
    isFeatured: true,
    isBestseller: true,
    isArabianCollection: true,
    notes: { top: ['Spicy', 'Woody'], heart: ['Oud', 'Rose', 'Patchouli'], base: ['Amber', 'Musk', 'Vanilla'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Oud', 'Woody'],
    occasions: ['Evening', 'Special Occasion'],
    styles: ['Bold', 'Mysterious']
  },
  {
    id: 'dove',
    slug: 'dove',
    name: 'Dove',
    category: 'Fresh',
    gender: 'Unisex',
    shortDescription: 'Modern minimal. Clean, minimal, refined — less, but unforgettable.',
    fullDescription: 'DOVE — Modern Minimal. Clean. Minimal. Refined. Less. But unforgettable.',
    variants: [
      { size: '10ml', priceINR: 60, stock: 50 },
      { size: '30ml', priceINR: 110, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/dove.png',
    notes: { top: [], heart: [], base: [] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Fresh'],
    occasions: ['Daily'],
    styles: ['Clean']
  },
  {
    id: 'irish-midnight',
    slug: 'irish-midnight',
    name: 'Irish Midnight',
    category: 'Woody',
    gender: 'Unisex',
    shortDescription: 'Made for the night. Bold, smooth, unstoppable.',
    fullDescription: 'IRISH MIDNIGHT — Made For The Night. Bold. Smooth. Unstoppable. Bergamot, lemon and black pepper open into lavender, iris and nutmeg, resting on amber, patchouli, sandalwood and musk.',
    variants: [
      { size: '10ml', priceINR: 90, stock: 50 },
      { size: '30ml', priceINR: 190, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/irish-midnight.png',
    isFeatured: true,
    notes: { top: ['Bergamot', 'Lemon', 'Black Pepper'], heart: ['Lavender', 'Iris', 'Nutmeg'], base: ['Amber', 'Patchouli', 'Sandalwood', 'Musk'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Woody', 'Spicy'],
    occasions: ['Evening'],
    styles: ['Bold', 'Mysterious']
  },
  {
    id: 'pond',
    slug: 'pond',
    name: 'Pond',
    category: 'Floral',
    gender: 'Unisex',
    shortDescription: 'Feel the freshness, embrace the elegance — a fresh, pure, refreshing scent.',
    fullDescription: 'POND — Feel the Freshness, Embrace the Elegance. A Fresh, Pure, Refreshing Scent inspired by purity, nature and calm moments — aquatic freshness, floral notes, soft and soothing.',
    variants: [
      { size: '10ml', priceINR: 65, stock: 50 },
      { size: '30ml', priceINR: 120, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/pond.png',
    notes: { top: ['Aquatic Freshness'], heart: ['Floral Notes'], base: ['Soft & Soothing'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Fresh', 'Floral'],
    occasions: ['Daily'],
    styles: ['Clean', 'Romantic']
  },
  {
    id: 'lumiere-oud',
    slug: 'lumiere-oud',
    name: 'Lumière Oud',
    category: 'Oud',
    gender: 'Unisex',
    shortDescription: 'Pure elegance — radiant, refined, unforgettable soft florals and precious oud.',
    fullDescription: 'LUMIÈRE OUD — Pure Élégance. Radiant. Refined. Unforgettable. A luminous blend of soft florals, warm woods and precious oud, crafted for timeless sophistication.',
    variants: [
      { size: '10ml', priceINR: 100, stock: 50 },
      { size: '30ml', priceINR: 220, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/lumiere-oud.png',
    isFeatured: true,
    isArabianCollection: true,
    notes: { top: ['Soft Florals'], heart: ['Warm Woods'], base: ['Precious Oud'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Oud', 'Floral'],
    occasions: ['Evening', 'Special Occasion'],
    styles: ['Elegant']
  },
  {
    id: 'purple-royale',
    slug: 'purple-royale',
    name: 'Purple Royale',
    category: 'Floral',
    gender: 'Unisex',
    shortDescription: 'A floral whisper meets the depth of oud.',
    fullDescription: 'PURPLE ROYALE — Eau de Parfum. A floral whisper meets the depth of oud. Bergamot, lavender and violet open into iris, rose and jasmine, settling on oud, patchouli and amber.',
    variants: [
      { size: '10ml', priceINR: 75, stock: 50 },
      { size: '30ml', priceINR: 160, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/purple-royale.png',
    notes: { top: ['Bergamot', 'Lavender', 'Violet'], heart: ['Iris', 'Rose', 'Jasmine'], base: ['Oud', 'Patchouli', 'Amber'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Floral', 'Woody'],
    occasions: ['Evening', 'Wedding'],
    styles: ['Romantic', 'Elegant']
  },
  {
    id: 'ambre-tonka',
    slug: 'ambre-tonka',
    name: 'Ambre & Tonka',
    category: 'Amber',
    gender: 'Unisex',
    shortDescription: 'Warm, sensual, enveloping amber and tonka bean gourmand.',
    fullDescription: 'AMBER & TONKA — Eau de Parfum. Warm. Sensual. Enveloping. Amber and sweet spices open into tonka bean and vanilla, resting on amber woods and resins.',
    variants: [
      { size: '10ml', priceINR: 80, stock: 50 },
      { size: '30ml', priceINR: 165, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/ambre-tonka.png',
    notes: { top: ['Amber', 'Sweet Spices'], heart: ['Tonka Bean', 'Vanilla'], base: ['Amber Woods', 'Resins'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Amber', 'Sweet'],
    occasions: ['Evening', 'Daily'],
    styles: ['Elegant', 'Romantic']
  },
  {
    id: 'eternal-one',
    slug: 'eternal-one',
    name: 'Eternal One',
    category: 'Floral',
    gender: 'Unisex',
    shortDescription: 'Timeless, elegant, unforgettable — a fragrance that stays with you like a beautiful memory.',
    fullDescription: 'ETERNAL ONE — Timeless. Elegant. Unforgettable. A fragrance that stays with you, like a beautiful memory. Notes of rose, peony, white musk and powdery accents.',
    variants: [
      { size: '10ml', priceINR: 75, stock: 50 },
      { size: '30ml', priceINR: 160, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/eternal-one.png',
    isFeatured: true,
    isBestseller: true,
    isArabianCollection: true,
    notes: { top: ['Rose'], heart: ['Peony'], base: ['White Musk', 'Powdery'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Floral', 'Sweet'],
    occasions: ['Evening', 'Wedding', 'Special Occasion'],
    styles: ['Romantic', 'Elegant']
  },
  {
    id: 'crystal-ice',
    slug: 'crystal-ice',
    name: 'Crystal Ice',
    category: 'Fresh',
    gender: 'Unisex',
    shortDescription: 'Powerful, fresh, irresistible — made for the one who leaves a lasting impression.',
    fullDescription: 'CRYSTAL ICE — Powerful. Fresh. Irresistible. Made for the one who leaves a lasting impression. Bergamot, lemon, ginger and mint open into lavender, geranium, sage and apple, grounded by amberwood, tonka bean, musk and vetiver.',
    variants: [
      { size: '10ml', priceINR: 75, stock: 50 },
      { size: '30ml', priceINR: 160, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/crystal-ice.png',
    notes: { top: ['Bergamot', 'Lemon', 'Ginger', 'Mint'], heart: ['Lavender', 'Geranium', 'Sage', 'Apple'], base: ['Amberwood', 'Tonka Bean', 'Musk', 'Vetiver'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Fresh'],
    occasions: ['Daily', 'Office'],
    styles: ['Clean', 'Bold']
  },
  {
    id: 'noble-imperial-oud',
    slug: 'noble-imperial-oud',
    name: 'Noble Imperial Oud',
    category: 'Oud',
    gender: 'Unisex',
    shortDescription: 'Tradition. Luxury. Heritage. A timeless blend honoring the rich heritage of Arabian perfumery.',
    fullDescription: 'NOBLE IMPERIAL OUD — Tradition. Luxury. Heritage. A timeless blend that honors the rich heritage of Arabian perfumery, crafted with notes that stay with you: saffron, bergamot and pink pepper, rose, patchouli and geranium, over oud, amber, musk and sandalwood.',
    variants: [
      { size: '10ml', priceINR: 100, stock: 50 },
      { size: '30ml', priceINR: 235, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/noble-imperial-oud.png',
    isFeatured: true,
    isBestseller: true,
    isArabianCollection: true,
    notes: { top: ['Saffron', 'Bergamot', 'Pink Pepper'], heart: ['Rose', 'Patchouli', 'Geranium'], base: ['Oud', 'Amber', 'Musk', 'Sandalwood'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Oud', 'Woody', 'Spicy'],
    occasions: ['Evening', 'Wedding', 'Special Occasion'],
    styles: ['Bold', 'Elegant', 'Mysterious']
  },
  {
    id: 'wildwood-spices',
    slug: 'wildwood-spices',
    name: 'Wildwood & Spices',
    category: 'Woody',
    gender: 'Unisex',
    shortDescription: 'Warm, woody, spicy, artisanal — inspired by nature, rich and long lasting.',
    fullDescription: 'WILD WOOD & SPICES — Warm. Woody. Spicy. Artisanal. Bergamot, cardamom and black pepper open into cedarwood, patchouli and clove, resting on sandalwood, amber and musk.',
    variants: [
      { size: '10ml', priceINR: 75, stock: 50 },
      { size: '30ml', priceINR: 160, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/wildwood-spices.png',
    notes: { top: ['Bergamot', 'Cardamom', 'Black Pepper'], heart: ['Cedarwood', 'Patchouli', 'Clove'], base: ['Sandalwood', 'Amber', 'Musk'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Woody', 'Spicy'],
    occasions: ['Office', 'Daily'],
    styles: ['Clean', 'Elegant']
  },
  {
    id: 'imperial-amber',
    slug: 'imperial-amber',
    name: 'Imperial Amber',
    category: 'Amber',
    gender: 'Unisex',
    shortDescription: 'Rich, warm, timeless — an ode to amber’s royal elegance.',
    fullDescription: 'IMPERIAL AMBER — Rich. Warm. Timeless. An ode to amber’s royal elegance. Lemon, raspberry and orange blossom open into gardenia, jasmine and spicy-fruity notes, grounded by amber, musk, vanilla and woody notes.',
    variants: [
      { size: '10ml', priceINR: 85, stock: 50 },
      { size: '30ml', priceINR: 200, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/imperial-amber.jpg',
    notes: { top: ['Lemon', 'Raspberry', 'Orange Blossom'], heart: ['Gardenia', 'Jasmine', 'Spicy & Fruity Notes'], base: ['Amber', 'Musk', 'Vanilla', 'Woody Notes'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Amber', 'Sweet'],
    occasions: ['Evening', 'Daily'],
    styles: ['Elegant', 'Romantic']
  },
  {
    id: 'ocean-current',
    slug: 'ocean-current',
    name: 'Ocean Current',
    category: 'Fresh',
    gender: 'Unisex',
    shortDescription: 'Fresh, aquatic, intense — inspired by the ocean.',
    fullDescription: 'OCEAN CURRENT — Fresh. Aquatic. Intense. Inspired by the ocean: green mandarin opens into coconut nectar / coconut water, resting on an amber accord.',
    variants: [
      { size: '10ml', priceINR: 70, stock: 50 },
      { size: '30ml', priceINR: 150, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/ocean-current.jpg',
    notes: { top: ['Green Mandarin'], heart: ['Coconut Nectar', 'Coconut Water'], base: ['Amber Accord'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Fresh'],
    occasions: ['Daily'],
    styles: ['Clean']
  },
  {
    id: 'wild-dessert',
    slug: 'wild-dessert',
    name: 'Wild Dessert',
    category: 'Spicy',
    gender: 'Unisex',
    shortDescription: 'Fresh, aquatic, intense — nutmeg, cinnamon, cardamom and grapefruit over a woody base.',
    fullDescription: 'WILD DESSERT — Fresh. Aquatic. Intense. Nutmeg, cinnamon, cardamom and grapefruit open into lavender, resting on licorice, sandalwood, amber, patchouli and Haitian vetiver.',
    variants: [
      { size: '10ml', priceINR: 85, stock: 50 },
      { size: '30ml', priceINR: 200, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/wild-dessert.jpeg',
    notes: { top: ['Nutmeg', 'Cinnamon', 'Cardamom', 'Grapefruit'], heart: ['Lavender'], base: ['Licorice', 'Sandalwood', 'Amber', 'Patchouli', 'Haitian Vetiver'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Spicy', 'Woody'],
    occasions: ['Daily', 'Evening'],
    styles: ['Bold']
  },
  {
    id: 'royal-blend',
    slug: 'royal-blend',
    name: 'Royal Blend',
    category: 'Woody',
    gender: 'Unisex',
    shortDescription: 'Elegant, majestic, timeless — royal essence, rich and long lasting.',
    fullDescription: 'ROYALS BLEND — Elegant. Majestic. Timeless. Bright, spicy top notes of bergamot, lemon, nutmeg and saffron lead into a dense floral heart of rose, geranium, carnation and lily of the valley, resting on oud, white musk, amber, sandalwood and cedarwood.',
    variants: [
      { size: '10ml', priceINR: 85, stock: 50 },
      { size: '30ml', priceINR: 200, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/royal-blend.jpg',
    isFeatured: true,
    notes: { top: ['Bergamot', 'Lemon', 'Nutmeg', 'Saffron'], heart: ['Rose', 'Geranium', 'Carnation', 'Lily of the Valley'], base: ['Oud', 'White Musk', 'Amber', 'Sandalwood', 'Cedarwood'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Woody', 'Spicy'],
    occasions: ['Evening', 'Special Occasion'],
    styles: ['Bold', 'Elegant']
  },
  {
    id: 'golden-dunes',
    slug: 'golden-dunes',
    name: 'Golden Dunes',
    category: 'Amber',
    gender: 'Unisex',
    shortDescription: 'Warm, rich, enchanting — a scent that captures the beauty of endless dunes.',
    fullDescription: 'GOLDEN DUNES — Warm. Rich. Enchanting. A scent that captures the beauty of endless dunes. Saffron and bergamot open into agarwood (oud) and Bulgarian rose, resting on tonka bean, sugar cane, amber, white musk and oakmoss.',
    variants: [
      { size: '10ml', priceINR: 100, stock: 50 },
      { size: '30ml', priceINR: 250, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/golden-dunes.jpg',
    isArabianCollection: true,
    notes: { top: ['Saffron', 'Bergamot'], heart: ['Agarwood (Oud)', 'Bulgarian Rose'], base: ['Tonka Bean', 'Sugar Cane', 'Amber', 'White Musk', 'Oakmoss'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Sweet', 'Amber'],
    occasions: ['Daily', 'Evening'],
    styles: ['Elegant', 'Romantic']
  },
  {
    id: 'tobacco-1',
    slug: 'tobacco-1',
    name: 'Tobacco 1',
    category: 'Spicy',
    gender: 'Unisex',
    shortDescription: 'Rich, warm, distinctive tobacco leaf with vanilla, cacao and tonka bean.',
    fullDescription: 'TOBACCO 1 — Rich. Warm. Distinctive. Tobacco leaf and spicy notes open into vanilla, cacao, tonka bean and tobacco blossom, resting on dried fruits and woody notes.',
    variants: [
      { size: '10ml', priceINR: 75, stock: 50 },
      { size: '30ml', priceINR: 200, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/tobacco-1.jpg',
    notes: { top: ['Tobacco Leaf', 'Spicy Notes'], heart: ['Vanilla', 'Cacao', 'Tonka Bean', 'Tobacco Blossom'], base: ['Dried Fruits', 'Woody Notes'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Spicy', 'Sweet'],
    occasions: ['Evening'],
    styles: ['Bold']
  },
  {
    id: 'tobacco-2',
    slug: 'tobacco-2',
    name: 'Tobacco 2',
    category: 'Spicy',
    gender: 'Unisex',
    shortDescription: 'Rich, warm, distinctive green French tobacco with blood orange and neroli.',
    fullDescription: 'TOBACCO 2 — Rich. Warm. Distinctive. Blood orange, mandarin and green apple open into green French tobacco, neroli, ginger and cinnamon, resting on lemongrass, frankincense (luban), guaiac wood and iris.',
    variants: [
      { size: '10ml', priceINR: 100, stock: 50 },
      { size: '30ml', priceINR: 250, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/tobacco-2.jpg',
    notes: { top: ['Blood Orange', 'Mandarin', 'Green Apple'], heart: ['Green French Tobacco', 'Neroli', 'Ginger', 'Cinnamon'], base: ['Lemongrass', 'Frankincense (Luban)', 'Guaiac Wood', 'Iris'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Spicy', 'Fresh'],
    occasions: ['Evening', 'Office'],
    styles: ['Bold', 'Elegant']
  },
  {
    id: 'arabica-royale',
    slug: 'arabica-royale',
    name: 'Arabica Royale',
    category: 'Spicy',
    gender: 'Unisex',
    shortDescription: 'Warm, rich, inviting — a scent that awakens the soul and embraces tradition.',
    fullDescription: 'ARABICA ROYALE — Warm. Rich. Inviting. A scent that awakens the soul and embraces tradition. Cinnamon, cardamom and ginger open into praline, candied fruits and white flowers, resting on coffee arabica, vanilla, tonka bean, benzoin and musk.',
    variants: [
      { size: '10ml', priceINR: 85, stock: 50 },
      { size: '30ml', priceINR: 200, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/arabica-royale.png',
    notes: { top: ['Cinnamon', 'Cardamom', 'Ginger'], heart: ['Praline', 'Candied Fruits', 'White Flowers'], base: ['Coffee Arabica', 'Vanilla', 'Tonka Bean', 'Benzoin', 'Musk'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Spicy', 'Sweet'],
    occasions: ['Daily', 'Evening', 'Office'],
    styles: ['Bold', 'Clean']
  },
  {
    id: 'amber-leather',
    slug: 'amber-leather',
    name: 'Amber Leather',
    category: 'Amber',
    gender: 'Unisex',
    shortDescription: 'Warm, rich, unforgettable — amber, leather and violet.',
    fullDescription: 'AMBER LEATHER — Warm. Rich. Unforgettable. Bergamot, lemon and pink pepper open into leather, violet and cardamom, resting on amber, cedarwood and musk.',
    variants: [
      { size: '10ml', priceINR: 85, stock: 50 },
      { size: '30ml', priceINR: 200, stock: 50 }
    ],
    rating: 0,
    reviewCount: 0,
    image: '/products/amber-leather.png',
    isFeatured: true,
    isBestseller: true,
    notes: { top: ['Bergamot', 'Lemon', 'Pink Pepper'], heart: ['Leather', 'Violet', 'Cardamom'], base: ['Amber', 'Cedarwood', 'Musk'] },
    longevity: 'To be confirmed',
    sillage: 'To be confirmed',
    moods: ['Woody', 'Spicy'],
    occasions: ['Office', 'Evening', 'Daily'],
    styles: ['Elegant', 'Bold']
  }
];

// No verified customer testimonials exist yet for these real products.
// This mockup previously shipped invented reviews; leaving the list empty
// rather than fabricating names/quotes. Replace once real reviews are collected.
export const TESTIMONIALS: Testimonial[] = [];
