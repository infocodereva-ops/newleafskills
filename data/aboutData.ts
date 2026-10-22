export interface Milestone {
  year: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
}

export interface AboutOffering {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  icon: string;
  suitableFor: string;
  image: string;
  specs: string[];
}

export interface WhyChoosePillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
}

export interface StudioStat {
  value: string;
  label: string;
  detail: string;
  icon: string;
}

export const aboutStats: StudioStat[] = [
  {
    value: '22+ Years',
    label: 'Studio Craftsmanship',
    detail: 'Manual punching excellence since 2004',
    icon: '⏳',
  },
  {
    value: '10,000+',
    label: 'Global Clients',
    detail: 'Apparel brands, shops & decorators worldwide',
    icon: '🌍',
  },
  {
    value: '50,000+',
    label: 'Sewouts Digitized',
    detail: 'Tested across Tajima, Barudan & Brother',
    icon: '🪡',
  },
  {
    value: '6–8 Hours',
    label: 'Standard Turnaround',
    detail: 'Fast rush service delivered in 2 hours',
    icon: '⚡',
  },
];

export const timelineMilestones: Milestone[] = [
  {
    year: '2004',
    title: 'Studio Foundation & Manual Punching',
    tagline: 'Crafting the Art of Machine Embroidery',
    description:
      'Founded with a pure passion for hand-punched stitch geometry. Started operating commercial single-head and 4-head machines, mastering stitch pull dynamics on floppy-disk media.',
    highlight: 'Hand-coded stitch sequencing',
  },
  {
    year: '2010',
    title: 'High-Speed Multi-Head Production Calibration',
    tagline: 'Industrial Performance Standards',
    description:
      'Engineered specialized underlay structures capable of running at 1,000+ SPM without needle deflection or thread snapping on high-speed Tajima and Barudan production runs.',
    highlight: '1,000+ SPM high-speed rating',
  },
  {
    year: '2016',
    title: 'North American & European Expansion',
    tagline: 'Serving Corporate Decorators Worldwide',
    description:
      'Expanded customer operations to support commercial embroiderers and promotional product companies across the United States, United Kingdom, Canada, and Europe with overnight 6-8 hour delivery.',
    highlight: 'Overnight delivery for US/UK shops',
  },
  {
    year: '2020',
    title: 'Specialty 3D Puff, Vestments & Irish Dance Wear',
    tagline: 'Artisanal Complexity & Sacred Robes',
    description:
      'Pioneered dense 3D foam relief digitizing for headwear, heirloom metallic bullion embroidery for sacred liturgical vestments, and ultra-durable multi-thread Irish dance dress knotwork.',
    highlight: '3D foam & liturgical bullion mastery',
  },
  {
    year: '2026',
    title: 'Global Master Studio with 10,000+ Partners',
    tagline: 'Industry Standard for Dependability',
    description:
      'Today, New Leaf Skills operates 24/7 production with over 10,000 active clients across 15+ countries, maintaining a 99.8% first-run sewout approval rate and zero automated software flaws.',
    highlight: '99.8% first-run pass rate',
  },
];

