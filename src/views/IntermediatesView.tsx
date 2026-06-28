import React, { useMemo, useState } from 'react';
import { intermediatesData } from '../data/intermediates';
import { extendedIntermediates } from '../data/intermediates-extended';
import { ChevronRight, FileSpreadsheet, Search, ArrowRight, Info, Check, Beaker } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface IntermediatesViewProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function IntermediatesView({ navigate }: IntermediatesViewProps) {
  const [query, setQuery] = useState('');

  const catalogRows = useMemo(() => {
    const detailed = intermediatesData.map((item) => ({
      id: item.id,
      name: item.name,
      casNumber: item.casNumber,
      endUse: item.applications[0],
      hasDossier: true,
      slug: item.slug,
    }));
    const quickRef = extendedIntermediates.map((item) => ({
      id: item.id,
      name: item.name,
      casNumber: item.casNumber,
      endUse: item.endUse,
      hasDossier: false,
      slug: item.slug,
    }));
    return [...detailed, ...quickRef];
  }, []);

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return catalogRows;
    return catalogRows.filter(
      (row) =>
        row.name.toLowerCase().includes(q) ||
        row.casNumber.toLowerCase().includes(q) ||
        row.endUse.toLowerCase().includes(q)
    );
  }, [catalogRows, query]);

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Subtle Wave Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#1A3A6B_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* VIEW HEADER */}
        <div className="border-b border-border-custom pb-8">
          <div className="flex items-center space-x-2 text-xs text-text-muted mb-3">
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('home')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-dark font-medium">Drug Intermediates</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Intermediary Sourcing</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-dark">
              High-Purity Drug Intermediates
            </h1>
            <p className="text-sm text-text-muted leading-relaxed">
              We source and supply specialized chemical synthesis intermediates required for industrial API manufacturing. Every compound matches stringent gas or liquid chromatography purity indicators, with complete technical documentation.
            </p>
          </div>
        </div>

        {/* FEATURED DETAILED MONOGRAPHS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-text-dark">Featured Intermediates — Full Technical Dossier</h2>
            <span className="text-2xs text-text-muted font-medium">{intermediatesData.length} compounds with complete monograph data</span>
          </div>
        </div>

        {/* DETAILS TABLE GRID */}
        <div className="space-y-8">
          {intermediatesData.map((item) => (
            <div 
              key={item.slug} 
              className="bg-surface border border-border-custom rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Product specifications column */}
              <div className="lg:col-span-4 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary">
                  <span className="text-3xs uppercase tracking-wider font-extrabold font-mono">CAS ID: {item.casNumber}</span>
                </div>

                <h3 className="text-lg font-extrabold text-text-dark leading-snug">{item.name}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
                
                <div className="bg-bg rounded-xl p-4 border border-border-custom/50 text-xs text-text-dark space-y-2 font-medium">
                  <div className="flex justify-between">
                    <span className="text-text-muted font-normal">Molecular Weight:</span>
                    <span>{item.molecularWeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted font-normal">Appearance:</span>
                    <span className="line-clamp-1">{item.specifications[0].specification}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted font-normal">Purity GC/HPLC:</span>
                    <span className="text-primary font-bold">{item.purity}</span>
                  </div>
                </div>
              </div>

              {/* Central Details and Table */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <h4 className="text-2xs uppercase tracking-widest text-accent font-bold mb-2">Synthesis Application</h4>
                  <p className="text-xs text-text-dark leading-relaxed font-semibold bg-bg p-3.5 rounded-xl border border-border-custom/40">
                    {item.intro}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xs uppercase tracking-widest text-accent font-bold">Impurity Profile Highlights</h4>
                  <div className="grid grid-cols-2 gap-2 text-3xs font-semibold text-text-dark">
                    <div className="flex items-center space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Single maximum impurity &lt; 0.1%</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Total impurities &lt; 0.5%</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Heavy metals &lt; 10 ppm</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Sulfated ash &lt; 0.1%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sourcing and action panel column */}
              <div className="lg:col-span-3 bg-bg border border-border-custom/50 rounded-2xl p-6 text-xs text-text-dark space-y-4 self-stretch flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="block text-2xs uppercase tracking-wider text-accent font-bold border-b border-border-custom/50 pb-2">Packaging Standard</span>
                  <div className="space-y-2">
                    <div className="flex justify-between text-3xs font-bold text-text-muted">
                      <span>PACK SIZE:</span>
                      <span className="text-text-dark">{item.packaging.primary}</span>
                    </div>
                    <div className="flex justify-between text-3xs font-bold text-text-muted">
                      <span>STORAGE:</span>
                      <span className="text-text-dark line-clamp-1">{item.storage.conditions[0]}</span>
                    </div>
                    <div className="flex justify-between text-3xs font-bold text-text-muted">
                      <span>SHELF LIFE:</span>
                      <span className="text-text-dark">{item.storage.shelfLife}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-custom/50 space-y-2">
                  <button
                    onClick={() => navigate('api-detail', { slug: item.slug })}
                    className="w-full bg-primary hover:bg-primary-hover text-white text-3xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-1 shadow transition-transform"
                  >
                    <span>View Monograph Datasheet</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                  <button
                    onClick={() => navigate('contact', { product: item.name })}
                    className="w-full bg-surface border border-border-custom hover:bg-border-custom text-text-dark text-3xs font-semibold py-3 px-4 rounded-xl"
                  >
                    Request Bulk Quotation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPLETE CATALOG TABLE */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border-custom pt-10">
            <div>
              <h2 className="text-xl font-extrabold text-text-dark flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-accent" />
                Complete Intermediates Catalog
              </h2>
              <p className="text-xs text-text-muted mt-1">
                {catalogRows.length} chemical intermediates across our sourcing network — search by name, CAS number, or end-use API.
              </p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, CAS, or API..."
                className="w-full text-xs border border-border-custom rounded-lg pl-9 pr-3 py-2.5 bg-surface focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text-dark"
              />
            </div>
          </div>

          <div className="bg-surface border border-border-custom rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-bg border-b border-border-custom text-text-muted uppercase text-3xs tracking-wider">
                    <th className="text-left font-bold px-5 py-3.5">Intermediate</th>
                    <th className="text-left font-bold px-5 py-3.5">CAS No.</th>
                    <th className="text-left font-bold px-5 py-3.5">End Use</th>
                    <th className="text-right font-bold px-5 py-3.5">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row) => (
                    <tr key={row.id} className="border-b border-border-custom/50 last:border-0 hover:bg-bg/60 transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-text-dark">
                        {row.name}
                        {row.hasDossier && (
                          <span className="ml-2 inline-block text-3xs bg-emerald-500/10 text-emerald-600 font-extrabold px-1.5 py-0.5 rounded uppercase">
                            Full Dossier
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-text-muted">{row.casNumber}</td>
                      <td className="px-5 py-3.5 text-text-muted">{row.endUse}</td>
                      <td className="px-5 py-3.5 text-right">
                        {row.hasDossier ? (
                          <button
                            onClick={() => navigate('api-detail', { slug: row.slug })}
                            className="text-primary hover:text-accent font-bold inline-flex items-center gap-1 outline-none cursor-pointer"
                          >
                            View Dossier
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => navigate('contact', { product: row.name })}
                            className="text-primary hover:text-accent font-bold inline-flex items-center gap-1 outline-none cursor-pointer"
                          >
                            Request Quote
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredRows.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-5 py-10 text-center text-text-muted">
                        <Info className="w-5 h-5 mx-auto mb-2 text-text-muted" />
                        No intermediates match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="bg-dark-section rounded-2xl p-8 text-white text-center space-y-4 shadow-xl border border-white/5">
          <Beaker className="w-9 h-9 text-accent mx-auto" />
          <h3 className="text-lg font-bold">Need a Custom Intermediate Sourced?</h3>
          <p className="text-xs text-white/80 max-w-xl mx-auto leading-relaxed">
            Our sourcing desk maintains active relationships across global fine-chemical manufacturers. If your required intermediate isn't listed, reach out with the CAS number or synthesis route.
          </p>
          <button
            onClick={() => navigate('contact', { product: 'Custom intermediate sourcing enquiry' })}
            className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer outline-none inline-flex items-center gap-2"
          >
            Contact Sourcing Desk
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
