import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_3.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageHover = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Piping = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-white to-[#dceffe] px-6 py-24 overflow-hidden font-urbanist">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#4c6b9e] opacity-20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#1e325c] opacity-20 blur-[120px] rounded-full -z-10" />

      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#4c6b9e] font-semibold">
        Piping Design & Engineering
      </motion.h2>

      {/* Main Content Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-blue-200 bg-white/90 backdrop-blur-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition duration-300"
      >
        {/* Image Section */}
        <motion.div
          className="h-full w-full"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Piping Engineering"
            className="w-full h-full object-cover object-center transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content Section */}
        <div className="p-8 md:p-12 overflow-y-auto bg-white/90">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1e325c] mb-6">
            Our Expertise in Piping & Gas Engineering
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
            <li>Development of Plot Plans, PFDs, and P&IDs for oil & gas facilities</li>
            <li>Piping layout, 3D modeling, and plant-wide routing strategies</li>
            <li>Material selection and wall thickness calculations as per ASME B31.3/B31.4</li>
            <li>Stress analysis including static, dynamic, surge, and thermal expansion cases</li>
            <li>Design of buried, above-ground, and offshore pipeline systems</li>
            <li>Pipe support design: anchors, guides, hangers, and spring supports</li>
            <li>Fabrication isometrics, spool drawings, and erection plans</li>
            <li>Construction sequencing, field weld mapping, and redline drafting</li>
            <li>Material Take-Off (MTO), BOM, MR, TBE, and procurement documentation</li>
            <li>Vendor data review for valves, strainers, gaskets, and specialty piping items</li>
            <li>Hydrotest loop planning and test pack documentation</li>
            <li>Gas compression station piping and pipeline riser design</li>
            <li>Compliance with codes: API 5L, ASME B31.8, ISO 14692, and client specs</li>
            <li>Skid-mounted process piping and modular package integration</li>
            <li>Laser scanning point cloud integration into piping design</li>
            <li>SmartPlant / E3D / AutoCAD Plant 3D-based intelligent modeling</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Piping;
