import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import img from "../assets/welcome.jpg";
import industries from "../assets/power-plant.webp";
import engineering from "../assets/engine.webp";
import sustainability from "../assets/sustainability.webp";
import software from "../assets/design-software.webp";
import quality from "../assets/assurance.webp";


const steps = [
  { icon: engineering, title: "Engineering Services" },
  { icon: software, title: "Software Tools" },
  { icon: sustainability, title: "Sustainability" },
  { icon: industries, title: "Industries" },
  { icon: quality, title: "Quality" },
];

const radius = 180;
const centerX = 270;
const centerY = 270;

const text = "🎉 Celebrating 9 Years of Excellence 🎉";


const WebsiteDiagram = () => {
  return (
    <section className="relative bg-white text-[#1E3A8A] overflow-hidden py-24 font-poppins">
      {/* 🎉 Animated Celebration Text with Pop + Pulse */}
      {/* 🎉 Typing Effect Celebration Text */}
<div className="flex justify-center mb-20 ">
  <motion.h2
    className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]"
    animate={{ opacity: [0.4, 1, 0.4] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    🎉 Celebrating 9 Years of Excellence 🎉
  </motion.h2>
</div>



      {/* SEO Meta Tags */}
      <Helmet>
        <title>Visai Energy – Innovative Design & Engineering Company</title>
        <meta
          name="description"
          content="Visai Energy is a forward-thinking design and engineering company offering detailed engineering services in Oil & Gas, Petrochemicals, and Power sectors."
        />
        <meta
          name="keywords"
          content="Visai Energy, Engineering Company, Oil and Gas Design, Detailed Engineering, Sustainability, Industrial Projects"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Content Section */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
        {/* Circle Image */}
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[1px] border-[#1E3A8A] shadow-md">
          <img
            src={img}
            alt="Visai Energy welcome"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <div className="inline-block relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1E3A8A] leading-tight tracking-tight">
              Who We Are
            </h2>
            <span className="absolute left-0 bottom-0 h-1 rounded-full bg-[#ead57b] w-16"></span>
          </div>

          <p className="text-lg md:text-xl text-[#334155] mb-6 leading-relaxed font-medium">
            <strong>Visai Energy</strong> is a forward-thinking engineering company
            providing design and detailed engineering services across Oil & Gas,
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
        </div>
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
        <div
          className="absolute z-10 flex h-[140px] w-[140px] items-center justify-center rounded-full border-4 border-[#1E3A8A] bg-white shadow-xl animate-pulse"
          style={{ left: `${centerX - 70}px`, top: `${centerY - 70}px` }}
        >
          <span className="text-xl md:text-2xl font-bold text-[#1E3A8A] text-center leading-tight">
            Visai<br />Energy
          </span>
        </div>

        {/* Orbiting Icons */}
        {steps.map((step, idx) => {
          const angle = (idx / steps.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle) - 65;
          const y = centerY + radius * Math.sin(angle) - 65;

          return (
            <div
              key={idx}
              className="absolute flex flex-col items-center justify-center h-[130px] w-[130px] rounded-full bg-white p-3 text-center shadow-xl border-4 border-[#ead57b] hover:scale-110 transition duration-300"
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="h-10 w-10 object-contain mb-2"
              />
              <span className="text-sm font-semibold text-[#1E3A8A]">{step.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WebsiteDiagram;
