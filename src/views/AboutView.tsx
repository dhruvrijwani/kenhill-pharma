import React from 'react';
import { ShieldCheck, Award, Globe, FileCheck, CheckCircle2, ChevronRight, Scale, Briefcase, Eye } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface AboutViewProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function AboutView({ navigate }: AboutViewProps) {
  const coreValues = [
    {
      title: "Global Trade Access",
      body: "Facilitating smooth and uninterrupted movement of physical pharmaceutical cargo through highly optimized and established international trade corridors.",
      icon: Globe
    },
    {
      title: "Regulatory Compliance",
      body: "Ensuring all negotiated bulk API batches satisfy the highest standards and pharmacopoeial monographs (USP, EP, BP, IP) with no quality bypasses.",
      icon: ShieldCheck
    },
    {
      title: "Trade Partnerships",
      body: "Developing resolute, long-term, and ethical supply linkages with reputable global pharmaceutical formulators, chemical synthesizers, and trade offices.",
      icon: Briefcase
    },
    {
      title: "Trade Intelligence",
      body: "Applying comprehensive market logistics insights and tracking intelligence to optimize sourcing lead times, vessel routings, and port customs clearance plans.",
      icon: Scale
    }
  ];

  const complianceDocuments = [
    {
      title: "Goods & Services Tax (GST) Certificate",
      number: "REG-GST-IN3900078",
      authority: "Government of India - Department of Revenue",
      status: "Active / Verified",
      description: "Official tax registration and corporate trading identification as a registered pharmaceutical distributor."
    },
    {
      title: "Import Export Code (IEC) License",
      number: "IEC-LIC-57248881A",
      authority: "Ministry of Commerce & Industry - DGFT Office",
      status: "Active / Verified",
      description: "Statutory cargo shipment clearance code permitting international trade, bulk commodity customs clearance, and global API import/export operations."
    },
    {
      title: "Articles of Association (AoA)",
      number: "CIN-L24230GJ2008PLC",
      authority: "Registrar of Companies - ROC Vadodara",
      status: "Active / Verified",
      description: "Statutory corporate organization filing validating Ken Hill Pharma Limited's legal limits, operations guidelines, and official corporate status."
    }
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* PAGE HEADER */}
        <div className="border-b border-border-custom pb-8">
          <div className="flex items-center space-x-2 text-xs text-text-muted mb-3" id="about-breadcrumb">
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('home')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-dark font-medium">Company Overview</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Trading Integrity Since 2008</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-dark">
              Company Overview — Ken Hill Pharma
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed font-body">
              A trusted, highly compliant pharmaceutical trading organization delivering quality-assured Active Ingredients, intermediates, and life science solutions through reliable sourcing, regulatory alignment, and global distribution.
            </p>
          </div>
        </div>

        {/* SECTION 1 — COMPANY INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Corporate Identity</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark leading-tight">
              Your Trusted Partner in Pharmaceutical Trading
            </h2>
            <p className="text-sm text-text-muted leading-relaxed font-body">
              Ken Hill Pharma Limited specializes in professional pharmaceutical trading, active chemical sourcing, and international distribution across highly regulated and emerging healthcare markets. We operate with a strict focus on supply chain transparency, quality assurance metrics, and secure logistic tracking.
            </p>
            <p className="text-sm text-text-muted leading-relaxed font-body">
              We focus on sourcing certified pharmaceutical products and executing transparent, efficient, and compliant trade operations. Our core competitive advantage lies in heavy regulatory adherence, ethical sourcing pipelines, and dependable supply-chain coordination across domestic and international locations.
            </p>

            {/* Quick Metrics in Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-custom">
              <div>
                <h3 className="text-2xl font-extrabold text-primary">400+</h3>
                <p className="text-3xs text-text-dark font-bold uppercase tracking-wider mt-1">Products Traded</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-primary">18+</h3>
                <p className="text-3xs text-text-dark font-bold uppercase tracking-wider mt-1">Years Sourcing</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-primary">45+</h3>
                <p className="text-3xs text-text-dark font-bold uppercase tracking-wider mt-1">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Sourcing Visual Banner & Photo (Combined side-by-side) */}
          <div className="space-y-6">
            <div className="bg-primary rounded-2xl p-8 text-white space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Compliance Directive</span>
                <h3 className="text-lg font-bold">Uncompromising Quality Controls First</h3>
                <p className="text-xs text-white/90 leading-relaxed font-body">
                  By maintaining active auditing channels over every synthesis partner facility, we ensure that physical biologicals, organic chemicals, and API batches strictly fulfill continuous assay criteria, completely eliminating contamination risks.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Standardized, continuous batch tracking with raw COA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Zero substitution policy guarantees brand parameter matching</span>
                </div>
              </div>
            </div>

            {/* Premium Unsplash Pharma Lab Photo */}
            <div className="h-52 rounded-2xl overflow-hidden shadow-md border border-border-custom relative">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop"
                alt="Ken Hill Sourced High-Tech Pharmaceutical Facility" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
                id="about-partner-center-img"
              />
              <div className="absolute inset-0 bg-dark-section/30 p-4 flex items-end">
                <span className="text-[9px] uppercase tracking-widest bg-dark-section/80 text-white font-extrabold px-3 py-1 rounded backdrop-blur-sm">
                  Partner Synthesis Center
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — CORE VALUES */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-accent font-bold text-center block">Sourcing Pillars</span>
            <h2 className="text-3xl font-extrabold text-text-dark underline-draw mx-auto inline-block pb-2">
              Our Core Values
            </h2>
            <p className="text-sm text-text-muted">
              Values that define excellence in pharmaceutical trading, regulatory compliance, and secure global distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="bg-surface border border-border-custom rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-md font-bold text-text-dark mb-2">{value.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{value.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 — COMPLIANCE & TRADE CREDENTIALS */}
        <section className="space-y-12 pb-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-accent font-bold text-center block">Statutory Documentation</span>
            <h2 className="text-3xl font-extrabold text-text-dark underline-draw mx-auto inline-block pb-2">
              Compliance & Trade Credentials
            </h2>
            <p className="text-sm text-text-muted">
              Official corporate certificates and state registrations validating authorized international trading and corporate supply standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {complianceDocuments.map((doc, idx) => (
              <div key={doc.title} className="bg-bg border border-border-custom rounded-2xl p-6 flex flex-col justify-between space-y-6" id={`credential-${idx}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border-custom pb-3">
                    <span className="text-3xs tracking-widest text-accent font-bold uppercase">{doc.authority}</span>
                    <span className="text-3xs bg-emerald-500/10 text-emerald-500 font-bold px-2 py-0.5 rounded uppercase">{doc.status}</span>
                  </div>

                  <h3 className="text-sm font-bold text-text-dark">{doc.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{doc.description}</p>
                </div>

                <div className="bg-surface rounded-xl p-3 border border-border-custom/50 flex items-center justify-between">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-text-muted">Document Index Id:</span>
                    <span className="block text-xs font-bold text-primary font-mono">{doc.number}</span>
                  </div>
                  <FileCheck className="w-5 h-5 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
