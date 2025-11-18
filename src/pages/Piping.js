import React, { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_3.webp";

/* ── Framer‑motion variants ────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const imageHover = {
  hover: { scale: 1.03, transition: { duration: 0.5, ease: "easeInOut" } },
};

/* ── helper: lazy‑load <img> (native + IO fallback) ── */
const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("loading" in HTMLImageElement.prototype) {
      setReady(true); // modern browsers handle lazy‑loading natively
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

/* ── main component ───────────────────────────────── */
const Piping = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-white to-[#dceffe] px-6 py-24 overflow-hidden font-urbanist">
    {/* background blobs */}
    <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#4c6b9e] opacity-20 blur-[120px] rounded-full -z-10" />
    <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#1e325c] opacity-20 blur-[120px] rounded-full -z-10" />

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-[#4c6b9e] font-semibold text-3xl md:text-5xl mb-8"
    >
      Piping Design & Engineering
    </motion.h2>

    {/* Card */}
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-7xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-blue-200 bg-white/90 backdrop-blur-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition duration-300"
    >
      {/* Image */}
      <motion.div className="h-full w-full" variants={imageHover} whileHover="hover">
        <LazyImage
          src={aboutImg}
          alt="Piping Engineering"
          className="w-full h-full object-cover object-center transition-transform duration-500"
        />
      </motion.div>

      {/* Text */}
      <div className="p-8 md:p-12 overflow-y-auto bg-white/90">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1e325c] mb-6">
          Our Expertise in Piping & Gas Engineering
        </h3>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.6 },
            },
          }}
          className="text-gray-800 text-base md:text-lg font-medium list-disc list-inside space-y-4 leading-relaxed"
        >
          <li>Plot plans, PFDs, P&IDs for oil & gas facilities</li>
          <li>Piping layout, 3‑D modelling, plant‑wide routing</li>
          <li>Material selection &amp; thickness (ASME B31.3/4)</li>
          <li>Stress analysis (static, dynamic, surge, thermal)</li>
          <li>Buried, above‑ground &amp; offshore pipeline design</li>
          <li>Supports: anchors, guides, hangers, springs</li>
          <li>Fabrication isometrics, spool drawings, erection plans</li>
          <li>Field weld mapping &amp; redline drafting</li>
          <li>MTO, BOM, MR, TBE &amp; procurement docs</li>
          <li>Vendor data review for valves &amp; specialty items</li>
          <li>Hydrotest loop planning &amp; test packs</li>
          <li>Gas compression station piping, riser design</li>
          <li>API 5L, ASME B31.8, ISO 14692 compliance</li>
          <li>Skid‑mounted process piping, modular packages</li>
          <li>Laser‑scanned point‑cloud integration</li>
          <li>SmartPlant / E3D / Plant 3D intelligent modelling</li>
        </motion.ul>
      </div>
    </motion.div>
  </section>
);

export default memo(Piping);
