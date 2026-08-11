import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArabianBorder } from './ArabianBorder';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Currency } from '../types';

export const Footer: React.FC = () => {
  const { setActivePage, currency, setCurrency } = useShop();

  const handleNav = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currencies: Currency[] = ['INR', 'USD', 'AED', 'EUR', 'GBP'];

  return (
    <footer className="bg-[#1F1712] text-[#EFE8DC] pt-16 pb-12 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="ASIR Fragrance" className="h-12 w-12 object-contain rounded-full" />
              <div>
                <span className="font-serif text-3xl tracking-[0.25em] font-light text-white block">
                  ASIR
                </span>
                <span className="text-[9px] tracking-[0.4em] text-[#C5A059] uppercase block font-semibold">
                  FRAGRANCE
                </span>
              </div>
            </div>

            <p className="text-xs text-[#EFE8DC]/70 font-light leading-relaxed max-w-sm">
              Crafting fine Arabian perfumes since the beginning of modern haute parfumerie. Sourced with integrity, blended by master noses.
            </p>

            <div className="space-y-2 text-xs text-[#EFE8DC]/80 font-light pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Mumbai, India (full boutique address to be confirmed)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>+91 98692 46041</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>i.ajmeri1@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
              EXPLORE ASIR
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#EFE8DC]/80">
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-[#C5A059] transition-colors">
                  Shop All Fragrances
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('collections')} className="hover:text-[#C5A059] transition-colors">
                  The Arabian Collection
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-[#C5A059] transition-colors">
                  Pure Attars & Oils
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#C5A059] transition-colors">
                  Brand Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#C5A059] transition-colors">
                  Boutique Locator
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
              CLIENT SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#EFE8DC]/80">
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#C5A059] transition-colors">
                  Boutique Concierge
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#C5A059] transition-colors">
                  Complimentary Shipping
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#C5A059] transition-colors">
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#C5A059] transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#C5A059] transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Currency */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
              REGION & CONNECT
            </h4>

            {/* Currency Selector */}
            <div className="space-y-1">
              <span className="text-[10px] tracking-widest text-[#EFE8DC]/60 uppercase block">
                Select Currency
              </span>
              <div className="flex gap-1.5">
                {currencies.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                      currency === c
                        ? 'bg-[#C5A059] text-[#2B2118] font-bold border-[#C5A059]'
                        : 'bg-[#FAF8F5]/10 text-white border-white/20 hover:border-[#C5A059]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="space-y-1 pt-2">
              <span className="text-[10px] tracking-widest text-[#EFE8DC]/60 uppercase block">
                Follow @ASIRFRAGRANCE
              </span>
              <div className="flex items-center gap-3">
                <a href="#instagram" className="p-2 rounded-full bg-white/5 hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#facebook" className="p-2 rounded-full bg-white/5 hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#twitter" className="p-2 rounded-full bg-white/5 hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <ArabianBorder variant="simple" className="my-6 opacity-40" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#EFE8DC]/60 font-light gap-4">
          <p>© {new Date().getFullYear()} ASIR FRAGRANCE LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Dubai Mall Flagship</span>
            <span>Vendôme Paris Atelier</span>
            <span>Riyadh Galleria</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
