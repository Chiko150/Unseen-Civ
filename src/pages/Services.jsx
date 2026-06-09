import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      icon: '🔍',
      title: 'Alternative History Research',
      desc: 'Deep-dive investigation into mud floods, ancient high-tech evidence, and timelines skipped by standard history textbooks.',
      color: 'border-blue-500/30 text-blue-400'
    },
    {
      icon: '📐',
      title: 'Architectural Data Analysis',
      desc: 'Decoding grand structure anomalies, star forts, and vintage world expositions that exhibit out-of-place builder technology.',
      color: 'border-emerald-500/30 text-emerald-400'
    },
    {
      icon: '📜',
      title: 'Archive Digitization',
      desc: 'Converting rare maps, historical records, and old-world newspaper clippings into searchable interactive digital assets.',
      color: 'border-indigo-500/30 text-indigo-400'
    },
    {
      icon: '🗺️',
      title: 'Cartography Reconstruction',
      desc: 'Re-mapping forgotten geographic boundaries and old empires like Tartaria to visualize historical territorial shifts.',
      color: 'border-amber-500/30 text-amber-400'
    },
    {
      icon: '🎥',
      title: 'Documentary Production',
      desc: 'Creating engaging video narratives and scripts for historical mysteries, maintaining premium visual and audio standards.',
      color: 'border-rose-500/30 text-rose-400'
    },
    {
      icon: '🌐',
      title: 'Global Community Forums',
      desc: 'Connecting thousands of local researchers to securely pool data, geographical coordinates, and image verifications.',
      color: 'border-purple-500/30 text-purple-400'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-emerald-400 font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Specialized Historical Research Services
          </p>
          <p className="mt-4 text-lg text-slate-400">
            We provide advanced methodologies and platforms to bring hidden truths and missing architectural timelines to light.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-xl mb-6 shadow-inner group-hover:scale-105 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{srv.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Service Active</span>
                <div className={`w-2 h-2 rounded-full bg-current ${srv.color.split(' ')[1]}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
          <h4 className="text-xl font-bold text-slate-200 mb-2">Need a Custom Deep-Dive Investigation?</h4>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">Connect with our primary analytics team to request document screening or localized archive checks.</p>
          <Link to="/contact" className="inline-flex bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-all shadow-md shadow-emerald-600/10">
            Initiate Consultation
          </Link>
        </div>

      </div>
    </div>
  );
}