import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Our Mission</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Who We Are & What We Uncover
          </p>
          <p className="mt-4 text-lg text-slate-400">
            We are dedicated to exploring the lost lines of architecture, forgotten chronicles, and historical alternative narratives.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Stats/Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-400">10k+</div>
              <div className="text-sm text-slate-400 mt-2">Active Researchers</div>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-emerald-400">500+</div>
              <div className="text-sm text-slate-400 mt-2">Historical Anomalies</div>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-indigo-400">24/7</div>
              <div className="text-sm text-slate-400 mt-2">Archive Tracking</div>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-amber-400">99%</div>
              <div className="text-sm text-slate-400 mt-2">Alternative Theories</div>
            </div>
          </div>

          {/* Right Side: Text Narrative */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-200">Decoding the Mud Floods and Erased Timelines</h3>
            <p className="text-slate-400 leading-relaxed">
              Our project stems from a passion for structural anomalies that conventional history texts often leave unanswered. From grand architecture to forgotten tech, we aim to document everything.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Through collaborative data aggregation and visual proof analysis, we establish a portal for those who look past mainstream answers.
            </p>
            <div className="pt-4">
              <Link to="/services" className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-lg text-sm font-medium transition-all shadow-md shadow-indigo-500/10">
                View Our Services &rarr;
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}