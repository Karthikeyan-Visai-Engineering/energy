import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/* Images */
import apegaLogo from "../assets/ape.webp";
import egbcLogo from "../assets/eg.webp";
import wcbLogo from "../assets/wcb.webp";
import pmiLogo from "../assets/pmi.webp";
import aiscLogo from "../assets/aisc.webp";
import complyworksLogo from "../assets/complyworks.webp";
import isn from "../assets/ISN.png";
import cor from "../assets/COR.png"
import cisc from "../assets/CISC.png"


/* ——— helper ——— */
const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Modern browsers? let them handle it.
    if ("loading" in HTMLImageElement.prototype) {
      setReady(true);
      return;
    }

    // Fallback for old Safari / IE
    const node = imgRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={ready ? src : undefined}
      alt={alt}
      loading="lazy"
      className={className}
    />
  );
};

const logos = [
  { src: apegaLogo, alt: "APEGA" },
  { src: egbcLogo, alt: "EGBC" },
  { src: wcbLogo, alt: "WCB" },
  { src: pmiLogo, alt: "PMI" },
  { src: aiscLogo, alt: "AISC" },
  { src: complyworksLogo, alt: "COMPLYWORKS" },
  { src: cor, alt: "COR" },
  { src: isn, alt: "ISN" },
  { src: cisc, alt: "CISC" },

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

        {/* Scrolling marquee */}
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
            {logos.map(({ src, alt }, idx) => (
              <motion.div
                key={alt}
                className="min-w-[160px] h-[120px] flex items-center justify-center rounded-xl bg-white/80 shadow-md hover:shadow-xl transition duration-300 backdrop-blur-md border border-blue-100"
                whileHover={{ scale: 1.05 }}
              >
                {/* ⚡ logo now lazy‑loads */}
                <LazyImage
                  src={src}
                  alt={alt}
                  className="object-contain h-[90px] w-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
