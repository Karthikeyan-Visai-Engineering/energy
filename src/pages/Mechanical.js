import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_2.jpg"; // Update the path if needed

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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-white to-[#f1f5f9] px-4 py-28 overflow-hidden font-urbanist">
      {/* Background glow blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-[#4c6b9e] opacity-20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-[#ead57b] opacity-20 blur-[120px] rounded-full -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 drop-shadow-lg tracking-tight underline decoration-[#ead57b] underline-offset-8"
      >
        Mechanical Engineering
      </motion.h2>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl w-full rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 backdrop-blur-md bg-white/80 border border-gray-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition duration-300"
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
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out"
          />
        </motion.div>

        {/* Text Content */}
        <div className="p-8 md:p-12 overflow-y-auto bg-white">
          <h3 className="text-2xl font-bold text-[#1e325c] mb-6">
            Our Core Expertise
          </h3>
          <ul className="text-gray-700 text-base md:text-lg font-medium list-disc list-inside space-y-4 leading-relaxed">
            <li>Storage tank design as per API 650</li>
            <li>Pressure vessels design as per ASME Sec VIII Div 1 and 2</li>
            <li>Code calculations</li>
            <li>Tank and equipment nozzle allowable loads calculations</li>
            <li>FE analysis of equipment and nozzles</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Processing;
