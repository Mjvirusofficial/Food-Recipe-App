import React, { useState } from 'react'; // 1. useState import kiya
import { Link } from 'react-router-dom';

const Navbar = () => {
  // 2. Mobile menu open/close handle karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/70 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-2">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-orange-200">
            F
          </div>
          <span className="text-2xl font-black tracking-tighter text-orange-600">
            FOOD<span className="text-gray-900">APP.</span>
          </span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden space-x-8 md:flex">
          <Link to="/" className="text-sm font-semibold text-gray-700 transition-colors hover:text-orange-600 uppercase tracking-wide">Home</Link>
          <Link to="/category" className="text-sm font-semibold text-gray-700 transition-colors hover:text-orange-600 uppercase tracking-wide">Category</Link>
          <Link to="/about" className="text-sm font-semibold text-gray-700 transition-colors hover:text-orange-600 uppercase tracking-wide">About Us</Link>
          <Link to="/contact" className="text-sm font-semibold text-gray-700 transition-colors hover:text-orange-600 uppercase tracking-wide">Contact Us</Link>
        </div>

        {/* Mobile Menu Button (Visible only on Mobile) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-900 focus:outline-none p-2"
          >
            {/* Toggle Icon (Hamburger / Close) */}
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Animated) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-4 px-6 pb-6 pt-2 bg-white/90 border-t border-gray-100">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-orange-600 uppercase">Home</Link>
          <Link to="/category" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-orange-600 uppercase">Category</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-orange-600 uppercase">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-orange-600 uppercase">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
