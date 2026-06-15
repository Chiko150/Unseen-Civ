import { useEffect, useState } from 'react';

export default function GoogleSheetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const SHEET_ID = import.meta.env.VITE_SHEET_ID;
    // URL to fetch as CSV
    const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

    fetch(SHEET_CSV_URL)
      .then(response => response.text())
      .then(csvText => {
        // Splitting by newline and mapping each row, removing quotes from values
        const rows = csvText.split('\n').map(row => 
          row.split(',').map(cell => cell.replace(/"/g, ''))
        );
        setData(rows);
      })
      .catch(err => console.error("Error fetching sheet data:", err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-2xl my-10">
      <h2 className="text-3xl font-bold text-white mb-4 text-center tracking-wide">Team Status</h2>
      
      {/* Analysis Link Button */}
      <div className="mb-8 text-center">
        <a 
          href={`https://docs.google.com/spreadsheets/d/${import.meta.env.VITE_SHEET_ID}/edit`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all"
        >
          View & Analyze in Google Sheets
        </a>
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
            {data.slice(1).map((row, index) => (
              <tr key={index} className="border-b border-indigo-500/5 hover:bg-white/5 transition-colors">
                <td className="py-5 px-6 font-medium text-slate-200">{row[0]}</td>
                <td className="py-5 px-6 text-slate-400">{row[1]}</td>
                <td className="py-5 px-6 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${row[2]?.trim() === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700/50 text-slate-400'}`}>
                    {row[2]}
                  </span>
                </td>
                <td className="py-5 px-6 text-right text-slate-500">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}