import React from "react";
import { motion } from "framer-motion";

import autodesk from "../assets/Autodesk.png";
import ansys from "../assets/Ansys.png";
import fathom from "../assets/fathom.png";
import mathcad from "../assets/mathcad.png";
import tekla from "../assets/tekla.png";
import solidworks from "../assets/solidworks.png";
import aspen from "../assets/aspen.webp";

const companies = [
  { name: "Autodesk", logo: autodesk },
  { name: "Tekla", logo: tekla },
  { name: "Ansys", logo: ansys },
  { name: "Fathom", logo: fathom },
  { name: "Mathcad", logo: mathcad },
  { name: "SolidWorks", logo: solidworks },
  { name: "Aspen", logo: aspen },
];

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
    },
  }),
};

export default function CompaniesUsingTools() {
  return (
    <motion.section
      className="bg-white/70 pt-32 pb-16 px-6"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-[#2A2438] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 flex justify-center gap-2 flex-wrap font-inter">
        {["Software", "Tools", "We", "Use"].map((word, i) => (
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

      <div className="flex flex-wrap justify-center gap-6">
        {companies.map((company, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 shadow-lg rounded-2xl border border-black p-6 w-40 flex flex-col items-center justify-center font-inter"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={company.logo}
              alt={company.name}
              className="h-16 object-contain mb-3"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-900 font-extrabold text-sm text-center capitalize">
              {company.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
