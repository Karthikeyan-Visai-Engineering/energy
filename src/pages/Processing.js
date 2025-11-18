// src/pages/Processing.js
import React, { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import processingImage from "../assets/process2.webp";

/* ── motion variants ────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const imageHover = {
  hover: { scale: 1.03, transition: { duration: 0.6, ease: "easeInOut" } },
};

/* ── Lazy Image Loader ───────────────────────────────────────── */
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

/* ── Processing Engineering Component ────────────────────────── */
const points = [
  "Process Flow Diagrams & heat-mass balances",
  "P&IDs for piping / control systems",
  "Hydraulic & pressure-drop calculations",
  "Process simulation (Aspen HYSYS / UniSim)",
  "Flare system & venting studies",
  "Surge / slug analysis in multiphase lines",
  "Control-system architecture: PLC, DCS, SCADA",
  "FPSO & on-shore module layout design",
  "HAZOP, SIL, QRA facilitation",
  "Energy-recovery / emission-reduction schemes",
  "Material selection & corrosion mitigation (NACE MR0175)",
  "Equipment sizing: separators, exchangers, scrubbers",
  "Utility systems: fuel gas, steam, nitrogen, air",
  "Interface engineering with mech/piping/structural teams",
  "Process datasheets & technical requisitions",
];

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
      Processing Engineering
    </motion.h2>

    {/* Card container */}
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
          src={processingImage}
          alt="Processing Engineering"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out"
        />
      </motion.div>

      {/* Text Content */}
      <div className="p-8 md:p-12 bg-white overflow-y-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1e325c] mb-6">
          Advanced Process Engineering Solutions
        </h3>

        <ul className="text-gray-700 text-base md:text-lg font-medium list-disc list-inside space-y-4 leading-relaxed">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  </section>
);

export default memo(Processing);
