import React from "react";
import { motion } from "framer-motion";
import industryImg from "../assets/safety1.jpg"; // Replace with your actual image

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const StructuralPage = () => {
  return (
    <section className="bg-[#f9fafb] py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-[#1e325c] mb-8 leading-tight"
          >
            Safety <span className="text-[#dc2626]">&</span>{" "}
            <span className="relative inline-block">
              Sustainability
              <span className="absolute -bottom-1 left-0 w-14 h-1 bg-[#ead57b] rounded" />
            </span>
          </motion.h2>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[#4c6b9e] mb-12 max-w-xl"
          >
            At <strong>Visai Engineering</strong>, our commitment to safety and sustainability defines the way we build the future—with responsibility, innovation, and care.
          </motion.p>

          {/* Safety Card */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 mb-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#dc2626] mb-3">Safety First</h3>
            <p className="text-lg md:text-xl text-gray-700">
              We adhere to global safety standards, ensuring zero incidents by emphasizing proactive planning, risk analysis, and workforce training.
            </p>
          </motion.div>

          {/* Sustainability Card */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#16a34a] mb-3">Green Engineering</h3>
            <p className="text-lg md:text-xl text-gray-700">
              From material selection to waste reduction, we engineer with the planet in mind—reducing carbon emissions and integrating renewable energy.
            </p>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageVariant}
          viewport={{ once: true }}
        >
          <img
            src={industryImg}
            alt="Safety and Sustainability"
            className="rounded-2xl shadow-xl border-4 border-[#ead57b] object-cover w-full max-h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StructuralPage;
