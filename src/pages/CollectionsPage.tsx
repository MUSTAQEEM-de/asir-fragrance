import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { ArabianBorder } from '../components/ArabianBorder';
import { Sparkles, ArrowRight } from 'lucide-react';

export const CollectionsPage: React.FC = () => {
  const { products, setActivePage, setFilterCategory } = useShop();

  const collections = [
    {
      id: 'arabian-collection',
      title: 'THE ARABIAN COLLECTION',
      subtitle: 'Centered on precious Dehn Al Oud, Taif Rose, Golden Ambergris, and Royal Musk.',
      filter: 'Oud',
      products: products.filter((p) => p.isArabianCollection)
    },
    {
      id: 'imperial-attars',
      title: 'IMPERIAL CONCENTRATED ATTARS',
      subtitle: 'Pure alcohol-free concentrated oil extracts hydro-distilled in traditional copper stills.',
      filter: 'Attar',
      products: products.filter((p) => p.isAttar)
    },
    {
      id: 'bestseller-series',
      title: 'THE BOUTIQUE BESTSELLERS',
      subtitle: 'The most requested signature scents.',
      filter: 'All',
      products: products.filter((p) => p.isBestseller)
    }
  ];

  return (
    <div className="py-16 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED ANTHOLOGIES</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#2B2118]">
            ASIR FRAGRANCE COLLECTIONS
          </h1>

          <p className="text-xs sm:text-sm text-[#2B2118]/70 font-light">
            Distinct olfactory chapters defined by rare ingredients and master formulation.
          </p>

          <ArabianBorder variant="ornate" className="my-2" />
        </div>

        {/* Collections */}
        {collections.map((col) => (
          <section key={col.id} className="space-y-8 bg-[#F4EFEA] p-6 sm:p-10 rounded border border-[#C5A059]/30 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#EFE8DC] pb-4 gap-4">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase block font-semibold">
                  FEATURED ANTHOLOGY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#2B2118]">
                  {col.title}
                </h2>
                <p className="text-xs text-[#2B2118]/70 font-light mt-1">
                  {col.subtitle}
                </p>
              </div>

              <button
                onClick={() => {
                  setFilterCategory(col.filter);
                  setActivePage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A059] hover:text-[#2B2118] uppercase transition-colors"
              >
                <span>EXPLORE ENTIRE CATEGORY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {col.products.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}

      </div>
    </div>
  );
};
