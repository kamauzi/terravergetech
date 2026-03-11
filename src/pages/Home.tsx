import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ added this import
import "../styles/backgrounds.css";

const Home: React.FC = () => {
  return (
    <section className="bg-hero text-white min-h-screen flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Building Geospatial Products for Coastal Resilience
        </h1>
        <p className="text-lg text-gray-100 max-w-3xl mx-auto">
          At TerraVerge Solutions we develop data-driven products making satellite data useful
          for communities and decision makers.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          {/* ⬇️ replaced <a href> with <Link to> */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-sand text-ocean px-5 py-3 rounded-full font-semibold"
          >
            Explore Products <ArrowRight size={16} />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-white/80 text-white px-5 py-3 rounded-full"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
