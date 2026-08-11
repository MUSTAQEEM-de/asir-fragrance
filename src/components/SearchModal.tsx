import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { products, searchOpen, setSearchOpen, openProductModal, formatPrice } = useShop();
  const [query, setQuery] = useState('');

  if (!searchOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.notes.top.some((n) => n.toLowerCase().includes(query.toLowerCase())) ||
          p.notes.heart.some((n) => n.toLowerCase().includes(query.toLowerCase())) ||
          p.notes.base.some((n) => n.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const suggestedTags = ['Oud', 'Attar', 'Rose', 'Amber', 'Eternal One', 'Vanilla', 'Woody'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs animate-fadeIn"
        onClick={() => setSearchOpen(false)}
      />

      <div className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#C5A059]/40 shadow-2xl rounded-lg overflow-hidden z-10 animate-scaleUp">
        {/* Search Header */}
        <div className="p-4 sm:p-6 border-b border-[#EFE8DC] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#C5A059]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by scent name, note (e.g. Oud, Saffron, Rose), or category..."
            className="w-full bg-transparent text-[#2B2118] text-sm sm:text-base placeholder-[#2B2118]/40 focus:outline-none font-light"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#2B2118]/40 hover:text-[#2B2118]">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setSearchOpen(false)}
            className="p-1.5 text-[#2B2118]/60 hover:text-[#C5A059] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Suggested Tags */}
        <div className="p-4 bg-[#F4EFEA] border-b border-[#EFE8DC] flex items-center gap-2 flex-wrap">
          <span className="text-[10px] tracking-wider uppercase font-semibold text-[#C5A059] flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            POPULAR SEARCHES:
          </span>
          {suggestedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 text-[11px] bg-white text-[#2B2118] rounded border border-[#EFE8DC] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-6">
          {!query.trim() ? (
            <div className="text-center py-8 text-xs text-[#2B2118]/50 font-light">
              Begin typing to search our entire fragrance catalog.
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#2B2118]/60 font-light">
              No fragrances found matching "{query}". Try searching for 'Oud', 'Rose', or 'Amber'.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setSearchOpen(false);
                    openProductModal(product.id);
                  }}
                  className="flex gap-3 p-3 bg-white border border-[#EFE8DC] rounded hover:border-[#C5A059] transition-all cursor-pointer group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover rounded bg-[#F4EFEA]"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] tracking-widest text-[#C5A059] uppercase block font-semibold">
                      {product.category}
                    </span>
                    <h4 className="font-serif text-base font-medium text-[#2B2118] truncate group-hover:text-[#C5A059]">
                      {product.name}
                    </h4>
                    <span className="text-xs text-[#2B2118]/70 font-semibold block">
                      {formatPrice(Math.min(...product.variants.map((v) => v.priceINR)))}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C5A059] opacity-0 group-hover:opacity-100 my-auto transition-opacity" />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
