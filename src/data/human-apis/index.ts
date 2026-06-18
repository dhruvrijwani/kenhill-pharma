import { HumanAPICategory } from '../../lib/types';

export const humanAPICategories: HumanAPICategory[] = [
  {
    slug: 'steroids',
    name: 'Steroids',
    description:
      'Synthetic corticosteroids modulating immune response and inflammation pathways. Indicated for autoimmune, allergic, and endocrine insufficiency disorders.',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'ste-001', slug: 'prednisolone', name: 'Prednisolone', casNumber: '50-24-8', shortDescription: 'Synthetic glucocorticoid for inflammatory and autoimmune conditions including rheumatoid arthritis and asthma.' },
      { id: 'ste-002', slug: 'dexamethasone', name: 'Dexamethasone', casNumber: '50-02-2', shortDescription: 'Potent long-acting glucocorticoid for severe allergic reactions, cerebral oedema, and COVID-19 management.' },
      { id: 'ste-003', slug: 'betamethasone', name: 'Betamethasone', casNumber: '378-44-9', shortDescription: 'Long-acting corticosteroid for dermatological conditions and fetal lung maturation in preterm labour.' },
      { id: 'ste-004', slug: 'methylprednisolone', name: 'Methylprednisolone', casNumber: '83-43-2', shortDescription: 'Intermediate-acting glucocorticoid for acute spinal cord injury and inflammatory episodes.' },
      { id: 'ste-005', slug: 'hydrocortisone', name: 'Hydrocortisone', casNumber: '50-23-7', shortDescription: 'Natural corticosteroid for adrenal insufficiency, anaphylaxis, and topical inflammation management.' },
      { id: 'ste-006', slug: 'triamcinolone', name: 'Triamcinolone', casNumber: '124-94-7', shortDescription: 'Intermediate glucocorticoid for intra-articular injection in musculoskeletal inflammatory conditions.' },
      { id: 'ste-007', slug: 'beclomethasone', name: 'Beclomethasone Dipropionate', casNumber: '5534-09-8', shortDescription: 'Inhaled corticosteroid for prophylaxis and maintenance therapy of asthma and allergic rhinitis.' },
    ],
  },
  {
    slug: 'anti-malarials',
    name: 'Anti Malarials',
    description:
      'Active molecules targeting Plasmodium parasite cycles at erythrocytic and hepatic stages. Effective against P. falciparum and P. vivax malaria strains.',
    image:
      'https://images.unsplash.com/photo-1581093588401-f5c32e58b953?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'am-001', slug: 'chloroquine-phosphate', name: 'Chloroquine Phosphate', casNumber: '50-63-5', shortDescription: 'Classic 4-aminoquinoline for uncomplicated malaria prophylaxis and treatment of susceptible strains.' },
      { id: 'am-002', slug: 'hydroxychloroquine-sulfate', name: 'Hydroxychloroquine Sulfate', casNumber: '747-36-4', shortDescription: 'Aminoquinoline derivative used in malaria, lupus erythematosus, and rheumatoid arthritis management.' },
      { id: 'am-003', slug: 'quinine-sulfate', name: 'Quinine Sulfate', casNumber: '804-63-7', shortDescription: 'Alkaloid cinchona bark derivative for severe and complicated Plasmodium falciparum malaria.' },
      { id: 'am-004', slug: 'artemisinin', name: 'Artemisinin', casNumber: '63968-64-9', shortDescription: 'Sesquiterpene lactone peroxide from Artemisia annua with potent anti-plasmodial activity.' },
      { id: 'am-005', slug: 'lumefantrine', name: 'Lumefantrine', casNumber: '82186-77-4', shortDescription: 'Aryl amino alcohol partnered with artemether for artemisinin-based combination therapy (ACT).' },
      { id: 'am-006', slug: 'mefloquine', name: 'Mefloquine HCl', casNumber: '51773-92-3', shortDescription: 'Quinolinemethanol compound for prophylaxis and treatment of multi-drug-resistant malaria.' },
      { id: 'am-007', slug: 'primaquine', name: 'Primaquine Phosphate', casNumber: '63-45-6', shortDescription: 'Radical curative agent for P. vivax and P. ovale to eliminate hepatic hypnozoite reservoirs.' },
    ],
  },
  {
    slug: 'anti-hypertensives',
    name: 'Anti Hypertensive',
    description:
      'Angiotensin blockers, calcium channel antagonists, and ACE inhibitors for blood pressure regulation. Clinically validated for hypertension, heart failure, and renal protection.',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'ah-001', slug: 'amlodipine-besylate', name: 'Amlodipine Besylate', casNumber: '111470-99-6', shortDescription: 'Long-acting dihydropyridine calcium channel blocker for hypertension and stable angina.' },
      { id: 'ah-002', slug: 'losartan-potassium', name: 'Losartan Potassium', casNumber: '124750-99-8', shortDescription: 'Selective AT1 angiotensin II receptor antagonist for hypertension and diabetic nephropathy.' },
      { id: 'ah-003', slug: 'enalapril-maleate', name: 'Enalapril Maleate', casNumber: '76095-16-4', shortDescription: 'ACE inhibitor for hypertension, heart failure, and asymptomatic left ventricular dysfunction.' },
      { id: 'ah-004', slug: 'lisinopril', name: 'Lisinopril', casNumber: '76547-98-3', shortDescription: 'Long-acting ACE inhibitor for hypertension, acute MI management, and chronic heart failure.' },
      { id: 'ah-005', slug: 'metoprolol-tartrate', name: 'Metoprolol Tartrate', casNumber: '56392-17-7', shortDescription: 'Cardioselective beta-1 blocker for hypertension, angina, and prevention of second MI.' },
      { id: 'ah-006', slug: 'valsartan', name: 'Valsartan', casNumber: '137862-53-4', shortDescription: 'Non-peptide ARB for essential hypertension, post-MI heart failure, and renal protection.' },
      { id: 'ah-007', slug: 'olmesartan-medoxomil', name: 'Olmesartan Medoxomil', casNumber: '144689-63-4', shortDescription: 'Prodrug ARB with powerful and sustained antihypertensive efficacy across all ages.' },
    ],
  },
  {
    slug: 'anti-retrovirals',
    name: 'Anti Retroviral',
    description:
      'Nucleoside/non-nucleoside reverse transcriptase inhibitors and protease blockers targeting HIV replication. Essential components of combination ART regimens globally.',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'arv-001', slug: 'tenofovir-disoproxil-fumarate', name: 'Tenofovir Disoproxil Fumarate', casNumber: '202138-50-9', shortDescription: 'Nucleotide reverse transcriptase inhibitor for HIV-1 and chronic hepatitis B treatment.' },
      { id: 'arv-002', slug: 'lamivudine', name: 'Lamivudine', casNumber: '134678-17-4', shortDescription: 'Nucleoside analogue reverse transcriptase inhibitor used in HIV and hepatitis B combination therapy.' },
      { id: 'arv-003', slug: 'efavirenz', name: 'Efavirenz', casNumber: '154598-52-4', shortDescription: 'Non-nucleoside reverse transcriptase inhibitor for first-line HIV-1 antiretroviral regimens.' },
      { id: 'arv-004', slug: 'zidovudine', name: 'Zidovudine (AZT)', casNumber: '30516-87-1', shortDescription: 'First antiretroviral approved for HIV treatment; also used for maternal-fetal transmission prevention.' },
      { id: 'arv-005', slug: 'abacavir-sulfate', name: 'Abacavir Sulfate', casNumber: '188062-50-2', shortDescription: 'Carbocyclic nucleoside analogue for HIV-1 in combination with other antiretrovirals.' },
      { id: 'arv-006', slug: 'nevirapine', name: 'Nevirapine', casNumber: '129618-40-2', shortDescription: 'NNRTI for treatment-naive adults and for prevention of mother-to-child HIV transmission.' },
      { id: 'arv-007', slug: 'atazanavir', name: 'Atazanavir Sulfate', casNumber: '229975-97-7', shortDescription: 'Azapeptide HIV-1 protease inhibitor with once-daily dosing and low lipid-profile impact.' },
    ],
  },
  {
    slug: 'vitamins',
    name: 'Vitamins',
    description:
      'Micronutrient APIs including water-soluble and fat-soluble vitamin derivatives at pharmaceutical grade. Critical for metabolic pathways, immune function, and nutritional deficiency correction.',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'vit-001', slug: 'ascorbic-acid', name: 'Ascorbic Acid (Vitamin C)', casNumber: '50-81-7', shortDescription: 'Essential antioxidant vitamin for collagen synthesis, immune support, and iron absorption.' },
      { id: 'vit-002', slug: 'cyanocobalamin', name: 'Cyanocobalamin (Vitamin B12)', casNumber: '68-19-9', shortDescription: 'Cobalt-containing coenzyme for neurological function, DNA synthesis, and megaloblastic anaemia treatment.' },
      { id: 'vit-003', slug: 'cholecalciferol', name: 'Cholecalciferol (Vitamin D3)', casNumber: '67-97-0', shortDescription: 'Fat-soluble vitamin for calcium homeostasis, bone mineralisation, and immune regulation.' },
      { id: 'vit-004', slug: 'folic-acid', name: 'Folic Acid (Vitamin B9)', casNumber: '59-30-3', shortDescription: 'B-vitamin essential for neural tube development, DNA synthesis, and megaloblastic anaemia prevention.' },
      { id: 'vit-005', slug: 'biotin', name: 'Biotin (Vitamin H)', casNumber: '58-85-5', shortDescription: 'Water-soluble vitamin cofactor for carboxylase enzymes in fatty acid and gluconeogenesis metabolism.' },
      { id: 'vit-006', slug: 'pyridoxine-hcl', name: 'Pyridoxine HCl (Vitamin B6)', casNumber: '58-56-0', shortDescription: 'Coenzyme for amino acid metabolism, haemoglobin synthesis, and neurotransmitter production.' },
      { id: 'vit-007', slug: 'thiamine-hcl', name: 'Thiamine HCl (Vitamin B1)', casNumber: '67-03-8', shortDescription: 'Essential coenzyme for carbohydrate metabolism and nervous system function; prevents Beriberi.' },
      { id: 'vit-008', slug: 'retinol-acetate', name: 'Retinol Acetate (Vitamin A)', casNumber: '127-47-9', shortDescription: 'Fat-soluble vitamin for vision, immune function, and epithelial cell differentiation.' },
    ],
  },
  {
    slug: 'anti-cancer',
    name: 'Anti Cancer',
    description:
      'Cytotoxic agents, targeted kinase inhibitors, and antimetabolites for oncological indications. Active across breast, colorectal, haematological, and solid tumour malignancies.',
    image:
      'https://images.unsplash.com/photo-1617886903355-9354fa5893ef?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'ac-001', slug: 'tamoxifen-citrate', name: 'Tamoxifen Citrate', casNumber: '54965-24-1', shortDescription: 'Selective oestrogen receptor modulator for breast cancer treatment and chemoprevention.' },
      { id: 'ac-002', slug: 'imatinib-mesylate', name: 'Imatinib Mesylate', casNumber: '220127-57-1', shortDescription: 'BCR-ABL tyrosine kinase inhibitor for chronic myelogenous leukaemia and GIST tumours.' },
      { id: 'ac-003', slug: 'capecitabine', name: 'Capecitabine', casNumber: '154361-50-9', shortDescription: 'Oral fluoropyrimidine prodrug converted to 5-FU in tumour tissue for colorectal and breast cancer.' },
      { id: 'ac-004', slug: 'methotrexate', name: 'Methotrexate', casNumber: '59-05-2', shortDescription: 'Folate antagonist antimetabolite for leukaemia, lymphoma, solid tumours, and autoimmune disorders.' },
      { id: 'ac-005', slug: 'doxorubicin-hcl', name: 'Doxorubicin HCl', casNumber: '25316-40-9', shortDescription: 'Anthracycline antibiotic intercalating DNA topoisomerase II for broad oncology applications.' },
      { id: 'ac-006', slug: 'paclitaxel', name: 'Paclitaxel', casNumber: '33069-62-4', shortDescription: 'Taxane mitotic inhibitor stabilising microtubules for ovarian, breast, and lung cancer treatment.' },
      { id: 'ac-007', slug: 'vincristine-sulfate', name: 'Vincristine Sulfate', casNumber: '2068-78-2', shortDescription: 'Vinca alkaloid binding tubulin for leukaemia, lymphoma, and paediatric solid tumour therapy.' },
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
      { id: 'mac-001', slug: 'azithromycin', name: 'Azithromycin', casNumber: '83905-01-5', shortDescription: 'Azalide macrolide with prolonged tissue half-life for community-acquired pneumonia and STIs.' },
      { id: 'mac-002', slug: 'clarithromycin', name: 'Clarithromycin', casNumber: '81103-11-9', shortDescription: '14-membered macrolide for respiratory tract infections and H. pylori eradication therapy.' },
      { id: 'mac-003', slug: 'erythromycin-stearate', name: 'Erythromycin Stearate', casNumber: '643-22-1', shortDescription: 'Original macrolide antibiotic for gram-positive bacterial infections and atypical pneumonia.' },
      { id: 'mac-004', slug: 'roxithromycin', name: 'Roxithromycin', casNumber: '80214-83-1', shortDescription: 'Semi-synthetic macrolide with enhanced oral bioavailability for upper and lower respiratory infections.' },
      { id: 'mac-005', slug: 'spiramycin', name: 'Spiramycin', casNumber: '8025-81-8', shortDescription: '16-membered macrolide for toxoplasmosis prophylaxis and dental/soft-tissue infections.' },
      { id: 'mac-006', slug: 'josamycin', name: 'Josamycin', casNumber: '16846-24-5', shortDescription: 'Macrolide antibiotic with activity against Mycoplasma and Chlamydia respiratory pathogens.' },
    ],
  },
  {
    slug: 'anti-diabetics',
    name: 'Anti Diabetic',
    description:
      'Biguanides, sulfonylureas, thiazolidinediones, and DPP-4 inhibitors for glycaemic control. Prescribed across Type 1 and Type 2 diabetes management protocols worldwide.',
    image:
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'ad-001', slug: 'metformin-hcl', name: 'Metformin HCl', casNumber: '1115-70-4', shortDescription: 'First-line biguanide antidiabetic reducing hepatic glucose output and improving insulin sensitivity.' },
      { id: 'ad-002', slug: 'glibenclamide', name: 'Glibenclamide', casNumber: '10238-21-8', shortDescription: 'Second-generation sulfonylurea stimulating pancreatic beta-cell insulin release for Type 2 diabetes.' },
      { id: 'ad-003', slug: 'pioglitazone-hcl', name: 'Pioglitazone HCl', casNumber: '112529-15-4', shortDescription: 'PPAR-γ agonist thiazolidinedione improving peripheral insulin sensitivity in Type 2 diabetes.' },
      { id: 'ad-004', slug: 'sitagliptin-phosphate', name: 'Sitagliptin Phosphate', casNumber: '654671-78-0', shortDescription: 'DPP-4 inhibitor enhancing incretin-mediated insulin secretion for Type 2 glycaemic management.' },
      { id: 'ad-005', slug: 'gliclazide', name: 'Gliclazide', casNumber: '21187-98-4', shortDescription: 'Second-generation sulfonylurea with antithrombotic properties for Type 2 diabetes and cardiovascular protection.' },
      { id: 'ad-006', slug: 'glimepiride', name: 'Glimepiride', casNumber: '93479-97-1', shortDescription: 'Third-generation sulfonylurea with lower hypoglycaemia risk for once-daily glycaemic control.' },
      { id: 'ad-007', slug: 'voglibose', name: 'Voglibose', casNumber: '83480-29-9', shortDescription: 'Alpha-glucosidase inhibitor for post-prandial hyperglycaemia management in Type 2 diabetes.' },
    ],
  },
  {
    slug: 'anti-inflammatory-analgesic',
    name: 'Anti-Inflammatory / Analgesic',
    description:
      'NSAIDs and COX inhibitors for analgesic and anti-inflammatory therapeutic applications. Indicated for acute pain, arthritis, dysmenorrhoea, and post-operative inflammation.',
    image:
      'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'aia-001', slug: 'ibuprofen', name: 'Ibuprofen', casNumber: '15687-27-1', shortDescription: 'Non-selective NSAID with analgesic, anti-inflammatory, and antipyretic activity via COX inhibition.' },
      { id: 'aia-002', slug: 'diclofenac-sodium', name: 'Diclofenac Sodium', casNumber: '15307-79-6', shortDescription: 'Phenylacetic acid NSAID for osteoarthritis, rheumatoid arthritis, and acute musculoskeletal pain.' },
      { id: 'aia-003', slug: 'naproxen', name: 'Naproxen', casNumber: '22204-53-1', shortDescription: 'Propionic acid NSAID for arthritis, ankylosing spondylitis, and dysmenorrhoea relief.' },
      { id: 'aia-004', slug: 'piroxicam', name: 'Piroxicam', casNumber: '36322-90-4', shortDescription: 'Long-acting oxicam NSAID with once-daily dosing for rheumatic diseases and acute gout.' },
      { id: 'aia-005', slug: 'celecoxib', name: 'Celecoxib', casNumber: '169590-42-5', shortDescription: 'Selective COX-2 inhibitor with reduced GI toxicity for osteoarthritis and familial adenomatous polyposis.' },
      { id: 'aia-006', slug: 'indomethacin', name: 'Indomethacin', casNumber: '53-86-1', shortDescription: 'Potent non-selective NSAID for acute gout, ankylosing spondylitis, and patent ductus arteriosus closure.' },
      { id: 'aia-007', slug: 'nimesulide', name: 'Nimesulide', casNumber: '51803-78-2', shortDescription: 'Preferential COX-2 inhibitor sulfonanilide for acute pain, dysmenorrhoea, and osteoarthritis.' },
    ],
  },
  {
    slug: 'anti-tuberculosis',
    name: 'Anti Tuberculosis',
    description:
      'First and second-line TB APIs targeting Mycobacterium tuberculosis bactericidal pathways. Essential for DOTS therapy and drug-resistant tuberculosis treatment regimens.',
    image:
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'at-001', slug: 'rifampicin', name: 'Rifampicin', casNumber: '13292-46-1', shortDescription: 'Rifamycin antibiotic inhibiting bacterial RNA polymerase; cornerstone of all TB treatment regimens.' },
      { id: 'at-002', slug: 'isoniazid', name: 'Isoniazid (INH)', casNumber: '54-85-3', shortDescription: 'Bactericidal prodrug inhibiting mycolic acid synthesis; first-line agent in DOTS TB therapy.' },
      { id: 'at-003', slug: 'pyrazinamide', name: 'Pyrazinamide', casNumber: '98-96-4', shortDescription: 'Nicotinamide analogue sterilising agent active against dormant bacilli in the first 2 months of therapy.' },
      { id: 'at-004', slug: 'ethambutol-hcl', name: 'Ethambutol HCl', casNumber: '1070-11-7', shortDescription: 'Bacteriostatic agent inhibiting arabinosyl transferases in mycobacterial cell wall synthesis.' },
      { id: 'at-005', slug: 'streptomycin-sulfate', name: 'Streptomycin Sulfate', casNumber: '3810-74-0', shortDescription: 'First aminoglycoside antibiotic for drug-resistant TB in intensive phase combination therapy.' },
      { id: 'at-006', slug: 'kanamycin-sulfate', name: 'Kanamycin Sulfate', casNumber: '25389-94-0', shortDescription: 'Injectable aminoglycoside for multidrug-resistant tuberculosis second-line treatment regimens.' },
    ],
  },
  {
    slug: 'anti-ulcerants',
    name: 'Anti Ulcerants',
    description:
      'Proton pump inhibitors and H2 blockers reducing gastric acid secretion and mucosal damage. Indicated for peptic ulcer disease, GERD, and H. pylori eradication.',
    image:
      'https://images.unsplash.com/photo-1576091160291-61f60d8c3ac3?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'au-001', slug: 'omeprazole', name: 'Omeprazole', casNumber: '73590-58-6', shortDescription: 'First proton pump inhibitor irreversibly blocking H+/K+-ATPase for peptic ulcer and GERD treatment.' },
      { id: 'au-002', slug: 'pantoprazole-sodium', name: 'Pantoprazole Sodium', casNumber: '138786-67-1', shortDescription: 'Second-generation PPI with fewer drug interactions for erosive oesophagitis and Zollinger-Ellison syndrome.' },
      { id: 'au-003', slug: 'esomeprazole-magnesium', name: 'Esomeprazole Magnesium', casNumber: '161973-10-0', shortDescription: 'S-isomer of omeprazole with superior acid control for GERD and H. pylori combination therapy.' },
      { id: 'au-004', slug: 'lansoprazole', name: 'Lansoprazole', casNumber: '103577-45-3', shortDescription: 'Benzimidazole PPI for duodenal ulcer, gastric ulcer, and NSAID-associated ulcer prevention.' },
      { id: 'au-005', slug: 'ranitidine-hcl', name: 'Ranitidine HCl', casNumber: '66357-59-3', shortDescription: 'H2 receptor antagonist reducing gastric acid for peptic ulcers and pathological hypersecretory conditions.' },
      { id: 'au-006', slug: 'famotidine', name: 'Famotidine', casNumber: '76824-35-6', shortDescription: 'Potent H2 blocker with long duration for duodenal and gastric ulcer maintenance and GERD.' },
      { id: 'au-007', slug: 'sucralfate', name: 'Sucralfate', casNumber: '54182-58-0', shortDescription: 'Aluminium salt forming protective gel barrier over ulcer craters for duodenal ulcer healing.' },
    ],
  },
  {
    slug: 'anti-asthmatics',
    name: 'Anti Asthmatic',
    description:
      'Bronchodilators, inhaled corticosteroids, and leukotriene antagonists managing airway obstruction. Prescribed for persistent asthma, COPD, and bronchoconstriction episodes.',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'aa-001', slug: 'salbutamol-sulfate', name: 'Salbutamol Sulfate', casNumber: '51022-70-9', shortDescription: 'Short-acting beta-2 agonist bronchodilator for acute asthma attacks and exercise-induced bronchospasm.' },
      { id: 'aa-002', slug: 'theophylline', name: 'Theophylline', casNumber: '58-55-9', shortDescription: 'Methylxanthine bronchodilator for chronic asthma and COPD with anti-inflammatory properties.' },
      { id: 'aa-003', slug: 'montelukast-sodium', name: 'Montelukast Sodium', casNumber: '151767-02-1', shortDescription: 'Leukotriene receptor antagonist for prophylaxis of asthma and relief of seasonal allergic rhinitis.' },
      { id: 'aa-004', slug: 'budesonide', name: 'Budesonide', casNumber: '51333-22-3', shortDescription: 'Inhaled glucocorticoid for maintenance and prophylactic asthma treatment with minimal systemic effects.' },
      { id: 'aa-005', slug: 'formoterol-fumarate', name: 'Formoterol Fumarate', casNumber: '43229-80-7', shortDescription: 'Long-acting beta-2 agonist for maintenance bronchodilation in asthma and COPD management.' },
      { id: 'aa-006', slug: 'ipratropium-bromide', name: 'Ipratropium Bromide', casNumber: '66985-17-9', shortDescription: 'Anticholinergic bronchodilator for COPD and acute severe asthma as adjunct to beta-2 agonists.' },
      { id: 'aa-007', slug: 'tiotropium-bromide', name: 'Tiotropium Bromide', casNumber: '136310-93-5', shortDescription: 'Once-daily long-acting anticholinergic for maintenance therapy of COPD with sustained bronchodilation.' },
    ],
  },
  {
    slug: 'anti-convulsants',
    name: 'Anti Convulsant',
    description:
      'Sodium channel blockers and GABAergic agents controlling seizure threshold and frequency. Indicated for epilepsy, neuropathic pain, and mood stabilisation applications.',
    image:
      'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'acv-001', slug: 'carbamazepine', name: 'Carbamazepine', casNumber: '298-46-4', shortDescription: 'Sodium channel stabiliser for partial and generalised tonic-clonic seizures and trigeminal neuralgia.' },
      { id: 'acv-002', slug: 'valproic-acid', name: 'Valproic Acid', casNumber: '99-66-1', shortDescription: 'Broad-spectrum anticonvulsant and mood stabiliser for epilepsy, bipolar disorder, and migraine prevention.' },
      { id: 'acv-003', slug: 'phenytoin-sodium', name: 'Phenytoin Sodium', casNumber: '630-93-3', shortDescription: 'Hydantoin sodium channel blocker for generalised tonic-clonic and status epilepticus management.' },
      { id: 'acv-004', slug: 'levetiracetam', name: 'Levetiracetam', casNumber: '102767-28-2', shortDescription: 'Pyrrolidine derivative binding SV2A for adjunctive therapy in partial-onset and myoclonic seizures.' },
      { id: 'acv-005', slug: 'gabapentin', name: 'Gabapentin', casNumber: '60142-96-3', shortDescription: 'GABA analogue for adjunctive epilepsy therapy, postherpetic neuralgia, and peripheral neuropathic pain.' },
      { id: 'acv-006', slug: 'lamotrigine', name: 'Lamotrigine', casNumber: '84057-84-1', shortDescription: 'Phenyltriazine for partial seizures, Lennox-Gastaut syndrome, and bipolar I disorder maintenance.' },
      { id: 'acv-007', slug: 'topiramate', name: 'Topiramate', casNumber: '97240-79-4', shortDescription: 'Fructopyranose sulphamate for partial/generalised epilepsy and migraine prophylaxis.' },
    ],
  },
  {
    slug: 'anti-protozoals',
    name: 'Anti Protozoal',
    description:
      'Nitroimidazoles and benzimidazoles targeting anaerobic protozoan and helminth infections. Active against Giardia, Entamoeba, Trichomonas, and parasitic worm species.',
    image:
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'ap-001', slug: 'metronidazole', name: 'Metronidazole', casNumber: '443-48-1', shortDescription: 'Nitroimidazole bactericidal and antiprotozoal for anaerobic infections, amoebiasis, and Giardia.' },
      { id: 'ap-002', slug: 'tinidazole', name: 'Tinidazole', casNumber: '19387-91-8', shortDescription: 'Second-generation nitroimidazole for giardiasis, amoebiasis, and Trichomonas vaginalis infection.' },
      { id: 'ap-003', slug: 'ornidazole', name: 'Ornidazole', casNumber: '16773-42-5', shortDescription: 'Nitroimidazole derivative for amoebic dysentery, giardiasis, and anaerobic bacterial infections.' },
      { id: 'ap-004', slug: 'secnidazole', name: 'Secnidazole', casNumber: '3366-95-8', shortDescription: 'Long-acting nitroimidazole for single-dose giardiasis and amoebiasis treatment regimens.' },
      { id: 'ap-005', slug: 'nitazoxanide', name: 'Nitazoxanide', casNumber: '55981-09-4', shortDescription: 'Thiazolide antiparasitic for cryptosporidiosis, giardiasis, and rotavirus/norovirus gastroenteritis.' },
      { id: 'ap-006', slug: 'albendazole', name: 'Albendazole', casNumber: '54965-21-8', shortDescription: 'Benzimidazole carbamate for neurocysticercosis, hydatid disease, and broad-spectrum helminthiasis.' },
      { id: 'ap-007', slug: 'mebendazole', name: 'Mebendazole', casNumber: '31431-39-7', shortDescription: 'Benzimidazole anthelmintic for intestinal nematode infestations including pinworm, hookworm, and whipworm.' },
    ],
  },
  {
    slug: 'anti-fungals',
    name: 'Anti-Fungal',
    description:
      'Azoles, polyenes, and allylamines disrupting ergosterol synthesis in fungal cell membranes. Effective against Candida, Aspergillus, and dermatophyte fungal infections.',
    image:
      'https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b38?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'af-001', slug: 'fluconazole', name: 'Fluconazole', casNumber: '86386-73-4', shortDescription: 'Triazole ergosterol synthesis inhibitor for systemic candidiasis, cryptococcal meningitis, and dermatophytosis.' },
      { id: 'af-002', slug: 'itraconazole', name: 'Itraconazole', casNumber: '84625-61-6', shortDescription: 'Broad-spectrum triazole for aspergillosis, histoplasmosis, blastomycosis, and onychomycosis.' },
      { id: 'af-003', slug: 'ketoconazole', name: 'Ketoconazole', casNumber: '65277-42-1', shortDescription: 'Imidazole antifungal for dermatophytosis, pityriasis versicolor, and Cushing\'s syndrome management.' },
      { id: 'af-004', slug: 'amphotericin-b', name: 'Amphotericin B', casNumber: '1397-89-3', shortDescription: 'Polyene macrolide binding ergosterol for life-threatening systemic fungal and leishmaniasis infections.' },
      { id: 'af-005', slug: 'voriconazole', name: 'Voriconazole', casNumber: '137234-62-9', shortDescription: 'Second-generation triazole for invasive aspergillosis and Candida infections resistant to fluconazole.' },
      { id: 'af-006', slug: 'terbinafine-hcl', name: 'Terbinafine HCl', casNumber: '78628-80-5', shortDescription: 'Allylamine squalene epoxidase inhibitor for tinea unguium, tinea pedis, and tinea corporis.' },
      { id: 'af-007', slug: 'clotrimazole', name: 'Clotrimazole', casNumber: '23593-75-1', shortDescription: 'Imidazole antifungal for topical treatment of candidiasis, ringworm, and athlete\'s foot infections.' },
    ],
  },
  {
    slug: 'anti-histamines',
    name: 'Anti-Histamine',
    description:
      'H1 receptor antagonists blocking histamine-mediated allergic and inflammatory cascades. Prescribed for seasonal allergies, urticaria, anaphylaxis adjunct therapy, and rhinitis.',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'ah-001', slug: 'cetirizine-hcl', name: 'Cetirizine HCl', casNumber: '83881-52-1', shortDescription: 'Second-generation H1 antihistamine for allergic rhinitis, chronic urticaria, and atopic dermatitis.' },
      { id: 'ah-002', slug: 'loratadine', name: 'Loratadine', casNumber: '79794-75-5', shortDescription: 'Non-sedating piperidine antihistamine for seasonal and perennial allergic rhinoconjunctivitis.' },
      { id: 'ah-003', slug: 'fexofenadine-hcl', name: 'Fexofenadine HCl', casNumber: '138452-21-8', shortDescription: 'Active terfenadine metabolite with non-sedating H1 blockade for allergic rhinitis and urticaria.' },
      { id: 'ah-004', slug: 'chlorpheniramine-maleate', name: 'Chlorpheniramine Maleate', casNumber: '113-92-8', shortDescription: 'First-generation alkylamine antihistamine for allergic conditions, cold symptoms, and pruritus.' },
      { id: 'ah-005', slug: 'levocetirizine-dihydrochloride', name: 'Levocetirizine Dihydrochloride', casNumber: '130018-87-0', shortDescription: 'R-enantiomer of cetirizine with enhanced H1 receptor affinity for allergic rhinitis and urticaria.' },
      { id: 'ah-006', slug: 'promethazine-hcl', name: 'Promethazine HCl', casNumber: '58-33-3', shortDescription: 'Phenothiazine antihistamine for allergy, nausea, motion sickness, and pre-operative sedation.' },
      { id: 'ah-007', slug: 'diphenhydramine-hcl', name: 'Diphenhydramine HCl', casNumber: '147-24-0', shortDescription: 'First-generation antihistamine for allergic reactions, insomnia, cough suppression, and motion sickness.' },
    ],
  },
  {
    slug: 'anti-depressants',
    name: 'Anti-Depressant',
    description:
      'SSRIs, SNRIs, and tricyclics modulating serotonin and norepinephrine neurotransmission. Indicated for major depressive disorder, anxiety, OCD, and mood dysregulation.',
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'adep-001', slug: 'sertraline-hcl', name: 'Sertraline HCl', casNumber: '79559-97-0', shortDescription: 'SSRI for major depression, OCD, panic disorder, PTSD, and social anxiety disorder.' },
      { id: 'adep-002', slug: 'fluoxetine-hcl', name: 'Fluoxetine HCl', casNumber: '56296-78-7', shortDescription: 'Prototype SSRI for major depression, bulimia nervosa, OCD, and premenstrual dysphoric disorder.' },
      { id: 'adep-003', slug: 'escitalopram-oxalate', name: 'Escitalopram Oxalate', casNumber: '219861-08-2', shortDescription: 'Pure S-enantiomer SSRI with high selectivity for major depressive and generalised anxiety disorders.' },
      { id: 'adep-004', slug: 'paroxetine-hcl', name: 'Paroxetine HCl', casNumber: '78246-49-8', shortDescription: 'SSRI for depression, panic, OCD, social phobia, and post-traumatic stress disorder.' },
      { id: 'adep-005', slug: 'venlafaxine-hcl', name: 'Venlafaxine HCl', casNumber: '99300-78-4', shortDescription: 'SNRI inhibiting serotonin and norepinephrine reuptake for depression, anxiety, and fibromyalgia.' },
      { id: 'adep-006', slug: 'amitriptyline-hcl', name: 'Amitriptyline HCl', casNumber: '549-18-8', shortDescription: 'Tricyclic antidepressant for major depression, neuropathic pain, and migraine prophylaxis.' },
      { id: 'adep-007', slug: 'mirtazapine', name: 'Mirtazapine', casNumber: '85650-52-8', shortDescription: 'NaSSA antidepressant with antihistaminergic sedation for major depression with insomnia and weight loss.' },
    ],
  },
  {
    slug: 'hormones',
    name: 'Hormones',
    description:
      'Synthetic and semi-synthetic hormone APIs for endocrine system regulation and replacement therapy. Prescribed for thyroid, reproductive, and pituitary deficiency disorders.',
    image:
      'https://images.unsplash.com/photo-1582560469781-1a3b81bf5975?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'hor-001', slug: 'estradiol', name: 'Estradiol', casNumber: '50-28-2', shortDescription: 'Natural oestrogen for HRT in menopause, female hypogonadism, and breast cancer palliative therapy.' },
      { id: 'hor-002', slug: 'progesterone', name: 'Progesterone', casNumber: '57-83-0', shortDescription: 'Endogenous progestogen for luteal phase support, ART, threatened miscarriage, and HRT combination.' },
      { id: 'hor-003', slug: 'testosterone-enanthate', name: 'Testosterone Enanthate', casNumber: '315-37-7', shortDescription: 'Long-acting androgen ester for male hypogonadism and delayed puberty hormone replacement therapy.' },
      { id: 'hor-004', slug: 'levothyroxine-sodium', name: 'Levothyroxine Sodium', casNumber: '55-03-8', shortDescription: 'Synthetic T4 thyroid hormone for hypothyroidism, myxoedema coma, and thyroid-stimulating hormone suppression.' },
      { id: 'hor-005', slug: 'medroxyprogesterone-acetate', name: 'Medroxyprogesterone Acetate', casNumber: '71-58-9', shortDescription: 'Synthetic progestin for endometriosis, amenorrhoea, endometrial cancer, and injectable contraception.' },
      { id: 'hor-006', slug: 'oxytocin', name: 'Oxytocin', casNumber: '50-56-6', shortDescription: 'Nonapeptide hormone for induction of labour, uterine atony, and postpartum haemorrhage prevention.' },
      { id: 'hor-007', slug: 'somatropin', name: 'Somatropin (rHGH)', casNumber: '12629-01-5', shortDescription: 'Recombinant human growth hormone for GH deficiency, Turner syndrome, and short stature disorders.' },
    ],
  },
  {
    slug: 'antibiotics-antibacterial',
    name: 'Antibiotics / Antibacterial',
    description:
      'Penicillins, cephalosporins, fluoroquinolones, and aminoglycosides for bacterial infection management. Active against gram-positive, gram-negative, and MDR bacterial strains.',
    image:
      'https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'ab-001', slug: 'amoxicillin-trihydrate', name: 'Amoxicillin Trihydrate', casNumber: '61336-70-7', shortDescription: 'Broad-spectrum aminopenicillin for respiratory, urinary, skin, and H. pylori infections.' },
      { id: 'ab-002', slug: 'ciprofloxacin-hcl', name: 'Ciprofloxacin HCl', casNumber: '86393-32-0', shortDescription: 'Second-generation fluoroquinolone for urinary tract, GI, respiratory, and anthrax infections.' },
      { id: 'ab-003', slug: 'ceftriaxone-sodium', name: 'Ceftriaxone Sodium', casNumber: '74578-69-1', shortDescription: 'Third-generation cephalosporin for severe infections, meningitis, gonorrhoea, and surgical prophylaxis.' },
      { id: 'ab-004', slug: 'doxycycline-hcl', name: 'Doxycycline HCl', casNumber: '24390-14-5', shortDescription: 'Broad-spectrum tetracycline for Lyme disease, Rocky Mountain spotted fever, chlamydia, and malaria prophylaxis.' },
      { id: 'ab-005', slug: 'ampicillin-trihydrate', name: 'Ampicillin Trihydrate', casNumber: '7177-48-2', shortDescription: 'Aminopenicillin for respiratory tract, urinary tract, and meningitis caused by susceptible organisms.' },
      { id: 'ab-006', slug: 'chloramphenicol', name: 'Chloramphenicol', casNumber: '56-75-7', shortDescription: 'Broad-spectrum bacteriostatic for typhoid fever, meningitis, and rickettsial infections in resource-limited settings.' },
      { id: 'ab-007', slug: 'tetracycline-hcl', name: 'Tetracycline HCl', casNumber: '64-75-5', shortDescription: 'Classic broad-spectrum antibiotic for acne vulgaris, brucellosis, and Mycoplasma infections.' },
      { id: 'ab-008', slug: 'gentamicin-sulfate', name: 'Gentamicin Sulfate', casNumber: '1405-41-0', shortDescription: 'Aminoglycoside bactericidal for serious gram-negative infections, sepsis, and urinary tract infections.' },
    ],
  },
  {
    slug: 'general',
    name: 'General',
    description:
      'Broad therapeutic APIs covering analgesics, antacids, essential minerals, and multi-indication compounds. Foundation molecules for primary care and preventive healthcare formulations.',
    image:
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop',
    products: [
      { id: 'gen-001', slug: 'paracetamol', name: 'Paracetamol (Acetaminophen)', casNumber: '103-90-2', shortDescription: 'Widely used analgesic and antipyretic for mild to moderate pain and fever with excellent safety profile.' },
      { id: 'gen-002', slug: 'aspirin', name: 'Aspirin (Acetylsalicylic Acid)', casNumber: '50-78-2', shortDescription: 'Salicylate NSAID and antiplatelet agent for pain, fever, cardiovascular event prevention, and inflammation.' },
      { id: 'gen-003', slug: 'magnesium-hydroxide', name: 'Magnesium Hydroxide', casNumber: '1309-42-8', shortDescription: 'Antacid and saline laxative for indigestion, acid reflux, hyperacidity, and constipation relief.' },
      { id: 'gen-004', slug: 'zinc-sulfate', name: 'Zinc Sulfate', casNumber: '7733-02-0', shortDescription: 'Trace mineral supplement for zinc deficiency, diarrhoea adjunct therapy, and wound healing support.' },
      { id: 'gen-005', slug: 'calcium-carbonate', name: 'Calcium Carbonate', casNumber: '471-34-1', shortDescription: 'Antacid and calcium supplement for osteoporosis prevention, hyperphosphataemia, and dyspepsia.' },
      { id: 'gen-006', slug: 'oral-rehydration-salts', name: 'Oral Rehydration Salts (ORS)', casNumber: 'N/A', shortDescription: 'WHO-recommended electrolyte formulation for dehydration management in diarrhoea and vomiting.' },
      { id: 'gen-007', slug: 'ferrous-sulfate', name: 'Ferrous Sulfate', casNumber: '7720-78-7', shortDescription: 'Iron supplement for iron-deficiency anaemia prophylaxis and treatment in adults and children.' },
    ],
  },
];
