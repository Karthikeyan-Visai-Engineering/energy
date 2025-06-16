import React from "react";
import bg from "../assets/contact_bg.mp4";

export default function ContactFormOverlay() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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

      {/* Overlay Contact Form */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
        <form className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
