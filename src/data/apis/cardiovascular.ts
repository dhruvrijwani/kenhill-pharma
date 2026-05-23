import { APIProduct } from '../../lib/types';

export const cardiovascularAPIs: APIProduct[] = [
  {
    id: "alendronate-sodium",
    slug: "alendronate-sodium",
    name: "Alendronate Sodium",
    category: "cardiovascular",
    badge: "Cardiovascular API | WHO-GMP Certified",
    casNumber: "121268-17-5",
    molecularFormula: "C4H12NNaO7P2·3H2O",
    molecularWeight: "325.12 g/mol",
    grade: "USP/EP/BP",
    therapeuticCategory: "Osteoporosis Agent / Bisphosphonate",
    dosageForms: "Tablets, Oral Solution",
    intro: "High-quality bisphosphonate API for osteoporosis treatment, available with complete quality and regulatory documentation.",
    description: "Alendronate Sodium is a bisphosphonate compound used primarily in the treatment and prevention of osteoporosis. It works by inhibiting osteoclast-mediated bone resorption, thereby increasing bone mineral density and reducing fracture risk.",
    therapeuticApplications: [
      "Treatment of postmenopausal osteoporosis",
      "Prevention of osteoporosis in high-risk patients",
      "Treatment of glucocorticoid-induced osteoporosis",
      "Treatment of Paget's disease of bone"
    ],
    keyAdvantages: [
      "Regulatory Compliance: USFDA DMF filed, EU CEP certified, and fully compliant with USP/EP/BP monographs.",
      "High Purity: Guaranteed consistent purity ≥98.0% with controlled impurity profile supported by validated COA.",
      "Global Supply: Reliable, high-efficiency supply chain serving 50+ countries with consistent and on-time shipment delivery."
    ],
    packaging: {
      primary: "Double LDPE bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["1 kg", "5 kg", "10 kg", "25 kg"],
      notes: ["Custom packaging is available on request subject to clinical feasibility"]
    },
    storage: {
      conditions: [
        "Store at 15-30°C (59-86°F)",
        "Protect from light and moisture",
        "Keep container tightly closed",
        "Store in a dry, well-ventilated area"
      ],
      shelfLife: "36 months when stored under recommended conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "A white or almost white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Soluble in water, practically insoluble in methanol and in methylene chloride" },
      { srNo: 3, criteria: "Identification", specification: "A) IR spectrum is concordant with reference standard; B) 16.1% to 17.1% loss on drying; C) Positive reaction for sodium salts" },
      { srNo: 4, criteria: "pH", specification: "4.0 – 5.0" },
      { srNo: 5, criteria: "Related Substances (HPLC)", specification: "Impurity A: NMT 0.15% / Unspecified: NMT 0.10% / Total Impurities: NMT 0.5%" },
      { srNo: 6, criteria: "Impurity B and Impurity C", specification: "NMT 0.5% / NMT 0.5%" },
      { srNo: 7, criteria: "Loss on Drying", specification: "16.1% to 17.1% (dried at 140°C to 145°C)" },
      { srNo: 8, criteria: "Assay (By HPLC)", specification: "98.0% – 102.0% on dried anhydrous basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Sourced strictly from certified WHO-GMP Facilities",
        "Completed comprehensive stability reporting in line with ICH Guidelines",
        "Full batch analysis records and analytical method validations"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF)",
        "Stability Studies Report",
        "Regulatory Starting Material (RSM) Documentation",
        "GMP Certificates"
      ]
    },
    regulatory: {
      approvals: ["USFDA DMF Filed", "EU CEP Certified", "WHO-GMP Audited Unit"],
      pharmacopoeialStandards: ["USP Monograph Compliant", "EP Monograph Compliant", "BP Monograph Compliant"]
    },
    relatedProducts: [
      { name: "Risedronate Sodium", slug: "risedronate-sodium", description: "Third-generation structural bisphosphonate for osteoporosis management." },
      { name: "Ibandronate Sodium", slug: "ibandronate-sodium", description: "High-efficacy nitrogen bisphosphonate with flexible monthly dosing guidelines." },
      { name: "Pamidronate Disodium", slug: "pamidronate-disodium", description: "Injectable high-purity bisphosphonate for oncology-associated bone support." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "ibandronate-sodium",
    slug: "ibandronate-sodium",
    name: "Ibandronate Sodium",
    category: "cardiovascular",
    badge: "Osteoporosis API | WHO-GMP Certified",
    casNumber: "114084-78-5",
    molecularFormula: "C9H22NNaO7P2·H2O",
    molecularWeight: "341.23 g/mol",
    grade: "USP / EP / BP",
    therapeuticCategory: "Osteoporosis Management / Nitrogen-containing Bisphosphonate",
    dosageForms: "Tablets, Intravenous Solution",
    intro: "High-potency nitrogen-containing bisphosphonate API used for the treatment and prevention of postmenopausal osteoporosis, manufactured under stringent GMP guidelines.",
    description: "Ibandronate Sodium is a nitrogen-containing bisphosphonate that selectively inhibits osteoclast-mediated bone resorption. It is used in oral monthly and intravenous dosage forms for osteoporosis management.",
    therapeuticApplications: [
      "Treatment and prevention of postmenopausal osteoporosis",
      "Significant reduction of vertebral fracture risks over long-term therapy",
      "Formulations requiring monthly oral active dosages or quarterly IV injections"
    ],
    keyAdvantages: [
      "Regulatory Compliance: USFDA DMF filed, CEP available, and fully compliant with USP, EP, and BP standards.",
      "High Potency & Purity: Third-generation active agent with stringently controlled impurity profile and high assay value.",
      "Global Supply: Reliable export channels serving regulated and semi-regulated markets worldwide with rapid lead times."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["1 kg", "5 kg", "10 kg", "25 kg"]
    },
    storage: {
      conditions: [
        "Store below 30°C",
        "Protect from moisture and direct light",
        "Keep container tightly closed"
      ],
      shelfLife: "36 Months when stored under recommended conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to off-white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Soluble in water, slightly soluble in methanol" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum complies and conforms to reference standard" },
      { srNo: 4, criteria: "pH", specification: "4.5 – 6.0" },
      { srNo: 5, criteria: "Loss on Drying", specification: "5.0% – 7.0%" },
      { srNo: 6, criteria: "Related Substances", specification: "Total impurities NMT 1.5%" },
      { srNo: 7, criteria: "Assay (HPLC)", specification: "98.0% – 102.0% on anhydrous basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Rigorous raw material controls",
        "Exceptional batch-to-batch physical and chemical consistency",
        "Fully validated chromatography systems"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "MSDS (Safety Data Sheet)",
        "Stability Profiling Records",
        "EU CEP Certifications"
      ]
    },
    relatedProducts: [
      { name: "Alendronate Sodium", slug: "alendronate-sodium", description: "Gold standard drug for postmenopausal osteoporosis." },
      { name: "Pamidronate Disodium", slug: "pamidronate-disodium", description: "Therapeutic agent preventing serious bone complications in oncology." },
      { name: "Risedronate Sodium", slug: "risedronate-sodium", description: "Broad-spectrum bisphosphonate with low gastrointestinal footprint." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "pamidronate-disodium",
    slug: "pamidronate-disodium",
    name: "Pamidronate Disodium",
    category: "cardiovascular",
    badge: "Oncology API | WHO-GMP Certified",
    casNumber: "57248-88-1",
    molecularFormula: "C3H9Na2O7P2",
    molecularWeight: "279.05 g/mol",
    grade: "USP / EP / BP",
    therapeuticCategory: "Bone Resorption Inhibitor / Antihypercalcemic",
    dosageForms: "Intravenous Infusion (Bulk Drug API)",
    intro: "Pamidronate Disodium is a high-quality bisphosphonate Active Pharmaceutical Ingredient (API) primarily used in the treatment of hypercalcemia of malignancy, osteolytic bone metastases, and metabolic bone disorders. Our API is manufactured in compliance with international GMP standards.",
    description: "Pamidronate Disodium belongs to the class of bisphosphonates that inhibit osteoclast-mediated bone resorption. It is widely used in intravenous formulations for oncology-related bone disorders. The API plays a crucial role in managing calcium levels in patients with malignancy-related hypercalcemia and preventing skeletal complications.",
    therapeuticApplications: [
      "Hypercalcemia of malignancy (calcium leveling)",
      "Osteolytic bone metastases associated with breast cancer or multiple myeloma",
      "Paget's disease of bone",
      "Multiple myeloma related bone loss and pain relief"
    ],
    keyAdvantages: [
      "Regulatory Compliance: Sourced from WHO-GMP certified facilities with full compliance to USP, EP, and BP pharmacopeial standards.",
      "High Purity & Consistency: Manufactured using validated synthesis procedures ensuring high assay value and minimal impurities.",
      "Global Market Supply: Supplied to regulated, semi-regulated, and emerging markets with total logistical confidence."
    ],
    packaging: {
      primary: "Double LDPE inner lining",
      secondary: "HDPE / Fiber drums",
      packSizes: ["1 kg", "5 kg", "10 kg", "25 kg"],
      notes: ["Customized packing available upon request"]
    },
    storage: {
      conditions: [
        "Store in a cool, dry place",
        "Protect from moisture and direct sunlight",
        "Keep container tightly closed"
      ],
      shelfLife: "36 Months when stored under validated storage conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White or almost white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Freely soluble in water, practically insoluble in methanol" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum conforms to USP reference standard" },
      { srNo: 4, criteria: "pH", specification: "4.0 – 5.5" },
      { srNo: 5, criteria: "Loss on Drying", specification: "Not more than 6.0%" },
      { srNo: 6, criteria: "Related Substances", specification: "Total impurities NMT 1.0%" },
      { srNo: 7, criteria: "Assay (HPLC)", specification: "98.0% – 102.0% on dried basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Controlled multi-step chemical synthesis",
        "Rigorous in-process quality controls and batch trace logs",
        "Complete structural analysis profile"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF)",
        "Stability Data and Reports",
        "Material Safety Data Sheet (MSDS)"
      ]
    },
    relatedProducts: [
      { name: "Alendronate Sodium", slug: "alendronate-sodium", description: "Premium bisphosphonate for osteoporosis therapeutics." },
      { name: "Ibandronate Sodium", slug: "ibandronate-sodium", description: "Bone mass density support agent." },
      { name: "Risedronate Sodium", slug: "risedronate-sodium", description: "Musculoskeletal bone remodeling active pharmaceutical ingredient." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "risedronate-sodium",
    slug: "risedronate-sodium",
    name: "Risedronate Sodium",
    category: "cardiovascular",
    badge: "Musculoskeletal API | WHO-GMP Certified",
    casNumber: "31143-49-4",
    molecularFormula: "C7H10NO7P2Na",
    molecularWeight: "305.10 g/mol",
    grade: "USP / EP / BP",
    therapeuticCategory: "Bone Remodeling Agent / Pyridinyl Bisphosphonate",
    dosageForms: "Tablets",
    intro: "Risedronate Sodium is a bisphosphonate used in the treatment and prevention of osteoporosis and other bone-related disorders. Manufactured under helical GMP-compliant conditions with complete regulatory support.",
    description: "Risedronate Sodium inhibits bone resorption by binding to hydroxyapatite in bone and inhibiting osteoclast activity. It is widely used in the treatment of osteoporosis, Paget's disease, and other bone-related skeletal disorders.",
    therapeuticApplications: [
      "Osteoporosis treatment and prevention in postmenopausal women",
      "Paget's disease of bone (osteitis deformans)",
      "Glucocorticoid-induced osteoporosis prevention",
      "Prevention of bone fractures in high-risk skeletal patients"
    ],
    keyAdvantages: [
      "Regulatory Compliance: Fully compliant with USP, EP, and BP standards with active DMF files on record.",
      "High Purity: Advanced chemical synthesis pathways ensuring consistent high purity with minimum degradation assets.",
      "Global Supply Capability: Reliable supply infrastructure to global markets with deep documentation support."
    ],
    packaging: {
      primary: "Double LDPE inner bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["1 kg", "5 kg", "10 kg", "25 kg"],
      notes: ["Custom packaging options available upon special request"]
    },
    storage: {
      conditions: [
        "Store at controlled room temperature 20-25°C (68-77°F)",
        "Protect from light and moisture",
        "Keep container tightly closed",
        "Store in a dry, well-ventilated area"
      ],
      shelfLife: "36 months when stored under recommended room parameters"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to off-white crystalline powder" },
      { srNo: 2, criteria: "Solubility", specification: "Soluble in water, practically insoluble in ethanol" },
      { srNo: 3, criteria: "Identification", specification: "IR spectrum is concordant with reference standard" },
      { srNo: 4, criteria: "pH", specification: "4.0 – 5.5" },
      { srNo: 5, criteria: "Loss on Drying", specification: "11.5% – 13.5%" },
      { srNo: 6, criteria: "Related Substances", specification: "Total impurities NMT 1.0%" },
      { srNo: 7, criteria: "Assay (HPLC)", specification: "98.0% – 102.0% on anhydrous basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Strict compliance with standard operating procedures",
        "Rigorous physical characteristics profiling",
        "Impeccable trace record of all raw materials"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "Drug Master File (DMF) Dossier",
        "MSDS",
        "Validated Stability Reports"
      ]
    },
    relatedProducts: [
      { name: "Alendronate Sodium", slug: "alendronate-sodium", description: "Widely prescribed bisphosphonate for postmenopausal bone density." },
      { name: "Ibandronate Sodium", slug: "ibandronate-sodium", description: "Osteoclast activity inhibitor for oral dosing." },
      { name: "Pamidronate Disodium", slug: "pamidronate-disodium", description: "Antihypercalcemic oncology-support bisphosphonate." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  }
];
