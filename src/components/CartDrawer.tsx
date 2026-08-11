import React from 'react';
import { useShop, getVariantPrice } from '../context/ShopContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

// Placeholder shipping policy — flagged as pending business confirmation.
const FREE_SHIPPING_THRESHOLD_INR = 500;
const SHIPPING_FEE_INR = 49;

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartTotalINR,
    formatPrice,
    setCheckoutOpen
  } = useShop();

  if (!cartOpen) return null;

  const progressPercent = Math.min(100, (cartTotalINR / FREE_SHIPPING_THRESHOLD_INR) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={() => setCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl border-l border-[#C5A059]/30 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EFE8DC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h3 className="font-serif text-xl font-medium text-[#2B2118]">YOUR SHOPPING BAG</h3>
              <span className="text-xs text-[#C5A059] font-mono">({cart.length})</span>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="p-1.5 text-[#2B2118]/70 hover:text-[#C5A059] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="px-6 py-3 bg-[#F4EFEA] border-b border-[#EFE8DC]">
            <div className="flex items-center justify-between text-xs font-light text-[#2B2118] mb-1.5">
              <span>
                {cartTotalINR >= FREE_SHIPPING_THRESHOLD_INR ? (
                  <strong className="text-[#C5A059] font-medium">✨ You qualify for Complimentary Worldwide Express Shipping!</strong>
                ) : (
                  <>Add {formatPrice(FREE_SHIPPING_THRESHOLD_INR - cartTotalINR)} more for free express shipping</>
                )}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#EFE8DC] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C5A059] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#C5A059]/40 mx-auto" />
                <h4 className="font-serif text-lg font-light text-[#2B2118]">Your bag is currently empty</h4>
                <p className="text-xs text-[#2B2118]/60 font-light max-w-xs mx-auto">
                  Explore our signature fragrances and pure attars to select your olfactory identity.
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="px-6 py-3 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-wider uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors"
                >
                  START EXPLORING
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-4 p-3 bg-white border border-[#EFE8DC] rounded shadow-xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded bg-[#F4EFEA]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-base font-medium text-[#2B2118]">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] tracking-wider text-[#C5A059] uppercase block font-medium">
                            {item.selectedSize}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="text-[#2B2118]/40 hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#EFE8DC] rounded">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.selectedSize, -1)}
                          className="px-2 py-1 text-[#2B2118] hover:bg-[#F4EFEA]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.selectedSize, 1)}
                          className="px-2 py-1 text-[#2B2118] hover:bg-[#F4EFEA]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-sm font-semibold text-[#2B2118]">
                        {formatPrice(getVariantPrice(item.product, item.selectedSize) * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#EFE8DC] bg-[#F4EFEA]/80 space-y-4">
              <div className="space-y-1 text-xs font-light text-[#2B2118]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif text-base font-semibold text-[#2B2118]">
                    {formatPrice(cartTotalINR)}
                  </span>
                </div>
                <div className="flex justify-between text-[#2B2118]/60">
                  <span>Worldwide Express Shipping</span>
                  <span>{cartTotalINR >= FREE_SHIPPING_THRESHOLD_INR ? 'FREE' : formatPrice(SHIPPING_FEE_INR)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCartOpen(false);
                  setCheckoutOpen(true);
                }}
                className="w-full py-4 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#2B2118]/60 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Encrypted 256-Bit Luxury Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
