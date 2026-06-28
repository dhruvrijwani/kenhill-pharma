import React from 'react';
import { ChevronRight, ArrowRight, Beaker, FlaskConical } from 'lucide-react';
import { solventsData } from '../data/solvents';
import AnimatedSection from '../components/AnimatedSection';

interface SolventsViewProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function SolventsView({ navigate }: SolventsViewProps) {
  return (
    <div className="relative pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">

        {/* BREADCRUMB + HEADER */}
        <div className="border-b border-border-custom pb-8">
          <div className="flex items-center flex-wrap gap-1 text-xs text-text-muted mb-4">
            <span className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('home')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="cursor-pointer hover:text-primary transition-colors">Products</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-dark font-semibold">Solvents</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Industrial Solvent Trading</span>
              <h1 className="text-4xl font-extrabold tracking-tight text-text-dark">
                Solvents
              </h1>
              <p className="text-sm text-text-muted leading-relaxed">
                High-purity industrial and pharma-grade solvents sourced for paints, coatings, pharmaceutical
                extraction, and chemical manufacturing applications. Bulk and custom pack sizes available.
              </p>
            </div>

            <div className="text-center shrink-0">
              <p className="text-2xl font-extrabold text-primary">{solventsData.length}</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wide font-semibold">Solvents Listed</p>
            </div>
          </div>
        </div>

        {/* SOLVENTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solventsData.map((solvent) => (
            <AnimatedSection key={solvent.slug}>
              <div className="bg-surface border border-border-custom rounded-xl p-6 h-full flex flex-col justify-between hover:border-primary/25 hover:shadow-lg transition-all duration-200">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full text-primary text-[10px] font-extrabold uppercase tracking-wider font-mono">
                      CAS {solvent.casNumber}
                    </span>
                    <FlaskConical className="w-4 h-4 text-accent" />
                  </div>

                  <h3 className="text-base font-extrabold text-text-dark leading-snug">
                    {solvent.name}
                  </h3>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {solvent.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-custom/50">
                  <button
                    onClick={() => navigate('contact', { product: `${solvent.name} (CAS: ${solvent.casNumber})` })}
                    className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 outline-none cursor-pointer transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="bg-dark-section rounded-2xl p-8 text-white text-center space-y-4 shadow-xl border border-white/5">
          <Beaker className="w-9 h-9 text-accent mx-auto" />
          <h3 className="text-lg font-bold">Bulk Solvent Sourcing & Custom Packaging</h3>
          <p className="text-xs text-white/80 max-w-xl mx-auto leading-relaxed">
            Our trading desk handles bulk drums, ISO tankers, and custom pack sizes across all listed solvents,
            with full COA and MSDS documentation support for every shipment.
          </p>
          <button
            onClick={() => navigate('contact', { product: 'Bulk solvent sourcing enquiry' })}
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
