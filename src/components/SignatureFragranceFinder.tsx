import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { MoodType, OccasionType, StyleType, Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, RefreshCw, Compass } from 'lucide-react';

export const SignatureFragranceFinder: React.FC = () => {
  const { products } = useShop();
  const [selectedMood, setSelectedMood] = useState<MoodType>('Oud');
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionType>('Evening');
  const [selectedStyle, setSelectedStyle] = useState<StyleType>('Bold');

  const moods: MoodType[] = ['Fresh', 'Woody', 'Sweet', 'Spicy', 'Floral', 'Oud'];
  const occasions: OccasionType[] = ['Daily', 'Office', 'Evening', 'Wedding', 'Special Occasion'];
  const styles: StyleType[] = ['Bold', 'Elegant', 'Mysterious', 'Clean', 'Romantic'];

  // Score matching products based on selections
  const matches: Product[] = [...products].sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (a.moods.includes(selectedMood)) scoreA += 3;
    if (b.moods.includes(selectedMood)) scoreB += 3;

    if (a.occasions.includes(selectedOccasion)) scoreA += 2;
    if (b.occasions.includes(selectedOccasion)) scoreB += 2;

    if (a.styles.includes(selectedStyle)) scoreA += 2;
    if (b.styles.includes(selectedStyle)) scoreB += 2;

    return scoreB - scoreA;
  }).slice(0, 3);

  return (
    <section className="py-24 bg-[#F4EFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            <Compass className="w-4 h-4" />
            <span>INTERACTIVE CONSULTATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#2B2118] tracking-tight">
            FIND YOUR SIGNATURE
          </h2>

          <p className="text-sm text-[#2B2118]/70 font-light">
            Select your preferred scent profile, occasion, and style to reveal your tailor-made ASIR fragrance match.
          </p>
        </div>

        {/* Interactive Selector Board */}
        <div className="bg-[#FAF8F5] p-6 sm:p-10 border border-[#C5A059]/30 shadow-lg space-y-8 max-w-4xl mx-auto">
          
          {/* 1. Mood */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-[#2B2118] uppercase">
              <span>1. DESIRED SCENT MOOD</span>
              <span className="text-[#C5A059] font-serif italic text-sm">{selectedMood}</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {moods.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMood(m)}
                  className={`py-2.5 px-3 text-xs font-medium tracking-wider rounded transition-all border ${
                    selectedMood === m
                      ? 'bg-[#2B2118] text-[#EFE8DC] border-[#2B2118]'
                      : 'bg-white text-[#2B2118] border-[#EFE8DC] hover:border-[#C5A059]'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Occasion */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-[#2B2118] uppercase">
              <span>2. INTENDED OCCASION</span>
              <span className="text-[#C5A059] font-serif italic text-sm">{selectedOccasion}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {occasions.map((o) => (
                <button
                  key={o}
                  onClick={() => setSelectedOccasion(o)}
                  className={`py-2.5 px-3 text-xs font-medium tracking-wider rounded transition-all border ${
                    selectedOccasion === o
                      ? 'bg-[#2B2118] text-[#EFE8DC] border-[#2B2118]'
                      : 'bg-white text-[#2B2118] border-[#EFE8DC] hover:border-[#C5A059]'
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Style */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-[#2B2118] uppercase">
              <span>3. PERSONAL STYLE</span>
              <span className="text-[#C5A059] font-serif italic text-sm">{selectedStyle}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {styles.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStyle(s)}
                  className={`py-2.5 px-3 text-xs font-medium tracking-wider rounded transition-all border ${
                    selectedStyle === s
                      ? 'bg-[#2B2118] text-[#EFE8DC] border-[#2B2118]'
                      : 'bg-white text-[#2B2118] border-[#EFE8DC] hover:border-[#C5A059]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#EFE8DC] text-xs text-[#2B2118]/60">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Showing top 3 curated recommendations based on your selections
            </span>
            <button
              onClick={() => {
                setSelectedMood('Oud');
                setSelectedOccasion('Evening');
                setSelectedStyle('Bold');
              }}
              className="flex items-center gap-1 text-[#C5A059] hover:text-[#2B2118] transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              Reset Choices
            </button>
          </div>

        </div>

        {/* Matches Showcase */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="font-serif text-2xl font-light text-[#2B2118]">
              Your Recommended Fragrances
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {matches.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
