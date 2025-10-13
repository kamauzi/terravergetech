import React from "react";
import "../styles/backgrounds.css";

const Services: React.FC = () => {
  return (
    <section className="bg-services min-h-screen px-6 py-20 text-white">
      <div className="bg-black/40 w-full py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-center text-gray-200 max-w-3xl mx-auto mb-8">We provide tailored geospatial services that convert satellite data into actionable insights.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-ocean mb-2">Custom Dashboards</h3>
              <p className="text-gray-200">Interactive dashboards for decision-makers, responders, and communities.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-ocean mb-2">Analytics & Reports</h3>
              <p className="text-gray-200">Technical analyses, hazard mapping, and impact assessments.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-ocean mb-2">Capacity Building</h3>
              <p className="text-gray-200">Workshops and training to build local data capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
