import React, { useEffect } from "react";
import LocationPage from "./Location";
import { motion, useAnimation } from "framer-motion";
import engineering from "../assets/engineers.png";
import software from "../assets/software tools.png";
import sustainable from "../assets/sustanability.png";
import industries from "../assets/industry.png";
import quality from "../assets/quality.png";
import samplevideo from "../assets/welcome.mp4";

const WebsiteDiagram = () => {
  const steps = [
    { icon: engineering, title: "Engineering Services" },
    { icon: software, title: "Software Tools" },
    { icon: sustainable, title: "Sustainability" },
    { icon: industries, title: "Industries" },
    { icon: quality, title: "Quality" },
  ];

  const radius = 180;
  const centerX = 270;
  const centerY = 270;

  // Animation controls for the sliding text
  const welcomeControls = useAnimation();

  useEffect(() => {
    // Initially set hidden left
    welcomeControls.set({ opacity: 0, x: -100 });

    const handleScroll = () => {
      welcomeControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [welcomeControls]);

  return (
    <section className="relative overflow-hidden py-10 w-full h-auto bg-gradient-to-b from-white via-white to-gray-100">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl mx-auto gap-10 px-4 py-20">
        {/* Circular Video */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-64 h-64 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-blue-500 shadow-2xl bg-black flex-shrink-0 md:-ml-40"
        >
          <video
            src={samplevideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-[80px] font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-10"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>

          {/* Scroll triggered sliding welcome text */}
          <motion.p
            className="text-4xl font-semibold mb-5"
            animate={welcomeControls}
            initial={{ opacity: 0, x: -100 }}
          >
            <span className="text-gray-800">Welcome to </span>
            <span className="text-blue-600 font-bold">Visai Energy</span>
          </motion.p>

          <p className="text-[#2E5077] text-xl mb-4 leading-relaxed">
            <span className="font-bold text-[#2E5077]">Visai Energy</span> is
            an engineering company offering design and detailed engineering
            services for Oil & Gas, Petrochemicals, Power, and Mining projects.
          </p>

          <p className="text-[#2E5077] font-bold mb-2 flex items-start gap-2">
            <span className="text-[#2E5077] text-xl">🎯</span>
            <span>
              <strong className="text-red-600 font-bold">Vision:</strong> To
              be the preferred design & engineering choice.
            </span>
          </p>

          <p className="text-[#2E5077] font-bold mb-2 flex items-start gap-2">
            <span className="text-green-500 text-xl">🚀</span>
            <span>
              <strong className="text-red-600 font-bold">Mission:</strong>{" "}
              Deliver safe and sustainable engineering services.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Circular Design Section */}
      <div className="relative w-[540px] h-[540px] mx-auto mt-10">
        {/* SVG Lines */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {steps.map((_, index) => {
            const angle = (index / steps.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#4A90E2"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Orbit Elements */}
        <div className="relative w-full h-full mx-auto -mt-4">
          {/* Center Circle */}
          <motion.div
            style={{ left: `${centerX - 75}px`, top: `${centerY - 75}px` }}
            className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-r from-gray-100 to-yellow-200 shadow-2xl flex items-center justify-center text-center p-4 border-4 border-red-500 z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-blue-500 font-extrabold font-inter text-lg leading-tight">
              Visai
              <br />
              Energy
            </span>
          </motion.div>

          {/* Orbiting Steps */}
          {steps.map((step, index) => {
            const angle = (index / steps.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle) - 75;
            const y = centerY + radius * Math.sin(angle) - 75;

            return (
              <motion.div
                key={index}
                className="absolute w-[150px] h-[150px] rounded-full flex flex-col justify-center items-center shadow-lg bg-white border-4 border-blue-200 hover:border-blue-500 hover:scale-105 transition-transform duration-300 z-10"
                style={{ left: `${x}px`, top: `${y}px` }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <img src={step.icon} alt={step.title} className="w-16 h-16 mb-2" />
                <span className="text-center text-sm font-semibold text-blue-700">
                  {step.title}
                </span>
              </motion.div>               
            );
          })}      
        </div>
      </div>
    </section>
    

  );
};

export default WebsiteDiagram;
