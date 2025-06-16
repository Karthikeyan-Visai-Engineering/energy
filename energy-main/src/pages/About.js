import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/gas and pipeline.jpg"; // Ensure image exists

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f4f7f9] to-[#e4ebef] min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Background Steel Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-10 z-0" />

      {/* Decorative Steel Blobs */}
      <div className="absolute w-96 h-96 bg-[#7DBAC3] rounded-full -top-10 -left-20 opacity-20 mix-blend-multiply blur-2xl z-0" />
      <div className="absolute w-96 h-96 bg-[#3A6E74] rounded-full -bottom-20 -right-20 opacity-20 mix-blend-multiply blur-2xl z-0" />

      {/* Main Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 border border-gray-200"
      >
        {/* Image Section */}
        <div className="h-full w-full relative">
          <img
            src={aboutImg}
            alt="Visai Energy"
            className="w-full h-full object-cover"
          />
          {/* Decorative Corner Label */}
          <div className="absolute top-4 left-4 bg-[#3A6E74] text-white text-sm px-4 py-1 rounded-full shadow-lg">
            8+ Years of Excellence
          </div>
        </div>

        {/* Content Section */}
        <div className="p-10 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-[#3A6E74] mb-4 leading-snug">
            About <span className="text-[#1e3a3a]">Visai Energy</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <span className="text-[#3A6E74] font-semibold">Visai Energy</span> is shaping the future of infrastructure with expert solutions in{" "}
            <strong>pipeline construction, civil & structural design,</strong> and sustainable technologies. Since
            2016, we've delivered engineering excellence with a strong focus on safety, quality, and innovation.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-fit px-6 py-2 rounded-full bg-[#3A6E74] text-white font-semibold hover:bg-[#2e5c61] transition duration-300 shadow-md"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
