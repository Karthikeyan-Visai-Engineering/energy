import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_5.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Processing = () => {
  return (
    <section className="font-urbanist relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#f5f7fa] to-[#e3ecf5] px-4 py-28 overflow-hidden">
      {/* Glow Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4c6b9e] opacity-20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ead57b] opacity-30 blur-[120px] rounded-full -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#4c6b9e] font-semibold">
        Electrical Engineering
      </motion.h2>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="backdrop-blur-md bg-white/90 rounded-3xl shadow-xl overflow-hidden max-w-7xl w-full grid md:grid-cols-2 border border-gray-200 transition-transform duration-300"
      >
        {/* Image */}
        <motion.div
          className="h-[500px] md:h-full w-full overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img
            src={aboutImg}
            alt="Electrical Engineering"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out"
          />
        </motion.div>

        {/* Content */}
        <div className="p-8 md:p-14 flex flex-col justify-center bg-white">
          <motion.p
            className="text-[#1e325c] text-lg md:text-xl font-medium leading-relaxed mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <strong className="text-[#4c6b9e] font-semibold">
              Visai Energy's Electrical Engineering Division
            </strong>{" "}
            delivers reliable solutions for power distribution, system safety, and infrastructure design. Our high-performance layouts comply with global standards.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#1e325c] text-base md:text-lg font-light list-disc list-inside space-y-3 leading-relaxed tracking-wide"
          >
            <li>Electrical Equipment List & Load List</li>
            <li>Single Line Diagrams (SLDs)</li>
            <li>Schematic & Interconnection Diagrams</li>
            <li>Panel Schedules & Cable MTO</li>
            <li>Layout Planning – Substations, E-Rooms, Lighting</li>
            <li>Tray, Power & Control Cable Routing</li>
            <li>ETAP Load Flow & Fault Analysis</li>
            <li>Relay Coordination, Grounding & Lighting Calculations</li>
            <li>Detailed Documentation & As-Built Drawings</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Processing;
