import React from "react";
import "../styles/backgrounds.css";

const About: React.FC = () => {
  return (
    <section className="bg-about min-h-screen flex flex-col justify-center items-center px-6 py-20 text-white">
      <div className="bg-black/40 w-full py-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-ocean mb-6">About TerraVerge Solutions</h1>
          <p className="text-lg mb-6 leading-relaxed">
            TerraVerge Solutions is a Kenyan-based geospatial technology and environmental analytics company focused on building practical tools that bridge science and decision-making.
          </p>
          <div className="bg-white/5 p-6 rounded-2xl inline-block text-left">
            <h2 className="text-2xl font-semibold text-ocean mb-2">Our Vision</h2>
            <p>To be Africa’s trusted hub for applied Earth Observation and climate technology solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