export const aboutOfferings: AboutOffering[] = [
  {
    id: 'embroidery-digitizing',
    title: 'Embroidery Digitizing Services',
    badge: 'Core Studio Offering',
    shortDesc:
      'Manual hand-punched embroidery files with custom underlays and fabric-specific push-pull compensation for zero puckering on high-speed multi-head runs.',
    icon: '🪡',
    suitableFor: 'Corporate apparel, uniforms, polos, jackets & totes',
    image: '/services/embroidery-digitizing.png',
    specs: ['Manual Hand-Punched', 'Zero Auto-Trace Flaws', 'Fabric-Tuned Density'],
  },
  {
    id: 'custom-logo-digitizing',
    title: 'Custom Logo Digitizing',
    badge: 'Pantone Exact',
    shortDesc:
      'Precision conversion of corporate logos and creative branding into machine-ready stitches with exact Pantone-to-thread color mapping.',
    icon: '🎨',
    suitableFor: 'Left chest, sleeves, hat fronts, performance outerwear',
    image: '/services/custom-logo-digitizing.png',
    specs: ['Pantone Thread Matching', 'Crisp Micro-Lettering', 'Gradient Tatami Fills'],
  },
  {
    id: 'computerized-embroidery',
    title: 'Computerized Embroidery Services',
    badge: 'High-Speed Commercial',
    shortDesc:
      'Stitch sequencing calibrated specifically for commercial Tajima, Barudan, Brother, and Melco multi-head production at 1,000+ stitches per minute.',
    icon: '⚡',
    suitableFor: 'Factory production runs, bulk contract work, promotional merchandise',
    image: '/services/computerized-embroidery.png',
    specs: ['1,000+ SPM Rated', 'Optimized Jump Trims', 'Zero Needle Stalling'],
  },
  {
    id: '3d-puff-digitizing',
    title: '3D Puff Digitizing',
    badge: 'Raised Foam Relief',
    shortDesc:
      'Engineered high-relief foam embroidery with specialized capping stitches and high-density satin columns that seal foam edges cleanly without stray strands.',
    icon: '🧢',
    suitableFor: 'Snapbacks, structured trucker hats, streetwear caps, varsity jackets',
    image: '/services/3d-puff-digitizing.png',
    specs: ['Clean Foam Capping', 'Dense Satin Scaffolding', 'Puncture Precision'],
  },
  {
    id: 'cap-digitizing',
    title: 'Cap & Headwear Digitizing',
    badge: 'Curved Frame Spec',
    shortDesc:
      'Specialized center-out and bottom-up stitch pathing eliminating fabric shifting and seam distortion on 6-panel structured caps and beanies.',
    icon: '🧢',
    suitableFor: 'Structured snapbacks, dad hats, flexfit caps, knit beanies',
    image: '/cat-cap.jpg',
    specs: ['Center-Out Pathing', 'Seam Bridging Support', 'Zero Panel Distortion'],
  },
  {
    id: 'patch-digitizing',
    title: 'Custom Patch & Emblem Digitizing',
    badge: 'Merrowed Border',
    shortDesc:
      'Durable embroidered patches engineered with clean merrowed borders, heat-seal adhesive backings, or Velcro attachments for military, clubs, and workwear.',
    icon: '🛡️',
    suitableFor: 'Uniform patches, biker club rockers, morale patches, school crests',
    image: '/cat-patch.jpg',
    specs: ['Merrowed Edge Lock', 'Heat-Seal Backing Compatible', 'Crisp Outlines'],
  },
  {
    id: 'applique-digitizing',
    title: 'Applique Digitizing',
    badge: 'Multi-Material',
    shortDesc:
      'Multi-layer fabric appliqué with precise material placement outlines, needle stop commands, tackdown stitching, and smooth satin edge borders.',
    icon: '✂️',
    suitableFor: 'School letters, collegiate hoodies, cheer uniforms, quilt blocks',
    image: '/cat-jacket.jpg',
    specs: ['Placement Stop Signals', 'Secure Tackdown Stitch', 'Fabric Contrast Layering'],
  },
  {
    id: 'vestments-embroidery',
    title: 'Vestments Embroidery Services',
    badge: 'Sacred Gold Bullion',
    shortDesc:
      'Artisanal digitizing for ecclesiastical vestments, altar linens, liturgical stoles, and ceremonial robes utilizing metallic threads and gold bullion techniques.',
    icon: '✝️',
    suitableFor: 'Churches, cathedrals, clerical robes, academic regalia',
    image: '/services/vestments-embroidery.png',
    specs: ['Metallic Thread Tension Control', 'High-Relief Bullion Effect', 'Heirloom Longevity'],
  },
  {
    id: 'irish-dance-embroidery',
    title: 'Irish Dance Dress Embroidery',
    badge: 'Celtic Knotwork Heirloom',
    shortDesc:
      'Intricate multi-color Celtic knotwork, high-density metallic fills, and dynamic satin flourishes engineered to withstand rigorous stage choreography.',
    icon: '🍀',
    suitableFor: 'Feis solo costumes, Irish dance schools, Celtic festival wear',
    image: 'https://newleafskills.com/wp-content/uploads/elementor/thumbs/Digitizing-Portrait-Embroidery-That-Other-Companies-Said-Was-Impossible-ru5t54i29fh1v4j47h7zemqi0gbbvqqf1y62edbrxc.jpg',
    specs: ['Intricate Celtic Geometry', 'Multi-Layer Metallic Fills', 'Stage Lighting Flare'],
  },
];

