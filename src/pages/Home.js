import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { debounce } from "lodash";
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

  const welcomeControls = useAnimation();

  useEffect(() => {
    welcomeControls.set({ opacity: 0, x: -100 });

    const handleScroll = debounce(() => {
      welcomeControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [welcomeControls]);

  return (
    <section className="relative overflow-hidden min-h-screen w-full bg-gradient-to-br from-[#f8fcff] via-white to-[#ecf4ff]">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-100 rounded-full filter blur-2xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-24 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl bg-black"
        >
          <video
            src={samplevideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[40px] md:text-[80px] font-extrabold bg-gradient-to-r from-[#ee0979] to-[#ff6a00] bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            className="text-2xl md:text-4xl font-semibold mb-5"
            animate={welcomeControls}
          >
            <span className="text-gray-800">Welcome to </span>
            <span className="text-[#0e7490] font-bold">Visai Energy</span>
          </motion.p>

          <p className="text-[#2E5077] text-base md:text-xl leading-relaxed mb-6">
            <strong>Visai Energy</strong> is a forward-thinking engineering company providing design and detailed engineering services across Oil & Gas, Petrochemicals, Power, and Mining sectors.
          </p>

          <div className="space-y-3 text-[#2E5077] font-medium text-sm md:text-base">
            <p className="flex items-start gap-3">
              <span className="text-xl">🎯</span>
              <span>
                <strong className="text-[#e11d48]">Vision:</strong> To be the most trusted design & engineering partner.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-xl">🚀</span>
              <span>
                <strong className="text-[#e11d48]">Mission:</strong> Deliver safe, reliable, and sustainable services.
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[540px] h-[540px] mx-auto mt-16 mb-10 px-2">
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
                stroke="#60a5fa"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        <motion.div
          style={{ left: `${centerX - 75}px`, top: `${centerY - 75}px` }}
          className="absolute w-[150px] h-[150px] rounded-full bg-white/80 backdrop-blur-md border-4 border-[#e11d48] shadow-lg flex items-center justify-center text-center p-4 z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0e7490] font-extrabold text-sm md:text-lg leading-tight">
            Visai
            <br />
            Energy
          </span>
        </motion.div>

        {steps.map((step, index) => {
          const angle = (index / steps.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle) - 75;
          const y = centerY + radius * Math.sin(angle) - 75;

          return (
            <motion.div
              key={index}
              className="absolute w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-white border-4 border-[#bfdbfe] shadow-md hover:scale-110 transition duration-300 flex flex-col items-center justify-center text-center p-2"
              style={{ left: `${x}px`, top: `${y}px` }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img src={step.icon} alt={step.title} className="w-10 h-10 md:w-12 md:h-12 mb-2" />
              <span className="text-xs md:text-sm font-semibold text-[#1d4ed8]">
                {step.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WebsiteDiagram;
