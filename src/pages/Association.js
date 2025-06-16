import React from "react";
import { motion } from "framer-motion";

// Import your images here
import apegaLogo from "../assets/ape.png";
import egbcLogo from "../assets/eg.png";
import wcbLogo from "../assets/wcb.png";
import pmiLogo from "../assets/pmi.png";
import arrisLogo from "../assets/arris.png";
import aiscLogo from "../assets/aisc.png";
import complyworksLogo from "../assets/complyworks.png";

const logos = [
  { src: apegaLogo, alt: "APEGA" },
  { src: egbcLogo, alt: "EGBC" },
  { src: wcbLogo, alt: "WCB" },
  { src: pmiLogo, alt: "PMI" },
  { src: arrisLogo, alt: "Arris" },
  { src: aiscLogo, alt: "AISC" },
  { src:complyworksLogo , alt: "COMPLYWORKSLOGO" },
];

export default function AffiliationsSection() {
  return (
    <section className="pt-32 pb-12 bg-gray-50 border-t  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold font-inter text-gray-900 mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Associations
        </motion.h2>

        {/* Sliding Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-20 whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-transparent  rounded-xl min-w-[180px] h-[140px] flex justify-center items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain h-[150px] w-auto duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}
