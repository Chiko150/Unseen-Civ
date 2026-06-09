import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  // Yeh dataset aapka source of truth hai
  const projects = [
    { title: "The Star Fort Mapping Project", category: "Geographical Analytics", status: "COMPLETED" },
    { title: "Mud Flood Structural Audits", category: "Architectural Forensic", status: "IN PROGRESS" },
    { title: "Tartarian Chronology Mapping", category: "Timeline Reconstruction", status: "ARCHIVED" },
    { title: "Lost City Exposition Layouts", category: "Urban Archaeology", status: "NEW" }
  ];

  // Robust Filtering Logic: Case-insensitive match
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-semibold uppercase tracking-widest text-sm">Case Studies</h2>
          <h1 className="text-5xl font-bold mt-2">Investigative Registry & Archives</h1>
        </div>

        {/* Filter Buttons: Buttons ka naam exact category name jaisa rakha hai */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Geographical Analytics', 'Architectural Forensic', 'Timeline Reconstruction', 'Urban Archaeology'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === f 
                  ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-900/20' 
                  : 'bg-transparent border-slate-700 hover:border-slate-500'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={index} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold mt-3 mb-4">{project.title}</h3>
                <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold ${
                    project.status === 'COMPLETED' ? 'bg-emerald-900/30 text-emerald-400' : 
                    project.status === 'IN PROGRESS' ? 'bg-amber-900/30 text-amber-400' : 'bg-slate-800 text-slate-300'
                }`}>
                  {project.status}
                </span>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-500">
              No registry records found for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;