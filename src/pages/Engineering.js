import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Image imports
import process1 from "../assets/process2.jpg";
import mech1 from "../assets/mechnical.jpg";
import piping1 from "../assets/pipe.jpg";
import civil1 from "../assets/civil1.jpg";
import electrical1 from "../assets/electrical.jpg";
import procurement1 from "../assets/procument.jpg";
import document1 from "../assets/document.jpg";
import field1 from "../assets/field.jpg";
import telecom1 from "../assets/communication.jpg";

// Service data
const services = [
  { title: "Process Engineering", image: process1 },
  { title: "Mechanical Engineering", image: mech1 },
  { title: "Piping Design and Engineering", image: piping1 },
  { title: "Civil and Structural Engineering", image: civil1 },
  { title: "Electrical Engineering", image: electrical1 },
  { title: "Procurement Support", image: procurement1 },
  { title: "Document Control and Management", image: document1 },
  { title: "As-Built and Field Services", image: field1 },
  { title: "Telecom Engineering", image: telecom1 },
];

const About = () => {
  const handleClick = (title) => {
    console.log("Clicked:", title);
    // Replace this with your navigation or modal logic
  };

  return (
    <section className="relative py-24 pt-50 bg-[#EFF5F5] overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-inter font-semibold text-[#1c1c1e] text-center mb-6 tracking-tight">
        Design & Detailed Engineering
      </h2>
      <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
        Explore our comprehensive suite of engineering services tailored for excellence in design and execution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
            {/* Image */}
            <img
              loading="lazy"
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-5 flex flex-col items-start justify-end">
              <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-wide">
                {service.title}
              </h3>
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleClick(service.title)}
                className="flex items-center text-sm bg-red-500 text-white px-4 py-2 rounded font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                View Details <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;