import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import bg from "../assets/contact_bg.jpg";

export default function ContactFormOverlay() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSending(true);

    emailjs
      .sendForm(
        "service_jw9mh2v",   // ✅ Your EmailJS Service ID
        "template_xvzi2sk",  // ✅ Your EmailJS Template ID
        form.current,
        "bj_p7KVGRZMseGW4i"  // ✅ Your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Failed:", error.text || error.message || error);
          setStatus(`❌ Failed: ${error.text || error.message || "Unknown error"}`);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-poppins">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Form Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 px-4">
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-[#1e325c] tracking-tight">
            Get in Touch
          </h2>

          {/* Name */}
          <input
            type="text"
            name="name"        // ✅ Matches {{name}}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 mb-3"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"       // ✅ Matches {{email}}
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 mb-3"
            required
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"       // ✅ Matches {{phone}}
            placeholder="Your Phone"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 mb-3"
            required
          />

          {/* Message */}
          <textarea
            name="message"     // ✅ Matches {{message}}
            rows="4"
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-xl border border-gray-300 resize-none mb-3"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className={`w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md ${
              isSending ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          <p className="text-center text-sm mt-2">{status}</p>
        </motion.form>
      </div>
    </div>
  );
}
