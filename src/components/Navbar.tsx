import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  Globe,
  ChevronDown
} from 'lucide-react';
import { Currency } from '../types';

export const Navbar: React.FC = () => {
  const {
    activePage,
    setActivePage,
    cartCount,
    wishlist,
    setCartOpen,
    setWishlistOpen,
    setSearchOpen,
    currency,
    setCurrency
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies: Currency[] = ['INR', 'USD', 'AED', 'EUR', 'GBP'];

  const navLinks = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP', page: 'shop' },
    { label: 'COLLECTIONS', page: 'collections' },
    { label: 'ABOUT', page: 'about' },
    { label: 'CONTACT', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#2B2118] text-[#EFE8DC] py-2 px-4 text-[11px] tracking-[0.25em] uppercase font-light text-center flex items-center justify-between border-b border-[#C5A059]/30">
        <div className="hidden md:flex items-center gap-2 text-[#C5A059] font-serif italic text-xs">
          <span>أسير للعطور</span>
        </div>
        <div className="mx-auto flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
          <span>CRAFTED FOR THOSE WHO LEAVE AN IMPRESSION</span>
          <span className="hidden sm:inline text-[#C5A059]">•</span>
          <span className="hidden sm:inline text-[10px] tracking-widest text-[#EFE8DC]/80">
            COMPLIMENTARY WORLDWIDE EXPRESS DELIVERY
          </span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1 text-[#C5A059] hover:text-white transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {currencyDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setCurrencyDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-1 bg-[#2B2118] border border-[#C5A059]/40 rounded shadow-lg py-1 z-20 w-20">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1 text-[10px] tracking-wider hover:bg-[#C5A059]/20 transition-colors ${
                        currency === c ? 'text-[#C5A059] font-bold' : 'text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3'
            : 'bg-[#FAF8F5] py-4'
        } border-b border-[#EFE8DC]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#2B2118] hover:text-[#C5A059] transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Left Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-all relative py-1 ${
                  activePage === link.page
                    ? 'text-[#C5A059] font-semibold'
                    : 'text-[#2B2118]/80 hover:text-[#C5A059]'
                }`}
              >
                {link.label}
                {activePage === link.page && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A059]" />
                )}
              </button>
            ))}
          </div>

          {/* Center Brand Logo */}
          <div className="text-center cursor-pointer group flex flex-col items-center" onClick={() => handleNavClick('home')}>
            <img
              src="/logo.jpg"
              alt="ASIR Fragrance"
              className="h-10 sm:h-12 w-auto object-contain rounded-full group-hover:opacity-80 transition-opacity"
            />
            <span className="block text-[9px] tracking-[0.45em] uppercase text-[#C5A059] font-light mt-1">
              FRAGRANCE
            </span>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <ThemeSwitcher />

            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 text-[#2B2118]/80 hover:text-[#C5A059] transition-colors"
              title="Search Fragrances"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:block p-1.5 text-[#2B2118]/80 hover:text-[#C5A059] transition-colors"
              title="Concierge Account"
            >
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={() => setWishlistOpen(true)}
              className="p-1.5 text-[#2B2118]/80 hover:text-[#C5A059] transition-colors relative"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="p-1.5 text-[#2B2118]/80 hover:text-[#C5A059] transition-colors relative"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2B2118] text-[#EFE8DC] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#C5A059]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Decorative Thin Arabesque Line Underneath */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent mt-3" />
      </nav>

      {/* 3. MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between border-r border-[#C5A059]/30">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EFE8DC]">
                <div className="flex items-center gap-2">
                  <img src="/logo.jpg" alt="ASIR Fragrance" className="h-9 w-9 object-contain rounded-full" />
                  <div>
                    <span className="font-serif text-2xl tracking-widest text-[#2B2118] block">ASIR</span>
                    <span className="block text-[8px] tracking-[0.3em] text-[#C5A059]">
                      FRAGRANCE
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#2B2118] hover:text-[#C5A059]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`block w-full text-left font-serif text-xl tracking-wider ${
                      activePage === link.page
                        ? 'text-[#C5A059] font-bold pl-2 border-l-2 border-[#C5A059]'
                        : 'text-[#2B2118] hover:text-[#C5A059]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EFE8DC] space-y-4">
              <div className="flex items-center justify-between text-xs text-[#2B2118]/80">
                <span>Currency:</span>
                <div className="flex gap-2">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`px-2 py-1 rounded text-xs ${
                        currency === c ? 'bg-[#C5A059] text-white font-bold' : 'bg-[#EFE8DC] text-[#2B2118]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-center text-[#2B2118]/60 uppercase tracking-widest">
                Paris • Dubai • Riyadh • London
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
