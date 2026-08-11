import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { NobleImperialShowcase } from '../components/NobleImperialShowcase';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { ShopByMood } from '../components/ShopByMood';
import { ArabianCollection } from '../components/ArabianCollection';
import { AttarSection } from '../components/AttarSection';
import { SignatureFragranceFinder } from '../components/SignatureFragranceFinder';
import { BrandStory } from '../components/BrandStory';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Noble Imperial Oud Official Campaign Showcase */}
      <NobleImperialShowcase />

      {/* 3. Featured Collection */}
      <FeaturedCollection />

      {/* 3. Shop by Fragrance Mood */}
      <ShopByMood />

      {/* 4. Arabian Collection Showcase */}
      <ArabianCollection />

      {/* 5. Attar Section */}
      <AttarSection />

      {/* 6. Signature Fragrance Finder */}
      <SignatureFragranceFinder />

      {/* 7. Brand Story */}
      <BrandStory />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Newsletter */}
      <Newsletter />
    </main>
  );
};
