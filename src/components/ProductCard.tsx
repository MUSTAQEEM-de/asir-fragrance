import React from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { formatPrice, addToCart, toggleWishlist, isInWishlist, openProductModal } = useShop();

  const inWishlist = isInWishlist(product.id);
  const startingPrice = Math.min(...product.variants.map((v) => v.priceINR));

  return (
    <div className="group bg-[#FAF8F5] border border-[#EFE8DC] hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.isBestseller && (
          <span className="px-2.5 py-1 bg-[#2B2118] text-[#EFE8DC] text-[9px] tracking-widest uppercase font-medium shadow-sm">
            Bestseller
          </span>
        )}
        {product.isAttar && (
          <span className="px-2.5 py-1 bg-[#C5A059] text-[#2B2118] text-[9px] tracking-widest uppercase font-semibold shadow-sm">
            Pure Attar
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product.id);
        }}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
          inWishlist ? 'bg-[#2B2118] text-[#C5A059]' : 'bg-[#FAF8F5]/80 text-[#2B2118] hover:text-[#C5A059]'
        }`}
        title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      >
        <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
      </button>

      {/* Image Container with Smooth Zoom */}
      <div
        onClick={() => openProductModal(product.id)}
        className="relative aspect-square w-full bg-[#F4EFEA] overflow-hidden cursor-pointer group-hover:bg-[#EFE8DC]/50 transition-colors"
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-[#2B2118]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openProductModal(product.id);
            }}
            className="px-4 py-2 bg-[#FAF8F5] text-[#2B2118] text-xs font-semibold tracking-widest uppercase shadow-lg flex items-center gap-2 hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-[#C5A059] font-medium">
            <span>{product.category} • {product.gender}</span>
            <div className="flex items-center gap-1 text-[#2B2118]/70">
              <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3
            onClick={() => openProductModal(product.id)}
            className="font-serif text-xl font-medium text-[#2B2118] mt-1 hover:text-[#C5A059] cursor-pointer transition-colors"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#2B2118]/70 font-light line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Add to Bag CTA */}
        <div className="pt-3 border-t border-[#EFE8DC] flex items-center justify-between gap-2">
          <div>
            <span className="text-xs text-[#2B2118]/50 block font-light">From</span>
            <span className="font-serif text-lg font-semibold text-[#2B2118]">
              {formatPrice(startingPrice)}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2.5 bg-[#2B2118] text-[#EFE8DC] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>ADD TO BAG</span>
          </button>
        </div>
      </div>
    </div>
  );
};
