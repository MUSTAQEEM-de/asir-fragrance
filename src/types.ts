export type ThemeVariation = 'sand-cream' | 'oud-rose' | 'alabaster-sage';
export type Currency = 'INR' | 'USD' | 'AED' | 'EUR' | 'GBP';

export type FragranceFamily = 'Oud' | 'Amber' | 'Woody' | 'Fresh' | 'Floral' | 'Spicy' | 'Attar';
export type GenderCategory = 'Unisex' | 'Men' | 'Women';

export type MoodType = 'Fresh' | 'Woody' | 'Sweet' | 'Spicy' | 'Floral' | 'Oud' | 'Amber';
export type OccasionType = 'Daily' | 'Office' | 'Evening' | 'Wedding' | 'Special Occasion';
export type StyleType = 'Bold' | 'Elegant' | 'Mysterious' | 'Clean' | 'Romantic';

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

// Real per-size selling price in INR (the canonical business currency).
export interface PriceVariant {
  size: string; // e.g. '10ml', '30ml'
  priceINR: number;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  arabicName?: string;
  category: FragranceFamily;
  gender: GenderCategory;
  shortDescription: string;
  fullDescription: string;
  variants: PriceVariant[];
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages?: string[];
  isAttar?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  isArabianCollection?: boolean;
  notes: FragranceNotes;
  longevity: string;
  sillage: string;
  moods: MoodType[];
  occasions: OccasionType[];
  styles: StyleType[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  purchasedProduct: string;
  date: string;
}
