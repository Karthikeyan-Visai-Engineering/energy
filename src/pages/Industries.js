import React, { useEffect, useRef } from "react";
import {
  FaIndustry,
  FaOilCan,
  FaBolt,
  FaMountain,
  FaFlask,
  FaTint,
  FaTruckMoving,
} from "react-icons/fa";
import bgImage from "../assets/photo1.webp"; // Ensure this path is valid

const industries = [
  { label: "Oil and Gas", icon: <FaIndustry size={24} /> },
  { label: "Oil Sands & SAGD", icon: <FaOilCan size={24} /> },
  { label: "Power", icon: <FaBolt size={24} /> },
  { label: "Mining", icon: <FaMountain size={24} /> },
  { label: "Petrochemicals", icon: <FaFlask size={24} /> },
  { label: "Water Treatment", icon: <FaTint size={24} /> },
  { label: "Pipeline Transport", icon: <FaTruckMoving size={24} /> },
];

const IndustriesWeServe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current; // ✅ Store ref in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fade-section bg-[#f9fafb] py-24 px-6 overflow-hidden"
    >
      {/* Decorative blur blob */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ead57b]/30 blur-[100px] z-0" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e325c] mb-6 leading-tight">
            Industries We Serve
            <span className="block w-20 h-1 bg-[#ead57b] mt-3 mx-auto lg:mx-0 rounded-full" />
          </h2>

          <p className="text-[#4c6b9e] text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0">
            Empowering complex industrial sectors with efficient and forward‑thinking engineering solutions.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
            {industries.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 px-1 shadow hover:shadow-lg transition-transform duration-300 min-h-[90px] cursor-pointer"
              >
                <div className="text-[#c9a700] animate-pulse">{icon}</div>
                <span className="text-[#1e325c] font-medium break-words">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#ead57b]">
          <img
            src={bgImage}
            alt="Industries"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;

