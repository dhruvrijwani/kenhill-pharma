import React, { useState } from 'react';
import { cardiovascularAPIs } from '../data/apis/cardiovascular';
import { cnsNeurologicalAPIs } from '../data/apis/cns-neurological';
import { gastrointestinalAPIs } from '../data/apis/gastrointestinal';
import { respiratoryAPIs } from '../data/apis/respiratory';
import { endocrineMetabolicAPIs } from '../data/apis/endocrine-metabolic';
import { intermediatesData } from '../data/intermediates';
import { 
  ChevronRight, Beaker, FileSpreadsheet, ClipboardCheck, Info, Package, 
  ShieldCheck, Mail, ArrowLeft, HeartPulse, Download, FileCheck, CheckCircle2 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface APIDetailViewProps {
  slug: string;
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function APIDetailView({ slug, navigate }: APIDetailViewProps) {
  // Combine all APIs database
  const allAPIs = [
    ...cardiovascularAPIs,
    ...cnsNeurologicalAPIs,
    ...gastrointestinalAPIs,
    ...respiratoryAPIs,
    ...endocrineMetabolicAPIs
  ];

  // Look up API
  const api = allAPIs.find(item => item.slug.toLowerCase() === slug.toLowerCase());

  // Look up Intermediate from our data
  // Convert intermediatesData items into compatible UI objects
  const rawIntermediate = intermediatesData.find(item => item.slug.toLowerCase() === slug.toLowerCase());
  
  const intermediate = rawIntermediate ? {
    id: rawIntermediate.slug,
    slug: rawIntermediate.slug,
    name: rawIntermediate.name,
    category: "Intermediate",
    badge: rawIntermediate.badge,
    casNumber: rawIntermediate.casNumber,
    molecularFormula: rawIntermediate.molecularFormula || "",
    molecularWeight: rawIntermediate.molecularWeight || "",
    grade: "Synthesis Grade",
    intro: rawIntermediate.intro,
    description: rawIntermediate.description,
    therapeuticApplications: rawIntermediate.applications,
    keyAdvantages: rawIntermediate.keyAdvantages,
    packaging: {
      primary: rawIntermediate.packaging.primary,
      secondary: rawIntermediate.packaging.secondary,
      packSizes: rawIntermediate.packaging.packSizes,
      notes: []
    },
    storage: {
      conditions: rawIntermediate.storage.conditions,
      shelfLife: rawIntermediate.storage.shelfLife
    },
    specifications: rawIntermediate.specifications,
    documentation: rawIntermediate.documentation,
    dmfAvailable: false,
    whoGmpCertified: false
  } : null;

  // Resolve matching product monomer
  const activeItem = api || intermediate;

  const [activeTab, setActiveTab] = useState<'monograph' | 'specifications' | 'regulatory'>('monograph');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Trigger simulated spec download
  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2000);
  };

  if (!activeItem) {
    return (
      <div className="relative pt-24 pb-20 text-center space-y-4 max-w-sm mx-auto">
        <Beaker className="w-12 h-12 text-[#1A3A6B] mx-auto animate-bounce" />
        <h3 className="text-sm font-bold text-text-dark">Monograph Not Found</h3>
        <p className="text-xs text-text-muted">The requested active molecule or intermediate listing is not configured.</p>
        <button onClick={() => navigate('apis')} className="bg-primary hover:bg-primary-hover text-white text-3xs font-semibold px-4 py-2 rounded-full">
          Return to active catalog
        </button>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* BREADCRUMB AND HEADER NAVIGATION */}
        <div className="border-b border-border-custom pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-text-muted">
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('home')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('apis')}>APIs List</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-dark font-medium">{activeItem.name}</span>
          </div>

          <button
            onClick={() => navigate('apis')}
            className="inline-flex items-center space-x-1 text-2xs font-semibold text-primary hover:text-primary-hover self-start outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Active APIs Catalog</span>
          </button>
        </div>

        {/* PRIMARY ITEM BRIEFING GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Primary details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Title and stats layout */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-[#1A3A6B] px-3 py-1 rounded">
                  {activeItem.badge}
                </span>
                {activeItem.whoGmpCertified && (
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-500 font-bold px-2 py-0.5 rounded uppercase font-mono">
                    WHO-GMP Certified SUPPLY
                  </span>
                )}
                {activeItem.dmfAvailable && (
                  <span className="text-[9px] bg-sky-500/10 text-sky-500 font-bold px-2 py-0.5 rounded uppercase font-mono">
                    US-DMF READY
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-dark leading-tight">{activeItem.name}</h1>
              <p className="text-sm text-text-muted leading-relaxed font-semibold">{activeItem.intro}</p>
            </div>

            {/* Formula matrix block and CAS parameters */}
            <div className="bg-bg border border-border-custom px-6 py-5 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-text-dark font-medium">
              <div>
                <span className="block text-[8px] text-text-muted uppercase tracking-wider font-bold">CAS Number</span>
                <span className="block truncate font-bold font-mono text-primary">{activeItem.casNumber}</span>
              </div>
              <div>
                <span className="block text-[8px] text-text-muted uppercase tracking-wider font-bold">Chemical Formula</span>
                <span className="block truncate font-mono">{activeItem.molecularFormula}</span>
              </div>
              <div>
                <span className="block text-[8px] text-text-muted uppercase tracking-wider font-bold">Molecular Weight</span>
                <span className="block font-mono">{activeItem.molecularWeight}</span>
              </div>
              <div>
                <span className="block text-[8px] text-text-muted uppercase tracking-wider font-bold">Standard Grade</span>
                <span className="block truncate font-mono">{activeItem.grade}</span>
              </div>
            </div>

            {/* INTERACTIVE SPECIFICATION TABS */}
            <div className="space-y-6">
              <div className="flex border-b border-border-custom gap-6">
                <button
                  onClick={() => setActiveTab('monograph')}
                  className={`pb-3 text-xs font-bold uppercase tracking-wider outline-none border-b-2 transition-all ${
                    activeTab === 'monograph' ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-text-dark'
                  }`}
                >
                  Clinical Portfolio & Mechanism
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`pb-3 text-xs font-bold uppercase tracking-wider outline-none border-b-2 transition-all ${
                    activeTab === 'specifications' ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-text-dark'
                  }`}
                >
                  Full Monograph Table
                </button>
                {api && (
                  <button
                    onClick={() => setActiveTab('regulatory')}
                    className={`pb-3 text-xs font-bold uppercase tracking-wider outline-none border-b-2 transition-all ${
                      activeTab === 'regulatory' ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-text-dark'
                    }`}
                  >
                    Regulatory Certifications
                  </button>
                )}
              </div>

              {/* TAB CONTENT: MONOGRAPH */}
              {activeTab === 'monograph' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">Structural Monographs</span>
                    <p className="text-xs text-text-muted leading-relaxed">{activeItem.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3">
                    <div className="bg-bg border border-border-custom/50 rounded-xl p-5 space-y-3">
                      <h4 className="text-xs font-bold text-text-dark flex items-center space-x-2 border-b border-border-custom/40 pb-1.5 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>Synthesis / Clinical Operations</span>
                      </h4>
                      <ul className="space-y-2 text-2xs text-text-muted">
                        {activeItem.therapeuticApplications.map((app, idx) => (
                          <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-bg border border-border-custom/50 rounded-xl p-5 space-y-3">
                      <h4 className="text-xs font-bold text-text-dark flex items-center space-x-2 border-b border-border-custom/40 pb-1.5 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>Key Sourcing Quality Highlights</span>
                      </h4>
                      <ul className="space-y-2 text-2xs text-text-muted">
                        {activeItem.keyAdvantages.map((adv, idx) => (
                          <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB CONTENT: SPECIFICATIONS */}
              {activeTab === 'specifications' && (
                <div className="space-y-4 text-xs">
                  <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">Analytical Control Limits</span>
                  <div className="border border-border-custom rounded-2xl overflow-hidden bg-surface">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-bg border-b border-border-custom font-mono text-3xs text-text-muted font-bold">
                          <th className="p-4 uppercase tracking-wider w-16">Sr No.</th>
                          <th className="p-4 uppercase tracking-wider">Testing Parameters</th>
                          <th className="p-4 uppercase tracking-wider">Target Monograph Standard Limits</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-custom font-medium text-2xs text-text-dark">
                        {activeItem.specifications.map((spec) => (
                          <tr key={spec.srNo} className="hover:bg-bg/40 transition-all">
                            <td className="p-4 font-mono font-bold text-text-muted">{spec.srNo}</td>
                            <td className="p-4 font-bold">{spec.criteria}</td>
                            <td className="p-4 font-mono">{spec.specification}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB CONTENT: REGULATORY CLIENT DIRECTIVES */}
              {activeTab === 'regulatory' && api && (
                <div className="space-y-6">
                  <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">Regulatory Filings Overview</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-2xs">
                    <div className="bg-bg border border-border-custom/50 rounded-xl p-4 space-y-2">
                      <span className="font-bold text-text-dark uppercase tracking-wider text-[9px] block">Pharmacopoeial Standards:</span>
                      <p className="text-text-muted leading-relaxed">IP, BP, USP, EP monograph compliance tested per delivery.</p>
                    </div>
                    <div className="bg-bg border border-border-custom/50 rounded-xl p-4 space-y-2">
                      <span className="font-bold text-text-dark uppercase tracking-wider text-[9px] block">Target Markets:</span>
                      <p className="text-text-muted leading-relaxed">Full technical logs ready for both regulated and emerging local corridors.</p>
                    </div>
                    <div className="bg-bg border border-border-custom/50 rounded-xl p-4 space-y-2">
                      <span className="font-bold text-text-dark uppercase tracking-wider text-[9px] block">DMF Status:</span>
                      <p className="text-text-muted leading-relaxed">Active open part DMF logs readily accessible on secure commercial request.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column Specifications, download actions, packaging */}
          <div className="lg:col-span-4 space-y-6">
            {/* Documentation actions card */}
            <div className="bg-surface border border-border-custom rounded-2xl p-6 space-y-6 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-text-dark uppercase tracking-wider border-b border-border-custom pb-2 flex items-center space-x-2">
                  <FileSpreadsheet className="w-4 h-4 text-accent" />
                  <span>Monograph Downloads</span>
                </h3>

                <div className="space-y-2 text-2xs text-text-muted">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Raw certificates of analysis (COA)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Safety data sheets (MSDS)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>BSE/TSE declaration profiles</span>
                  </div>
                </div>
              </div>

              {/* simulated download success positive block */}
              {downloadSuccess ? (
                <div className="bg-emerald-500/10 text-emerald-500 rounded-xl p-3 text-center text-3xs font-bold border border-emerald-500/20">
                  Analytical COA generated successfully!
                </div>
              ) : (
                <button
                  onClick={handleDownload}
                  className="w-full bg-primary hover:bg-primary-hover text-white text-3xs font-bold p-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center space-x-1.5"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download COA Datasheet</span>
                </button>
              )}
            </div>

            {/* Packaging specifications profile */}
            <div className="bg-surface border border-border-custom rounded-2xl p-6 space-y-6 shadow-sm">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider border-b border-border-custom pb-2 flex items-center space-x-2">
                  <Package className="w-4 h-4 text-accent" />
                  <span>Packaging & Care</span>
                </h4>

                <div className="space-y-3 text-2xs">
                  <div>
                    <span className="block text-[9px] text-text-muted font-bold uppercase tracking-wider">Primary Wrapper:</span>
                    <span className="block text-text-dark mt-0.5">{activeItem.packaging.primary}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-text-muted font-bold uppercase tracking-wider">Secondary Wrapper:</span>
                    <span className="block text-text-dark mt-0.5">{activeItem.packaging.secondary}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-text-muted font-bold uppercase tracking-wider">Pack Quantities:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {activeItem.packaging.packSizes.map((sz, idx) => (
                        <span key={idx} className="bg-bg text-text-dark font-mono font-bold border border-border-custom/50 px-2.5 py-0.5 rounded text-[9px]">
                          {sz}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border-custom/50">
                    <span className="block text-[9px] text-text-muted font-bold uppercase tracking-wider">Storage Requirements:</span>
                    <ul className="list-disc list-inside text-text-dark mt-1 space-y-0.5">
                      {activeItem.storage.conditions.map((cond, idx) => (
                        <li key={idx} className="leading-normal">{cond}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border-custom/50 flex justify-between items-center">
                    <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Shelf Life limits:</span>
                    <span className="font-mono font-extrabold text-[#1A3A6B]">{activeItem.storage.shelfLife}</span>
                  </div>
                </div>
              </div>

              {/* Direct Request quote pointer */}
              <button
                onClick={() => navigate('contact', { product: activeItem.name })}
                className="w-full bg-[#1A3A6B] hover:bg-primary-hover text-white text-3xs font-bold p-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center space-x-1.5"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Request API Quotation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
