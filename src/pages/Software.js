import React, { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";

import autodesk from "../assets/Autodesk.webp";
import fathom from "../assets/fathom.png";
import mathcad from "../assets/mathcad.webp";
import solidworks from "../assets/solidworks.png";
import SDS2 from "../assets/SDS2.png";
import Aspen from "../assets/Aspen.png";
import Ideastatica from "../assets/Idea.png";
import Risa from "../assets/RISA.png";
import Tekla from "../assets/tekla.webp";

const companies = [
  { name: "Autodesk", logo: autodesk },
  { name: "Tekla", logo: Tekla },
  { name:"SDS2", logo:SDS2},
  { name:"Ideastatica", logo:Ideastatica},
  { name: "Aspen", logo: Aspen },
  { name: "Fathom", logo: fathom },
  { name: "Mathcad", logo: mathcad },
  { name: "SolidWorks", logo: solidworks },
  { name: "Risa", logo: Risa },
];

/* ── motion variants ─────────────────────────── */
const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
  }),
};

/* ── helper: lazy‑load <img> (native + IO fallback) ── */
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

/* ── main component ───────────────────────────── */
const CompaniesUsingTools = () => (
  <motion.section
    className="relative bg-gradient-to-br from-[#f5f7fa] via-[#e4ebf3] to-[#d9e1ec] py-24 px-6 overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* decorative blobs */}
    <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#ead57b] opacity-20 blur-[120px] rounded-full -z-10" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#4c6b9e] opacity-20 blur-[120px] rounded-full -z-10" />

    {/* heading */}
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e325c] mb-3 tracking-tight">
        Software Tools We Use
      </h2>
      <motion.div
        className="h-1 bg-[#ead57b] w-16 mx-auto rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "64px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      />
      <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4">
        Leveraging industry‑leading platforms to ensure precision and performance.
      </p>
    </div>

    {/* grid */}
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
      {companies.map((tool, i) => (
        <motion.div
          key={tool.name}
          className="bg-white/60 backdrop-blur-lg shadow-lg rounded-3xl border border-[#cfd8e3] p-6 w-40 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          whileHover={{
            scale: 1.1,
            rotate: 1,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <LazyImage
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="h-16 object-contain mb-3"
          />
          <p className="text-[#1e325c] font-semibold text-sm text-center">
            {tool.name}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default memo(CompaniesUsingTools);
