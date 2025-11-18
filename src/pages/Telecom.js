import React, { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_9.webp";

/* ── framer variants ───────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const imageHover = {
  hover: { scale: 1.03, transition: { duration: 0.6, ease: "easeInOut" } },
};

/* ── helper: lazy‑load <img> (native + IO fallback) ── */
const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Modern browsers support native lazy‑loading
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

/* ── main component ─────────────────────────────── */
const Telecom = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#dbeafe] via-white to-[#e0f2fe] px-6 py-28 overflow-hidden font-urbanist">
    {/* decorative blobs */}
    <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-[#3b82f6] opacity-20 blur-[100px] rounded-full -z-10" />
    <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#1e40af] opacity-20 blur-[100px] rounded-full -z-10" />

    {/* heading */}
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-[#4c6b9e] font-semibold text-3xl md:text-5xl mb-8"
    >
      Telecom Engineering
    </motion.h2>

    {/* card */}
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-7xl grid md:grid-cols-2 bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-blue-200 transition-transform duration-300 hover:scale-[1.01]"
    >
      {/* image */}
      <motion.div className="h-full w-full" variants={imageHover} whileHover="hover">
        <LazyImage
          src={aboutImg}
          alt="Telecom Engineering"
          className="w-full h-full object-cover object-center transition-transform duration-500"
        />
      </motion.div>

      {/* copy */}
      <div className="p-8 md:p-12 bg-white/80">
        <motion.p
          className="text-[#1e325c] text-lg md:text-xl font-medium leading-relaxed mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
          }}
        >
          <strong className="text-[#2563eb] font-semibold">Telecom Engineering</strong> is the backbone of digital connectivity in oil & gas, power, infrastructure, and smart industries. From wired to wireless systems, our services ensure uninterrupted communication, safety compliance, and SCADA‑ready integration across remote and urban assets.
        </motion.p>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
          }}
          className="text-[#1e325c] text-base md:text-lg font-light list-disc list-inside space-y-4 leading-relaxed"
        >
          <li>LAN/WAN network architecture</li>
          <li>Integration with control systems (DCS/PLC/RTU)</li>
          <li>Fiber‑optic &amp; copper cabling, OTDR testing</li>
          <li>Structured cabling for IP telephony &amp; data centers</li>
          <li>CCTV, access control, fire &amp; intrusion systems</li>
          <li>Radio &amp; microwave tower design</li>
          <li>Equipment rack layouts, grounding &amp; lightning protection</li>
          <li>Telecom rooms and cabinet configuration</li>
          <li>Redundancy planning &amp; SLA‑level availability</li>
          <li>Switch/router/firewall setup (Cisco, Juniper)</li>
          <li>FAT / SAT &amp; commissioning procedures</li>
          <li>MTO, BOM &amp; vendor data reviews</li>
          <li>Compliance with IEC, TIA/EIA &amp; client specs</li>
        </motion.ul>
      </div>
    </motion.div>
  </section>
);

export default memo(Telecom);
