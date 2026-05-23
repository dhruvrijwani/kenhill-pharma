import { APIProduct } from '../../lib/types';

export const gastrointestinalAPIs: APIProduct[] = [
  {
    id: "bisacodyl",
    slug: "bisacodyl",
    name: "Bisacodyl",
    category: "gastrointestinal",
    badge: "Gastrointestinal API | WHO-GMP Certified",
    casNumber: "603-50-9",
    molecularFormula: "C22H19NO4",
    molecularWeight: "361.39 g/mol",
    grade: "USP / EP / BP / IP",
    therapeuticCategory: "Stimulant Laxative",
    dosageForms: "Tablets, Enteric-coated Tablets, Suppositories",
    intro: "Bisacodyl is a high-quality stimulant laxative API, widely used for the prompt relief of constipation and for thorough bowel preparation prior to medical radiological procedures.",
    description: "Bisacodyl is a locally acting stimulant laxative. It is hydrolyzed by intestinal enzymes to its active desacetyl metabolite, which directly stimulates sensory nerve endings in the colonic mucosa, accelerating peristalsis and promoting fluid accumulation in the colon. Our API ensures superior purity and high thermal stability.",
    therapeuticApplications: [
      "Short-term clinical management of acute or chronic constipation",
      "Bowel preparation prior to colonoscopies, abdominal radiologies, or surgical operations",
      "Pre-operative and post-operative bowel cleansing regimens",
      "Constipation management associated with specific medications or chronic immobility"
    ],
    keyAdvantages: [
      "Global Regulatory Alignment: Manufactured strictly in WHO-GMP certified facilities with complete COA, DMF, and MSDS dossiers.",
      "High Purity & Stability: Advanced purification processes ensure standard-setting assay parameters and near-zero related compounds.",
      "Reliable Supply Chains: Consistent bulk availability with direct logistical routes to Europe, APAC, and South America."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums for external safety",
      packSizes: ["1 kg", "5 kg", "10 kg", "25 kg"],
      notes: ["Customized medical packaging available upon request"]
    },
    storage: {
      conditions: [
        "Store in a cool, dry place below 30°C",
        "Protect from moisture, direct heat, and intense sunlight",
        "Keep container tightly closed"
      ],
      shelfLife: "48 Months when stored under dry, non-humid conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White or off-white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Practically insoluble in water; soluble in acetone; sparingly soluble in alcohol" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum matches reference USP standard" },
      { srNo: 4, criteria: "Loss on Drying", specification: "NMT 0.5%" },
      { srNo: 5, criteria: "Sulfated Ash", specification: "NMT 0.1%" },
      { srNo: 6, criteria: "Related Substances (HPLC)", specification: "Total impurities NMT 1.0%" },
      { srNo: 7, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C safety parameters" },
      { srNo: 8, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on dried basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Outstanding molecular stability in diverse environments",
        "Absence of residual volatile chlorinated solvent toxins",
        "Rigidly monitored batch physical crystallization properties"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF)",
        "Material Safety Data Sheet (MSDS)",
        "ICH standard Stability Summary Documents"
      ]
    },
    relatedProducts: [
      { name: "Sodium Picosulfate", slug: "sodium-picosulfate", description: "Colonic-specific stimulant laxative prodrug." },
      { name: "Glycopyrrolate", slug: "glycopyrrolate", description: "Anticholinergic gastrointestinal secretions regulator." },
      { name: "Alendronate Sodium", slug: "alendronate-sodium", description: "High-purity bone mass supportive agent." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "sodium-picosulfate",
    slug: "sodium-picosulfate",
    name: "Sodium Picosulfate",
    category: "gastrointestinal",
    badge: "Gastrointestinal API | WHO-GMP Certified",
    casNumber: "10040-45-6",
    molecularFormula: "C18H13NNa2O8S2",
    molecularWeight: "481.41 g/mol",
    grade: "BP / EP / USP",
    therapeuticCategory: "Stimulant Laxative / Arylmethane Prodrug",
    dosageForms: "Tablets, Oral Liquid Solution, Powder Packets",
    intro: "Sodium Picosulfate is a highly effective colonic stimulant laxative. It undergoes natural bacterial activation to clear the intestinal tract before surgical or radiological diagnostic procedures.",
    description: "Sodium Picosulfate is a prodrug that is hydrolyzed by sulfatase-producing colonic bacteria into its active bis-(p-hydroxyphenyl)-pyridyl-2-methane (BHPM) molecule. This active directly stimulates the colonic mucosal nervous network, amplifying peristalsic transport. Manufactured under stringent GMP conditions.",
    therapeuticApplications: [
      "Treatment of acute or long-term chronic functional constipation",
      "Bowel preparation and evacuation before clinical colonoscopies or radiographies",
      "Pre-operative and post-operative gastrointestinal emptying support",
      "Management of temporary opioid-induced or physical immobility constipation"
    ],
    keyAdvantages: [
      "Targeted Action: Acts exclusively in the colon, leaving the upper digestive tract entirely unaffected.",
      "High Pure Synthesis: Managed under stringent quality checklines with zero risk of trace starting materials.",
      "Extensive Compliance Notes: Complete technical validation reports matching Japanese, British, and United States Pharmacopoeia standards."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["5 kg", "10 kg", "25 kg"],
      notes: ["Sealed against moisture and temperature creepages"]
    },
    storage: {
      conditions: [
        "Store below 25°C (77°F)",
        "Protect from moisture and intense light",
        "Keep container tightly closed to prevent humidity absorption",
        "Avoid any exposure to high heats"
      ],
      shelfLife: "36 Months when stored under standard clean conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to slightly pink crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Freely soluble in water, sparingly soluble in alcohol, practically insoluble in acetone" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum conforms and complies with BP reference standards" },
      { srNo: 4, criteria: "pH (1% aqueous solution)", specification: "8.5 – 10.0" },
      { srNo: 5, criteria: "Loss on Drying", specification: "Not more than 10.0%" },
      { srNo: 6, criteria: "Related Substances (HPLC)", specification: "BHPM active metabolite: NMT 0.5% / 4-Aminophenol: NMT 0.3% / Any other single: NMT 0.2% / Total: NMT 1.5%" },
      { srNo: 7, criteria: "Sulfated Ash", specification: "20.0% – 24.0%" },
      { srNo: 8, criteria: "Heavy Metals", specification: "NMT 20 ppm" },
      { srNo: 9, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C guidelines" },
      { srNo: 10, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on anhydrous and solvent-free basis" },
      { srNo: 11, criteria: "Microbial Limits", specification: "Total aerobic count: NMT 1000 CFU/g / Yeast & Mold: NMT 100 CFU/g / E. coli & Salmonella: Absent" }
    ],
    documentation: {
      qualityFeatures: [
        "Unfailing physical quality parameters matching international client benchmarks",
        "Extremely low microbial count validated",
        "Batch traceability records in line with GMP requirements"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF)",
        "MSDS and GMP Certificates",
        "Stability Testing validation records"
      ]
    },
    relatedProducts: [
      { name: "Bisacodyl", slug: "bisacodyl", description: "Direct enteric-coated stimulant laxative." },
      { name: "Glycopyrrolate", slug: "glycopyrrolate", description: "Secretions controller for peptic and duodenal support." },
      { name: "Picosulfate Sodium", slug: "picosulfate-sodium", description: "Equivalent molecular entity under alternative nomenclature." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "glycopyrrolate",
    slug: "glycopyrrolate",
    name: "Glycopyrrolate",
    category: "gastrointestinal",
    badge: "Gastrointestinal API | WHO-GMP Certified",
    casNumber: "596-51-0",
    molecularFormula: "C19H28BrNO3",
    molecularWeight: "398.33 g/mol",
    grade: "USP / EP / BP",
    therapeuticCategory: "Anticholinergic / Quaternary Ammonium Agent",
    dosageForms: "Tablets, Injectable Solution",
    intro: "Glycopyrrolate is a premium quaternary ammonium anticholinergic agent used to reduce secretions, block vagal reflexes during anesthesia, and act as an adjunctive treatment for peptic ulcer diseases.",
    description: "Glycopyrrolate competitively blocks muscarinic receptors (M1, M2, and M3 subtypes) in peripheral tissues, significantly reducing secretory activity of salivary, bronchial, pharyngeal, and sweat glands, while reducing gastric acid secretion and gastrointestinal hypermotility. Sourced strictly from certified facilities.",
    therapeuticApplications: [
      "Adjunctive treatment of peptic and duodenal ulcer diseases",
      "Reduction of saliva, tracheobronchial, and pharyngeal secretions pre-operatively",
      "Pre-operative antisialagogue in anesthesia to counter muscarinic side effects",
      "Adjunct in reversing neuromuscular blockade (co-administered with neostigmine)",
      "Management of chronic severe drooling (sialorrhea) in pediatric and adult neurological patients"
    ],
    keyAdvantages: [
      "Targeted Peripheral Action: Quaternary structure blocks easy crossing of the blood-brain barrier, ensuring near-zero CNS side effects.",
      "High Pure Injectable Grade: Exceptionally low endotoxin and fully validated sterile crystallization suitable for intravenous injectables.",
      "Wide Compendial Approvals: Compliant with USP, EP, and BP monographs with active USFDA drug master files filed."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["1 kg", "5 kg", "10 kg"],
      notes: ["Sterile grade packaging available under aseptic clean conditions"]
    },
    storage: {
      conditions: [
        "Store at controlled room temperature 20-25°C (68-77°F)",
        "Protect from moisture and direct light",
        "Keep container tightly closed in a dry place",
        "Excursions permitted up to 15-30°C"
      ],
      shelfLife: "36 months when stored under validated, non-humid conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White or practically white, odorless crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Freely soluble in water and alcohol; practically insoluble in chloroform" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum matches reference standard (USP)" },
      { srNo: 4, criteria: "pH (1% aqueous solution)", specification: "4.5 – 7.0" },
      { srNo: 5, criteria: "Specific Rotation", specification: "-23.0° to -26.0° (calculated on anhydrous basis)" },
      { srNo: 6, criteria: "Loss on Drying", specification: "Not more than 1.0%" },
      { srNo: 7, criteria: "Sulfated Ash", specification: "Not more than 0.1%" },
      { srNo: 8, criteria: "Related Substances (HPLC)", specification: "Any individual impurity: NMT 0.5% / Total impurities: NMT 2.0%" },
      { srNo: 9, criteria: "Heavy Metals", specification: "NMT 20 ppm" },
      { srNo: 10, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C guidelines" },
      { srNo: 11, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on dried basis" },
      { srNo: 12, criteria: "Bacterial Endotoxins", specification: "NMT 0.5 EU/mg (for injectable grade)" },
      { srNo: 13, criteria: "Sterility", specification: "Complies fully with USP <71> (for sterile injectable grades)" }
    ],
    documentation: {
      qualityFeatures: [
        "Exceptional physical powder consistency with low electrostatic profiles",
        "Fully validated, endotoxin-free manufacturing suites",
        "Rigorous chiral optical rotation control"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF)",
        "Stability and Endotoxin Study Reports",
        "GMP Certificates from manufacturer units",
        "Validation and optical test logs"
      ]
    },
    relatedProducts: [
      { name: "Bisacodyl", slug: "bisacodyl", description: "Stimulant intestinal purgation laxative API." },
      { name: "Sodium Picosulfate", slug: "sodium-picosulfate", description: "Bacterial-activated stimulant laxative prodrug." },
      { name: "Phenobarbital Sodium", slug: "phenobarbital-sodium", description: "Parenteral sedative anticonvulsant." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "picosulfate-sodium",
    slug: "picosulfate-sodium",
    name: "Picosulfate Sodium",
    category: "gastrointestinal",
    badge: "Gastrointestinal API | WHO-GMP Certified",
    casNumber: "10040-45-6",
    molecularFormula: "C18H13NNa2O8S2",
    molecularWeight: "481.41 g/mol",
    grade: "BP / EP / USP",
    therapeuticCategory: "Stimulant Laxative / Arylmethane Prodrug",
    dosageForms: "Tablets, Solutions, Sachets",
    intro: "Picosulfate Sodium (Sodium Picosulfate) is a highly reliable stimulate laxative, ideal for thorough colon transit acceleration and surgical diagnostic pre-emptions.",
    description: "Under alternative naming conventions, Picosulfate Sodium matches the identical molecular structure of Sodium Picosulfate. It undergoes in-situ metabolic reduction via localized anaerobic bacteria to release the potent mucosal contact peristalsis driver, BHPM. Distributed with comprehensive regulatory files.",
    therapeuticApplications: [
      "Clinical treatment of functional severe constipation",
      "Bowel preparation and total evacuation before major diagnostic colonoscopies",
      "Radiological abdominal imaging bowel emptier",
      "Severe or persistent constipation associated with drugs or physical immobilities"
    ],
    keyAdvantages: [
      "Strategic Localized Activation: Zero systemic digestive blockages, working authoritative in the lower bowel.",
      "High Pure Specifications: Sourced from prime facilities with complete batch validation and COA dossiers.",
      "Global Logistic Prowess: Safe transport lines aligned with international drug regulations and packaging norms."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["5 kg", "10 kg", "25 kg"]
    },
    storage: {
      conditions: [
        "Store below 25°C (77°F)",
        "Protect from light and direct moisture",
        "Keep container tightly closed"
      ],
      shelfLife: "36 months when stored under recommended state parameters"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to slightly pink crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Freely soluble in water, sparingly soluble in alcohol" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum conforms to BP reference parameters" },
      { srNo: 4, criteria: "pH (1% solution)", specification: "8.5 – 10.0" },
      { srNo: 5, criteria: "Loss on Drying", specification: "Not more than 10.0%" },
      { srNo: 6, criteria: "Related Substances (HPLC)", specification: "BHPM active compound: NMT 0.5% / 4-Aminophenol: NMT 0.3% / Any other: NMT 0.2% / Total: NMT 1.5%" },
      { srNo: 7, criteria: "Sulfated Ash", specification: "20.0% – 24.0%" },
      { srNo: 8, criteria: "Heavy Metals", specification: "NMT 20 ppm" },
      { srNo: 9, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C guidelines" },
      { srNo: 10, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on anhydrous and solvent-free basis" },
      { srNo: 11, criteria: "Microbial Limits", specification: "Total aerobic count: NMT 1000 CFU/g / Yeast & Mold: NMT 100 CFU/g / E. coli: Absent" }
    ],
    documentation: {
      qualityFeatures: [
        "Rigorous micro-biological safety checks",
        "Batch-to-batch physical color stability",
        "Validated HPLC control guidelines"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA per batch)",
        "Drug Master File (DMF)",
        "MSDS",
        "Stability and validation documents"
      ]
    },
    relatedProducts: [
      { name: "Sodium Picosulfate", slug: "sodium-picosulfate", description: "Equivalent active pharmaceutical molecule." },
      { name: "Bisacodyl", slug: "bisacodyl", description: "Direct colonic contact stimulant laxative API." },
      { name: "Glycopyrrolate", slug: "glycopyrrolate", description: "Muscarinic sekretory block anticholinergic API." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  }
];
