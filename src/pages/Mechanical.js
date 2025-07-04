import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_2.jpg"; // Update if needed

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageHover = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Processing = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-white to-[#e6ecf4] px-4 py-28 overflow-hidden font-urbanist">
      {/* Background glowing blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-[#4c6b9e] opacity-20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-[#ead57b] opacity-20 blur-[120px] rounded-full -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#4c6b9e] font-semibold">
        Mechanical Engineering
      </motion.h2>

      {/* Card Container */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl w-full rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 backdrop-blur-md bg-white/90 border border-blue-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition duration-300"
      >
        {/* Image Section */}
        <motion.div
          className="w-full h-full"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Mechanical Engineering"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out rounded-l-3xl"
          />
        </motion.div>

        {/* Text Section */}
        <div className="p-8 md:p-12 overflow-y-auto bg-white">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1e325c] mb-6">
            Our Core Expertise in Oil, Gas & Pipeline
          </h3>
          <ul className="text-gray-700 text-base md:text-lg font-medium list-disc list-inside space-y-4 leading-relaxed">
            <li>Storage tank design compliant with API 650</li>
            <li>Pressure vessel design as per ASME Section VIII Div 1 & 2</li>
            <li>Nozzle load calculations (WRC 107/297 methods)</li>
            <li>Finite Element Analysis (FEA) for mechanical components</li>
            <li>Thermal stress and expansion joint evaluation</li>
            <li>Seismic and wind load compliance for onshore and offshore</li>
            <li>Rotating equipment selection: pumps, compressors, turbines</li>
            <li>Static equipment sizing: heat exchangers, separators, scrubbers</li>
            <li>Piping stress analysis using CAESAR II (including buried pipelines)</li>
            <li>Pipeline route layout, wall thickness & material selection (ASME B31.3 / B31.4 / B31.8)</li>
            <li>Pipeline supports, anchors, and expansion loop design</li>
            <li>Surge and slug flow analysis in long-distance pipelines</li>
            <li>3D equipment modeling using AutoCAD Plant 3D / SolidWorks</li>
            <li>Fabrication drawings and isometric extraction for manufacturing</li>
            <li>Asset integrity management and maintenance planning (RBI/FMEA)</li>
            <li>Skid package design for modular process units</li>
            <li>Design of offshore structural equipment supports and risers</li>
            <li>Preparation of mechanical datasheets and MTOs for procurement</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Processing;
