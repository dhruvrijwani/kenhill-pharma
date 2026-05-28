
import { motion } from 'motion/react';
import React from 'react';
import { 
  ArrowRight, ShieldCheck, HeartPulse, BrainCircuit, Activity, Database, Sparkles, 
  FlaskConical, Truck, Check, ChevronRight, MessageSquare, ClipboardCheck, PhoneCall, Mail, Globe, Beaker,
  Award, TrendingUp, Landmark, Compass, ShieldAlert, Layers
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface HomeViewProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function HomeView({ navigate }: HomeViewProps) {
  // Enhanced Core Stats incorporating your direct turnover parameters
  const stats = [
    { value: "25+", label: "Years Established", desc: "Decades of cross-border pharma trading and enterprise sourcing." },
    { value: "₹400 Cr+", label: "Annual Turnover", desc: "Robust financial capacity backing large-scale global trade contracts." },
    { value: "25+", label: "MNC Tie-ups", desc: "Direct trading partnerships with global tier-1 manufacturers." },
    { value: "1000+", label: "Formulations Supported", desc: "Active parameters deployed across diverse domestic pipelines." }
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
      slug: "oncology" // Fixed structural array duplication bug
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
    <div className="relative pt-20 overflow-hidden bg-bg">
      
      {/* Background Architectural Grid Pattern - Removes empty whitespace feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none z-0" />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[90vh] flex items-center py-12 md:py-24 z-10" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded" id="hero-badge">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-2xs font-semibold uppercase tracking-wider text-primary">25 Years of Trading Excellence & Compliance</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-dark leading-[1.15]" id="hero-headline">
                High-Scale Global <br className="hidden sm:block" />
                <span className="text-primary">Pharmaceutical</span> Sourcing <br />
                & Bulk Trade Infrastructure
              </h1>

              <p className="text-sm sm:text-base text-text-muted max-w-xl leading-relaxed font-body">
                With a ₹400 Cr corporate turnover, we operate authoritative trade lines spanning tier-1 manufacturing hubs and high-regulation global corridors. Absolute compliance, continuous distribution, and direct supplier integration.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('apis')}
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-6 py-4 rounded shadow-lg shadow-primary/25 flex items-center space-x-2 transition-all active:scale-95 cursor-pointer"
                  id="hero-cta-explore"
                >
                  <span>Explore Sourcing Catalog</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="bg-surface hover:bg-border-custom border border-border-custom text-text-dark text-xs font-semibold px-6 py-4 rounded transition-all active:scale-95 cursor-pointer"
                  id="hero-cta-contact"
                >
                  Contact Sourcing Desk
                </button>
              </div>

              {/* B2B Industry Parameters */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-custom max-w-lg">
                <div className="bg-surface/60 backdrop-blur-xs p-3 rounded border border-border-custom/60">
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">API Trading</h4>
                  <p className="text-text-muted text-[10px] mt-1 font-mono font-medium">25+ Global MNCs</p>
                </div>
                <div className="bg-surface/60 backdrop-blur-xs p-3 rounded border border-border-custom/60">
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">Solvents</h4>
                  <p className="text-text-muted text-[10px] mt-1 font-mono font-medium">Imported Directly</p>
                </div>
                <div className="bg-surface/60 backdrop-blur-xs p-3 rounded border border-border-custom/60">
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">Agrochemicals</h4>
                  <p className="text-text-muted text-[10px] mt-1 font-mono font-medium">Domestic Supply</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Column - Image 1 [Lab Environment] */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-border-custom shadow-2xl bg-surface">
                {/* Network nodes matrix decoration layer to remove emptiness */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
                  alt="Quality assurance verification assay lab panel" 
                  className="w-full h-full object-cover select-none z-10"
                  referrerPolicy="no-referrer"
                  id="hero-visual-image"
                />
                
                {/* Solid Info Panel Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-dark-section p-5 border-t border-white/10 z-20">
                  <div className="flex items-center space-x-3 mb-1">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Traceability Matrix</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Strict Monograph Verification & Quality Assured Supply
                  </h4>
                </div>

                {/* Industrial Floating Badge */}
                <div className="absolute top-4 right-4 bg-surface px-3 py-2 rounded shadow-md border border-border-custom flex items-center space-x-2 z-20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] uppercase tracking-wider text-text-dark font-extrabold">₹400 Cr Capacity Verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — INDUSTRIAL PERFORMANCE METRICS STRIP */}
      <section className="bg-dark-section text-white py-14 relative z-10" id="home-kpi-dashboard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 p-6 rounded relative overflow-hidden group hover:bg-white/[0.08] transition-colors"
                id={`home-kpi-card-${idx}`}
              >
                <div className="absolute top-0 right-0 p-2 opacity-5 text-white text-4xl font-mono font-bold select-none">
                  {idx + 1}
                </div>
                <div className="space-y-1.5">
                  <div className="text-3xl font-black text-accent tracking-tight">
                    {stat.value}
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                    {stat.label}
                  </h4>
                  <div className="w-6 h-[2px] bg-accent/40 my-1 group-hover:w-12 transition-all" />
                  <p className="text-[11px] text-white/70 font-body leading-normal">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE GLOBAL SOURCING & EXPORT MATRIX ROADMAP */}
      <section className="py-20 bg-surface relative z-10 border-b border-border-custom" id="global-logistics-matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-primary font-bold block">Supply Chain Corridors</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark">
              International Procurement & Distribution Map
            </h2>
            <p className="text-sm text-text-muted max-w-xl mx-auto">
              Strategic trans-border structures coordinating raw biochemical compounds from manufacturing centers directly to highly regulated markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Corridor: Sourcing Hubs */}
            <div className="lg:col-span-4 bg-bg border border-border-custom p-6 rounded flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-text-dark">Primary Sourcing Corridors</h3>
                <p className="text-xs text-text-muted font-body leading-relaxed">
                  We maintain long-term bulk agreements with authorized chemical synthesizers and chemical refineries inside primary trade zones.
                </p>
                <div className="h-[1px] bg-border-custom w-full my-2" />
                <div className="grid grid-cols-2 gap-2">
                  {["China", "South Korea", "Japan", "Saudi Arabia", "Kuwait", "Oman", "Bahrain"].map((country) => (
                    <div key={country} className="flex items-center space-x-2 bg-surface p-2 rounded border border-border-custom/50 text-xs font-semibold text-text-dark">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{country}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-text-muted font-mono mt-6 pt-4 border-t border-border-custom/60">
                * Includes strict entry verification matching USP/BP criteria.
              </p>
            </div>

            {/* Middle Section: Image 2 [Logistics Operations] */}
            <div className="lg:col-span-4 relative rounded overflow-hidden min-h-[320px] shadow-md border border-border-custom">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
                alt="Global container terminal drug trade pipeline operations"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent p-6 flex flex-col justify-end text-white">
                <h4 className="text-sm font-extrabold tracking-tight">Direct Solvent Imports</h4>
                <p className="text-[11px] text-white/80 font-body mt-1 leading-normal">
                  Bulk solvent cargo is container-shipped continuously under original chemical synthesis stamps.
                </p>
              </div>
            </div>

            {/* Right Corridor: Export Destinations */}
            <div className="lg:col-span-4 bg-bg border border-border-custom p-6 rounded flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-text-dark">Target Export Markets</h3>
                <p className="text-xs text-text-muted font-body leading-relaxed">
                  We deploy validated clearance methodologies to securely export compounds across crucial health regions.
                </p>
                <div className="h-[1px] bg-border-custom w-full my-2" />
                <div className="space-y-2">
                  {[
                    { title: "GCC Countries", area: "Arabian Peninsula Trade Block" },
                    { title: "Latin America", area: "Regulated Healthcare Entities" },
                    { title: "Egypt", area: "North African Channels" },
                    { title: "Turkey", area: "Eurasian Cross-Border Markets" }
                  ].map((market) => (
                    <div key={market.title} className="bg-surface p-2 rounded border border-border-custom/50 flex justify-between items-center text-xs font-semibold text-text-dark">
                      <span>{market.title}</span>
                      <span className="text-[10px] text-text-muted font-normal font-mono">{market.area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-text-muted font-mono mt-6 pt-4 border-t border-border-custom/60">
                * Complete dossier support mapping customs logs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — THERAPEUTIC API PORTFOLIO GRID */}
      <section className="py-20 bg-bg relative z-10" id="portfolio-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-primary font-bold block">Authoritative Catalog</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark">
              Therapeutic API Sourcing Divisions
            </h2>
            <p className="text-sm text-text-muted font-body">
              Explore our structured Active Pharmaceutical Ingredients (APIs) and drug intermediates, sourced strictly from qualified facilities to maximize pharmaceutical grade safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapeuticSegments.map((segment) => {
              const IconComp = segment.icon;
              return (
                <div key={segment.title} id={`portfolio-card-${segment.slug}`} className="h-full">
                  <AnimatedSection 
                    className="bg-surface border border-border-custom rounded p-6 hover:border-primary/30 transition-all hover:shadow-xl flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      <span className="inline-block text-[9px] uppercase tracking-wider text-accent font-extrabold px-2 py-1 bg-accent/10 rounded-sm">
                        {segment.tag}
                      </span>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/5 border border-primary/10 rounded flex items-center justify-center text-primary shadow-xs">
                          <IconComp className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-sm font-extrabold text-text-dark">{segment.title}</h3>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed font-body">{segment.body}</p>
                      
                      <div className="space-y-1.5 pt-2">
                        {segment.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-center space-x-2 text-[11px] text-text-dark font-medium">
                            <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border-custom flex justify-between items-center">
                      <button
                        onClick={() => navigate('apis')}
                        className="text-xs font-bold text-primary hover:text-primary-hover flex items-center space-x-1 outline-none cursor-pointer transition-colors"
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

          {/* Sourcing Banner - Image 3 Inside Split Panel Container */}
          <div className="mt-16 bg-surface border border-border-custom rounded overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-4 h-full min-h-[200px] relative">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"
                alt="Pharmaceutical technical analytical evaluation desk"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-8 p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h3 className="text-lg font-bold text-text-dark flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  Commercial & Technical Sourcing Support
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-body">
                  Get in touch with our regulatory trade team for bulk API availability, custom specifications, open-part regulatory documentation, pricing structures, and export tracking assistance.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="mailto:info@kenhillpharma.com"
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-5 py-3 rounded flex items-center space-x-2 transition-all active:scale-95 cursor-pointer shadow-md"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>info@kenhillpharma.com</span>
                </a>
                <a
                  href="tel:+919924073338"
                  className="bg-bg hover:bg-border-custom text-text-dark border border-border-custom text-xs font-bold px-5 py-3 rounded flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-text-muted" />
                  <span>+91 9924073338</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — COMPLIANCE STRATEGY & DUAL-TRACK TRADING */}
      <section className="py-20 bg-surface border-t border-b border-border-custom relative z-10" id="compliance-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-accent font-bold block">Audited Operations Architecture</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark leading-tight">
                Quality Verification, Sourcing Control & Market Systems
              </h2>
              <p className="text-sm text-text-muted leading-relaxed font-body">
                Ken Hill Pharma Limited maintains rigorous verification checkpoints spanning international acquisition lines to downstream trading networks. We operate explicit execution channels to eliminate delivery disruption risks.
              </p>

              {/* Enhanced Grid Blocks to clear up layout emptiness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-bg rounded border border-border-custom">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-text-dark uppercase tracking-wide">Imported Solvents Flow</h3>
                  <p className="text-[11px] text-text-muted font-body mt-1 leading-normal">
                    Direct cargo supply management of raw industrial solvents monitored continuously through high-purity tank protocols.
                  </p>
                </div>

                <div className="p-4 bg-bg rounded border border-border-custom">
                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent mb-3">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-text-dark uppercase tracking-wide">Agrochemical Lines</h3>
                  <p className="text-[11px] text-text-muted font-body mt-1 leading-normal">
                    Structured domestic trading systems supplying pure agro-chemical inputs directly to certified domestic operations.
                  </p>
                </div>

                <div className="p-4 bg-bg rounded border border-border-custom">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <ClipboardCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-text-dark uppercase tracking-wide">Analytical Validation</h3>
                  <p className="text-[11px] text-text-muted font-body mt-1 leading-normal">
                    Rigorous analysis guarantees batch consistency, eliminating impurity variances before customs clearance loops.
                  </p>
                </div>

                <div className="p-4 bg-bg rounded border border-border-custom">
                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent mb-3">
                    <Truck className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-text-dark uppercase tracking-wide">Logistical Governance</h3>
                  <p className="text-[11px] text-text-muted font-body mt-1 leading-normal">
                    End-to-end trace parameters handling stability filings, custom approvals, and destination clearance documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Column - Image 4 [Chemical Plant/Refinery Sourcing] */}
            <div className="lg:col-span-5 relative h-[450px] rounded overflow-hidden shadow-2xl border border-border-custom">
              <img 
                src="https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?q=80&w=800&auto=format&fit=crop"
                alt="Modern chemical synthesis production plant refining columns"
                className="w-full h-full object-cover select-none"
                referrerPolicy="referrer"
                id="compliance-section-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-section/95 via-dark-section/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold pb-0.5">Vetted Trans-Border Networks</span>
                <h4 className="text-base font-bold text-white mb-1">High-Assay Verification Protocols</h4>
                <p className="text-xs text-white/70 font-body leading-relaxed">
                  All synthesis coordinates conform systematically with international pharmacopoeia standards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — CONVERSION VALUE FOOTER PILL ROW */}
      <section className="bg-dark-section py-16 text-white text-center relative z-10" id="value-strip-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <FlaskConical className="w-10 h-10 text-accent mx-auto" />
          <h3 className="text-2xl font-bold tracking-tight">Uncompromised Sourcing Quality Standards</h3>
          <p className="text-xs text-white/80 max-w-xl mx-auto leading-relaxed font-body">
            We provide full logistical safety. All bulk deliveries are dispatched with original synthesis manufacturer COAs, safety data sheets (MSDS), and strict regulatory filings.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold pt-2">
            <span className="bg-white/5 px-4 py-1.5 rounded border border-white/10">IP, BP, USP, EP Grade Sourced</span>
            <span className="bg-white/5 px-4 py-1.5 rounded border border-white/10">Custom Seal Cargo Shipping</span>
            <span className="bg-white/5 px-4 py-1.5 rounded border border-white/10">Complete Trade Compliance</span>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CONVERSION CTA DESK */}
      <section className="py-20 bg-bg relative z-10" id="home-cta-contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface border border-border-custom rounded p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs uppercase tracking-widest text-primary font-bold block">Connect with Our Trading Experts</span>
              <h2 className="text-3xl font-extrabold text-text-dark tracking-tight">
                Looking for a Reliable Pharmaceutical Supply Core?
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-body max-w-xl mx-auto">
                Speak directly with our experienced commercial trade and regulatory professionals for rapid pricing quotations, bulk sample inquiries, and comprehensive import/export documentation assistance.
              </p>

              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate('contact')}
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-8 py-4 rounded shadow-lg shadow-primary/10 transition-all cursor-pointer outline-none"
                  id="final-cta-btn"
                >
                  Contact Sourcing Office
                </button>
                <a
                  href="mailto:info@kenhillpharma.com"
                  className="bg-bg hover:bg-border-custom border border-border-custom text-text-dark text-xs font-bold px-8 py-4 rounded transition-all flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 text-text-muted" />
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