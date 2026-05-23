import React from 'react';
import { cardiovascularAPIs } from '../data/apis/cardiovascular';
import { cnsNeurologicalAPIs } from '../data/apis/cns-neurological';
import { gastrointestinalAPIs } from '../data/apis/gastrointestinal';
import { respiratoryAPIs } from '../data/apis/respiratory';
import { endocrineMetabolicAPIs } from '../data/apis/endocrine-metabolic';
import { ChevronRight, FlaskConical, Beaker, ShieldCheck, ArrowRight, Dna } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface APIProductsViewProps {
  initialCategory?: string;
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function APIProductsView({ navigate }: APIProductsViewProps) {
  const sections = [
    {
      slug: "cardiovascular",
      title: "→ Cardiovascular",
      tag: "Osteoporosis & Cardiology Care",
      apis: cardiovascularAPIs,
      description: "High-purity regulatory molecules targeting postwar bone density remodeling, calcium regulation, and cardiovascular tissue support profiles.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"
    },
    {
      slug: "cns-neurological",
      title: "→ CNS & Neurological",
      tag: "Skeletal Muscle & Neuro System Active Components",
      apis: cnsNeurologicalAPIs,
      description: "Active skeletal muscle relaxants, clinical anticonvulsants, and brain receptors regulatory derivatives compiled under strict WHO-GMP oversight.",
      image: "https://images.unsplash.com/photo-1581093588401-f5c32e58b953?q=80&w=600&auto=format&fit=crop"
    },
    {
      slug: "gastrointestinal",
      title: "→ Gastrointestinal",
      tag: "Gastric Secretions & Peristaltic Regulators",
      apis: gastrointestinalAPIs,
      description: "Advanced stimulant laxatives, anti-secretory diagnostic controllers, and specialized therapeutic gastrointestinal compounds.",
      image: "https://images.unsplash.com/photo-1617886903355-9354fa5893ef?q=80&w=600&auto=format&fit=crop"
    },
    {
      slug: "respiratory",
      title: "→ Respiratory",
      tag: "Anti-Gout & Airway Clearance APIs",
      apis: respiratoryAPIs,
      description: "Clinically validated xanthine oxidase inhibitors and respiratory regulators supporting chronic metabolic maintenance profiles.",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop"
    },
    {
      slug: "endocrine-metabolic",
      title: "→ Endocrine & Metabolic",
      tag: "Aldosterone Blockers & Diuretics Corridor",
      apis: endocrineMetabolicAPIs,
      description: "Premium renin-angiotensin loop agents, high-potency diuretics, and aldosterone antagonists engineered for stable fluid balances.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* VIEW HEADER */}
        <div className="border-b border-border-custom pb-8">
          <div className="flex items-center space-x-2 text-xs text-text-muted mb-3" id="api-breadcrumb">
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('home')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-dark font-semibold">Active APIs Sourcing Catalog</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">API PORTFOLIO DIVISION</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-dark">
              Active Pharmaceutical Ingredients (APIs)
            </h1>
            <p className="text-sm text-text-muted leading-relaxed">
              Explore our master database of 18 therapeutic active molecules, structured precisely into 5 specialized systemic lines. Sourced strictly from audited, WHO-GMP-certified facilities with complete regulatory documentation support.
            </p>
          </div>
        </div>

        {/* 5 THERAPEUTIC SECTIONS */}
        <div className="space-y-20">
          {sections.map((section, idx) => (
            <div key={section.slug} className="scroll-mt-24 space-y-8" id={`division-section-${section.slug}`}>
              
              {/* SECTION HEADER BLOCK */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-custom/60 pb-4 gap-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-extrabold text-primary flex items-center gap-2">
                    <Dna className="w-6 h-6 text-accent" />
                    <span>{section.title}</span>
                  </h2>
                  <p className="text-xs uppercase text-accent tracking-wider font-semibold">{section.tag}</p>
                </div>
                <p className="text-xs text-text-muted max-w-md font-body leading-relaxed md:text-right">
                  {section.description}
                </p>
              </div>

              {/* SECTION GRID LAYOUT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* DIVISION CARD BANNER BACKGROUND IMAGE (4 Columns, high contrast dark overlay) */}
                <div className="lg:col-span-4 rounded-2xl relative overflow-hidden min-h-[180px] lg:min-h-auto shadow-md border border-border-custom">
                  {/* Curated Background image */}
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                    id={`section-img-${section.slug}`}
                  />
                  {/* High contrast dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-section/95 via-dark-section/80 to-dark-section/40 flex flex-col justify-end p-6 space-y-2">
                    <span className="text-[9px] uppercase tracking-widest bg-accent text-white px-2.5 py-0.5 rounded font-extrabold self-start">
                      Active segment
                    </span>
                    <h3 className="text-md font-bold text-white leading-tight">
                      Ken Hill Sourced {section.slug.charAt(0).toUpperCase() + section.slug.slice(1).replace('-', ' ')}
                    </h3>
                    <p className="text-[11px] text-white/80 leading-relaxed font-body">
                      Tested up to USP, EP, or BP monograph compliances as standard.
                    </p>
                  </div>
                </div>

                {/* API MOLECULE CARDS GRID LIST (8 Columns) */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.apis.map((api) => (
                    <div key={api.slug} className="flex">
                      <AnimatedSection
                        className="w-full bg-surface border border-border-custom rounded-xl p-5 hover:border-primary/20 hover:shadow-lg transition-all flex flex-col justify-between h-full"
                      >
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b border-border-custom/45">
                            <span className="text-[9px] uppercase font-bold text-accent tracking-wider leading-none">
                              CAS ID: {api.casNumber}
                            </span>
                            <span className="text-[8px] bg-emerald-500/10 text-emerald-500 font-extrabold px-1.5 py-0.5 rounded uppercase leading-none">
                              WHO-GMP
                            </span>
                          </div>

                          <div>
                            <h4 className="text-base font-extrabold text-text-dark leading-snug">
                              {api.name}
                            </h4>
                            <span className="inline-block text-[9px] text-text-muted mt-0.5 font-mono">
                              Grade: <span className="text-text-dark font-bold">{api.grade}</span>
                            </span>
                          </div>

                          <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                            {api.intro}
                          </p>

                          <div className="bg-bg rounded-lg p-2.5 border border-border-custom/40 flex items-center justify-between text-[10px] text-text-dark font-medium">
                            <span className="text-text-muted">Primary Pack:</span>
                            <span className="font-semibold truncate max-w-[120px]">{api.packaging.primary}</span>
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-border-custom/40">
                          <button
                            onClick={() => navigate('api-detail', { slug: api.slug })}
                            className="text-xs font-bold text-primary hover:text-accent flex items-center space-x-1 outline-none cursor-pointer"
                          >
                            <span>Analyze Monograph</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </AnimatedSection>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* COMPREHENSIVE REGULATORY BADGE BLOCK (Safe from light-on-white text issues) */}
        <div className="bg-dark-section rounded-2xl p-8 text-white text-center space-y-4 shadow-xl border border-white/5">
          <FlaskConical className="w-10 h-10 text-accent mx-auto" />
          <h3 className="text-lg font-bold">Comprehensive Global Sourcing Standards</h3>
          <p className="text-xs text-white/80 max-w-2xl mx-auto leading-relaxed">
            All our Active Pharmaceutical Ingredients (APIs) and chemical compounds undergo rigorous validation. We provide comprehensive COA verification, stability studies compliant with ICH guidelines, and complete US-DMF / EU-CEP technical dossier assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold pt-2">
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/10">USFDA DMF Sourcing Support</span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/10">EU-CEP Technical Compliance</span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/10">WHO-GMP Inspected Units</span>
          </div>
        </div>

      </div>
    </div>
  );
}
