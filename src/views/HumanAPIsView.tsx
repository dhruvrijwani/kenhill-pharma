import React from 'react';
import { ChevronRight, FlaskConical, ArrowRight, Microscope } from 'lucide-react';
import { motion } from 'motion/react';
import { humanAPICategories } from '../data/human-apis';
import AnimatedSection from '../components/AnimatedSection';

interface HumanAPIsViewProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function HumanAPIsView({ navigate }: HumanAPIsViewProps) {
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
            <span className="cursor-pointer hover:text-primary transition-colors">APIs</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-dark font-semibold">Human</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Human API Portfolio</span>
              <h1 className="text-4xl font-extrabold tracking-tight text-text-dark">
                Human Active Pharmaceutical Ingredients
              </h1>
              <p className="text-sm text-text-muted leading-relaxed">
                Explore our comprehensive portfolio of {humanAPICategories.length} therapeutic categories spanning{' '}
                {humanAPICategories.reduce((sum, c) => sum + c.products.length, 0)}+ curated APIs. All sourced from
                WHO-GMP-certified manufacturing units with complete regulatory documentation support.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-primary">{humanAPICategories.length}</p>
                <p className="text-[10px] text-text-muted uppercase tracking-wide font-semibold">Categories</p>
              </div>
              <div className="w-px h-10 bg-border-custom" />
              <div className="text-center">
                <p className="text-2xl font-extrabold text-primary">
                  {humanAPICategories.reduce((sum, c) => sum + c.products.length, 0)}+
                </p>
                <p className="text-[10px] text-text-muted uppercase tracking-wide font-semibold">APIs Listed</p>
              </div>
              <div className="w-px h-10 bg-border-custom" />
              <div className="text-center">
                <p className="text-2xl font-extrabold text-primary">WHO</p>
                <p className="text-[10px] text-text-muted uppercase tracking-wide font-semibold">GMP Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {humanAPICategories.map((category, idx) => (
            <AnimatedSection key={category.slug}>
              <motion.button
                onClick={() => navigate('human-api-category', { category: category.slug })}
                className="w-full text-left group bg-surface border border-border-custom rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Category image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-section/80 via-dark-section/20 to-transparent" />

                  {/* API count badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
                      {category.products.length} APIs
                    </span>
                  </div>

                  {/* Category name on image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-white font-extrabold text-base leading-tight drop-shadow-md">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-border-custom/50">
                    <span className="text-[10px] text-text-muted font-medium uppercase tracking-wide">
                      View all APIs
                    </span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 inline-flex">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.button>
            </AnimatedSection>
          ))}
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="bg-dark-section rounded-2xl p-8 text-white text-center space-y-4 shadow-xl border border-white/5">
          <div className="flex justify-center gap-3 mb-2">
            <FlaskConical className="w-8 h-8 text-accent" />
            <Microscope className="w-8 h-8 text-accent/70" />
          </div>
          <h3 className="text-lg font-bold">Complete Regulatory Documentation</h3>
          <p className="text-xs text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every API in our human portfolio comes with full COA, stability data per ICH guidelines, US-DMF / EU-CEP
            dossier assistance, and WHO-GMP certified manufacturing traceability.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold pt-2">
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/10">USFDA DMF Support</span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/10">EU-CEP Compliance</span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/10">WHO-GMP Certified</span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/10">ICH Stability Data</span>
          </div>
          <button
            onClick={() => navigate('contact')}
            className="mt-4 bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer outline-none inline-flex items-center gap-2"
          >
            Request API Portfolio Brochure
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
