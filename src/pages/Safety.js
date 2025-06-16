import React from "react";
import { motion } from "framer-motion";
import safety from "../assets/safety1.jpg";
import sustain from "../assets/sustainabile.jpg";

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80 },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80 },
  },
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const StructuralPage = () => {
  return (
    <div className="relative overflow-hidden bg-red-100 min-h-screen pt-20">
      {/* Brick Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
        viewBox="0 0 3000 4000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          <filter id="brickShadow" x="0" y="0" width="200%" height="200%">
            <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#ccc" />
          </filter>
        </defs>
        {Array.from({ length: 80 }).map((_, rowIndex) => {
          const y = rowIndex * 30;
          const isOffset = rowIndex % 2 === 1;
          return Array.from({ length: 40 }).map((_, colIndex) => {
            const x = colIndex * 100 - (isOffset ? 50 : 0);
            return (
              <rect
                key={`brick-${rowIndex}-${colIndex}`}
                x={x}
                y={y}
                width="180"
                height="50"
                fill="#FCA5A5"
                stroke="#6B7280"
                strokeWidth="2"
                filter="url(#brickShadow)"
              />
            );
          });
        })}
      </svg>

      {/* Page Content */}
      <div className="relative z-10 py-16 px-6">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-6 text-gray-800"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Safety & Sustainability
        </motion.h2>

        <motion.p
          className="text-lg text-center max-w-3xl mx-auto mb-12 font-bold text-green-600 font-medium"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Visai Engineering, we prioritize safety and sustainable practices in every project.
          Our goal is to deliver engineering solutions that protect people and the planet.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Safety Card */}
          <motion.div
            className="rounded-2xl backdrop-blur-sm bg-[#2E5077] shadow-xl p-6 cursor-pointer transition-transform"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div>
              <h3 className="text-2xl text-red-400 font-bold text-center mb-1 uppercase">Safety</h3>
              <p className="text-center text-green-300 font-semibold mb-2">Our Safety Approach</p>
              <p className="text-sm mb-4 text-gray-100 text-center">
                We follow stringent safety protocols and industry best practices to ensure a secure
                environment for our employees, clients, and project sites.
              </p>
              <p className="text-center">
                <a href="#" className="text-yellow-300 font-medium hover:underline">
                  Learn about our safety practices →
                </a>
              </p>
            </div>
            <motion.img
              src={safety}
              alt="Safety Measures"
              className="mt-6 rounded-xl w-full aspect-[4/3] object-cover"
              variants={imageFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            />
          </motion.div>

          {/* Sustainability Card */}
          <motion.div
            className="rounded-2xl backdrop-blur-sm bg-[#2E5077] shadow-xl p-6 cursor-pointer transition-transform"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div>
              <h3 className="text-2xl text-green-400 font-bold text-center mb-1 uppercase">Sustainability</h3>
              <p className="text-center text-red-400 font-semibold mb-2">Sustainable Solutions</p>
              <p className="text-sm mb-4 text-white text-center">
                From eco-friendly materials to energy-efficient systems, we embed sustainability
                into our engineering process.
              </p>
              <p className="text-center">
                <a href="#" className="text-yellow-300 font-medium hover:underline">
                  Discover our green initiatives →
                </a>
              </p>
            </div>
            <motion.img
              src={sustain}
              alt="Sustainability"
              className="mt-6 rounded-xl w-full aspect-[4/3] object-cover"
              variants={imageFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StructuralPage;
