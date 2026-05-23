import { PharmProduct } from '../../lib/types';

export const cellCultureProducts: PharmProduct[] = [
  {
    id: "amino-acids",
    slug: "amino-acids",
    name: "Amino Acids",
    category: "cell-culture",
    subcategory: "Amino Acids",
    badge: "Plant Culture Tested",
    intro: "Ken Hill Pharma Limited supplies high-purity, diagnostic-grade L-amino acids essential for micropropagation and plant/mammalian cell culture media. Our amino acids enhance somatic embryogenesis, nitrogen assimilation, stress tolerance, and overall cell viability.",
    keyHighlights: [
      { value: "99%", label: "Anhydrate Purity" },
      { value: "Cell", label: "Culture Tested" },
      { value: "GMP", label: "Grade Sourced" }
    ],
    overview: {
      heading: "Amino Acid Applications",
      subtext: "We provide highly consistent, free-flowing L-amino acids serving as structural building blocks, osmotic protectants, and cellular nitrogen sources."
    },
    serviceCards: [
      { title: "Somatic Embryogenesis", description: "L-Arginine and L-Proline formulations specifically validated to optimize somatic embryo maturation and shoot induction." },
      { title: "Stress Tolerance", description: "High-grade L-Proline and L-Glutamine acting as molecular osmoprotectants against saline or thermal stress." },
      { title: "Nitrogen Assimilation", description: "Rapid-uptake L-Glutamine and L-Asparagine providing premium, easily converted cell nitrogen sources." },
      { title: "Protocol Optimization", description: "L-Glycine and L-Serine co-factors designed to stimulate rapid root hair and vegetative elongation." },
      { title: "Recalcitrant Species", description: "Complex tissue digests (Casein Acid) optimized for difficult-to-culture or slow-growing cell lines." },
      { title: "Ready-to-Use Mixtures", description: "In vitro sterile-filtered cell amino acid cocktails (50X) suitable for quick medium customization." }
    ],
    productTable: [
      { productCode: "AA6001", productName: "L-Glutamine 99% - Nitrogen Source and Osmoprotectant for Plant Cultures" },
      { productCode: "AA6002", productName: "L-Arginine - Amino Acid for Somatic Embryogenesis Enhancement" },
      { productCode: "AA6003", productName: "L-Proline 99% - Osmotic Stress Tolerance and Somatic Embryo Induction" },
      { productCode: "AA6004", productName: "L-Glycine - Simple Amino Acid for Media Supplementation" },
      { productCode: "AA6005", productName: "L-Asparagine - Amide Amino Acid for Nitrogen Metabolism" },
      { productCode: "AA6006", productName: "L-Serine - Amino Acid for Cell Wall Biosynthesis" },
      { productCode: "AA6007", productName: "L-Cysteine - Reducing Agent and Antioxidant Precursor" },
      { productCode: "AA6008", productName: "L-Methionine - Sulfur-Containing Amino Acid for Growth Promotion" },
      { productCode: "AA6009", productName: "Casein Acid Hydrolysate - Complex Amino Acid Mixture" },
      { productCode: "AA6010", productName: "Amino Acid Mixture 50X - Complete Supplement for MS Media" }
    ],
    whyChooseUs: {
      heading: "Optimized Molecular Building Blocks",
      leadCopy: "With active high-density bioreactors, biological enantiomeric purity is critical. Ken Hill Pharma Limited delivers absolute L-isomer verification.",
      usps: [
        "Certified L-isomer optical purity verified via polarimetry systems",
        "Tested under tissue culture environments to ensure zero toxic degradation derivatives",
        "Pristine chromatographic profiles verified on HPLC before container filling",
        "Reliable inventory continuity preventing research and industrial process pauses"
      ]
    },
    packaging: {
      options: [
        "Moisture-proof clear glass bottles (25g - 100g)",
        "Double-bagged sealed HDPE containers (500g - 5kg)",
        "Industrial fiber cylinders for bulk casein digests"
      ]
    },
    storage: {
      conditions: "Store dry powders in cool, dark, dry drawers between 15-25°C. Prepared liquid cocktails require freezing at -20°C.",
      shelfLife: "36 Months when stored dry in sealed containers"
    }
  },
  {
    id: "biological-buffers",
    slug: "biological-buffers",
    name: "Biological Buffers",
    category: "cell-culture",
    subcategory: "Biological Buffers",
    badge: "Plant Culture Tested",
    intro: "Ken Hill Pharma Limited supplies ultra-pure, cell-compatible Good's buffers representing high-purity chemical stabilizers for precise pH control in plant and animal tissue culture. Essential for CO2-free operations and pH-sensitive protocols.",
    keyHighlights: [
      { value: "99.5%", label: "Chemical Purity" },
      { value: "pKa 6-8", label: "Physiological Zone" },
      { value: "Cell", label: "Compatible" }
    ],
    overview: {
      heading: "Biological Buffer Applications",
      subtext: "We provide high-purity zwitterionic Good's buffers (HEPES, MES, MOPS, PIPES) offering superior buffering capacity with zero metabolic interference."
    },
    serviceCards: [
      { title: "Protoplast Culture", description: "Low-toxicity buffers (MES, PIPES) designed to protect fragile wall-less cell membranes from osmotic shock." },
      { title: "CO2-Free Incubation", description: "Premium cell-compatible HEPES and MOPS designed to stabilize pH without requiring CO2 incubators." },
      { title: "Suspension Cultures", description: "Stable pH buffers optimized to protect suspension cells from nutrient-depletion-induced acidic spikes." },
      { title: "Hormone Interactions", description: "Highly stable buffers securing optimal pH parameters for complex auxin-cytokinin molecules." },
      { title: "Long-Term Cultures", description: "High-capacity buffers maintaining steady state conditions throughout extended subculture phases." },
      { title: "Zero Physiological Risk", description: "Zwitterionic buffers showing zero direct cellular absorption or enzymatic pathway blocks." }
    ],
    productTable: [
      { productCode: "BUF7001", productName: "MES (2-(N-morpholino)ethanesulfonic acid) - pKa 6.1 Buffer for Plant Culture" },
      { productCode: "BUF7002", productName: "MOPS (3-(N-morpholino)propanesulfonic acid) - pKa 7.2 Wide Range Buffer" },
      { productCode: "BUF7003", productName: "HEPES (4-(2-hydroxyethyl)-1-piperazineethanesulfonic acid) - pKa 7.5 CO2-Free Buffer" },
      { productCode: "BUF7004", productName: "PIPES (Piperazine-1,4-bis(2-ethanesulfonic acid)) - pKa 6.8 Cell Culture Buffer" },
      { productCode: "BUF7005", productName: "TES (2-[[1,3-dihydroxy-2-(hydroxymethyl)propan-2-yl]amino]ethanesulfonic acid) - pKa 7.4" },
      { productCode: "BUF7006", productName: "Tris-HCl - Versatile Buffer for pH 7.0-9.0 Range" },
      { productCode: "BUF7007", productName: "ADA (N-(2-Acetamido)iminodiacetic acid) - pKa 6.6 Low Toxicity Buffer" },
      { productCode: "BUF7008", productName: "ACES (N-(2-Acetamido)-2-aminoethanesulfonic acid) - pKa 6.9 Good's Buffer" },
      { productCode: "BUF7009", productName: "BIS-TRIS - pKa 6.5 Buffer for Acidic Plant Media" },
      { productCode: "BUF7010", productName: "Biological Buffer Mixture 10X - Complete pH Stabilization Kit" }
    ],
    whyChooseUs: {
      heading: "Reliable pH Standardization",
      leadCopy: "With live biological tissue, even a minor pH drift from target parameters can trigger heat-shock proteins or cell death. Ken Hill Pharma Limited delivers absolute pH stability.",
      usps: [
        "Ultra-pure zwitterionic compounds with extremely high buffering coefficient",
        "Certified endotoxin-free with near-zero heavy metal levels",
        "Validated under HPLC testing to ensure lack of trace organic decomposition anomalies",
        "Dedicated technical documentation detailing exact pKa curves"
      ]
    },
    packaging: {
      options: [
        "Airtight powder jars (100g - 1kg)",
        "Double-bagged heat-sealed HDPE pails for bulk industrial use",
        "Aseptically sealed liquid buffer concentrate bottles"
      ]
    },
    storage: {
      conditions: "Store dry powders in cool, dry closets. Keep containers tightly sealed to avoid humidity-driven clumping. Keep at room temperature near 20°C.",
      shelfLife: "36 to 48 Months under dry, un-degraded storage conditions"
    }
  },
  {
    id: "pharmaceutical-enzymes",
    slug: "pharmaceutical-enzymes",
    name: "Pharmaceutical Enzymes",
    category: "cell-culture",
    subcategory: "Pharmaceutical Enzymes",
    badge: "Pharma Grade",
    intro: "Ken Hill Pharma Limited supplies GMP-certified pharmaceutical enzymes including proteolytic, fibrinolytic, and digestive biocatalysts for anti-inflammatory, cardiovascular, and gastroenterological formulations. Sourced with standardized activity units.",
    keyHighlights: [
      { value: "99.8%", label: "Assayed Purity" },
      { value: "IP/USP", label: "Grade Compliant" },
      { value: "95%", label: "Activity Retention" }
    ],
    overview: {
      heading: "Therapeutic Enzyme Applications",
      subtext: "We provide high-potency proteolytic enzymes (Trypsin, Serratiopeptidase), fibrinolytics (Nattokinase), and digestive blends (Pepsin, Pancreatin) characterized by standardized, high-activity units."
    },
    serviceCards: [
      { title: "Anti-Inflammatory", description: "Trypsin-Chymotrypsin complexes and Serratiopeptidase designed strictly to reduce localized edema and inflammation." },
      { title: "Fibrinolytic actives", description: "High-yield Nattokinase enzymes optimized as natural blood-thinning cardio-support elements." },
      { title: "Digestive Support", description: "Precision pancreatin, diastase, and pepsin biocatalyst blends to support gastric health." },
      { title: "Antimicrobial Protease", description: "Lysozyme chloride enzymes optimized to induce bacterial cell membrane lysis." },
      { title: "Wound Debridement", description: "High-activity bromelain and papain complexes designed to liquefy necrotic tissue." },
      { title: "GMP Certified Standards", description: "All enzymes undergo rigid biological assays to confirm exact active units per milligram." }
    ],
    productTable: [
      { productCode: "ENZ2001", productName: "Trypsin-Chymotrypsin 6:1 - Anti-inflammatory Enzyme Complex" },
      { productCode: "ENZ2002", productName: "Serratiopeptidase 40,000 SPU - Systemic Enzyme for Inflammation" },
      { productCode: "ENZ2003", productName: "Pepsin IP 1:10000 - Gastric Proteolytic Enzyme" },
      { productCode: "ENZ2004", productName: "Pancreatin USP - Digestive Enzyme Blend" },
      { productCode: "ENZ2005", productName: "Lysozyme Chloride 30000U/g - Antimicrobial Enzyme" },
      { productCode: "ENZ2006", productName: "Bromelain 2400 GDU/g - Proteolytic Enzyme from Pineapple" },
      { productCode: "ENZ2007", productName: "Nattokinase 20000 FU/g - Fibrinolytic Enzyme" },
      { productCode: "ENZ2008", productName: "Papain 200000 USP U/g - Cysteine Protease" },
      { productCode: "ENZ2009", productName: "Fungal Diastase IP - Alpha Amylase for Digestion" },
      { productCode: "ENZ2010", productName: "Enzyme Complex Blend - Multi-Enzyme Therapeutic Formula" }
    ],
    whyChooseUs: {
      heading: "Standardized Therapeutic Biocatalysts",
      leadCopy: "With enzymology, thermal stability and biological unit consistency are paramount. Ken Hill Pharma Limited delivers active enzyme lines.",
      usps: [
        "Every batch checked for absolute enzyme unit concentrations (SPU/FU/GDU checklines)",
        "Certified lower microbial bio-burden with zero active endotoxin markers",
        "Expert assistance in constructing stabilized industrial enzyme formulations",
        "Complete safety documentation (MSDS, COA, activity certificates) shipped per bag"
      ]
    },
    packaging: {
      options: [
        "Airtight high-seal plastic jars on powders",
        "Sterilized moisture-proof containers",
        "Specialized cold-chain insulated units with thermal logs"
      ]
    },
    storage: {
      conditions: "Store dry enzyme powders frozen at -20°C for absolute activity reservation. Ambient short excursions permitted under light storage.",
      shelfLife: "18 to 24 Months when stored under standardized freezing profiles"
    }
  },
  {
    id: "cryoprotectants",
    slug: "cryoprotectants",
    name: "Cryoprotectants",
    category: "cell-culture",
    subcategory: "Cryoprotectants",
    badge: "Pharma Grade",
    intro: "Ken Hill Pharma Limited supplies premium pre-tested cell cryoprotectants including ultra-pure DMSO, glycerol, and protective sugars. Formulated strictly for cell therapy preservation, stem cell storage, and protein vitrification.",
    keyHighlights: [
      { value: "99.9%", label: "Purity Assured" },
      { value: "USP", label: "Grade Registered" },
      { value: "95%", label: "Post-Thaw Cell Viability" }
    ],
    overview: {
      heading: "Cell and Biologic Protection",
      subtext: "We provide high-purity penetrating (DMSO, Glycerol) and non-penetrating (Trehalose, Sucrose) cryoprotectative buffers to suppress destructive intracellular ice crystallization during freezing."
    },
    serviceCards: [
      { title: "Stem Cell DMSO", description: "Ultra-pure Dimethyl Sulfoxide (DMSO) validated to preserve delicate mammalian stem and CAR-T cells." },
      { title: "Vitrification Agents", description: "Propylene and Ethylene glycol blends optimised to induce glass-like vitrification without crystal growth." },
      { title: "Biologics Stabilization", description: "Pristine sucrose and trehalose dihydrate sugar compounds protecting complex protein structures during freezing." },
      { title: "Low Toxicity Mixes", description: "Specially titrated cryo-mixtures containing low DMSO concentrations to prevent chemical cell shock." },
      { title: "Lyophilization Protectants", description: "Fine chemical excipients designed to support structural collapse resistance in freeze-drying cycles." },
      { title: "GMP Regulated Support", description: "All freezing lines are certified endotoxin-free and backed by comprehensive safety documents." }
    ],
    productTable: [
      { productCode: "CRYO1001", productName: "DMSO (Dimethyl Sulfoxide) USP Grade - Cell-Penetrating Cryoprotectant" },
      { productCode: "CRYO1002", productName: "Glycerol USP - Non-Toxic Cryoprotectant for Biologics" },
      { productCode: "CRYO1003", productName: "Ethylene Glycol Pharma Grade - Vitrification Agent" },
      { productCode: "CRYO1004", productName: "Propylene Glycol USP - Low Toxicity Cell Freezing Medium" },
      { productCode: "CRYO1005", productName: "Trehalose Dihydrate - Protein Stabilizing Cryoprotectant" },
      { productCode: "CRYO1006", productName: "Sucrose Pharma Grade - Lyophilization Cryoprotectant" },
      { productCode: "CRYO1007", productName: "10% DMSO Cell Freezing Medium - Complete Cryopreservation Solution" },
      { productCode: "CRYO1008", productName: "5% DMSO + 6% Hydroxyethyl Starch - Low Toxicity Freezing Medium" },
      { productCode: "CRYO1009", productName: "Polyethylene Glycol 4000 - Non-Penetrating Stabilizer" },
      { productCode: "CRYO1010", productName: "Cryoprotectant Mixture Kit - Multi-Component Freezing Solutions" }
    ],
    whyChooseUs: {
      heading: "Unlocking Cryogenic Cell Preservation",
      leadCopy: "With clinical cell therapy preservation, cell restoration parameters must exceed 90%. Ken Hill Pharma Limited delivers absolute structural protection.",
      usps: [
        "Certified USP/EP grade purity with active batch-specific endotoxin counts",
        "Proven under cell culture trials to establish high post-thaw metabolic restoration",
        "Free from volatile pyrogens and certified nuclease-free",
        "Expert assistance in constructing custom vitrification and preservation recipes"
      ]
    },
    packaging: {
      options: [
        "Pristine sterile-filled plastic injection vials",
        "Amber glass bottles with nitrogen overlays",
        "Bulk containers for industrial-scale vaccine lyophilization excipients"
      ]
    },
    storage: {
      conditions: "Store DMSO above 18.5°C to avoid solidification. Kept in dark, dry drawers. Sucrose and chemical sugars require dry room storage near 20°C.",
      shelfLife: "36 Months when stored according to specific container parameters"
    }
  }
];
