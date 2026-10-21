'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

type ComparisonSample = 'eagle' | 'tiger';
type CategoryKey = 'cap' | 'puff' | 'jacket' | 'crest' | 'patch' | 'vector';

// ==========================================
// HERO SLIDER ANIMATED EMBROIDERY COMPONENTS
// ==========================================

interface HeroSlideProps {
  slide: {
    src: string;
    title: string;
    subtitle: string;
  };
}

// 1. 3D Puff Athletic Cap Animation: Laser Depth Relief Scanner, Breathing Parallax & Hotspot Pins
function HeroSlidePuff({ slide }: HeroSlideProps) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-slate-950">
      {/* High-Res Embroidered Cap with subtle 3D breathing float */}
      <img
        src={slide.src}
        alt={slide.title}
        className="w-full h-full object-cover animate-puff-float filter contrast-[1.03] brightness-[1.02]"
      />

      {/* 3D Depth Wireframe & Ambient Contour Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_75%)] pointer-events-none"></div>

      {/* 3D Laser Relief Depth Scanner Line */}
      <div className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_18px_rgba(52,211,153,1)] animate-puff-scan pointer-events-none z-10 flex items-center justify-end pr-3">
        <div className="bg-slate-950/90 border border-emerald-400/80 text-emerald-300 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider shadow-lg flex items-center gap-1.5 backdrop-blur-md -translate-y-1/2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>3D RELIEF: +3.2mm [EVA FOAM]</span>
        </div>
      </div>

      {/* Top Left Live Tech Chip */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 rounded-xl px-3 py-1.5 shadow-xl space-y-0.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">3D Foam Depth Scanner</span>
        </div>
        <p className="text-[9px] font-mono text-slate-300">Density: 0.18mm | Cap Hoop: 270°</p>
      </div>

      {/* Top Right Elevation Gauge */}
      <div className="absolute top-3 right-12 z-10 pointer-events-none bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl px-2.5 py-1 shadow-lg text-[9px] font-mono text-emerald-400 font-bold flex items-center gap-1">
        <span>▲ 3.0mm HIGH-RISE</span>
      </div>

      {/* Hotspot 1: Crown Foam Ridge (Center top) */}
      <div className="absolute top-[28%] left-[50%] -translate-x-1/2 z-10 pointer-events-auto group/pin cursor-pointer">
        <div className="relative flex items-center justify-center">
          <span className="absolute w-8 h-8 rounded-full bg-emerald-400/40 animate-sonar-pulse"></span>
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-lg flex items-center justify-center text-[8px] text-white font-black">●</span>
          <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 bg-slate-950/95 backdrop-blur-md border border-emerald-400/60 text-white px-2.5 py-1 rounded-lg text-center shadow-2xl whitespace-nowrap pointer-events-none transition-transform group-hover/pin:scale-105">
            <div className="text-[10px] font-black text-emerald-400">3mm EVA Foam Ridge</div>
            <div className="text-[8px] text-slate-300">Clean satin foam perforation</div>
          </div>
        </div>
      </div>

      {/* Hotspot 2: Left Cheek Pull Comp */}
      <div className="absolute top-[52%] left-[24%] z-10 pointer-events-auto group/pin2 cursor-pointer">
        <div className="relative flex items-center justify-center">
          <span className="absolute w-7 h-7 rounded-full bg-teal-400/40 animate-sonar-pulse" style={{ animationDelay: '0.8s' }}></span>
          <span className="w-3 h-3 rounded-full bg-teal-400 border-2 border-white shadow-lg"></span>
          <div className="absolute bottom-full mb-1.5 left-0 bg-slate-950/95 backdrop-blur-md border border-teal-400/60 text-white px-2 py-0.5 rounded-lg shadow-2xl whitespace-nowrap pointer-events-none transition-transform group-hover/pin2:scale-105">
            <div className="text-[9px] font-bold text-teal-300">Pull Comp: +0.40mm</div>
            <div className="text-[8px] text-slate-300">Zero curved buckram shift</div>
          </div>
        </div>
      </div>

      {/* Hotspot 3: Center Seam Lock */}
      <div className="absolute top-[56%] right-[22%] z-10 pointer-events-auto group/pin3 cursor-pointer">
        <div className="relative flex items-center justify-center">
          <span className="absolute w-7 h-7 rounded-full bg-emerald-400/40 animate-sonar-pulse" style={{ animationDelay: '1.6s' }}></span>
          <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-white shadow-lg"></span>
          <div className="absolute bottom-full mb-1.5 right-0 bg-slate-950/95 backdrop-blur-md border border-emerald-400/60 text-white px-2 py-0.5 rounded-lg shadow-2xl whitespace-nowrap pointer-events-none transition-transform group-hover/pin3:scale-105">
            <div className="text-[9px] font-bold text-emerald-300">Center-Out Pathing</div>
            <div className="text-[8px] text-slate-300">Prevents center seam split</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Jacket Crest Animation: Silky Rayon Thread Sheen Sweep, Specular Sparkles & Precision Reticle Orbit
function HeroSlideCrest({ slide }: HeroSlideProps) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-slate-950">
      {/* High-Res Eagle Crest Sewout */}
      <img
        src={slide.src}
        alt={slide.title}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter contrast-[1.02]"
      />

      {/* Silky Rayon / Metallic Thread Sheen Wave */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-amber-200/40 to-transparent -skew-x-25 animate-thread-sheen"></div>
      </div>

      {/* Specular Glimmer Golden Sparkles */}
      <div className="absolute top-[26%] left-[51%] -translate-x-1/2 pointer-events-none text-amber-300 text-lg animate-sparkle-1 select-none">
        ✦
      </div>
      <div className="absolute top-[38%] left-[43%] pointer-events-none text-yellow-200 text-sm animate-sparkle-2 select-none">
        ✦
      </div>
      <div className="absolute top-[48%] right-[30%] pointer-events-none text-amber-400 text-base animate-sparkle-3 select-none">
        ✦
      </div>

      {/* Precision Edge Registration Laser Reticle HUD */}
      <div className="absolute pointer-events-none z-10 animate-reticle-orbit -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          {/* Circular Target Reticle */}
          <div className="w-12 h-12 rounded-full border border-teal-400/70 bg-teal-500/10 shadow-[0_0_15px_rgba(45,212,191,0.6)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></div>
            <div className="absolute top-0 bottom-0 w-[1px] bg-teal-300/60"></div>
            <div className="absolute left-0 right-0 h-[1px] bg-teal-300/60"></div>
          </div>
          {/* Micro Telemetry Pill */}
          <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 bg-slate-950/95 border border-teal-400/80 text-teal-300 px-2 py-0.5 rounded text-[8px] font-mono whitespace-nowrap shadow-xl">
            REG: 0.00mm [ZERO PULL]
          </div>
        </div>
      </div>

      {/* Upper-Left Telemetry Badge */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none bg-slate-950/85 backdrop-blur-md border border-teal-500/40 rounded-xl px-3 py-1.5 shadow-xl space-y-0.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-wider text-teal-300">Lustrous Thread Sheen</span>
        </div>
        <p className="text-[9px] font-mono text-slate-300">Stitches: 14,850 | Tension: 110 cN (Madeira Rayon)</p>
      </div>

      {/* Upper-Right Tatami Density Chip */}
      <div className="absolute top-3 right-12 z-10 pointer-events-none bg-slate-950/85 backdrop-blur-md border border-teal-500/30 rounded-xl px-2.5 py-1 shadow-lg text-[9px] font-mono text-teal-300 font-bold flex items-center gap-1">
        <span>🧵 0.40mm TATAMI GRID</span>
      </div>
    </div>
  );
}

// 3. Stitch Tracer Animation: Computerized Needle Sequencing, CAD Grid & Real-Time Coordinate Ticker
function HeroSlideTracer() {
  const [stitchIndex, setStitchIndex] = useState(8420);
  const [coord, setCoord] = useState({ x: '+14.28', y: '-08.62' });
  const [progress, setProgress] = useState(62);

  useEffect(() => {
    const coords = [
      { x: '+12.40', y: '-06.15' },
      { x: '+14.28', y: '-08.62' },
      { x: '+16.55', y: '-10.30' },
      { x: '+18.90', y: '-07.45' },
      { x: '+15.10', y: '-04.20' },
      { x: '+11.85', y: '-05.80' },
      { x: '+08.30', y: '-09.10' },
      { x: '+10.60', y: '-12.45' },
    ];
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % coords.length;
      setCoord(coords[i]);
      setStitchIndex((prev) => (prev >= 14850 ? 7200 : prev + 195));
      setProgress((prev) => (prev >= 100 ? 42 : prev + 1.4));
    }, 220);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-slate-950">
      {/* BASE LAYER: Stitched Master Embroidery */}
      <img
        src="/sample1-after.jpg"
        alt="Digitized embroidery sewout"
        className="w-full h-full object-cover filter contrast-[1.05]"
      />

      {/* Simulated Digitizer CAD Grid Overlay */}
      <div className="absolute inset-0 stitch-grid opacity-60 pointer-events-none"></div>

      {/* Animated Vertical Laser Scanner Line */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-300 via-amber-300 to-emerald-400 shadow-[0_0_14px_rgba(52,211,153,1)] animate-tracer-wipe pointer-events-none z-10 flex flex-col justify-between py-4">
        <div className="w-2.5 h-2.5 -translate-x-[4px] rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-ping"></div>
        <div className="w-2.5 h-2.5 -translate-x-[4px] rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b] animate-ping"></div>
      </div>

      {/* Active Moving Embroidery Needle Head */}
      <div className="absolute pointer-events-none z-20 animate-needle-path -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex flex-col items-center">
          {/* Needle Bar */}
          <div className="w-1.5 h-6 bg-gradient-to-b from-slate-300 via-amber-200 to-amber-400 rounded-t shadow animate-needle-punch"></div>
          {/* Needle Penetration Spark / Laser Point */}
          <div className="relative flex items-center justify-center">
            <span className="w-4 h-4 rounded-full bg-emerald-400 animate-ping absolute"></span>
            <span className="w-2 h-2 rounded-full bg-white border border-emerald-400 shadow-[0_0_12px_#34d399]"></span>
          </div>
          {/* Coordinates HUD Chip */}
          <div className="mt-1 bg-slate-950/90 border border-emerald-400/80 text-emerald-300 px-2 py-0.5 rounded text-[8px] font-mono whitespace-nowrap shadow-xl">
            X:{coord.x} Y:{coord.y}
          </div>
        </div>
      </div>

      {/* Upper-Left Telemetry Badge */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none bg-slate-950/85 backdrop-blur-md border border-amber-500/40 rounded-xl px-3 py-1.5 shadow-xl space-y-0.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">Wilcom Stitch Tracer [4X]</span>
        </div>
        <p className="text-[9px] font-mono text-slate-300">Needle #3 (Gold) | 950 SPM Real-Time</p>
      </div>

      {/* Upper-Right Live Stitch Counter */}
      <div className="absolute top-3 right-12 z-10 pointer-events-none bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 rounded-xl px-2.5 py-1 shadow-lg text-[9px] font-mono text-emerald-300 font-bold flex items-center gap-1.5">
        <span className="text-slate-400">STITCH:</span>
        <span className="text-white font-black">#{stitchIndex.toLocaleString()}</span>
        <span className="text-emerald-400">/ 14,850</span>
      </div>

      {/* Sequence Progress Bar */}
      <div className="absolute bottom-[92px] left-5 right-5 z-10 pointer-events-none">
        <div className="bg-slate-950/85 backdrop-blur-md border border-slate-700/60 rounded-lg p-2 shadow-xl space-y-1">
          <div className="flex justify-between text-[9px] font-mono text-slate-300">
            <span className="text-emerald-300 font-bold">● Active: Tatami Underlay + Satin Fill</span>
            <span className="text-amber-300 font-bold">{Math.min(100, Math.round(progress))}% Punched</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-teal-400 transition-all duration-300 rounded-full"
              style={{ width: `${Math.min(100, progress)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// OUR WORK SHOWCASE DATA (NEWLEAFSKILLS.COM)
// ==========================================

interface WorkProject {
  id: number;
  title: string;
  category: string;
  image: string;
  tag: string;
  stitches: string;
  colors: string;
  fabric: string;
  machine: string;
  turnaround: string;
  description: string;
  punchingNotes: string;
}

const workCategories = [
  'All',
  'Apparel & Corporate',
  'Patches & Crests',
  'Jacket Backs',
  'Vestments & Borders',
  'Fine Art & Floral'
];

const workProjects: WorkProject[] = [
  {
    id: 1,
    title: 'Intricate Floral Branch Crest',
    category: 'Fine Art & Floral',
    image: '/work/work-1.jpg',
    tag: 'Fine Thread Detail',
    stitches: '16,200',
    colors: '5 Poly Colors',
    fabric: 'Silk & Linen Blend',
    machine: 'Tajima 1,000 SPM',
    turnaround: '6 Hours',
    description: 'Precision floral branch punch with multi-layered satin petals and delicate filigree curve tracking.',
    punchingNotes: 'Edge-walk underlay foundations prevent thread sinkage into fine weave linens while maintaining feather-soft drape.'
  },
  {
    id: 2,
    title: 'Royal Gold Monogram Emblem',
    category: 'Patches & Crests',
    image: '/work/work-2.jpg',
    tag: 'Metallic Thread Run',
    stitches: '14,850',
    colors: 'Gold Metallic + Black',
    fabric: 'Velvet Outerwear',
    machine: 'Barudan Elite',
    turnaround: '6 Hours',
    description: 'Luxury monogram with calibrated pull-compensation to prevent metallic thread friction breaks.',
    punchingNotes: 'Calibrated with gentle stitch angles and open underlay mesh to eliminate metallic thread tension snaps.'
  },
  {
    id: 3,
    title: 'Vintage Rose Botanical Art',
    category: 'Fine Art & Floral',
    image: '/work/work-3.jpg',
    tag: 'High Density Tatami',
    stitches: '19,400',
    colors: '6 Gradient Colors',
    fabric: 'Heavy Denim Canvas',
    machine: 'Brother Industrial',
    turnaround: '6-8 Hours',
    description: 'Multi-directional shading sequence reproducing subtle petal gradients with zero puckering.',
    punchingNotes: 'Split tatami fill stitch angles mimic organic leaf veins and prevent heavy fabric tension curling.'
  },
  {
    id: 4,
    title: 'Peacock Feather Motif',
    category: 'Fine Art & Floral',
    image: '/work/work-4.jpg',
    tag: 'Micro Satin Stitching',
    stitches: '22,600',
    colors: '7 Lustrous Colors',
    fabric: 'Satin & Organza',
    machine: 'Tajima 15-Needle',
    turnaround: '8 Hours',
    description: 'Intricate feather eyelet punch with ultra-fine satin pathing maintaining needle sharpness.',
    punchingNotes: 'Dual underlay sequence supports high-density satellite spots without pinching delicate satin fibers.'
  },
  {
    id: 5,
    title: 'Traditional Gold Border & Trim',
    category: 'Vestments & Borders',
    image: '/work/work-5.jpg',
    tag: 'Continuous Run',
    stitches: '31,500',
    colors: 'Pure Gold & Silver',
    fabric: 'Brocade & Silk',
    machine: 'Industrial Multi-Head',
    turnaround: '8 Hours',
    description: 'Continuous border digitizing engineered for uninterrupted machine runs up to 1,000 SPM.',
    punchingNotes: 'Zero travel jump trims engineered into interlocking repeat motifs for lightning-fast mass production.'
  },
  {
    id: 6,
    title: 'Geometric Paisley Filigree',
    category: 'Vestments & Borders',
    image: '/work/work-6.jpeg',
    tag: 'Complex Geometry',
    stitches: '24,800',
    colors: 'Dual Tone Rayon',
    fabric: 'Cashmere & Wool',
    machine: 'SWF Dual Function',
    turnaround: '6-8 Hours',
    description: 'Interlocking paisley lattice pathing with synchronized jump-stitch trims.',
    punchingNotes: 'Balanced tatami underlay stabilizes stretchy knit weaves and prevents oval distortion of teardrops.'
  },
  {
    id: 7,
    title: 'Majestic Falcon Shield Crest',
    category: 'Patches & Crests',
    image: '/work/work-7.jpeg',
    tag: 'Left Chest & Cap',
    stitches: '13,900',
    colors: '4 Colors',
    fabric: 'Cotton Twill',
    machine: 'Tajima TFMX',
    turnaround: '6 Hours',
    description: 'Sharp talon and wing contours with high stitch density for corporate and club badges.',
    punchingNotes: 'Directional satins give high light refraction on bird wings while maintaining crisp edge boundaries.'
  },
  {
    id: 8,
    title: 'Grand Regal Medallion',
    category: 'Jacket Backs',
    image: '/work/work-8.jpeg',
    tag: 'Large Format (11"x11")',
    stitches: '48,500',
    colors: '5 Madeira Poly',
    fabric: 'Leather & Heavy Canvas',
    machine: 'Melco EMT16X',
    turnaround: '8-12 Hours',
    description: 'Expansive full jacket-back design with segmented tatami foundations ensuring zero fabric distortion.',
    punchingNotes: 'Segmented center-out punching offsets leather push-pull forces, preventing garment wrinkling.'
  },
  {
    id: 9,
    title: 'Symmetrical Damask Frame',
    category: 'Vestments & Borders',
    image: '/work/work-9.jpeg',
    tag: 'Heritage Crest',
    stitches: '17,100',
    colors: 'Triple Tone Gold',
    fabric: 'Textured Upholstery',
    machine: 'Tajima 1,000 SPM',
    turnaround: '6 Hours',
    description: 'Balanced ornamental frame with reinforced edge-walk underlay.',
    punchingNotes: 'Heavy edge-walk foundation guarantees razor-sharp frame perimeter even on thick textured fabrics.'
  },
  {
    id: 10,
    title: 'Commercial Brand Left Chest',
    category: 'Apparel & Corporate',
    image: '/work/work-10.png',
    tag: 'Polo & Uniforms',
    stitches: '8,400',
    colors: 'Corporate Spot Colors',
    fabric: 'Pique Polo Knit',
    machine: 'Barudan Single-Head',
    turnaround: '4-6 Hours',
    description: 'Pique knit calibrated underlay prevents stitches from sinking into waffle fabric textures.',
    punchingNotes: 'Full net tatami base mesh creates a smooth surface so column stitches never sink into pique waffle grooves.'
  },
  {
    id: 11,
    title: 'Precision Micro-Text & Monogram',
    category: 'Apparel & Corporate',
    image: '/work/work-11.png',
    tag: 'Legible 4mm Text',
    stitches: '11,200',
    colors: '2 Colors',
    fabric: 'Fleece Outerwear',
    machine: 'Brother PR1055X',
    turnaround: '4 Hours',
    description: 'Manual single-needle letter pathing ensuring crystal-clear legibility at tiny scale.',
    punchingNotes: 'Hand-adjusted letter kerning and single-line center underlay guarantees sharp legibility down to 3.8mm.'
  },
  {
    id: 12,
    title: 'High-Density Uniform Patch',
    category: 'Patches & Crests',
    image: '/work/work-12.jpeg',
    tag: 'Merrowed Border Edge',
    stitches: '15,600',
    colors: 'Military Spec Poly',
    fabric: 'Patch Twill',
    machine: 'Tajima TMBR',
    turnaround: '6 Hours',
    description: 'Heavy duty badge digitized with clean merrow-border cutlines and iron-on backing support.',
    punchingNotes: 'Includes laser-cut border contour lines with triple-stitch edge lock for heat-seal border stability.'
  },
  {
    id: 13,
    title: 'Corporate Apparel Uniform Logo',
    category: 'Apparel & Corporate',
    image: '/work/work-13.png',
    tag: 'Workwear Ready',
    stitches: '9,800',
    colors: 'Pantone Matched',
    fabric: 'Softshell Jacket',
    machine: 'Melco High-Speed',
    turnaround: '4-6 Hours',
    description: 'Weatherproof garment underlay sequence preventing puckering on laminated stretch fabrics.',
    punchingNotes: 'Low-tension compensation calibrated specifically for 2-way and 4-way stretch softshell polymers.'
  },
  {
    id: 14,
    title: 'Luxury Saree & Vestments Artwork',
    category: 'Vestments & Borders',
    image: '/work/work-14.png',
    tag: 'Zari Metallic Craft',
    stitches: '38,200',
    colors: 'Dual Gold Metallic',
    fabric: 'Pure Georgette & Velvet',
    machine: 'Multi-Needle High Run',
    turnaround: '8-12 Hours',
    description: 'Opulent ceremonial embroidery with ultra-soft underlay tension for flowing drapery.',
    punchingNotes: 'Optimized stitch length avoids cutting fragile silk strands while providing deep metallic thread luster.'
  },
  {
    id: 15,
    title: 'Custom Vector To Stitch Digitizing',
    category: 'Patches & Crests',
    image: '/work/work-15.png',
    tag: 'Bespoke Logo Vector',
    stitches: '12,500',
    colors: '4 Colors',
    fabric: 'Snapback Cap',
    machine: 'Tajima 270° Cap Driver',
    turnaround: '4-6 Hours',
    description: 'Complete raster artwork redraw converted into sharp, production-ready DST & PES embroidery files.',
    punchingNotes: 'Center-out bottom-up sequencing minimizes cap seam deflection and maintains geometric symmetry.'
  },
  {
    id: 16,
    title: 'Multi-Color Industrial Embroidery',
    category: 'Jacket Backs',
    image: '/work/work-16.png',
    tag: 'High-Speed Tajima Run',
    stitches: '34,000',
    colors: '8 Thread Stops',
    fabric: 'Heavy Duck Canvas',
    machine: 'Tajima 15-Needle Industrial',
    turnaround: '8 Hours',
    description: 'Engineered for high-volume commercial production with zero trim jams and minimal travel jumps.',
    punchingNotes: 'Color sequence engineered to minimize needle stop cycles and reduce production machine runtime by 22%.'
  },
  {
    id: 17,
    title: 'Sports Mascot Curved Cap Stitching',
    category: 'Apparel & Corporate',
    image: '/work/work-17.jpeg',
    tag: 'Center-Out Punching',
    stitches: '14,200',
    colors: '3 Colors',
    fabric: '6-Panel Curved Cap',
    machine: 'Barudan Cap Cylinder',
    turnaround: '6 Hours',
    description: 'Center-to-left, center-to-right sequencing keeping curved crown seams perfectly aligned.',
    punchingNotes: 'Center seam compensation prevents needle bounce and eliminates stitch bunching at the cap apex.'
  },
  {
    id: 18,
    title: 'Detailed Animal Emblem Sewout',
    category: 'Fine Art & Floral',
    image: '/work/work-18.jpeg',
    tag: 'Layered Tatami Fur',
    stitches: '26,700',
    colors: '6 Shade Tones',
    fabric: 'Brushed Cotton',
    machine: 'Brother Industrial',
    turnaround: '6-8 Hours',
    description: 'Realistic hair and feather texture created via variable stitch angles and density graduation.',
    punchingNotes: 'Embossed tatami gradient effect creates realistic depth and tactile fur highlights.'
  }
];

export default function Home() {
  // Before / After Slider State
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeSample, setActiveSample] = useState<ComparisonSample>('eagle');
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  // Hero Section Media Slider State
  const [heroSlide, setHeroSlide] = useState<number>(0);
  const [isHeroPaused, setIsHeroPaused] = useState<boolean>(false);

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Category Tabs State
  const [activeTab, setActiveTab] = useState<CategoryKey>('cap');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Quote Form State
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Embroidery Digitizing');
  const [turnaroundSpeed, setTurnaroundSpeed] = useState<string>('Standard (6-8 Hours)');

  // Our Work Showcase State
  const [workFilter, setWorkFilter] = useState<string>('All');
  const [selectedWorkProject, setSelectedWorkProject] = useState<WorkProject | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedWorkProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Hero Section Multi-Media Slides (Video, 3D Puff Cap, Jacket Crest, Stitch Tracer)
  const heroSlides = [
    {
      id: 'video',
      badge: '🔴 LIVE TAJIMA INDUSTRIAL RUN (1,000 SPM)',
      badgeColor: 'bg-rose-600',
      title: 'Spartan Armor Tajima High-Speed Punching',
      subtitle: 'Zero thread breaks & precision micro-trims live on industrial machinery',
      type: 'video',
      src: '/clip.mp4',
      telemetry: [
        { label: 'Machine', value: 'Tajima 15-Needle' },
        { label: 'Speed', value: '1,000 SPM' },
        { label: 'Thread', value: 'Madeira Poly #40' },
        { label: 'Trims', value: 'Auto-Trim OK' }
      ]
    },
    {
      id: 'puff',
      badge: '🧢 3D FOAM PUFF ATHLETIC HEADWEAR',
      badgeColor: 'bg-emerald-600',
      title: '3D Foam Puff Mascot Cap Punching',
      subtitle: 'Raised 3mm EVA foam with high-density satin caps on curved baseball panels',
      type: 'image',
      src: '/sample2-after.jpg',
      telemetry: [
        { label: 'Stitches', value: '18,400' },
        { label: 'Foam Relief', value: '3mm EVA' },
        { label: 'Underlay', value: 'Perforated Cap' },
        { label: 'Seam Lock', value: '+0.40mm' }
      ]
    },
    {
      id: 'crest',
      badge: '🦅 MASTER JACKET BACK & CREST SEWOUT',
      badgeColor: 'bg-teal-600',
      title: 'Majestic Sports Crest High-Density Tatami',
      subtitle: 'Flawless edge registration and lustrous rayon thread sheen on dark twill',
      type: 'image',
      src: '/sample1-after.jpg',
      telemetry: [
        { label: 'Stitches', value: '14,850' },
        { label: 'Density', value: '0.40mm' },
        { label: 'Colors', value: '3 Stops' },
        { label: 'Formats', value: 'DST, PES, EXP' }
      ]
    },
    {
      id: 'vector-comp',
      badge: '✨ VECTOR TO STITCH DIGITAL SIMULATION',
      badgeColor: 'bg-amber-600',
      title: 'Computerized Embroidery Needle Sequence',
      subtitle: 'Real-time stitch coordinates, jump paths, and underlay stabilization simulation',
      type: 'vector-comp',
      src: '/sample1-before.jpg',
      telemetry: [
        { label: 'File Type', value: 'Vector Art AI/EPS' },
        { label: 'Target', value: 'DST Machine File' },
        { label: 'Resolution', value: '300+ DPI' },
        { label: 'Turnaround', value: '6 Hours' }
      ]
    }
  ];

  // Auto-play timer for Hero slider
  useEffect(() => {
    if (isHeroPaused) return;
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHeroPaused, heroSlides.length]);

  // Samples for the Comparison Slider
  const comparisonSamples = {
    eagle: {
      name: 'Eagle Sports Crest',
      tag: 'High-Density Tatami & Satin Stitch',
      before: '/sample1-before.jpg',
      after: '/sample1-after.jpg',
      size: '3.8" W × 4.2" H',
      stitches: '14,850 Stitches',
      colors: '3 Colors (Madeira Polyneon)',
      underlay: 'Edge-walk + Double Zig-zag',
      pullComp: '+0.25mm Calibrated',
      desc: 'Clean vector emblem converted into rich golden rayon stitches with flawless edge registration and zero fabric puckering.'
    },
    tiger: {
      name: '3D Puff Tiger Athletic Cap',
      tag: 'Raised Foam & Satin Embroidery',
      before: '/sample2-before.jpg',
      after: '/sample2-after.jpg',
      size: '4.0" W × 3.6" H',
      stitches: '18,400 Stitches',
      colors: '4 Colors (High Sheen Poly)',
      underlay: 'Perforated Foam Capping Path',
      pullComp: '+0.40mm Heavy Puff Setting',
      desc: 'Athletic mascot digitized specifically for curved baseball caps with 3mm EVA foam underlay and clean cut-lines.'
    }
  };

  // Interactive Stitch Categories
  const categoryDetails = {
    cap: {
      title: 'Curved Cap & Hat Digitizing',
      badge: 'Cap Specialist',
      desc: 'Structured baseball caps and low-profile trucker hats require center-out pathing to eliminate thread bunching and needle breaks on stiff seams.',
      stitches: '7,500 – 11,000',
      time: '6 Hours',
      features: ['Center-out sequencing', 'Heavy seam pull compensation', 'Low-profile curve compensation'],
      image: '/sample2-after.jpg'
    },
    puff: {
      title: '3D Foam Puff Masterpiece',
      badge: 'High Impact 3D',
      desc: 'Expertly punched capping stitches cleanly seal 3mm/4mm embroidery foam inside satin columns for crisp, bold three-dimensional relief.',
      stitches: '9,000 – 16,500',
      time: '6–8 Hours',
      features: ['High density satin cover', 'Beveled corner caps', 'Foam-cutting tie-offs'],
      image: '/sample2-after.jpg'
    },
    jacket: {
      title: 'Jacket Back Large-Format Studio',
      badge: 'Large Scale Mastery',
      desc: 'Expansive embroidery up to 14 inches requires engineered underlay grids and sectioned fill stitching to prevent heavy garment warping.',
      stitches: '28,000 – 65,000',
      time: '8–12 Hours',
      features: ['Underlay tension balance', 'Optimized travel paths', 'Zero puckering guarantee'],
      image: '/sample1-after.jpg'
    },
    crest: {
      title: 'Corporate Left Chest Crest',
      badge: 'Micro-Lettering Precision',
      desc: 'Uniforms, corporate polos, and dress shirts demand immaculate micro-lettering down to 4mm with crystal-clear legibility.',
      stitches: '5,000 – 8,500',
      time: '4–6 Hours',
      features: ['Readable 4mm typography', 'Clean jump stitch trims', 'Soft backing friendly'],
      image: '/sample1-after.jpg'
    },
    patch: {
      title: 'Custom Embroidered Patches',
      badge: 'Merrowed Borders',
      desc: 'Precision digitized borders for iron-on, velcro, or sew-on backing with clean laser cut guides and heavy merrow borders.',
      stitches: '8,000 – 14,000',
      time: '6 Hours',
      features: ['Merrowed border guides', 'Heat-seal backing ready', 'High thread density'],
      image: '/sample1-after.jpg'
    },
    vector: {
      title: 'Vector Art Redraw & Color Separation',
      badge: 'Ultra Crisp 300+ DPI',
      desc: 'Blurry, low-resolution raster images traced by hand into scalable vector graphics (AI, EPS, SVG) ready for screen printing & DTF.',
      stitches: 'Vector Graphic',
      time: '4–6 Hours',
      features: ['Pantone color matching', 'Clean bezier curves', 'Print-ready separation'],
      image: '/sample1-before.jpg'
    }
  };

  // Drag interaction handler matching ourdigitizer.com
  const updateSliderPosition = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateSliderPosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updateSliderPosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch { }
  };

  const faqs = [
    {
      q: 'How fast can I receive my digitized embroidery file?',
      a: 'Standard delivery takes only 6 to 8 hours. We also provide a dedicated 2–3 hour rush turnaround option for emergency apparel production runs.'
    },
    {
      q: 'What embroidery machine formats do you provide?',
      a: 'We deliver all commercial and home machine formats including Tajima (.DST), Brother (.PES), Melco/Bernina (.EXP), Janome (.JEF), Husqvarna (.HUS), Pfaff (.VP3), Singer (.XXX), Wilcom (.EMB), plus a full color-stop PDF production worksheet.'
    },
    {
      q: 'Do you offer free revisions if adjustments are needed?',
      a: 'Yes, 100% unlimited free revisions on every order. If you need stitch density adjusted, sizing tweaked, or thread color changes, our team updates it promptly at no extra charge.'
    },
    {
      q: 'How do you guarantee zero thread breakage?',
      a: 'Every stitch path is manually punched by master artists using optimal underlay sequencing, pull compensation tailored to your specific fabric (cap, fleece, polo), and calibrated stitch angles that run effortlessly at 1,000+ SPM.'
    },
    {
      q: 'Can you convert low-resolution images into clean vector art?',
      a: 'Absolutely. We redraw raster photos, sketches, or low-res PNG/JPG logos into infinitely scalable vector files (AI, EPS, SVG, PDF) calibrated with exact Pantone colors.'
    }
  ];

  const currentSample = comparisonSamples[activeSample];
  const activeHeroSlide = heroSlides[heroSlide];

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0b1324] text-slate-300 px-4 sm:px-6 lg:px-8 xl:px-12 py-2 sm:py-2.5 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-4 sm:gap-6 font-medium">
            <a href="tel:+12135754946" className="flex items-center gap-1.5 text-emerald-400 font-bold hover:text-emerald-300 transition">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>📞 +1 (213) 575-4946</span>
            </a>
            <a href="mailto:support@newleafskills.com" className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition">
              ✉️ support@newleafskills.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              ⚡ Turnaround: 6–8 Hours | Rush 2h
            </span>
            <span className="hidden md:inline-flex text-[11px] text-slate-400 font-medium">
              ⭐ Trusted by 10,000+ Shops
            </span>
          </div>
        </div>
      </div>

      {/* CLEAN LUXURY LIGHT NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-200/90 sticky top-0 z-50 px-4 sm:px-6 lg:px-8 xl:px-12 py-3 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none flex-shrink-0" aria-label="NewLeaf Skills - Home">
            <img
              src="/logo.png"
              alt="NewLeaf Skills - Master Digitizing Studio"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition duration-200 group-hover:opacity-90"
            />
          </a>

          {/* Desktop Navigation Links (Responsive for xl and 2xl screens) */}
          <ul className="hidden xl:flex items-center gap-1 2xl:gap-2 font-medium text-[13px] 2xl:text-sm text-slate-700">
            <li>
              <a href="#" className="px-3 py-1.5 rounded-lg text-emerald-800 font-bold hover:bg-emerald-50/70 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#comparison" className="px-3 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition">
                Quality Inspector
              </a>
            </li>
            <li>
              <a href="#our-work" className="px-3 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition">
                Our Work
              </a>
            </li>
            <li>
              <a href="#why-choose-us" className="px-3 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#live-machine" className="px-3 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span>Live Machine</span>
              </a>
            </li>
            <li>
              <a href="#categories" className="px-3 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition">
                Stitch Categories
              </a>
            </li>
            <li>
              <a href="#services" className="px-3 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="px-3 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition">
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="ml-1 px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80 hover:bg-emerald-100 hover:border-emerald-300 transition shadow-xs flex items-center gap-1.5"
              >
                <span>FAQ &amp; Quote</span>
                <span className="text-emerald-600 font-normal">→</span>
              </a>
            </li>
          </ul>

          {/* Mobile menu hamburger toggle button (Visible on tablet & mobile below xl) */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-slate-100 active:bg-slate-200 transition-all border border-slate-200/80 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-200 bg-white/98 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 shadow-2xl space-y-2 text-sm font-semibold text-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition text-emerald-800 font-bold"
              >
                <span>Home</span>
                <span className="text-xs text-emerald-600 font-normal">Top</span>
              </a>
              <a
                href="#comparison"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                <span>Quality Inspector</span>
                <span className="text-xs text-slate-400 font-normal">Compare</span>
              </a>
              <a
                href="#our-work"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                <span>Our Work</span>
                <span className="text-xs text-slate-400 font-normal">Portfolio</span>
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                <span>Why Choose Us</span>
                <span className="text-xs text-slate-400 font-normal">Features</span>
              </a>
              <a
                href="#live-machine"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </span>
                  Live Machine
                </span>
                <span className="text-xs text-rose-500 font-bold uppercase tracking-wider">Live</span>
              </a>
              <a
                href="#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                <span>Stitch Categories</span>
                <span className="text-xs text-slate-400 font-normal">Techniques</span>
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                <span>Services</span>
                <span className="text-xs text-slate-400 font-normal">Offerings</span>
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                <span>Pricing</span>
                <span className="text-xs text-slate-400 font-normal">Rates</span>
              </a>
            </div>

            {/* Prominent FAQ & Quote Action in Mobile Menu */}
            <div className="pt-2">
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold tracking-wide shadow-md shadow-emerald-600/20 transition-all text-center"
              >
                <span className="flex items-center gap-2">
                  <span>💬 FAQ &amp; Get Free Quote</span>
                </span>
                <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">Jump →</span>
              </a>
            </div>

            {/* Quick Contact Line in Mobile Drawer */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <a href="tel:+12135754946" className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5">
                <span>📞 +1 (213) 575-4946</span>
              </a>
              <span className="text-slate-400">⚡ Turnaround: 6–8 Hours</span>
            </div>
          </div>
        )}
      </nav>

      {/* 1ST SECTION: COMPACT PADDING + DYNAMIC EMBROIDERY MULTI-MEDIA SLIDER */}
      <section className="relative px-4 sm:px-8 lg:px-20 py-8 sm:py-10 lg:py-12 overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/25 to-white border-b border-slate-200">

        {/* Subtle Ambient Glows & Grid */}
        <div className="absolute inset-0 stitch-grid-light opacity-50 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[300px] bg-teal-500/10 blur-[130px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">

            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 bg-emerald-100/90 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              🌿 Master Hand-Punched Embroidery Digitizing
            </div>

            {/* Master Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-black text-slate-900 leading-[1.1] tracking-tight">
              Flawless Stitch Files. <br />
              <span className="leaf-gradient-text">Engineered For Zero Breakage.</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              From structured caps and 3D foam puff to intricate jacket backs. Our veteran punchers hand-craft every path and underlay, tested directly on industrial Tajima and Barudan machines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#quote"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition transform hover:-translate-y-0.5 text-sm sm:text-base flex items-center gap-2.5"
              >
                <span>Upload Design For Quote</span>
                <span>→</span>
              </a>

              <a
                href="#comparison"
                className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3.5 rounded-xl border border-slate-300 transition text-sm sm:text-base flex items-center gap-2 shadow-sm"
              >
                <span>Inspect Stitch Slider</span>
                <span className="text-emerald-600">🔍</span>
              </a>
            </div>

            {/* Trust Metrics Cards */}
            <div className="grid grid-cols-3 gap-3.5 pt-4 border-t border-slate-200">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm">
                <h4 className="text-2xl font-black text-slate-900">6–8h</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Turnaround Time</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm">
                <h4 className="text-2xl font-black text-emerald-600">10k+</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Apparel Shops</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm">
                <h4 className="text-2xl font-black text-amber-500">4.9★</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Google Rating</p>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Embroidery Media Showcase Slider */}
          <div
            className="lg:col-span-6"
            id="live-machine"
            onMouseEnter={() => setIsHeroPaused(true)}
            onMouseLeave={() => setIsHeroPaused(false)}
          >
            <div className="relative bg-white p-3 sm:p-4 rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 group">

              {/* Top Live Badge */}
              <div className={`absolute -top-3.5 -right-3.5 ${activeHeroSlide.badgeColor} text-white font-black text-[10px] sm:text-[11px] px-3.5 py-1.5 rounded-full shadow-lg uppercase tracking-wider z-20 flex items-center gap-2 border border-white/20 transition-all duration-300`}>
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>{activeHeroSlide.badge}</span>
              </div>

              {/* Slider Viewport Frame */}
              <div className="relative h-[375px] sm:h-[415px] rounded-2xl overflow-hidden shadow-inner bg-slate-950">

                {/* SLIDE 0: Real Video (Live Tajima Run - Unchanged & Proper) */}
                {activeHeroSlide.id === 'video' && (
                  <video
                    key={activeHeroSlide.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-opacity duration-500"
                  >
                    <source src={activeHeroSlide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* SLIDE 1: 3D Puff Athletic Cap (Animated 3D Depth Scanner, Relief Wireframe & Hotspots) */}
                {activeHeroSlide.id === 'puff' && (
                  <HeroSlidePuff slide={activeHeroSlide} />
                )}

                {/* SLIDE 2: Master Jacket Crest (Animated Silky Thread Sheen Sweep, Sparkles & Registration Reticle) */}
                {activeHeroSlide.id === 'crest' && (
                  <HeroSlideCrest slide={activeHeroSlide} />
                )}

                {/* SLIDE 3: Computerized Stitch Tracer (Real-Time Needle Punching Simulation & Coordinate Ticker) */}
                {activeHeroSlide.id === 'vector-comp' && (
                  <HeroSlideTracer />
                )}

                {/* Media Telemetry Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent flex items-end p-5 pointer-events-none">
                  <div className="space-y-1.5 w-full">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{activeHeroSlide.title}</h3>
                    <p className="text-xs text-slate-300 line-clamp-1">{activeHeroSlide.subtitle}</p>

                    {/* Telemetry pill grid */}
                    <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-700/60 text-[10px]">
                      {activeHeroSlide.telemetry.map((item, idx) => (
                        <div key={idx} className="bg-slate-900/80 px-2 py-1 rounded-md border border-slate-700/50">
                          <span className="text-slate-400 block font-medium">{item.label}</span>
                          <span className="text-emerald-400 font-black truncate block">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left/Right Slider Arrows */}
                <button
                  type="button"
                  onClick={() => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-slate-700 transition z-30 shadow-md text-sm font-bold"
                  aria-label="Previous embroidery slide"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-slate-700 transition z-30 shadow-md text-sm font-bold"
                  aria-label="Next embroidery slide"
                >
                  →
                </button>

              </div>

              {/* Slider Pill Category Switchers below frame */}
              <div className="grid grid-cols-4 gap-1.5 mt-3">
                {[
                  { label: 'Live Tajima', icon: '🔴' },
                  { label: '3D Puff Cap', icon: '🧢' },
                  { label: 'Jacket Crest', icon: '🦅' },
                  { label: 'Stitch Tracer', icon: '✨' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setHeroSlide(idx)}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold transition-all text-center flex items-center justify-center gap-1 ${heroSlide === idx
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 font-black scale-102'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                  >
                    <span>{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TRUST BAR — RICH EMERALD GRADIENT BACKGROUND & OPTIMIZED VISUALS */}
      <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 border-y border-emerald-950 py-7 shadow-lg relative overflow-hidden">
        {/* Subtle radial ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">

            {/* Feature 1 */}
            <div className="flex items-center justify-center gap-3.5 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 hover:bg-white/10 transition">
              <div className="w-11 h-11 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center text-xl shadow-inner">
                ⏱️
              </div>
              <div className="text-left">
                <h5 className="text-sm font-black text-white tracking-wide">6–8 Hr Fast Delivery</h5>
                <p className="text-xs font-semibold text-emerald-200/90 mt-0.5">Rush 2h on request</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center justify-center gap-3.5 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 hover:bg-white/10 transition">
              <div className="w-11 h-11 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center text-xl shadow-inner">
                🛡️
              </div>
              <div className="text-left">
                <h5 className="text-sm font-black text-white tracking-wide">Zero Thread Breaks</h5>
                <p className="text-xs font-semibold text-emerald-200/90 mt-0.5">Tested Tajima sewouts</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center justify-center gap-3.5 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 hover:bg-white/10 transition">
              <div className="w-11 h-11 rounded-xl bg-sky-400/20 text-sky-300 border border-sky-400/30 flex items-center justify-center text-xl shadow-inner">
                🔄
              </div>
              <div className="text-left">
                <h5 className="text-sm font-black text-white tracking-wide">Unlimited Revisions</h5>
                <p className="text-xs font-semibold text-emerald-200/90 mt-0.5">100% Satisfaction</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center justify-center gap-3.5 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 hover:bg-white/10 transition">
              <div className="w-11 h-11 rounded-xl bg-purple-400/20 text-purple-300 border border-purple-400/30 flex items-center justify-center text-xl shadow-inner">
                🧵
              </div>
              <div className="text-left">
                <h5 className="text-sm font-black text-white tracking-wide">All Machine Formats</h5>
                <p className="text-xs font-semibold text-emerald-200/90 mt-0.5">DST, PES, EXP, JEF, EMB</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ID="COMPARISON" — ADVANCED BEFORE / AFTER QUALITY INSPECTOR (OURDIGITIZER.COM STYLE) */}
      <section id="comparison" className="px-4 sm:px-8 lg:px-20 py-10 sm:py-12 lg:py-14 bg-slate-50 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto">

          {/* Section Header with Refined Modern Typography */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <span className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest shadow-sm">
              ✨ Interactive Quality Inspector
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Raw Vector Artwork vs. <br />
              <span className="leaf-gradient-text">Production Embroidery Sewout</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Drag the interactive comparison handle left or right to inspect exact stitch density, sharp satin lettering, and pull compensation achieved by our master punchers.
            </p>

            {/* Design Selector Tabs with High-Contrast Color Combination */}
            <div className="flex justify-center gap-2.5 pt-2 flex-wrap">
              <button
                type="button"
                onClick={() => setActiveSample('eagle')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 ${activeSample === 'eagle'
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/30 border-2 border-emerald-600 font-extrabold scale-102'
                  : 'bg-white text-slate-900 hover:text-emerald-700 hover:bg-emerald-50/70 border border-slate-300 font-bold shadow-sm'
                  }`}
              >
                <span>🦅</span>
                <span className={activeSample === 'eagle' ? 'text-white font-extrabold' : 'text-slate-900 font-bold'}>
                  Majestic Sports Crest (High-Density Fill)
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSample('tiger')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 ${activeSample === 'tiger'
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/30 border-2 border-emerald-600 font-extrabold scale-102'
                  : 'bg-white text-slate-900 hover:text-emerald-700 hover:bg-emerald-50/70 border border-slate-300 font-bold shadow-sm'
                  }`}
              >
                <span>🐯</span>
                <span className={activeSample === 'tiger' ? 'text-white font-extrabold' : 'text-slate-900 font-bold'}>
                  3D Puff Athletic Cap (Raised Satin Stitches)
                </span>
              </button>
            </div>

          </div>

          {/* Comparison Grid: Left Spec Details & Right Comparison Slider */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">

            {/* Left Column: Technical Specifications Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg relative">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                      {currentSample.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1.5 tracking-tight">{currentSample.name}</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {currentSample.desc}
                </p>

                {/* Technical Specs List */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Design Size:</span>
                    <span className="text-slate-900 font-bold">{currentSample.size}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Stitch Count:</span>
                    <span className="text-emerald-700 font-bold">{currentSample.stitches}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Underlay Pathing:</span>
                    <span className="text-slate-900 font-bold">{currentSample.underlay}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Pull Compensation:</span>
                    <span className="text-emerald-700 font-bold">{currentSample.pullComp}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Thread System:</span>
                    <span className="text-slate-900 font-bold">{currentSample.colors}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-500 font-medium">Formats Provided:</span>
                    <span className="text-slate-900 font-bold">DST, PES, EXP, JEF + PDF</span>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href="#quote"
                    className="w-full block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 transition"
                  >
                    Digitize A Design Like This →
                  </a>
                </div>

              </div>
            </div>

            {/* Right Column: The True OurDigitizer-Style Before/After Slider */}
            <div className="lg:col-span-7">
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-xl relative">

                {/* Visual Label Legend */}
                <div className="flex justify-between items-center mb-2.5 text-xs font-semibold px-1">
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Original Vector Art
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1.5 text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Real Embroidery Sewout
                  </span>
                </div>

                {/* THE SLIDER CONTAINER — Matching ourdigitizer.com */}
                <div
                  ref={sliderRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  className="relative w-full aspect-square max-h-[420px] rounded-xl overflow-hidden select-none bg-slate-950 shadow-inner cursor-ew-resize touch-none border border-slate-200"
                >

                  {/* AFTER: Finished Embroidery Sewout (Bottom Layer) */}
                  <img
                    src={currentSample.after}
                    alt="After Digitizing — Production Embroidery Sewout"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />

                  {/* BEFORE: Original Vector Artwork (Top Layer, clipped by sliderPos) */}
                  <img
                    src={currentSample.before}
                    alt="Before Digitizing — Original Vector Design"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-none"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                    }}
                    draggable={false}
                  />

                  {/* Divider Handle Bar */}
                  <div
                    className="absolute top-0 bottom-0 pointer-events-none z-20 flex items-center justify-center -translate-x-1/2"
                    style={{ left: `${sliderPos}%` }}
                  >
                    {/* Vertical Dividing Line */}
                    <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)]"></div>

                    {/* Center Circular Button with Bidirectional Arrows */}
                    <div className="relative w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-emerald-500 text-slate-900 font-black text-sm transform transition hover:scale-110">
                      <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                      </svg>
                    </div>
                  </div>

                  {/* Badges on corner */}
                  <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider text-white pointer-events-none absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md shadow-md z-10">
                    Before: Vector Artwork
                  </span>
                  <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider text-white pointer-events-none absolute top-3 right-3 bg-emerald-700/90 backdrop-blur-md shadow-md z-10">
                    After: Stitched DST File
                  </span>

                  {/* Hidden Accessible Range Slider for Keyboard navigation */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    aria-label="Before and after image comparison slider"
                    className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
                  />

                </div>

                {/* Helper prompt below slider */}
                <div className="flex items-center justify-between text-slate-500 text-[11px] mt-3 px-1 font-medium">
                  <span>← Drag or click anywhere to compare</span>
                  <span className="text-emerald-700 font-bold">{Math.round(sliderPos)}% Vector / {100 - Math.round(sliderPos)}% Stitched</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE STITCH CATEGORIES STUDIO */}
      <section id="categories" className="px-4 sm:px-8 lg:px-20 py-12 lg:py-16 bg-gradient-to-b from-slate-100 via-emerald-50/40 to-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block mb-4">
              <span className="text-emerald-700 font-extrabold text-[11px] uppercase tracking-widest bg-white px-3.5 py-1 rounded-full border border-emerald-300 shadow-sm">
                Versatile Punching Studio
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Stitch Categories We Master</h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
              Every garment fabric reacts differently to needle tension and thread density. Choose an application to see our tailored digitizing approach.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {[
              { id: 'cap', label: 'Cap & Curved Visor' },
              { id: 'puff', label: '3D Foam Puff' },
              { id: 'jacket', label: 'Jacket Back Large-Scale' },
              { id: 'crest', label: 'Left Chest Uniform' },
              { id: 'patch', label: 'Embroidered Patches' },
              { id: 'vector', label: 'Vector Art Redraw' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CategoryKey)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 font-extrabold scale-105'
                  : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white border border-slate-200/80 shadow-sm'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Category Display Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 lg:p-10 grid lg:grid-cols-12 gap-8 items-center border border-emerald-100 shadow-2xl shadow-emerald-900/5">

            {/* Category Unique Image */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner border border-slate-100 bg-slate-950">
              <img
                src={
                  activeTab === 'cap' ? 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80' :
                    activeTab === 'puff' ? 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=1000&q=80' :
                      activeTab === 'jacket' ? 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80' :
                        activeTab === 'crest' ? 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80' :
                          activeTab === 'patch' ? 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80' :
                            'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80'
                }
                alt={categoryDetails[activeTab].title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <span className="bg-emerald-600 text-white font-bold text-[11px] px-3 py-1 rounded-lg shadow">
                  {categoryDetails[activeTab].badge}
                </span>
              </div>
            </div>

            {/* Category Info */}
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{categoryDetails[activeTab].title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {categoryDetails[activeTab].desc}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                {categoryDetails[activeTab].features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Typical Stitches</span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-700">{categoryDetails[activeTab].stitches}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Turnaround</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">{categoryDetails[activeTab].time}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#quote"
                  className="w-full block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 transition"
                >
                  Order This Application Now 🚀
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES GRID — OFFICIAL NEW LEAF SKILLS SERVICES WITH SHOWCASE IMAGES */}
      <section id="services" className="px-4 sm:px-8 lg:px-20 py-12 lg:py-16 bg-gradient-to-b from-slate-100 via-emerald-50/50 to-slate-100 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 sm:mb-14 space-y-3">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-extrabold text-emerald-800 uppercase tracking-widest shadow-sm">
                ✨ Official New Leaf Skills Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Our Core Embroidery Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Serving commercial apparel decorators, embroidery factories, and brands worldwide with 22+ years of manual punching excellence and industrial testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service Box 1: Computerized Embroidery Services */}
            <div className="relative bg-white text-slate-800 rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 group shadow-md overflow-hidden">
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center border border-emerald-200 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                01
              </div>

              {/* Showcase Image Frame - Snug Rounded Frame Matching Image Dimensions */}
              <div className="flex justify-center mb-5 w-full">
                <div className="relative h-64 sm:h-72 aspect-[7/10] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group-hover:shadow-xl group-hover:border-emerald-500/50 transition-all duration-300">
                  <img
                    src="/services/computerized-embroidery.png"
                    alt="Computerized Embroidery Services"
                    className="w-full h-full object-cover scale-[1.05] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Category Pill */}
              <div className="mb-2.5">
                <span className="inline-block bg-emerald-100/90 text-emerald-800 font-bold text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md border border-emerald-300/60 uppercase tracking-wider">
                  Industrial Machine Runs
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors tracking-tight">
                Computerized Embroidery Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                High-speed multi-head computerized embroidery for commercial apparel, corporate uniforms, and bulk garments. Engineered with calibrated stitch tensions, automatic trimming, and zero thread breaks.
              </p>

            </div>

            {/* Service Box 2: Embroidery Digitizing Services */}
            <div className="relative bg-white text-slate-800 rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 group shadow-md overflow-hidden">
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center border border-emerald-200 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                02
              </div>

              {/* Showcase Image Frame - Snug Rounded Frame Matching Image Dimensions */}
              <div className="flex justify-center mb-5 w-full">
                <div className="relative h-64 sm:h-72 aspect-[7/10] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group-hover:shadow-xl group-hover:border-emerald-500/50 transition-all duration-300">
                  <img
                    src="/services/embroidery-digitizing.png"
                    alt="Embroidery Digitizing Services"
                    className="w-full h-full object-cover scale-[1.05] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Category Pill */}
              <div className="mb-2.5">
                <span className="inline-block bg-emerald-100/90 text-emerald-800 font-bold text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md border border-emerald-300/60 uppercase tracking-wider">
                  Master Hand-Punched
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors tracking-tight">
                Embroidery Digitizing Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                Veteran hand-punching converting logos, sketches, and graphics into machine-ready files. Calibrated stitch paths, underlay stabilization, and fabric pull compensation for 1,000+ SPM speeds.
              </p>

            </div>

            {/* Service Box 3: Custom Logo Digitizing */}
            <div className="relative bg-white text-slate-800 rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 group shadow-md overflow-hidden">
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center border border-emerald-200 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                03
              </div>

              {/* Showcase Image Frame - Snug Rounded Frame Matching Image Dimensions */}
              <div className="flex justify-center mb-5 w-full">
                <div className="relative h-64 sm:h-72 aspect-[7/10] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group-hover:shadow-xl group-hover:border-emerald-500/50 transition-all duration-300">
                  <img
                    src="/services/custom-logo-digitizing.png"
                    alt="Custom Logo Digitizing"
                    className="w-full h-full object-cover scale-[1.05] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Category Pill */}
              <div className="mb-2.5">
                <span className="inline-block bg-emerald-100/90 text-emerald-800 font-bold text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md border border-emerald-300/60 uppercase tracking-wider">
                  Corporate & Brand Emblems
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors tracking-tight">
                Custom Logo Digitizing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                Transform company logos, mascot emblems, and brand insignias into clean embroidery files. Crisp micro-lettering clarity, sharp satin border outlines, and rich tatami fills that hold true to your artwork.
              </p>
            </div>

            {/* Service Box 4: Vestments Embroidery Services */}
            <div className="relative bg-white text-slate-800 rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 group shadow-md overflow-hidden">
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center border border-emerald-200 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                04
              </div>

              {/* Showcase Image Frame - Snug Rounded Frame Matching Image Dimensions */}
              <div className="flex justify-center mb-5 w-full">
                <div className="relative h-64 sm:h-72 aspect-[7/10] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group-hover:shadow-xl group-hover:border-emerald-500/50 transition-all duration-300">
                  <img
                    src="/services/vestments-embroidery.png"
                    alt="Vestments Embroidery Services"
                    className="w-full h-full object-cover scale-[1.05] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Category Pill */}
              <div className="mb-2.5">
                <span className="inline-block bg-emerald-100/90 text-emerald-800 font-bold text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md border border-emerald-300/60 uppercase tracking-wider">
                  Sacred & Liturgical Vestments
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors tracking-tight">
                Vestments Embroidery Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                Specialized high-density digitizing and embroidery for church vestments, ceremonial robes, altar cloths, and ecclesiastical stoles. Intricately rendered with metallic gold bullion threadwork.
              </p>


            </div>

            {/* Service Box 5: 3D Puff Digitizing */}
            <div className="relative bg-white text-slate-800 rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 group shadow-md overflow-hidden">
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center border border-emerald-200 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                05
              </div>

              {/* Showcase Image Frame - Snug Rounded Frame Matching Image Dimensions */}
              <div className="flex justify-center mb-5 w-full">
                <div className="relative h-64 sm:h-72 aspect-[7/10] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group-hover:shadow-xl group-hover:border-emerald-500/50 transition-all duration-300">
                  <img
                    src="/services/3d-puff-digitizing.png"
                    alt="3D Puff Digitizing"
                    className="w-full h-full object-cover scale-[1.05] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Category Pill */}
              <div className="mb-2.5">
                <span className="inline-block bg-emerald-100/90 text-emerald-800 font-bold text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md border border-emerald-300/60 uppercase tracking-wider">
                  Raised 3D Foam Relief
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors tracking-tight">
                3D Puff Digitizing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                Raised 3D foam relief embroidery engineered for snapbacks, baseball caps, and athletic jackets. Programmed with high-density satin caps and perforation cuts that sever 3mm EVA foam cleanly.
              </p>

            </div>

            {/* Service Box 6: Apparel Logo Digitizing */}
            <div className="relative bg-white text-slate-800 rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 group shadow-md overflow-hidden">
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center border border-emerald-200 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                06
              </div>

              {/* Showcase Image Frame - Snug Rounded Frame Matching Image Dimensions */}
              <div className="flex justify-center mb-5 w-full">
                <div className="relative h-64 sm:h-72 aspect-[7/10] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group-hover:shadow-xl group-hover:border-emerald-500/50 transition-all duration-300">
                  <img
                    src="/services/apparel-logo-services.png"
                    alt="Apparel Logo Digitizing"
                    className="w-full h-full object-cover scale-[1.05] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Category Pill */}
              <div className="mb-2.5">
                <span className="inline-block bg-emerald-100/90 text-emerald-800 font-bold text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md border border-emerald-300/60 uppercase tracking-wider">
                  Apparel & Uniforms
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors tracking-tight">
                Apparel Logo Digitizing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                Custom digitizing designed specifically for polo shirts, t-shirts, fleece hoodies, and corporate outerwear. Fabric-calibrated underlays eliminate puckering and garment bunching.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* OUR WORK & REAL SEWOUT PORTFOLIO SHOWCASE (NEWLEAFSKILLS.COM) */}
      <section id="our-work" className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-[#031d14] to-slate-950 border-y border-emerald-800/60 text-white relative overflow-hidden">

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[300px] bg-teal-500/10 blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute inset-0 stitch-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">

          {/* Section Heading */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-block">
              <span className="text-emerald-300 font-extrabold text-[11px] uppercase tracking-widest bg-emerald-950/90 px-4 py-1.5 rounded-full border border-emerald-500/50 shadow-lg inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Authentic Production Sewouts</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Work &amp; Embroidery Portfolio
            </h2>
            <p className="text-emerald-100/80 text-xs sm:text-base leading-relaxed">
              Real machine sewouts digitized by our master punching veterans. Over 50,000+ files digitized for commercial apparel decorators worldwide with zero thread breaks, clean trims, and zero fabric puckering.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {workCategories.map((cat) => {
              const count = cat === 'All' ? workProjects.length : workProjects.filter(p => p.category === cat).length;
              const isActive = workFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setWorkFilter(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 scale-105 ring-2 ring-emerald-300'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-emerald-600/60'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {workProjects
              .filter((p) => workFilter === 'All' || p.category === workFilter)
              .map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedWorkProject(project)}
                  className="group bg-slate-900/85 hover:bg-slate-850 rounded-2xl border border-emerald-900/60 hover:border-emerald-400/80 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-950/60 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
                >
                  {/* Image container */}
                  <div className="relative aspect-square overflow-hidden bg-slate-950 border-b border-emerald-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Top badging */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2 z-10">
                      <span className="bg-slate-950/85 backdrop-blur-md text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md truncate max-w-[75%]">
                        {project.tag}
                      </span>
                      <span className="bg-slate-950/85 backdrop-blur-md text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded-md border border-slate-700/60 shadow">
                        #{project.id}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20">
                      <span className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-4 py-2 rounded-xl shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span>🔍</span> Inspect Sewout &amp; Specs
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-gradient-to-b from-slate-900/90 to-slate-950">
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 mb-1">
                        {project.category}
                      </div>
                      <h3 className="font-extrabold text-white text-base leading-snug group-hover:text-emerald-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technical Specs Summary */}
                    <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-slate-950/70 rounded-lg p-2 border border-slate-800/80 flex items-center gap-1.5">
                          <span className="text-emerald-400 text-xs">🧵</span>
                          <div className="min-w-0">
                            <div className="text-[9px] uppercase tracking-wider text-slate-400">Stitches</div>
                            <div className="text-slate-200 font-mono font-bold truncate">{project.stitches}</div>
                          </div>
                        </div>
                        <div className="bg-slate-950/70 rounded-lg p-2 border border-slate-800/80 flex items-center gap-1.5">
                          <span className="text-teal-400 text-xs">👕</span>
                          <div className="min-w-0">
                            <div className="text-[9px] uppercase tracking-wider text-slate-400">Fabric</div>
                            <div className="text-slate-200 font-bold truncate text-[10px]">{project.fabric}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <span className="text-slate-400 text-[10px] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Tested @ 1,000 SPM
                        </span>
                        <span className="text-emerald-400 font-bold text-xs group-hover:underline flex items-center gap-1">
                          <span>View Details</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
          </div>

          {/* Bottom Live Production Proof Banner */}
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-emerald-800/60 p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-slate-800 pb-6 mb-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">22+</div>
                <div className="text-xs uppercase tracking-wider font-bold text-slate-300">Years in Business</div>
                <p className="text-[11px] text-slate-400">Pioneering commercial punchers</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">50,000+</div>
                <div className="text-xs uppercase tracking-wider font-bold text-slate-300">Designs Punched</div>
                <p className="text-[11px] text-slate-400">Caps, logos, vestments &amp; jackets</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">1,000 SPM</div>
                <div className="text-xs uppercase tracking-wider font-bold text-slate-300">High-Speed Proofed</div>
                <p className="text-[11px] text-slate-400">Tajima, Barudan, Brother, Melco</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">100% Free</div>
                <div className="text-xs uppercase tracking-wider font-bold text-slate-300">Unlimited Edits</div>
                <p className="text-[11px] text-slate-400">Until your sewout runs flawless</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-lg font-black text-white">Have a custom logo or artwork to digitize?</h4>
                <p className="text-xs sm:text-sm text-slate-300">Send us your image today — get a production-ready sewout worksheet and machine files in 6–8 hours.</p>
              </div>
              <a
                href="#quote"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Get Free Sewout Quote</span>
                <span>⚡</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US: NEW LEAF SKILLS (OFFICIAL REFERENCE FROM NEWLEAFSKILLS.COM) */}
      <section id="why-choose-us" className="relative px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/80 to-emerald-50/30 border-b border-slate-200 overflow-hidden">
        {/* Subtle Ambient Decorative Lights & Stitch Grid */}
        <div className="absolute inset-0 stitch-grid-light opacity-60 pointer-events-none"></div>
        <div className="absolute -top-24 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Main 2-Column Responsive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Official Workshop & Designer Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative group mx-auto max-w-md lg:max-w-none">

                {/* Glow & Backdrop Accent */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500 opacity-70"></div>

                {/* Main Card Frame with Image from newleafskills.com */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/20 bg-white shadow-2xl transition-all duration-300 group-hover:border-emerald-500/40">
                  <div className="relative aspect-[535/485] sm:aspect-[4/3] lg:aspect-[535/485] overflow-hidden bg-slate-100">
                    <img
                      src="/why-choose-us.jpg"
                      alt="Why Choose Us - New Leaf Skills Professional Embroidery Digitizing Studio"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>

                    {/* Bottom overlay inside image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Master Studio &amp; Craftsmanship</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                        Dedicated digitization facility with live Tajima &amp; Barudan testing beds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Overlay 1: Experience Chip (Top Right) */}
                <div className="absolute -top-5 -right-3 sm:-right-5 bg-slate-950/90 text-white backdrop-blur-md border border-emerald-500/40 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-black text-slate-950 text-base shadow-md">
                    22+
                  </div>
                  <div>
                    <div className="text-xs font-black tracking-wide text-white">Years Experience</div>
                    <div className="text-[10px] text-emerald-300 font-medium">Since 2002 • Pioneer Punchers</div>
                  </div>
                </div>

                {/* Floating Badge Overlay 2: Machine Ready & Zero Errors (Bottom Left) */}
                <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white/95 text-slate-900 backdrop-blur-md border border-emerald-200 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 text-lg">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">Machine-Ready Files</div>
                    <div className="text-[10px] text-slate-500 font-medium">Zero thread breaks • 100% Tested</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Content & Pillars from newleafskills.com */}
            <div className="lg:col-span-7 space-y-6">

              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300/80 text-emerald-900 font-extrabold text-xs uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                <span>Why Choose Us:</span>
              </div>

              {/* Main Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  New Leaf Skills
                </h2>
                <p className="text-sm sm:text-base font-semibold text-emerald-700 mt-1">
                  Global Embroidery Digitizing &amp; Punching Excellence
                </p>
              </div>

              {/* Official Description Paragraphs from newleafskills.com */}
              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  With over <strong className="text-slate-900 font-bold">22 years of experience</strong>, New Leaf Skills delivers professional <strong className="text-emerald-800 font-bold">Embroidery Digitizing Services</strong> with a strong focus on quality, accuracy, and customer satisfaction. Our skilled digitizers create machine-ready embroidery files that ensure smooth production and excellent stitch results.
                </p>
                <p>
                  We provide a wide range of services, including <strong className="text-slate-900 font-semibold">Custom Logo Digitizing, 3D Puff Digitizing, Cap Digitizing, Patch Digitizing, Applique Digitizing, Vestments Embroidery, and Irish Dance Dress Embroidery</strong> for clients across India and worldwide.
                </p>
                <p>
                  Our commitment to <strong className="text-emerald-800 font-bold">fast turnaround, affordable pricing, error-free digitizing, and reliable support</strong> makes us a trusted choice for embroidery businesses, apparel brands, and designers looking for high-quality embroidery solutions.
                </p>
              </div>

              {/* 4 Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">

                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 hover:border-emerald-400 transition-all shadow-xs hover:shadow-md flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    ⏱️
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">Fast Turnaround</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">6–8 hour standard turnaround with 2–4 hour rush dispatch available.</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 hover:border-emerald-400 transition-all shadow-xs hover:shadow-md flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    🎯
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">Error-Free Digitizing</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Calibrated stitch density, smart underlay, and zero thread breaks.</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 hover:border-emerald-400 transition-all shadow-xs hover:shadow-md flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    💰
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">Affordable Pricing</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Transparent flat rates from $10 / ₹350 without any hidden setup costs.</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 hover:border-emerald-400 transition-all shadow-xs hover:shadow-md flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    🤝
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">Reliable 24/7 Support</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">100% free unlimited edits until your sewout runs perfectly on fabric.</p>
                  </div>
                </div>

              </div>

              {/* Service Capabilities Pills from newleafskills.com */}
              <div className="pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Featured Capabilities on NewLeafSkills.com:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Custom Logo Digitizing',
                    '3D Puff Digitizing',
                    'Cap Digitizing',
                    'Patch Digitizing',
                    'Applique Digitizing',
                    'Vestments Embroidery',
                    'Irish Dance Dress Embroidery'
                  ].map((service, idx) => (
                    <span
                      key={idx}
                      className="bg-emerald-50/90 text-emerald-900 border border-emerald-200/80 text-[11px] font-bold px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs hover:bg-emerald-100 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{service}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Trust Indicator */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#quote"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-7 py-3.5 rounded-xl text-sm shadow-lg shadow-emerald-600/30 border border-emerald-500 hover:scale-105 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Free Digitizing Quote</span>
                  <span>⚡</span>
                </a>
                <a
                  href="#our-work"
                  className="bg-white hover:bg-slate-100 text-slate-800 font-extrabold px-6 py-3.5 rounded-xl text-sm border border-slate-300 hover:border-emerald-500 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Our Work</span>
                  <span>✨</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SUPPORTED MACHINE FILE FORMATS */}
      <section id="formats" className="px-4 sm:px-8 lg:px-20 py-5 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div>
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Zero Format Hassle</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Ready For Any Embroidery Machine On Earth</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { code: 'DST', brand: 'Tajima / Industrial' },
              { code: 'PES', brand: 'Brother / Babylock' },
              { code: 'EXP', brand: 'Melco / Bernina' },
              { code: 'JEF', brand: 'Janome / Elna' },
              { code: 'HUS', brand: 'Husqvarna Viking' },
              { code: 'VP3', brand: 'Pfaff Embroidery' },
              { code: 'EMB', brand: 'Wilcom Source' },
              { code: 'PDF', brand: 'Color Worksheet' }
            ].map((fmt, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-500 transition shadow-sm">
                <div className="text-lg font-black text-emerald-700">{fmt.code}</div>
                <div className="text-[10px] text-slate-500 mt-1 font-medium">{fmt.brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG & INSIGHTS SECTION */}
      <section id="blog" className="px-4 sm:px-8 lg:px-20 py-12 lg:py-16 bg-gradient-to-b from-[#064e3b] via-[#022c22] to-[#064e3b] border-b border-emerald-900 shadow-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 space-y-2">
            <div className="inline-block">
              <span className="text-emerald-300 font-extrabold text-[11px] uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-600/60 shadow-sm">
                Industry Insights & Guides
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Latest Embroidery & Digitizing Tips</h2>
            <p className="text-emerald-100/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Explore expert advice, pull compensation techniques, and machine embroidery secrets to scale your apparel decoration business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Blog Card 1 */}
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-emerald-700/60 overflow-hidden shadow-2xl flex flex-col justify-between transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.5)] group">
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
                    alt="Embroidery Digitizing Guide"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-lg shadow">
                    Digitizing Tips
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-[11px] text-emerald-400 font-semibold">October 24, 2026 • 4 min read</div>
                  <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                    How to Master Pull Compensation on Difficult Fabrics
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Learn why stretchy fleece and pique polos distort stitches and how proper underlay sequencing fixes it instantly.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#quote" className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-400 group-hover:text-emerald-300 transition">
                  Read Full Article &rarr;
                </a>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-emerald-700/60 overflow-hidden shadow-2xl flex flex-col justify-between transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.5)] group">
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
                    alt="3D Puff Embroidery"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-lg shadow">
                    Headwear Secrets
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-[11px] text-emerald-400 font-semibold">October 19, 2026 • 5 min read</div>
                  <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                    The Ultimate Guide to Clean 3D Foam Puff Caps
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Discover density settings and corner-capping tactics to ensure your foam cuts clean without exposing messy threads.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#quote" className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-400 group-hover:text-emerald-300 transition">
                  Read Full Article &rarr;
                </a>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-emerald-700/60 overflow-hidden shadow-2xl flex flex-col justify-between transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.5)] group">
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
                    alt="Vector Art to Embroidery"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-lg shadow">
                    Vector Conversion
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-[11px] text-emerald-400 font-semibold">October 12, 2026 • 3 min read</div>
                  <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                    Why Manual Vector Tracing Beats Auto-Trace Software
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Avoid jagged nodes and unclean fills. Learn why professional print shops rely exclusively on manual vector conversion.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#quote" className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-400 group-hover:text-emerald-300 transition">
                  Read Full Article &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS SLIDER SECTION */}
      <section id="testimonials" className="px-4 sm:px-8 lg:px-20 py-12 lg:py-16 bg-gradient-to-b from-slate-50 via-emerald-50/40 to-slate-100 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header with Next/Prev Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-block">
                <span className="text-emerald-800 font-extrabold text-[11px] uppercase tracking-widest bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300 shadow-sm">
                  Satisfied Global Clients
                </span>
              </div>
              <div className="flex justify-center md:justify-start text-amber-500 text-base tracking-widest mt-1">★★★★★</div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Loved by 10,000+ Apparel Decorators</h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xl leading-relaxed">
                Real reviews from embroidery business owners across the USA, Canada, and Europe.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center shadow-md hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 group cursor-pointer"
                aria-label="Previous Slide"
              >
                <span className="transform group-hover:-translate-x-0.5 transition-transform font-black">←</span>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center shadow-md hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 group cursor-pointer"
                aria-label="Next Slide"
              >
                <span className="transform group-hover:translate-x-0.5 transition-transform font-black">→</span>
              </button>
            </div>
          </div>

          {/* Testimonials Slider Track */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scroll-smooth focus:outline-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >

              {[
                {
                  name: "Dave Henderson",
                  role: "Apex Custom Apparel, Texas",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
                  text: "We run 4 multi-head Tajima machines all day. Automated digitizing kept breaking needles on cap seams. Switched to NewLeafSkills and we haven't had a single broken thread in 6 months."
                },
                {
                  name: "Sarah Mitchell",
                  role: "Summit Stitch Works, California",
                  image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
                  text: "Their 3D puff digitizing is hands-down the best in the industry. The satin borders are razor-sharp and the foam cuts away with zero fuzz around the edges. Turnaround is consistently under 6 hours."
                },
                {
                  name: "Marcus Chen",
                  role: "Urban Print & Thread, Toronto",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
                  text: "Super reliable vector conversion and left-chest digitizing. They handle our rush orders on Saturday mornings without batting an eye. Highly recommended for commercial shops."
                },
                {
                  name: "Emily Rodriguez",
                  role: "ThreadCraft Studio, Miami",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
                  text: "The jacket back digitizing quality is phenomenal. Proper underlay sequencing prevents any fabric puckering on heavy denim and leather. Absolute lifesaver for our production team."
                },
                {
                  name: "Liam O'Connor",
                  role: "Emerald Embroidery, Dublin",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
                  text: "Incredible attention to detail on micro-lettering. Clean trimmings mean minimal cleanup work for our machine operators. Best digitizing partner we've had in 10 years."
                },
                {
                  name: "Jessica Taylor",
                  role: "Venture Merch Group, London",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
                  text: "Fast turnaround times and unlimited revisions make working with them completely stress-free. Their customer support team is always available when we have rush corporate jobs."
                }
              ].map((client, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] sm:min-w-[360px] max-w-[380px] flex-shrink-0 snap-start bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/90 space-y-4 shadow-xl flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl group"
                >
                  <div className="space-y-3">
                    <div className="flex text-amber-500 text-xs">★★★★★</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                      &ldquo;{client.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                    <img src={client.image} alt={client.name} className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 shadow-sm group-hover:scale-105 transition-transform" />
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold group-hover:text-emerald-700 transition-colors">{client.name}</strong>
                      <span className="text-slate-500 text-[11px]">{client.role}</span>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* COMBINED ID="QUOTE" & ID="FAQ" SECTION */}
      <section id="quote" className="px-4 sm:px-8 lg:px-20 py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 scroll-mt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT: INSTANT QUOTE & FILE UPLOAD */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              {/* Top decorative gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 leaf-gradient"></div>

              <div className="mb-8 space-y-2">
                <div className="inline-block">
                  <span className="text-emerald-800 font-extrabold text-[11px] uppercase tracking-widest bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300 shadow-sm">
                    Fast Response Studio
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Get Your Free Quote &amp; Sewout Estimate
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Upload your design file and receive an exact price quote, stitch count estimate, and digital preview in 30 minutes.
                </p>
              </div>

              {quoteSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mx-auto shadow-inner">
                    ✓
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">Quote Request Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our master digitizer is reviewing your artwork. We will email your exact stitch estimate, sewout proof, and quote within 30 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuoteSubmitted(false)}
                    className="leaf-gradient text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition hover:opacity-95"
                  >
                    Submit Another Design
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteSubmitted(true);
                  }}
                  className="space-y-5 text-xs sm:text-sm"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Service Required</label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-emerald-600 transition shadow-sm"
                      >
                        <option>Embroidery Digitizing</option>
                        <option>Cap / Hat Digitizing</option>
                        <option>3D Foam Puff Digitizing</option>
                        <option>Jacket Back Digitizing</option>
                        <option>Vector Art Redraw</option>
                        <option>Custom Patch Programming</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Turnaround Speed</label>
                      <select
                        value={turnaroundSpeed}
                        onChange={(e) => setTurnaroundSpeed(e.target.value)}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-emerald-600 transition shadow-sm"
                      >
                        <option>Standard (6–8 Hours)</option>
                        <option>Rush (2–3 Hours)</option>
                        <option>Next Day (12–24 Hours)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Target Garment / Fabric</label>
                      <input
                        type="text"
                        placeholder="e.g. Structured Cap, Pique Polo, Hoodie"
                        required
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 outline-none focus:border-emerald-600 transition placeholder:text-slate-400 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Email Address or WhatsApp</label>
                      <input
                        type="text"
                        placeholder="name@company.com or phone"
                        required
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 outline-none focus:border-emerald-600 transition placeholder:text-slate-400 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Upload Zone */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Upload Design File</label>
                    <label className="border-2 border-dashed border-emerald-300 hover:border-emerald-600 bg-slate-50/50 p-6 text-center rounded-2xl cursor-pointer transition block group shadow-sm">
                      <input type="file" className="hidden" />
                      <div className="text-2xl mb-1 group-hover:scale-110 transition">📁</div>
                      <p className="text-xs sm:text-sm font-bold text-slate-800">Click or drag &amp; drop design file here</p>
                      <p className="text-[11px] text-slate-500 mt-1">Accepts PNG, JPG, PDF, AI, EPS, SVG, DST (Up to 50MB)</p>
                    </label>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Special Instructions / Dimensions (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Specify dimensions (e.g. 3.5 inches wide), color stops, or machine preferences..."
                      className="w-full bg-slate-50/70 border border-slate-300 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-slate-800 outline-none focus:border-emerald-600 transition placeholder:text-slate-400 shadow-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full leaf-gradient text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition hover:opacity-95 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Free Quote Request</span>
                    <span>🚀</span>
                  </button>
                </form>
              )}

            </div>

            {/* RIGHT: FAQ ACCORDION */}
            <div id="faq" className="lg:col-span-5 space-y-6 scroll-mt-28">

              <div className="space-y-2">
                <div className="inline-block">
                  <span className="text-emerald-800 font-extrabold text-[11px] uppercase tracking-widest bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300 shadow-sm">
                    Got Questions?
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Everything you need to know about our digitizing process, machines, file formats &amp; turnaround.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-emerald-400"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-700 transition cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0 border border-emerald-200 transition-transform">
                        {openFaq === idx ? '−' : '+'}
                      </span>
                    </button>

                    {openFaq === idx && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Direct Support / Quick Help Card */}
              <div className="bg-gradient-to-br from-slate-900 to-[#0f172a] rounded-2xl p-5 border border-emerald-800/40 text-slate-200 shadow-xl space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold border border-emerald-500/30">
                    💬
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-white">Need an Instant Answer?</h4>
                    <p className="text-[11px] text-slate-400">Our digitizers are active 24/7 on WhatsApp &amp; live chat</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                  <a
                    href="tel:+12135754946"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow-sm"
                  >
                    <span>📞</span> +1 (213) 575-4946
                  </a>
                  <a
                    href="mailto:support@newleafskills.com"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium transition border border-slate-700"
                  >
                    <span>✉️</span> support@newleafskills.com
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CLEAN LUXURY LIGHT FOOTER */}
      <footer className="bg-slate-100 border-t border-slate-200 py-12 px-4 sm:px-8 lg:px-20 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand info with logo */}
          <div className="space-y-4 md:col-span-2">
            <img
              src="/logo.png"
              alt="NewLeaf Skills - Master Digitizing Studio"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <p className="text-slate-600 max-w-sm leading-relaxed text-sm">
              Professional manual embroidery digitizing &amp; vector art services. Trusted by 10,000+ embroidery shops, garment decorators, and apparel manufacturers globally.
            </p>
            <div className="text-slate-700 font-semibold space-y-1">
              <div>📞 Phone: +1 (213) 575-4946</div>
              <div>✉️ Email: support@newleafskills.com</div>
              <div>⚡ Studio Hours: 24/7 Production &amp; Live Support</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-slate-900 font-bold uppercase tracking-wider text-xs">Navigation &amp; Services</h5>
            <ul className="space-y-2 font-medium">
              <li><a href="#our-work" className="hover:text-emerald-700 transition font-bold text-emerald-800">✨ Our Work Portfolio</a></li>
              <li><a href="#why-choose-us" className="hover:text-emerald-700 transition font-bold text-emerald-800">🌟 Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-emerald-700 transition">Cap &amp; Hat Digitizing</a></li>
              <li><a href="#services" className="hover:text-emerald-700 transition">3D Puff Foam Embroidery</a></li>
              <li><a href="#services" className="hover:text-emerald-700 transition">Jacket Back Digitizing</a></li>
              <li><a href="#services" className="hover:text-emerald-700 transition">Left Chest Uniforms</a></li>
              <li><a href="#services" className="hover:text-emerald-700 transition">Vector Art Redraw</a></li>
            </ul>
          </div>

          {/* Guarantee & Formats */}
          <div className="space-y-3">
            <h5 className="text-slate-900 font-bold uppercase tracking-wider text-xs">Assurance</h5>
            <ul className="space-y-2 font-medium text-slate-700">
              <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> 6–8 Hour Standard Turnaround</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> 100% Unlimited Free Revisions</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Zero Thread Breaks Guarantee</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Tajima, Barudan, Brother, Melco</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> PDF Color Sewout Worksheet</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4 text-slate-500 font-medium">
          <div>
            &copy; 2026 NewLeaf Skills Studio. All rights reserved. Professional Embroidery Digitizing &amp; Vector Art.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-700">Terms of Service</a>
            <a href="#" className="hover:text-emerald-700">Privacy Policy</a>
            <a href="#quote" className="text-emerald-700 font-bold hover:underline">Instant Quote</a>
          </div>
        </div>
      </footer>

      {/* OUR WORK FULLSCREEN SEWOUT LIGHTBOX MODAL */}
      {selectedWorkProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedWorkProject(null)}
        >
          <div
            className="bg-slate-900 border border-emerald-600/60 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto text-slate-100 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedWorkProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-rose-600 border border-slate-700/80 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Left: High-Res Sewout Image Display */}
            <div className="md:w-1/2 bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden border-b md:border-b-0 md:border-r border-emerald-950">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-emerald-800/40 shadow-inner group">
                <img
                  src={selectedWorkProject.image}
                  alt={selectedWorkProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/40 text-[10px] text-emerald-300 font-bold flex items-center gap-1.5 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>100% Genuine Machine Sewout</span>
                </div>
              </div>
              <div className="mt-3 text-[11px] text-slate-400 text-center flex items-center gap-2">
                <span>🔍 Punched by NewLeaf Skills Master Studio</span>
              </div>
            </div>

            {/* Right: Technical Details & Order CTA */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-gradient-to-b from-slate-900 to-slate-950 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
                    {selectedWorkProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-2 leading-tight">
                    {selectedWorkProject.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {selectedWorkProject.description}
                  </p>
                </div>

                {/* Tech Specs Grid */}
                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-2.5">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-1.5">
                    Production Punch Telemetry
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400">Total Stitches:</div>
                      <div className="font-mono font-bold text-emerald-400">{selectedWorkProject.stitches}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Thread Palette:</div>
                      <div className="font-semibold text-slate-200">{selectedWorkProject.colors}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Target Fabric:</div>
                      <div className="font-semibold text-slate-200">{selectedWorkProject.fabric}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Machine Rating:</div>
                      <div className="font-semibold text-slate-200">{selectedWorkProject.machine}</div>
                    </div>
                  </div>
                </div>

                {/* Puncher Notes */}
                <div className="bg-emerald-950/30 rounded-xl p-3 border border-emerald-800/40 text-xs text-emerald-200/90 leading-relaxed space-y-1">
                  <div className="font-bold text-emerald-400 text-[11px] flex items-center gap-1.5">
                    <span>💡 Veteran Digitizer Note</span>
                  </div>
                  <p className="text-[11px] text-emerald-100/80">
                    {selectedWorkProject.punchingNotes}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="#quote"
                  onClick={() => {
                    setSelectedService('Embroidery Digitizing');
                    setSelectedWorkProject(null);
                  }}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 px-4 rounded-xl text-center text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Order Digitizing in This Style</span>
                  <span>⚡</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedWorkProject(null)}
                  className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </main>
  );
}