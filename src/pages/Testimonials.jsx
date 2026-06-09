export default function Testimonials() {
  const reviews = [
    {
      quote: "The Star Fort dataset completely reframed my research on European bastions. The architectural overlays are mathematically flawless.",
      author: "Dr. Elena Rostova",
      role: "Architectural Historian",
      initials: "ER",
      border: "border-blue-500/20"
    },
    {
      quote: "Finding high-resolution maps of Tartaria with consistent geographical coordinates has always been a challenge. This archive solved it.",
      author: "Marcus Vance",
      role: "Independent Cartographer",
      initials: "MV",
      border: "border-emerald-500/20"
    },
    {
      quote: "The documentation on late 19th-century world expositions provides critical structural context that mainstream textbooks completely skip.",
      author: "Julian Ames",
      role: "Digital Archeologist",
      initials: "JA",
      border: "border-indigo-500/20"
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Community Trust</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Peer Reviews & Feedback
          </p>
          <p className="mt-4 text-lg text-slate-400">
            Read what global analysts, independent researchers, and historians say about our open-access registry logs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className={`bg-slate-900 border ${rev.border} p-8 rounded-2xl shadow-xl relative flex flex-col justify-between group hover:border-slate-700 transition-all`}>
              
              {/* Quote Mark Graphic */}
              <div className="absolute top-6 right-8 text-6xl text-slate-800 font-serif pointer-events-none select-none group-hover:text-slate-700 transition-colors">
                “
              </div>

              <p className="text-slate-300 text-sm leading-relaxed italic z-10 mb-8">
                "{rev.quote}"
              </p>

              {/* User Identity Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shadow-inner">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-200">{rev.author}</h4>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}