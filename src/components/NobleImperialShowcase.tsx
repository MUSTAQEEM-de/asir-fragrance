import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArabianBorder } from './ArabianBorder';
import { Sparkles, ShoppingBag, Heart, Check, Star, ZoomIn, Feather, Compass, Clock } from 'lucide-react';
import nobleImperialImg from '../assets/images/asir_noble_imperial_banner_1786272350637.jpg';

export const NobleImperialShowcase: React.FC = () => {
  const { products, addToCart, toggleWishlist, isInWishlist, openProductModal, formatPrice } = useShop();
  const [selectedSize, setSelectedSize] = useState<'10ml' | '30ml'>('30ml');
  const [zoomed, setZoomed] = useState(false);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === 'noble-imperial-oud') || products[0];
  if (!product) return null;
  const inWishlist = isInWishlist(product.id);
  const activeVariant = product.variants.find((v) => v.size === selectedSize) || product.variants[0];

  const handleAddToCart = () => {
    addToCart(product, activeVariant.size, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="noble-imperial-review" className="py-20 bg-[#1F1712] text-[#EFE8DC] relative overflow-hidden border-y border-[#C5A059]/40">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NEW ANNOUNCEMENT • FEATURED RECITATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#EFE8DC] tracking-wide">
            NOBLE IMPERIAL OUD
          </h2>

          <p className="text-xs sm:text-sm text-[#C5A059] font-mono tracking-widest uppercase">
            TRADITION. LUXURY. HERITAGE.
          </p>

          <p className="text-xs sm:text-sm text-[#EFE8DC]/80 font-light max-w-xl mx-auto leading-relaxed">
            A timeless blend that honors the rich heritage of Arabian perfumery. Noble Imperial Oud is a celebration of tradition, luxury, and refinement.
          </p>

          <ArabianBorder variant="ornate" className="my-4 text-[#C5A059]" />
        </div>

        {/* Main Grid: Poster on Left, Interactive Specifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official Poster Preview */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#C5A059]/50 shadow-[0_0_30px_rgba(197,160,89,0.2)] bg-[#140E0A]">
              <img
                src={nobleImperialImg}
                alt="ASIR Fragrances Noble Imperial Oud Poster"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
              />

              {/* Poster Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#1F1712]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#C5A059]/40 flex items-center gap-2 text-[10px] text-[#C5A059] font-semibold uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                <span>OFFICIAL CAMPAIGN POSTER</span>
              </div>

              {/* Zoom Trigger Button */}
              <button
                onClick={() => setZoomed(!zoomed)}
                className="absolute bottom-4 right-4 p-2.5 bg-[#C5A059] text-[#1F1712] rounded-full shadow-lg hover:bg-white transition-colors flex items-center gap-1 text-xs font-semibold"
                title="Expand Poster"
              >
                <ZoomIn className="w-4 h-4" />
                <span className="hidden sm:inline">Inspect Poster</span>
              </button>
            </div>

            {/* Poster Zoom Modal */}
            {zoomed && (
              <div
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
                onClick={() => setZoomed(false)}
              >
                <div className="relative max-w-4xl w-full">
                  <img
                    src={nobleImperialImg}
                    alt="Noble Imperial Oud Large Banner"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto rounded border-2 border-[#C5A059] shadow-2xl max-h-[90vh] object-contain mx-auto"
                  />
                  <span className="text-center block text-xs text-[#C5A059] mt-2 font-mono">
                    Click anywhere to close full review
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Specification & Direct Order Card */}
          <div className="lg:col-span-5 bg-[#2A1F18] p-6 sm:p-8 rounded-lg border border-[#C5A059]/40 shadow-xl space-y-6">
            
            <div className="border-b border-[#C5A059]/30 pb-4">
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase block font-semibold mb-1">
                EAU DE PARFUM • EXTRAIT DE LUXE
              </span>
              <h3 className="font-serif text-3xl font-light text-[#EFE8DC]">
                Noble Imperial Oud
              </h3>
              <span className="font-serif italic text-[#C5A059] text-sm block mt-0.5">
                العود الإمبراطوري النبيل
              </span>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-[#C5A059]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#EFE8DC]/80 font-medium">{product.rating.toFixed(1)} ({product.reviewCount} Reviews)</span>
              </div>
            </div>

            {/* Key Poster Highlights */}
            <div className="grid grid-cols-3 gap-2 text-center p-3 bg-[#1F1712] rounded border border-[#C5A059]/20">
              <div className="space-y-1">
                <Feather className="w-4 h-4 text-[#C5A059] mx-auto" />
                <span className="text-[10px] uppercase font-semibold text-[#EFE8DC] block">RICH OUD</span>
                <span className="text-[9px] text-[#EFE8DC]/60 block">Cambodian Resin</span>
              </div>
              <div className="space-y-1 border-x border-[#C5A059]/20">
                <Compass className="w-4 h-4 text-[#C5A059] mx-auto" />
                <span className="text-[10px] uppercase font-semibold text-[#EFE8DC] block">ARABIAN HERITAGE</span>
                <span className="text-[9px] text-[#EFE8DC]/60 block">Copper Hydro-Distillation</span>
              </div>
              <div className="space-y-1">
                <Clock className="w-4 h-4 text-[#C5A059] mx-auto" />
                <span className="text-[10px] uppercase font-semibold text-[#EFE8DC] block">LONG LASTING</span>
                <span className="text-[9px] text-[#EFE8DC]/60 block">{product.longevity}</span>
              </div>
            </div>

            {/* Size & Pricing Selectors */}
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase block">
                SELECT FLACON SIZE:
              </span>

              <div className="grid grid-cols-2 gap-3">
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant.size}
                    onClick={() => setSelectedSize(variant.size as '10ml' | '30ml')}
                    className={`relative overflow-hidden p-3 rounded border text-left transition-all ${
                      selectedSize === variant.size
                        ? 'bg-[#C5A059] text-[#1F1712] border-[#C5A059] font-semibold'
                        : 'bg-[#1F1712] text-[#EFE8DC] border-[#C5A059]/30 hover:border-[#C5A059]'
                    }`}
                  >
                    {idx === product.variants.length - 1 && (
                      <span className="absolute top-0 right-0 bg-[#1F1712] text-[#C5A059] text-[8px] font-bold px-1.5 py-0.5 rounded-bl uppercase">
                        BEST VALUE
                      </span>
                    )}
                    <div className="text-xs uppercase tracking-wider font-bold">{variant.size} Spray</div>
                    <div className="font-serif text-lg font-bold mt-1">{formatPrice(variant.priceINR)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Poster Olfactory Pyramid Breakdown */}
            <div className="p-4 bg-[#1F1712] rounded border border-[#C5A059]/30 space-y-3 text-xs">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#C5A059] uppercase block">
                OFFICIAL OLFACTORY NOTES
              </span>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-[#C5A059] font-semibold min-w-24">Top Notes:</span>
                  <span className="text-[#EFE8DC]/80 font-light text-right">Saffron, Bergamot, Pink Pepper</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-serif text-[#C5A059] font-semibold min-w-24">Heart Notes:</span>
                  <span className="text-[#EFE8DC]/80 font-light text-right">Rose, Patchouli, Geranium</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-serif text-[#C5A059] font-semibold min-w-24">Base Notes:</span>
                  <span className="text-[#EFE8DC]/80 font-light text-right">Oud, Amber, Musk, Sandalwood</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#C5A059] text-[#1F1712] text-xs font-bold tracking-[0.2em] uppercase rounded hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-green-700" />
                    <span>ADDED TO BAG!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD {selectedSize.toUpperCase()} TO BAG ({formatPrice(activeVariant.priceINR)})</span>
                  </>
                )}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => openProductModal(product.id)}
                  className="flex-1 py-2.5 bg-transparent border border-[#C5A059]/50 text-[#C5A059] text-xs font-medium tracking-wider uppercase hover:bg-[#C5A059]/10 transition-colors rounded text-center"
                >
                  Full Modal View
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2.5 border rounded transition-colors ${
                    inWishlist ? 'bg-[#C5A059] text-[#1F1712] border-[#C5A059]' : 'border-[#C5A059]/50 text-[#C5A059] hover:bg-[#C5A059]/10'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
