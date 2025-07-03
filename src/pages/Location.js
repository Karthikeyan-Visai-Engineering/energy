import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/location.jpg";

// Slide animations
const leftSlideVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightSlideVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ContactOffices = () => {
  return (
    <section
      className="relative min-h-screen py-24 px-6 bg-cover bg-center bg-no-repeat text-gray-800 font-urbanist"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Frosted overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-white/70 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-blue-900 via-blue-800 to-[#ead57b] drop-shadow-xl underline underline-offset-8 decoration-[#ead57b]"
        >
          Our Offices
        </motion.h2>

        {/* Office Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Chennai Office */}
          <motion.div
            variants={leftSlideVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl p-6 bg-gradient-to-br from-[#1e325c] to-blue-900 text-white shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-5 aspect-video shadow-lg">
              <iframe
                title="Chennai Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13527.132282456461!2d80.19812033282243!3d13.049559569281836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266cf7fc2055b%3A0x775c590b9889052a!2sShyamala%20Towers!5e1!3m2!1sen!2sin!4v1749547804151!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <h4 className="text-2xl font-bold mb-3 text-[#ead57b]">
              Chennai Office
            </h4>
            <p className="text-white/90 text-base leading-relaxed">
              Shyamala Towers, Saligramam, Chennai<br />
              📞 Tel: (916) 922-9200<br />
              📠 Fax: (916) 922-9200
            </p>
          </motion.div>

          {/* Canada Office */}
          <motion.div
            variants={rightSlideVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl p-6 bg-blue-900 text-[#1e325c] shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-5 aspect-video shadow-lg">
              <iframe
                title="Canada Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.2292421064894!2d-114.0746149230561!3d51.04988214402292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ffb182bd047%3A0x18a1e9b8c67c9569!2s500%204%20Ave%20SW%20Suit%202500%2C%20Calgary%2C%20AB%20T2P%202V6%2C%20Canada!5e0!3m2!1sen!2sus!4v1749551838940!5m2!1sen!2sus"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <h4 className="text-2xl font-bold mb-3 text-[#ead57b]">Canada Office</h4>
            <p className="text-white/90 text-base leading-relaxed">
              500 4 Ave SW, Suite 2500<br />
              Calgary, AB T2P 2V6, Canada
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactOffices;
