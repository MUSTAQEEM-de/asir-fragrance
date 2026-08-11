import React from 'react';
import brandStoryImg from '../assets/images/asir_brand_story_1786253576758.jpg';
import heroImg from '../assets/images/asir_hero_perfume_1786253532734.jpg';
import { ArabianBorder } from '../components/ArabianBorder';
import { Sparkles, Compass, ShieldCheck, Feather } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            <Compass className="w-4 h-4" />
            <span>HERITAGE & VISION</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#2B2118]">
            THE ASIR PHILOSOPHY
          </h1>

          <p className="text-sm text-[#2B2118]/70 font-light">
            Where classical Arabian olfactory heritage meets French high-fashion formulation.
          </p>

          <ArabianBorder variant="ornate" className="my-2" />
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#F4EFEA] p-8 sm:p-12 border border-[#C5A059]/30 rounded shadow-xs">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase block font-semibold">
              UNCOMPROMISED RAW MATERIALS
            </span>
            <h2 className="font-serif text-3xl font-light text-[#2B2118]">
              Sourced with Integrity, Aged by Time
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <p className="text-xs sm:text-sm text-[#2B2118]/80 font-light leading-relaxed">
              At ASIR FRAGRANCE, we believe the soul of a perfume lies in the uncompromising quality of its raw botanicals and resins. Our master perfumers journey across Southeast Asia and the Middle East to secure wild-harvested Cambodian agarwood, steam-distilled Taif rose petals, and golden ambergris.
            </p>
            <p className="text-xs sm:text-sm text-[#2B2118]/80 font-light leading-relaxed">
              Before bottling, each batch undergoes a months-long maturation process in temperature-controlled oak casks, allowing volatile top notes to soften and harmoniously integrate with deeper resinous base notes.
            </p>
          </div>

          <div className="rounded overflow-hidden border border-[#C5A059]/30 shadow-md">
            <img
              src={brandStoryImg}
              alt="Raw fragrance ingredients"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded overflow-hidden border border-[#C5A059]/30 shadow-md order-2 lg:order-1">
            <img
              src={heroImg}
              alt="ASIR Flacon"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="space-y-4 order-1 lg:order-2">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase block font-semibold">
              THE FLACON & PRESENTATION
            </span>
            <h2 className="font-serif text-3xl font-light text-[#2B2118]">
              Architectural Crystal & Heavy Brushed Gold
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <p className="text-xs sm:text-sm text-[#2B2118]/80 font-light leading-relaxed">
              Every ASIR flacon is a sculpture in heavy optical glass, capped with a solid brushed antique gold cap reminiscent of traditional Arabian arches.
            </p>
            <p className="text-xs sm:text-sm text-[#2B2118]/80 font-light leading-relaxed">
              Hand-finished by artisans in our Paris and Dubai ateliers, each bottle undergoes rigorous quality control before being sealed in satin-lined presentation cases.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#EFE8DC]">
          <div className="p-6 bg-[#FAF8F5] border border-[#EFE8DC] rounded space-y-2 text-center">
            <Feather className="w-6 h-6 text-[#C5A059] mx-auto" />
            <h3 className="font-serif text-lg font-medium text-[#2B2118]">Ethical Sourcing</h3>
            <p className="text-xs text-[#2B2118]/70 font-light leading-relaxed">
              Direct partnership with sustainable agarwood plantations and rose harvests.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#EFE8DC] rounded space-y-2 text-center">
            <Sparkles className="w-6 h-6 text-[#C5A059] mx-auto" />
            <h3 className="font-serif text-lg font-medium text-[#2B2118]">Master Formulations</h3>
            <p className="text-xs text-[#2B2118]/70 font-light leading-relaxed">
              Blending ancient hydro-distillation with modern perfume science.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#EFE8DC] rounded space-y-2 text-center">
            <ShieldCheck className="w-6 h-6 text-[#C5A059] mx-auto" />
            <h3 className="font-serif text-lg font-medium text-[#2B2118]">Boutique Authenticity</h3>
            <p className="text-xs text-[#2B2118]/70 font-light leading-relaxed">
              Every flacon is individually batch-numbered for guaranteed purity.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
