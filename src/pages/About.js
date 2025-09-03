import React, { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FiTarget, FiEye, FiZap, FiStar, FiShield } from "react-icons/fi";
import heroImg from "../assets/welcome1.webp";

// Fade in animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

// Parent stagger animation
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Lazy-load image with fallback for older browsers
const LazyImage = ({ src, alt, className, motionProps = {} }) => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ("loading" in HTMLImageElement.prototype) {
      setLoaded(true);
      return;
    }

    const node = imgRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.img
      ref={imgRef}
      src={loaded ? src : undefined}
      alt={alt}
      loading="lazy"
      className={className}
      {...motionProps}
    />
  );
};

const About = () => {
  return (
    <div className="bg-white text-[#1e325c] font-['Poppins','sans-serif']">
      {/* SEO */}
      <Helmet>
        <title>About Visai Energy – Engineering Excellence in Piping & Structures</title>
        <meta
          name="description"
          content="Learn more about Visai Energy's mission, leadership, and decades of experience delivering innovative engineering solutions across the globe."
        />
        {/* Add other meta tags like Open Graph, keywords, etc. if needed */}
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <LazyImage
          src={heroImg}
          alt="About Hero"
          className="w-full h-full object-cover brightness-75"
          motionProps={{
            initial: { scale: 1.2 },
            animate: { scale: 1 },
            transition: { duration: 1.5 },
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-white text-5xl md:text-7xl font-extrabold mb-4"
              variants={fadeInUp}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-white text-xl md:text-2xl max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Engineering the future with innovation, safety, and sustainability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-24 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-start">
        {/* TODO: Add mission and vision content here */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To deliver reliable and innovative engineering services that empower the energy and infrastructure sectors worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To be a global leader in engineering excellence, fostering sustainable growth through technology and collaboration.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#1e325c] py-24 px-6 md:px-20 text-white text-center">
        <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
          {[
            { icon: <FiTarget />, label: "Commitment to Quality" },
            { icon: <FiEye />, label: "Visionary Thinking" },
            { icon: <FiZap />, label: "Agility & Innovation" },
            { icon: <FiShield />, label: "Integrity & Safety" },
            { icon: <FiStar />, label: "Client-Centric Focus" },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-3xl text-[#ead57b]">{item.icon}</div>
              <p className="text-lg leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(About);
