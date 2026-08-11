import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ArabianBorder } from './ArabianBorder';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  const { products, setActivePage } = useShop();
  const [activeTab, setActiveTab] = useState<'All' | 'Bestsellers' | 'Oud' | 'Attars' | 'Amber'>('All');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'Bestsellers') return p.isBestseller;
    if (activeTab === 'Oud') return p.category === 'Oud';
    if (activeTab === 'Attars') return p.isAttar;
    if (activeTab === 'Amber') return p.category === 'Amber';
    return true;
  });

  return (
    <section className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FINE PARFUMERIE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#2B2118] tracking-tight">
            THE ASIR COLLECTION
          </h2>

          <p className="text-sm text-[#2B2118]/70 font-light">
            Distinct fragrances. Unforgettable impressions.
          </p>

          <ArabianBorder variant="ornate" className="my-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 my-8 flex-wrap">
          {(['All', 'Bestsellers', 'Oud', 'Attars', 'Amber'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-xs font-medium tracking-[0.2em] uppercase transition-all rounded-full border ${
                activeTab === tab
                  ? 'bg-[#2B2118] text-[#EFE8DC] border-[#2B2118]'
                  : 'bg-[#FAF8F5] text-[#2B2118]/70 border-[#C5A059]/30 hover:border-[#C5A059] hover:text-[#2B2118]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setActivePage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#2B2118] text-[#2B2118] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#2B2118] hover:text-[#FAF8F5] transition-all duration-300 shadow-xs"
          >
            <span>VIEW COMPLETE CATALOG</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
