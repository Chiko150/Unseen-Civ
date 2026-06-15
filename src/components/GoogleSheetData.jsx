import { useEffect, useState } from 'react';

export default function GoogleSheetData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Backend se data fetch karne ka function
  const fetchData = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/data")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data); // Backend se jo JSON aa raha hai
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-2xl my-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white tracking-wide">Team Status</h2>
        
        <div className="flex gap-4">
          {/* Ye raha aapka Analytics Button */}
          <a 
            href={`https://docs.google.com/spreadsheets/d/${import.meta.env.VITE_SHEET_ID}/edit`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-lg transition-all"
          >
            View Data Analytics
          </a>
          
          {/* Refresh Button */}
          <button 
            onClick={fetchData}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all"
          >
            {loading ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-indigo-400 text-xs uppercase tracking-[0.2em] border-b border-indigo-500/30">
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Role</th>
              <th className="py-4 px-6 text-center">Status</th>
              <th className="py-4 px-6 text-right">Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4" className="text-center py-10 text-slate-400">Loading data from backend...</td></tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="border-b border-indigo-500/5 hover:bg-white/5 transition-colors">
                  <td className="py-5 px-6 font-medium text-slate-200">{item.Name}</td>
                  <td className="py-5 px-6 text-slate-400">{item.Role}</td>
                  <td className="py-5 px-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.Status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700/50 text-slate-400'}`}>
                      {item.Status}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right text-slate-500">{item["Last Seen"]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}