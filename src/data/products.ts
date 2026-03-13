export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  ingredients: { name: string; benefit: string }[];
  benefits: string[];
  usage: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "cerablend",
    name: "Cerablend Moisturizing Lotion",
    tagline: "Restores & Strengthens Skin Barrier",
    description: "Cerablend Intense Moisturizing Lotion is a non-comedogenic, ceramide-enriched formula designed for deep hydration and skin barrier repair. Suitable for all skin types including dry, dehydrated, rough, flaky, and sensitive skin.",
    image: "/images/products/cerablend-box.jpg",
    
    ingredients: [
      { name: "Cocoa Butter", benefit: "Deeply nourishes & improves skin softness" },
      { name: "Aloe Vera Extract", benefit: "Calms and hydrates sensitive skin" },
      { name: "Shea Butter", benefit: "Moisturizes and soothes dry & irritated skin" },
      { name: "Kokum Butter", benefit: "Restores skin elasticity and barrier" },
      { name: "Ceramides Complex", benefit: "Strengthens skin barrier & reduces moisture loss" },
      { name: "Pentavitin", benefit: "Provides long-lasting hydration" },
      { name: "Hyaluronic Acid", benefit: "Attracts and locks in moisture for plump skin" },
    ],
    benefits: [
      "Dry and Dehydrated Skin",
      "Post-Bathing or Daily Moisturizing",
      "Rough, Flaky or Sensitive Skin",
      "Skin Prone to Tightness or Irritation",
      "Skin Needing Barrier Repair",
      "Deep Hydration",
    ],
    usage: "Apply generously on clean skin after bathing or as needed. Massage gently until fully absorbed. Use daily for best results.",
    category: "Skincare",
  },
  {
    id: "lulisoft-soap",
    name: "LuliSOFT Soap",
    tagline: "Powerful Antifungal with Targeted Action",
    description: "LuliSOFT Soap contains Luliconazole 1% w/w with Aloe Vera. It inhibits fungal growth through enzyme inhibition, ergosterol reduction, and membrane damage, effectively treating common ringworm infections.",
    image: "/images/products/lulisoft-soap.jpg",
  
    ingredients: [
      { name: "Luliconazole 1% w/w", benefit: "Inhibits fungal 14-α demethylase needed for ergosterol synthesis" },
      { name: "Aloe Vera", benefit: "Soothes and moisturizes skin during treatment" },
    ],
    benefits: [
      "Tinea Corporis",
      "Tinea Cruris",
      "Tinea Faciei",
      "Pityriasis Versicolor",
    ],
    usage: "Lather the soap on affected areas during bathing. Leave for 1-2 minutes before rinsing. Use as directed by your dermatologist.",
    category: "Antifungal",
  },
  {
    id: "lulidruff-shampoo",
    name: "Lulidruff Anti-Dandruff Shampoo",
    tagline: "Soothes Scalp – Strengthens Hair",
    description: "Lulidruff Anti-Dandruff Shampoo with Conditioner contains Luliconazole, Salicylic Acid & Zinc Pyrithione. It soothes itchy scalp while reducing flakes, scaling & irritation. Suitable for all hair types.",
    image: "/images/products/lulidruff-shampoo.jpg",
    
    ingredients: [
      { name: "Luliconazole", benefit: "Controls dandruff and fungal growth" },
      { name: "Salicylic Acid", benefit: "Reduces scaling and unclogs hair follicles" },
      { name: "Zinc Pyrithione", benefit: "Soothes itching and scalp inflammation" },
    ],
    benefits: [
      "Seborrheic Dermatitis",
      "Fungal Scalp Infections",
      "Scalp Itching & Flaking",
      "Oily Scalp with Buildup",
      "Hair Fall Due to Dandruff",
      "Dry, Damaged Hair",
      "Scalp Inflammation",
    ],
    usage: "Wet hair thoroughly. Apply shampoo and massage into scalp. Leave for 2-3 minutes, then rinse. Use 2-3 times per week or as directed.",
    category: "Hair Care",
  },
  {
    id: "melafade",
    name: "Melafade Pigment Corrector Face Serum",
    tagline: "Brightens & Revitalizes Faded Skin",
    description: "Melafade is an advanced multi-ingredient pigment corrector face serum containing Thiamidol, Alpha Arbutin, Tranexamic Acid, and Liposomal Azelaic Acid. Targets dark spots, melasma, and uneven skin tone.",
    image: "/images/products/melafade-box.jpg",
    
    ingredients: [
      { name: "0.1% Thiamidol", benefit: "Inhibits tyrosinase enzyme, reducing melanin formation and fading dark spots" },
      { name: "2% Alpha Arbutin", benefit: "Inhibits tyrosinase, brightens skin and evens out complexion" },
      { name: "3% Tranexamic Acid", benefit: "Reduces UV-induced & hormonal pigmentation, prevents melanin overproduction" },
      { name: "5% Liposomal Azelaic Acid", benefit: "Inhibits tyrosinase & abnormal keratinization, reduces inflammation" },
    ],
    benefits: [
      "Hyperpigmentation / Dark Spots",
      "Melasma",
      "Post-inflammatory Pigmentation (Acne Marks)",
      "Uneven Skin Tone / Dullness",
    ],
    usage: "Apply 3-4 drops on clean face and neck. Gently massage in upward strokes. Use twice daily – morning and night. Follow with sunscreen in the morning.",
    category: "Skincare",
  },
  {
    id: "minox-f",
    name: "Minox-F Hair Growth Solution",
    tagline: "Multi-Action Solution for Complete Hair Care",
    description: "Minox-F Solution is a multi-action hair growth booster fortified with Minoxidil, Finasteride, Capixyl, and Anagain. Alcohol-free lipid solution for hair nourishment with deep transdermal delivery.",
    image: "/images/products/minox-f-box.jpg",
    
    ingredients: [
      { name: "Minoxidil", benefit: "Opens potassium channels, increases blood flow to hair follicles, prolongs anagen phase" },
      { name: "Finasteride", benefit: "Inhibits 5-alpha reductase enzyme, reduces DHT conversion" },
      { name: "Capixyl", benefit: "Inhibits DHT formation, strengthens hair follicle anchoring" },
      { name: "Anagain", benefit: "Stimulates dermal papilla cells, reactivates hair growth" },
    ],
    benefits: [
      "Androgenetic Alopecia (Male & Female Pattern Hair Loss)",
      "Excessive Hair Fall / Hair Thinning",
      "Early Stages of Baldness",
      "Receding Hairline & Diffuse Hair Loss",
      "Improved Hair Density & Scalp Coverage",
    ],
    usage: "Apply 1ml directly to the scalp in thinning areas. Massage gently. Use twice daily. Do not wash hair for at least 4 hours after application.",
    category: "Hair Care",
  },
  {
    id: "permisoft",
    name: "Permisoft Soap",
    tagline: "Dual Action: Antiparasitic + Antiseptic",
    description: "Permisoft Soap contains Permethrin 1.0% w/w & Cetrimide 0.5% w/w. It disrupts parasite nerve sodium channels causing paralysis & death, while Cetrimide damages microbial cell membranes for antiseptic effect.",
    image: "/images/products/permisoft-box.jpg",
    
    ingredients: [
      { name: "Permethrin 1.0% w/w", benefit: "Disrupts parasite nerve sodium channels – paralysis & death of parasites" },
      { name: "Cetrimide 0.5% w/w", benefit: "Damages microbial cell membranes – antiseptic effect" },
    ],
    benefits: [
      "Scabies",
      "Pediculosis (Lice Infestation)",
      "Itching and Skin Irritation",
      "Secondary Infection Prevention",
    ],
    usage: "Lather on affected skin during bathing. Leave for 1-2 minutes before rinsing off. Use as directed by physician. 75gm bar.",
    category: "Antiparasitic",
  },
  {
    id: "seramoist",
    name: "Seramoist Moisturising Soap",
    tagline: "Gentle Cleansing – Deep Hydration",
    description: "Seramoist is a dermatologist-friendly moisturising soap formulated with Palm Oil, Coconut Oil, Kokum Butter, Aloe Vera Gel, and Glycerin. Suitable for dry to very dry skin and sensitive skin.",
    image: "/images/products/seramoist-box.jpg",
    
    ingredients: [
      { name: "Palm Oil", benefit: "Bar hardness & stability" },
      { name: "Coconut Oil", benefit: "Effective cleansing with rich lather" },
      { name: "Kokum Butter", benefit: "Deep moisturisation & barrier support" },
      { name: "Aloe Vera Gel", benefit: "Soothing hydration" },
      { name: "Glycerin", benefit: "Maintains skin moisture" },
    ],
    benefits: [
      "Dry to Very Dry Skin",
      "Sensitive Skin",
      "Daily Gentle Cleansing",
      "Post-Wash Dryness Prevention",
      "Adults & Children – Regular Use",
    ],
    usage: "Use daily during bath or shower. Lather and gently cleanse. Rinse thoroughly. 75gm bar.",
    category: "Skincare",
  },
  {
    id: "serecet-lm",
    name: "Serecet-LM Tablets",
    tagline: "Dual Pathway Anti-Allergic Control",
    description: "Serecet-LM contains Montelukast Sodium 10mg & Levocetirizine HCl 5mg. Provides dual control of histamine- and leukotriene-mediated allergic skin reactions with day-night allergy protection.",
    image: "/images/products/serecet-lm-box.jpg",
    
    ingredients: [
      { name: "Montelukast Sodium 10mg", benefit: "Blocks leukotrienes to reduce allergic inflammation & itching" },
      { name: "Levocetirizine HCl 5mg", benefit: "Blocks H1 histamine receptors to relieve itching, redness & wheals" },
    ],
    benefits: [
      "Chronic Urticaria",
      "Allergic Dermatitis",
      "Atopic Dermatitis",
      "Pruritus (Itching)",
      "Drug-Induced Allergic Reactions",
      "Insect Bite Reactions",
      "Dermatoses with Allergic Component",
    ],
    usage: "Take one tablet daily at bedtime or as directed by your physician. Available in 10x10 tablet strips.",
    category: "Oral Medication",
  },
  {
    id: "tricho-shampoo",
    name: "Tricho Serene AH Anti-Hairloss Shampoo",
    tagline: "Follicle-Activating Hair Fall Control",
    description: "Tricho Serene AH is a sulphate & paraben free anti-hairloss shampoo enriched with Redensyl, Procapil, Biotin, and Caffeine. Prevents hair loss, strengthens & rejuvenates hair for all hair types.",
    image: "/images/products/tricho-shampoo-box.jpg",
    
    ingredients: [
      { name: "Redensyl", benefit: "Activates dormant hair follicles to promote new hair growth" },
      { name: "Procapil", benefit: "Improves scalp circulation & reduces follicle aging" },
      { name: "Biotin", benefit: "Strengthens hair shaft & reduces breakage" },
      { name: "Caffeine", benefit: "Stimulates hair roots & counteracts DHT-induced hair loss" },
    ],
    benefits: [
      "Early Androgenetic Alopecia",
      "Weak & Fragile Hair",
      "Stress-Related Hair Loss",
      "Adjunct Anti-Hair Loss Therapy",
    ],
    usage: "Wet hair, apply shampoo and massage into scalp for 2-3 minutes. Rinse thoroughly. Use 3 times per week. 100ml bottle.",
    category: "Hair Care",
  },
  {
    id: "tricho-serum",
    name: "Tricho Serene Advanced Hair Growth Serum",
    tagline: "Improves Hair Density",
    description: "Tricho Serene Advanced Hair Growth Serum is enriched with 7 powerful active ingredients including Redensyl 3%, Anagain 4%, Capixyl 5%, Procapil 3%, Baicapil 3%, Caffeine 1%, and Rosemary 0.3%.",
    image: "/images/products/tricho-serum-box.jpg",
    
    ingredients: [
      { name: "Redensyl 3%", benefit: "Activates dormant hair follicle stem cells" },
      { name: "Anagain 4%", benefit: "Reactivates anagen phase with 78% rise in growing hair" },
      { name: "Capixyl 5%", benefit: "Inhibits DHT action & reduces follicular inflammation" },
      { name: "Procapil 3%", benefit: "Improves scalp microcirculation & prevents follicle aging" },
      { name: "Baicapil 3%", benefit: "Restores hair growth cycle balance & improves thickness" },
      { name: "Caffeine 1%", benefit: "Stimulates hair roots & counteracts DHT-induced hair loss" },
      { name: "Rosemary 0.3%", benefit: "Promotes circulation and supports hair growth" },
    ],
    benefits: [
      "Androgenetic Alopecia",
      "Hair Fall & Hair Thinning",
      "Early-Stage Alopecia",
      "Stress-Related Hair Loss",
      "Hormonal Hair Fall",
      "Post-Partum Hair Fall",
      "Weak & Brittle Hair",
    ],
    usage: "Apply a few drops on scalp in thinning areas. Massage gently. Use daily. Do not rinse. 30ml bottle.",
    category: "Hair Care",
  },
  {
    id: "uv-serene",
    name: "UV-Serene Aqua Gel Invisible Sunscreen",
    tagline: "Advanced Defense Against Photo-Aging & Heat Damage",
    description: "UV-Serene is an SPF 50+ PA++++ invisible aqua gel sunscreen with broad-spectrum UVA/UVB/IR and Blue Light protection. Enriched with brightening complex, oil-free hydration, water/sweat resistant, and non-comedogenic.",
    image: "/images/products/uv-serene-box.jpg",
    
    ingredients: [
      { name: "Tinosorb S", benefit: "Photostable UVA I & II protection" },
      { name: "Tinosorb M", benefit: "Broad-spectrum UVA/UVB defense" },
      { name: "Uvinul A Plus", benefit: "High-efficacy UVA filter" },
      { name: "Titanium Dioxide", benefit: "Mineral UVB & short-wave UVA protection" },
      { name: "Uvinul T 150", benefit: "High-efficacy UVB filter, boosts SPF" },
      { name: "Ceramides", benefit: "Barrier strengthening & pigmentation control" },
    ],
    benefits: [
      "Broad-Spectrum UV Protection",
      "Prevents Sun-Induced Pigmentation & Dullness",
      "Acne Prone Skin & Melasma",
      "Hydrates & Supports Skin Barrier",
      "Antioxidant & Soothing Care",
      "Lightweight & Non-Greasy Feel",
    ],
    usage: "Apply generously 15-20 minutes before sun exposure. Reapply every 2-3 hours. Use daily even on cloudy days. 40gm tube.",
    category: "Sun Protection",
  },
];