export const whyChoosePillars: WhyChoosePillar[] = [
  {
    title: '22+ Years of Practical Experience',
    subtitle: 'Decades of Machine Knowledge',
    description:
      'We are not just digital illustrators—we are embroiderers who have operated multi-head machines on production floors for over two decades. We understand needle dynamics, thread tension, and fabric pull compensation intimately.',
    icon: '🎖️',
    badge: 'Since 2004',
  },
  {
    title: '100% Manual Hand-Punching',
    subtitle: 'Zero Automated Software Flaws',
    description:
      'Automated one-click software tools generate messy jump stitches, erratic paths, and birdnesting thread snaps. Every stitch at New Leaf Skills is manually plotted by senior master digitizers for clean running.',
    icon: '✍️',
    badge: 'Zero AI Auto-Trace',
  },
  {
    title: '6–8 Hour Standard Turnaround',
    subtitle: 'Rush 2-Hour Service Available',
    description:
      'Commercial embroidery deadlines are non-negotiable. Our 24/7 global studio shifts ensure your designs are digitized, inspected, and returned to your inbox before your morning production shift starts.',
    icon: '⚡',
    badge: '24/7 Global Shifts',
  },
  {
    title: 'Zero Thread Break Guarantee',
    subtitle: 'Tested for 1,000+ SPM High-Speed Runs',
    description:
      'Thread breakage ruins garments and wastes shop operator time. We engineer progressive underlays, clean tie-in/tie-off locks, and generous clearance so your heads run uninterrupted.',
    icon: '🪡',
    badge: 'Shop Downtime = 0',
  },
  {
    title: 'Universal Machine Format Support',
    subtitle: 'Tajima, Barudan, Brother, Melco & More',
    description:
      'We export machine-native formats including DST, PES, EXP, JEF, VP3, HUS, and CND, accompanied by a detailed PDF sewout worksheet showing exact color sequences, dimensions, and stitch counts.',
    icon: '💾',
    badge: 'All Formats + PDF Sheet',
  },
  {
    title: 'Customer-Focused & 100% Free Revisions',
    subtitle: 'Partnership You Can Count On',
    description:
      'If you need a stitch density adjustment for a different garment fabric or a subtle size tweak, we provide unlimited free revisions until your sample sewout is 100% flawless.',
    icon: '🤝',
    badge: 'Unlimited Free Edits',
  },
];

export const globalPresence = [
  {
    country: 'United States',
    flag: '🇺🇸',
    cities: 'Los Angeles, Dallas, Miami, New York, Chicago',
    percentage: '45% of production',
    highlight: 'Next-morning delivery for US decorators',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    cities: 'London, Manchester, Birmingham, Leeds',
    percentage: '25% of production',
    highlight: 'Schoolwear, sports clubs & workwear specialists',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    cities: 'Toronto, Vancouver, Montreal, Calgary',
    percentage: '12% of production',
    highlight: 'Heavyweight fleece, outerwear & hockey crests',
  },
  {
    country: 'Australia & New Zealand',
    flag: '🇦🇺',
    cities: 'Sydney, Melbourne, Brisbane, Auckland',
    percentage: '10% of production',
    highlight: 'Sun-protective apparel, headwear & school uniforms',
  },
  {
    country: 'Europe & Worldwide',
    flag: '🇪🇺',
    cities: 'Germany, France, Netherlands, Ireland, India',
    percentage: '8% of production',
    highlight: 'Fashion houses, ecclesiastical robes & dance wear',
  },
];

