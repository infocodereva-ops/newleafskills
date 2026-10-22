'use client';

import { useEffect } from 'react';
import { WorkProject } from '@/types/work';

interface WorkLightboxModalProps {
  project: WorkProject;
  onClose: () => void;
  onOrderStyle: (service: string) => void;
}

export default function WorkLightboxModal({
  project,
  onClose,
  onOrderStyle
}: WorkLightboxModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200/90 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto text-slate-800 flex flex-col md:flex-row max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Left: High-Res Sewout Image Display */}
        <div className="md:w-1/2 bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-200">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-300 text-[10px] text-emerald-800 font-extrabold flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>100% Genuine Machine Sewout</span>
            </div>
          </div>
          <div className="mt-3 text-[11px] text-slate-500 text-center flex items-center gap-1.5 font-medium">
            <span>✨ Punched by New Leaf Skills Master Studio</span>
          </div>
        </div>

        {/* Right: Technical Details & Order CTA */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-white overflow-y-auto">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                  ID #{project.id}
                </span>
              </div>
              <h3 className="font-outfit text-xl sm:text-2xl font-black text-slate-900 mt-1 leading-tight">
                {project.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Specs Grid */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                <span>Production Punch Telemetry</span>
                <span className="text-emerald-700 font-bold">1,000 SPM Validated</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                  <div className="text-[10px] text-slate-500 font-medium">Total Stitches:</div>
                  <div className="font-mono font-bold text-emerald-700 text-sm">{project.stitches}</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                  <div className="text-[10px] text-slate-500 font-medium">Thread Palette:</div>
                  <div className="font-bold text-slate-800 text-xs truncate">{project.colors}</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                  <div className="text-[10px] text-slate-500 font-medium">Target Fabric:</div>
                  <div className="font-bold text-slate-800 text-xs truncate">{project.fabric}</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                  <div className="text-[10px] text-slate-500 font-medium">Machine Rating:</div>
                  <div className="font-bold text-slate-800 text-xs truncate">{project.machine}</div>
                </div>
              </div>
            </div>

            {/* Puncher Notes */}
            <div className="bg-emerald-50/70 rounded-xl p-3.5 border border-emerald-200/80 text-xs text-emerald-950 leading-relaxed space-y-1">
              <div className="font-extrabold text-emerald-800 text-[11px] flex items-center gap-1.5">
                <span>💡 Veteran Digitizer Stitch Logic:</span>
              </div>
              <p className="text-[11px] text-emerald-900/90 font-normal">
                {project.punchingNotes}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <a
              href="/#quote"
              onClick={() => onOrderStyle('Embroidery Digitizing')}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl text-center text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg"
            >
              <span>Order Digitizing in This Style</span>
              <span>⚡</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
