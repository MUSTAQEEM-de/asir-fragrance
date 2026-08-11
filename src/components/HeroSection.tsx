import React from 'react';
import { useShop } from '../context/ShopContext';
import heroImg from '../assets/images/asir_hero_perfume_1786253532734.jpg';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setActivePage, openProductModal } = useShop();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] flex items-center overflow-hidden py-12 lg:py-0">
      {/* Subtle Background Arabesque Pattern */}
      <div className="absolute inset-0 bg-arabesque-pattern opacity-60 pointer-events-none" />

      {/* Decorative Light Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#EADBC8]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#FAF8F5]/80 text-[#C5A059] text-xs tracking-[0.2em] uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PARFUMERIE DE LUXE</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#2B2118] tracking-tight leading-[1.08]">
                THE ART OF <br />
                <span className="italic font-normal text-[#C5A059] font-serif">
                  LEAVING A TRACE
                </span>
              </h1>
              <div className="w-20 h-[1.5px] bg-[#C5A059]/50 mx-auto lg:mx-0" />
            </div>

            <p className="text-sm sm:text-base text-[#2B2118]/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover refined fragrances crafted to become part of your identity. Infused with vintage Cambodian oud, Taif rose, and liquid amber.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => {
                  setActivePage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#2B2118] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group border border-[#C5A059]/30"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#2B2118]/30 text-[#2B2118] text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>DISCOVER ASIR</span>
              </button>
            </div>

            {/* Micro Accents */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C5A059]/20 text-center lg:text-left">
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#2B2118]">100% Pure</span>
                <span className="text-[10px] tracking-widest text-[#2B2118]/60 uppercase">Niche Ingredients</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#2B2118]">24 Hours</span>
                <span className="text-[10px] tracking-widest text-[#2B2118]/60 uppercase">Attar Sillage</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#2B2118]">Paris & Dubai</span>
                <span className="text-[10px] tracking-widest text-[#2B2118]/60 uppercase">Master Perfumers</span>
              </div>
            </div>
          </div>

          {/* Right Product Showcase in Arabian Arch */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative group max-w-md lg:max-w-lg w-full">
              {/* Outer Golden Architectural Arch Frame */}
              <div className="absolute -inset-3 rounded-[120px] rounded-b-lg border border-[#C5A059]/40 p-2 pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-500" />
              <div className="absolute -inset-6 rounded-[130px] rounded-b-xl border border-[#C5A059]/20 pointer-events-none" />

              {/* Arch Container */}
              <div className="relative overflow-hidden arch-window bg-[#EFE8DC] shadow-2xl border border-[#C5A059]/30 aspect-[3/4]">
                <img
                  src={heroImg}
                  alt="ASIR Eternal One Perfume"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glass Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#C5A059]/30 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] uppercase text-[#C5A059] block font-semibold">
                      SIGNATURE EXTRAIT DE PARFUM
                    </span>
                    <h3 className="font-serif text-lg font-medium text-[#2B2118]">
                      Eternal One
                    </h3>
                  </div>
                  <button
                    onClick={() => openProductModal('eternal-one')}
                    className="px-3 py-2 bg-[#2B2118] text-[#EFE8DC] text-[10px] tracking-widest uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
