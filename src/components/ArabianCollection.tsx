import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArabianBorder } from './ArabianBorder';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ArabianCollection: React.FC = () => {
  const { products, openProductModal, setActivePage } = useShop();

  const arabianProducts = products.filter((p) => p.isArabianCollection).slice(0, 3);

  return (
    <section className="py-24 bg-[#EFE8DC] relative overflow-hidden">
      {/* Background Geometric Pattern */}
      <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HERITAGE CRAFTSMANSHIP</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#2B2118] tracking-tight">
            THE ARABIAN COLLECTION
          </h2>

          <p className="text-sm text-[#2B2118]/80 font-light leading-relaxed">
            Centered on precious Cambodian Dehn Al Oud, Taif Rose, Golden Ambergris, and Royal Musk, encapsulated in bespoke arch-framed crystal bottles.
          </p>

          <ArabianBorder variant="ornate" className="my-4" />
        </div>

        {/* Architectural Arch Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {arabianProducts.map((product, idx) => (
            <div
              key={product.id}
              className="bg-[#FAF8F5] p-8 border border-[#C5A059]/30 rounded-t-full shadow-lg flex flex-col justify-between text-center relative group hover:border-[#C5A059] transition-all duration-500"
            >
              {/* Arch Top Framing Line */}
              <div className="absolute top-3 left-3 right-3 bottom-3 rounded-t-full border border-[#C5A059]/20 pointer-events-none group-hover:border-[#C5A059]/50 transition-colors" />

              <div className="space-y-6 relative z-10">
                <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase block font-semibold">
                  NO. 0{idx + 1} • {product.category.toUpperCase()}
                </span>

                {/* Arch Image Frame */}
                <div
                  onClick={() => openProductModal(product.id)}
                  className="w-48 h-64 mx-auto rounded-t-full overflow-hidden bg-[#F4EFEA] border border-[#C5A059]/40 cursor-pointer shadow-md group-hover:scale-105 transition-transform duration-500"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#2B2118]">
                    {product.name}
                  </h3>
                  {product.arabicName && (
                    <span className="block font-serif italic text-sm text-[#C5A059] mt-0.5">
                      {product.arabicName}
                    </span>
                  )}
                  <p className="text-xs text-[#2B2118]/70 font-light mt-2 line-clamp-2 px-2">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#EFE8DC] mt-6 relative z-10">
                <button
                  onClick={() => openProductModal(product.id)}
                  className="w-full py-3 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors flex items-center justify-center gap-2"
                >
                  <span>DISCOVER FRAGRANCE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#2B2118] text-[#FAF8F5] p-8 sm:p-12 border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-semibold">
              EXCLUSIVE BOUTIQUE EDITION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light">
              Experience Bespoke Arabian Perfumery
            </h3>
            <p className="text-xs text-[#EFE8DC]/80 font-light max-w-xl">
              Each bottle from The Arabian Collection is individually numbered and accompanied by a certificate of authenticity for its vintage agarwood content.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#C5A059] text-[#2B2118] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#FAF8F5] transition-colors whitespace-nowrap shadow-lg"
          >
            EXPLORE ALL ARABIAN CREATIONS
          </button>
        </div>

      </div>
    </section>
  );
};
