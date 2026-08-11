import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { ProductModal } from './components/ProductModal';
import { CheckoutModal } from './components/CheckoutModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { activePage, theme } = useShop();

  // Apply theme classes dynamically based on theme switcher choice
  const getThemeStyle = () => {
    switch (theme) {
      case 'oud-rose':
        return 'bg-[#FDFBF9] text-[#1A1412]';
      case 'alabaster-sage':
        return 'bg-[#F8F9F5] text-[#222623]';
      case 'sand-cream':
      default:
        return 'bg-[#FAF8F5] text-[#2B2118]';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${getThemeStyle()}`}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page View */}
      <div className="flex-1">
        {activePage === 'home' && <HomePage />}
        {activePage === 'shop' && <ShopPage />}
        {activePage === 'collections' && <CollectionsPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
      </div>

      {/* Drawers & Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <ProductModal />
      <CheckoutModal />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
