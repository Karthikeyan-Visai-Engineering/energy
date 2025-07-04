import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/droplist_9.jpg"; // Update path if needed

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageHover = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Telecom = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#dbeafe] via-white to-[#e0f2fe] px-6 py-28 overflow-hidden font-urbanist">
      {/* Background Blur Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-[#3b82f6] opacity-20 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#1e40af] opacity-20 blur-[100px] rounded-full -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#60a5fa] drop-shadow-lg underline decoration-[#facc15] underline-offset-8"
      >
        Telecom Engineering
      </motion.h2>

      {/* Card Container */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl grid md:grid-cols-2 bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-blue-200 transition-transform duration-300 transform hover:scale-[1.01]"
      >
        {/* Image Section */}
        <motion.div
          className="h-full w-full"
          variants={imageHover}
          whileHover="hover"
        >
          <img
            src={aboutImg}
            alt="Telecom Engineering"
            className="w-full h-full object-cover object-center transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content Section */}
        <div className="p-8 md:p-12 bg-white/80">
          <motion.p
            className="text-[#1e325c] text-lg md:text-xl font-medium leading-relaxed mb-6"
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
            <strong className="text-[#2563eb] font-semibold">Telecom Engineering</strong> is the backbone of digital connectivity in oil & gas, power, infrastructure, and smart industries. From wired to wireless systems, our services ensure uninterrupted communication, safety compliance, and SCADA-ready integration across remote and urban assets.
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
            className="text-[#1e325c] text-base md:text-lg font-light list-disc list-inside space-y-4 leading-relaxed"
          >
            <li>Telecom design philosophy and network architecture (LAN/WAN)</li>
            <li>Integration of telecom with control systems (DCS/PLC/RTU)</li>
            <li>Fiber optic & copper cabling: routing, termination, and OTDR testing</li>
            <li>Structured cabling for IP telephony and data centers</li>
            <li>Design of CCTV, access control, fire alarm & intrusion systems</li>
            <li>Radio and microwave communication tower design</li>
            <li>Equipment rack layouts, grounding, and lightning protection</li>
            <li>Telecommunication rooms (TR) and cabinets configuration</li>
            <li>Redundancy planning and system availability (SLA targets)</li>
            <li>Ethernet switch, router, and firewall setup (Cisco, Juniper)</li>
            <li>Commissioning test procedures, FAT/SAT protocols</li>
            <li>Material take-offs (MTO), BOM, and vendor data reviews</li>
            <li>Compliance with IEC, TIA/EIA, and client-specific standards</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Telecom;
