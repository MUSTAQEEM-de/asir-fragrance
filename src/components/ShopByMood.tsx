import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight, Flame, Sparkles, Trees, Droplets, Flower2, Heart } from 'lucide-react';

export const ShopByMood: React.FC = () => {
  const { setActivePage, setFilterCategory } = useShop();

  const categories = [
    {
      id: 'Oud',
      name: 'THE OUD EDIT',
      desc: 'Dark, woody, mysterious Cambodian & Assam oud',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'Amber',
      name: 'THE AMBER EDIT',
      desc: 'Warm, rich, sensual liquid amber resin',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'Woody',
      name: 'THE WOODY EDIT',
      desc: 'Earthy Haitian vetiver & cedarwood bark',
      icon: Trees,
      image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'Fresh',
      name: 'THE FRESH EDIT',
      desc: 'Clean, aquatic, energetic Calabrian bergamot',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'Floral',
      name: 'THE FLORAL EDIT',
      desc: 'Elegant, soft, sophisticated Taif & Damask rose',
      icon: Flower2,
      image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'Attar',
      name: 'THE ATTAR EDIT',
      desc: 'Pure, alcohol-free concentrated oil tradition',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  const handleCategoryClick = (catId: string) => {
    setFilterCategory(catId);
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#F4EFEA] relative overflow-hidden">
      <div className="absolute inset-0 bg-mashrabiya opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
            SCENT ARCHETYPES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2B2118]">
            SHOP BY FRAGRANCE MOOD
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-2" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="group relative h-80 rounded-sm overflow-hidden cursor-pointer border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-500 shadow-sm"
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />

                {/* Light Ivory Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/90 via-[#2B2118]/40 to-transparent group-hover:from-[#2B2118]/80 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-[#C5A059]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#2B2118] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase block font-medium">
                      EXPLORE PROFILE
                    </span>
                    <h3 className="font-serif text-2xl font-light tracking-wide text-[#FAF8F5]">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#EFE8DC]/80 font-light leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
