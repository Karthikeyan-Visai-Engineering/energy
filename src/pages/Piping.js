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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-white to-[#f1f5f9] px-6 py-24 overflow-hidden font-urbanist">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-[#3A6E74] opacity-30 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#1e3a3a] opacity-20 blur-[100px] rounded-full -z-10" />

      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text drop-shadow-xl tracking-tight underline decoration-[#ead57b] underline-offset-8"
      >
        Piping Design & Engineering
      </motion.h2>

      {/* Main Content Card */}
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
            alt="Piping Engineering"
            className="w-full h-full object-cover object-center transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content Section */}
        <div className="p-8 md:p-12 overflow-y-auto bg-white/80">
          <h3 className="text-2xl font-bold text-[#1e325c] mb-6">
            Our Expertise in Piping
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
            <li>Development of Plot Plan and Equipment Layout (PFDs)</li>
            <li>Process piping layout, pipe rack design and detail engineering (P&IDs)</li>
            <li>Equipment piping and pipe rack modularization study (LDTs)</li>
            <li>Piping sizing, wall thickness calculation and material selection</li>
            <li>Pipe support design and engineering</li>
            <li>Piping stress analysis (Static and Dynamic)</li>
            <li>General arrangement and fabrication isometric drawings</li>
            <li>Isometric spool drawings & redline markup drafting</li>
            <li>Field deployment and workforce secondment</li>
            <li>Material Take-Off (MTO), MR, TBE, and procurement</li>
            <li>Vendor drawing review and approval</li>
            <li>Field support and ABSA application preparation</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Piping;
