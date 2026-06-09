import { memo } from 'react';

// Card component ko memoize kiya taake list render super-fast ho
const BlogCard = memo(({ post }) => {
  return (
    <div className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl group hover:border-slate-700 transition-all duration-300 flex flex-col">
      {/* Optimized Production-Safe Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-md backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs text-slate-500 font-medium">{post.date}</span>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors mt-2 mb-3 leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            {post.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
          <span className="font-medium">By {post.author}</span>
          <span className="text-indigo-400 font-semibold cursor-pointer hover:underline flex items-center gap-1">
            Read Intel &rarr;
          </span>
        </div>
      </div>
    </div>
  );
});

BlogCard.displayName = 'BlogCard';

export default function Blog() {
  // Static Dataset with High-Quality Unsplash Alternatve History Mock Imagery
  const blogPosts = [
    {
      id: 1,
      title: "The Erased Empires: Mapping Tartaria's True Borders",
      excerpt: "Analyzing cartographic shifts and forgotten sovereign crests hidden deep within 17th-century East Asian archival records.",
      category: "Timeline Research",
      date: "June 08, 2026",
      author: "H. Javed",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Demolished Splendors of the late 1800s World Fairs",
      excerpt: "Forensic analysis of mega-structure construction speeds. Were these temporary pavilions, or remnants of a grander civilization?",
      category: "Architectural Audit",
      date: "May 24, 2026",
      author: "M. Vance",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Subterranean Anomalies Below Modern Capital Infrastructure",
      excerpt: "Ground-penetrating radar scans revealing uniform mud-flooded brick windows stretching three levels beneath municipal streets.",
      category: "Forensic Scanning",
      date: "May 11, 2026",
      author: "E. Rostova",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    // Fixed padding-top (pt-28) to prevent navbar overlapping bugs smoothly
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optimized Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Research Journal</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Latest Analytical Articles
          </p>
          <p className="mt-4 text-base text-slate-400">
            Read our latest investigative reports, blueprint assessments, and updates directly from the open-source history community.
          </p>
        </div>

        {/* Optimized Grid Output */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </div>
  );
}