import React from "react";
import { motion } from "framer-motion";

// Image imports
import apegaLogo from "../assets/ape.png";
import egbcLogo from "../assets/eg.png";
import wcbLogo from "../assets/wcb.png";
import pmiLogo from "../assets/pmi.png";
import aiscLogo from "../assets/aisc.png";
import complyworksLogo from "../assets/complyworks.png";

const logos = [
  { src: apegaLogo, alt: "APEGA" },
  { src: egbcLogo, alt: "EGBC" },
  { src: wcbLogo, alt: "WCB" },
  { src: pmiLogo, alt: "PMI" },
  { src: aiscLogo, alt: "AISC" },
  { src: complyworksLogo, alt: "COMPLYWORKS" },
];

export default function AffiliationsSection() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-14 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Associations
        </motion.h2>

        {/* Sliding Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-20 whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {logos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="min-w-[160px] h-[120px] flex items-center justify-center rounded-xl bg-white/80 shadow-md hover:shadow-xl transition duration-300 backdrop-blur-md border border-blue-100"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain h-[90px] w-auto"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
