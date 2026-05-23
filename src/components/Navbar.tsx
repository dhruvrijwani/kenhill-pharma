import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Award, Globe, Shield, Activity, Beaker } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function Navbar({ currentPath, navigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Monitor scroll height to shrink navbar and add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const apisGrouped = [
    {
      title: "Cardiovascular",
      items: [
        { name: "Alendronate Sodium", slug: "alendronate-sodium" },
        { name: "Ibandronate Sodium", slug: "ibandronate-sodium" },
        { name: "Pamidronate Disodium", slug: "pamidronate-disodium" },
        { name: "Risedronate Sodium", slug: "risedronate-sodium" }
      ]
    },
    {
      title: "CNS & Neurological",
      items: [
        { name: "Fosphenytoin Sodium", slug: "fosphenytoin-sodium" },
        { name: "Memantine Hydrochloride", slug: "memantine-hydrochloride" },
        { name: "Phenobarbital", slug: "phenobarbital" },
        { name: "Phenobarbital Sodium", slug: "phenobarbital-sodium" },
        { name: "Phenytoin", slug: "phenytoin" },
        { name: "Ticagrelor", slug: "ticagrelor" },
        { name: "Tizanidine Hydrochloride", slug: "tizanidine-hydrochloride" }
      ]
    },
    {
      title: "Gastrointestinal",
      items: [
        { name: "Bisacodyl", slug: "bisacodyl" },
        { name: "Sodium Picosulfate", slug: "sodium-picosulfate" },
        { name: "Glycopyrrolate", slug: "glycopyrrolate" },
        { name: "Picosulfate Sodium", slug: "picosulfate-sodium" }
      ]
    },
    {
      title: "Respiratory",
      items: [
        { name: "Allopurinol", slug: "allopurinol" }
      ]
    },
    {
      title: "Endocrine & Metabolic",
      items: [
        { name: "Eplerenone", slug: "eplerenone" },
        { name: "Torsemide", slug: "torsemide" }
      ]
    }
  ];

  const intermediatesList = [
    { name: "5-Chloro-4-Amino-2,1,3-Benzothiadiazole", slug: "5-chloro-4-amino-2-1-3-benzothiadiazole" },
    { name: "2,3,4-Trimethoxy Benzaldehyde", slug: "2-3-4-trimethoxy-benzaldehyde" },
    { name: "3-Dibenzyl Phosphono", slug: "3-dibenzyl-phosphono" }
  ];

  const productsGrouped = [
    {
      title: "Chemicals",
      category: "chemicals",
      items: [
        { name: "Acids and Bases", slug: "acids-and-bases" },
        { name: "Advanced Disinfection Solutions", slug: "advanced-disinfection-solutions" },
        { name: "Analytical Reagents", slug: "analytical-reagents" },
        { name: "Biochemical Reagents", slug: "biochemical-reagents" }
      ]
    },
    {
      title: "Microbiology",
      category: "microbiology",
      items: [
        { name: "Animal Cell Culture", slug: "animal-cell-culture" },
        { name: "Plant Tissue Culture", slug: "plant-tissue-culture" },
        { name: "Culture Media Bases", slug: "culture-media-bases" },
        { name: "Media Supplements", slug: "media-supplements" }
      ]
    },
    {
      title: "Plant Culture Tested",
      category: "plant-culture",
      items: [
        { name: "Auxins", slug: "auxins" },
        { name: "Cytokinins", slug: "cytokinins" },
        { name: "Vitamins", slug: "vitamins" },
        { name: "Media Dyes & Stains", slug: "media-dyes-and-stains" }
      ]
    },
    {
      title: "Cell Culture Tested",
      category: "cell-culture",
      items: [
        { name: "Amino Acids", slug: "amino-acids" },
        { name: "Biological Buffers", slug: "biological-buffers" },
        { name: "Pharmaceutical Enzymes", slug: "pharmaceutical-enzymes" },
        { name: "Cryoprotectants", slug: "cryoprotectants" }
      ]
    }
  ];

  const navToAPIDetail = (slug: string) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    navigate('api-detail', { slug });
  };

  const navToProduct = (category: string, subcategory: string) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    navigate('product-detail', { category, slug: subcategory });
  };

  const isActive = (view: string) => {
    return currentPath === view ? 'text-primary font-semibold' : 'text-text-dark hover:text-primary';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-surface/95 backdrop-blur-md shadow-md border-b border-border-custom' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate('home')}
              id="nav-logo-container"
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 text-white">
                <Beaker className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold tracking-tight text-primary leading-tight">
                  KEN HILL
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-accent font-semibold leading-none">
                  PHARMA LIMITED
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8" id="nav-desktop-links">
              <button 
                onClick={() => navigate('home')} 
                className={`text-sm tracking-wide transition-colors outline-none cursor-pointer ${isActive('home')}`}
                id="nav-item-home"
              >
                Home
              </button>

              {/* APIs Megamenu Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('apis')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => navigate('apis')}
                  className={`flex items-center space-x-1 text-sm tracking-wide transition-colors cursor-pointer outline-none ${
                    currentPath === 'apis' || (currentPath === 'api-detail' && !intermediatesList.some(i => i.slug === window.location.hash.split('slug=')[1])) ? 'text-primary font-semibold' : 'text-text-dark hover:text-primary'
                  }`}
                  id="nav-dropdown-apis"
                >
                  <span>APIs</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'apis' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[850px] rounded-2xl bg-surface border border-border-custom shadow-2xl p-6 z-50 grid grid-cols-5 gap-6"
                      id="megamenu-apis"
                    >
                      {apisGrouped.map((group) => (
                        <div key={group.title} className="space-y-3">
                          <span className="block text-[10px] uppercase tracking-wider text-accent font-bold pb-1.5 border-b border-border-custom/40">
                            {group.title}
                          </span>
                          <div className="flex flex-col gap-1.5">
                            {group.items.map((item) => (
                              <button
                                key={item.slug}
                                onClick={() => navToAPIDetail(item.slug)}
                                className="w-full text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                              >
                                {item.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Intermediates Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('intermediates')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 text-sm tracking-wide transition-colors cursor-pointer outline-none ${
                    currentPath === 'intermediates' || (currentPath === 'api-detail' && intermediatesList.some(i => i.slug === window.location.hash.split('slug=')[1])) ? 'text-primary font-semibold' : 'text-text-dark hover:text-primary'
                  }`}
                  id="nav-dropdown-intermediates"
                >
                  <span>Intermediates</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'intermediates' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-72 rounded-2xl bg-surface border border-border-custom shadow-2xl p-4 z-50 flex flex-col gap-2"
                      id="dropdown-intermediates"
                    >
                      <div className="pb-1.5 border-b border-border-custom/40">
                        <span className="text-[10px] uppercase tracking-wider text-accent font-bold">Regulatory Intermediates</span>
                      </div>
                      {intermediatesList.map((item) => (
                        <button
                          key={item.slug}
                          onClick={() => navToAPIDetail(item.slug)}
                          className="w-full text-left font-body text-2xs text-text-dark hover:text-primary hover:bg-bg p-2 rounded-lg transition-colors leading-snug"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products Megamenu Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 text-sm tracking-wide transition-colors cursor-pointer outline-none ${
                    currentPath === 'products' || currentPath === 'product-detail' ? 'text-primary font-semibold' : 'text-text-dark hover:text-primary'
                  }`}
                  id="nav-dropdown-products"
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] rounded-2xl bg-surface border border-border-custom shadow-2xl p-6 z-50 grid grid-cols-4 gap-6"
                      id="megamenu-products"
                    >
                      {productsGrouped.map((group) => (
                        <div key={group.title} className="space-y-3">
                          <span className="block text-[10px] uppercase tracking-wider text-accent font-bold pb-1.5 border-b border-border-custom/40">
                            {group.title}
                          </span>
                          <div className="flex flex-col gap-1.5">
                            {group.items.map((item) => (
                              <button
                                key={item.slug}
                                onClick={() => navToProduct(group.category, item.slug)}
                                className="w-full text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                              >
                                {item.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Overview (formerly About) */}
              <button 
                onClick={() => navigate('about')} 
                className={`text-sm tracking-wide transition-colors cursor-pointer outline-none ${isActive('about')}`}
                id="nav-item-about"
              >
                Company Overview
              </button>

              <button 
                onClick={() => navigate('contact')} 
                className={`text-sm tracking-wide transition-colors cursor-pointer outline-none ${isActive('contact')}`}
                id="nav-item-contact"
              >
                Contact
              </button>

              {/* Action Button */}
              <button 
                onClick={() => navigate('contact')}
                className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer outline-none"
                id="nav-btn-quote"
              >
                Request Quote
              </button>
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-dark hover:text-primary p-2 focus:outline-none"
                id="nav-mobile-hamburger"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col justify-between p-6 pt-24 lg:hidden shadow-2xl border-l border-border-custom overflow-y-auto"
            id="nav-mobile-drawer"
          >
            <div className="space-y-6 max-h-[80vh] overflow-y-auto">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigate('home'); }}
                className="block text-left w-full text-base font-bold text-text-dark hover:text-primary border-b border-border-custom/50 pb-2"
              >
                Home
              </button>

              {/* Mobile APIs List */}
              <div className="space-y-2">
                <span className="block text-[10px] uppercase tracking-wider text-accent font-extrabold">Active APIs</span>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {apisGrouped.map((grp) => (
                    <div key={grp.title} className="space-y-1">
                      <span className="block text-[9px] text-text-muted font-bold uppercase">{grp.title}</span>
                      <div className="grid grid-cols-1 gap-1 pl-1.5">
                        {grp.items.slice(0, 4).map((i) => (
                          <button
                            key={i.slug}
                            onClick={() => navToAPIDetail(i.slug)}
                            className="block text-left text-2xs text-text-dark hover:text-primary py-0.5"
                          >
                            • {i.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => { setIsMobileMenuOpen(false); navigate('apis'); }}
                    className="text-left text-xs text-primary font-bold mt-1"
                  >
                    View All APIs →
                  </button>
                </div>
              </div>

              {/* Mobile Intermediates List */}
              <div className="space-y-2 border-t border-border-custom/40 pt-4">
                <span className="block text-[10px] uppercase tracking-wider text-accent font-extrabold">Intermediates</span>
                <div className="flex flex-col gap-2 pl-2">
                  {intermediatesList.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => navToAPIDetail(item.slug)}
                      className="block text-left text-xs text-text-dark hover:text-primary"
                    >
                      • {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Products List */}
              <div className="space-y-2 border-t border-border-custom/40 pt-4">
                <span className="block text-[10px] uppercase tracking-wider text-accent font-extrabold">Products</span>
                <div className="grid grid-cols-1 gap-3 pl-2">
                  {productsGrouped.map((grp) => (
                    <div key={grp.title} className="space-y-1">
                      <span className="block text-[9px] text-text-muted font-bold uppercase">{grp.title}</span>
                      <div className="flex flex-col gap-1 pl-2">
                        {grp.items.map((i) => (
                          <button
                            key={i.slug}
                            onClick={() => navToProduct(grp.category, i.slug)}
                            className="block text-left text-2xs text-text-dark hover:text-primary py-0.5"
                          >
                            • {i.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigate('about'); }}
                className="block text-left w-full text-base font-bold text-text-dark hover:text-primary border-t border-border-custom/40 pt-4"
              >
                Company Overview
              </button>

              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigate('contact'); }}
                className="block text-left w-full text-base font-bold text-text-dark hover:text-primary"
              >
                Contact
              </button>
            </div>

            <div className="pt-4 border-t border-border-custom mt-6">
              <button
                onClick={() => { setIsMobileMenuOpen(false); navigate('contact'); }}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-semibold shadow-lg text-center text-xs"
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
