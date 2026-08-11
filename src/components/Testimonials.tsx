import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const t = TESTIMONIALS[currentIndex];

  // No verified reviews exist yet — hide the section rather than show fabricated quotes.
  if (!t) return null;

  return (
    <section className="py-20 bg-[#F4EFEA] relative overflow-hidden border-t border-[#EFE8DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <Quote className="w-12 h-12 text-[#C5A059]/40 mx-auto mb-4" />

        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059] block mb-2">
          CLIENT IMPRESSIONS
        </span>

        <div className="min-h-[180px] flex flex-col items-center justify-center space-y-4">
          <div className="flex gap-1 text-[#C5A059]">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <blockquote className="font-serif text-xl sm:text-2xl font-light text-[#2B2118] italic leading-relaxed max-w-2xl">
            "{t.comment}"
          </blockquote>

          <div>
            <span className="font-serif text-base font-semibold text-[#2B2118] block">
              {t.name}
            </span>
            <span className="text-xs text-[#2B2118]/60 font-light block">
              {t.location} • Verified Buyer of <span className="text-[#C5A059]">{t.purchasedProduct}</span>
            </span>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2.5 rounded-full border border-[#C5A059]/40 text-[#2B2118] hover:bg-[#C5A059] hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-[#C5A059] w-6' : 'bg-[#C5A059]/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2.5 rounded-full border border-[#C5A059]/40 text-[#2B2118] hover:bg-[#C5A059] hover:text-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
