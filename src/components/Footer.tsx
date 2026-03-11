import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-ocean text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p className="flex items-center gap-2"><Mail size={16} /> info@terravergesolutions.com</p>
          <p className="flex items-center gap-2"><Phone size={16} /> +254113373969</p>
          <p className="flex items-center gap-2"><MapPin size={16} /> Mombasa, Kenya</p>
        </div>
        <div className="md:col-span-2 text-right">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} TerraVerge Solutions — Empowering communities with data.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
