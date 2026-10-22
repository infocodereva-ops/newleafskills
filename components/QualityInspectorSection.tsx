'use client';

import { useState, useRef, useCallback } from 'react';
import { ComparisonSample } from '@/types/work';

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

export default function QualityInspectorSection() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeSample, setActiveSample] = useState<ComparisonSample>('eagle');
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

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

  const currentSample = comparisonSamples[activeSample];

  return (
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
  );
}
