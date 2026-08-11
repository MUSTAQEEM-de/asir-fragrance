import { Schema, model, Document, Types } from 'mongoose';

export interface PriceVariant {
  size: string;
  priceINR: number;
  stock: number;
}

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductDocument extends Document<Types.ObjectId> {
  slug: string;
  name: string;
  arabicName?: string;
  category: string;
  gender: string;
  shortDescription: string;
  fullDescription: string;
  variants: PriceVariant[];
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages: string[];
  isAttar: boolean;
  isFeatured: boolean;
  isBestseller: boolean;
  isArabianCollection: boolean;
  isActive: boolean;
  notes: FragranceNotes;
  longevity: string;
  sillage: string;
  moods: string[];
  occasions: string[];
  styles: string[];
  sku: string;
  createdAt: Date;
  updatedAt: Date;
}

const priceVariantSchema = new Schema<PriceVariant>(
  {
    size: { type: String, required: true },
    priceINR: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0, default: 0 }
  },
  { _id: false }
);

const fragranceNotesSchema = new Schema<FragranceNotes>(
  {
    top: { type: [String], default: [] },
    heart: { type: [String], default: [] },
    base: { type: [String], default: [] }
  },
  { _id: false }
);

const productSchema = new Schema<ProductDocument>(
  {
    slug: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    name: { type: String, required: true, index: true, trim: true },
    arabicName: { type: String },
    category: { type: String, required: true, index: true },
    gender: { type: String, required: true, default: 'Unisex' },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    variants: {
      type: [priceVariantSchema],
      required: true,
      validate: (v: PriceVariant[]) => Array.isArray(v) && v.length > 0
    },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0, min: 0 },
    image: { type: String, required: true },
    galleryImages: { type: [String], default: [] },
    isAttar: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false, index: true },
    isBestseller: { type: Boolean, default: false, index: true },
    isArabianCollection: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    notes: { type: fragranceNotesSchema, required: true },
    longevity: { type: String, default: 'To be confirmed' },
    sillage: { type: String, default: 'To be confirmed' },
    moods: { type: [String], default: [] },
    occasions: { type: [String], default: [] },
    styles: { type: [String], default: [] },
    sku: { type: String, unique: true, sparse: true }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export const Product = model<ProductDocument>('Product', productSchema);
