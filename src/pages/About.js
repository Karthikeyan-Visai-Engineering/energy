import React, { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FiTarget, FiEye, FiZap, FiStar, FiShield } from "react-icons/fi";
import heroImg from "../assets/welcome1.webp";

/* ───────────────── Animations ───────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.25 } },
};

/* ───────────────── Lazy Image ───────────────── */
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.img
      ref={imgRef}
      src={loaded ? src : undefined}
      loading="lazy"
      alt={alt}
      className={className}
      {...motionProps}
    />
  );
};

/* ───────────────── Component ───────────────── */
const About = () => {
  return (
    <div className="bg-[#f8fafc] text-[#1e325c] font-['Poppins','sans-serif']">
      <Helmet>
        <title>About Visai Energy – Engineering Excellence</title>
        <meta
          name="description"
          content="Learn about Visai Energy’s mission, vision, and commitment to engineering innovation."
        />
      </Helmet>

      {/* ───────────────── Hero Modern Section ───────────────── */}
      <section className="relative w-full h-[75vh] overflow-hidden">
        <LazyImage
          src={heroImg}
          alt="About Visai Energy"
          className="w-full h-full object-cover brightness-[55%]"
          motionProps={{
            initial: { scale: 1.2 },
            animate: { scale: 1 },
            transition: { duration: 1.4, ease: "easeOut" },
          }}
        />

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg"
            >
              About Us
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              Engineering the future through innovation, precision, and sustainable excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ───────────────── Mission & Vision Section ───────────────── */}
      <section className="py-24 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Our Mission",
            text: "To deliver reliable and innovative engineering services that empower the energy and infrastructure sectors worldwide.",
          },
          {
            title: "Our Vision",
            text: "To be a global leader in engineering excellence, fostering sustainable growth through technology and collaboration.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white shadow-xl border border-gray-200/60 backdrop-blur-md hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-extrabold mb-4 text-[#1e325c]">
              {item.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ───────────────── Core Values Section ───────────────── */}
      <section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-[#1e325c] via-[#2b406e] to-[#0e1a33] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Our Core Values
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: <FiTarget />, label: "Commitment to Quality" },
            { icon: <FiEye />, label: "Visionary Thinking" },
            { icon: <FiZap />, label: "Agility & Innovation" },
            { icon: <FiShield />, label: "Integrity & Safety" },
            { icon: <FiStar />, label: "Client-Centric Focus" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-4xl text-[#ead57b]">{item.icon}</div>
              <p className="text-lg leading-relaxed">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(About);
