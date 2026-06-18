import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const intermediateItems = [
  '5-Chloro-4-Amino-2,1,3-Benzothiadiazole',
  '2,3,4-Trimethoxy Benzaldehyde',
  '3-Dibenzyl Phosphono',
];

const chemicalItems = ['API Chemicals', 'DIES Chemical', 'Agro Chemical', 'Pigments'];

// ─── Types ────────────────────────────────────────────────────────────────────

type ProductKey = 'formulation' | 'apis' | 'intermediates' | 'chemicals' | 'industrial-salts' | 'solvents';

type SubItem =
  | { type: 'two-btn' }               // just Human + Veterinary
  | { type: 'list'; items: string[] } // flat list
  | { type: 'direct' };               // no sub-panel, click navigates directly

const productMenu: { key: ProductKey; label: string; sub: SubItem }[] = [
  { key: 'formulation',      label: 'Formulation',      sub: { type: 'two-btn' } },
  { key: 'apis',             label: 'APIs',             sub: { type: 'two-btn' } },
  { key: 'intermediates',    label: 'Intermediates',    sub: { type: 'list', items: intermediateItems } },
  { key: 'chemicals',        label: 'Chemicals',        sub: { type: 'list', items: chemicalItems } },
  { key: 'industrial-salts', label: 'Industrial Salts', sub: { type: 'direct' } },
  { key: 'solvents',         label: 'Solvents',         sub: { type: 'direct' } },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar({ currentPath, navigate }: NavbarProps) {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileOpen, setIsMobileOpen]     = useState(false);
  const [productsOpen, setProductsOpen]     = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<ProductKey | null>(null);

  // Mobile accordion
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen]            = useState<ProductKey | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => {
    setProductsOpen(false);
    setHoveredProduct(null);
    setIsMobileOpen(false);
  };

  const handleNav = (view: string, params?: Record<string, string>) => {
    closeAll();
    navigate(view, params);
  };

  const getLinkClass = (active: boolean) =>
    `relative pb-1 text-sm font-semibold tracking-wide transition-colors cursor-pointer outline-none duration-300 ` +
    `after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-300 ` +
    (active
      ? 'text-primary after:scale-x-100 after:bg-primary'
      : 'text-text-dark hover:text-primary after:scale-x-0 hover:after:scale-x-100 after:bg-primary');

  const currentSub = hoveredProduct
    ? productMenu.find(p => p.key === hoveredProduct)?.sub ?? null
    : null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-surface/95 backdrop-blur-md border-b border-border-custom ${
          isScrolled ? 'py-3 shadow-md' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('home')}>
              <img src="/Logo.jpeg" alt="Ken Hill Pharma Limited" className="h-18 w-auto object-contain" />
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => navigate('home')} className={getLinkClass(currentPath === 'home')}>
                Home
              </button>
              <button onClick={() => navigate('about')} className={getLinkClass(currentPath === 'about')}>
                Company Overview
              </button>

              {/* Products — hover to open */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => { setProductsOpen(false); setHoveredProduct(null); }}
              >
                <button className={`${getLinkClass(
                  currentPath === 'products' || currentPath === 'product-detail' || currentPath === 'api-detail'
                )} flex items-center space-x-1`}>
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full mt-2 z-50 flex shadow-2xl rounded-2xl border border-border-custom overflow-hidden"
                    >
                      {/* Primary column */}
                      <div className="bg-surface w-52 py-2">
                        {productMenu.map((item) => (
                          <button
                            key={item.key}
                            onMouseEnter={() => setHoveredProduct(item.key)}
                            onClick={() => {
                              if (item.sub.type === 'direct') handleNav('contact', { product: item.label });
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors ${
                              hoveredProduct === item.key
                                ? 'bg-bg text-primary'
                                : 'text-text-dark hover:bg-bg hover:text-primary'
                            }`}
                          >
                            <span>{item.label}</span>
                            {item.sub.type !== 'direct' && (
                              <ChevronRight className="w-3.5 h-3.5 text-text-muted" />
                            )}
                          </button>
                        ))}
                      </div>

                      {/* Sub-panel */}
                      <AnimatePresence mode="wait">
                        {currentSub && currentSub.type !== 'direct' && (
                          <motion.div
                            key={hoveredProduct}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -4 }}
                            transition={{ duration: 0.12 }}
                            className="bg-bg border-l border-border-custom py-3 px-4 min-w-[160px]"
                          >
                            {currentSub.type === 'two-btn' && (
                              <div className="flex flex-col gap-1">
                                <button
                                  onClick={() => hoveredProduct === 'apis' ? handleNav('human-apis') : handleNav('contact', { product: `${hoveredProduct}: Human` })}
                                  className="text-left text-sm font-medium text-text-dark hover:text-primary py-2 px-3 rounded-lg hover:bg-surface transition-all"
                                >
                                  Human
                                </button>
                                <button
                                  onClick={() => handleNav('contact', { product: `${hoveredProduct}: Veterinary` })}
                                  className="text-left text-sm font-medium text-text-dark hover:text-primary py-2 px-3 rounded-lg hover:bg-surface transition-all"
                                >
                                  Veterinary
                                </button>
                              </div>
                            )}

                            {currentSub.type === 'list' && (
                              <div className="flex flex-col gap-0.5">
                                {currentSub.items.map((name) => (
                                  <button
                                    key={name}
                                    onClick={() => handleNav('contact', { product: `${hoveredProduct}: ${name}` })}
                                    className="text-left text-xs text-text-dark hover:text-primary py-1.5 px-2 rounded-lg hover:bg-surface transition-all"
                                  >
                                    {name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => navigate('contact')} className={getLinkClass(currentPath === 'contact')}>
                Contact
              </button>

              <button
                onClick={() => navigate('contact')}
                className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer outline-none"
              >
                Request Quote
              </button>
            </div>

            {/* Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileOpen(o => !o)}
                className="text-text-dark hover:text-primary p-2 focus:outline-none"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col p-6 pt-24 lg:hidden shadow-2xl border-l border-border-custom overflow-y-auto"
          >
            <div className="space-y-4 flex-1">
              <button
                onClick={() => handleNav('home')}
                className={`block w-full text-left text-base font-bold pb-2 border-b border-border-custom/50 ${currentPath === 'home' ? 'text-primary' : 'text-text-dark'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNav('about')}
                className={`block w-full text-left text-base font-bold pb-2 border-b border-border-custom/50 ${currentPath === 'about' ? 'text-primary' : 'text-text-dark'}`}
              >
                Company Overview
              </button>

              {/* Products accordion */}
              <div className="border-b border-border-custom/50 pb-3">
                <button
                  onClick={() => { setMobileProductsOpen(o => !o); setMobileSubOpen(null); }}
                  className="flex items-center justify-between w-full text-base font-bold text-text-dark hover:text-primary"
                >
                  <span className={currentPath === 'products' || currentPath === 'api-detail' ? 'text-primary' : ''}>
                    Products
                  </span>
                  <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pt-2 space-y-1">
                        {productMenu.map((item) => (
                          <div key={item.key} className="border-l border-border-custom/40 pl-2">
                            <button
                              onClick={() => {
                                if (item.sub.type === 'direct') {
                                  handleNav('contact', { product: item.label });
                                } else {
                                  setMobileSubOpen(s => s === item.key ? null : item.key);
                                }
                              }}
                              className="flex items-center justify-between w-full py-2 text-sm font-semibold text-text-dark hover:text-primary"
                            >
                              <span>{item.label}</span>
                              {item.sub.type !== 'direct' && (
                                <ChevronDown className={`w-3.5 h-3.5 text-text-muted transition-transform ${mobileSubOpen === item.key ? 'rotate-180' : ''}`} />
                              )}
                            </button>

                            <AnimatePresence>
                              {mobileSubOpen === item.key && item.sub.type !== 'direct' && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden pl-2 pb-2"
                                >
                                  {item.sub.type === 'two-btn' && (
                                    <div className="flex flex-col gap-1 pt-1">
                                      <button
                                        onClick={() => item.key === 'apis' ? handleNav('human-apis') : handleNav('contact', { product: `${item.key}: Human` })}
                                        className="block text-left w-full text-sm text-text-dark hover:text-primary py-1.5"
                                      >
                                        • Human
                                      </button>
                                      <button
                                        onClick={() => handleNav('contact', { product: `${item.key}: Veterinary` })}
                                        className="block text-left w-full text-sm text-text-dark hover:text-primary py-1.5"
                                      >
                                        • Veterinary
                                      </button>
                                    </div>
                                  )}
                                  {item.sub.type === 'list' && (
                                    <div className="flex flex-col gap-1 pt-1">
                                      {item.sub.items.map(name => (
                                        <button
                                          key={name}
                                          onClick={() => handleNav('contact', { product: `${item.key}: ${name}` })}
                                          className="block text-left w-full text-xs text-text-dark hover:text-primary py-1"
                                        >
                                          • {name}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleNav('contact')}
                className={`block w-full text-left text-base font-bold pb-2 border-b border-border-custom/50 ${currentPath === 'contact' ? 'text-primary' : 'text-text-dark'}`}
              >
                Contact
              </button>
            </div>

            <div className="pt-4 border-t border-border-custom mt-6">
              <button
                onClick={() => handleNav('contact')}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-semibold shadow-lg text-xs"
              >
                Contact Commercial Team
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}