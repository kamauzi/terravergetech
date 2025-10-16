import React from "react";
import "../styles/backgrounds.css";

const Contact: React.FC = () => {
  return (
    <section className="bg-contact min-h-screen px-6 py-20 text-white">
      <div className="bg-black/60 w-full py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
          <p className="text-center text-gray-200 mb-8">Reach out for demos, partnerships, or consulting.</p>

          <form action="https://formspree.io/f/xpwykbyv" method="POST" className="bg-white/90 text-gray-800 p-8 rounded-2xl shadow-md space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input id="name" name="name" required className="w-full border rounded-lg p-3" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input id="email" name="email" type="email" required className="w-full border rounded-lg p-3" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full border rounded-lg p-3"></textarea>
            </div>
            <button type="submit" className="w-full bg-ocean text-white py-3 rounded-lg font-semibold">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
