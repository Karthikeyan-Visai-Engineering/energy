import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_5.webp";

/* ── Animations ── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

/* ── LazyImage Component ── */
const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
   
  useEffect(() => {
    // Use native loading if supported
    if ("loading" in HTMLImageElement.prototype) {
      setIsLoaded(true);
      return;
    }

    const node = imgRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : ""}
      loading="lazy"
      alt={alt}
      className={className}
    />
  );
};

/* ── Main Component ── */
const Electrical = () => (
  <section className="font-urbanist relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#f5f7fa] to-[#e3ecf5] px-4 py-28 overflow-hidden">
    {/* Glow decorations */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-[#4c6b9e] opacity-20 blur-[120px] rounded-full -z-10" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ead57b] opacity-30 blur-[120px] rounded-full -z-10" />

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-[#4c6b9e] font-semibold text-3xl md:text-5xl mb-8"
    >
      Electrical Engineering
    </motion.h2>

    {/* Card */}
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="backdrop-blur-md bg-white/90 rounded-3xl shadow-xl overflow-hidden max-w-7xl w-full grid md:grid-cols-2 border border-gray-200 transition-transform duration-300"
    >
      {/* Image */}
      <motion.div
        className="h-[500px] md:h-full w-full overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <LazyImage
          src={aboutImg}
          alt="Electrical Engineering"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out"
        />
      </motion.div>

      {/* Content */}
      <div className="p-8 md:p-14 flex flex-col justify-center bg-white">
        <motion.p
          className="text-[#1e325c] text-lg md:text-xl font-medium leading-relaxed mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <strong className="text-[#4c6b9e] font-semibold">
            Visai Energy's Electrical Engineering Division
          </strong>{" "}
          delivers reliable solutions for power distribution, system safety,
          and infrastructure design. Our high-performance layouts comply with
          global standards.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#1e325c] text-base md:text-lg font-light list-disc list-inside space-y-3 leading-relaxed tracking-wide"
        >
          <li>Electrical Equipment List &amp; Load List</li>
          <li>Single Line Diagrams (SLDs)</li>
          <li>Schematic &amp; Interconnection Diagrams</li>
          <li>Panel Schedules &amp; Cable MTO</li>
          <li>Layout Planning – Substations, E-Rooms, Lighting</li>
          <li>Tray, Power &amp; Control Cable Routing</li>
          <li>ETAP Load Flow &amp; Fault Analysis</li>
          <li>Relay Coordination, Grounding &amp; Lighting Calculations</li>
          <li>Detailed Documentation &amp; As-Built Drawings</li>
        </motion.ul>
      </div>
    </motion.div>
  </section>
);

export default Electrical;
