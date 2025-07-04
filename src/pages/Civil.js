import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_4.jpg";

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
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Civil = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-white to-[#f1f5f9] px-6 py-24 overflow-hidden font-urbanist">
      {/* Decorative background blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-[#3A6E74] opacity-30 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#1e3a3a] opacity-20 blur-[100px] rounded-full -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#4c6b9e] font-semibold">
        Civil & Structural Engineering
      </motion.h2>

      {/* Card layout */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/80 backdrop-blur-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition duration-300"
      >
        {/* Image Section */}
        <motion.div
          className="h-full w-full"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Civil Engineering"
            className="w-full h-full object-cover object-center transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content */}
        <div className="p-8 md:p-12 bg-white/80">
          <motion.p
            className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-8"
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
            <strong className="text-[#1e325c] font-semibold">
              Civil and structural engineering
            </strong>{" "}
            plays a crucial role in the safety and success of both onshore and offshore oil and gas projects. From platforms to process plants, our team delivers innovative designs built for long-term durability and performance.
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
            className="text-gray-800 text-base md:text-lg font-medium list-disc list-inside space-y-4 leading-relaxed"
          >
            <li>Modeling and analysis of steel structures (STAAD Pro)</li>
            <li>Structural steel fabrication and detail drawings</li>
            <li>Structural connection design and optimization</li>
            <li>Equipment foundation design and drawing development</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Civil;
