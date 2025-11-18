import React, { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_2.webp";

/* ── motion variants ────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const imageHover = {
  hover: { scale: 1.03, transition: { duration: 0.6, ease: "easeInOut" } },
};

/* ── helper: lazy‑load <img> with IO fallback ───────────────── */
const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("loading" in HTMLImageElement.prototype) {
      setReady(true);
      return;
    }
    const node = imgRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry], ob) => {
        if (entry.isIntersecting) {
          setReady(true);
          ob.disconnect();
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
      loading="lazy"
      alt={alt}
      className={className}
    />
  );
};

/* ── main component ─────────────────────────────────────────── */
const Processing = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-white to-[#e6ecf4] px-4 py-28 overflow-hidden font-urbanist">
    {/* Decorative blobs */}
    <div className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-[#4c6b9e] opacity-20 blur-[120px] rounded-full -z-10" />
    <div className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-[#ead57b] opacity-20 blur-[120px] rounded-full -z-10" />

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-[#4c6b9e] font-semibold text-3xl md:text-5xl mb-8"
    >
      Mechanical Engineering
    </motion.h2>

    {/* Card */}
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl w-full rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 backdrop-blur-md bg-white/90 border border-blue-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition duration-300"
    >
      {/* Image */}
      <motion.div className="w-full h-full overflow-hidden" variants={imageHover} whileHover="hover">
        <LazyImage
          src={aboutImg}
          alt="Mechanical Engineering hero"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out"
        />
      </motion.div>

      {/* Copy */}
      <div className="p-8 md:p-12 overflow-y-auto bg-white">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1e325c] mb-6">
          Our Core Expertise in Oil, Gas &amp; Pipeline
        </h3>
        <ul className="text-gray-700 text-base md:text-lg font-medium list-disc list-inside space-y-4 leading-relaxed">
          <li>Storage tank design compliant with API 650</li>
          <li>Pressure vessel design (ASME VIII‑1 & VIII‑2)</li>
          <li>Nozzle‑load calculations (WRC 107/297)</li>
          <li>Finite Element Analysis for components</li>
          <li>Thermal‑stress &amp; expansion‑joint checks</li>
          <li>Seismic / wind compliance (onshore &amp; offshore)</li>
          <li>Rotating equipment: pumps, compressors, turbines</li>
          <li>Static equipment: exchangers, separators, scrubbers</li>
          <li>Piping stress via CAESAR II (incl. buried lines)</li>
          <li>Pipeline routing, thickness &amp; materials (B31.3 / B31.4 / B31.8)</li>
          <li>Supports, anchors &amp; expansion‑loop design</li>
          <li>Surge / slug‑flow analysis in long pipelines</li>
          <li>3‑D modelling (Plant 3D / SolidWorks)</li>
          <li>Fabrication drawings &amp; isometric extraction</li>
          <li>Integrity management (RBI / FMEA)</li>
          <li>Skid‑package design for modular units</li>
          <li>Offshore equipment supports &amp; risers</li>
          <li>Mechanical datasheets &amp; MTOs for procurement</li>
        </ul>
      </div>
    </motion.div>
  </section>
);

export default memo(Processing);
