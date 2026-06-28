export interface APIProduct {
  id: string;
  slug: string;
  name: string;
  category: string; // e.g. "cardiovascular", "cns-neurological", etc.
  badge: string;
  casNumber: string;
  molecularFormula: string;
  molecularWeight: string;
  grade: string;
  therapeuticCategory?: string;
  dosageForms?: string;
  intro: string;
  description: string;
  therapeuticApplications: string[];
  keyAdvantages: string[];
  mechanism?: string;
  packaging: {
    primary: string;
    secondary: string;
    packSizes: string[];
    notes?: string[];
  };
  storage: {
    conditions: string[];
    shelfLife: string;
  };
  specifications: {
    srNo: number;
    criteria: string;
    specification: string;
  }[];
  documentation: {
    qualityFeatures: string[];
    documentsAvailable: string[];
  };
  regulatory?: {
    approvals: string[];
    pharmacopoeialStandards?: string[];
    regulatoryMarkets?: string[];
    compliance?: string[];
  };
  relatedProducts: {
    name: string;
    slug: string;
    description: string;
  }[];
  dmfAvailable: boolean;
  whoGmpCertified: boolean;
}

export interface Intermediate {
  id: string;
  slug: string;
  name: string;
  badge: string;
  casNumber: string;
  molecularFormula: string;
  molecularWeight: string;
  purity: string;
  intro: string;
  description: string;
  applications: string[];
  keyAdvantages: string[];
  manufacturingProcess: string;
  packaging: {
    primary: string;
    secondary: string;
    packSizes: string[];
    bulkAvailable: boolean;
  };
  storage: {
    conditions: string[];
    shelfLife: string;
  };
  specifications: {
    srNo: number;
    criteria: string;
    specification: string;
  }[];
  documentation: {
    qualityFeatures: string[];
    documentsAvailable: string[];
  };
  relatedProducts: {
    name: string;
    slug: string;
    description: string;
  }[];
}

export interface SimpleAPIProduct {
  slug: string;
  name: string;
  casNumber: string;
  shortDescription: string;
  overview: string;
  therapeuticUse: string;
  industryApplication: string;
  exportAvailability: string;
  applications: string[];
}

export interface APICategory {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  products: SimpleAPIProduct[];
}

export interface SolventProduct {
  id: string;
  slug: string;
  name: string;
  casNumber: string;
  description: string;
}

export interface IntermediateQuickRef {
  id: string;
  slug: string;
  name: string;
  casNumber: string;
  endUse: string;
}

export interface HumanAPIProduct {
  id: string;
  slug: string;
  name: string;
  casNumber: string;
  shortDescription: string;
}

export interface HumanAPICategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  products: HumanAPIProduct[];
}

export interface PharmProduct {
  id: string;
  slug: string;
  name: string;
  category: string; // chemicals, microbiology, plant-culture, cell-culture
  subcategory: string; // e.g. "Acids and Bases", "Advanced Disinfection Solutions", etc.
  badge: string;
  intro: string;
  keyHighlights: {
    value: string;
    label: string;
  }[];
  overview: {
    heading: string;
    subtext: string;
  };
  serviceCards: {
    title: string;
    description: string;
  }[];
  productTable: {
    productCode: string;
    productName: string;
  }[];
  whyChooseUs: {
    heading: string;
    leadCopy: string;
    usps: string[];
  };
  packaging: {
    options: string[];
  };
  storage: {
    conditions: string;
    shelfLife: string;
  };
}
