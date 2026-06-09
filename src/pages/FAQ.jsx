export default function FAQ() {
  const faqs = [
    {
      q: "What is alternative history research?",
      a: "It involves looking into architectural anomalies, historical mapping inconsistencies, and architectural artifacts left unanswered by mainstream documentation."
    },
    {
      q: "How often are the database registry logs updated?",
      a: "Field logs and GIS mapping datasets are reviewed weekly. Premium syndicate members receive instant notifications on new archival entries."
    },
    {
      q: "Can I submit localized structural anomaly photos?",
      a: "Yes! We encourage crowd-sourced research. Anyone can submit high-res coordinates and structural audit images through our main contact node."
    },
    {
      q: "What exactly was Tartaria?",
      a: "Geographically noted on early maps as a vast northern territory, our objective is to isolate authentic regional artifacts from digital lore using empirical cartography."
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-amber-400 font-semibold tracking-wide uppercase">Information Node</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-lg text-slate-400">
            Clear responses regarding our open-source datasets, analytical structures, and membership terms.
          </p>
        </div>

        {/* FAQ Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl shadow-md hover:border-slate-700/80 transition-all">
              <div className="flex gap-4">
                <span className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                  Q
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-200 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}