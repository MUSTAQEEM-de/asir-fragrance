import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ThemeVariation, Currency } from '../types';
import { fetchProducts } from '../api/products';

export const getVariantPrice = (product: Product, size: string): number => {
  const variant = product.variants.find((v) => v.size === size) || product.variants[0];
  return variant ? variant.priceINR : 0;
};

interface ShopContextType {
  products: Product[];
  productsLoading: boolean;
  productsError: string | null;
  refetchProducts: () => void;

  theme: ThemeVariation;
  setTheme: (theme: ThemeVariation) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  formatPrice: (priceINR: number) => string;
  activePage: string;
  setActivePage: (page: string) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  openProductModal: (id: string) => void;

  cart: CartItem[];
  addToCart: (product: Product, size?: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateCartQuantity: (productId: string, size: string, delta: number) => void;
  clearCart: () => void;
  cartTotalINR: number;
  cartCount: number;

  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  wishlistOpen: boolean;
  setWishlistOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;

  filterCategory: string;
  setFilterCategory: (cat: string) => void;
  filterGender: string;
  setFilterGender: (gen: string) => void;
  filterSearch: string;
  setFilterSearch: (search: string) => void;

  checkoutOpen: boolean;
  setCheckoutOpen: (open: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

// INR is the canonical business currency. Other currencies are indicative
// display conversions only — the backend always calculates and stores INR.
const CONVERSION_RATES: Record<Currency, number> = {
  INR: 1,
  USD: 0.012,
  AED: 0.044,
  EUR: 0.011,
  GBP: 0.0095
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  AED: 'AED ',
  EUR: '€',
  GBP: '£'
};

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState<string | null>(null);
  const [refetchTick, setRefetchTick] = useState(0);
  const refetchProducts = () => setRefetchTick((t) => t + 1);

  useEffect(() => {
    let cancelled = false;
    setProductsLoading(true);
    setProductsError(null);
    fetchProducts()
      .then((data) => {
        if (!cancelled) setProducts(data);
      })
      .catch(() => {
        if (!cancelled) setProductsError('Unable to load the collection. Please try again.');
      })
      .finally(() => {
        if (!cancelled) setProductsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [refetchTick]);

  const [theme, setTheme] = useState<ThemeVariation>('sand-cream');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('asir_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('asir_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterGender, setFilterGender] = useState<string>('All');
  const [filterSearch, setFilterSearch] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem('asir_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('asir_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const formatPrice = (priceINR: number): string => {
    const converted = priceINR * CONVERSION_RATES[currency];
    const rounded = currency === 'INR' ? Math.round(converted) : Math.round(converted * 100) / 100;
    return `${CURRENCY_SYMBOLS[currency]}${rounded}`;
  };

  const openProductModal = (id: string) => {
    setSelectedProductId(id);
  };

  const addToCart = (product: Product, size?: string, quantity: number = 1) => {
    const selectedSize = size || product.variants[0]?.size;
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedSize, quantity }];
      }
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.selectedSize === size)));
  };

  const updateCartQuantity = (productId: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotalINR = cart.reduce(
    (sum, item) => sum + getVariantPrice(item.product, item.selectedSize) * item.quantity,
    0
  );
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  return (
    <ShopContext.Provider
      value={{
        products,
        productsLoading,
        productsError,
        refetchProducts,
        theme,
        setTheme,
        currency,
        setCurrency,
        formatPrice,
        activePage,
        setActivePage,
        selectedProductId,
        setSelectedProductId,
        openProductModal,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotalINR,
        cartCount,
        wishlist,
        toggleWishlist,
        isInWishlist,
        cartOpen,
        setCartOpen,
        wishlistOpen,
        setWishlistOpen,
        searchOpen,
        setSearchOpen,
        filterCategory,
        setFilterCategory,
        filterGender,
        setFilterGender,
        filterSearch,
        setFilterSearch,
        checkoutOpen,
        setCheckoutOpen
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within a ShopProvider');
  return context;
};
