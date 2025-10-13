import React from "react";
import "../styles/backgrounds.css";
import { CloudRain, Thermometer, Droplet, Map } from "lucide-react";

const products = [
  { icon: <CloudRain size={28} className="text-ocean"/>, title: "AquaFlood", subtitle: "Flood detection & alerts", desc: "Near-real-time flood mapping using Sentinel-1 SAR and automated processing." },
  { icon: <Thermometer size={28} className="text-ocean"/>, title: "UrbanHeat", subtitle: "Heat risk mapping", desc: "High-resolution surface temperature analysis to guide cooling interventions." },
  { icon: <Droplet size={28} className="text-ocean"/>, title: "AirSense", subtitle: "Air quality intelligence", desc: "Satellite-derived air quality indicators fused with ground-sensor data." },
  { icon: <Map size={28} className="text-ocean"/>, title: "GeoInsight Portal", subtitle: "Integrated web-GIS", desc: "Interactive maps and dashboards for planners and NGOs." }
];

const Products: React.FC = () => {
  return (
    <section className="bg-products min-h-screen px-6 py-20 text-white">
      <div className="bg-black/40 w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
          <p className="text-center text-gray-200 max-w-3xl mx-auto mb-8">Each product is built to translate satellite data into practical tools for communities and decision-makers.</p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <div key={p.title} className="bg-white/90 text-gray-800 rounded-2xl p-6 shadow hover:shadow-xl transition">
                <div className="flex justify-center mb-4">{p.icon}</div>
                <h3 className="text-xl font-semibold text-ocean mb-1 text-center">{p.title}</h3>
                <p className="text-sm text-gray-700 text-center">{p.subtitle}</p>
                <p className="mt-3 text-sm text-gray-700">{p.desc}</p>
                <div className="mt-4 text-right">
                  <a href="/contact" className="text-ocean font-medium">Request demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
