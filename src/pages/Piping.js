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
    scale: 1.05,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Piping = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-white to-[#f1f5f9] px-4 py-16 overflow-hidden">
      {/* Background Blur Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3A6E74] opacity-20 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1e3a3a] opacity-20 blur-[100px] rounded-full -z-10" />

      {/* Page Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mt-20 text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
      >
        Piping Design and Engineering
      </motion.h2>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-md bg-white/70 rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full h-auto md:h-[80vh] grid md:grid-cols-2 border border-gray-200 transition-transform duration-300 transform hover:scale-[1.01]"
      >
        {/* Image Section */}
        <motion.div
          className="h-full w-full overflow-hidden"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Piping Engineering"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />
        </motion.div>

        {/* Content Section */}
        <div className="p-8 md:p-10 overflow-y-auto bg-white/70">
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
            className="text-gray-800 text-base md:text-xl font-semibold list-disc list-inside space-y-3"
          >
            <li>Development of Plot Plan and Equipment Layout (PFDs)</li>
            <li>Process piping studies, piping layout, pipe rack design and detail engineering (P&IDs)</li>
            <li>Equipment piping and pipe rack modularization study (LDTs)</li>
            <li>Piping sizing, wall thickness calculation and material selection</li>
            <li>Pipe support design and engineering</li>
            <li>Piping stress analysis (Static and Dynamic)</li>
            <li>Piping general arrangement and fabrication isometric drawings</li>
            <li>Piping isometric spool drawings</li>
            <li>As-built and redline markup drafting</li>
            <li>Workforce secondment to field and onsite offices</li>
            <li>Piping materials take-off (MTO)</li>
            <li>Material Requisition (MR), Technical Bid Evaluation (TBE) and material procurement</li>
            <li>Vendor drawing review and approval</li>
            <li>Field services</li>
            <li>ABSA application preparation and support</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Piping;
