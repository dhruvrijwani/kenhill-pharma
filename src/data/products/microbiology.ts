import { PharmProduct } from '../../lib/types';

export const microbiologyProducts: PharmProduct[] = [
  {
    id: "animal-cell-culture",
    slug: "animal-cell-culture",
    name: "Animal Cell Culture",
    category: "microbiology",
    subcategory: "Animal Cell Culture",
    badge: "Microbiology",
    intro: "Ken Hill Pharma Limited supplies premium, sterile-filtered media, high-purity sera, and growth supplements for mammalian cell culture applications in pharmaceutical research, vaccine production, and biotechnology. Our products are optimized for high cell viability and consistent batch-to-batch growth.",
    keyHighlights: [
      { value: "Sterile", label: "Filtered" },
      { value: "Mycoplasma", label: "Free" },
      { value: "95%", label: "Cell Viability Minimum" }
    ],
    overview: {
      heading: "Mammalian Cell Culture Solutions",
      subtext: "We provide solid infrastructure for cellular research, supplying highly refined liquid media, characterized animal sera, sterile cell dissociation reagents, and biological proliferation cell lines."
    },
    serviceCards: [
      { title: "Basal Media DMEM/RPMI", description: "Complete range of premium liquid buffers (such as DMEM, RPMI 1640) optimized with stable glutamine molecules." },
      { title: "characterized Sera (FBS)", description: "Premium character-grade Fetal Bovine Serum (FBS) showing extremely low endotoxins, sourced from fully registered supply corridors." },
      { title: "Cell Dissociation Solutions", description: "Sterile ready-to-use Trypsin-EDTA and enzyme alternatives formulated with non-toxic pH-indicating phenol red." },
      { title: "Contamination Controls", description: "Powerful liquid Pen/Strep antibiotic cocktails specifically validated to suppress bacterial growth in active cultures." },
      { title: "Proliferation Assay Kits", description: "Highly sensitive cell viability systems (such as MTT assays) for cellular cytolytic testing workflows." },
      { title: "Certified Mycoplasma Free", description: "All serum and liquid medium configurations are treated with absolute sterile filtration down to 0.1 microns." }
    ],
    productTable: [
      { productCode: "MCC1001", productName: "DMEM High Glucose with L-Glutamine - Complete Media for Mammalian Cell Culture" },
      { productCode: "MCC1002", productName: "Fetal Bovine Serum (FBS) - Heat-Inactivated, Australian Origin, Mycoplasma Tested" },
      { productCode: "MCC1003", productName: "Trypsin-EDTA 0.25% - Cell Dissociation Solution with Phenol Red" },
      { productCode: "MCC1004", productName: "Penicillin-Streptomycin Solution (100X) - Antibiotic Supplement for Cell Culture" },
      { productCode: "MCC1005", productName: "DPBS (Dulbecco's Phosphate Buffered Saline) - Without Calcium & Magnesium" },
      { productCode: "MCC1006", productName: "L-Glutamine 200mM Solution - Cell Culture Supplement" },
      { productCode: "MCC1007", productName: "RPMI 1640 Medium - With L-Glutamine, Sodium Bicarbonate" },
      { productCode: "MCC1008", productName: "Non-Essential Amino Acids (NEAA) 100X - Cell Culture Supplement" },
      { productCode: "MCC1009", productName: "Sodium Pyruvate 100mM Solution - Energy Metabolism Supplement" },
      { productCode: "MCC1010", productName: "MTT Assay Kit - Cell Viability and Proliferation Assay" }
    ],
    whyChooseUs: {
      heading: "Optimized for Mammalian Cell Lines",
      leadCopy: "With live cell models (such as CHO, HEK293, Vero), minor impurities can retard cellular growth kinetics. Ken Hill Pharma Limited guarantees absolute structural and nutritional consistency.",
      usps: [
        "Every batch checked for direct sterile validation and mycoplasma clearance",
        "Performance checked and verified using standard validated mammalian cell lines",
        "Shipments delivered in specialized cold-chain boxes with real-time temperature logs",
        "Complete traceability documentation shipped per package"
      ]
    },
    packaging: {
      options: [
        "Sterile leak-proof PETG media bottles (500ml - 1L)",
        "Deep-frozen serum bottles with safety lock lids",
        "Custom sterile bag options for automated industrial bioreactors"
      ]
    },
    storage: {
      conditions: "Liquid media must be stored refrigerated between 2-8°C protected from direct light. Serum products require sub-zero storage at -20°C.",
      shelfLife: "12 to 24 Months when stored under validated, non-interrupted thermal zones"
    }
  },
  {
    id: "plant-tissue-culture",
    slug: "plant-tissue-culture",
    name: "Plant Tissue Culture",
    category: "microbiology",
    subcategory: "Plant Tissue Culture",
    badge: "Microbiology",
    intro: "Ken Hill Pharma Limited supplies premium plant tissue culture media, high-purity gelling agents, plant growth regulators, and trace vitamin cocktails for micropropagation, agriculture biotechnology, and pharmaceutical secondary metabolite production.",
    keyHighlights: [
      { value: "GMP", label: "Compliant" },
      { value: "99.9%", label: "Purity" },
      { value: "90%+", label: "Shoot Success" }
    ],
    overview: {
      heading: "Plant Tissue Culture Solutions",
      subtext: "We provide standardized plant micropropagation solutions, featuring high-purity gelling matrices, basal salt compositions, and synthetic hormones for callus induction and root formation."
    },
    serviceCards: [
      { title: "Basal Media (MS)", description: "High-grade Murashige & Skoog (MS) and Gamborg's B5 salt compositions prepared in convenient powder formats." },
      { title: "Growth Hormones", description: "Highly pure synthetic auxins (NAA, IBA) and cytokinins (BAP, TDZ) to control plant organogenesis." },
      { title: "Gelling Agents", description: "Pristine bacteriological agar and Phytagel gellan gum for clear, firm, and physically consistent solid culture media." },
      { title: "Media Nutrition Packs", description: "Complete amino acid mixtures and vitamin suites (Myo-Inositol, Thiamine) to support cell longevity." },
      { title: "Secondary Metabolite Support", description: "Hormone blends calibrated to support rapid secondary element extraction in bioreactor cultures." },
      { title: "Pharma-Grade Traceability", description: "All ingredients undergo rigorous chemical validation ensuring clean, heavy-metal-free elements." }
    ],
    productTable: [
      { productCode: "PTC2001", productName: "Murashige & Skoog (MS) Basal Medium - Powder Form for Micropropagation" },
      { productCode: "PTC2002", productName: "6-Benzylaminopurine (BAP) 99% - Cytokinin Plant Growth Regulator" },
      { productCode: "PTC2003", productName: "Naphthalene Acetic Acid (NAA) - Synthetic Auxin for Root Induction" },
      { productCode: "PTC2004", productName: "Gamborg's B5 Basal Medium - Optimized for Plant Cell Suspension Culture" },
      { productCode: "PTC2005", productName: "Plant Agar - Bacteriological Grade for Solid Media Preparation" },
      { productCode: "PTC2006", productName: "Indole-3-Butyric Acid (IBA) 98% - Rooting Hormone for Tissue Culture" },
      { productCode: "PTC2007", productName: "Phytagel - Gellan Gum Alternative for Plant Tissue Culture Media" },
      { productCode: "PTC2008", productName: "Thidiazuron (TDZ) - High Potency Cytokinin for Shoot Multiplication" },
      { productCode: "PTC2009", productName: "White's Modified Basal Medium - For Orchid and Root Culture" },
      { productCode: "PTC2010", productName: "Activated Charcoal (Fine Powder) - Adsorbent for Plant Tissue Culture" }
    ],
    whyChooseUs: {
      heading: "Trusted Plant Biotechnology Sourcing",
      leadCopy: "With precious crop regeneration and rare plant micropropagation, consistent raw inputs are essential. Ken Hill Pharma Limited ensures absolute batch reproducibility.",
      usps: [
        "All products are plant-tested to ensure zero hormone-induced phytotoxicity",
        "Provided with comprehensive trace metal certificates of analysis",
        "Expert logistical coordination preventing transit degradation",
        "Highly competitive commercial volume discount protocols"
      ]
    },
    packaging: {
      options: [
        "Airtight powder jars (250g - 1kg)",
        "Vacuum-sealed foil pouches for chemical salts",
        "Industrial fiber storage cylinders for bulk agar"
      ]
    },
    storage: {
      conditions: "Dehydrated salt media and gelling agents should be stored in cold, dark, tightly sealed dry units. Keep at 2-8°C to prevent moisture aggregation.",
      shelfLife: "36 Months when stored in sealed light-protected containers"
    }
  },
  {
    id: "culture-media-bases",
    slug: "culture-media-bases",
    name: "Culture Media Bases",
    category: "microbiology",
    subcategory: "Culture Media Bases",
    badge: "Microbiology",
    intro: "Ken Hill Pharma Limited supplies high-quality dehydrated culture media bases for bacteriology laboratories, industrial quality controls, and diagnostic applications. Our media are formulated in accordance with harmonized pharmacopoeias.",
    keyHighlights: [
      { value: "USP", label: "Compliant" },
      { value: "GMP", label: "Manufactured" },
      { value: "100%", label: "Quality Tested" }
    ],
    overview: {
      heading: "Microbiological Media Solutions",
      subtext: "We provide comprehensive, dehydrated culture media bases designed to selectively cultivate, isolate, and identify bacterial, fungal, and yeast strains with complete confidence."
    },
    serviceCards: [
      { title: "General Purpose Media", description: "Standard, robust nutrient agars and tryptone broth bases supporting general microbial growth and stock culture maintenance." },
      { title: "Selective isolation Agars", description: "Bases (MacConkey, EMB) specifically formulated to selectively culture and differentiate Gram-negative enteric bacteria." },
      { title: "Fungal agars (SDA)", description: "High-yield Sabouraud Dextrose and Potato Dextrose agars optimized to cultivate yeasts and molds." },
      { title: "Enriched Media Bases", description: "Highly nutritious blood and chocolate agars suited for fastidious pathogens and standard culture plates." },
      { title: "AST Media (Mueller-Hinton)", description: "Mueller Hinton agars designed strictly to satisfy antibiotic susceptibility testing guidelines (CLSI/EUCAST)." },
      { title: "Harmonized Quality Checks", description: "All powder media batches undergo strict growth validation testing with ATCC standard reference strains." }
    ],
    productTable: [
      { productCode: "CMB1001", productName: "Nutrient Agar Base - General Purpose Medium for Bacteria Cultivation" },
      { productCode: "CMB1002", productName: "Nutrient Broth Base - Liquid Medium for Bacterial Growth and Maintenance" },
      { productCode: "CMB1003", productName: "Tryptone Soya Agar (TSA) Base - Universal Medium for Aerobic Bacteria" },
      { productCode: "CMB1004", productName: "MacConkey Agar Base - Selective Medium for Gram-Negative Bacteria" },
      { productCode: "CMB1005", productName: "Sabouraud Dextrose Agar (SDA) Base - For Fungi and Yeast Cultivation" },
      { productCode: "CMB1006", productName: "Blood Agar Base - For Hemolytic Bacteria and Fastidious Organisms" },
      { productCode: "CMB1007", productName: "Mueller Hinton Agar Base - Antibiotic Susceptibility Testing Medium" },
      { productCode: "CMB1008", productName: "Luria-Bertani (LB) Agar Base - Molecular Biology and Cloning Applications" },
      { productCode: "CMB1009", productName: "Brain Heart Infusion (BHI) Broth - For Fastidious Microorganisms" },
      { productCode: "CMB1010", productName: "Potato Dextrose Agar (PDA) Base - For Fungal Isolation and Enumeration" }
    ],
    whyChooseUs: {
      heading: "Delivering Uncompromised Microbial Isolation",
      leadCopy: "Microbial bio-burden testing requires absolute analytical integrity. Ken Hill Pharma Limited delivers consistent physical and chemical agars.",
      usps: [
        "Formulations in total alignment with USP, EP, and JP harmonized pharmacopoeias",
        "Every batch checked for optimal pH and verified growth promotion indexes",
        "Provided with comprehensive Certificate of Analysis (COA) records",
        "Excellent powder dissolution profiles with zero clumping or solid aggregation"
      ]
    },
    packaging: {
      options: [
        "Airtight moisture-locking plastic containers (500g - 1kg)",
        "Heavy-duty double-lined bulk bags",
        "Custom pre-measured media pouches for simple laboratory prep"
      ]
    },
    storage: {
      conditions: "Store dry powders in tightly closed containers in a dry, cool space between 15-25°C. Highly hygroscopic - prevent exposure to open humidity.",
      shelfLife: "36 to 48 Months from manufacturing date under optimal sealed storage"
    }
  },
  {
    id: "media-supplements",
    slug: "media-supplements",
    name: "Media Supplements",
    category: "microbiology",
    subcategory: "Media Supplements",
    badge: "Microbiology",
    intro: "Ken Hill Pharma Limited supplies premium, sterile cell and bacterial culture supplements including amino acids, vitamins, biological buffers, and growth factors optimized for cell culture media enrichment in pharmaceutical research and vaccine development.",
    keyHighlights: [
      { value: "Sterile", label: "Filtered" },
      { value: "99.9%", label: "Purity" },
      { value: "2X", label: "Growth Boost" }
    ],
    overview: {
      heading: "Complete Media Supplementation",
      subtext: "We provide high-purity biological supplements designed for serum-free and chemically defined culture systems, ensuring precise nutrient concentrations for demanding cell lines."
    },
    serviceCards: [
      { title: "Amino Acids", description: "Pristine L-Glutamine and essential amino acid cocktails supporting active protein synthesis and cellular metabolism." },
      { title: "Vitamins and Cofactors", description: "Stable vitamin suites (Myo-Inositol, B-vitamins) acting as critical enzyme cofactors in metabolic pathways." },
      { title: "Zwitterionic Buffers", description: "Sterile-filtered HEPES and sodium bicarbonate alternatives ensuring stellar pH control without carbon dioxide incubation." },
      { title: "High-grade Hydrolysates", description: "Enzymatic casein digests and yeast extracts providing an organic nitrogen source to stimulate bacterial cell lines." },
      { title: "Active Growth Factors", description: "BSA Fraction V, cell-grade insulin, and transferrin combinations to optimize serum-free bioreactors." },
      { title: "Endotoxin-Free Assured", description: "All supplements go through ultra-clean sterile filtration and are certified endotoxin-free (< 0.1 EU/mL)." }
    ],
    productTable: [
      { productCode: "MS3001", productName: "Myo-Inositol Powder - Vitamin-like Essential Supplement for Cell Culture Media" },
      { productCode: "MS3002", productName: "Casein Hydrolysate Enzymatic - Amino Acid Source for Media Enrichment" },
      { productCode: "MS3003", productName: "Yeast Extract Powder - Water Soluble Vitamin and Nucleotide Source" },
      { productCode: "MS3004", productName: "L-Glutamine 99% - Essential Amino Acid for Cell Proliferation" },
      { productCode: "MS3005", productName: "Sodium Pyruvate 99% - Energy Metabolism Supplement for Media" },
      { productCode: "MS3006", productName: "Non-Essential Amino Acids (NEAA) 100X Concentrate" },
      { productCode: "MS3007", productName: "HEPES Buffer 1M Solution - pH Stabilization for CO2-Free Culture" },
      { productCode: "MS3008", productName: "Bovine Serum Albumin (BSA) Fraction V - Stabilizer and Carrier Protein" },
      { productCode: "MS3009", productName: "Insulin-Transferrin-Selenium (ITS) Supplement 100X" },
      { productCode: "MS3010", productName: "Beta-Mercaptoethanol - Reducing Agent for Serum-Free Media" }
    ],
    whyChooseUs: {
      heading: "Optimizing Biological Cultures",
      leadCopy: "With chemically defined models, minor trace impurities can halt cells mid-cycle. Ken Hill Pharma Limited delivers absolute biochemical purity.",
      usps: [
        "Certified low-endotoxin assays on all life science supplements",
        "Lot-specific growth validation and complete chromatographic tracing reports",
        "Expert assistance in compiling media formulations",
        "Temperature-monitored cold-chain logistics for sensitive biologicals"
      ]
    },
    packaging: {
      options: [
        "Sterile-filtered polyethylene dropper bottles",
        "Amber-glass powder vials with tight desiccant inserts",
        "Insulated cold-box packaging with dry ice for freezing active proteins"
      ]
    },
    storage: {
      conditions: "Keep dry powders stored cold between 2-8°C. Active liquid growth factors and sensitive serums require deep-freeze storage at -20°C.",
      shelfLife: "18 to 24 Months under standard validated cold-chain storage parameters"
    }
  }
];
