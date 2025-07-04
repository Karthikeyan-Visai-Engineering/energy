import React from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaOilCan,
  FaBolt,
  FaMountain,
  FaFlask,
  FaTint,
  FaTruckMoving,
} from "react-icons/fa";

import bgImage from "../assets/photo1.jpg";

const industries = [
  { label: "Oil and Gas", icon: <FaIndustry size={24} /> },
  { label: "Oil Sands & SAGD", icon: <FaOilCan size={24} /> },
  { label: "Power", icon: <FaBolt size={24} /> },
  { label: "Mining", icon: <FaMountain size={24} /> },
  { label: "Petrochemicals", icon: <FaFlask size={24} /> },
  { label: "Water Treatment", icon: <FaTint size={24} /> },
  { label: "Pipeline Transport", icon: <FaTruckMoving size={24} /> },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const IndustriesWeServe = () => {
  return (
    <motion.section
      className="relative bg-[#f9fafb] py-24 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ead57b]/30 blur-[100px] z-0" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#1e325c] mb-6 relative inline-block leading-tight">
            Industries We Serve
            <span className="block w-20 h-1 bg-[#ead57b] mt-3 mx-auto lg:mx-0 rounded-full" />
          </h2>

          <p className="text-[#4c6b9e] text-xl md:text-2xl mb-12 max-w-xl mx-auto lg:mx-0">
            Empowering complex industrial sectors with precise, efficient, and
            forward-thinking engineering solutions.
          </p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0"
            variants={sectionVariants}
          >
            {industries.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                variants={cardVariants}
                whileHover={{ scale: 1.08 }}
              >
                <div className="text-[#c9a700] animate-pulse">{item.icon}</div>
                <span className="text-[#1e325c] font-semibold text-base md:text-lg">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 w-full h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#ead57b]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={bgImage}
            alt="Industries"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IndustriesWeServe;
