import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import debounce from "lodash.debounce";
import video from "../assets/welcome.mp4";
import industries from "../assets/power-plant.png";
import engineering from "../assets/engine.png";
import sustainability from "../assets/sustainability.png";
import software from "../assets/design-software.png";
import quality from "../assets/assurance.png";

const steps = [
  {
    icon: engineering,
    title: "Engineering Services",
  },
  {
    icon: software,
    title: "Software Tools",
  },
  {
    icon: sustainability,
    title: "Sustainability",
  },
  {
    icon: industries,
    title: "Industries",
  },
  {
    icon: quality,
    title: "Quality",
  },
];

const radius = 180;
const centerX = 270;
const centerY = 270;

const WebsiteDiagram = () => {
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
    <section className="relative bg-white text-[#1E3A8A] overflow-hidden py-24 font-poppins">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4C6B9E]/10 to-transparent pointer-events-none" />

      {/* Video and Text */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[10px] border-[#1E3A8A] shadow-xl"
        >
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block relative mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] leading-tight tracking-tight">
              Who We Are
            </h2>
            <motion.span
              className="absolute left-0 bottom-0 h-1 rounded-full bg-[#ead57b]"
              initial={{ width: 0 }}
              whileInView={{ width: "64px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <p className="text-lg md:text-xl text-[#334155] mb-6 leading-relaxed font-medium">
            <strong>Visai Energy</strong> is a forward-thinking engineering company
            providing design and detailed engineering services across Oil & Gas,
            Petrochemicals, Power, and Mining sectors.
          </p>

          <div className="space-y-4 text-left text-base md:text-lg text-[#334155]">
            <p className="flex items-start gap-3">
              <span className="text-xl">🎯</span>
              <span>
                <strong className="text-red-500">Vision:</strong> To be the most trusted
                design & engineering partner.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-xl">🚀</span>
              <span>
                <strong className="text-red-500">Mission:</strong> Deliver safe, reliable,
                and sustainable services.
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Orbit Diagram */}
      <div className="relative mx-auto mt-20 h-[540px] max-w-[540px] w-full">
        <svg className="absolute inset-0 h-full w-full pointer-events-none">
          {steps.map((_, idx) => {
            const angle = (idx / steps.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            return (
              <line
                key={idx}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#4C6B9E"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>

        {/* Center Core */}
        <motion.div
          className="absolute z-10 flex h-[140px] w-[140px] items-center justify-center rounded-full border-4 border-[#1E3A8A] bg-white shadow-xl animate-pulse"
          style={{ left: `${centerX - 70}px`, top: `${centerY - 70}px` }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xl md:text-2xl font-bold text-[#1E3A8A] text-center leading-tight">
            Visai<br />Energy
          </span>
        </motion.div>

        {/* Orbiting Icons */}
        {steps.map((step, idx) => {
          const angle = (idx / steps.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle) - 65;
          const y = centerY + radius * Math.sin(angle) - 65;

          return (
            <motion.div
              key={idx}
              className="absolute flex flex-col items-center justify-center h-[130px] w-[130px] rounded-full bg-white p-3 text-center shadow-xl border-4 border-[#ead57b] hover:scale-110 transition duration-300"
              style={{ left: `${x}px`, top: `${y}px` }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="h-10 w-10 object-contain mb-2"
              />
              <span className="text-sm font-semibold text-[#1E3A8A]">{step.title}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WebsiteDiagram;
