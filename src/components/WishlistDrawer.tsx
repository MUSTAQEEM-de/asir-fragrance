import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    products,
    wishlist,
    wishlistOpen,
    setWishlistOpen,
    toggleWishlist,
    addToCart,
    formatPrice,
    openProductModal
  } = useShop();

  if (!wishlistOpen) return null;

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={() => setWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl border-l border-[#C5A059]/30 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EFE8DC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#C5A059]" />
              <h3 className="font-serif text-xl font-medium text-[#2B2118]">SAVED CREATIONS</h3>
              <span className="text-xs text-[#C5A059] font-mono">({wishlistProducts.length})</span>
            </div>
            <button
              onClick={() => setWishlistOpen(false)}
              className="p-1.5 text-[#2B2118]/70 hover:text-[#C5A059] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <Heart className="w-12 h-12 text-[#C5A059]/40 mx-auto" />
                <h4 className="font-serif text-lg font-light text-[#2B2118]">No saved creations yet</h4>
                <p className="text-xs text-[#2B2118]/60 font-light max-w-xs mx-auto">
                  Click the heart icon on any product to curate your personal fragrance wishlist.
                </p>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 bg-white border border-[#EFE8DC] rounded shadow-xs items-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover rounded bg-[#F4EFEA] cursor-pointer"
                    onClick={() => {
                      setWishlistOpen(false);
                      openProductModal(product.id);
                    }}
                  />
                  <div className="flex-1">
                    <h4
                      className="font-serif text-base font-medium text-[#2B2118] cursor-pointer hover:text-[#C5A059]"
                      onClick={() => {
                        setWishlistOpen(false);
                        openProductModal(product.id);
                      }}
                    >
                      {product.name}
                    </h4>
                    <span className="text-[10px] tracking-wider text-[#C5A059] uppercase block font-medium">
                      {product.category} • {formatPrice(Math.min(...product.variants.map((v) => v.priceINR)))}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="p-2 bg-[#2B2118] text-[#EFE8DC] rounded hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors"
                      title="Move to Bag"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="p-2 text-[#2B2118]/40 hover:text-red-600 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-[#EFE8DC] bg-[#F4EFEA]/80">
            <button
              onClick={() => setWishlistOpen(false)}
              className="w-full py-3 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-widest uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors"
            >
              CONTINUE SHOPPING
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
