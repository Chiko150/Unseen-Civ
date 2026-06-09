import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Discover Erased History
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
            Uncover the Mysteries of{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Unseen Civilizations
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0">
            Dive deep into alternative history, lost architectures, and ancient secrets. We explore the structural anomalies and stories that time forgot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <Link to="/portfolio" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all text-center">
              Explore Our Work
            </Link>
            <Link to="/about" className="border border-slate-700 hover:bg-slate-900 text-slate-300 px-6 py-3 rounded-lg text-sm font-semibold transition-all text-center">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Graphics/Placeholder */}
        <div className="flex-1 w-full max-w-md lg:max-w-none aspect-video lg:aspect-square bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 rounded-2xl shadow-2xl flex items-center justify-center p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full group-hover:bg-blue-500/10 transition-all"></div>
          <div className="text-center z-10">
            <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mx-auto text-2xl shadow-inner mb-4">
              🏛️
            </div>
            <h3 className="font-bold text-lg text-slate-200">Lost History Archives</h3>
            <p className="text-xs text-slate-500 mt-1">Interactive historical database visualization</p>
          </div>
        </div>

      </section>
    </div>
  );
}