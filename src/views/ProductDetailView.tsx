import React from 'react';
import { chemicalsProducts } from '../data/products/chemicals';
import { microbiologyProducts } from '../data/products/microbiology';
import { plantCultureProducts } from '../data/products/plant-culture';
import { cellCultureProducts } from '../data/products/cell-culture';
import { ChevronRight, FlaskConical, ClipboardCheck, Info, Package, ShieldCheck, Mail } from 'lucide-react';
import { PharmProduct } from '../lib/types';
import AnimatedSection from '../components/AnimatedSection';

interface ProductDetailViewProps {
  category: string;
  slug: string;
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function ProductDetailView({ category, slug, navigate }: ProductDetailViewProps) {
  // Combine all products database
  const allProducts: PharmProduct[] = [
    ...chemicalsProducts,
    ...microbiologyProducts,
    ...plantCultureProducts,
    ...cellCultureProducts
  ];

  // Search by category and subcategory slug
  const product = allProducts.find(p => 
    p.category.toLowerCase() === category.toLowerCase() && 
    p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    return (
      <div className="relative pt-24 pb-20 text-center space-y-4 max-w-md mx-auto">
        <FlaskConical className="w-12 h-12 text-accent mx-auto animate-bounce" />
        <h3 className="text-sm font-bold text-text-dark">Line Segment Non-existent</h3>
        <p className="text-xs text-text-muted">
          The requested product segment could not be located in our inventory files.
        </p>
        <button
          onClick={() => navigate('home')}
          className="bg-primary text-white text-3xs font-semibold px-4 py-2 rounded-full"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* VIEW NAVIGATION CORNER */}
        <div className="border-b border-border-custom pb-8">
          <div className="flex items-center space-x-2 text-xs text-text-muted mb-3">
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('home')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-muted capitalize">{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-dark font-medium">{product.subcategory}</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="inline-block text-[10px] uppercase tracking-widest text-[#1A3A6B] bg-[#1A3A6B]/15 px-3 py-1 rounded font-bold">
              {product.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-dark">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              {product.intro}
            </p>
          </div>
        </div>

        {/* OVERVIEW CONTENT AND METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Cards highlights block info */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <span className="text-2xs uppercase tracking-wider text-accent font-bold">Segment Functionality</span>
              <h3 className="text-lg font-bold text-text-dark">{product.overview.heading}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{product.overview.subtext}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {product.serviceCards.map((card, index) => (
                <div key={card.title} className="bg-surface border border-border-custom rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-2 border-b border-border-custom/30 pb-1 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                    <span>{card.title}</span>
                  </h4>
                  <p className="text-2xs text-text-muted leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>

            {/* PRODUCT SPECIFICATION TABLE */}
            <div className="space-y-4">
              <div className="border-b border-border-custom pb-2 flex justify-between items-center">
                <h3 className="text-sm font-bold text-text-dark uppercase tracking-wider">Cataloged Specifications Inventory</h3>
                <span className="text-3xs text-text-muted leading-none">Pristine assays only</span>
              </div>

              <div className="border border-border-custom rounded-2xl overflow-hidden bg-surface">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-bg border-b border-border-custom font-mono text-3xs text-text-muted font-bold">
                        <th className="p-4 uppercase tracking-wider">Product Code</th>
                        <th className="p-4 uppercase tracking-wider">Molecular Name & Description</th>
                        <th className="p-4 uppercase tracking-wider text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-custom text-2xs text-text-dark font-medium">
                      {product.productTable.map((row) => (
                        <tr key={row.productCode} className="hover:bg-bg/40 transition-colors">
                          <td className="p-4 font-mono text-primary font-bold">{row.productCode}</td>
                          <td className="p-4 font-medium">{row.productName}</td>
                          <td className="p-4 text-right">
                            <span className="inline-block text-[9px] bg-emerald-500/10 text-emerald-500 font-bold px-2 py-0.5 rounded">
                              COA Ready
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sourcing & Quality Side column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-primary text-white rounded-2xl p-6 space-y-6 shadow-lg">
              <h3 className="text-md font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">Why Sourced From Us?</h3>
              
              <div className="space-y-4">
                <h4 className="text-xs font-bold">{product.whyChooseUs.heading}</h4>
                <p className="text-2xs text-white/80 leading-relaxed font-semibold">{product.whyChooseUs.leadCopy}</p>
                
                <ul className="space-y-3.5 pt-2 border-t border-white/10 text-2xs text-white/90">
                  {product.whyChooseUs.usps.map((usp, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{usp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Packaging and storage parameters box */}
            <div className="bg-surface border border-border-custom rounded-2xl p-6 space-y-6 shadow-sm">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider border-b border-border-custom pb-2 flex items-center space-x-2">
                  <Package className="w-4 h-4 text-accent" />
                  <span>Packaging & Storage</span>
                </h4>

                <div className="space-y-3">
                  <div>
                    <span className="block text-[10px] text-text-muted font-bold uppercase tracking-wider">Packaging Alternatives:</span>
                    <ul className="list-disc list-inside text-2xs text-text-dark mt-1 space-y-1">
                      {product.packaging.options.map((option, idx) => (
                        <li key={idx} className="leading-snug">{option}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border-custom/50">
                    <span className="block text-[10px] text-text-muted font-bold uppercase tracking-wider">Temperature & Environs:</span>
                    <p className="text-2xs text-text-dark mt-1 leading-relaxed">
                      {product.storage.conditions}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border-custom/50">
                    <span className="block text-[10px] text-text-muted font-bold uppercase tracking-wider">Continuous Shelf Life:</span>
                    <span className="block text-xs font-bold text-primary mt-1 font-mono">
                      {product.storage.shelfLife}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => navigate('contact', { product: product.subcategory })}
                className="w-full bg-[#1A3A6B] hover:bg-primary-hover text-white text-3xs font-bold p-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center space-x-1.5"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Contact Trading Office</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
