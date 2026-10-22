export default function FormatsSection() {
  const formats = [
    { code: 'DST', brand: 'Tajima / Industrial' },
    { code: 'PES', brand: 'Brother / Babylock' },
    { code: 'EXP', brand: 'Melco / Bernina' },
    { code: 'JEF', brand: 'Janome / Elna' },
    { code: 'HUS', brand: 'Husqvarna Viking' },
    { code: 'VP3', brand: 'Pfaff Embroidery' },
    { code: 'EMB', brand: 'Wilcom Source' },
    { code: 'PDF', brand: 'Color Worksheet' }
  ];

  return (
    <section id="formats" className="px-4 sm:px-8 lg:px-20 py-5 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div>
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Zero Format Hassle</span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Ready For Any Embroidery Machine On Earth</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {formats.map((fmt, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-500 transition shadow-sm">
              <div className="text-lg font-black text-emerald-700">{fmt.code}</div>
              <div className="text-[10px] text-slate-500 mt-1 font-medium">{fmt.brand}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
