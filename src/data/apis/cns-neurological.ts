import { APIProduct } from '../../lib/types';

export const cnsNeurologicalAPIs: APIProduct[] = [
  {
    id: "fosphenytoin-sodium",
    slug: "fosphenytoin-sodium",
    name: "Fosphenytoin Sodium",
    category: "cns-neurological",
    badge: "CNS & Neurological API | WHO-GMP Certified",
    casNumber: "92134-98-0",
    molecularFormula: "C16H13N2NaO6P",
    molecularWeight: "382.25 g/mol",
    grade: "USP / EP / IP",
    therapeuticCategory: "Anticonvulsant / Hydantoin Prodrug",
    dosageForms: "Injection (Intravenous or Intramuscular)",
    intro: "Fosphenytoin Sodium is a water-soluble prodrug of phenytoin used for the acute treatment and prevention of seizures. It offers significantly improved local tolerability over intravenous phenytoin and can be administered rapidly.",
    description: "Fosphenytoin Sodium is rapidly converted to its active metabolite, phenytoin, in the body by vascular endothelial phosphatases. It is primarily utilized in emergency stroke, status epilepticus management, and neurosurgical procedures. Its solubility dramatically reduces infusion-site reactions and complications.",
    therapeuticApplications: [
      "Acute treatment of status epilepticus (acute repetitive seizures)",
      "Prevention and clinical treatment of seizures during or after neurosurgery",
      "Short-term parental administration when oral phenytoin is not clinically feasible",
      "Emergency seizure control in intensive care settings"
    ],
    keyAdvantages: [
      "Regulatory Compliance: USFDA DMF filed with full compliance to USP, EP, and IP pharmacopoeial expectations.",
      "High Purity: Advanced chemical synthesis with stringent chromatography testing, ensuring low impurity profile.",
      "Enhanced Tolerability: Water-soluble formulation allows faster administration with reduced vascular damage risk.",
      "Global Supply: Reliable logistics chain serving regulated markets globally with complete analytical backups."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["5 kg", "10 kg", "25 kg"],
      notes: ["Custom packaging is supportable upon request"]
    },
    storage: {
      conditions: [
        "Store at controlled room temperature 20-25°C (68-77°F)",
        "Protect from heavy light exposure and moisture",
        "Keep container tightly closed when not in use",
        "Store in a dry, well-ventilated area"
      ],
      shelfLife: "36 months when stored under validated warehouse conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to off-white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Freely soluble in water, sparingly soluble in alcohol" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum complies and conforms to USP standard reference spec" },
      { srNo: 4, criteria: "pH (1% solution)", specification: "8.0 – 9.0" },
      { srNo: 5, criteria: "Water Content (Karl Fischer)", specification: "Not more than 3.0%" },
      { srNo: 6, criteria: "Related Substances (HPLC)", specification: "Phenytoin: NMT 0.5% / Any other individual: NMT 0.2% / Total: NMT 1.0%" },
      { srNo: 7, criteria: "Phosphate Content", specification: "8.0% – 9.0% (calculated as PO4 on anhydrous basis)" },
      { srNo: 8, criteria: "Heavy Metals", specification: "NMT 20 ppm" },
      { srNo: 9, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C guidelines" },
      { srNo: 10, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on anhydrous and solvent-free basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Batch-to-batch physical and chemical consistency",
        "Fully validated, state-of-the-art analytical testing protocols",
        "Complete structural identification profiling"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF)",
        "Stability Study Reports",
        "GMP Certificates from Manufactures",
        "Method validation reports"
      ]
    },
    relatedProducts: [
      { name: "Phenytoin Sodium", slug: "phenytoin", description: "First-line classic anticonvulsant for primary seizure management." },
      { name: "Phenobarbital Sodium", slug: "phenobarbital-sodium", description: "Injectable option for urgent status epilepticus control." },
      { name: "Memantine HCl", slug: "memantine-hydrochloride", description: "NMDA receptor antagonist supporting neurodegenerative wellness." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "memantine-hydrochloride",
    slug: "memantine-hydrochloride",
    name: "Memantine Hydrochloride",
    category: "cns-neurological",
    badge: "CNS API | WHO-GMP Certified",
    casNumber: "41100-52-1",
    molecularFormula: "C12H22ClN",
    molecularWeight: "215.76 g/mol",
    grade: "USP / EP / IP",
    therapeuticCategory: "Anti-Alzheimer / NMDA Receptor Antagonist",
    dosageForms: "Tablets, Capsules, Oral Solution",
    intro: "Memantine Hydrochloride is a centrally acting Active Pharmaceutical Ingredient (API) used in the treatment of moderate to severe Alzheimer's disease.",
    description: "Memantine Hydrochloride acts as a low-affinity, voltage-dependent, non-competitive NMDA (N-methyl-D-aspartate) receptor antagonist. By binding to NMDA receptors, it regulates glutamate overactivation, preventing neurodegenerative calcium-induced excitotoxicity.",
    therapeuticApplications: [
      "Symptomatic management of moderate to severe Alzheimer's type dementia",
      "Neurological support in vascular dementia",
      "General neurodegenerative diseases and cognitive decay management"
    ],
    keyAdvantages: [
      "Regulatory Compliance: Sourced from validated WHO-GMP facilities with complete COA, MSDS, and DMF dossier support.",
      "High purity synthesis: Advanced organic reactions ensure exceptional isomeric purity and ultra-low heavy metal content.",
      "Global Availability: Fast export custom clearances with reliable temperatures and log tracking."
    ],
    packaging: {
      primary: "Double LDPE inner lining",
      secondary: "HDPE / Fiber drums",
      packSizes: ["1 kg", "5 kg", "10 kg", "25 kg"]
    },
    storage: {
      conditions: [
        "Store in a tightly closed container",
        "Store in a cool and dry place",
        "Protect from humidity and high thermal exposure"
      ],
      shelfLife: "36 Months from date of manufacture"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to off-white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Freely soluble in water, soluble in alcohol" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum conforms fully to reference standards" },
      { srNo: 4, criteria: "Loss on Drying", specification: "NMT 1.0%" },
      { srNo: 5, criteria: "Related Substances", specification: "Total impurities NMT 0.5%" },
      { srNo: 6, criteria: "Residual Solvents", specification: "As per ICH Q3C limits" },
      { srNo: 7, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on dried basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Synthesized in modern WHO-GMP certified facilities",
        "Fully validated, high-resolution chromatography",
        "Comprehensive impurity profiling and allergen statement filings"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF)",
        "Material Safety Data Sheet (MSDS)",
        "Stability Studies Summary"
      ]
    },
    relatedProducts: [
      { name: "Phenobarbital", slug: "phenobarbital", description: "Established anticonvulsant with rich therapeutic history." },
      { name: "Fosphenytoin Sodium", slug: "fosphenytoin-sodium", description: "Emergency-grade anticonvulsant prodrug." },
      { name: "Ticagrelor", slug: "ticagrelor", description: "Platelet inhibitor supporting cardiovascular systems." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "phenobarbital",
    slug: "phenobarbital",
    name: "Phenobarbital",
    category: "cns-neurological",
    badge: "CNS & Neurological API | WHO-GMP Certified",
    casNumber: "50-06-6",
    molecularFormula: "C12H12N2O3",
    molecularWeight: "232.24 g/mol",
    grade: "USP / EP / BP",
    therapeuticCategory: "Anticonvulsant / Sedative-Hypnotic",
    dosageForms: "Tablets, Capsules, Elixirs",
    intro: "Phenobarbital is a long-acting barbiturate anticonvulsant of critical therapeutic importance. It is featured extensively on the WHO Model List of Essential Medicines due to its high cost-efficiency and therapeutic safety index.",
    description: "Phenobarbital is a powerful central nervous system depressant. It works primarily by enhancing GABA-mediated chloride channel opening times, leading to hyperpolarization of postsynaptic cells. This dampens aberrant neuronal hyperexcitability, offering robust protection against chronic and acute seizures.",
    therapeuticApplications: [
      "Treatment of generalized tonic-clonic and localized partial seizures",
      "Alternative/adjunct treatment in urgent status epilepticus",
      "Neonatal seizures and infant febrile convulsion management",
      "Short-term sedation and clinical anxiety management"
    ],
    keyAdvantages: [
      "Global Gold Standard: WHO Essential Medicine with trusted, proven clinical efficacy across a century of usage.",
      "Regulatory Leadership: Fully compliant with international monographs (USP, EP, BP) with USFDA DMF available.",
      "High Pure Synthesis: Produced following strictly validated GMP processes with ultra-pure crystallization."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["10 kg", "25 kg"]
    },
    storage: {
      conditions: [
        "Store at controlled room temperature 20-25°C (68-77°F)",
        "Protect from humidity and light",
        "Keep container tightly closed in secure, controlled vault"
      ],
      shelfLife: "36 Months from manufacturing date"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White, odorless, crystalline powder or colorless crystals" },
      { srNo: 2, criteria: "Solubility", specification: "Slightly soluble in water, freely soluble in alcohol and ether" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum conforms to EP reference standard" },
      { srNo: 4, criteria: "Melting Point", specification: "174°C – 178°C" },
      { srNo: 5, criteria: "pH (saturated solution)", specification: "5.0 – 6.0" },
      { srNo: 6, criteria: "Loss on Drying", specification: "Not more than 0.5% (105°C, 3 hours)" },
      { srNo: 7, criteria: "Sulfated Ash", specification: "Not more than 0.1%" },
      { srNo: 8, criteria: "Related Substances (HPLC)", specification: "Phenobarbital N-oxide: NMT 0.5% / Any other individual: NMT 0.10% / Total: NMT 1.0%" },
      { srNo: 9, criteria: "Heavy Metals", specification: "NMT 10 ppm" },
      { srNo: 10, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C guidelines" },
      { srNo: 11, criteria: "Assay", specification: "99.0% – 101.0% on dried anhydrous basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Controlled substance regulatory clearing ready",
        "Sourced from audited facilities with clean, robust validation history",
        "Strict particle distribution testing"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF)",
        "Audit and Facility GMP Credentials",
        "Stability and Narcotic clearance licensing paperwork"
      ]
    },
    relatedProducts: [
      { name: "Phenobarbital Sodium", slug: "phenobarbital-sodium", description: "Direct-acting sodium salt suitable for rapid parenteral injection." },
      { name: "Phenytoin", slug: "phenytoin", description: "Standard anticonvulsant hydantoin targeting voltage-gated sodium channels." },
      { name: "Tizanidine HCl", slug: "tizanidine-hydrochloride", description: "Central muscle relaxant serving patients with localized neurospasms." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "phenobarbital-sodium",
    slug: "phenobarbital-sodium",
    name: "Phenobarbital Sodium",
    category: "cns-neurological",
    badge: "CNS & Neurological API | WHO-GMP Certified",
    casNumber: "57-30-7",
    molecularFormula: "C12H11N2NaO3",
    molecularWeight: "254.22 g/mol",
    grade: "BP / EP / USP",
    therapeuticCategory: "Anticonvulsant / Sedative-Hypnotic Sodium Salt",
    dosageForms: "Injection, Oral Solutions",
    intro: "Phenobarbital Sodium is the medical sodium salt of Phenobarbital. It acts rapidly on the central nervous system and is suitable for intramuscular or intravenous emergency treatments.",
    description: "This highly soluble salt acts as a robust sedative-hypnotic and anticonvulsant. It promotes rapid influx of cellular chloride ions via GABAa complex amplification. Ken Hill Pharma Limited distributes premium Phenobarbital Sodium sourced strictly from facilities with USFDA DMF files and full regulatory compliance.",
    therapeuticApplications: [
      "Emergency clinical treatment of status epilepticus (intravenous administration)",
      "Management of generalized tonic-clonic and acute focal seizures",
      "Neonatal seizures and infant febrile spasm emergency therapy",
      "Clinical sedative and acute drug withdrawal syndrome mitigation"
    ],
    keyAdvantages: [
      "High Water Solubility: Excellent dissolution performance, perfect for emergency fluid parenteral dosages.",
      "Premium Grade Quality: Consistent high-purity API with trace heavy metals and stringently controlled impurity profiles.",
      "Global Logistic Power: Dedicated export supply corridors to over 45 countries, backed by complete technical portfolios."
    ],
    packaging: {
      primary: "Double LDPE / HDPE bags",
      secondary: "HDPE / Fiber drums with inner seals",
      packSizes: ["5 kg", "10 kg", "25 kg"]
    },
    storage: {
      conditions: [
        "Store at controlled room temperature 15-30°C (59-86°F)",
        "Protect from light, air exposure, and moisture",
        "Keep container tightly closed and locked under local controlled substance vault rules"
      ],
      shelfLife: "36 to 60 months when stored under recommended sealed conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White, crystalline powder or colorless crystals" },
      { srNo: 2, criteria: "Solubility", specification: "Freely soluble in water, soluble in alcohol, practically insoluble in ether" },
      { srNo: 3, criteria: "Identification", specification: "A: IR spectrum conforms to reference; B: Positive test for sodium; C: Positive chemical reaction for barbiturates" },
      { srNo: 4, criteria: "pH (2% aqueous solution)", specification: "9.2 – 10.5" },
      { srNo: 5, criteria: "Loss on Drying", specification: "Not more than 3.0% (dried at 105°C, 3 hours)" },
      { srNo: 6, criteria: "Related Substances (HPLC)", specification: "N-Methylphenobarbital: NMT 0.5% / 5-Ethyl-5-phenylhydantoin: NMT 0.3% / Any other individual: NMT 0.2% / Total: NMT 1.5%" },
      { srNo: 7, criteria: "Residue on Ignition (Sulfated)", specification: "Not more than 0.1%" },
      { srNo: 8, criteria: "Heavy Metals", specification: "NMT 10 ppm" },
      { srNo: 9, criteria: "Residual Solvents", specification: "Complies fully with Class 2 & 3 solvent standards (ICH Q3C)" },
      { srNo: 10, criteria: "Clarity & Color of Solution", specification: "Solution in water is clear and colorless" },
      { srNo: 11, criteria: "Assay (by HPLC / Titrimetry)", specification: "99.0% – 101.0% on dried basis" },
      { srNo: 12, criteria: "Microbial Limits", specification: "Total aerobic count: NMT 1000 CFU/g / Total yeast & mold: NMT 100 CFU/g / E. coli: Absent in 1g / Salmonella: Absent in 10g" },
      { srNo: 13, criteria: "Bacterial Endotoxins", specification: "Less than 0.83 EU/mg (for injectable grade)" }
    ],
    documentation: {
      qualityFeatures: [
        "Strictly manufactured under cGMP and cleanroom standards",
        "Aseptic crystal preparation procedures",
        "Full support for CTD and ACTD submission modules"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA per batch)",
        "Drug Master File (DMF)",
        "MSDS",
        "Stability and Endotoxin testing records",
        "Narcotic import/export logistics licenses"
      ]
    },
    relatedProducts: [
      { name: "Phenobarbital", slug: "phenobarbital", description: "Standard formulation barbiturate API." },
      { name: "Phenytoin", slug: "phenytoin", description: "Direct sodium channel block anticonvulsant." },
      { name: "Fosphenytoin Sodium", slug: "fosphenytoin-sodium", description: "Parenteral prodrug alternative to intravenous phenytoin." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "phenytoin",
    slug: "phenytoin",
    name: "Phenytoin",
    category: "cns-neurological",
    badge: "CNS & Neurological API | WHO-GMP Certified",
    casNumber: "57-41-0",
    molecularFormula: "C15H12N2O2",
    molecularWeight: "252.27 g/mol",
    grade: "BP / EP / USP",
    therapeuticCategory: "Anticonvulsant / Voltage-Gated Sodium Channel Blocker",
    dosageForms: "Tablets, Capsules, Suspensions, Injections",
    intro: "Phenytoin is a premier hydantoin-derivative anticonvulsant used globally for the treatment and prevention of diverse seizure types. It functions by direct stabilization of overactive neuronal membranes.",
    description: "Phenytoin blocks voltage-gated sodium channels in their inactive states, reducing sustained high-frequency firing of brain action potentials. This targeted control prevents seizure spread without inducing generalized CNS sedation. Sourced strictly from certified WHO-GMP and ISO certified plants.",
    therapeuticApplications: [
      "Treatment of generalized tonic-clonic and complex partial seizures",
      "Prophylaxis and clinical control of seizures during major neurosurgical procedures",
      "Treatment of acute status epilepticus (injectable sodium salt format)",
      "Management of neuropathic trigeminal neuralgia pain"
    ],
    keyAdvantages: [
      "High Clinical Standing: Celebrated first-line anticonvulsant with exceptional clinical success history.",
      "Assured Sourcing: Manufactured in world-class facilities with USFDA DMF filings and WHO-GMP audits.",
      "Reliable Supply: Excellent logistic channels and steady production outputs ensure uninterrupted delivery."
    ],
    packaging: {
      primary: "Double LDPE / HDPE inner bags",
      secondary: "HDPE / Fiber drums with inner seals",
      packSizes: ["5 kg", "10 kg", "25 kg"]
    },
    storage: {
      conditions: [
        "Store at controlled room temperature 15-30°C (59-86°F)",
        "Protect from light, excessive moisture, and air exposure",
        "Keep container tightly closed when not in use"
      ],
      shelfLife: "36 to 60 months under recommended dry warehouse storage"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White or almost white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Practically insoluble in water, soluble in hot alcohol and dilute alkali" },
      { srNo: 3, criteria: "Identification", specification: "A: IR spectrum conforms to USP/BP/EP; B: Melting point 295°C – 298°C; C: Positive color reaction for hydantoins" },
      { srNo: 4, criteria: "Melting Point", specification: "295°C – 298°C" },
      { srNo: 5, criteria: "Loss on Drying", specification: "Not more than 0.5% (105°C, 3 hours)" },
      { srNo: 6, criteria: "Related Substances (HPLC)", specification: "5,5-Diphenylhydantoin: NMT 0.3% / Benzophenone: NMT 0.2% / Any other individual: NMT 0.10% / Total: NMT 1.0%" },
      { srNo: 7, criteria: "Residue on Ignition", specification: "Not more than 0.1%" },
      { srNo: 8, criteria: "Heavy Metals", specification: "NMT 20 ppm" },
      { srNo: 9, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C guidelines" },
      { srNo: 10, criteria: "Chloride", specification: "NMT 200 ppm" },
      { srNo: 11, criteria: "Assay (by HPLC / Titrimetry)", specification: "99.0% – 101.0% on dried anhydrous basis" },
      { srNo: 12, criteria: "Microbial Limits", specification: "Total aerobic count: NMT 1000 CFU/g / Total yeast & mold: NMT 100 CFU/g / E. coli: Absent / Salmonella: Absent" }
    ],
    documentation: {
      qualityFeatures: [
        "Rigorous physical properties testing, including particle size customization",
        "Validated analytical techniques (HPLC, IR, UV)",
        "Strict batch record archiving"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA per batch)",
        "Drug Master File (DMF)",
        "Stability Studies summary reports",
        "MSDS"
      ]
    },
    relatedProducts: [
      { name: "Fosphenytoin Sodium", slug: "fosphenytoin-sodium", description: "Water-soluble phenytoin prodrug for urgent parental therapy." },
      { name: "Phenobarbital", slug: "phenobarbital", description: "Long-acting barbiturate anticonvulsant." },
      { name: "Memantine HCl", slug: "memantine-hydrochloride", description: "Targeted cognitive NMDA receptor blocker." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "ticagrelor",
    slug: "ticagrelor",
    name: "Ticagrelor",
    category: "cns-neurological",
    badge: "Cardiovascular API | WHO-GMP Source",
    casNumber: "274693-27-5",
    molecularFormula: "C23H28F2N6O4S",
    molecularWeight: "522.57 g/mol",
    grade: "USP / EP / In-house",
    therapeuticCategory: "Platelet Aggregation Inhibitor / P2Y12 Antagonist",
    dosageForms: "Tablets",
    intro: "Ticagrelor is a high-demand cardiovascular Active Pharmaceutical Ingredient (API). It acts as a platelet aggregation inhibitor and is supplied with reliable availability, regulatory readiness, and uninterrupted supply chains.",
    description: "Ticagrelor acts as a reversible and direct-acting P2Y12 receptor antagonist, preventing ADP-mediated platelet activation. It is widely leveraged in formulation pipelines to reduce cardiovascular stroke and myocardial infarction rates in patients with acute coronary syndrome (ACS).",
    therapeuticApplications: [
      "Finished dosage formulation development targeting acute coronary syndrome",
      "Generic pharmaceutical programs focusing on secondary stroke prevention",
      "Export-focused clinical cardiology formulations"
    ],
    keyAdvantages: [
      "Regulatory Readiness: Supported with full quality files including COA, MSDS, stability profiles, and pharmacopoeial compliance dossiers.",
      "Vendor Qualification: All supply partners are meticulously evaluated based on global quality systems, audit history, and consistency of supply.",
      "Global Market Access: Supporting customers across both highly regulated and semi-regulated international markets."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["1 kg", "5 kg", "10 kg"],
      notes: ["Custom packaging options available upon commercial feasibility"]
    },
    storage: {
      conditions: [
        "Store in a cool and dry place",
        "Protect from moisture and direct sunlight",
        "Keep containers tightly closed when not in use"
      ],
      shelfLife: "As per COA specifications"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to off-white crystalline solid" },
      { srNo: 2, criteria: "Solubility", specification: "Insoluble in water, soluble in organic solvents" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum complies and matches standard references" },
      { srNo: 4, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on anhydrous, solvent-free basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Advanced synthesis route minimizing diastereomers",
        "Complete technical documentation support",
        "High assay value repeatability"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Material Safety Data Sheet (MSDS)",
        "Stability and impurity profile data",
        "Regulatory support documents on request"
      ]
    },
    relatedProducts: [
      { name: "Alendronate Sodium", slug: "alendronate-sodium", description: "Primary bisphosphonate API." },
      { name: "Torsemide", slug: "torsemide", description: "Therapeutic loop diuretic API." },
      { name: "Eplerenone", slug: "eplerenone", description: "Selective mineralocorticoid blocker." }
    ],
    dmfAvailable: false,
    whoGmpCertified: true
  },
  {
    id: "tizanidine-hydrochloride",
    slug: "tizanidine-hydrochloride",
    name: "Tizanidine Hydrochloride",
    category: "cns-neurological",
    badge: "CNS & Neurological API | WHO-GMP Source",
    casNumber: "64461-82-1",
    molecularFormula: "C9H9Cl2N5S",
    molecularWeight: "290.17 g/mol",
    grade: "USP / EP / BP",
    therapeuticCategory: "Skeletal Muscle Relaxant / Alpha-2 Adrenergic Agonist",
    dosageForms: "Tablets, Capsules",
    intro: "Tizanidine Hydrochloride is a centrally acting skeletal muscle relaxant API widely used in oral solid dosage formulations. Ken Hill Pharma Limited supplies this through qualified WHO-GMP compliant sources.",
    description: "Tizanidine Hydrochloride acts as an agonist at central alpha-2 adrenergic receptors. It decreases the release of excitatory amino acids from spinal interneurons, successfully reducing muscle spasticity associated with Multiple Sclerosis, spinal cord injury, and neurological dysfunctions.",
    therapeuticApplications: [
      "Oral solid dosage formulation development for muscle spasticity",
      "Generic CNS wellness prescribing pipelines",
      "Export-focused muscle spasm clinical projects"
    ],
    keyAdvantages: [
      "Regulatory Readiness: Supported with full COA, MSDS, stability data, impurity profiles, and pharmacopoeial compliance documentation.",
      "High Purity API: Consistent production with controlled chemical micro-impurities, perfect for solid oral dosing.",
      "Global Supply Corridors: Reliable sourcing and strategic export support for regulated and semi-regulated markets globally."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["1 kg", "5 kg", "10 kg"],
      notes: ["Custom export packaging available on commercial parameters"]
    },
    storage: {
      conditions: [
        "Store in a cool and dry place",
        "Protect from moisture and direct sunlight",
        "Keep container tightly closed when not in use"
      ],
      shelfLife: "As per COA specifications"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to off-white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Soluble in water, slightly soluble in ethanol" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum conforms and complies with standard references" },
      { srNo: 4, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on dried basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Unfailing physical crystallographic consistency",
        "Excellent content uniformity and dispersion parameters",
        "Rigorous raw material checking"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Material Safety Data Sheet (MSDS)",
        "Stability and impurity profile reports",
        "GMP Certificates from manufacturer units"
      ]
    },
    relatedProducts: [
      { name: "Memantine HCl", slug: "memantine-hydrochloride", description: "Alzheimer cognitive supportive active ingredient." },
      { name: "Phenobarbital", slug: "phenobarbital", description: "Sedative barbiturate anticonvulsant API." },
      { name: "Phenytoin", slug: "phenytoin", description: "Classic voltage sodium channel block anticonvulsant." }
    ],
    dmfAvailable: false,
    whoGmpCertified: true
  }
];
