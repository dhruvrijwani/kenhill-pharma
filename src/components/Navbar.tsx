import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Award, Globe, Shield, Activity } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function Navbar({ currentPath, navigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [mobileSubgroupExpanded, setMobileSubgroupExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const intermediatesList = [
    { name: "5-Chloro-4-Amino-2,1,3-Benzothiadiazole", slug: "5-chloro-4-amino-2-1-3-benzothiadiazole" },
    { name: "2,3,4-Trimethoxy Benzaldehyde", slug: "2-3-4-trimethoxy-benzaldehyde" },
    { name: "3-Dibenzyl Phosphono", slug: "3-dibenzyl-phosphono" }
  ];

  const newApisGrouped = {
    human: [
      { name: "Alendronate Sodium", slug: "alendronate-sodium" },
      { name: "Ibandronate Sodium", slug: "ibandronate-sodium" },
      { name: "Pamidronate Disodium", slug: "pamidronate-disodium" },
      { name: "Risedronate Sodium", slug: "risedronate-sodium" },
      { name: "Fosphenytoin Sodium", slug: "fosphenytoin-sodium" },
      { name: "Memantine Hydrochloride", slug: "memantine-hydrochloride" },
      { name: "Phenobarbital", slug: "phenobarbital" },
      { name: "Phenobarbital Sodium", slug: "phenobarbital-sodium" },
      { name: "Phenytoin", slug: "phenytoin" }
    ],
    veterinary: [
      { name: "Ticagrelor", slug: "ticagrelor" },
      { name: "Tizanidine Hydrochloride", slug: "tizanidine-hydrochloride" },
      { name: "Bisacodyl", slug: "bisacodyl" },
      { name: "Sodium Picosulfate", slug: "sodium-picosulfate" },
      { name: "Glycopyrrolate", slug: "glycopyrrolate" },
      { name: "Picosulfate Sodium", slug: "picosulfate-sodium" },
      { name: "Allopurinol", slug: "allopurinol" },
      { name: "Eplerenone", slug: "eplerenone" },
      { name: "Torsemide", slug: "torsemide" }
    ]
  };

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

  const getLinkClass = (isActive: boolean) => {
    return `relative pb-1 text-sm font-semibold tracking-wide transition-colors cursor-pointer outline-none duration-350 ${
      isActive 
        ? 'text-primary font-bold' 
        : 'text-text-dark hover:text-primary font-semibold'
    } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-300 ${
      isActive ? 'after:scale-x-100 after:bg-primary' : 'after:scale-x-0 hover:after:scale-x-100 after:bg-primary'
    }`;
  };

  const toggleMobileExpandedSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
    setMobileSubgroupExpanded(null);
  };

  const toggleMobileSubgroup = (subgroup: string) => {
    setMobileSubgroupExpanded(mobileSubgroupExpanded === subgroup ? null : subgroup);
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
              <img
                src="/Logo.jpeg"
                alt="Ken Hill Pharma Limited"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8" id="nav-desktop-links">
              <button 
                onClick={() => navigate('home')} 
                className={getLinkClass(currentPath === 'home')}
                id="nav-item-home"
              >
                Home
              </button>

              <button 
                onClick={() => navigate('about')} 
                className={getLinkClass(currentPath === 'about')}
                id="nav-item-about"
              >
                Company Overview
              </button>

              {/* Products Megamenu Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`${getLinkClass(
                    currentPath === 'products' || currentPath === 'product-detail'
                  )} flex items-center space-x-1 outline-none`}
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
                      // Wider menu, 5 columns: Formulation | APIs (2 sub-cols) | Intermediates | Chemicals | Salts+Solvents
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[1100px] rounded-2xl bg-surface border border-border-custom shadow-2xl p-8 z-50"
                      id="megamenu-products"
                    >
                      <div className="grid grid-cols-5 gap-8">

                        {/* Column 1: Formulation */}
                        <div className="space-y-4">
                          <span className="block text-[11px] uppercase tracking-wider text-accent font-extrabold pb-2 border-b border-border-custom/40">
                            Formulation
                          </span>
                          
                          <div className="space-y-3">
                            {/* Human Medicine */}
                            <div className="space-y-1">
                              <span className="block text-[10px] uppercase tracking-wider text-text-muted font-bold">
                                Human Medicine
                              </span>
                              <div className="flex flex-col gap-1 pl-1">
                                <button
                                  onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Formulation: Human Medicine - General' }); }}
                                  className="text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                                >
                                  General
                                </button>
                                <button
                                  onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Formulation: Human Medicine - Oncology' }); }}
                                  className="text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                                >
                                  Oncology
                                </button>
                                <button
                                  onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Formulation: Human Medicine - Critical Care' }); }}
                                  className="text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                                >
                                  Critical Care
                                </button>
                              </div>
                            </div>

                            {/* Veterinary Medicine — same style as Human Medicine */}
                            <div className="space-y-1 pt-2 border-t border-border-custom/20">
                              <span className="block text-[10px] uppercase tracking-wider text-text-muted font-bold">
                                Veterinary Medicine
                              </span>
                              <div className="flex flex-col gap-1 pl-1">
                                <button
                                  onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Formulation: Veterinary Medicine' }); }}
                                  className="text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                                >
                                  Veterinary Medicine
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Column 2: APIs — split into two sub-columns side by side */}
                        <div className="col-span-2 space-y-4">
                          <span className="block text-[11px] uppercase tracking-wider text-accent font-extrabold pb-2 border-b border-border-custom/40">
                            APIs
                          </span>
                          
                          <div className="grid grid-cols-2 gap-6">
                            {/* Human APIs */}
                            <div className="space-y-1">
                              <span 
                                className="block text-[10px] uppercase tracking-wider text-text-muted font-bold cursor-pointer hover:text-primary" 
                                onClick={() => { setActiveDropdown(null); navigate('apis'); }}
                              >
                                Human APIs
                              </span>
                              <div className="flex flex-col gap-1.5 pl-1">
                                {newApisGrouped.human.map((item) => (
                                  <button
                                    key={item.slug}
                                    onClick={() => navToAPIDetail(item.slug)}
                                    className="w-full text-left font-body text-2xs text-text-dark hover:text-primary transition-all hover:translate-x-1"
                                  >
                                    {item.name}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Veterinary APIs */}
                            <div className="space-y-1">
                              <span 
                                className="block text-[10px] uppercase tracking-wider text-text-muted font-bold cursor-pointer hover:text-primary" 
                                onClick={() => { setActiveDropdown(null); navigate('apis'); }}
                              >
                                Veterinary APIs
                              </span>
                              <div className="flex flex-col gap-1.5 pl-1">
                                {newApisGrouped.veterinary.map((item) => (
                                  <button
                                    key={item.slug}
                                    onClick={() => navToAPIDetail(item.slug)}
                                    className="w-full text-left font-body text-2xs text-text-dark hover:text-primary transition-all hover:translate-x-1"
                                  >
                                    {item.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Column 3: Intermediates */}
                        <div className="space-y-4">
                          <span className="block text-[11px] uppercase tracking-wider text-accent font-extrabold pb-2 border-b border-border-custom/40">
                            Intermediates
                          </span>
                          <div className="flex flex-col gap-1.5">
                            {intermediatesList.map((item) => (
                              <button
                                key={item.slug}
                                onClick={() => navToAPIDetail(item.slug)}
                                className="w-full text-left font-body text-2xs text-text-dark hover:text-primary hover:bg-bg p-1.5 rounded-lg transition-all leading-snug hover:translate-x-1"
                              >
                                {item.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Column 4: Chemicals + Industrial Salts + Solvents */}
                        <div className="space-y-6">
                          {/* Chemicals */}
                          <div className="space-y-3">
                            <span className="block text-[11px] uppercase tracking-wider text-accent font-extrabold pb-2 border-b border-border-custom/40">
                              Chemicals
                            </span>
                            <div className="flex flex-col gap-1 pl-1">
                              <button
                                onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Chemicals - API' }); }}
                                className="text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                              >
                                API Chemicals
                              </button>
                              <button
                                onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Chemicals - DIES Chemical' }); }}
                                className="text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                              >
                                DIES Chemical
                              </button>
                              <button
                                onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Chemicals - Agro Chemical' }); }}
                                className="text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                              >
                                Agro Chemical
                              </button>
                              <button
                                onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Chemicals - Pigments' }); }}
                                className="text-left font-body text-2xs text-text-dark hover:text-primary transition-all pr-2 hover:translate-x-1"
                              >
                                Pigments
                              </button>
                            </div>
                          </div>

                          {/* Industrial Salts — individual item */}
                          <div className="space-y-2 pt-3 border-t border-border-custom/30">
                            <button
                              onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Industrial Salts' }); }}
                              className="block text-[11px] uppercase tracking-wider text-accent font-extrabold hover:text-primary transition-colors"
                            >
                              Industrial Salts
                            </button>
                          </div>

                          {/* Solvents — individual item */}
                          <div className="space-y-2">
                            <button
                              onClick={() => { setActiveDropdown(null); navigate('contact', { product: 'Solvents' }); }}
                              className="block text-[11px] uppercase tracking-wider text-accent font-extrabold hover:text-primary transition-colors"
                            >
                              Solvents
                            </button>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => navigate('contact')} 
                className={getLinkClass(currentPath === 'contact')}
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
            <div className="space-y-5 max-h-[80vh] overflow-y-auto pr-1">
              {/* Home Page Link */}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigate('home'); }}
                className={`block text-left w-full text-base font-bold pb-2 border-b border-border-custom/50 ${currentPath === 'home' ? 'text-primary' : 'text-text-dark'}`}
              >
                Home
              </button>

              {/* Company Overview Link */}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigate('about'); }}
                className={`block text-left w-full text-base font-bold pb-2 border-b border-border-custom/50 ${currentPath === 'about' ? 'text-primary' : 'text-text-dark'}`}
              >
                Company Overview
              </button>

              {/* Products Accordion */}
              <div className="space-y-1.5 border-b border-border-custom/50 pb-3" id="mobile-products-accordion">
                <button
                  onClick={() => toggleMobileExpandedSection('products')}
                  className="flex items-center justify-between w-full text-base font-bold text-text-dark hover:text-primary"
                >
                  <span className={currentPath === 'product-detail' || currentPath === 'products' ? 'text-primary' : ''}>Products Portfolio</span>
                  <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-200 ${mobileExpandedSection === 'products' ? 'rotate-180 text-primary' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileExpandedSection === 'products' && (
                    <motion.div 
                      key="mobile-products-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 space-y-4 pt-2 overflow-hidden"
                    >
                      {/* Formulation Subgroup */}
                      <div className="space-y-1 border-l border-border-custom/60 pl-2">
                        <button
                          onClick={() => toggleMobileSubgroup('formulation')}
                          className="flex items-center justify-between w-full text-2xs text-accent font-extrabold pb-0.5"
                        >
                          <span>Formulation</span>
                          <ChevronDown className={`w-3 h-3 transition-transform ${mobileSubgroupExpanded === 'formulation' ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {mobileSubgroupExpanded === 'formulation' && (
                          <div className="flex flex-col gap-2 pl-1.5 pt-1 scale-95 origin-top transition-all">
                            {/* Human Medicine */}
                            <span className="block text-[10px] text-text-muted font-bold uppercase tracking-wider">Human Medicine</span>
                            <button
                              onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Formulation: Human Medicine - General' }); }}
                              className="block text-left text-2xs text-text-dark hover:text-primary py-0.5 pl-2"
                            >
                              • General
                            </button>
                            <button
                              onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Formulation: Human Medicine - Oncology' }); }}
                              className="block text-left text-2xs text-text-dark hover:text-primary py-0.5 pl-2"
                            >
                              • Oncology
                            </button>
                            <button
                              onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Formulation: Human Medicine - Critical Care' }); }}
                              className="block text-left text-2xs text-text-dark hover:text-primary py-0.5 pl-2"
                            >
                              • Critical Care
                            </button>
                            
                            {/* Veterinary Medicine — same subheading style */}
                            <span className="block text-[10px] text-text-muted font-bold uppercase tracking-wider pt-2 border-t border-border-custom/20 mt-1">Veterinary Medicine</span>
                            <button
                              onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Formulation: Veterinary Medicine' }); }}
                              className="block text-left text-2xs text-text-dark hover:text-primary py-0.5 pl-2"
                            >
                              • Veterinary Medicine
                            </button>
                          </div>
                        )}
                      </div>

                      {/* APIs Subgroup */}
                      <div className="space-y-1 border-l border-border-custom/60 pl-2">
                        <button
                          onClick={() => toggleMobileSubgroup('apis')}
                          className="flex items-center justify-between w-full text-2xs text-accent font-extrabold pb-0.5"
                        >
                          <span>APIs</span>
                          <ChevronDown className={`w-3 h-3 transition-transform ${mobileSubgroupExpanded === 'apis' ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {mobileSubgroupExpanded === 'apis' && (
                          <div className="flex flex-col gap-2 pl-1.5 pt-1 scale-95 origin-top transition-all">
                            {/* Human APIs */}
                            <div>
                              <span className="block text-[10px] text-text-muted font-bold uppercase tracking-wider cursor-pointer hover:text-primary" onClick={() => { setIsMobileMenuOpen(false); navigate('apis'); }}>Human APIs</span>
                              <div className="flex flex-col gap-1 pl-2 mt-1">
                                {newApisGrouped.human.map((i) => (
                                  <button
                                    key={i.slug}
                                    onClick={() => { setIsMobileMenuOpen(false); navToAPIDetail(i.slug); }}
                                    className="block text-left text-2xs text-text-dark hover:text-primary py-0.5 font-medium"
                                  >
                                    • {i.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                            
                            {/* Veterinary APIs */}
                            <div className="border-t border-border-custom/20 pt-2">
                              <span className="block text-[10px] text-text-muted font-bold uppercase tracking-wider cursor-pointer hover:text-primary" onClick={() => { setIsMobileMenuOpen(false); navigate('apis'); }}>Veterinary APIs</span>
                              <div className="flex flex-col gap-1 pl-2 mt-1">
                                {newApisGrouped.veterinary.map((i) => (
                                  <button
                                    key={i.slug}
                                    onClick={() => { setIsMobileMenuOpen(false); navToAPIDetail(i.slug); }}
                                    className="block text-left text-2xs text-text-dark hover:text-primary py-0.5 font-medium"
                                  >
                                    • {i.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Intermediates Subgroup */}
                      <div className="space-y-1 border-l border-border-custom/60 pl-2">
                        <button
                          onClick={() => toggleMobileSubgroup('intermediates')}
                          className="flex items-center justify-between w-full text-2xs text-accent font-extrabold pb-0.5"
                        >
                          <span>Intermediates</span>
                          <ChevronDown className={`w-3 h-3 transition-transform ${mobileSubgroupExpanded === 'intermediates' ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {mobileSubgroupExpanded === 'intermediates' && (
                          <div className="flex flex-col gap-1.5 pl-1.5 pt-1 scale-95 origin-top transition-all">
                            {intermediatesList.map((item) => (
                              <button
                                key={item.slug}
                                onClick={() => { setIsMobileMenuOpen(false); navToAPIDetail(item.slug); }}
                                className="block text-left text-2xs text-text-dark hover:text-primary py-0.5 font-medium"
                              >
                                • {item.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Chemicals Subgroup */}
                      <div className="space-y-1 border-l border-border-custom/60 pl-2">
                        <button
                          onClick={() => toggleMobileSubgroup('chemicals')}
                          className="flex items-center justify-between w-full text-2xs text-accent font-extrabold pb-0.5"
                        >
                          <span>Chemicals</span>
                          <ChevronDown className={`w-3 h-3 transition-transform ${mobileSubgroupExpanded === 'chemicals' ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {mobileSubgroupExpanded === 'chemicals' && (
                          <div className="flex flex-col gap-1 pl-1.5 pt-1 scale-95 origin-top transition-all">
                            <button
                              onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Chemicals - API' }); }}
                              className="block text-left text-2xs text-text-dark hover:text-primary py-0.5"
                            >
                              • API Chemical
                            </button>
                            <button
                              onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Chemicals - DIES Chemical' }); }}
                              className="block text-left text-2xs text-text-dark hover:text-primary py-0.5"
                            >
                              • DIES Chemical
                            </button>
                            <button
                              onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Chemicals - Agro Chemical' }); }}
                              className="block text-left text-2xs text-text-dark hover:text-primary py-0.5"
                            >
                              • Agro Chemical
                            </button>
                            <button
                              onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Chemicals - Pigments' }); }}
                              className="block text-left text-2xs text-text-dark hover:text-primary py-0.5"
                            >
                              • Pigments
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Industrial Salts — individual */}
                      <div className="space-y-1 border-l border-border-custom/60 pl-2">
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Industrial Salts' }); }}
                          className="block text-left text-2xs text-accent font-extrabold pb-0.5 hover:text-primary"
                        >
                          Industrial Salts
                        </button>
                      </div>

                      {/* Solvents — individual */}
                      <div className="space-y-1 border-l border-border-custom/60 pl-2">
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigate('contact', { product: 'Solvents' }); }}
                          className="block text-left text-2xs text-accent font-extrabold pb-0.5 hover:text-primary"
                        >
                          Solvents
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Link */}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigate('contact'); }}
                className={`block text-left w-full text-base font-bold pb-2 border-b border-border-custom/50 ${currentPath === 'contact' ? 'text-primary' : 'text-text-dark'}`}
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