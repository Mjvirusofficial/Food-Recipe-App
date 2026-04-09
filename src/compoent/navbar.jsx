import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white-900 text-black px-6 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">FoodApp</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-gray-800 p-4 rounded">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/food" onClick={() => setOpen(false)}>Food</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;