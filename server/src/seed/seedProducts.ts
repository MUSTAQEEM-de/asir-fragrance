import { connectDB } from '../config/db';
import { Product } from '../models/Product';
import { PRODUCTS } from '../../../src/data/products';
import mongoose from 'mongoose';

async function seed() {
  await connectDB();

  let created = 0;
  let updated = 0;

  for (const p of PRODUCTS) {
    const existing = await Product.exists({ slug: p.slug });

    await Product.findOneAndUpdate(
      { slug: p.slug },
      {
        slug: p.slug,
        name: p.name,
        arabicName: p.arabicName,
        category: p.category,
        gender: p.gender,
        shortDescription: p.shortDescription,
        fullDescription: p.fullDescription,
        variants: p.variants,
        rating: p.rating,
        reviewCount: p.reviewCount,
        image: p.image,
        galleryImages: p.galleryImages || [],
        isAttar: !!p.isAttar,
        isFeatured: !!p.isFeatured,
        isBestseller: !!p.isBestseller,
        isArabianCollection: !!p.isArabianCollection,
        isActive: true,
        notes: p.notes,
        longevity: p.longevity,
        sillage: p.sillage,
        moods: p.moods,
        occasions: p.occasions,
        styles: p.styles,
        sku: `ASIR-${p.slug.toUpperCase()}`
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    if (existing) {
      updated += 1;
    } else {
      created += 1;
    }
  }

  console.log(`[seed] products: ${created} created, ${updated} updated (${PRODUCTS.length} total in catalog)`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('[seed] failed:', err);
  process.exit(1);
});
