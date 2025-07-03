import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_9.jpg";

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

const Telecom = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-white to-[#f1f5f9] px-6 py-24 overflow-hidden font-urbanist">
      {/* Decorative Background Blur Elements */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-[#3A6E74] opacity-30 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#1e3a3a] opacity-20 blur-[100px] rounded-full -z-10" />

      {/* Animated Page Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 drop-shadow-lg underline underline-offset-8 decoration-[#ead57b]"
      >
        Telecom Engineering
      </motion.h2>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl grid md:grid-cols-2 bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-gray-200 transition-transform duration-300 transform hover:scale-[1.01]"
      >
        {/* Image Section */}
        <motion.div
          className="h-full w-full"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Telecom Engineering"
            className="w-full h-full object-cover object-center transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content Section */}
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
              Telecom Engineering
            </strong>{" "}
            ensures robust communication infrastructure for industrial projects. It includes detailed design, integration, and installation of telecom systems — essential for operations, monitoring, and safety across modern facilities.
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
            className="text-gray-800 text-base md:text-lg list-disc list-inside space-y-4"
          >
            <li>Telecom Design Criteria</li>
            <li>Technical Specifications</li>
            <li>Fiber optic network block diagram</li>
            <li>Fiber schematic diagrams</li>
            <li>Wiring drawings</li>
            <li>Cable routing drawings</li>
            <li>Equipment layouts</li>
            <li>Cabinet drawings</li>
            <li>Grounding details</li>
            <li>Cable & conduit schedule</li>
            <li>Fiber/Copper patch cord schedules</li>
            <li>Material Take-out</li>
            <li>Data sheets</li>
            <li>Scope of Work documents</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Telecom;
