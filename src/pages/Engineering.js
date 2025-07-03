import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const About = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Service data
  const services = [
    { title: "Process Engineering", to: "/processing", image: process1 },
    { title: "Mechanical Engineering", to: "/mechanical", image: mech1 },
    { title: "Piping Design and Engineering", to: "/piping-design", image: piping1 },
    { title: "Civil and Structural Engineering", to: "/civil-structural", image: civil1 },
    { title: "Electrical Engineering", to: "/electrical", image: electrical1 },
    { title: "Procurement Support", to: "/procurement-support", image: procurement1 },
    { title: "Document Control and Management", to: "/document-control", image: document1 },
    { title: "As-Built and Field Services", to: "/field-services", image: field1 },
    { title: "Telecom Engineering", to: "/telecom-engineering", image: telecom1 },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24 font-poppins">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4 tracking-tight">
          Design & Detailed Engineering
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore our comprehensive suite of engineering services tailored for excellence in design and execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative group rounded-xl overflow-hidden border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
              <Link
                to={service.to}
                onClick={scrollToTop}
                className="text-white text-lg font-semibold underline hover:text-yellow-300 transition-colors"
              >
                › {service.title}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
