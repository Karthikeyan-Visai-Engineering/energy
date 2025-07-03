// src/pages/About.js
import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaTools, FaLeaf, FaDraftingCompass, FaHardHat, FaCheckCircle, FaLightbulb, FaMedal, FaShieldAlt } from "react-icons/fa";
import heroImg from "../assets/servicehvac.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const About = () => {
  return (
    <div className="bg-white text-[#1e325c] font-['Poppins','Urbanist','sans-serif']">
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
              className="text-white text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl"
              variants={fadeInUp}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-white text-lg md:text-xl max-w-2xl mx-auto drop-shadow"
              variants={fadeInUp}
            >
              Engineering the future with innovation, safety, and sustainability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-tr from-[#e3f2fd] to-[#fffde7] py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-[#2e3b55] mb-4 underline decoration-[#f9c74f] underline-offset-4">
            Our Mission
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            To empower industries and communities by providing smart, sustainable,
            and scalable engineering solutions that improve lives. We aim to redefine
            the engineering landscape through innovative design, reliable execution,
            and environmental stewardship.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-[#2e3b55] mb-4 underline decoration-[#f9c74f] underline-offset-4">
            Our Vision
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            To be recognized as a global leader in engineering innovation — delivering
            excellence through integrity, safety, and sustainability. We envision a world
            where infrastructure is smarter, cleaner, and built for future generations.
          </p>
        </motion.div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-[#f1f5fd] py-20 px-6 md:px-20 text-center">
        <motion.h3
          className="text-4xl font-extrabold mb-10 text-[#1e325c]"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          What Sets Us Apart
        </motion.h3>
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <FaHandshake className="text-3xl text-[#d32f2f]" />,
              title: "Client-Centric Approach",
              desc: "We prioritize client needs and foster transparent, long-term partnerships.",
              bg: "#ede7f6",
            },
            {
              icon: <FaTools className="text-3xl text-[#1565c0]" />,
              title: "Cutting-Edge Technology",
              desc: "We leverage the latest tools to enhance performance and precision.",
              bg: "#e1f5fe",
            },
            {
              icon: <FaLeaf className="text-3xl text-[#388e3c]" />,
              title: "Sustainable Practices",
              desc: "Environmental responsibility is embedded in our design approach.",
              bg: "#e8f5e9",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: item.bg }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-[#1e325c]">{item.title}</h4>
              <p className="text-gray-800 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="bg-gradient-to-br from-[#fff9c4] via-[#fce4ec] to-[#e3f2fd] py-20 px-6 md:px-20 text-center">
        <motion.h3
          className="text-4xl font-extrabold mb-12 text-[#1e325c]"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Our Capabilities
        </motion.h3>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: <FaDraftingCompass className="text-3xl text-[#6a1b9a]" />, title: "Feasibility Studies" },
            { icon: <FaHardHat className="text-3xl text-[#ef6c00]" />, title: "Design & Engineering" },
            { icon: <FaCheckCircle className="text-3xl text-[#009688]" />, title: "Project Management" },
            { icon: <FaTools className="text-3xl text-[#1976d2]" />, title: "Construction Supervision" },
            { icon: <FaMedal className="text-3xl text-[#c2185b]" />, title: "Procurement" },
            { icon: <FaShieldAlt className="text-3xl text-[#7cb342]" />, title: "Commissioning & Handover" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl border border-[#f9c74f]/20"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-[#4c6b9e] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-700">
                Client-focused planning and execution across all lifecycle stages.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-[#1e325c] py-20 px-6 md:px-20 text-white text-center">
        <motion.h3
          className="text-4xl font-bold mb-12 tracking-wide"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h3>
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: <FaLightbulb />, title: "Innovation", desc: "We embrace change and seek smarter solutions." },
            { icon: <FaMedal />, title: "Excellence", desc: "High standards in all projects for outstanding results." },
            { icon: <FaShieldAlt />, title: "Responsibility", desc: "Acting with integrity and environmental care." },
          ].map((val, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-[#2f4872] rounded-xl p-6 shadow-lg hover:bg-[#3c5e9a]/90 transition-colors"
            >
              <div className="flex justify-center mb-3 text-3xl text-yellow-400">
                {val.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{val.title}</h4>
              <p className="text-gray-300 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Leadership Statement */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-[#1e325c] mb-6 underline decoration-[#f9c74f] underline-offset-8">
            A Word from Our Leadership
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "At Visai Energy, we believe in shaping a better tomorrow through thoughtful
            engineering and unwavering values. Our strength lies in our people, our client
            trust, and our drive for innovation. We build not just infrastructure, but legacy."
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
