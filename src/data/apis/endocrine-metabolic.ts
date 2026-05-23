import { APIProduct } from '../../lib/types';

export const endocrineMetabolicAPIs: APIProduct[] = [
  {
    id: "eplerenone",
    slug: "eplerenone",
    name: "Eplerenone",
    category: "endocrine-metabolic",
    badge: "Endocrine & Metabolic API | WHO-GMP Source",
    casNumber: "107724-20-9",
    molecularFormula: "C24H30O6",
    molecularWeight: "414.49 g/mol",
    grade: "USP / EP / BP / IP",
    therapeuticCategory: "Aldosterone Antagonist / Cardiovascular Risk Reducer",
    dosageForms: "Tablets",
    intro: "Eplerenone is a selective mineralocorticoid receptor antagonist (MRA) used in antihypertensive and cardiovascular risk management segments. Sourced from high-performance WHO-GMP compliant facilities.",
    description: "Eplerenone binds selectively to mineralocorticoid receptors, preventing the physiological binding of aldosterone, a pivotal component of the renin-angiotensin-aldosterone system (RAAS). Unlike spironolactone, eplerenone exhibits negligible binding to androgenic and progesterone receptors, presenting an exceptional safety profile for chronic heart failure and post-MI patient pipelines.",
    therapeuticApplications: [
      "Antihypertensive formulations targeting stable blood pressure control",
      "Cardiovascular risk-reduction and heart failure-related therapeutic pipelines",
      "Combination products paired with standard cardiovascular agents"
    ],
    keyAdvantages: [
      "Regulatory Readiness: Sourced from WHO-GMP compliant units with robust DMF/CEP filings and dossier support.",
      "Controlled Quality: Odorless white crystalline powder, engineered with highly controlled isomeric and metallic impurity profiles.",
      "Global Logistic Prowess: Excellent export capabilities with flexible batch sizes and cold/ambient container track integration."
    ],
    packaging: {
      primary: "Double LDPE bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["5 kg", "10 kg", "25 kg"],
      notes: ["Custom packaging is supportable upon request"]
    },
    storage: {
      conditions: [
        "Store at room temperature in a cool, dry place",
        "Protect from light and direct moisture",
        "Keep container tightly closed"
      ],
      shelfLife: "36 to 48 months when stored under recommended warehouse conditions"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to off-white crystalline powder" },
      { srNo: 2, criteria: "Identification", specification: "IR spectrum conforms to Eplerenone reference standard" },
      { srNo: 3, criteria: "Solubility", specification: "Very slightly soluble in water; soluble in DMSO and suitable organic solvents" },
      { srNo: 4, criteria: "Melting Range", specification: "Approx. 241 – 243°C" },
      { srNo: 5, criteria: "Water Content (Karl Fischer)", specification: "Not more than 1.0%" },
      { srNo: 6, criteria: "Related Substances (HPLC)", specification: "Any individual impurity: NMT 0.2% / Total impurities: NMT 1.0%" },
      { srNo: 7, criteria: "Residue on Ignition", specification: "NMT 0.1%" },
      { srNo: 8, criteria: "Heavy Metals", specification: "NMT 20 ppm" },
      { srNo: 9, criteria: "Residual Solvents", specification: "Complies fully with ICH Q3C safety parameters" },
      { srNo: 10, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on dried anhydrous basis" }
    ],
    documentation: {
      qualityFeatures: [
        "State-of-the-art chromatographic monitoring of byproducts",
        "Batch-to-batch physical color and crystal size consistency",
        "Full support for analytical alignment and technical queries"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA)",
        "DMF / CEP details where applicable",
        "Stability and Technical study reports",
        "GMP and Safety declarations"
      ]
    },
    relatedProducts: [
      { name: "Torsemide", slug: "torsemide", description: "Potent sulfonylurea loop diuretic API." },
      { name: "Ticagrelor", slug: "ticagrelor", description: "Cardiovascular anti-clotting platelet aggregation inhibitor." },
      { name: "Alendronate Sodium", slug: "alendronate-sodium", description: "Bisphosphonate supporting bone mass skeletal integrity." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  },
  {
    id: "torsemide",
    slug: "torsemide",
    name: "Torsemide",
    category: "endocrine-metabolic",
    badge: "Endocrine & Metabolic API | WHO-GMP Source",
    casNumber: "56211-40-6",
    molecularFormula: "C16H20N4O3S",
    molecularWeight: "348.42 g/mol",
    grade: "IP / USP / EP / BP",
    therapeuticCategory: "Loop Diuretic / Pyridine-sulfonylurea",
    dosageForms: "Tablets, Injectable Solutions",
    intro: "Torsemide (Torasemide) is a high-grade pyridine-sulfonylurea loop diuretic widely manufactured for blood pressure and edema management.",
    description: "Torsemide acts primarily on the thick ascending limb of the loop of Henle, binding to and inhibiting the Na+/K+/2Cl- symporter. This results in significant reduction of renal sodium and chloride reabsorption, resolving systemic fluid overload and pulmonary congestion associated with congestive heart failure, renal insufficiency, and hepatic cirrhosis.",
    therapeuticApplications: [
      "Diuretic formulations for edema management in congestive heart failure and renal failure",
      "Oral solid dosage forms targeting essential hypertension and arterial pressure reduction",
      "Aqueous fixed-dose combination formulations in cardiology pipelines"
    ],
    keyAdvantages: [
      "High Oral Bioavailability: Outperforms traditional diuretics like furosemide with longer duration of action and stable absorption profiles.",
      "Controlled Quality: White to off-white solid, refined with validated HPLC checks on assay and related substances.",
      "Strategic Logistics: Export-ready supply chain with flexible delivery options across Europe and the Americas."
    ],
    packaging: {
      primary: "Double LDPE / HDPE bags",
      secondary: "HDPE / Fiber drums",
      packSizes: ["5 kg", "10 kg", "25 kg"],
      notes: ["Bulk and project supply options are fully customizable"]
    },
    storage: {
      conditions: [
        "Store at room temperature in a cool, dry place",
        "Protect from moisture and excessive heating profiles",
        "Keep container tightly closed"
      ],
      shelfLife: "36 to 48 months as backed by long-term stability testing"
    },
    specifications: [
      { srNo: 1, criteria: "Description", specification: "White to off-white crystalline powder" },
      { srNo: 2, criteria: "Identification", specification: "IR absorption matches standard reference spectra (or chromatographic identity checked)" },
      { srNo: 3, criteria: "Solubility", specification: "Slightly soluble in water; soluble in methanol, ethanol and DMSO" },
      { srNo: 4, criteria: "Appearance of Solution", specification: "Clear and not more intensely colored than reference standard solution" },
      { srNo: 5, criteria: "Water Content", specification: "Not more than 1.0%" },
      { srNo: 6, criteria: "Related Substances (HPLC)", specification: "Any individual impurity: NMT 0.2% / Total impurities: NMT 1.0%" },
      { srNo: 7, criteria: "Residue on Ignition", specification: "NMT 0.1%" },
      { srNo: 8, criteria: "Heavy Metals", specification: "NMT 20 ppm" },
      { srNo: 9, criteria: "Residual Solvents", specification: "Fully compliant with ICH Q3C limits" },
      { srNo: 10, criteria: "Assay (by HPLC)", specification: "98.0% – 102.0% on dried anhydrous basis" }
    ],
    documentation: {
      qualityFeatures: [
        "Consistently clean chromatographic profiles",
        "Sourced from WHO-GMP compliant units with IP/USP/EP matching capabilities",
        "Supported by validated drug files and query resolution support"
      ],
      documentsAvailable: [
        "Certificate of Analysis (COA per batch)",
        "DMF / CEP details where applicable",
        "Stability and impurity data summaries",
        "GMP certificates and SDS (Safety Data Sheet)"
      ]
    },
    relatedProducts: [
      { name: "Eplerenone", slug: "eplerenone", description: "Selective aldosterone blocker API." },
      { name: "Ticagrelor", slug: "ticagrelor", description: "Antiplatelet aggregation cardiovascular agent." },
      { name: "Bisacodyl", slug: "bisacodyl", description: "Local stimulant intestinal laxative API." }
    ],
    dmfAvailable: true,
    whoGmpCertified: true
  }
];
