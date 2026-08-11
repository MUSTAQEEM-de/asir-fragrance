import React from 'react';
import attarImg from '../assets/images/asir_attar_bottles_1786253546259.jpg';
import { useShop } from '../context/ShopContext';
import { Sparkles, ArrowRight, ShieldCheck, Droplet, Clock } from 'lucide-react';

export const AttarSection: React.FC = () => {
  const { setActivePage, setFilterCategory } = useShop();

  const handleExploreAttars = () => {
    setFilterCategory('Attar');
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden border-y border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Arch Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Gold Arch Border */}
              <div className="absolute -inset-4 rounded-t-full border border-[#C5A059]/40 p-2 pointer-events-none" />
              <div className="absolute -inset-8 rounded-t-full border border-[#C5A059]/20 pointer-events-none" />

              <div className="relative arch-window bg-[#EFE8DC] overflow-hidden shadow-2xl border border-[#C5A059]/30 aspect-[3/4]">
                <img
                  src={attarImg}
                  alt="ASIR Royal Attar Oil"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 cursor-pointer"
                  onClick={handleExploreAttars}
                />
              </div>
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold tracking-[0.25em] uppercase rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PURITY OF OIL</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#2B2118] leading-tight">
              THE SOUL OF ATTAR
            </h2>

            <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto lg:mx-0" />

            <p className="text-base font-serif italic text-[#C5A059] text-lg">
              "An intimate expression of fragrance, inspired by the timeless tradition of attar."
            </p>

            <p className="text-sm text-[#2B2118]/80 font-light leading-relaxed">
              Attar represents fragrance at its most concentrated and elemental form. Distilled without alcohol using classical copper vessels, our pure oil extracts meld directly with your skin’s natural heat to create a subtle, whisper-soft warmth that radiates for up to 24 hours.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#EFE8DC]">
              <div className="space-y-1">
                <Droplet className="w-5 h-5 text-[#C5A059] mx-auto lg:mx-0" />
                <h4 className="font-serif text-sm font-medium text-[#2B2118]">100% Pure Oil</h4>
                <p className="text-[11px] text-[#2B2118]/60 font-light">Zero alcohol dilution</p>
              </div>
              <div className="space-y-1">
                <Clock className="w-5 h-5 text-[#C5A059] mx-auto lg:mx-0" />
                <h4 className="font-serif text-sm font-medium text-[#2B2118]">24+ Hour Sillage</h4>
                <p className="text-[11px] text-[#2B2118]/60 font-light">Long-lasting warmth</p>
              </div>
              <div className="space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mx-auto lg:mx-0" />
                <h4 className="font-serif text-sm font-medium text-[#2B2118]">Crystal Tola</h4>
                <p className="text-[11px] text-[#2B2118]/60 font-light">Precision glass dipstick</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleExploreAttars}
                className="px-8 py-4 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-all duration-300 shadow-md inline-flex items-center gap-3"
              >
                <span>EXPLORE ATTAR SELECTION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
