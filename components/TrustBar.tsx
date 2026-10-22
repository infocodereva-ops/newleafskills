export default function TrustBar() {
  return (
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
  );
}
