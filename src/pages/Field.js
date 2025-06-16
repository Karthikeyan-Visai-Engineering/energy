import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_1.jpg";

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
    scale: 1.05,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Processing = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-white to-[#f1f5f9] px-4 py-24 overflow-hidden">
      {/* Background Blur Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3A6E74] opacity-20 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1e3a3a] opacity-20 blur-[100px] rounded-full -z-10"></div>

      {/* Animated Page Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
      >
        Processing Engineering
      </motion.h2>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-md bg-white/70 rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 border border-gray-200 transition-transform duration-300 transform hover:scale-[1.01]"
      >
        {/* Image Section */}
        <motion.div
          className="h-full w-full overflow-hidden"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Processing Engineering"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />
        </motion.div>

        {/* Content Section */}
        <div className="p-10 md:p-14 flex flex-col justify-start bg-white/70">
          <motion.p
            className="text-gray-800 text-lg leading-relaxed mb-6"
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
            Processing Engineering plays a vital role in the gas and pipeline industry by ensuring that fluids such as natural gas, crude oil, and refined products are transported, separated, and treated efficiently and safely. Engineers design and optimize systems that manage pressure, temperature, and flow rates, ensuring the integrity of pipelines and process facilities.
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
            className="text-gray-800 text-xl list-disc list-inside space-y-3 mb-8"
          >
            <li>Process Flow Diagrams (PFDs)</li>
            <li>Piping and Instrumentation Diagrams (P&IDs)</li>
            <li>Line Designation Tables (LDTs)</li>
            <li>Hydraulic & Pressure Drop Calculations</li>
            <li>Surge and Slug Flow Analysis</li>
            <li>Process Control & Optimization Techniques</li>
            <li>Energy Efficiency and Emission Control Systems</li>
          </motion.ul>

        </div>
      </motion.div>
    </section>
  );
};

export default Processing;
