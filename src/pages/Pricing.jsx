export default function Pricing() {
  const plans = [
    {
      name: 'Open Archive',
      price: 'Free',
      desc: 'Access to public data logs and baseline mapping coordinates.',
      features: ['Standard Chart Access', 'Public Community Forums', 'Verified Document Logs'],
      buttonText: 'Start Exploring',
      popular: false
    },
    {
      name: 'Field Analyst',
      price: '$29',
      desc: 'Advanced structural audits and radar anomaly registry tools.',
      features: ['Sub-surface Scanning Files', 'Geographical GIS Overlays', 'Priority Data Requests', 'Private Slack Channels'],
      buttonText: 'Upgrade to Analyst',
      popular: true
    },
    {
      name: 'Core Syndicate',
      price: '$99',
      desc: 'Full repository downloads and custom localized deep-dives.',
      features: ['All Tier 2 Features', 'High-Res Map Downloads', 'API Access to Data Node', 'Direct Analyst Consultation'],
      buttonText: 'Join the Syndicate',
      popular: false
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Subscription</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Access Registry Plans
          </p>
          <p className="mt-4 text-lg text-slate-400">
            Choose the membership tier that fits your investigative scale. Support independent history archiving.
          </p>
        </div>

        {/* Pricing Layout Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-900 border ${
                plan.popular ? 'border-blue-500 shadow-blue-500/10' : 'border-slate-800/80'
              } p-8 rounded-2xl shadow-xl flex flex-col justify-between relative group hover:border-slate-700 transition-all`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 mb-6 min-h-[32px]">{plan.desc}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  {plan.price !== 'Free' && <span className="text-xs text-slate-500">/ month</span>}
                </div>

                <ul className="space-y-4 border-t border-slate-800/60 pt-6 mb-8 text-sm text-slate-300">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <span className="text-emerald-400 font-bold text-xs">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/10' 
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-900'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}