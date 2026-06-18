import React from 'react';
import { ChevronRight, ArrowRight, FlaskConical, Search, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { humanAPICategories } from '../data/human-apis';
import AnimatedSection from '../components/AnimatedSection';

interface HumanAPICategoryViewProps {
  categorySlug: string;
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function HumanAPICategoryView({ categorySlug, navigate }: HumanAPICategoryViewProps) {
  const category = humanAPICategories.find(c => c.slug === categorySlug);

  // Fallback for unknown category slug
  if (!category) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-text-dark">Category Not Found</h1>
        <p className="text-text-muted text-sm">The category you are looking for does not exist.</p>
        <button
          onClick={() => navigate('human-apis')}
          className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-5 py-2.5 rounded-full mt-2"
        >
          Back to Human APIs
        </button>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* BREADCRUMB */}
        <div className="flex items-center flex-wrap gap-1 text-xs text-text-muted">
          <span className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('home')}>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="cursor-pointer hover:text-primary transition-colors">Products</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="cursor-pointer hover:text-primary transition-colors">APIs</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('human-apis')}>Human</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-dark font-semibold">{category.name}</span>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Hero Image */}
          <motion.div
            className="lg:col-span-5 rounded-2xl relative overflow-hidden min-h-[280px] shadow-lg border border-border-custom"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-section/95 via-dark-section/60 to-dark-section/20 flex flex-col justify-end p-7 space-y-3">
              <span className="text-[9px] uppercase tracking-widest bg-accent text-white px-2.5 py-0.5 rounded font-extrabold self-start">
                Human API Category
              </span>
              <h1 className="text-2xl font-extrabold text-white leading-tight">
                {category.name}
              </h1>
              <p className="text-xs text-white/75 leading-relaxed font-body">
                {category.description}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <span className="bg-white/15 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                  {category.products.length} APIs Available
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                  WHO-GMP
                </span>
              </div>
            </div>
          </motion.div>

          {/* Category info panel */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-bold">API Portfolio</span>
              <h2 className="text-3xl font-extrabold text-text-dark mt-2 leading-tight">
                {category.name} APIs
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mt-3 max-w-lg">
                {category.description}
              </p>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-surface border border-border-custom rounded-xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-text-dark">Regulatory Ready</p>
                  <p className="text-[10px] text-text-muted mt-0.5">COA, DMF & CEP support</p>
                </div>
              </div>
              <div className="bg-surface border border-border-custom rounded-xl p-4 flex items-start gap-3">
                <FlaskConical className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-text-dark">USP / EP / BP</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Pharmacopoeial grade APIs</p>
                </div>
              </div>
              <div className="bg-surface border border-border-custom rounded-xl p-4 flex items-start gap-3">
                <Search className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-text-dark">Full Traceability</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Batch-to-batch documentation</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('contact', { product: `Human API - ${category.name}` })}
              className="self-start bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer outline-none inline-flex items-center gap-2"
            >
              Request Category Brochure
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>

        {/* PRODUCTS SECTION HEADER */}
        <div className="flex items-center justify-between border-b border-border-custom pb-4">
          <div>
            <h3 className="text-xl font-extrabold text-text-dark">
              All {category.name} APIs
            </h3>
            <p className="text-xs text-text-muted mt-1">
              {category.products.length} compounds available — click any to request a quote
            </p>
          </div>
          <button
            onClick={() => navigate('human-apis')}
            className="text-xs font-semibold text-primary hover:text-accent flex items-center gap-1 outline-none"
          >
            ← All Categories
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.products.map((product, idx) => (
            <AnimatedSection key={product.id}>
              <div className="bg-surface border border-border-custom rounded-xl p-5 hover:border-primary/25 hover:shadow-lg transition-all duration-200 flex flex-col h-full">

                {/* Product header */}
                <div className="flex items-start justify-between pb-3 border-b border-border-custom/50 mb-3">
                  <span className="text-[9px] uppercase font-bold text-accent tracking-wider leading-none">
                    CAS: {product.casNumber}
                  </span>
                  <span className="text-[8px] bg-emerald-500/10 text-emerald-600 font-extrabold px-1.5 py-0.5 rounded uppercase leading-none">
                    WHO-GMP
                  </span>
                </div>

                {/* Product name */}
                <div className="flex-1 space-y-2 mb-4">
                  <h4 className="text-base font-extrabold text-text-dark leading-snug">
                    {product.name}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-3 border-t border-border-custom/40 flex items-center justify-between">
                  <button
                    onClick={() => navigate('contact', { product: `${category.name} — ${product.name} (CAS: ${product.casNumber})` })}
                    className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 outline-none cursor-pointer transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[9px] text-text-muted font-mono">
                    #{product.id}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="bg-dark-section rounded-2xl p-8 text-white text-center space-y-4 shadow-xl border border-white/5">
          <FlaskConical className="w-9 h-9 text-accent mx-auto" />
          <h3 className="text-lg font-bold">Need Custom Quantities or Specifications?</h3>
          <p className="text-xs text-white/80 max-w-xl mx-auto leading-relaxed">
            Our commercial team handles bulk sourcing, custom pack sizes, and regulatory filing support for{' '}
            {category.name.toLowerCase()} APIs. Reach out with your requirements.
          </p>
          <button
            onClick={() => navigate('contact', { product: `Bulk enquiry — ${category.name} APIs` })}
            className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer outline-none inline-flex items-center gap-2"
          >
            Contact Commercial Team
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
