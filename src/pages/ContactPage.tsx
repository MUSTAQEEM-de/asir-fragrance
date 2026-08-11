import React, { useState } from 'react';
import { ArabianBorder } from '../components/ArabianBorder';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    boutique: 'Dubai Mall Flagship',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BOUTIQUE CONCIERGE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#2B2118]">
            BESPOKE CONSULTATIONS & CONTACT
          </h1>

          <p className="text-xs sm:text-sm text-[#2B2118]/70 font-light">
            Schedule a private appointment at our flagship boutiques or request concierge assistance.
          </p>

          <ArabianBorder variant="ornate" className="my-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Boutique Information */}
          <div className="lg:col-span-5 space-y-8 bg-[#F4EFEA] p-8 border border-[#C5A059]/30 rounded shadow-xs">
            <h2 className="font-serif text-2xl font-light text-[#2B2118] border-b border-[#EFE8DC] pb-3">
              FLAGSHIP BOUTIQUES
            </h2>

            {/* Dubai */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A059] block">
                DUBAI MALL FLAGSHIP
              </span>
              <p className="text-xs text-[#2B2118]/80 font-light flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>Fashion Avenue, First Level, The Dubai Mall, UAE</span>
              </p>
              <p className="text-xs text-[#2B2118]/80 font-light flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>+971 4 800 2747</span>
              </p>
              <p className="text-xs text-[#2B2118]/80 font-light flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Daily: 10:00 AM – 11:00 PM GST</span>
              </p>
            </div>

            {/* Paris */}
            <div className="space-y-2 pt-4 border-t border-[#EFE8DC]">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A059] block">
                PARIS ATELIER
              </span>
              <p className="text-xs text-[#2B2118]/80 font-light flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>12 Place Vendôme, 75001 Paris, France</span>
              </p>
              <p className="text-xs text-[#2B2118]/80 font-light flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>+33 1 42 68 00 00</span>
              </p>
              <p className="text-xs text-[#2B2118]/80 font-light flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Mon–Sat: 10:30 AM – 7:30 PM CET</span>
              </p>
            </div>

            {/* Global Email */}
            <div className="pt-4 border-t border-[#EFE8DC] space-y-1">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A059] block">
                GLOBAL CLIENT SERVICES
              </span>
              <p className="text-xs text-[#2B2118]/80 font-light flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>concierge@asirfragrance.com</span>
              </p>
            </div>
          </div>

          {/* Right Consultation Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#EFE8DC] rounded shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-light text-[#2B2118]">
              REQUEST CONCIERGE ASSISTANCE
            </h2>

            {submitted ? (
              <div className="p-8 bg-[#F4EFEA] border border-[#C5A059] rounded text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto" />
                <h3 className="font-serif text-2xl text-[#2B2118]">REQUEST RECEIVED</h3>
                <p className="text-xs text-[#2B2118]/70 font-light max-w-sm mx-auto">
                  Our boutique manager at <span className="text-[#C5A059] font-medium">{form.boutique}</span> will contact you within 2 hours to confirm your private appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#2B2118] text-[#EFE8DC] text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#2B2118]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Your email"
                      className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+971 or +33..."
                      className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                      Preferred Boutique
                    </label>
                    <select
                      value={form.boutique}
                      onChange={(e) => setForm({ ...form, boutique: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Dubai Mall Flagship">Dubai Mall Flagship (UAE)</option>
                      <option value="Place Vendôme Atelier">Place Vendôme Atelier (Paris)</option>
                      <option value="Riyadh Galleria">Riyadh Galleria (KSA)</option>
                      <option value="Online Concierge">Online Virtual Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#2B2118] uppercase tracking-wider mb-1">
                    Message or Fragrance Request
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your scent preferences or appointment requirements..."
                    className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2B2118] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#2B2118] text-[#EFE8DC] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#2B2118] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT INQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
