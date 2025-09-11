import React, { useState, useEffect } from "react";
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

// Simple Image Component
const SimpleImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    }}
    loading="lazy"
  />
);

const Engineering = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <section
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f9fafc",
        padding: "4rem 1rem",
        scrollBehavior: "smooth",
      }}
    >
      {/* SEO */}
      <Helmet>
        <title>Engineering Services – Visai Energy</title>
        <meta
          name="description"
          content="Explore Visai Energy’s full range of design and detailed engineering services including process, mechanical, civil, electrical, telecom, and more."
        />
      </Helmet>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#003366", marginBottom: "0.5rem" }}>
          Design & Detailed Engineering
        </h2>
        <p style={{ fontSize: "1rem", color: "#555", maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>
          Explore our comprehensive suite of engineering services tailored for excellence in design and execution.
        </p>
      </div>

      {/* Service Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <SimpleImage src={service.image} alt={service.title} />
            <div style={{ padding: "1rem" }}>
              <Link
                to={service.to}
                onClick={scrollToTop}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#003366",
                  textDecoration: "none",
                  padding: "0.5rem 0",
                }}
              >
                <span>{service.title}</span>
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "0.5rem 0.75rem",
            fontSize: "1rem",
            backgroundColor: "#003366",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ↑ Top
        </button>
      )}
    </section>
  );
};

export default Engineering;
