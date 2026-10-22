'use client';

import { useState } from 'react';
import { CategoryKey } from '@/types/work';

const categoryDetails = {
  cap: {
    title: 'Curved Cap & Hat Digitizing',
    badge: 'Cap Specialist',
    desc: 'Structured baseball caps and low-profile trucker hats require center-out pathing to eliminate thread bunching and needle breaks on stiff seams.',
    stitches: '7,500 – 11,000',
    time: '6 Hours',
    features: ['Center-out sequencing', 'Heavy seam pull compensation', 'Low-profile curve compensation'],
    image: '/cat-cap.jpg'
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
    image: '/cat-jacket.jpg'
  },
  crest: {
    title: 'Corporate Left Chest Crest',
    badge: 'Micro-Lettering Precision',
    desc: 'Uniforms, corporate polos, and dress shirts demand immaculate micro-lettering down to 4mm with crystal-clear legibility.',
    stitches: '5,000 – 8,500',
    time: '4–6 Hours',
    features: ['Readable 4mm typography', 'Clean jump stitch trims', 'Soft backing friendly'],
    image: '/cat-crest.jpg'
  },
  patch: {
    title: 'Custom Embroidered Patches',
    badge: 'Merrowed Borders',
    desc: 'Precision digitized borders for iron-on, velcro, or sew-on backing with clean laser cut guides and heavy merrow borders.',
    stitches: '8,000 – 14,000',
    time: '6 Hours',
    features: ['Merrowed border guides', 'Heat-seal backing ready', 'High thread density'],
    image: '/cat-patch.jpg'
  },
  vector: {
    title: 'Vector Art Redraw & Color Separation',
    badge: 'Ultra Crisp 300+ DPI',
    desc: 'Blurry, low-resolution raster images traced by hand into scalable vector graphics (AI, EPS, SVG) ready for screen printing & DTF.',
    stitches: 'Vector Graphic',
    time: '4–6 Hours',
    features: ['Pantone color matching', 'Clean bezier curves', 'Print-ready separation'],
    image: '/cat-vector.jpg'
  }
};

const categoryTabs = [
  { id: 'cap', label: 'Cap & Curved Visor' },
  { id: 'puff', label: '3D Foam Puff' },
  { id: 'jacket', label: 'Jacket Back Large-Scale' },
  { id: 'crest', label: 'Left Chest Uniform' },
  { id: 'patch', label: 'Embroidered Patches' },
  { id: 'vector', label: 'Vector Art Redraw' }
];

export default function StitchCategoriesSection() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('cap');

  return (
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
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as CategoryKey)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === tab.id
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
              src={categoryDetails[activeTab].image}
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
  );
}
