import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_6.jpg";

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

const DocumentControl = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-white to-[#f1f5f9] px-6 py-24 overflow-hidden font-urbanist">
      {/* Background Decorations */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#3A6E74] opacity-30 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#1e3a3a] opacity-20 blur-[100px] rounded-full -z-10" />

      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#4c6b9e] font-semibold"
      >
        Document Control & Management
      </motion.h2>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl grid md:grid-cols-2 bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform duration-300 transform hover:scale-[1.01]"
      >
        {/* Image */}
        <motion.div
          className="h-full w-full"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Document Management"
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
              Document Control and Management
            </strong>{" "}
            is essential for ensuring accuracy, compliance, and efficiency throughout all engineering, construction, and operational projects. It streamlines documentation, enhances traceability, and maintains project integrity.
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
            className="text-gray-800 text-base md:text-lg font-medium list-disc list-inside space-y-4"
          >
            <li>Migration of paper drawings to electronic formats</li>
            <li>Drawing registry creation and revision tracking</li>
            <li>QA/QC verification of engineering documents</li>
            <li>Complete project document lifecycle management</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default DocumentControl;
