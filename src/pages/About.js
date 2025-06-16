import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/gas.jpg";

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

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-white to-[#f1f5f9] px-4 py-24 overflow-hidden">
      {/* Background Blur Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3A6E74] opacity-20 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1e3a3a] opacity-20 blur-[100px] rounded-full -z-10"></div>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-md bg-white/70 rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 border border-gray-200 transition-transform duration-300 transform hover:scale-[1.01]"
      >
        {/* Image Section with hover motion */}
        <motion.div
          className="h-full w-full overflow-hidden"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Visai Energy"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />
        </motion.div>

        {/* Content Section */}
        <div className="p-10 md:p-14 flex flex-col justify-center bg-white/70">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#3A6E74] mb-5 leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
            }}
          >
            About <span className="text-[#1e3a3a]">Visai Energy</span>
          </motion.h2>

          <motion.p
            className="text-gray-800 text-lg leading-relaxed mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
            }}
          >
            <span className="text-[#3A6E74] font-semibold">Visai Energy</span> is shaping the future of infrastructure with expert solutions in{" "}
            <strong>pipeline construction, civil & structural design,</strong> and sustainable technologies. Since
            2016, we've delivered engineering excellence with a strong focus on safety, quality, and innovation.
          </motion.p>

          <motion.button
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="self-start px-6 py-3 rounded-full bg-[#3A6E74] text-white text-md font-semibold shadow-lg hover:bg-[#29585f] transition duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
