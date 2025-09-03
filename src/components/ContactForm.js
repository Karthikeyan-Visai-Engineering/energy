import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/contact_bg.mp4";

export default function ContactFormOverlay() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/.netlify/functions/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setStatus("❌ Failed to send. Check logs.");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-poppins">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={bg} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 px-4">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-[#1e325c] tracking-tight">
            Get in Touch
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 resize-none"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md"
          >
            Send Message
          </button>
          <p className="text-center text-sm mt-2">{status}</p>
        </motion.form>
      </div>
    </div>
  );
}
