import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Unseen Civ
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
            <Link to="/about" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
            <Link to="/services" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
            <Link to="/portfolio" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</Link>
            <Link to="/testimonials" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</Link>
            <Link to="/blog" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
            <Link to="/pricing" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</Link>
            <Link to="/faq" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-blue-500/20">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}