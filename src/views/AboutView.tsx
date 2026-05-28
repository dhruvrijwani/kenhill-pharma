import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Globe, FileCheck, Scale, Briefcase, 
  MapPin, Anchor, Beaker, Truck, ChevronRight
} from 'lucide-react';

interface AboutViewProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function AboutView({ navigate }: AboutViewProps) {
  const complianceDocuments = [
    {
      title: "Goods & Services Tax (GST) Certificate",
      number: "REG-GST-IN3900078",
      authority: "Government of India",
      status: "Active",
      description: "Official tax registration and corporate trading identification as a registered pharmaceutical distributor."
    },
    {
      title: "Import Export Code (IEC) License",
      number: "IEC-LIC-57248881A",
      authority: "Ministry of Commerce",
      status: "Verified",
      description: "Statutory cargo shipment clearance code permitting international trade and global API import/export operations."
    },
    {
      title: "Articles of Association (AoA)",
      number: "CIN-L24230GJ2008PLC",
      authority: "ROC Vadodara",
      status: "Active",
      description: "Statutory corporate organization filing validating Ken Hill Pharma Limited's legal limits and corporate status."
    }
  ];

  return (
    <div className="relative pt-20 pb-0 bg-bg overflow-hidden font-sans">
      
      {/* 
        =========================================
        SECTION 1: MASSIVE HERO & STATS (DARK)
        Breaks the standard white-page layout immediately
        =========================================
      */}
      <section className="relative bg-dark-section text-white pt-20 pb-32">
        {/* Animated SVG Network Background */}
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex-pattern" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <path d="M30 0l25.98 15v30L30 60 4.02 45V15z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-pattern)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-section/50 via-transparent to-dark-section"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs text-white/50 mb-12">
            <span className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('home')}>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-medium">Corporate Authority</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[1.05] mb-6">
              25 Years of <br className="hidden sm:block" />
              <span className="text-accent">Global Chemical</span> Leadership.
            </h1>
            <p className="text-lg sm:text-xl text-white/70 font-body max-w-2xl leading-relaxed">
              We are an institutional powerhouse in pharmaceutical trading, executing high-volume borderless distribution and supporting over 1,000+ product pipelines.
            </p>
          </motion.div>

          {/* Monumental Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-white/10 pt-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span className="block text-accent font-mono text-sm tracking-widest uppercase mb-2">Corporate Scale</span>
              <div className="text-6xl font-black tracking-tighter">₹400<span className="text-3xl text-primary ml-1">Cr</span></div>
              <p className="text-sm text-white/60 mt-3 max-w-xs">Annual turnover driving massive global procurement and trade volume.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <span className="block text-accent font-mono text-sm tracking-widest uppercase mb-2">Heritage</span>
              <div className="text-6xl font-black tracking-tighter">25<span className="text-3xl text-primary ml-1">Yrs</span></div>
              <p className="text-sm text-white/60 mt-3 max-w-xs">Decades of unbroken operational excellence in chemical logistics.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <span className="block text-accent font-mono text-sm tracking-widest uppercase mb-2">Strategic Ties</span>
              <div className="text-6xl font-black tracking-tighter">25<span className="text-3xl text-primary ml-1">+</span></div>
              <p className="text-sm text-white/60 mt-3 max-w-xs">Direct trading alliances with tier-1 multinational companies (MNCs).</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        =========================================
        SECTION 2: ASYMMETRICAL OPERATIONS LAYOUT
        Replaces standard cards with alternating editorial blocks
        =========================================
      */}
      <section className="relative -mt-10 z-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Block 1: Sourcing & Imports (Image Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-center gap-12 bg-surface p-8 sm:p-12 rounded-2xl shadow-2xl border border-border-custom"
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                <Anchor className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-text-dark tracking-tight">Global Sourcing & Import Infrastructure</h2>
              <p className="text-base text-text-muted leading-relaxed font-body">
                Our procurement matrix is heavily diversified across the most advanced chemical manufacturing hubs in the world. We specialize in the <strong>direct importation of high-grade solvents</strong> and raw compounds.
              </p>
              <div className="pt-4 border-t border-border-custom">
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Origin Trade Hubs</h4>
                <div className="flex flex-wrap gap-2">
                  {["China", "Korea", "Japan", "Saudi Arabia", "Kuwait", "Oman", "Bahrain"].map((country) => (
                    <span key={country} className="px-4 py-2 bg-bg border border-border-custom rounded-full text-xs font-semibold text-text-dark flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-primary" /> {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] relative rounded-xl overflow-hidden shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop" 
                alt="International solvent shipping and cargo sourcing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Block 2: Export Markets (Image Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12"
          >
            <div className="lg:w-1/2 space-y-6 lg:pl-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-2">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-text-dark tracking-tight">Export & Trans-Border Reach</h2>
              <p className="text-base text-text-muted leading-relaxed font-body">
                We bridge the gap between eastern synthesis capabilities and regulated global markets. Our export machinery handles complex dossier submissions and maritime routing seamlessly.
              </p>
              <div className="space-y-4 pt-4 border-t border-border-custom">
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Primary Export Corridors</h4>
                <ul className="grid grid-cols-2 gap-4">
                  {["GCC Countries", "Latin America", "Egypt", "Turkey"].map((region) => (
                    <li key={region} className="flex items-center gap-3 text-sm font-bold text-text-dark">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      {region}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-2xl border border-border-custom">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" 
                alt="Export shipping routes and maritime logistics" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Block 3: Domestic & Formulations (Image Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-center gap-12 bg-primary text-white p-8 sm:p-12 rounded-2xl shadow-2xl"
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-2">
                <Beaker className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Domestic Formulations & Agrochemicals</h2>
              <p className="text-base text-white/80 leading-relaxed font-body">
                Beyond global export, we command a massive domestic presence. We supply the active ingredients and structural compounds that power over <strong>1,000+ distinct pharmaceutical formulations</strong> nationwide.
              </p>
              <div className="pt-4 border-t border-white/20">
                <div className="bg-dark-section/50 border border-white/10 p-5 rounded-xl flex items-start gap-4">
                  <Truck className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Agrochemical Division</h4>
                    <p className="text-xs text-white/70 mt-1 font-body">Dedicated supply chains facilitating bulk agrochemical trading exclusively for expansive domestic agricultural operations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" 
                alt="Domestic chemical formulations and liquid processing" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 
        =========================================
        SECTION 3: CORE VALUES (HORIZONTAL STRIPES)
        Replaces standard grid cards with a sleek list
        =========================================
      */}
      <section className="py-24 bg-surface border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Operational DNA</span>
            <h2 className="text-4xl font-extrabold text-text-dark mt-2 tracking-tight">Trading Philosophies</h2>
          </div>

          <div className="space-y-0 border-t border-border-custom">
            {[
              { title: "Global Trade Access", icon: Globe, text: "Facilitating smooth and uninterrupted movement of physical pharmaceutical cargo through highly optimized and established international trade corridors." },
              { title: "Regulatory Compliance", icon: ShieldCheck, text: "Ensuring all negotiated bulk API batches satisfy the highest standards and pharmacopoeial monographs (USP, EP, BP, IP)." },
              { title: "Trade Partnerships", icon: Briefcase, text: "Developing resolute, long-term, and ethical supply linkages with reputable global pharmaceutical formulators, and chemical synthesizers." },
              { title: "Trade Intelligence", icon: Scale, text: "Applying comprehensive market logistics insights and tracking intelligence to optimize sourcing lead times, and customs clearance." }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 border-b border-border-custom hover:bg-bg transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg border border-border-custom flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary shadow-sm">
                  <value.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-text-muted font-body max-w-3xl leading-relaxed">{value.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =========================================
        SECTION 4: CREDENTIALS (THE VAULT UI)
        =========================================
      */}
      <section className="py-24 bg-bg relative">
        {/* Subtle geometric background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-1/3 sticky top-24">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Statutory Compliance</span>
              <h2 className="text-4xl font-extrabold text-text-dark mt-2 tracking-tight">Trade<br/>Credentials</h2>
              <p className="text-base text-text-muted mt-6 font-body leading-relaxed">
                Official corporate certificates and state registrations validating authorized international trading, customs clearance, and corporate supply standards.
              </p>
              <div className="mt-8 p-6 bg-surface border border-border-custom rounded-xl shadow-sm">
                <FileCheck className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-text-dark text-sm">Full DMF Support</h4>
                <p className="text-xs text-text-muted mt-2">All API trades are supported by comprehensive open-part dossiers and stability logs.</p>
              </div>
            </div>

            <div className="lg:w-2/3 w-full space-y-6">
              {complianceDocuments.map((doc, idx) => (
                <motion.div 
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-surface border-l-4 border-l-primary border-y border-r border-border-custom p-6 sm:p-8 rounded-r-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 justify-between items-center"
                >
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-bg border border-border-custom px-3 py-1 rounded-full font-mono text-text-dark">{doc.authority}</span>
                      <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        {doc.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-dark tracking-tight">{doc.title}</h3>
                    <p className="text-sm text-text-muted font-body leading-relaxed max-w-xl">{doc.description}</p>
                  </div>
                  
                  <div className="w-full sm:w-auto bg-bg border border-border-custom p-4 rounded-xl text-center shrink-0">
                    <span className="block text-[10px] text-text-muted uppercase tracking-widest mb-1">Index ID</span>
                    <span className="block text-sm font-bold text-primary font-mono">{doc.number}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}