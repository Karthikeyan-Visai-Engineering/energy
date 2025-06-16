import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactOffices = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-50 py-20 px-4 md:px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 italic text-gray-800">
          Our Offices
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Shyamala Towers */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-5 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13527.132282456461!2d80.19812033282243!3d13.049559569281836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266cf7fc2055b%3A0x775c590b9889052a!2sShyamala%20Towers!5e1!3m2!1sen!2sin!4v1749547804151!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Shyamala Towers Location"
              ></iframe>
            </div>
            <h4 className="text-xl font-semibold mb-1 text-gray-900">Chennai Office</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Shyamala Towers, T Nagar, Chennai<br />
              📞 Tel: (916) 922-9200<br />
              📠 Fax: (916) 922-9200
            </p>
          </motion.div>

          {/* Calgary Office */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-5 aspect-video">
              <iframe
                title="Calgary Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.2292421064894!2d-114.0746149230561!3d51.04988214402292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ffb182bd047%3A0x18a1e9b8c67c9569!2s500%204%20Ave%20SW%20Suit%202500%2C%20Calgary%2C%20AB%20T2P%202V6%2C%20Canada!5e0!3m2!1sen!2sus!4v1749551838940!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <h4 className="text-xl font-semibold mb-1 text-gray-900">Calgary Office</h4>
            <p className="text-gray-700 leading-relaxed text-sm">
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
