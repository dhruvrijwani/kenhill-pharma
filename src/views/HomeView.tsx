import { motion } from 'motion/react';
import React from 'react';
import { 
  ArrowRight, ShieldCheck, HeartPulse, BrainCircuit, Activity, Database, Sparkles, 
  FlaskConical, Truck, Check, ChevronRight, MessageSquare, ClipboardCheck, PhoneCall, Mail, Globe, Beaker
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface HomeViewProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function HomeView({ navigate }: HomeViewProps) {
  const stats = [
    { value: "400+", label: "Active Pharma Compounds", desc: "Vetted API monographs and certified intermediates." },
    { value: "18+", label: "Years Trading Presence", desc: "Decades of global sourcing, export & logistics expertise." },
    { value: "45+", label: "Trade Corridors Served", desc: "Direct distribution routes across regulated markets." },
    { value: "100%", label: "Traceability Assurance", desc: "Complete stability data, MSDS & DMF dossier compliance." }
  ];

  const therapeuticSegments = [
    {
      tag: "HIGH-DEMAND API PORTFOLIO",
      title: "Cardiovascular & Bone Health APIs",
      body: "Comprehensive trading portfolio of cardiovascular and bone health APIs with consistent quality and supply reliability. Our offerings support both regulated and semi-regulated markets.",
      bullets: ["Regulatory & DMF Support", "Multiple Qualified Sources"],
      icon: HeartPulse,
      slug: "cardiovascular"
    },
    {
      tag: "COMPLEX THERAPEUTIC APIS",
      title: "CNS & Neurological APIs",
      body: "Global trading and sourcing of Central Nervous System (CNS) and neurological APIs through trusted partners with proven quality systems, ensuring consistent supply for demanding therapeutic applications.",
      bullets: ["WHO-GMP Approved Facilities", "Stable Long-Term Supply"],
      icon: BrainCircuit,
      slug: "cns-neurological"
    },
    {
      tag: "CRITICAL SUPPORT AGENTS",
      title: "Oncology Support APIs",
      body: "Reliable trading and supply of oncology support APIs with consistent quality, validated batch testing, and regulatory documentation for critical therapeutic needs.",
      bullets: ["Anti-emetic APIs", "Supportive Care Molecules", "Regulatory Documentation Available"],
      icon: Sparkles,
      slug: "cns-neurological"
    },
    {
      tag: "STABLE GASTRO PIPELINES",
      title: "Gastrointestinal APIs",
      body: "A broad range of gastrointestinal APIs supplied with full quality, analytical testing, technical compliance reports, and deep export documentation support.",
      bullets: ["USP / BP / IP Grades", "Consistent Supply Chain", "Export-Ready Documentation"],
      icon: Activity,
      slug: "gastrointestinal"
    },
    {
      tag: "ADVANCED HIGH PURITY",
      title: "API Intermediates",
      body: "Trading and sourcing of specialized pharmaceutical drug intermediates through a verified, audited supplier network, ensuring quality consistency and commercial reliability.",
      bullets: ["Audited Supplier Base", "Consistent Quality Standards", "Commercial & Technical Support"],
      icon: Database,
      slug: "intermediates"
    }
  ];

  return (
    <div className="relative pt-20 overflow-hidden">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] flex items-center py-12 md:py-20 animate-fade-in" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full" id="hero-badge">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-2xs font-semibold uppercase tracking-wider text-primary">WHO-GMP & ISO COMPLIANT SUPPLY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-dark leading-[1.1]" id="hero-headline">
                Reliable Global <br className="hidden sm:block" />
                <span className="text-primary text-secondary">Pharmaceutical</span> <br className="hidden sm:block" />
                Trading Solutions
              </h1>

              <p className="text-sm sm:text-base text-text-muted max-w-xl leading-relaxed font-body">
                We specialize in the professional sourcing, compliance verification, and international trading of quality-assured pharmaceutical products. We ensure absolute regulatory compliance, consistency, and supply chain reliability across diverse global healthcare markets.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('apis')}
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-primary/25 flex items-center space-x-2 transition-all active:scale-95 cursor-pointer"
                  id="hero-cta-explore"
                >
                  <span>Explore Sourcing Catalog</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="bg-surface hover:bg-border-custom border border-border-custom text-text-dark text-xs font-semibold px-6 py-3.5 rounded-full transition-all active:scale-95 cursor-pointer"
                  id="hero-cta-contact"
                >
                  Contact Sourcing Desk
                </button>
              </div>

              {/* Quick Trust Badges in Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-custom max-w-lg">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">GST Certified</h4>
                  <p className="text-text-muted text-[10px] mt-1 font-mono font-medium">Official Trade ID</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">IEC Licenced</h4>
                  <p className="text-text-muted text-[10px] mt-1 font-mono font-medium">Authorized Exporter</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">DMF Sourced</h4>
                  <p className="text-text-muted text-[10px] mt-1 font-mono font-medium">Regulatory Dossiers</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Column - Sourced High-Fidelity Pharmaceutical Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-border-custom shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop" 
                  alt="High-fidelity pharmaceutical manufacturing solutions" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                  id="hero-visual-image"
                />
                
                {/* Visual Glassmorphed Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-section/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Sourcing Safety</span>
                  <p className="text-sm font-bold text-white leading-tight">
                    Strict Monograph Assays Only
                  </p>
                </div>

                {/* Glassmorphic Small Card overlay */}
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm border border-border-custom px-3 py-2 rounded-xl shadow-md flex items-center space-x-2">
                  <div className="w-5 h-5 bg-emerald-500/10 text-emerald-500 rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-text-dark font-extrabold">WHO-GMP Compliant Sourced</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <section className="bg-primary text-white py-12" id="trust-strip-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            <div className="md:col-span-1 border-r border-white/10 pr-6">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Trading Integrity</span>
              <h3 className="text-xl font-bold mt-1 text-white leading-tight">Your Professional Sourcing Partner</h3>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">WHO-GMP & ISO</h4>
                  <p className="text-[10px] text-white/70 mt-1">Compliance audited supply</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">Global Networks</h4>
                  <p className="text-[10px] text-white/70 mt-1">Trade routes in 45+ locations</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">DMF Ready Docs</h4>
                  <p className="text-[10px] text-white/70 mt-1">Stability and dossier support</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2.5 — KPI PERFORMANCE DASHBOARD */}
      <section className="py-16 bg-bg border-y border-border-custom" id="home-kpi-dashboard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-widest text-[#1A3A6B] font-extrabold">GLOBAL AUTHORITY METRICS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-dark mt-1">Sourcing Performance In Numbers</h2>
            <p className="text-xs text-text-muted mt-2">Quantitative benchmarks illustrating our compliance rigor and distribution continuity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-surface border border-border-custom hover:border-primary/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                id={`home-kpi-card-${idx}`}
              >
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-black text-[#1A3A6B] tracking-tight">
                    {stat.value}
                  </div>
                  <h4 className="text-xs font-bold text-text-dark uppercase tracking-wide">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-text-muted font-body leading-normal">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — THERAPEUTIC API PORTFOLIO */}
      <section className="py-20 bg-surface" id="portfolio-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-accent font-bold text-center block">Authoritative Catalog</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark underline-draw mx-auto inline-block pb-2">
              Therapeutic API Sourcing Divisions
            </h2>
            <p className="text-sm text-text-muted leading-relaxed font-body">
              Explore our structured Active Pharmaceutical Ingredients (APIs) and drug intermediates, sourced strictly from qualified facilities to maximize pharmaceutical grade safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapeuticSegments.map((segment) => {
              const IconComp = segment.icon;
              return (
                <div key={segment.title} id={`portfolio-card-${segment.slug}`}>
                  <AnimatedSection 
                    className="bg-bg border border-border-custom rounded-2xl p-6 hover:-translate-y-1.5 transition-all hover:shadow-xl hover:border-primary/20 flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      <span className="inline-block text-[9px] uppercase tracking-wider text-accent font-extrabold px-2 py-1 bg-accent/10 rounded-md">
                        {segment.tag}
                      </span>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <IconComp className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-md font-extrabold text-text-dark">{segment.title}</h3>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed font-body">{segment.body}</p>
                      
                      <div className="space-y-1.5 pt-2">
                        {segment.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-center space-x-2 text-[10px] text-text-dark font-medium">
                            <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border-custom/50 flex justify-between items-center">
                      <button
                        onClick={() => {
                          if (segment.slug === 'intermediates') {
                            navigate('apis'); // redirect smoothly as they are direct lists
                          } else {
                            navigate('apis');
                          }
                        }}
                        className="text-xs font-bold text-primary hover:text-primary-hover flex items-center space-x-1 outline-none cursor-pointer"
                      >
                        <span>Analyze Sourcing Portfolio</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>

          {/* Sourcing Banner at the bottom of portfolio section */}
          <div className="mt-16 bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-primary/15">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h3 className="text-lg font-bold">Commercial & Technical Sourcing Support</h3>
                <p className="text-xs text-white/80 leading-relaxed font-body">
                  Get in touch with our regulatory trade team for bulk API availability, custom specifications, open-part regulatory documentation, pricing structures, and export tracking assistance.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:info@kenhillpharma.com"
                  className="bg-accent hover:bg-accent/90 text-white text-xs font-bold px-6 py-3.5 rounded-full flex items-center space-x-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Email: info@kenhillpharma.com</span>
                </a>
                <a
                  href="tel:+919924073338"
                  className="bg-white/15 hover:bg-white/20 text-white border border-white/20 text-xs font-bold px-6 py-3.5 rounded-full flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>+91 9924073338</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — GLOBAL COMPLIANCE PILLARS */}
      <section className="py-20 bg-bg" id="compliance-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Text */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Global Sourcing Capacity</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark leading-tight">
                Quality Assurance Sourcing Controls & Compliance
              </h2>
              <p className="text-sm text-text-muted leading-relaxed font-body">
                Ken Hill Pharma Limited stands as an authorized and globally trusted pharmaceutical trading and sourcing corporation. Backed by highly vetted synthesis centers and logistic networks, we streamline chemical commodities flow securely across borders.
              </p>

              {/* Servicing Pillars */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1 flex-shrink-0 animate-pulse">
                    <FlaskConical className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-dark">API & Drug Intermediates Trading</h3>
                    <p className="text-xs text-text-muted leading-normal mt-0.5 font-body">Comprehensive global trading of active parameters supported fully by batch chromatography COAs, safety MSDS reports, and chemical specifications.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1 flex-shrink-0">
                    <ClipboardCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-dark">Analytical Quality Validation</h3>
                    <p className="text-xs text-text-muted leading-normal mt-0.5 font-body">Rigorous physical checks ensure that raw biochemical parameters meet structural assays, completely eliminating supply risk profiles.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1 flex-shrink-0">
                    <Truck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-dark">Regulatory & Export Logistical Support</h3>
                    <p className="text-xs text-text-muted leading-normal mt-0.5 font-body">End-to-end documentation control covering stability data filings, customs regulatory clearings, and country-specific shipment clearance documents.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('about')}
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-primary/15 transition-all"
                >
                  Our Compliance Profile
                </button>
              </div>
            </div>

            {/* Right Strategic Photo instead of simple block to elevate visual feel */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border-custom h-[380px]">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351167?q=80&w=800&auto=format&fit=crop"
                alt="Ken Hill high contrast diagnostic laboratories"
                className="w-full h-full object-cover select-none"
                referrerPolicy="referrer"
                id="compliance-section-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-section/90 via-dark-section/50 to-transparent p-8 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-accent font-extrabold pb-1">Vetted partner lab</span>
                <h4 className="text-lg font-bold text-white mb-2">High Assay Verification Centers</h4>
                <p className="text-xs text-white/80 leading-relaxed font-body">All synthesis locations conform with advanced structural batch validation protocols dynamically.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — VALUE COMMITMENT BANNER (Safe from contrast errors) */}
      <section className="bg-dark-section rounded-none py-16 text-white text-center" id="value-strip-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <FlaskConical className="w-10 h-10 text-accent mx-auto" />
          <h3 className="text-2xl font-bold">Uncompromised Sourcing Quality Standards</h3>
          <p className="text-xs text-white/80 max-w-2xl mx-auto leading-relaxed font-body">
            We provide full logistical safety. All bulk deliveries are dispatched with original synthesis manufacturer COAs, safety data sheets (MSDS), and strict regulatory filings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold pt-2">
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/5">IP, BP, USP, EP Grade Sourced</span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/5">Custom Seal Cargo Shipping</span>
            <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/5">Complete Trade Compliance</span>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CONTACT / CTA BANNER (High contrast dark solid background) */}
      <section className="py-20 bg-bg" id="home-cta-contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-section rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Connect with Our Trading Experts</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Looking for a Reliable Pharmaceutical Supply Core?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto font-body">
                Speak directly with our experienced commercial trade and regulatory professionals for rapid pricing quotations, bulk sample inquiries, and comprehensive import/export documentation assistance.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate('contact')}
                  className="bg-accent hover:bg-accent/90 text-white text-xs font-bold px-8 py-4 rounded-full shadow-lg shadow-accent/20 transition-all cursor-pointer outline-none"
                  id="final-cta-btn"
                >
                  Contact Sourcing Office
                </button>
                <a
                  href="mailto:info@kenhillpharma.com"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold px-8 py-4 rounded-full transition-all flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>info@kenhillpharma.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
