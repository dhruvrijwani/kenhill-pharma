import { HumanAPICategory } from '../../lib/types';

export const humanAPICategories: HumanAPICategory[] = [
  {
    slug: 'steroids',
    name: 'Steroids',
    description:
      'Synthetic glucocorticoid APIs spanning topical, inhaled, injectable, and systemic formulation grades. Supplied in USP/EP/BP specification to pharmaceutical manufacturers across regulated and emerging export markets.',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'ste-001',
        slug: 'beclomethasone-dipropionate',
        name: 'Beclomethasone Dipropionate',
        casNumber: '5534-09-8',
        shortDescription:
          'USP/EP/BP grade glucocorticoid supplied in micronized form for MDI, DPI, and nasal spray manufacturing. Sourced for asthma prophylaxis, allergic rhinitis, and topical dermatological formulation lines.',
      },
      {
        id: 'ste-002',
        slug: 'betamethasone-base-and-salts',
        name: 'Betamethasone Base & Salts',
        casNumber: '378-44-9 (base)',
        shortDescription:
          'Long-acting glucocorticoid available as free base, dipropionate (5593-20-4), valerate (2152-44-5), and sodium phosphate (151-73-5) — USP/EP/BP grade. Supplied for topical, injectable, and antenatal corticosteroid formulation manufacturing.',
      },
      {
        id: 'ste-003',
        slug: 'clobetasone-propionate',
        name: 'Clobetasone Propionate',
        casNumber: 'Verify with supplier',
        shortDescription:
          'Corticosteroid API for topical anti-inflammatory formulations. Supplied to specification for cream, ointment, and emollient manufacturing. CAS to be confirmed against supplier CoA — related compounds include Clobetasol Propionate (25122-41-2) and Clobetasone Butyrate (25122-57-0).',
      },
      {
        id: 'ste-004',
        slug: 'fluocinolone-acetonide',
        name: 'Fluocinolone Acetonide',
        casNumber: '67-73-2',
        shortDescription:
          'Mid-potency fluorinated corticosteroid in USP/EP/BP grade for topical, otic, and ophthalmic formulation manufacturing. Exported for dermatitis, psoriasis, eczema, and otitis externa therapeutic product lines.',
      },
      {
        id: 'ste-005',
        slug: 'hydrocortisone-base-acetate',
        name: 'Hydrocortisone Base / Acetate',
        casNumber: '50-23-7 / 50-03-3',
        shortDescription:
          'Natural corticosteroid supplied as free base (50-23-7) and acetate ester (50-03-3) — USP/EP/BP grade — for oral tablet, topical cream, suppository, and injectable depot formulation manufacturing across adrenal and inflammatory indications.',
      },
      {
        id: 'ste-006',
        slug: 'hydrocortisone-sodium-succinate',
        name: 'Hydrocortisone Sodium Succinate',
        casNumber: '125-04-2',
        shortDescription:
          'Water-soluble injectable corticosteroid API in USP/EP grade for lyophilised powder-for-injection manufacturing. Sourced for emergency IV/IM protocols — anaphylaxis, acute adrenal crisis, and severe inflammatory episodes.',
      },
      {
        id: 'ste-007',
        slug: 'methylprednisolone-base-acetate',
        name: 'Methyl Prednisolone Base / Acetate',
        casNumber: '83-43-2 / 53-36-1',
        shortDescription:
          'Synthetic glucocorticoid supplied as oral-grade base (83-43-2) and depot-injectable acetate ester (53-36-1) — USP/EP/BP grade. Exported for tablet, intra-articular suspension, and IM depot formulation lines in rheumatological and autoimmune indications.',
      },
      {
        id: 'ste-008',
        slug: 'methylprednisolone-sodium-succinate',
        name: 'Methyl Prednisolone Sodium Succinate',
        casNumber: '2375-03-3',
        shortDescription:
          'High-potency water-soluble IV corticosteroid in USP/EP grade for lyophilised powder-for-injection manufacturing. Sourced for pulse therapy in acute spinal cord injury, transplant rejection prophylaxis, and severe asthma protocols.',
      },
      {
        id: 'ste-009',
        slug: 'mometasone-furoate',
        name: 'Mometasone Furoate',
        casNumber: '83919-23-7',
        shortDescription:
          'High-potency non-halogenated glucocorticoid in USP/EP/BP grade for nasal spray, dry powder inhaler, and topical formulation manufacturing. Exported for allergic rhinitis, persistent asthma, and dermatological treatment product lines.',
      },
      {
        id: 'ste-010',
        slug: 'prednisolone-base-acetate',
        name: 'Prednisolone Base / Acetate',
        casNumber: '50-24-8 / 52-21-1',
        shortDescription:
          'Versatile synthetic glucocorticoid supplied as oral-grade base (50-24-8) and ophthalmic-grade acetate (52-21-1) — USP/EP/BP. Exported for tablet, syrup, and ophthalmic suspension formulations across inflammatory, autoimmune, and ocular indications.',
      },
      {
        id: 'ste-011',
        slug: 'triamcinolone-base-acetonide',
        name: 'Triamcinolone Base / Acetonide',
        casNumber: '124-94-7 / 76-25-5',
        shortDescription:
          'Fluorinated corticosteroid supplied as free base (124-94-7) and acetonide ester (76-25-5) — USP/EP/BP grade — for topical, intra-articular injectable, nasal spray, and inhaled formulation manufacturing across dermatological, rheumatological, and respiratory indications.',
      },
    ],
  },
  {
    slug: 'anti-malarials',
    name: 'Anti Malarials',
    description:
      'Artemisinin derivatives, quinoline alkaloids, and cinchona-based APIs for ACT and parenteral malaria regimens. Supplied in USP/EP/BP grade to manufacturers serving endemic and non-endemic export markets.',
    image:
      'https://images.unsplash.com/photo-1581093588401-f5c32e58b953?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'am-001',
        slug: 'alpha-beta-arteether',
        name: 'Alpha Beta Arteether',
        casNumber: '75887-54-6',
        shortDescription:
          'Semi-synthetic artemisinin derivative in USP-aligned grade, traded as an oily solution for IM injectable manufacturing. Sourced for severe and cerebral malaria treatment, typically in 30:70 alpha:beta isomer ratio.',
      },
      {
        id: 'am-002',
        slug: 'amodiaquine-base-hcl',
        name: 'Amodiaquine Base / HCl',
        casNumber: '86-42-0 / 69-44-3',
        shortDescription:
          '4-aminoquinoline antimalarial supplied as free base (86-42-0) and hydrochloride salt (69-44-3) — USP/EP/BP grade — for oral tablet and suspension manufacturing. Sourced for ACT combination with artesunate against P. falciparum and P. vivax.',
      },
      {
        id: 'am-003',
        slug: 'artemether',
        name: 'Artemether',
        casNumber: '71963-77-4',
        shortDescription:
          'Methyl ether derivative of artemisinin in USP/EP/BP/JP grade for oral and injectable formulation manufacturing. Core API in artemether-lumefantrine fixed-dose ACT for multi-drug-resistant P. falciparum.',
      },
      {
        id: 'am-004',
        slug: 'artesunate-plain-sterile',
        name: 'Artesunate Plain / Sterile',
        casNumber: '88495-63-0',
        shortDescription:
          'Water-soluble artemisinin derivative traded in plain grade for oral/rectal formulations and sterile grade (USP <797> processed) for IV/IM injectable manufacturing. Same active compound across both grades — used for severe and uncomplicated malaria.',
      },
      {
        id: 'am-005',
        slug: 'chloroquine-phosphate',
        name: 'Chloroquine Phosphate',
        casNumber: '50-63-5',
        shortDescription:
          'Classic 4-aminoquinoline antimalarial in USP/EP/BP grade for oral tablet manufacturing. Sourced for prophylaxis and treatment of chloroquine-susceptible P. vivax and P. falciparum strains.',
      },
      {
        id: 'am-006',
        slug: 'dihydroartemisinin',
        name: 'Dihydro Artemisinin',
        casNumber: '71939-50-9',
        shortDescription:
          'Active artemisinin metabolite in USP/EP grade for oral tablet and capsule formulation manufacturing. Supplied both as the reduction intermediate behind artemether/artesunate metabolism and for standalone ACT formulations.',
      },
      {
        id: 'am-007',
        slug: 'lumefantrine',
        name: 'Lumefantrine',
        casNumber: '82186-77-4',
        shortDescription:
          'Aryl amino alcohol antimalarial in USP/EP/BP/IP grade for fixed-dose combination tablet manufacturing alongside artemether. Core partner compound in WHO-recommended ACT regimens for P. falciparum.',
      },
      {
        id: 'am-008',
        slug: 'mefloquine',
        name: 'Mefloquine',
        casNumber: '51773-92-3',
        shortDescription:
          'Quinolinemethanol antimalarial supplied as hydrochloride salt — USP grade — for oral tablet manufacturing. Sourced for prophylaxis and treatment of multi-drug-resistant P. falciparum malaria.',
      },
      {
        id: 'am-009',
        slug: 'primaquine-phosphate',
        name: 'Primaquine Phosphate',
        casNumber: '63-45-6',
        shortDescription:
          '8-aminoquinoline radical curative agent in USP/EP/BP grade for oral tablet manufacturing. Sourced for hepatic hypnozoite elimination in P. vivax and P. ovale relapse prevention.',
      },
      {
        id: 'am-010',
        slug: 'quinine-dihydrochloride',
        name: 'Quinine Di Hydrochloride',
        casNumber: '60-93-5',
        shortDescription:
          'Water-soluble cinchona alkaloid salt in USP/EP/BP grade for injectable solution manufacturing. Sourced for parenteral treatment of severe malaria where oral administration is not feasible.',
      },
      {
        id: 'am-011',
        slug: 'quinine-hydrochloride',
        name: 'Quinine Hydrochloride',
        casNumber: '6119-47-7',
        shortDescription:
          'Cinchona alkaloid hydrochloride dihydrate in USP/EP/BP grade for injectable and oral formulation manufacturing. Supplied for severe malaria protocols requiring parenteral or oral alkaloid therapy.',
      },
      {
        id: 'am-012',
        slug: 'quinine-sulphate',
        name: 'Quinine Sulphate',
        casNumber: '549-56-4',
        shortDescription:
          'Cinchona bark-derived alkaloid sulfate salt in USP/EP/BP grade for oral tablet and suspension manufacturing. Sourced for uncomplicated and severe malaria treatment in combination regimens.',
      },
    ],
  },
  {
    slug: 'anti-hypertensives',
    name: 'Anti Hypertensive',
    description:
      'ACE inhibitors, angiotensin receptor blockers, and calcium channel antagonists for blood pressure regulation. Supplied in USP/EP/BP grade for oral solid-dose manufacturing across global cardiovascular product lines.',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'ah-001',
        slug: 'amlodipine',
        name: 'Amlodipine',
        casNumber: '111470-99-6 (besylate)',
        shortDescription:
          'Long-acting dihydropyridine calcium channel blocker supplied as besylate salt — USP/EP/BP grade — for oral tablet manufacturing. Sourced for hypertension and chronic stable angina formulation lines.',
      },
      {
        id: 'ah-002',
        slug: 'captopril',
        name: 'Captopril',
        casNumber: '62571-86-2',
        shortDescription:
          'First-generation ACE inhibitor in USP/EP/BP grade for oral tablet manufacturing. Sourced for hypertension, heart failure, and post-myocardial infarction formulation lines.',
      },
      {
        id: 'ah-003',
        slug: 'enalapril-maleate',
        name: 'Enalapril Maleate',
        casNumber: '76095-16-4',
        shortDescription:
          'ACE inhibitor prodrug salt in USP/EP/BP grade for oral tablet manufacturing. Sourced for hypertension, heart failure, and asymptomatic left ventricular dysfunction protocols.',
      },
      {
        id: 'ah-004',
        slug: 'irbesartan',
        name: 'Irbesartan',
        casNumber: '138402-11-6',
        shortDescription:
          'Angiotensin II receptor blocker in USP/EP/BP grade for oral tablet manufacturing. Sourced for hypertension and diabetic nephropathy formulation lines.',
      },
      {
        id: 'ah-005',
        slug: 'lisinopril',
        name: 'Lisinopril',
        casNumber: '76547-98-3',
        shortDescription:
          'Non-prodrug ACE inhibitor in USP/EP/JP grade for oral tablet manufacturing. Sourced for hypertension, heart failure, and post-MI cardioprotective formulation lines.',
      },
      {
        id: 'ah-006',
        slug: 'losartan-potassium',
        name: 'Losartan Pottasium',
        casNumber: '124750-99-8',
        shortDescription:
          'Selective AT1 angiotensin receptor antagonist in USP/EP/BP grade for oral tablet manufacturing. Sourced for hypertension and diabetic nephropathy formulation lines.',
      },
      {
        id: 'ah-007',
        slug: 'methyldopa',
        name: 'Methyl Dopa',
        casNumber: '41372-08-1',
        shortDescription:
          'Central alpha-2 adrenergic agonist in USP/EP/BP grade for oral tablet and suspension manufacturing. Sourced for hypertension management, notably pregnancy-induced hypertension formulations.',
      },
      {
        id: 'ah-008',
        slug: 'nebivolol',
        name: 'Nebivilol',
        casNumber: '152520-56-4 (HCl)',
        shortDescription:
          'Highly selective beta-1 blocker with vasodilatory activity, supplied as hydrochloride salt — USP grade — for oral tablet manufacturing. Sourced for hypertension formulation lines requiring nitric-oxide-mediated vasodilation.',
      },
      {
        id: 'ah-009',
        slug: 'ramipril',
        name: 'Ramipril',
        casNumber: '87333-19-5',
        shortDescription:
          'ACE inhibitor prodrug in USP/EP/BP grade for oral capsule manufacturing. Sourced for hypertension, heart failure, and post-MI cardiovascular risk reduction formulation lines.',
      },
      {
        id: 'ah-010',
        slug: 'telmisartan',
        name: 'Telmisartan',
        casNumber: '144701-48-4',
        shortDescription:
          'Long-acting angiotensin II receptor blocker in USP/EP/BP grade for oral tablet manufacturing. Sourced for hypertension formulation lines requiring extended 24-hour blood pressure control.',
      },
      {
        id: 'ah-011',
        slug: 'valsartan',
        name: 'Valsartan',
        casNumber: '137862-53-4',
        shortDescription:
          'Non-peptide angiotensin II receptor blocker in USP/EP/BP grade for oral tablet manufacturing. Sourced for hypertension, post-MI heart failure, and renal protection formulation lines.',
      },
      {
        id: 'ah-012',
        slug: 'verapamil',
        name: 'Verapamil',
        casNumber: '152-11-4 (HCl)',
        shortDescription:
          'Phenylalkylamine calcium channel blocker supplied as hydrochloride salt — USP/EP/BP grade — for oral tablet and solution manufacturing. Sourced for hypertension, angina, and supraventricular tachycardia formulation lines.',
      },
    ],
  },
  {
    slug: 'anti-retrovirals',
    name: 'Anti Retroviral',
    description:
      'Nucleoside, non-nucleoside, and protease-inhibitor APIs targeting HIV replication cycles. Supplied in USP/EP/BP grade for fixed-dose combination ART manufacturing across global health procurement channels.',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'arv-001',
        slug: 'abacavir',
        name: 'Abacavir',
        casNumber: '188062-50-2 (sulfate)',
        shortDescription:
          'Carbocyclic nucleoside reverse transcriptase inhibitor supplied as sulfate salt — USP/EP/BP grade — for oral tablet manufacturing. Sourced for first-line HIV-1 combination antiretroviral therapy.',
      },
      {
        id: 'arv-002',
        slug: 'didanosine',
        name: 'Didanosine',
        casNumber: '69655-05-6',
        shortDescription:
          'Purine nucleoside reverse transcriptase inhibitor in USP/EP grade for oral tablet and capsule manufacturing. Sourced for combination antiretroviral therapy in treatment-experienced HIV patients.',
      },
      {
        id: 'arv-003',
        slug: 'efavirenz',
        name: 'Efavirenz',
        casNumber: '154598-52-4',
        shortDescription:
          'Non-nucleoside reverse transcriptase inhibitor in USP grade for oral tablet manufacturing. Core API in first-line fixed-dose combination regimens for HIV-1 infection.',
      },
      {
        id: 'arv-004',
        slug: 'indinavir-sulphate',
        name: 'Indinavir Sulphate',
        casNumber: '157810-81-6',
        shortDescription:
          'HIV protease inhibitor supplied as sulfate salt for oral capsule manufacturing. Sourced for combination antiretroviral therapy in HIV-1 and AIDS management protocols.',
      },
      {
        id: 'arv-005',
        slug: 'lamivudine',
        name: 'Lamivudine',
        casNumber: '134678-17-4',
        shortDescription:
          'Nucleoside reverse transcriptase inhibitor in USP/EP/BP/IP grade for oral tablet manufacturing. Widely sourced for HIV-1, HIV-2, and chronic hepatitis B combination therapy.',
      },
      {
        id: 'arv-006',
        slug: 'lopinavir',
        name: 'Lopinavir',
        casNumber: '192725-17-0',
        shortDescription:
          'HIV protease inhibitor in USP/EP grade for oral tablet manufacturing, typically co-formulated with ritonavir as a pharmacokinetic booster. Sourced for combination ART regimens.',
      },
      {
        id: 'arv-007',
        slug: 'nelfinavir-mesylate',
        name: 'Nelfinavir Mesylate',
        casNumber: '159989-65-8',
        shortDescription:
          'HIV protease inhibitor supplied as mesylate salt — USP grade — for oral tablet and powder formulation manufacturing. Sourced for combination antiretroviral therapy in adult and paediatric HIV-1 management.',
      },
      {
        id: 'arv-008',
        slug: 'nevirapine',
        name: 'Nevirapine',
        casNumber: '129618-40-2',
        shortDescription:
          'Non-nucleoside reverse transcriptase inhibitor in USP/EP grade for oral tablet and suspension manufacturing. Sourced for first-line HIV-1 therapy and prevention of mother-to-child transmission.',
      },
      {
        id: 'arv-009',
        slug: 'ritonavir',
        name: 'Ritonavir',
        casNumber: '155213-67-5',
        shortDescription:
          'HIV protease inhibitor in USP/EP grade for oral tablet manufacturing, primarily used as a pharmacokinetic booster for other protease inhibitors. Core component of multiple fixed-dose ART combinations.',
      },
      {
        id: 'arv-010',
        slug: 'saquinavir-mesylate',
        name: 'Saquinavir Mesylate',
        casNumber: '149845-06-7',
        shortDescription:
          'HIV protease inhibitor supplied as mesylate salt for oral tablet manufacturing. Sourced for combination antiretroviral therapy regimens in treatment-experienced HIV-1 patients.',
      },
      {
        id: 'arv-011',
        slug: 'stavudine',
        name: 'Stavudine',
        casNumber: '3056-17-5',
        shortDescription:
          'Nucleoside reverse transcriptase inhibitor in USP grade for oral capsule and solution manufacturing. Historically sourced for first-line HIV-1 therapy in resource-limited combination regimens.',
      },
    ],
  },
  {
    slug: 'vitamins',
    name: 'Vitamins',
    description:
      'Water-soluble and fat-soluble vitamin APIs, plus active vitamin D analogues, in pharmaceutical grade. Supplied for multivitamin, nutraceutical, and deficiency-correction formulation manufacturing.',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'vit-001',
        slug: 'calcitriol',
        name: 'Calcitriol',
        casNumber: '32222-06-3',
        shortDescription:
          'Active vitamin D3 metabolite in USP grade for soft gelatin capsule and injectable formulation manufacturing. Sourced for renal osteodystrophy and hypoparathyroidism calcium-regulation therapy.',
      },
      {
        id: 'vit-002',
        slug: 'alfacalcidol',
        name: 'Alfacalcidol',
        casNumber: '41294-56-8',
        shortDescription:
          '1-alpha-hydroxylated vitamin D3 analogue in EP grade for soft gelatin capsule manufacturing. Sourced for renal bone disease and secondary hyperparathyroidism formulation lines.',
      },
      {
        id: 'vit-003',
        slug: 'biotin',
        name: 'Biotin',
        casNumber: '58-85-5',
        shortDescription:
          'Water-soluble B7 vitamin in USP/EP grade for tablet, capsule, and multivitamin formulation manufacturing. Sourced for metabolic support and dermatological supplement product lines.',
      },
      {
        id: 'vit-004',
        slug: 'calcipotriol',
        name: 'Calcipotriol',
        casNumber: '112965-21-6',
        shortDescription:
          'Vitamin D3 analogue in USP grade for topical cream and ointment formulation manufacturing. Sourced for plaque psoriasis treatment product lines.',
      },
      {
        id: 'vit-005',
        slug: 'methylcobalamin',
        name: 'Methylcobalamin',
        casNumber: '13422-55-4',
        shortDescription:
          'Bioactive methylated form of vitamin B12 in USP grade for tablet, injectable, and nutraceutical formulation manufacturing. Sourced for neurological support and B12 deficiency correction product lines.',
      },
      {
        id: 'vit-006',
        slug: 'vitamin-a-acetate',
        name: 'Vitamin A Acetate',
        casNumber: '127-47-9',
        shortDescription:
          'Retinol acetate ester in USP grade for soft gelatin capsule and multivitamin formulation manufacturing. Sourced for vision support and immune function supplement product lines.',
      },
      {
        id: 'vit-007',
        slug: 'vitamin-a-palmitate',
        name: 'Vitamin A Palmitate',
        casNumber: '79-81-2',
        shortDescription:
          'All-trans retinyl palmitate ester in pharmaceutical grade for oral and topical formulation manufacturing. Sourced for vision support, immune function, and dermatological product lines.',
      },
      {
        id: 'vit-008',
        slug: 'vitamin-b1-hcl-mono',
        name: 'Vitamin B1 HCl / Mono',
        casNumber: '67-03-8 / 532-43-4',
        shortDescription:
          'Thiamine supplied as hydrochloride (67-03-8) and mononitrate (532-43-4) salts — distinct chemical forms — in USP/EP/BP grade. Mononitrate suits dry-blend multivitamin formulations; HCl suits liquid and injectable lines.',
      },
      {
        id: 'vit-009',
        slug: 'vitamin-b12',
        name: 'Vitamin B12',
        casNumber: '68-19-9',
        shortDescription:
          'Cyanocobalamin in USP grade for tablet, injectable, and multivitamin formulation manufacturing. Sourced for pernicious anaemia and B12 deficiency correction product lines.',
      },
      {
        id: 'vit-010',
        slug: 'vitamin-b2',
        name: 'Vitamin B2',
        casNumber: '83-88-5',
        shortDescription:
          'Riboflavin in USP grade for tablet and multivitamin formulation manufacturing. Sourced for energy metabolism support and riboflavin deficiency correction product lines.',
      },
      {
        id: 'vit-011',
        slug: 'vitamin-b6',
        name: 'Vitamin B6',
        casNumber: '58-56-0',
        shortDescription:
          'Pyridoxine hydrochloride in USP/EP/BP grade for tablet and multivitamin formulation manufacturing. Sourced for amino acid metabolism support and neuropathy prevention product lines.',
      },
      {
        id: 'vit-012',
        slug: 'vitamin-c-plain-coated',
        name: 'Vitamin C Plain / Coated',
        casNumber: '50-81-7',
        shortDescription:
          'L-ascorbic acid in USP/EP grade, supplied in plain crystalline and coated grades for moisture-sensitive effervescent and multivitamin formulation manufacturing. Same active compound — coating differs by application, not chemistry.',
      },
      {
        id: 'vit-013',
        slug: 'vitamin-d3',
        name: 'Vitamin D3',
        casNumber: '67-97-0',
        shortDescription:
          'Cholecalciferol in USP/EP/BP grade for soft gelatin capsule, oral solution, and multivitamin formulation manufacturing. Sourced for bone mineralisation and immune regulation product lines.',
      },
    ],
  },
  {
    slug: 'anti-cancer',
    name: 'Anti Cancer',
    description:
      'Cytotoxic agents, targeted kinase inhibitors, antimetabolites, and hormone-pathway APIs for oncology and oncology-adjacent indications. Supplied in pharmaceutical grade for IV, oral, and topical formulation manufacturing.',
    image:
      'https://images.unsplash.com/photo-1617886903355-9354fa5893ef?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'ac-001',
        slug: '5-fluorouracil',
        name: '5-Fluorouracil',
        casNumber: '51-21-8',
        shortDescription:
          'Pyrimidine antimetabolite in USP/EP/BP/IP grade for IV injectable and topical formulation manufacturing. Sourced for colorectal, breast, and head & neck cancer treatment protocols.',
      },
      {
        id: 'ac-002',
        slug: 'capecitabine',
        name: 'Capecitabine',
        casNumber: '154361-50-9',
        shortDescription:
          'Oral fluoropyrimidine prodrug in USP/EP grade for tablet formulation manufacturing, converted to 5-FU in tumour tissue. Sourced for metastatic breast and colorectal cancer product lines.',
      },
      {
        id: 'ac-003',
        slug: 'dutasteride',
        name: 'Dutasteride',
        casNumber: '164656-23-9',
        shortDescription:
          'Dual 5-alpha reductase inhibitor in pharmaceutical grade for soft gelatin capsule manufacturing. Primarily sourced for benign prostatic hyperplasia formulation lines, with research use in prostate cancer chemoprevention.',
      },
      {
        id: 'ac-004',
        slug: 'docetaxel',
        name: 'Docetaxel',
        casNumber: '114977-28-5',
        shortDescription:
          'Semi-synthetic taxane in pharmaceutical grade (anhydrous and trihydrate forms available) for IV infusion formulation manufacturing. Sourced for breast, lung, prostate, and ovarian cancer treatment protocols.',
      },
      {
        id: 'ac-005',
        slug: 'finasteride',
        name: 'Finasteride',
        casNumber: '98319-26-7',
        shortDescription:
          'Type II 5-alpha reductase inhibitor in pharmaceutical grade for tablet formulation manufacturing. Primarily sourced for benign prostatic hyperplasia and androgenetic alopecia product lines.',
      },
      {
        id: 'ac-006',
        slug: 'gemcitabine-hcl',
        name: 'Gemcitabine HCl',
        casNumber: '122111-03-9',
        shortDescription:
          'Nucleoside analogue antimetabolite supplied as hydrochloride salt — EP grade — for lyophilised IV infusion formulation manufacturing. Sourced for pancreatic, lung, bladder, and breast cancer treatment protocols.',
      },
      {
        id: 'ac-007',
        slug: 'imatinib-beta-alpha-form',
        name: 'Imatinib Beta / Alpha Form',
        casNumber: '220127-57-1 (mesylate)',
        shortDescription:
          'BCR-ABL tyrosine kinase inhibitor mesylate salt supplied in beta (thermodynamically stable) and alpha crystalline polymorphic forms for tablet formulation manufacturing. Sourced for CML, ALL, and GIST treatment protocols.',
      },
      {
        id: 'ac-008',
        slug: 'pemetrexed',
        name: 'Pemetrexed',
        casNumber: '150399-23-8 (disodium)',
        shortDescription:
          'Antifolate agent supplied as disodium salt — the standard parenteral trading form — for lyophilised IV infusion formulation manufacturing. Sourced for non-small cell lung cancer and malignant pleural mesothelioma protocols.',
      },
      {
        id: 'ac-009',
        slug: 'paclitaxel',
        name: 'Paclitaxel',
        casNumber: '33069-62-4',
        shortDescription:
          'Taxane mitotic inhibitor in USP/EP grade for IV infusion and albumin-bound nanoparticle formulation manufacturing. Sourced for breast, ovarian, lung cancer, and Kaposi\'s sarcoma treatment protocols.',
      },
      {
        id: 'ac-010',
        slug: 'temozolomide',
        name: 'Temozolomide',
        casNumber: '85622-93-1',
        shortDescription:
          'Oral alkylating agent in pharmaceutical grade for capsule formulation manufacturing. Sourced for glioblastoma, anaplastic astrocytoma, and melanoma brain metastases treatment protocols.',
      },
      {
        id: 'ac-011',
        slug: 'tamoxifen-citrate',
        name: 'Tamoxifen Citrate',
        casNumber: '54965-24-1',
        shortDescription:
          'Selective oestrogen receptor modulator in USP/EP/BP grade for tablet formulation manufacturing. Sourced for oestrogen receptor-positive breast cancer treatment and chemoprevention product lines.',
      },
      {
        id: 'ac-012',
        slug: 'zoledronic-acid',
        name: 'Zoledronic Acid',
        casNumber: '118072-93-8',
        shortDescription:
          'Imidazole bisphosphonate in pharmaceutical grade (anhydrous and monohydrate forms available) for IV solution formulation manufacturing. Sourced for cancer bone metastases and hypercalcemia of malignancy treatment protocols.',
      },
      {
        id: 'ac-013',
        slug: 'etoposide',
        name: 'Etoposide',
        casNumber: '33419-42-0',
        shortDescription:
          'Topoisomerase II inhibitor in pharmaceutical grade (≥95% HPLC purity) for capsule and IV solution formulation manufacturing. Sourced for testicular cancer, small-cell lung cancer, and lymphoma treatment protocols.',
      },
    ],
  },
  {
    slug: 'macrolides',
    name: 'Macrolides',
    description:
      'Broad-spectrum macrolide antibiotics with unique tissue penetration and intracellular accumulation profiles. Active against atypical organisms, respiratory, and STI-associated pathogens.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'mac-001',
        slug: 'azithromycin-ip-usp',
        name: 'Azithromycin IP / USP',
        casNumber: '117772-70-0',
        shortDescription:
          'Azalide macrolide in IP and USP grade — same active compound across both pharmacopoeial standards, differing only in monograph specification. Sourced for respiratory tract and sexually transmitted infection treatment protocols.',
      },
      {
        id: 'mac-002',
        slug: 'clarithromycin',
        name: 'Clarithromycin',
        casNumber: '81103-11-9',
        shortDescription:
          '14-membered semisynthetic macrolide in pharmaceutical grade for tablet and suspension formulation manufacturing. Sourced for respiratory tract infections and H. pylori eradication therapy product lines.',
      },
      {
        id: 'mac-003',
        slug: 'erythromycin-base',
        name: 'Erythromycin Base',
        casNumber: '114-07-8',
        shortDescription:
          'Original 14-membered macrolide in USP/EP grade for powder, tablet, and suspension formulation manufacturing. Sourced for respiratory tract infections, skin infections, and acne treatment protocols.',
      },
      {
        id: 'mac-004',
        slug: 'erythromycin-estolate',
        name: 'Erythromycin Estolate',
        casNumber: '3521-62-8',
        shortDescription:
          'Propionate ester salt of erythromycin in EP/USP grade for oral suspension formulation manufacturing, offering enhanced gastrointestinal absorption. Sourced for paediatric respiratory infection product lines.',
      },
      {
        id: 'mac-005',
        slug: 'erythromycin-stearate',
        name: 'Erythromycin Stearate',
        casNumber: '643-22-1',
        shortDescription:
          'Acid-stable stearate salt of erythromycin in BP/USP grade for tablet formulation manufacturing, offering reduced gastric upset versus the base form. Sourced for respiratory tract infection treatment protocols.',
      },
      {
        id: 'mac-006',
        slug: 'gentamicin',
        name: 'Gentamicin',
        casNumber: '1405-41-0 (sulfate)',
        shortDescription:
          'Aminoglycoside antibiotic supplied as sulfate salt for injectable formulation manufacturing. Sourced for severe gram-negative bacterial infection protocols. Note: classified pharmacologically as an aminoglycoside, not a macrolide.',
      },
      {
        id: 'mac-007',
        slug: 'roxithromycin',
        name: 'Roxythromycin',
        casNumber: '80214-83-1',
        shortDescription:
          'Semi-synthetic macrolide with enhanced oral bioavailability in pharmaceutical grade for tablet formulation manufacturing. Sourced for upper and lower respiratory tract infection treatment protocols.',
      },
    ],
  },
  {
    slug: 'anti-diabetics',
    name: 'Anti Diabetic',
    description:
      'Biguanides, sulfonylureas, thiazolidinediones, and alpha-glucosidase inhibitors for glycaemic control. Supplied in USP/EP/BP/IP grade for oral solid-dose manufacturing across Type 2 diabetes product lines.',
    image:
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'ad-001',
        slug: 'acarbose',
        name: 'Acarbose',
        casNumber: '56180-94-0',
        shortDescription:
          'Alpha-glucosidase inhibitor in USP/EP/BP grade for oral tablet formulation manufacturing. Sourced for post-prandial hyperglycaemia management in Type 2 diabetes product lines.',
      },
      {
        id: 'ad-002',
        slug: 'benfotiamine',
        name: 'Benfotiamine',
        casNumber: '22457-89-2',
        shortDescription:
          'Lipid-soluble synthetic derivative of vitamin B1 in USP/EP/JP/BP grade for tablet and nutraceutical formulation manufacturing. Sourced for diabetic neuropathy adjunct and metabolic supplement product lines.',
      },
      {
        id: 'ad-003',
        slug: 'glibenclamide',
        name: 'Glibenclamide',
        casNumber: '10238-21-8',
        shortDescription:
          'Second-generation sulfonylurea in BP/EP/USP/IP grade for oral tablet formulation manufacturing. Sourced for Type 2 diabetes insulin secretagogue product lines.',
      },
      {
        id: 'ad-004',
        slug: 'gliclazide',
        name: 'Gliclazide',
        casNumber: '21187-98-4',
        shortDescription:
          'Sulfonylurea with antithrombotic properties in BP/EP grade for oral tablet formulation manufacturing. Sourced for Type 2 diabetes and cardiovascular-protective formulation lines.',
      },
      {
        id: 'ad-005',
        slug: 'glimepiride',
        name: 'Glimepiride',
        casNumber: '93479-97-1',
        shortDescription:
          'Third-generation sulfonylurea in USP/EP/BP/IP grade (micronized forms available) for oral tablet formulation manufacturing. Sourced for once-daily Type 2 diabetes management product lines.',
      },
      {
        id: 'ad-006',
        slug: 'glipizide',
        name: 'Glipizide',
        casNumber: '29094-61-9',
        shortDescription:
          'Second-generation sulfonylurea in USP/EP grade for oral tablet formulation manufacturing, including extended-release variants. Sourced for Type 2 diabetes glycaemic control product lines.',
      },
      {
        id: 'ad-007',
        slug: 'metformin',
        name: 'Metformin',
        casNumber: '1115-70-4 (HCl)',
        shortDescription:
          'First-line biguanide antidiabetic supplied as hydrochloride salt — USP/EP/BP grade — for oral tablet and extended-release formulation manufacturing. Sourced for Type 2 diabetes insulin sensitisation product lines.',
      },
      {
        id: 'ad-008',
        slug: 'pioglitazone',
        name: 'Pioglitazone',
        casNumber: '112529-15-4 (HCl)',
        shortDescription:
          'PPAR-gamma agonist thiazolidinedione supplied as hydrochloride salt — USP/EP grade — for oral tablet formulation manufacturing. Sourced for Type 2 diabetes insulin sensitisation product lines.',
      },
    ],
  },
  {
    slug: 'anti-inflammatory-analgesic',
    name: 'Anti-Inflammatory / Analgesic',
    description:
      'NSAIDs, COX inhibitors, and non-NSAID analgesics for pain and inflammation management. Supplied in USP/EP/BP/IP grade for tablet, injectable, and topical formulation manufacturing.',
    image:
      'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'aia-001',
        slug: 'ibuprofen',
        name: 'Ibuprofen',
        casNumber: '15687-27-1',
        shortDescription:
          'Propionic acid NSAID in USP/EP/BP grade, available in multiple micronization grades, for oral tablet and suspension formulation manufacturing. Sourced for pain, fever, and inflammation treatment product lines.',
      },
      {
        id: 'aia-002',
        slug: 'ketoprofen',
        name: 'Ketoprofen',
        casNumber: '22071-15-4',
        shortDescription:
          'Propionic acid NSAID in USP/EP grade for oral tablet, topical gel, and injectable formulation manufacturing. Sourced for arthritis, post-operative pain, and inflammation product lines.',
      },
      {
        id: 'aia-003',
        slug: 'meloxicam',
        name: 'Meloxicam',
        casNumber: '71125-38-7',
        shortDescription:
          'Preferential COX-2 inhibitor in USP/EP/BP/IP grade for oral tablet and injectable formulation manufacturing. Sourced for osteoarthritis and rheumatoid arthritis treatment product lines.',
      },
      {
        id: 'aia-004',
        slug: 'paracetamol',
        name: 'Paracetamol',
        casNumber: '103-90-2',
        shortDescription:
          'Non-NSAID analgesic-antipyretic in USP/EP/BP grade (high-purity ≥99.9% available) for tablet, capsule, and syrup formulation manufacturing. Sourced for pain and fever management across all age groups.',
      },
      {
        id: 'aia-005',
        slug: 'piroxicam',
        name: 'Piroxicam',
        casNumber: '36322-90-4',
        shortDescription:
          'Long-acting oxicam NSAID in USP/EP/BP grade for oral tablet and topical gel formulation manufacturing. Sourced for once-daily rheumatic disease and acute gout treatment product lines.',
      },
      {
        id: 'aia-006',
        slug: 'etoricoxib',
        name: 'Etoricoxib',
        casNumber: '202409-33-4',
        shortDescription:
          'Selective COX-2 inhibitor in IP/BP/USP/EP grade for oral tablet formulation manufacturing. Sourced for osteoarthritis, rheumatoid arthritis, and acute pain treatment product lines.',
      },
      {
        id: 'aia-007',
        slug: 'diclofenac-sodium-potassium',
        name: 'Diclofenac Sodium / Potassium',
        casNumber: '15307-79-6 / 15307-81-0',
        shortDescription:
          'Phenylacetic acid NSAID supplied as sodium (15307-79-6, stable/sustained-release) and potassium (15307-81-0, faster-absorbing) salts — USP/EP/BP/IP grade — for tablet, injectable, and topical formulation manufacturing.',
      },
    ],
  },
  {
    slug: 'anti-tuberculosis',
    name: 'Anti Tuberculosis',
    description:
      'First and second-line TB APIs targeting Mycobacterium tuberculosis bactericidal pathways. Supplied in USP/EP/BP/IP grade for DOTS and drug-resistant tuberculosis combination therapy manufacturing.',
    image:
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'at-001',
        slug: 'ethambutol-hcl',
        name: 'Ethambutol HCl',
        casNumber: '1070-11-7',
        shortDescription:
          'Bacteriostatic agent supplied as hydrochloride salt — USP/EP/BP grade — for oral tablet formulation manufacturing. Sourced for first-line tuberculosis combination therapy product lines.',
      },
      {
        id: 'at-002',
        slug: 'isoniazid',
        name: 'Isoniazid',
        casNumber: '54-85-3',
        shortDescription:
          'Bactericidal prodrug in USP/EP/BP/JP/IP grade for oral tablet and injectable formulation manufacturing. Cornerstone first-line agent sourced for DOTS tuberculosis therapy product lines.',
      },
      {
        id: 'at-003',
        slug: 'pyrazinamide',
        name: 'Pyrazinamide',
        casNumber: '98-96-4',
        shortDescription:
          'Nicotinamide analogue sterilising agent in USP/EP/BP/IP grade for oral tablet formulation manufacturing. Sourced for intensive-phase first-line tuberculosis combination therapy product lines.',
      },
      {
        id: 'at-004',
        slug: 'rifampicin',
        name: 'Rifampicin',
        casNumber: '13292-46-1',
        shortDescription:
          'Rifamycin RNA polymerase inhibitor in USP/EP/BP/IP grade for oral capsule and IV injectable formulation manufacturing. Cornerstone first-line agent across all tuberculosis treatment regimens.',
      },
      {
        id: 'at-005',
        slug: 'terizidone',
        name: 'Terizidone',
        casNumber: '25683-71-0',
        shortDescription:
          'Cycloserine derivative second-line agent in pharmaceutical grade for oral tablet formulation manufacturing. Sourced for multi-drug-resistant tuberculosis (MDR-TB) combination therapy product lines.',
      },
    ],
  },
  {
    slug: 'anti-ulcerants',
    name: 'Anti Ulcerants',
    description:
      'Proton pump inhibitors supplied as raw powder and enteric-coated pellet intermediates, plus H2 blockers, in USP/EP grade for capsule and tablet formulation manufacturing across global GI product lines.',
    image:
      'https://images.unsplash.com/photo-1576091160291-61f60d8c3ac3?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'au-001',
        slug: 'lansoprazole-powder-pellets',
        name: 'Lansoprazole Powder / Pellets',
        casNumber: '103577-45-3',
        shortDescription:
          'Benzimidazole proton pump inhibitor supplied as raw crystalline powder and enteric-coated pellets — same active compound, USP/EP grade — for capsule and MUPS formulation manufacturing.',
      },
      {
        id: 'au-002',
        slug: 'lafutidine',
        name: 'Lafutidine',
        casNumber: '206449-93-6',
        shortDescription:
          'Dual-action H2 receptor antagonist and mucosal protective agent in pharmaceutical grade for oral tablet formulation manufacturing. Note: limited formal USP/EP monograph documentation — confirm grade specification with supplier.',
      },
      {
        id: 'au-003',
        slug: 'omeprazole-powder-pellets',
        name: 'Omeprazole Powder / Pellets',
        casNumber: '73590-58-6',
        shortDescription:
          'First proton pump inhibitor supplied as raw crystalline powder and enteric-coated pellets — same active compound, USP/EP grade — for capsule and delayed-release tablet formulation manufacturing.',
      },
      {
        id: 'au-004',
        slug: 'rabeprazole-pellets',
        name: 'Rabeprazole Pellets',
        casNumber: '117976-90-6 (sodium)',
        shortDescription:
          'Proton pump inhibitor supplied as sodium salt in enteric-coated pellet form for delayed-release capsule formulation manufacturing. Sourced for GERD and duodenal ulcer treatment product lines.',
      },
      {
        id: 'au-005',
        slug: 'pantoprazole-pellets',
        name: 'Pantoprazole Pellets',
        casNumber: '138786-67-1 (sodium)',
        shortDescription:
          'Proton pump inhibitor supplied as sodium sesquihydrate salt in enteric-coated pellet form — USP/EP grade — for delayed-release capsule formulation manufacturing. Sourced for erosive oesophagitis and Zollinger-Ellison syndrome protocols.',
      },
      {
        id: 'au-006',
        slug: 'famotidine',
        name: 'Famotidine',
        casNumber: '76824-35-6',
        shortDescription:
          'Potent H2 receptor antagonist in USP/EP/BP grade for oral tablet formulation manufacturing. Sourced for duodenal and gastric ulcer maintenance, and GERD treatment product lines.',
      },
    ],
  },
  {
    slug: 'anti-asthmatics',
    name: 'Anti Asthmatic',
    description:
      'Xanthine bronchodilators and beta-2 agonists managing airway obstruction. Supplied in USP/EP/BP grade for tablet, injectable, and nebuliser formulation manufacturing across asthma and COPD product lines.',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'aa-001',
        slug: 'aminophylline',
        name: 'Aminophylline',
        casNumber: '317-34-0',
        shortDescription:
          'Ethylenediamine-theophylline complex (2:1) in USP/EP/BP grade for oral tablet and injectable formulation manufacturing. Sourced for acute bronchospasm and respiratory stimulant product lines.',
      },
      {
        id: 'aa-002',
        slug: 'caffeine-anhydrous',
        name: 'Caffeine Anhydrous',
        casNumber: '58-08-2',
        shortDescription:
          'Xanthine alkaloid in USP/EP/BP/JP grade for oral tablet and injectable formulation manufacturing. Sourced for neonatal apnoea and respiratory stimulant adjunct product lines.',
      },
      {
        id: 'aa-003',
        slug: 'etophylline',
        name: 'Etophylline',
        casNumber: '519-37-9',
        shortDescription:
          'Theophylline derivative (7-(2-hydroxyethyl)theophylline) in EP grade for injectable and oral formulation manufacturing. Sourced for bronchodilator combination product lines, distinct from parent theophylline.',
      },
      {
        id: 'aa-004',
        slug: 'salbutamol',
        name: 'Salbutamol',
        casNumber: '51022-70-9 (sulfate)',
        shortDescription:
          'Short-acting beta-2 agonist supplied as sulfate salt — the standard pharmacopoeial trading form, USP/EP grade — for MDI, DPI, nebuliser solution, and tablet formulation manufacturing.',
      },
      {
        id: 'aa-005',
        slug: 'theophylline',
        name: 'Theophylline',
        casNumber: '58-55-9',
        shortDescription:
          'Parent xanthine bronchodilator in USP/EP grade for oral tablet and extended-release capsule formulation manufacturing. Sourced for chronic asthma and COPD maintenance therapy product lines.',
      },
      {
        id: 'aa-006',
        slug: 'terbutaline',
        name: 'Terbutaline',
        casNumber: '23031-32-5 (sulfate)',
        shortDescription:
          'Long-acting beta-2 agonist supplied as sulfate salt — the standard pharmacopoeial trading form, USP/EP grade — for tablet, injectable, and nebuliser solution formulation manufacturing.',
      },
    ],
  },
  {
    slug: 'anti-convulsants',
    name: 'Anti Convulsant',
    description:
      'Sodium channel blockers and GABAergic agents controlling seizure threshold and frequency. Supplied in USP/EP/BP/IP grade for oral solid-dose manufacturing across epilepsy and neuropathic pain product lines.',
    image:
      'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'acv-001',
        slug: 'carbamazepine',
        name: 'Carbamazepine',
        casNumber: '298-46-4',
        shortDescription:
          'Sodium channel stabiliser in USP/EP/BP grade for oral tablet and extended-release formulation manufacturing. Sourced for partial and generalised tonic-clonic seizure, and trigeminal neuralgia product lines.',
      },
      {
        id: 'acv-002',
        slug: 'phenytoin-sodium',
        name: 'Phenytoin Sodium',
        casNumber: '630-93-3',
        shortDescription:
          'Hydantoin sodium channel blocker supplied as sodium salt — the standard pharmacopoeial trading form, USP/EP/BP/IP grade — for oral capsule and injectable formulation manufacturing.',
      },
      {
        id: 'acv-003',
        slug: 'pregabalin',
        name: 'Pregabalin',
        casNumber: '148553-50-8',
        shortDescription:
          'GABA analogue free-base API in USP/EP/BP grade for oral capsule and tablet formulation manufacturing. Sourced for neuropathic pain, epilepsy adjunct, and generalised anxiety disorder product lines.',
      },
      {
        id: 'acv-004',
        slug: 'rufinamide',
        name: 'Rufinamide',
        casNumber: '106308-44-5',
        shortDescription:
          'Triazole-derivative anticonvulsant in pharmaceutical grade for oral tablet formulation manufacturing. Sourced for Lennox-Gastaut syndrome adjunctive seizure therapy product lines. Note: formal USP/EP monograph not confirmed — verify grade with supplier.',
      },
      {
        id: 'acv-005',
        slug: 'sodium-valproate',
        name: 'Sodium Valproate',
        casNumber: '1069-66-5',
        shortDescription:
          'Sodium salt of valproic acid — a distinct compound from the free acid — in USP/EP/BP/IP grade for oral tablet, syrup, and extended-release formulation manufacturing. Sourced for epilepsy and bipolar disorder product lines.',
      },
      {
        id: 'acv-006',
        slug: 'topiramate',
        name: 'Topiramate',
        casNumber: '97240-79-4',
        shortDescription:
          'Fructopyranose sulphamate anticonvulsant in USP/EP grade for oral tablet and sprinkle capsule formulation manufacturing. Sourced for partial/generalised epilepsy and migraine prophylaxis product lines.',
      },
    ],
  },
  {
    slug: 'anti-protozoals',
    name: 'Anti Protozoal',
    description:
      'Nitroimidazole and thiazolide APIs targeting anaerobic protozoan infections. Supplied in USP/EP/BP grade for oral tablet, suspension, and microgranule formulation manufacturing across global GI/parasitology product lines.',
    image:
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'ap-001',
        slug: 'metronidazole',
        name: 'Metronidazole',
        casNumber: '443-48-1',
        shortDescription:
          'Nitroimidazole antiprotozoal and antibacterial in USP/EP/BP/IP grade for oral tablet, IV injectable, and topical formulation manufacturing. Sourced for amoebiasis, giardiasis, and anaerobic infection product lines.',
      },
      {
        id: 'ap-002',
        slug: 'nitazoxanide',
        name: 'Nitazoxanide',
        casNumber: '55981-09-4',
        shortDescription:
          'Thiazolide antiparasitic in USP/EP grade for oral tablet and suspension formulation manufacturing. Sourced for cryptosporidiosis and giardiasis treatment product lines.',
      },
      {
        id: 'ap-003',
        slug: 'ornidazole',
        name: 'Ornidazole',
        casNumber: '16773-42-5',
        shortDescription:
          'Nitroimidazole derivative in BP/EP/USP grade for oral tablet formulation manufacturing. Sourced for amoebiasis, giardiasis, and trichomoniasis treatment product lines across EU and Asian export markets.',
      },
      {
        id: 'ap-004',
        slug: 'secnidazole',
        name: 'Secnidazole',
        casNumber: '3366-95-8',
        shortDescription:
          'Long-acting nitroimidazole in BP/EP/USP grade for single-dose oral microgranule and tablet formulation manufacturing. Sourced for trichomoniasis and giardiasis treatment product lines.',
      },
      {
        id: 'ap-005',
        slug: 'tinidazole',
        name: 'Tinidazole',
        casNumber: '19387-91-8',
        shortDescription:
          'Second-generation nitroimidazole in USP/EP grade for oral tablet formulation manufacturing. Sourced for giardiasis, trichomoniasis, and amoebiasis single-dose treatment product lines.',
      },
    ],
  },
  {
    slug: 'anti-fungals',
    name: 'Anti-Fungal',
    description:
      'Azole, allylamine, and fungistatic antibiotic APIs disrupting fungal cell membrane synthesis. Supplied in USP/EP/BP/IP grade for topical, oral, and vaginal formulation manufacturing across dermatology product lines.',
    image:
      'https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b38?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'af-001',
        slug: 'clotrimazole',
        name: 'Clotrimazole',
        casNumber: '23593-75-1',
        shortDescription:
          'Imidazole antifungal in USP/BP/EP/IP grade for topical cream, vaginal pessary, and oral troche formulation manufacturing. Sourced for superficial candidiasis and dermatophytosis treatment product lines.',
      },
      {
        id: 'af-002',
        slug: 'fluconazole',
        name: 'Fluconazole',
        casNumber: '86386-73-4',
        shortDescription:
          'Triazole ergosterol synthesis inhibitor in USP/EP grade for oral tablet, suspension, and IV formulation manufacturing. Sourced for systemic candidiasis and cryptococcal infection treatment product lines.',
      },
      {
        id: 'af-003',
        slug: 'ketoconazole',
        name: 'Ketoconazole',
        casNumber: '65277-42-1',
        shortDescription:
          'Imidazole antifungal in USP/EP/BP grade for topical cream, foam, and shampoo formulation manufacturing. Sourced for dermatophytosis and seborrhoeic dermatitis treatment product lines.',
      },
      {
        id: 'af-004',
        slug: 'miconazole-nitrate',
        name: 'Miconazole Nitrate',
        casNumber: '22832-87-7',
        shortDescription:
          'Imidazole antifungal nitrate salt in USP grade for topical and vaginal cream/suppository formulation manufacturing. Sourced for vulvovaginal candidiasis and dermatophyte infection treatment product lines.',
      },
      {
        id: 'af-005',
        slug: 'terbinafine',
        name: 'Terbinafine',
        casNumber: '78628-80-5 (HCl)',
        shortDescription:
          'Allylamine squalene epoxidase inhibitor supplied as hydrochloride salt — the standard pharmacopoeial trading form, USP/EP/BP grade — for oral tablet and topical cream formulation manufacturing.',
      },
      {
        id: 'af-006',
        slug: 'griseofulvin',
        name: 'Griseofulvin',
        casNumber: '126-07-8',
        shortDescription:
          'Fungistatic antibiotic in USP/EP/BP grade (microsize and ultra-microsize particle grades available) for oral tablet and capsule formulation manufacturing. Sourced for scalp, hair, and nail dermatophyte infection treatment product lines.',
      },
    ],
  },
  {
    slug: 'anti-histamines',
    name: 'Anti-Histamine',
    description:
      'H1 receptor antagonists and allergy-adjacent APIs blocking histamine-mediated inflammatory cascades. Supplied in USP/EP/BP grade for tablet, syrup, and injectable formulation manufacturing across allergy product lines.',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'aht-001',
        slug: 'cetirizine',
        name: 'Cetirizine',
        casNumber: '83881-52-1 (HCl)',
        shortDescription:
          'Second-generation H1 antihistamine supplied as hydrochloride salt — USP/EP/BP grade — for oral tablet and syrup formulation manufacturing. Sourced for allergic rhinitis and chronic urticaria treatment product lines.',
      },
      {
        id: 'aht-002',
        slug: 'chlorpheniramine-maleate',
        name: 'Chlorpheniramine Maleate',
        casNumber: '113-92-8',
        shortDescription:
          'First-generation alkylamine antihistamine in USP grade for tablet and syrup formulation manufacturing. Sourced for allergic conditions, cold symptom relief, and pruritus product lines.',
      },
      {
        id: 'aht-003',
        slug: 'chlorpromazine',
        name: 'Chlorpromazine',
        casNumber: '50-53-3',
        shortDescription:
          'Phenothiazine with secondary H1-blocking activity, used in antiemetic and sedation formulation manufacturing — USP/EP/BP grade. Note: primary pharmacological class is antipsychotic/neuroleptic, not H1-antihistamine.',
      },
      {
        id: 'aht-004',
        slug: 'desloratadine',
        name: 'Desloratadine',
        casNumber: '100643-71-8',
        shortDescription:
          'Third-generation non-sedating H1 antihistamine in USP grade for oral tablet and syrup formulation manufacturing. Sourced for allergic rhinitis and chronic urticaria treatment product lines.',
      },
      {
        id: 'aht-005',
        slug: 'diphenhydramine-hcl',
        name: 'Diphenhydramine HCl',
        casNumber: '147-24-0',
        shortDescription:
          'First-generation sedating antihistamine in USP/EP/BP grade for tablet, syrup, and injectable formulation manufacturing. Sourced for allergic reactions, antiemetic, and sleep-aid product lines.',
      },
      {
        id: 'aht-006',
        slug: 'fexofenadine',
        name: 'Fexofenadine',
        casNumber: '153439-40-8 (HCl)',
        shortDescription:
          'Non-sedating active terfenadine metabolite supplied as hydrochloride salt — USP grade — for oral tablet formulation manufacturing. Sourced for allergic rhinitis and urticaria treatment product lines.',
      },
      {
        id: 'aht-007',
        slug: 'ketotifen',
        name: 'Ketotifen',
        casNumber: '34580-14-8 (fumarate)',
        shortDescription:
          'Non-competitive H1 antagonist and mast cell stabiliser supplied as fumarate salt for tablet and eye-drop formulation manufacturing. Sourced for allergic asthma and allergic conjunctivitis product lines.',
      },
      {
        id: 'aht-008',
        slug: 'levocetirizine',
        name: 'Levocetirizine',
        casNumber: '130018-87-0 (dihydrochloride)',
        shortDescription:
          'R-enantiomer of cetirizine supplied as dihydrochloride salt — USP grade — with enhanced H1 receptor affinity for tablet formulation manufacturing. Sourced for allergic rhinitis and urticaria product lines.',
      },
      {
        id: 'aht-009',
        slug: 'loratadine',
        name: 'Loratadine',
        casNumber: '79794-75-5',
        shortDescription:
          'Non-sedating piperidine antihistamine in USP/EP/BP grade for oral tablet and syrup formulation manufacturing. Sourced for seasonal and perennial allergic rhinoconjunctivitis treatment product lines.',
      },
      {
        id: 'aht-010',
        slug: 'montelukast',
        name: 'Montelukast',
        casNumber: '151767-02-1 (sodium)',
        shortDescription:
          'Cysteinyl leukotriene receptor antagonist supplied as sodium salt for tablet formulation manufacturing, often paired with antihistamine product lines. Note: pharmacologically an LTRA, not an H1-antihistamine.',
      },
      {
        id: 'aht-011',
        slug: 'pheniramine-maleate',
        name: 'Pheniramine Maleate',
        casNumber: '132-20-7',
        shortDescription:
          'First-generation alkylamine antihistamine in USP/EP/BP/JP grade for tablet, syrup, and injectable formulation manufacturing. Sourced for allergic rhinitis and urticaria treatment product lines.',
      },
      {
        id: 'aht-012',
        slug: 'promethazine',
        name: 'Promethazine',
        casNumber: '58-33-3 (HCl)',
        shortDescription:
          'Sedating phenothiazine antihistamine supplied as hydrochloride salt — USP/EP/BP grade — for tablet and injectable formulation manufacturing. Sourced for allergy, antiemetic, and pre-operative sedation product lines.',
      },
    ],
  },
  {
    slug: 'anti-depressants',
    name: 'Anti-Depressant',
    description:
      'SSRI, SNRI, tricyclic, and MAOI-class APIs modulating serotonin and norepinephrine neurotransmission. Supplied in USP/EP/BP grade for oral tablet manufacturing across mood-disorder product lines.',
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'adep-001',
        slug: 'escitalopram',
        name: 'Escitalopram',
        casNumber: '219861-08-2 (oxalate)',
        shortDescription:
          'Pure S-enantiomer SSRI supplied as oxalate salt — USP/EP/BP grade — for oral tablet and oral solution formulation manufacturing. Sourced for major depressive and generalised anxiety disorder product lines.',
      },
      {
        id: 'adep-002',
        slug: 'citalopram',
        name: 'Citalopram',
        casNumber: '59729-32-7 (hydrobromide)',
        shortDescription:
          'Racemic SSRI supplied as hydrobromide salt — USP/EP grade — for oral tablet and oral solution formulation manufacturing. Sourced for major depressive disorder and anxiety treatment product lines.',
      },
      {
        id: 'adep-003',
        slug: 'metronidazole',
        name: 'Metronidazole',
        casNumber: '443-48-1',
        shortDescription:
          'Nitroimidazole antiprotozoal and antibacterial in USP/EP/BP/IP grade for oral tablet, IV, and topical formulation manufacturing. Note: pharmacological class is antiprotozoal/antibacterial, not antidepressant.',
      },
      {
        id: 'adep-004',
        slug: 'fluoxetine',
        name: 'Fluoxetine',
        casNumber: '56296-78-7 (HCl)',
        shortDescription:
          'Prototype SSRI supplied as hydrochloride salt — USP/EP grade — for oral capsule, tablet, and liquid formulation manufacturing. Sourced for major depression, OCD, and bulimia nervosa treatment product lines.',
      },
      {
        id: 'adep-005',
        slug: 'imipramine',
        name: 'Imipramine',
        casNumber: '113-52-0 (HCl)',
        shortDescription:
          'Tricyclic antidepressant supplied as hydrochloride salt — USP/EP grade — for oral tablet formulation manufacturing. Sourced for major depressive disorder and childhood enuresis treatment product lines.',
      },
      {
        id: 'adep-006',
        slug: 'moclobemide',
        name: 'Moclobemide',
        casNumber: '71320-77-9',
        shortDescription:
          'Reversible MAO-A inhibitor (RIMA) in pharmaceutical grade for oral tablet formulation manufacturing. Sourced for major depressive disorder and social anxiety treatment product lines without dietary restriction.',
      },
      {
        id: 'adep-007',
        slug: 'sertraline',
        name: 'Sertraline',
        casNumber: '79559-97-0 (HCl)',
        shortDescription:
          'SSRI supplied as hydrochloride salt — USP/EP grade — for oral tablet formulation manufacturing. Sourced for major depression, OCD, panic disorder, and PTSD treatment product lines.',
      },
      {
        id: 'adep-008',
        slug: 'venlafaxine',
        name: 'Venlafaxine',
        casNumber: '99300-78-4 (HCl)',
        shortDescription:
          'SNRI supplied as hydrochloride salt — USP grade — for extended-release capsule and tablet formulation manufacturing. Sourced for depression, generalised anxiety, and panic disorder product lines.',
      },
      {
        id: 'adep-009',
        slug: 'acyclovir',
        name: 'Acyclovir',
        casNumber: '59277-89-3',
        shortDescription:
          'Nucleoside analogue antiviral in USP grade for tablet, injectable, and topical cream formulation manufacturing. Note: pharmacological class is antiviral, not antidepressant — active against HSV and VZV infections.',
      },
      {
        id: 'adep-010',
        slug: 'ribavirin',
        name: 'Ribavirin',
        casNumber: '36791-04-5',
        shortDescription:
          'Guanosine nucleoside analogue antiviral in pharmaceutical grade for capsule, oral, and inhaled formulation manufacturing. Note: pharmacological class is antiviral, not antidepressant — active against hepatitis C and RSV.',
      },
    ],
  },
  {
    slug: 'hormones',
    name: 'Hormones',
    description:
      'Steroidal progestogens, androgens, and reproductive biologics for endocrine regulation and fertility therapy. Supplied in pharmaceutical grade for injectable, oral, and topical formulation manufacturing.',
    image:
      'https://images.unsplash.com/photo-1582560469781-1a3b81bf5975?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'hor-001',
        slug: 'allyloestrenol',
        name: 'Allyloestrenol',
        casNumber: '432-60-0',
        shortDescription:
          'Synthetic progestogen in pharmaceutical grade for oral tablet formulation manufacturing. Sourced for threatened miscarriage and recurrent pregnancy loss prevention. Note: limited formal pharmacopoeial monograph documentation — confirm grade with supplier.',
      },
      {
        id: 'hor-002',
        slug: 'follicle-stimulating-hormone-fsh',
        name: 'Follicle Stimulating Hormone (FSH)',
        casNumber: '146479-72-3 (recombinant)',
        shortDescription:
          'Glycoprotein gonadotropin biologic, traded as recombinant (CHO-cell derived) or urinary-derived product — distinct sourcing and pharmacokinetics. Sourced for ovulation induction and assisted reproductive technology protocols.',
      },
      {
        id: 'hor-003',
        slug: 'human-chorionic-gonadotropin-hcg',
        name: 'Human Chorionic Gonadotropin (HCG)',
        casNumber: '9002-61-3',
        shortDescription:
          'Glycoprotein hormone biologic, traded as urinary-derived or recombinant product, for injectable formulation manufacturing. Sourced for final oocyte maturation trigger and corpus luteum support in ART protocols.',
      },
      {
        id: 'hor-004',
        slug: 'human-menopausal-gonadotropin-hmg',
        name: 'Human Menopausal Gonadotropin (HMG)',
        casNumber: '61489-71-2',
        shortDescription:
          'Urinary-derived gonadotropin biologic mixture (FSH + LH activity) for injectable formulation manufacturing. Sourced for ovulation induction and ovarian stimulation in assisted reproductive technology.',
      },
      {
        id: 'hor-005',
        slug: 'hydroxyprogesterone-caproate',
        name: 'Hydroxy Progesterone Caproate',
        casNumber: '630-56-8',
        shortDescription:
          '17-alpha hydroxyprogesterone ester in USP grade for IM injectable suspension formulation manufacturing. Sourced for preterm birth prevention in high-risk pregnancy product lines.',
      },
      {
        id: 'hor-006',
        slug: 'levonorgestrel',
        name: 'Levonorgesterel',
        casNumber: '797-63-7',
        shortDescription:
          'Synthetic progestin in USP/EP grade for oral tablet, intrauterine device, and emergency contraception formulation manufacturing. Widely sourced for regular and emergency contraceptive product lines.',
      },
      {
        id: 'hor-007',
        slug: 'medroxyprogesterone-acetate',
        name: 'Medroxy Progesterone Acetate',
        casNumber: '71-58-9',
        shortDescription:
          'Synthetic progestin ester in USP/EP/BP grade for injectable suspension and oral tablet formulation manufacturing. Sourced for injectable contraception, endometriosis, and HRT product lines.',
      },
      {
        id: 'hor-008',
        slug: 'mifepristone',
        name: 'Mifepristone',
        casNumber: '84371-65-3',
        shortDescription:
          'Progesterone receptor antagonist in USP grade for oral tablet formulation manufacturing. Sourced for medical termination of pregnancy in combination with misoprostol — controlled distribution in most markets.',
      },
      {
        id: 'hor-009',
        slug: 'misoprostol-1-percent',
        name: 'Misoprostol 1%',
        casNumber: '59122-46-2',
        shortDescription:
          'Prostaglandin E1 analogue. "1%" denotes the HPMC dispersion grade used for handling and stability of the hygroscopic pure API (same CAS) — not a diluted-strength product. Sourced for uterotonic and NSAID-ulcer-prevention formulation manufacturing.',
      },
      {
        id: 'hor-010',
        slug: 'nandrolone-phenylpropionate',
        name: 'Nandrolone Phenyl Propionate',
        casNumber: '62-90-8',
        shortDescription:
          'Short-acting anabolic steroid ester in BP grade for oil-based injectable formulation manufacturing. Sourced for anaemia and muscle-wasting product lines — controlled/restricted in many jurisdictions.',
      },
      {
        id: 'hor-011',
        slug: 'nandrolone-decanoate',
        name: 'Nandrolone Decanoate',
        casNumber: '360-70-3',
        shortDescription:
          'Long-acting anabolic steroid ester in USP/EP/BP grade for oil-based injectable formulation manufacturing. Sourced for anaemia of renal insufficiency and osteoporosis management — controlled/restricted in many jurisdictions.',
      },
      {
        id: 'hor-012',
        slug: 'natural-micronized-progesterone',
        name: 'Natural Micro. Progesterone',
        casNumber: '57-83-0',
        shortDescription:
          'Plant-derived progesterone, identical CAS to standard progesterone, supplied in micronized particle grade (improved oral bioavailability) for capsule, vaginal tablet, and gel formulation manufacturing.',
      },
      {
        id: 'hor-013',
        slug: 'norethisterone-base-acetate',
        name: 'Norethisterone Base / Acetate',
        casNumber: '68-22-4 / 51-98-9',
        shortDescription:
          'Synthetic progestin supplied as free base (68-22-4) and acetate ester (51-98-9) — distinct compounds, BP/EP/USP grade — for oral tablet and injectable formulation manufacturing across contraception and HRT product lines.',
      },
    ],
  },
  {
    slug: 'antibiotics-antibacterial',
    name: 'Antibiotics / Antibacterial',
    description:
      'Penicillins, cephalosporins, fluoroquinolones, aminoglycosides, and glycopeptides — including beta-lactamase inhibitor combinations — for bacterial infection management. Supplied in USP/EP/BP grade for oral and sterile injectable formulation manufacturing.',
    image:
      'https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'ab-001',
        slug: 'amikacin-sulphate',
        name: 'Amikacin Sulphate',
        casNumber: '39831-55-5',
        shortDescription: 'Aminoglycoside sulfate salt in USP/EP/BP/IP grade for sterile injectable formulation manufacturing, active against gram-negative and select gram-positive infections.',
      },
      {
        id: 'ab-002',
        slug: 'amoxycillin-trihydrate',
        name: 'Amoxycillin Trihydrate',
        casNumber: '61336-70-7',
        shortDescription: 'Broad-spectrum aminopenicillin trihydrate salt in USP/EP/BP/IP grade for oral tablet, capsule, and suspension formulation manufacturing.',
      },
      {
        id: 'ab-003',
        slug: 'ampicillin-trihydrate',
        name: 'Ampicillin Trihydrate',
        casNumber: '7177-48-2',
        shortDescription: 'Broad-spectrum aminopenicillin trihydrate salt in USP/EP/BP grade for oral capsule and injectable formulation manufacturing.',
      },
      {
        id: 'ab-004',
        slug: 'ampicillin-with-sulbactam-sodium',
        name: 'Ampicillin with Sulbactam Sodium',
        casNumber: '7177-48-2 + 69388-84-7',
        shortDescription: 'Beta-lactam/beta-lactamase inhibitor combination, standard 2:1 ratio, for sterile injectable formulation manufacturing against beta-lactamase-producing organisms.',
      },
      {
        id: 'ab-005',
        slug: 'cefadroxil',
        name: 'Cefadroxil',
        casNumber: '66592-87-8',
        shortDescription: 'First-generation cephalosporin monohydrate in USP/EP/BP grade for oral tablet, capsule, and suspension formulation manufacturing.',
      },
      {
        id: 'ab-006',
        slug: 'cefepime',
        name: 'Cefepime',
        casNumber: '123171-59-5 (dihydrochloride)',
        shortDescription: 'Fourth-generation cephalosporin supplied as dihydrochloride monohydrate — the standard trading form — for sterile injectable formulation manufacturing against gram-negative infections.',
      },
      {
        id: 'ab-007',
        slug: 'cefixime',
        name: 'Cefixime',
        casNumber: '125110-14-7 (trihydrate)',
        shortDescription: 'Third-generation oral cephalosporin supplied as trihydrate salt in USP/EP/BP/JP grade for tablet and suspension formulation manufacturing.',
      },
      {
        id: 'ab-008',
        slug: 'cefpodoxime-proxetil',
        name: 'Cefpodoxime Proxetil',
        casNumber: '87239-81-4',
        shortDescription: 'Third-generation oral cephalosporin ester prodrug in USP/EP grade for tablet and suspension formulation manufacturing.',
      },
      {
        id: 'ab-009',
        slug: 'ceftazidime',
        name: 'Ceftazidime',
        casNumber: '78439-06-2 (pentahydrate)',
        shortDescription: 'Third-generation cephalosporin supplied as pentahydrate — the pharmacopoeial standard form, USP/EP/BP grade — for sterile injectable formulation manufacturing against Pseudomonas infections.',
      },
      {
        id: 'ab-010',
        slug: 'ceftriaxone',
        name: 'Ceftriaxone',
        casNumber: '74578-69-1 (sodium)',
        shortDescription: 'Third-generation cephalosporin supplied as sodium salt for sterile injectable formulation manufacturing against meningitis, gonorrhoea, and severe systemic infections.',
      },
      {
        id: 'ab-011',
        slug: 'cefuroxime-axetil',
        name: 'Cefuroxime Axetil',
        casNumber: '64544-07-6',
        shortDescription: 'Second-generation oral cephalosporin ester prodrug in USP/EP/BP grade for tablet and suspension formulation manufacturing.',
      },
      {
        id: 'ab-012',
        slug: 'cefuroxime-sodium-sterile',
        name: 'Cefuroxime Sodium Sterile',
        casNumber: '56238-63-2',
        shortDescription: 'Second-generation cephalosporin sodium salt, sterile grade, for IV/IM injectable formulation manufacturing.',
      },
      {
        id: 'ab-013',
        slug: 'cephalexin',
        name: 'Cephalexin',
        casNumber: '23325-78-2',
        shortDescription: 'First-generation cephalosporin monohydrate in USP/EP grade for oral tablet, capsule, and suspension formulation manufacturing.',
      },
      {
        id: 'ab-014',
        slug: 'chloramphenicol-palmitate',
        name: 'Chloramphenicol Palmitate',
        casNumber: '530-43-8',
        shortDescription: 'Palmitate ester prodrug of chloramphenicol in USP grade for paediatric oral suspension formulation manufacturing; broad-spectrum use now limited due to toxicity risk.',
      },
      {
        id: 'ab-015',
        slug: 'ciprofloxacin-hcl',
        name: 'Ciprofloxacin HCl',
        casNumber: '85721-33-1',
        shortDescription: 'Second-generation fluoroquinolone hydrochloride salt in USP/EP grade for oral tablet and injectable formulation manufacturing against urinary, GI, and respiratory infections.',
      },
      {
        id: 'ab-016',
        slug: 'amoxycillin-with-clavulanate-potassium',
        name: 'Amoxycillin with Clavulanate Potassium',
        casNumber: '61336-70-7 + 61177-45-5',
        shortDescription: 'Beta-lactam/beta-lactamase inhibitor combination in USP/EP/BP grade, available in 4:1, 7:1, and 8:1 ratios, for tablet and suspension formulation manufacturing.',
      },
      {
        id: 'ab-017',
        slug: 'clavulanate-potassium-with-avicel',
        name: 'Clavulanate Potassium with Avicel',
        casNumber: '61177-45-5',
        shortDescription: 'Pre-blended excipient grade (typically 1:1 with microcrystalline cellulose) used to stabilise the otherwise highly hygroscopic and flammable pure clavulanate API for downstream tableting.',
      },
      {
        id: 'ab-018',
        slug: 'clavulanate-potassium-with-syloid',
        name: 'Clavulanate Potassium with Syloid',
        casNumber: '61177-45-5',
        shortDescription: 'Pre-blended excipient grade combining clavulanate potassium with silica-based Syloid carrier, used for handling stability ahead of combination tablet manufacturing.',
      },
      {
        id: 'ab-019',
        slug: 'clindamycin-hcl-phosphate',
        name: 'Clindamycin HCl / Phosphate',
        casNumber: '21462-39-5 / 24729-96-2',
        shortDescription: 'Lincosamide antibiotic supplied as hydrochloride (oral capsule) and phosphate (injectable/topical prodrug) salts — distinct compounds, USP/EP grade.',
      },
      {
        id: 'ab-020',
        slug: 'cloxacillin-sodium',
        name: 'Cloxacillin Sodium',
        casNumber: '7081-44-9',
        shortDescription: 'Beta-lactamase-resistant penicillin sodium salt in EP/BP grade for oral capsule and injectable formulation manufacturing against Staphylococcal infections.',
      },
      {
        id: 'ab-021',
        slug: 'dicloxacillin',
        name: 'Dicloxacillin',
        casNumber: '13412-64-1 (sodium)',
        shortDescription: 'Beta-lactamase-resistant penicillin supplied as sodium salt monohydrate — the standard trading form, USP/EP/BP grade — for oral capsule and suspension formulation manufacturing.',
      },
      {
        id: 'ab-022',
        slug: 'doxycycline',
        name: 'Doxycycline',
        casNumber: '24390-14-5 (hyclate)',
        shortDescription: 'Broad-spectrum tetracycline supplied as hyclate salt — the standard trading form, USP/BP grade — for oral tablet, capsule, and injectable formulation manufacturing.',
      },
      {
        id: 'ab-023',
        slug: 'faropenem',
        name: 'Faropenem',
        casNumber: '106560-14-9 (base) / 122547-49-3 (sodium)',
        shortDescription: 'Orally-active penem-class beta-lactam, available as free base and sodium salt, for tablet formulation manufacturing — broad-spectrum coverage including beta-lactamase-producing organisms.',
      },
      {
        id: 'ab-024',
        slug: 'enrofloxacin',
        name: 'Enrofloxacin',
        casNumber: '93106-60-6',
        shortDescription: 'Fluoroquinolone for veterinary injectable and oral suspension formulation manufacturing. Note: veterinary-only — not approved for human therapeutic use in most markets.',
      },
      {
        id: 'ab-025',
        slug: 'gatifloxacin',
        name: 'Gatifloxacin',
        casNumber: '112811-59-3',
        shortDescription: 'Fourth-generation fluoroquinolone in pharmaceutical grade for oral tablet and ophthalmic solution formulation manufacturing.',
      },
      {
        id: 'ab-026',
        slug: 'imipenem-with-cilastatin',
        name: 'Imipenem with Cilastatin',
        casNumber: 'fixed 1:1 ratio',
        shortDescription: 'Carbapenem antibiotic co-formulated 1:1 with the dehydropeptidase inhibitor cilastatin, which is mandatory (not optional) to prevent renal degradation, for sterile injectable formulation manufacturing.',
      },
      {
        id: 'ab-027',
        slug: 'levofloxacin',
        name: 'Levofloxacin',
        casNumber: '138199-71-0 (hemihydrate)',
        shortDescription: 'Third-generation fluoroquinolone, the S-enantiomer of ofloxacin, supplied as hemihydrate — USP/BP grade — for oral tablet and injectable formulation manufacturing.',
      },
      {
        id: 'ab-028',
        slug: 'moxifloxacin',
        name: 'Moxifloxacin',
        casNumber: '186826-86-8 (HCl)',
        shortDescription: 'Fourth-generation fluoroquinolone supplied as hydrochloride salt for oral tablet, injectable, and ophthalmic solution formulation manufacturing.',
      },
      {
        id: 'ab-029',
        slug: 'mupirocin',
        name: 'Mupirocin',
        casNumber: '12650-69-0',
        shortDescription: 'Pseudomonic acid topical antibiotic in USP/BP/EP/IP grade for ointment and cream formulation manufacturing, primarily for MRSA nasal decolonisation.',
      },
      {
        id: 'ab-030',
        slug: 'neomycin-sulphate',
        name: 'Neomycin Sulphate',
        casNumber: '1405-10-3',
        shortDescription: 'Aminoglycoside sulfate salt in USP/EP/BP grade for oral tablet, topical, and combination formulation manufacturing — not used systemically due to nephro/ototoxicity.',
      },
      {
        id: 'ab-031',
        slug: 'ofloxacin',
        name: 'Ofloxacin',
        casNumber: '82419-36-1',
        shortDescription: 'Second-generation racemic fluoroquinolone in USP/BP grade for oral tablet, injectable, and ophthalmic solution formulation manufacturing.',
      },
      {
        id: 'ab-032',
        slug: 'piperacillin-with-tazobactam',
        name: 'Piperacillin with Tazobactam',
        casNumber: 'fixed 8:1 ratio',
        shortDescription: 'Extended-spectrum penicillin/beta-lactamase inhibitor combination at the fixed pharmacopoeial 8:1 ratio for sterile injectable formulation manufacturing.',
      },
      {
        id: 'ab-033',
        slug: 'sparfloxacin',
        name: 'Sparfloxacin',
        casNumber: '110871-86-8',
        shortDescription: 'Third-generation fluoroquinolone in pharmaceutical grade for oral tablet formulation manufacturing. Note: restricted or withdrawn in the US/EU due to phototoxicity and cardiotoxicity concerns.',
      },
      {
        id: 'ab-034',
        slug: 'spiramycin',
        name: 'Spiramycin',
        casNumber: '8025-81-8',
        shortDescription: '16-membered macrolide antibiotic mixture (components I/II/III) in pharmaceutical grade for oral tablet and suspension formulation manufacturing.',
      },
      {
        id: 'ab-035',
        slug: 'sulbactam-sodium-sterile',
        name: 'Sulbactam Sodium Sterile',
        casNumber: '69388-84-7',
        shortDescription: 'Beta-lactamase inhibitor sodium salt, sterile grade, for parenteral combination formulation manufacturing alongside beta-lactam antibiotics.',
      },
      {
        id: 'ab-036',
        slug: 'teicoplanin',
        name: 'Teicoplanin',
        casNumber: '61036-62-2',
        shortDescription: 'Glycopeptide antibiotic complex (multiple A2 components) in EP grade for sterile injectable formulation manufacturing, used as a vancomycin alternative for resistant gram-positive infections.',
      },
      {
        id: 'ab-037',
        slug: 'trimethoprim',
        name: 'Trimethoprim',
        casNumber: '738-70-5',
        shortDescription: 'Dihydrofolate reductase inhibitor in pharmaceutical grade for oral tablet formulation manufacturing, typically co-formulated with sulfonamides for urinary tract infection treatment.',
      },
      {
        id: 'ab-038',
        slug: 'vancomycin-hcl',
        name: 'Vancomycin HCl',
        casNumber: '1404-93-9',
        shortDescription: 'Glycopeptide antibiotic supplied as hydrochloride salt — the standard trading form, EP grade — for sterile IV injectable and oral formulation manufacturing against MRSA and C. difficile infections.',
      },
    ],
  },
  {
    slug: 'general',
    name: 'General',
    description:
      'Broad-spectrum APIs spanning CNS, cardiovascular, urology, and metabolic indications — plus enzyme and biologic preparations. Supplied in pharmaceutical grade for diverse formulation manufacturing across primary and specialty care product lines.',
    image:
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop',
    products: [
      {
        id: 'gen-001',
        slug: 'acetazolamide',
        name: 'Acetazolamide',
        casNumber: '59-66-5',
        shortDescription: 'Carbonic anhydrase inhibitor in USP/EP grade for oral tablet formulation manufacturing. Sourced for glaucoma, altitude sickness, and oedema product lines.',
      },
      {
        id: 'gen-002',
        slug: 'alprazolam',
        name: 'Alprazolam',
        casNumber: '28981-97-7',
        shortDescription: 'Triazolobenzodiazepine in USP/EP grade for oral tablet formulation manufacturing. Sourced for anxiety and panic disorder product lines. Note: controlled substance — Schedule IV in most jurisdictions.',
      },
      {
        id: 'gen-003',
        slug: 'atorvastatin-calcium',
        name: 'Atorvastatin Calcium',
        casNumber: '344423-98-9',
        shortDescription: 'HMG-CoA reductase inhibitor (statin) supplied as calcium salt — USP/EP grade — for oral tablet formulation manufacturing. Sourced for hypercholesterolaemia and cardiovascular risk reduction product lines.',
      },
      {
        id: 'gen-004',
        slug: 'caffeine-anhydrous',
        name: 'Caffeine Anhydrous',
        casNumber: '58-08-2',
        shortDescription: 'Xanthine alkaloid in USP/EP/BP/JP grade for tablet and injectable formulation manufacturing. Sourced for analgesic-adjunct and CNS stimulant product lines.',
      },
      {
        id: 'gen-005',
        slug: 'carboprost-tromethamine',
        name: 'Carboprost Tromethamine',
        casNumber: '58551-69-2',
        shortDescription: 'Prostaglandin F2-alpha analogue supplied as tromethamine salt — USP grade — for sterile injectable formulation manufacturing. Sourced for postpartum haemorrhage and abortifacient product lines.',
      },
      {
        id: 'gen-006',
        slug: 'carisoprodol',
        name: 'Carisoprodol',
        casNumber: '78-44-4',
        shortDescription: 'Centrally-acting skeletal muscle relaxant in USP/EP grade for oral tablet formulation manufacturing. Sourced for acute musculoskeletal pain product lines.',
      },
      {
        id: 'gen-007',
        slug: 'chlorpheniramine-maleate-general',
        name: 'Chlorpheniramine Maleate',
        casNumber: '113-92-8',
        shortDescription: 'First-generation antihistamine in USP grade for tablet and syrup formulation manufacturing. Sourced for cold/cough combination and allergy product lines.',
      },
      {
        id: 'gen-008',
        slug: 'citicoline',
        name: 'Citicoline',
        casNumber: '987-78-0 (base) / 33818-15-4 (sodium)',
        shortDescription: 'Nootropic nucleotide supplied as free base and sodium salt for capsule, oral solution, and injectable formulation manufacturing. Sourced for neuroprotection and stroke-recovery product lines.',
      },
      {
        id: 'gen-009',
        slug: 'cyproheptadine',
        name: 'Cyproheptadine',
        casNumber: '41354-29-4 (HCl)',
        shortDescription: 'H1/serotonin antagonist supplied as hydrochloride sesquihydrate — the standard trading form — for tablet and paediatric syrup formulation manufacturing. Sourced for allergy and appetite-stimulation product lines.',
      },
      {
        id: 'gen-010',
        slug: 'diclofenac-sodium-potassium-general',
        name: 'Diclofenac Sodium / Potassium',
        casNumber: '15307-79-6 / 15307-81-0',
        shortDescription: 'Phenylacetic acid NSAID supplied as sodium and potassium salts — distinct compounds, USP/EP/BP/IP grade — for tablet and injectable formulation manufacturing.',
      },
      {
        id: 'gen-011',
        slug: 'domperidone-powder-pellets',
        name: 'Domperidone Powder / Pellets',
        casNumber: '57808-66-9',
        shortDescription: 'Dopamine D2/D3 antagonist supplied as raw powder and enteric pellets — same compound, IP/BP/USP grade — for antiemetic and prokinetic tablet/suspension formulation manufacturing.',
      },
      {
        id: 'gen-012',
        slug: 'doxophylline',
        name: 'Doxophylline',
        casNumber: '69975-86-6',
        shortDescription: 'Xanthine bronchodilator in USP/EP/BP/IP grade for tablet and injectable formulation manufacturing, with a better cardiovascular/CNS safety profile than theophylline.',
      },
      {
        id: 'gen-013',
        slug: 'dextromethorphan-hbr',
        name: 'Dextromethorphan HBr (DMR)',
        casNumber: '6700-34-1',
        shortDescription: 'Non-opioid antitussive bromide salt in USP grade for syrup, tablet, and lozenge formulation manufacturing. Sourced for cough-suppressant product lines.',
      },
      {
        id: 'gen-014',
        slug: 'etoricoxib-general',
        name: 'Etoricoxib',
        casNumber: '202409-33-4',
        shortDescription: 'Selective COX-2 inhibitor in USP/EP/BP/IP grade for oral tablet formulation manufacturing. Sourced for osteoarthritis and acute gout product lines.',
      },
      {
        id: 'gen-015',
        slug: 'enoxaparin-sodium',
        name: 'Enoxaparin Sodium',
        casNumber: '679809-58-6',
        shortDescription: 'Low molecular weight heparin biologic/semisynthetic, derived from porcine intestinal mucosa, for subcutaneous injectable formulation manufacturing. Sourced for DVT/PE prophylaxis product lines — requires biologic-grade QA systems.',
      },
      {
        id: 'gen-016',
        slug: 'ezetimibe',
        name: 'Ezetimibe',
        casNumber: '163222-33-1',
        shortDescription: 'Selective cholesterol absorption inhibitor in USP grade for oral tablet formulation manufacturing, often paired with statins. Sourced for hypercholesterolaemia product lines.',
      },
      {
        id: 'gen-017',
        slug: 'ferrous-ascorbate',
        name: 'Ferrous Ascorbate',
        casNumber: '24808-52-4',
        shortDescription: 'Iron-vitamin C chelate haematinic in IP grade for tablet, syrup, and powder formulation manufacturing, offering faster absorption with fewer GI effects than ferrous sulfate.',
      },
      {
        id: 'gen-018',
        slug: 'flavoxate',
        name: 'Flavoxate',
        casNumber: '3717-88-2 (HCl)',
        shortDescription: 'Anticholinergic urinary antispasmodic supplied as hydrochloride salt — USP/EP/BP grade — for oral tablet formulation manufacturing. Sourced for dysuria and cystitis-symptom product lines.',
      },
      {
        id: 'gen-019',
        slug: 'frusemide',
        name: 'Frusemide',
        casNumber: '54-31-9',
        shortDescription: 'Loop diuretic identical to furosemide (alternate non-US spelling, same CAS) in USP/EP/BP grade for tablet, injectable, and oral solution formulation manufacturing.',
      },
      {
        id: 'gen-020',
        slug: 'fungal-diastase',
        name: 'Fungal Diastase',
        casNumber: 'Activity-defined, no fixed CAS',
        shortDescription: 'Alpha/beta-amylase enzyme preparation from Aspergillus oryzae for digestive-enzyme formulation manufacturing. Note: defined by activity units (U/g), not molecular CAS — requires enzyme-grade QA documentation.',
      },
      {
        id: 'gen-021',
        slug: 'heparin-sodium',
        name: 'Heparin Sodium',
        casNumber: '9041-08-1',
        shortDescription: 'Unfractionated heparin biologic, sourced from porcine/bovine intestinal mucosa, for IV/SC injectable formulation manufacturing. Sourced for anticoagulation product lines — requires biologic-grade QA systems.',
      },
      {
        id: 'gen-022',
        slug: 'ibuprofen-general',
        name: 'Ibuprofen',
        casNumber: '15687-27-1',
        shortDescription: 'Propionic acid NSAID in USP/EP/BP grade for tablet, capsule, and topical formulation manufacturing. Sourced for pain, fever, and inflammation product lines.',
      },
      {
        id: 'gen-023',
        slug: 'isoxsuprine',
        name: 'Isoxsuprine',
        casNumber: '579-56-6 (HCl)',
        shortDescription: 'Peripheral vasodilator supplied as hydrochloride salt — USP grade — for oral and injectable formulation manufacturing. Sourced for peripheral vascular disease product lines.',
      },
      {
        id: 'gen-024',
        slug: 'loperamide',
        name: 'Loperamide',
        casNumber: '34552-83-5 (HCl)',
        shortDescription: 'Mu-opioid receptor agonist antidiarrhoeal supplied as hydrochloride salt — USP grade — for oral tablet and capsule formulation manufacturing.',
      },
      {
        id: 'gen-025',
        slug: 'lovastatin',
        name: 'Lovastatin',
        casNumber: '75330-75-5',
        shortDescription: 'HMG-CoA reductase inhibitor (statin) prodrug in USP grade for oral tablet formulation manufacturing. Sourced for hypercholesterolaemia product lines.',
      },
      {
        id: 'gen-026',
        slug: 'mebendazole-general',
        name: 'Mebendazole',
        casNumber: '31431-39-7',
        shortDescription: 'Benzimidazole anthelmintic in pharmaceutical grade for oral tablet and suspension formulation manufacturing. Sourced for broad-spectrum intestinal helminthiasis product lines.',
      },
      {
        id: 'gen-027',
        slug: 'metaxalone',
        name: 'Metaxalone',
        casNumber: '1665-48-1',
        shortDescription: 'Oxazolidinone centrally-acting muscle relaxant in USP grade for oral tablet formulation manufacturing. Sourced for acute musculoskeletal pain product lines.',
      },
      {
        id: 'gen-028',
        slug: 'moclobemide-general',
        name: 'Moclobemide',
        casNumber: '71320-77-9',
        shortDescription: 'Reversible MAO-A inhibitor in pharmaceutical grade for oral tablet formulation manufacturing. Sourced for depression and social anxiety product lines.',
      },
      {
        id: 'gen-029',
        slug: 'orlistat',
        name: 'Orlistat',
        casNumber: '96829-58-2',
        shortDescription: 'Pancreatic lipase inhibitor in USP grade (cold-chain shipping required) for capsule formulation manufacturing. Sourced for weight-management product lines.',
      },
      {
        id: 'gen-030',
        slug: 'pepsin',
        name: 'Pepsin',
        casNumber: '9001-75-6',
        shortDescription: 'Aspartic protease digestive enzyme preparation for tablet and powder formulation manufacturing. Note: activity expressed in USP Pepsin Units, not standard molecular assay — sourced for digestive-enzyme product lines.',
      },
      {
        id: 'gen-031',
        slug: 'praziquantel',
        name: 'Praziquantel',
        casNumber: '55268-74-1',
        shortDescription: 'Pyrazinoisoquinoline anthelmintic in pharmaceutical grade for oral tablet formulation manufacturing. WHO-recommended sole agent for schistosomiasis and broad cestode/trematode infections.',
      },
      {
        id: 'gen-032',
        slug: 'prebiotic-probiotic',
        name: 'Prebiotic / Probiotic',
        casNumber: 'Not a single API — strain/substrate specific',
        shortDescription: 'Functional ingredient category, not a discrete chemical entity. Prebiotics (e.g., inulin, FOS) and probiotic strains (Lactobacillus, Bifidobacterium spp.) each carry individual specifications — confirm specific strain/substrate before quoting.',
      },
      {
        id: 'gen-033',
        slug: 'sildenafil-citrate',
        name: 'Sildenafil Citrate',
        casNumber: '171599-83-0',
        shortDescription: 'PDE5 inhibitor supplied as citrate salt — USP grade — for oral tablet formulation manufacturing. Sourced for erectile dysfunction and pulmonary hypertension product lines.',
      },
      {
        id: 'gen-034',
        slug: 'simvastatin',
        name: 'Simvastatin',
        casNumber: '79902-63-9',
        shortDescription: 'HMG-CoA reductase inhibitor (statin) prodrug in USP grade for oral tablet formulation manufacturing. Sourced for hypercholesterolaemia product lines.',
      },
      {
        id: 'gen-035',
        slug: 'spironolactone',
        name: 'Spironolactone',
        casNumber: '52-01-7',
        shortDescription: 'Aldosterone antagonist in USP grade for oral tablet formulation manufacturing. Sourced for potassium-sparing diuretic, heart failure, and antiandrogen product lines.',
      },
      {
        id: 'gen-036',
        slug: 'sumatriptan-succinate',
        name: 'Sumatriptan Succinate',
        casNumber: '103628-48-4',
        shortDescription: '5-HT1B/1D agonist (triptan) supplied as succinate salt — USP grade — for tablet, nasal, and injectable formulation manufacturing. Sourced for migraine treatment product lines.',
      },
      {
        id: 'gen-037',
        slug: 'tadalafil',
        name: 'Tadalafil',
        casNumber: '171596-29-5',
        shortDescription: 'Long-acting PDE5 inhibitor in USP grade for oral tablet formulation manufacturing. Sourced for erectile dysfunction and benign prostatic hyperplasia product lines.',
      },
      {
        id: 'gen-038',
        slug: 'terlipressin',
        name: 'Terlipressin',
        casNumber: '71515-17-8 (acetate)',
        shortDescription: 'Synthetic vasopressin analogue peptide supplied as acetate salt — the standard trading form — for sterile injectable formulation manufacturing. Sourced for variceal bleeding and hepatorenal syndrome product lines.',
      },
      {
        id: 'gen-039',
        slug: 'thiopental-sodium',
        name: 'Thiopental Sodium',
        casNumber: '76-75-5',
        shortDescription: 'Barbiturate CNS depressant sodium salt for sterile IV injectable formulation manufacturing. Note: controlled substance, largely phased out of routine anaesthetic use in most markets.',
      },
      {
        id: 'gen-040',
        slug: 'tranexamic-acid',
        name: 'Tranexamic Acid',
        casNumber: '1197-18-8',
        shortDescription: 'Lysine-derivative antifibrinolytic in USP grade for tablet and injectable formulation manufacturing. Sourced for haemostatic and heavy-menstrual-bleeding product lines.',
      },
      {
        id: 'gen-041',
        slug: 'trimetazidine',
        name: 'Trimetazidine',
        casNumber: '5011-34-7 (dihydrochloride)',
        shortDescription: 'Partial fatty-acid oxidation inhibitor supplied as dihydrochloride salt — the standard trading form — for oral tablet formulation manufacturing. Sourced for antianginal/metabolic-modifier product lines.',
      },
      {
        id: 'gen-042',
        slug: 'yohimbine-hcl',
        name: 'Yohimbine HCl',
        casNumber: '65-19-0',
        shortDescription: 'Alpha-2 adrenergic antagonist alkaloid supplied as hydrochloride salt for oral tablet formulation manufacturing. Sourced for peripheral vasoactive and erectile-dysfunction adjunct product lines.',
      },
      {
        id: 'gen-043',
        slug: 'zolpidem',
        name: 'Zolpidem',
        casNumber: '99294-93-6 (tartrate)',
        shortDescription: 'GABA-A agonist hypnotic supplied as tartrate salt — the standard trading form, USP grade — for oral tablet formulation manufacturing. Note: controlled substance in most jurisdictions.',
      },
      {
        id: 'gen-044',
        slug: 'l-methylfolate',
        name: 'L-Methylfolate',
        casNumber: '151533-22-1 (calcium)',
        shortDescription: 'Reduced folate (5-MTHF) supplied as calcium salt — the standard trading form — for capsule formulation manufacturing. Sourced for MTHFR-deficiency and neuropsychiatric adjunct product lines.',
      },
    ],
  },
];
