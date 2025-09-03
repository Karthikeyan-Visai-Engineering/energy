import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Images
import process1 from "../assets/process2.webp";
import mech1 from "../assets/mechnical.webp";
import piping1 from "../assets/pipe.webp";
import civil1 from "../assets/civil1.webp";
import electrical1 from "../assets/electrical.webp";
import procurement1 from "../assets/procument.webp";
import document1 from "../assets/document.webp";
import field1 from "../assets/field.webp";
import telecom1 from "../assets/communication.webp";

// LazyImage Component with native lazy loading and fallback
const LazyImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-700 ease-in-out`}
      loading="lazy"
      decoding="async"
    />
  );
};

const Engineering = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
    <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24 font-poppins scroll-smooth">
      {/* SEO */}
      <Helmet>
        <title>Engineering Services – Visai Energy</title>
        <meta
          name="description"
          content="Explore Visai Energy’s full range of design and detailed engineering services including process, mechanical, civil, electrical, telecom, and more."
        />
      </Helmet>

      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4 tracking-tight">
          Design & Detailed Engineering
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore our comprehensive suite of engineering services tailored for excellence in design and execution.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative group rounded-xl overflow-hidden border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white will-change-transform"
          >
            <LazyImage
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Engineering;
