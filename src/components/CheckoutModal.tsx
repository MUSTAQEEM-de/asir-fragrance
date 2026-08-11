import React, { useState } from 'react';
import { useShop, getVariantPrice } from '../context/ShopContext';
import { X, ShieldCheck, CheckCircle2, Truck, Sparkles, Loader2, AlertTriangle } from 'lucide-react';
import { createOrder, OrderResult } from '../api/orders';
import { ApiRequestError } from '../api/client';

export const CheckoutModal: React.FC = () => {
  const { checkoutOpen, setCheckoutOpen, cart, cartTotalINR, clearCart, formatPrice } = useShop();

  const [step, setStep] = useState<'details' | 'confirmation'>('details');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placedOrder, setPlacedOrder] = useState<OrderResult | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India'
  });

  if (!checkoutOpen) return null;

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const order = await createOrder(cart, {
        fullName: formData.name,
        phone: formData.phone,
        email: formData.email,
        addressLine: formData.address,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country
      });
      setPlacedOrder(order);
      setStep('confirmation');
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : 'Unable to place your order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleFinish = () => {
    clearCart();
    setCheckoutOpen(false);
    setStep('details');
    setPlacedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-fadeIn"
        onClick={() => setCheckoutOpen(false)}
      />

      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#C5A059]/40 shadow-2xl rounded-lg overflow-hidden z-10 animate-scaleUp p-6 sm:p-10 my-8">

        <button
          onClick={() => setCheckoutOpen(false)}
          className="absolute top-4 right-4 p-1.5 text-[#2B2118]/70 hover:text-[#C5A059]"
        >
          <X className="w-6 h-6" />
        </button>

        {step === 'details' ? (
          <div className="space-y-6">
            <div className="text-center space-y-1 border-b border-[#EFE8DC] pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BOUTIQUE CONCIERGE CHECKOUT</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-[#2B2118]">
                ASIR LUXURY ORDER
              </h3>
            </div>

            {/* Order Items Preview */}
            <div className="bg-[#F4EFEA] p-4 rounded border border-[#EFE8DC] space-y-2">
              <span className="text-xs font-semibold text-[#2B2118] uppercase tracking-wider block">
                Order Summary ({cart.length} Items)
              </span>
              <div className="max-h-32 overflow-y-auto space-y-1 text-xs text-[#2B2118]/80 font-light">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex justify-between">
                    <span>{item.quantity}x {item.product.name} ({item.selectedSize})</span>
                    <span className="font-serif">{formatPrice(getVariantPrice(item.product, item.selectedSize) * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-[#EFE8DC] flex justify-between font-serif text-base font-semibold text-[#2B2118]">
                <span>Total Amount:</span>
                <span>{formatPrice(cartTotalINR)}</span>
              </div>
              <p className="text-[10px] text-[#2B2118]/50 font-light">
                Final total (including shipping) is calculated securely on our server at checkout.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handlePay} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-2 pt-2">
                <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider">
                  Payment Preference
                </label>
                <div className="p-3 text-xs rounded border bg-[#2B2118] text-[#EFE8DC] border-[#2B2118] flex items-center justify-center gap-2">
                  <Truck className="w-4 h-4 text-[#C5A059]" />
                  <span>Cash on Delivery — pay when your order arrives</span>
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-2 p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-all shadow-lg flex items-center justify-center gap-2 mt-4 disabled:opacity-60"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                <span>{submitting ? 'PLACING ORDER...' : `CONFIRM & PLACE ORDER (${formatPrice(cartTotalINR)})`}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt */
          <div className="text-center py-8 space-y-6 animate-fadeIn">
            <CheckCircle2 className="w-16 h-16 text-[#C5A059] mx-auto animate-bounce" />

            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A059] uppercase block">
                ORDER CONFIRMED • #{placedOrder?.orderNumber}
              </span>
              <h3 className="font-serif text-3xl font-light text-[#2B2118]">
                THANK YOU FOR YOUR PURCHASE
              </h3>
              <p className="text-xs text-[#2B2118]/70 font-light max-w-md mx-auto leading-relaxed">
                Your order has been received and will be dispatched via Cash on Delivery.
              </p>
            </div>

            <div className="bg-[#F4EFEA] p-4 rounded text-xs text-left max-w-md mx-auto space-y-1">
              <span className="font-semibold text-[#2B2118] block border-b border-[#EFE8DC] pb-1">
                Dispatch Summary:
              </span>
              <p>Recipient: {formData.name}</p>
              <p>Destination: {formData.address}, {formData.city}, {formData.state} {formData.postalCode}, {formData.country}</p>
              <p>Tracking dispatch notification sent to: {formData.email}</p>
              <p className="pt-1 border-t border-[#EFE8DC] font-semibold">
                Total Paid on Delivery: {placedOrder && formatPrice(placedOrder.totalINR)}
              </p>
            </div>

            <button
              onClick={handleFinish}
              className="px-8 py-3.5 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors"
            >
              RETURN TO BOUTIQUE
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