export const aboutFaqs = [
  {
    question: 'How is New Leaf Skills different from cheap automated auto-digitizing websites?',
    answer:
      'Cheap automated online tools use rudimentary vector-tracing algorithms that do not account for fabric stretch, needle deflection, or stitch pathing. These automated files cause frequent needle breakage, thread snaps, puckering, and machine jams that cost shops hundreds of dollars in lost production time. At New Leaf Skills, every single file is manually hand-punched by digitizers with 22+ years of embroidery machine experience, ensuring zero thread breaks and crisp sewouts on the first run.',
  },
  {
    question: 'What file formats can I send, and what will I receive back?',
    answer:
      'You can send us any image or artwork file including JPG, PNG, PDF, AI, EPS, SVG, or PSD. We will deliver a machine-ready file in your preferred format (Tajima .DST, Brother .PES, Melco .EXP, Janome .JEF, Husqvarna .HUS, Pfaff .VP3, etc.) alongside a comprehensive PDF production worksheet showing dimensions, stitch count, thread color stops, and sewout sequence.',
  },
  {
    question: 'How fast is your standard turnaround, and can I get a rush order?',
    answer:
      'Our standard turnaround is 6 to 8 hours. If you have an urgent production deadline, we offer a 2-hour rush service. Because our studio operates round-the-clock across multiple global shifts, orders submitted in the evening are ready before your shop opens in the morning.',
  },
  {
    question: 'What happens if the sample sewout does not run well on my machine?',
    answer:
      'We stand behind every design with our 100% Free Unlimited Revisions Guarantee. If you need adjustments for a specific fabric type (such as increasing density for fleece or reducing density for thin pique), simply let us know and our digitizers will fine-tune the file immediately at no extra charge.',
  },
  {
    question: 'Do you offer computerized embroidery production or just digitizing files?',
    answer:
      'We specialize in both master embroidery digitizing and computerized commercial embroidery production. Whether you need machine-ready embroidery files for your own factory or full-service stitched garment production, our team has the capacity to support your brand.',
  },
];

export interface CraftsmanshipLayer {
  id: string;
  layerNumber: string;
  name: string;
  tagline: string;
  description: string;
  autoTraceProblem: string;
  ourManualSolution: string;
  technicalSpec: string;
  icon: string;
  badge: string;
}

