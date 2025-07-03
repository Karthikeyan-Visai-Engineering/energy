import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/welcome1.jpg";
import { FiTarget, FiEye, FiZap, FiStar, FiShield } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <div className="bg-white text-[#1e325c] font-['Poppins','sans-serif']">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <motion.img
          src={heroImg}
          alt="About Hero"
          className="w-full h-full object-cover brightness-75"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-white text-5xl md:text-7xl font-extrabold mb-4"
              variants={fadeInUp}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-white text-xl md:text-2xl max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Engineering the future with innovation, safety, and sustainability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-4">
            <FiTarget className="text-red-500 w-9 h-9" />
            <h3 className="text-4xl font-semibold text-[#4c6b9e] underline decoration-[#ead57b]">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-700 text-xl leading-relaxed">
            To empower industries and communities by providing smart, sustainable,
            and scalable engineering solutions that improve lives.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-4">
            <FiEye className="text-red-500 w-9 h-9" />
            <h3 className="text-4xl font-semibold text-[#4c6b9e] underline decoration-[#ead57b]">
              Our Vision
            </h3>
          </div>
          <p className="text-gray-700 text-xl leading-relaxed">
            To be recognized as a global leader in engineering innovation — delivering
            excellence through integrity, safety, and sustainability.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-[#1e325c] py-24 px-6 md:px-20 text-white text-center">
        <motion.h3
          className="text-5xl font-bold mb-14 tracking-wide"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h3>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Innovation",
              desc: "We embrace change and continuously seek better ways to deliver value.",
              icon: <FiZap className="text-yellow-400 w-12 h-12 mx-auto mb-4" />,
            },
            {
              title: "Excellence",
              desc: "We set high standards in every project to achieve unmatched outcomes.",
              icon: <FiStar className="text-yellow-400 w-12 h-12 mx-auto mb-4" />,
            },
            {
              title: "Responsibility",
              desc: "We act with integrity, prioritize safety, and protect the planet.",
              icon: <FiShield className="text-yellow-400 w-12 h-12 mx-auto mb-4" />,
            },
          ].map((val, index) => (
            <motion.div key={index} variants={fadeInUp}>
              {val.icon}
              <h4 className="text-2xl font-semibold mb-2">{val.title}</h4>
              <p className="text-gray-300 text-lg">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
