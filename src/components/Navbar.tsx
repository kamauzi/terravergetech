import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-ocean">TerraVerge Solutions</Link>

        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path}
              className={`transition ${location.pathname === link.path ? "text-ocean font-semibold" : "text-gray-700 hover:text-ocean"}`}>
              {link.name}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setOpen(false)} className="block px-6 py-3 border-b hover:bg-gray-100">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
