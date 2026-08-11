import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { ArabianBorder } from '../components/ArabianBorder';
import { Search, Filter, Sparkles, X } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const {
    products,
    productsLoading,
    productsError,
    refetchProducts,
    filterCategory,
    setFilterCategory,
    filterGender,
    setFilterGender,
    filterSearch,
    setFilterSearch
  } = useShop();

  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const categories = ['All', 'Oud', 'Amber', 'Woody', 'Fresh', 'Floral', 'Spicy', 'Attar'];
  const genders = ['All', 'Unisex', 'Men', 'Women'];

  const filteredProducts = products.filter((p) => {
    // Category Filter
    if (filterCategory !== 'All') {
      if (filterCategory === 'Attar') {
        if (!p.isAttar && p.category !== 'Attar') return false;
      } else if (p.category !== filterCategory) {
        return false;
      }
    }

    // Gender Filter
    if (filterGender !== 'All' && p.gender !== filterGender) return false;

    // Search Query Filter
    if (filterSearch.trim()) {
      const q = filterSearch.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchDesc = p.shortDescription.toLowerCase().includes(q);
      if (!matchName && !matchCategory && !matchDesc) return false;
    }

    return true;
  }).sort((a, b) => {
    const minPrice = (p: typeof a) => Math.min(...p.variants.map((v) => v.priceINR));
    if (sortBy === 'price-low') return minPrice(a) - minPrice(b);
    if (sortBy === 'price-high') return minPrice(b) - minPrice(a);
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  return (
    <div className="py-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL PARFUM CATALOG</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#2B2118]">
            THE ASIR BOUTIQUE
          </h1>

          <p className="text-xs sm:text-sm text-[#2B2118]/70 font-light">
            Explore our complete offering of extrait de parfums and pure concentrated attar oils.
          </p>

          <ArabianBorder variant="ornate" className="my-2" />
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#F4EFEA] p-4 sm:p-6 border border-[#C5A059]/30 rounded shadow-xs space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filterSearch}
                onChange={(e) => setFilterSearch(e.target.value)}
                placeholder="Search by scent name or note..."
                className="w-full pl-9 pr-8 py-2.5 bg-white text-xs text-[#2B2118] border border-[#EFE8DC] rounded focus:outline-none focus:border-[#C5A059]"
              />
              {filterSearch && (
                <button
                  onClick={() => setFilterSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2B2118]/40 hover:text-[#2B2118]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort selector */}
            <div className="md:col-span-4 flex items-center gap-2">
              <span className="text-xs text-[#2B2118]/70 font-medium whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 bg-white text-xs text-[#2B2118] border border-[#EFE8DC] rounded focus:outline-none focus:border-[#C5A059]"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Client Rating</option>
              </select>
            </div>

            {/* Result count */}
            <div className="md:col-span-3 text-right text-xs text-[#C5A059] font-medium tracking-wider">
              <span>{filteredProducts.length} Fragrances Found</span>
            </div>

          </div>

          {/* Category Chips */}
          <div className="pt-3 border-t border-[#EFE8DC] space-y-3">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-semibold text-[#2B2118] uppercase tracking-wider text-[11px]">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1 rounded-full border text-xs transition-all ${
                    filterCategory === cat
                      ? 'bg-[#2B2118] text-[#EFE8DC] border-[#2B2118]'
                      : 'bg-white text-[#2B2118]/80 border-[#EFE8DC] hover:border-[#C5A059]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-semibold text-[#2B2118] uppercase tracking-wider text-[11px]">Gender:</span>
              {genders.map((g) => (
                <button
                  key={g}
                  onClick={() => setFilterGender(g)}
                  className={`px-3 py-1 rounded-full border text-xs transition-all ${
                    filterGender === g
                      ? 'bg-[#C5A059] text-[#2B2118] border-[#C5A059] font-semibold'
                      : 'bg-white text-[#2B2118]/80 border-[#EFE8DC] hover:border-[#C5A059]'
                  }`}
                >
                  {g}
                </button>
              ))}

              {(filterCategory !== 'All' || filterGender !== 'All' || filterSearch) && (
                <button
                  onClick={() => {
                    setFilterCategory('All');
                    setFilterGender('All');
                    setFilterSearch('');
                  }}
                  className="ml-auto text-xs text-red-600 hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {productsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-[#FAF8F5] border border-[#EFE8DC] animate-pulse">
                <div className="aspect-square bg-[#EFE8DC]" />
                <div className="p-5 space-y-3">
                  <div className="h-2.5 w-1/3 bg-[#EFE8DC] rounded" />
                  <div className="h-4 w-2/3 bg-[#EFE8DC] rounded" />
                  <div className="h-3 w-full bg-[#EFE8DC] rounded" />
                  <div className="h-8 w-full bg-[#EFE8DC] rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : productsError ? (
          <div className="text-center py-20 space-y-4 bg-white rounded border border-[#EFE8DC]">
            <Filter className="w-10 h-10 text-[#C5A059]/40 mx-auto" />
            <h3 className="font-serif text-xl text-[#2B2118]">Unable to load the collection.</h3>
            <p className="text-xs text-[#2B2118]/60 font-light">Please try again.</p>
            <button
              onClick={refetchProducts}
              className="px-6 py-2.5 bg-[#2B2118] text-[#EFE8DC] text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors"
            >
              Retry
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 space-y-4 bg-white rounded border border-[#EFE8DC]">
            <Filter className="w-10 h-10 text-[#C5A059]/40 mx-auto" />
            <h3 className="font-serif text-xl text-[#2B2118]">No fragrances match your filter criteria</h3>
            <p className="text-xs text-[#2B2118]/60 font-light">
              Try adjusting your category selection or clear your search term.
            </p>
            <button
              onClick={() => {
                setFilterCategory('All');
                setFilterGender('All');
                setFilterSearch('');
              }}
              className="px-6 py-2.5 bg-[#2B2118] text-[#EFE8DC] text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#2B2118] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
