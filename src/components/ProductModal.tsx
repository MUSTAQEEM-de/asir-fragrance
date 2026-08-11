import React, { useState } from 'react';
import { useShop, getVariantPrice } from '../context/ShopContext';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Sparkles, Clock, Compass, Plus, Minus } from 'lucide-react';

export const ProductModal: React.FC = () => {
  const { products, selectedProductId, setSelectedProductId, addToCart, toggleWishlist, isInWishlist, formatPrice } = useShop();

  const product = products.find((p) => p.id === selectedProductId);

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>('');

  if (!product) return null;

  const currentSize = selectedSize || product.variants[0]?.size;
  const currentPrice = getVariantPrice(product, currentSize);
  const currentImage = activeImage || product.image;
  const inWishlist = isInWishlist(product.id);

  const gallery = product.galleryImages && product.galleryImages.length > 0 ? product.galleryImages : [product.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-fadeIn"
        onClick={() => {
          setSelectedProductId(null);
          setActiveImage('');
        }}
      />

      <div className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#C5A059]/40 shadow-2xl rounded-lg overflow-hidden z-10 animate-scaleUp my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            setSelectedProductId(null);
            setActiveImage('');
          }}
          className="absolute top-4 right-4 z-20 p-2 text-[#2B2118] bg-white/80 rounded-full hover:bg-[#C5A059] hover:text-white transition-colors"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10">
          
          {/* Gallery Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="aspect-square bg-[#F4EFEA] rounded border border-[#C5A059]/30 overflow-hidden relative shadow-md">
              <img
                src={currentImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail Row */}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded border overflow-hidden flex-shrink-0 transition-all ${
                      currentImage === img ? 'border-[#C5A059] ring-2 ring-[#C5A059]/30' : 'border-[#EFE8DC]'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.category} • {product.gender}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2B2118] mt-1">
                {product.name}
              </h2>

              {product.arabicName && (
                <span className="font-serif italic text-[#C5A059] text-base block">
                  {product.arabicName}
                </span>
              )}

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-semibold text-[#2B2118] ml-1">{product.rating}</span>
                </div>
                <span className="text-xs text-[#2B2118]/60 font-light">({product.reviewCount} Reviews)</span>
              </div>

              <div className="mt-4">
                <span className="font-serif text-3xl font-semibold text-[#2B2118]">
                  {formatPrice(currentPrice)}
                </span>
                <span className="text-xs text-[#2B2118]/60 block font-light mt-0.5">
                  Taxes included • Complimentary Worldwide Shipping
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#2B2118]/80 font-light leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#2B2118] uppercase block">
                SELECT BOTTLE SIZE:
              </span>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((variant) => (
                  <button
                    key={variant.size}
                    onClick={() => setSelectedSize(variant.size)}
                    className={`px-4 py-2 text-xs font-medium tracking-wider rounded border transition-all ${
                      currentSize === variant.size
                        ? 'bg-[#2B2118] text-[#EFE8DC] border-[#2B2118]'
                        : 'bg-white text-[#2B2118] border-[#EFE8DC] hover:border-[#C5A059]'
                    }`}
                  >
                    {variant.size} · {formatPrice(variant.priceINR)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & CTA */}
            {(() => {
              const currentVariant = product.variants.find((v) => v.size === currentSize) || product.variants[0];
              const maxStock = currentVariant?.stock ?? 0;
              const outOfStock = maxStock <= 0;
              return (
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center border border-[#EFE8DC] rounded bg-white">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2.5 text-[#2B2118] hover:bg-[#F4EFEA]"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => Math.min(maxStock || q, q + 1))}
                      className="p-2.5 text-[#2B2118] hover:bg-[#F4EFEA]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    disabled={outOfStock}
                    onClick={() => {
                      addToCart(product, currentSize, Math.min(quantity, maxStock));
                      setSelectedProductId(null);
                    }}
                    className="flex-1 py-3.5 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{outOfStock ? 'OUT OF STOCK' : 'ADD TO BAG'}</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3.5 rounded border transition-colors ${
                      inWishlist
                        ? 'bg-[#2B2118] text-[#C5A059] border-[#2B2118]'
                        : 'bg-white text-[#2B2118] border-[#EFE8DC] hover:border-[#C5A059]'
                    }`}
                    title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
                  </button>
                </div>
              );
            })()}

            {/* Fragrance Notes Pyramid */}
            <div className="p-4 bg-[#F4EFEA] border border-[#EFE8DC] rounded space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase block">
                OLFACTORY PYRAMID
              </span>
              <div className="grid grid-cols-3 gap-2 text-xs font-light">
                <div>
                  <strong className="block font-serif text-[#2B2118]">Top Notes</strong>
                  <span className="text-[#2B2118]/70 text-[11px]">{product.notes.top.join(', ')}</span>
                </div>
                <div>
                  <strong className="block font-serif text-[#2B2118]">Heart Notes</strong>
                  <span className="text-[#2B2118]/70 text-[11px]">{product.notes.heart.join(', ')}</span>
                </div>
                <div>
                  <strong className="block font-serif text-[#2B2118]">Base Notes</strong>
                  <span className="text-[#2B2118]/70 text-[11px]">{product.notes.base.join(', ')}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFE8DC] flex items-center justify-between text-[11px] text-[#2B2118]/80">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  Longevity: <strong>{product.longevity}</strong>
                </span>
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                  Sillage: <strong>{product.sillage}</strong>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-[#2B2118]/60 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Authentic ASIR Flacon • Sealed Batch Guarantee</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
