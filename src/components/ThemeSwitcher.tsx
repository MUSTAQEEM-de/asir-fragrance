import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ThemeVariation } from '../types';
import { Sparkles, Palette } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useShop();
  const [open, setOpen] = useState(false);

  const themes: { id: ThemeVariation; label: string; desc: string; bgClass: string; accentColor: string }[] = [
    {
      id: 'sand-cream',
      label: 'Sand & Ivory',
      desc: 'Warm Ivory, Sandstone, Antique Gold',
      bgClass: 'bg-[#FAF8F5] border-[#EFE8DC]',
      accentColor: '#C5A059'
    },
    {
      id: 'oud-rose',
      label: 'Oud & Rose Gold',
      desc: 'Blush Ivory, Rose Gold, Ebony',
      bgClass: 'bg-[#FDFBF9] border-[#F6EEE8]',
      accentColor: '#C88E75'
    },
    {
      id: 'alabaster-sage',
      label: 'Imperial Alabaster',
      desc: 'Alabaster, Soft Sage, Antique Brass',
      bgClass: 'bg-[#F8F9F5] border-[#ECEFE6]',
      accentColor: '#858E78'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-[#2B2118]/70 hover:text-[#C5A059] transition-colors py-1 px-2.5 rounded-full border border-[#C5A059]/30 hover:border-[#C5A059]"
        title="Design Aesthetic Variation"
      >
        <Palette className="w-3.5 h-3.5 text-[#C5A059]" />
        <span className="hidden sm:inline">Theme:</span>
        <span className="font-serif italic text-sm text-[#2B2118]">
          {theme === 'sand-cream' ? 'Sand & Ivory' : theme === 'oud-rose' ? 'Oud & Rose' : 'Imperial Alabaster'}
        </span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-64 bg-[#FAF8F5] border border-[#C5A059]/40 shadow-xl rounded-lg p-3 z-50 animate-fadeIn">
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#C5A059]/20 text-xs font-medium tracking-wider uppercase text-[#C5A059]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aesthetic Variations</span>
            </div>
            <div className="space-y-1.5">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded transition-all flex items-center justify-between border ${
                    theme === t.id ? 'border-[#C5A059] bg-[#F4EFEA]' : 'border-transparent hover:bg-[#F4EFEA]/50'
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold text-[#2B2118]">{t.label}</div>
                    <div className="text-[10px] text-[#2B2118]/60">{t.desc}</div>
                  </div>
                  <div
                    className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                    style={{ backgroundColor: t.accentColor }}
                  />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
