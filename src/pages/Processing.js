import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_1.jpg"; // Replace with your image

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
    scale: 1.05,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Processing = () => {
  return (
    <section className="font-urbanist relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-white to-[#dceffe] px-6 py-28 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-[#4c6b9e] opacity-20 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#1e325c] opacity-20 blur-[100px] rounded-full -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#1e325c] via-[#4c6b9e] to-[#2c5d95]"
      >
        Processing Engineering
      </motion.h2>

      {/* Card Container */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-lg bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden max-w-6xl w-full grid md:grid-cols-2 border border-blue-200 hover:shadow-2xl transition duration-300"
      >
        {/* Image Block */}
        <motion.div
          className="h-full w-full"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Processing Engineering"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </motion.div>

        {/* Text Content */}
        <div className="p-8 md:p-14 flex flex-col justify-center bg-white/90">
          <motion.p
            className="text-[#1e325c] text-lg md:text-xl font-medium leading-relaxed tracking-wide mb-6"
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
          >
            <strong className="text-[#4c6b9e] font-semibold">
              Processing Engineering
            </strong>{" "}
            is at the heart of safe, efficient, and high-performance systems in the oil & gas and structural sectors. We design and optimize process facilities from upstream to downstream with an emphasis on sustainability, safety, and cost-effectiveness.
          </motion.p>

          {/* Process List */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.6 },
              },
            }}
            className="text-[#1e325c] text-base md:text-lg font-light list-disc list-inside space-y-3 leading-relaxed tracking-wide"
          >
            <li>Development of Process Flow Diagrams (PFDs) & Heat & Mass Balance</li>
            <li>Detailed P&IDs for piping and control systems</li>
            <li>Hydraulic calculations, pressure drop analysis, and line sizing</li>
            <li>Simulation modeling using Aspen HYSYS / UniSim Design</li>
            <li>Flare system design and venting studies</li>
            <li>Surge and slug flow analysis in multiphase systems</li>
            <li>Control system architecture: PLC, DCS, SCADA integration</li>
            <li>FPSO and onshore process module layout design</li>
            <li>HAZOP, SIL, and QRA facilitation for safety compliance</li>
            <li>Energy recovery and emission reduction schemes</li>
            <li>Material selection and corrosion mitigation (NACE MR0175)</li>
            <li>Process equipment sizing: separators, scrubbers, exchangers</li>
            <li>Utility systems engineering: fuel gas, steam, nitrogen, air</li>
            <li>Interface engineering with mechanical, piping, and structural teams</li>
            <li>Process datasheets and technical requisitions for procurement</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Processing;
