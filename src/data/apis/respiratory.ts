import { APIProduct } from '../../lib/types';

export const respiratoryAPIs: APIProduct[] = [
  {
    id: "allopurinol",
    slug: "allopurinol",
    name: "Allopurinol",
    category: "respiratory",
    badge: "Metabolic Disorder API | WHO-GMP Source",
    casNumber: "315-30-0",
    molecularFormula: "C5H4N4O",
    molecularWeight: "136.11 g/mol",
    grade: "USP / EP / BP / IP",
    therapeuticCategory: "Anti-gout / Xanthine Oxidase Inhibitor",
    dosageForms: "Tablets",
    intro: "Allopurinol is a xanthine oxidase inhibitor widely used in the clinical management of hyperuricemia and gout. Ken Hill Pharma Limited supplies Allopurinol API through highly reliable, WHO-GMP compliant sourcing partners with complete documentation.",
    description: "Allopurinol is a structural isomer of hypoxanthine (a naturally occurring purine). It acts as a purine analog that competitively inhibits xanthine oxidase, the critical enzyme responsible for the metabolic conversion of hypoxanthine to xanthine, and subsequently to uric acid. This action decreases serum and urinary uric acid levels, protecting against gouty arthritis and nephropathy.",
    therapeuticApplications: [
      "Chronic gout management (prevention of joint and tophi flares)",
      "Hyperuricemia associated with leukemia, lymphoma, or solid tumor therapy cell turnover",
      "Prevention of uric acid-related nephropathy during major oncology protocols",
      "Management of recurrent calcium oxalate or uric acid stone-forming tendencies"
    ],
    keyAdvantages: [
      "Regulatory Confidence: Supplied with complete regulatory dossiers including COA, MSDS, stability data, and pharmacopoeial compliance DMFs.",
      "Consistent Quality: High-purity API with controlled impurity profiles and high crystalline stability, ideal for tableting.",
      "Risk Mitigation: Multi-source security strategy paired with selective vendor qualifications to secure seamless client supply."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["5 kg", "10 kg", "25 kg"],
      notes: ["Palletized shipments with tamper-evident security sealing"]
    },
    storage: {
      conditions: [
        "Store in a cool, dry place",
        "Protect from moisture, direct sunlight, and heat leakages",
        "Keep container tightly closed and follow standard API storage parameters"
      ],
      shelfLife: "48 to 60 months when stored under standard sealed parameters"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White or almost white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Practically insoluble in water and in alcohol; soluble in dilute solutions of alkali hydroxides" },
      { srNo: 3, criteria: "Identification", specification: "IR absorption spectrum aligns with reference working spectrum" },
      { srNo: 4, criteria: "Loss on Drying", specification: "NMT 0.5% (dried in vacuum at 105°C, 3 hours)" },
      { srNo: 5, criteria: "Related Substances (HPLC)", specification: "Any individual impurity: NMT 0.15% / Total impurities: NMT 0.5%" },
      { srNo: 6, criteria: "Heavy Metals", specification: "NMT 20 ppm" },
      { srNo: 7, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C limits" },
      { srNo: 8, criteria: "Assay (by HPLC)", specification: "98.0% – 101.5% on dried vacuum anhydrous basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Validated analytical methods and standard working references",
        "Controlled polymorphic and impurity profile tracking",
        "ICH guideline adherence for quality systems"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA per batch)",
        "Drug Master File (DMF)",
        "Material Safety Data Sheet (MSDS)",
        "Stability Study Data / ICH stability summary docs",
        "GMP Certificates and quality declarations"
      ]
    },
    relatedProducts: [
      { name: "Eplerenone", slug: "eplerenone", description: "Selective mineralocorticoid antagonist." },
      { name: "Torsemide", slug: "torsemide", description: "Pyridine loop diuretic API." },
      { name: "Alendronate Sodium", slug: "alendronate-sodium", description: "Bone density-support bisphosphonate." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  }
];
