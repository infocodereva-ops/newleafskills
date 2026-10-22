'use client';

import { useState, useEffect } from 'react';

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

export default function HeroSection() {
  const [heroSlide, setHeroSlide] = useState<number>(0);
  const [isHeroPaused, setIsHeroPaused] = useState<boolean>(false);

  // Auto-play timer for Hero slider
  useEffect(() => {
    if (isHeroPaused) return;
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHeroPaused]);

  const activeHeroSlide = heroSlides[heroSlide];

  return (
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

              {/* SLIDE 0: Real Video (Live Tajima Run) */}
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

              {/* SLIDE 1: 3D Puff Athletic Cap */}
              {activeHeroSlide.id === 'puff' && (
                <HeroSlidePuff slide={activeHeroSlide} />
              )}

              {/* SLIDE 2: Master Jacket Crest */}
              {activeHeroSlide.id === 'crest' && (
                <HeroSlideCrest slide={activeHeroSlide} />
              )}

              {/* SLIDE 3: Computerized Stitch Tracer */}
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
  );
}
