import React from 'react';
import brandStoryImg from '../assets/images/asir_brand_story_1786253576758.jpg';
import { useShop } from '../context/ShopContext';
import { Sparkles, Feather, ShieldCheck, HeartHandshake } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const { setActivePage } = useShop();

  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4EFEA] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold tracking-[0.25em] uppercase rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PHILOSOPHY & CRAFT</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#2B2118] leading-tight">
              THE ASIR SIGNATURE
            </h2>

            <div className="w-16 h-[1.5px] bg-[#C5A059]" />

            <p className="font-serif text-lg italic text-[#C5A059]">
              "Fragrance is not merely worn; it is inherited by the room you walk into."
            </p>

            <div className="space-y-4 text-sm text-[#2B2118]/80 font-light leading-relaxed">
              <p>
                ASIR FRAGRANCE was conceived at the intersection of classical Arabian perfumery and modern French high-fashion formulation. Our philosophy centers on uncompromised ingredient purity: sourcing wild Cambodian agarwood, steam-distilled Taif rose petals, and golden ambergris.
              </p>
              <p>
                Every formulation is allowed to age for months in temperature-controlled oak casks, allowing complex heart notes to harmonize before being hand-poured into heavy crystal flacons.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EFE8DC]">
              <div className="space-y-1">
                <Feather className="w-5 h-5 text-[#C5A059]" />
                <h4 className="font-serif text-sm font-medium text-[#2B2118]">Ethical Sourcing</h4>
                <p className="text-[11px] text-[#2B2118]/60 font-light">Sustainable agarwood harvest</p>
              </div>
              <div className="space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                <h4 className="font-serif text-sm font-medium text-[#2B2118]">Hand-Finished</h4>
                <p className="text-[11px] text-[#2B2118]/60 font-light">Individual flacon inspection</p>
              </div>
              <div className="space-y-1">
                <HeartHandshake className="w-5 h-5 text-[#C5A059]" />
                <h4 className="font-serif text-sm font-medium text-[#2B2118]">Master Blends</h4>
                <p className="text-[11px] text-[#2B2118]/60 font-light">Paris & Dubai ateliers</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 border border-[#2B2118] text-[#2B2118] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#2B2118] hover:text-[#FAF8F5] transition-all duration-300"
              >
                READ OUR COMPLETE STORY
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#C5A059]/30 shadow-2xl group">
              <img
                src={brandStoryImg}
                alt="ASIR Fragrance Craftsmanship"
                referrerPolicy="no-referrer"
                className="w-full h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#C5A059]/30 text-center">
                <span className="font-serif text-lg font-light text-[#2B2118] block">
                  "Sourced from nature, refined by time."
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase block mt-1">
                  PARIS • DUBAI • RIYADH
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