export const craftsmanshipLayers: CraftsmanshipLayer[] = [
  {
    id: 'underlay',
    layerNumber: 'Layer 01',
    name: 'Engineered Underlay Scaffolding',
    tagline: 'The Hidden Foundation of Stitch Stability',
    description:
      'Underlay is what connects thread to fabric fibers. Without customized underlay, stitches sink into knit textures or pull fabric into a wrinkled mess.',
    autoTraceProblem: 'Auto-trace uses generic perpendicular lines that fail on stretch fabrics, causing severe garment puckering and fabric distortion.',
    ourManualSolution: 'We plot tailored double-tatami, edge-run, or zig-zag underlay matched to fabric elasticity (pique, fleece, performance poly, or twill).',
    technicalSpec: 'Underlay stitch spacing: 2.2mm–3.5mm calibrated to fiber grain',
    icon: '🏗️',
    badge: 'Zero Puckering',
  },
  {
    id: 'push-pull',
    layerNumber: 'Layer 02',
    name: 'Fabric Push-Pull Compensation',
    tagline: 'Defeating Physical Fabric Tension Dynamics',
    description:
      'Every time a needle penetrates fabric, stitches pull inward along the stitch angle and push outward at the sides. Round circles become ovals without manual compensation.',
    autoTraceProblem: 'Automated software has zero knowledge of fabric physics; outlines fail to align and leave ugly gaps between borders and fills.',
    ourManualSolution: 'Our master punchers apply manual push-pull offset (+0.25mm to +0.45mm) so contours lock together seamlessly on your production run.',
    technicalSpec: 'Push-pull margin: +0.35mm baseline; +0.45mm for loose knits',
    icon: '📐',
    badge: 'Flawless Registration',
  },
  {
    id: 'density',
    layerNumber: 'Layer 03',
    name: 'Fabric-Specific Stitch Density',
    tagline: 'Optimal Thread Coverage Without Bulletproof Stiffness',
    description:
      'Too dense creates cardboard-like stiffness and cuts holes in fabric. Too light reveals underlying garment weave through the embroidery.',
    autoTraceProblem: 'One-size-fits-all 0.40mm density causes needle deflection, thread fraying, and bulletproof hard patches on lightweight apparel.',
    ourManualSolution: 'Micro-calibrated density ranges from 0.38mm to 0.44mm tailored to garment GSM weight, yarn count, and thread weight (40wt vs 60wt).',
    technicalSpec: 'Calibrated density: 0.38mm (satins) to 0.42mm (tatami fills)',
    icon: '🪡',
    badge: 'Soft Flexible Hand',
  },
  {
    id: 'pathing',
    layerNumber: 'Layer 04',
    name: 'Intelligent Pathing & Jump-Trim Elimination',
    tagline: 'Continuous Flow Engineered for Maximum Machine Efficiency',
    description:
      'How the needle moves across elements determines whether your multi-head machine runs at full 1,000 SPM speed or stalls constantly waiting for trims.',
    autoTraceProblem: 'Wild jumping from left to right creates dozens of unnecessary jump threads that slow down production and require manual scissor trimming.',
    ourManualSolution: 'Smooth sequential pathing with hidden travel stitches beneath upcoming fills, reducing automatic trims by up to 60%.',
    technicalSpec: 'Trim reduction: 45–60% faster multi-head cycle times',
    icon: '⚡',
    badge: '1,000+ SPM High Speed',
  },
  {
    id: 'lock-stitches',
    layerNumber: 'Layer 05',
    name: 'Secure Tie-Ins & Clean Tie-Offs',
    tagline: 'Permanent Stitch Lock That Survives 100+ Industrial Washes',
    description:
      'The start and finish of every color element must be anchored so thread ends never pull loose in domestic or commercial laundry cycles.',
    autoTraceProblem: 'Abrupt stops without lock stitches unravel after the customer washes the shirt, ruining customer trust.',
    ourManualSolution: 'Hand-placed micro lock stitches concealed beneath satin columns. Stitches never unravel even under industrial bleaching and washing.',
    technicalSpec: 'Tie-off: 4-stitch micro lock (0.8mm) hidden under satin core',
    icon: '🛡️',
    badge: '100+ Washes Durability',
  },
];

export interface CommercialMachine {
  id: string;
  brand: string;
  tagline: string;
  nativeFormat: string;
  allFormats: string[];
  maxSPM: string;
  trimSystem: string;
  tensionPreset: string;
  needleRecommendation: string;
  bestUse: string;
}

