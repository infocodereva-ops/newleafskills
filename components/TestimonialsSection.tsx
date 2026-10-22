'use client';

import { useRef } from 'react';

export default function TestimonialsSection() {
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

  const testimonials = [
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
  ];

  return (
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
            {testimonials.map((client, idx) => (
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
  );
}
