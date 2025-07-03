import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/contact_bg.mp4";

export default function ContactFormOverlay() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-poppins">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with Form */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 px-4">
        <motion.form
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-[#1e325c] tracking-tight">
            Get in Touch
          </h2>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all resize-none"
              placeholder="Your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
