// src/pages/Processing.js
import React from "react";
import processingImage from "../assets/process2.webp"; // Replace with your image path

const processingPoints = [
  "Process Flow Diagrams & heat‑mass balances",
  "P&IDs for piping / control systems",
  "Hydraulic & pressure‑drop calculations",
  "Process simulation (Aspen HYSYS / UniSim)",
  "Flare system & venting studies",
  "Surge / slug analysis in multiphase lines",
  "Control-system architecture: PLC, DCS, SCADA",
  "FPSO & on‑shore module layout design",
  "HAZOP, SIL, QRA facilitation",
  "Energy‑recovery / emission‑reduction schemes",
  "Material selection & corrosion mitigation (NACE MR0175)",
  "Equipment sizing: separators, exchangers, scrubbers",
  "Utility systems: fuel gas, steam, nitrogen, air",
  "Interface engineering with mech/piping/structural teams",
  "Process datasheets & technical requisitions"
];

const Processing = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-[#f9f9fa] to-[#eef2f7] text-[#1e325c]">
      
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src={processingImage}
          alt="Processing Engineering"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
            Processing Engineering
          </h1>
          <p className="text-lg md:text-xl drop-shadow-sm animate-fade-in delay-100">
            Innovative solutions with precision, safety, and performance in mind.
          </p>
        </div>
      </section>

      {/* Capability Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e325c] mb-2 tracking-tight">
            Our Capabilities
          </h2>
          <p className="text-[#4c6b9e] max-w-2xl mx-auto">
            Processing Engineering is at the heart of safe, efficient, high‑performance systems in oil & gas and structural sectors. We design and optimise facilities from upstream to downstream with a focus on sustainability, safety and cost‑effectiveness
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {processingPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border-l-8 border-[#f5b841] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="flex gap-3 items-start">
                <div className="w-3 h-3 mt-1 rounded-full bg-[#4c6b9e]"></div>
                <p className="text-[#1e325c] leading-relaxed font-medium">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Processing;