export const commercialMachines: CommercialMachine[] = [
  {
    id: 'tajima',
    brand: 'Tajima',
    tagline: 'Global Commercial Industry Leader',
    nativeFormat: '.DST',
    allFormats: ['.DST', '.TCF', '.TBF'],
    maxSPM: '1,200 SPM',
    trimSystem: 'High-speed automated jump trim & picker',
    tensionPreset: '110–120g top tension / 25–30g bobbin',
    needleRecommendation: 'Organ DBxK5 #75/11 SES Ballpoint',
    bestUse: 'High-speed multi-head production runs, left chest logos & corporate jackets',
  },
  {
    id: 'barudan',
    brand: 'Barudan',
    tagline: 'Gold Standard for Heavy Duty & Caps',
    nativeFormat: '.CND / .DST',
    allFormats: ['.CND', '.DST', '.FDR'],
    maxSPM: '1,000 SPM',
    trimSystem: 'Heavy-duty positive needle drive cutter',
    tensionPreset: '105–115g top tension / 28g bobbin',
    needleRecommendation: 'Schmetz DBxK5 #80/12 for structured caps',
    bestUse: '3D puff foam, structured 6-panel caps, heavy canvas & workwear outerwear',
  },
  {
    id: 'brother',
    brand: 'Brother / Baby Lock',
    tagline: 'Ultra-Precision Commercial & Semi-Pro',
    nativeFormat: '.PES',
    allFormats: ['.PES', '.PEC', '.DST'],
    maxSPM: '1,000 SPM',
    trimSystem: 'Fast dual-knife thread trimmer',
    tensionPreset: 'Automatic electronic tension sensor',
    needleRecommendation: 'Organ 130/705H #75/11 or #65/9 for micro-text',
    bestUse: 'Boutique custom apparel, crisp micro-lettering & fine personalized monogramming',
  },
  {
    id: 'melco',
    brand: 'Melco EMT16X',
    tagline: 'Modular Acti-Feed Multi-Head Network',
    nativeFormat: '.EXP',
    allFormats: ['.EXP', '.DST', '.OFL'],
    maxSPM: '1,500 SPM',
    trimSystem: 'High-speed Acti-Feed automated thread management',
    tensionPreset: 'Automated Acti-Feed lower & upper thread delivery',
    needleRecommendation: 'Groz-Beckert DBx7ST #70/10 sharp',
    bestUse: 'Modular contract embroidery, fast turnarounds & mass team apparel',
  },
  {
    id: 'happyjapan',
    brand: 'HappyJapan',
    tagline: 'Japanese Precision & Extreme Reliability',
    nativeFormat: '.TAP / .DST',
    allFormats: ['.TAP', '.DST'],
    maxSPM: '1,200 SPM',
    trimSystem: 'Rotary hook automatic thread trimmer',
    tensionPreset: '110g top tension / 25g bobbin tension',
    needleRecommendation: 'Organ DBxK5 #75/11 Ballpoint',
    bestUse: 'Uniform patches, corporate polo runs & multi-color athletic emblems',
  },
  {
    id: 'ricoma',
    brand: 'Ricoma & SWF',
    tagline: 'Versatile High-Volume Factory Workhorses',
    nativeFormat: '.DST',
    allFormats: ['.DST', '.DSB'],
    maxSPM: '1,200 SPM',
    trimSystem: 'Dual-action solenoid trimmer',
    tensionPreset: '115–125g top tension / 30g bobbin',
    needleRecommendation: 'Organ DBx1 #75/11 Sharp / SES',
    bestUse: 'Wide cap frames, tubular flats, hoodies & bulk promotional merchandise',
  },
];

export interface QualityPledge {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  metric: string;
  guarantee: string;
}

export const qualityPledges: QualityPledge[] = [
  {
    id: 'zero-thread-breaks',
    title: 'Zero Thread Break Standard',
    subtitle: 'Tested at 1,000+ SPM',
    icon: '🪡',
    metric: '99.8% First-Run Pass',
    guarantee: 'Engineered with gradual stitch ramps and underlays to eliminate needle stalling.',
  },
  {
    id: 'unlimited-revisions',
    title: '100% Free Revisions',
    subtitle: 'Until Your Sewout is Flawless',
    icon: '🔄',
    metric: 'Zero Hidden Fees',
    guarantee: 'Need a density adjustment for pique polo or fleece? We update it for free within hours.',
  },
  {
    id: 'fast-turnaround',
    title: '6–8 Hour Delivery',
    subtitle: 'Overnight for US/UK/EU Shops',
    icon: '⚡',
    metric: '24/7 Global Shifts',
    guarantee: 'Submit artwork in the evening; machine-ready files arrive before your morning shift.',
  },
  {
    id: 'universal-formats',
    title: 'Universal Machine Support',
    subtitle: 'DST, PES, EXP, CND, EMB & PDF',
    icon: '💾',
    metric: '10+ File Formats',
    guarantee: 'Includes comprehensive PDF sewout sheet with dimensions, color stops, and stitch count.',
  },
];

