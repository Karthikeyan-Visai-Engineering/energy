import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_1.jpg";

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
    <section className="font-urbanist relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#f7f9fb] to-[#eef3f9] px-6 py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#4c6b9e] opacity-10 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#ead57b] opacity-20 blur-[100px] rounded-full -z-10"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#1e325c] via-[#4c6b9e] to-[#ead57b]"
      >
        Processing Engineering
      </motion.h2>

      {/* Card Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-lg bg-white/70 rounded-[2rem] shadow-xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 border border-gray-200 hover:shadow-2xl transition duration-300"
      >
        {/* Image */}
        <motion.div
          className="h-full w-full"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Processing Engineering"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="p-8 md:p-14 flex flex-col justify-center bg-white">
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
            plays a vital role in ensuring that fluids such as natural gas, crude oil, and refined products are transported and treated safely. Our engineers design systems to manage pressure, temperature, and flow efficiently — safeguarding infrastructure and enhancing performance.
          </motion.p>

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
            <li>Process Flow Diagrams (PFDs)</li>
            <li>Piping & Instrumentation Diagrams (P&IDs)</li>
            <li>Line Designation Tables (LDTs)</li>
            <li>Hydraulic & Pressure Drop Calculations</li>
            <li>Surge & Slug Flow Analysis</li>
            <li>Process Optimization Techniques</li>
            <li>Energy Efficiency and Emission Controls</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Processing;
