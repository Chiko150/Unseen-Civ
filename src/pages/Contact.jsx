export default function Contact() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Secure Node</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Connect With Our Analytics Team
          </p>
          <p className="mt-4 text-lg text-slate-400">
            Have a structural anomaly report, rare map archive, or an independent case study? Establish a transmission.
          </p>
        </div>

        {/* Dual-Column Structural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Columns: Contact Meta Info Cards (2/5 width) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-slate-200 mb-2">Central Inquiries</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our indexing team filters entries globally. For secure asset shipping or specific grid telemetry data, please use verified endpoints.
            </p>

            <div className="space-y-4 pt-4">
              {/* Node 1 */}
              <div className="p-5 bg-slate-900 border border-slate-800/80 rounded-2xl flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-lg shadow-inner">
                  📬
                </span>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Secure Vault Email</h4>
                  <p className="text-sm font-medium text-slate-300 mt-0.5">registry@unseenciv.internal</p>
                </div>
              </div>

              {/* Node 2 */}
              <div className="p-5 bg-slate-900 border border-slate-800/80 rounded-2xl flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg shadow-inner">
                  🌐
                </span>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Archival Headquarters</h4>
                  <p className="text-sm font-medium text-slate-300 mt-0.5">Rahim Yar Khan, Punjab, PK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns: Secure Transmission Form (3/5 width) */}
          <div className="lg:col-span-3 bg-slate-900 border border-slate-800/80 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Researcher Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., Hamza" 
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Communication Return
                  </label>
                  <input 
                    type="email" 
                    placeholder="name@domain.com" 
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Investigation Subject
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Sub-surface sediment window level anomalies" 
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Archival Telemetry / Message Brief
                </label>
                <textarea 
                  rows="4" 
                  placeholder="Describe structural observations or request access clearance details..." 
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all shadow-inner resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-widest uppercase rounded-xl transition-all shadow-lg shadow-indigo-600/10"
              >
                Transmit Registry Request
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}