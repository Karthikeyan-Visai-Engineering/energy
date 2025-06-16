import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaOilCan,
  FaBolt,
  FaMountain,
  FaTint,
  FaFlask,
  FaTruckMoving,
} from "react-icons/fa";

const industries = [
  { icon: <FaIndustry size={36} />, label: "Oil and Gas" },
  { icon: <FaOilCan size={36} />, label: "Oil Sands and SAGD" },
  { icon: <FaBolt size={36} />, label: "Power" },
  { icon: <FaMountain size={36} />, label: "Mining" },
  { icon: <FaFlask size={36} />, label: "Petrochemicals" },
  { icon: <FaTint size={36} />, label: "Water Treatment" },
  { icon: <FaTruckMoving size={36} />, label: "Pipeline Transportation" },
];

export default function DraggableIndustries() {
  const carouselRef = useRef(null);
  const innerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const carousel = carouselRef.current;
      const inner = innerRef.current;
      if (carousel && inner) {
        const scrollWidth = inner.scrollWidth - carousel.offsetWidth;
        setWidth(scrollWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <motion.section
      className="bg-white pt-24 pb-20 px-4 md:px-8 lg:px-16 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-[#2A2438] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 flex justify-center gap-2 flex-wrap font-inter">
        {["Industries", "We", "Serve"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.div ref={carouselRef} className="cursor-grab overflow-hidden">
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-4 sm:gap-6 px-4 sm:px-10 md:px-20"
        >
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[140px] sm:min-w-[150px] h-[120px] sm:h-[130px] bg-[#2E5077] rounded-2xl border border-gray-400 text-inter shadow-xl p-4 sm:p-6 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="text-white mb-3 sm:mb-4">{item.icon}</div>
              <h3 className="text-sm sm:text-base text-center font-semibold text-white">
                {item.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
