'use client';

import Link from 'next/link';

export default function BlogSection() {
  const blogs = [
    {
      title: 'Why a Long-Time Client Came Back to New Leaf Skills After Years',
      tag: 'Embroidery Service',
      date: 'October 20, 2026 • 4 min read',
      image: 'https://newleafskills.com/wp-content/uploads/elementor/thumbs/Why-a-Long-Time-Client-Came-Back-to-New-Leaf-Skills-After-Years-1-rv4qosli6wz4xswlgemuehem0u0ong4fbwopz4kkyo.jpg',
      desc: 'Learn why automated tools ruin blanks and why master hand-punched underlays guarantee zero thread breaks.'
    },
    {
      title: 'What American Brands Are Actually Stitching This Year',
      tag: 'Fashion Designer',
      date: 'October 7, 2026 • 5 min read',
      image: 'https://newleafskills.com/wp-content/uploads/elementor/thumbs/Whats-Trending-in-the-USA-2-ruho3sfs78r6ops6bj6krwbk689hxv7hnodapr37ds.jpg',
      desc: 'Discover tonal textures, vintage chainstitch looks, and tactile 3D puff taking over US retail fashion.'
    },
    {
      title: 'The Ultimate Guide to Clean 3D Foam Puff Caps',
      tag: 'Headwear Secrets',
      date: 'September 10, 2026 • 5 min read',
      image: 'https://newleafskills.com/wp-content/uploads/elementor/thumbs/3D-Puff-vs-Flat-Embroidery-rt6zi6spkymh2nqf6ds8q9kvuwydkm1msjyjj1eza8.jpg',
      desc: 'Discover density settings and corner-capping tactics to ensure your foam cuts clean without exposing messy threads.'
    }
  ];

  return (
    <section id="blog" className="px-4 sm:px-8 lg:px-20 py-12 lg:py-16 bg-gradient-to-b from-[#064e3b] via-[#022c22] to-[#064e3b] border-b border-emerald-900 shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-block">
              <span className="text-emerald-300 font-extrabold text-[11px] uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-600/60 shadow-sm">
                Industry Insights &amp; Guides
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Latest Embroidery &amp; Digitizing Tips
            </h2>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              Explore expert advice, pull compensation techniques, and machine embroidery secrets from our veteran studio.
            </p>
          </div>

          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow-lg shadow-emerald-500/25 whitespace-nowrap"
            >
              <span>Explore All 20+ Articles</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-emerald-700/60 overflow-hidden shadow-2xl flex flex-col justify-between transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.5)] group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-lg shadow">
                    {blog.tag}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-[11px] text-emerald-400 font-semibold">{blog.date}</div>
                  <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                    <Link href="/blog">
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {blog.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-400 group-hover:text-emerald-300 transition">
                  Read Full Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
