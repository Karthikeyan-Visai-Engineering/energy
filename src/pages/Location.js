import React, {
  useRef,
  useEffect,
  useState,
  memo,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/location.webp";

/* ── slide animations ── */
const leftSlide = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightSlide = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ── lazy-load Google Map iframe ── */
const LazyMap = ({ src, title, previewAlt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        className="w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  const staticSrc = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=OMITTED&c=0,0&z=11&w=640&h=360&f=0`; // Replace with valid image if needed

  return (
    <picture
      className="w-full h-full cursor-pointer"
      onClick={handleLoad}
      onMouseEnter={handleLoad}
      onTouchStart={handleLoad}
    >
      <img
        src={staticSrc}
        alt={previewAlt}
        className="w-full h-full object-cover"
      />
    </picture>
  );
};

/* ── Main Component ── */
const Location = () => {
  const sectionRef = useRef(null);
  const [bgReady, setBgReady] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry], ob) => {
        if (entry.isIntersecting) {
          setBgReady(true);
          ob.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 bg-cover bg-center bg-no-repeat text-gray-800 font-urbanist"
      style={{ backgroundImage: bgReady ? `url(${bgImage})` : "none" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-white/70 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-[#ead57b] underline underline-offset-8 decoration-[#ead57b]"
        >
          Our Offices
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Chennai */}
          <motion.div
            variants={leftSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl p-6 bg-gradient-to-br from-[#1e325c] to-blue-900 text-white shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-5 aspect-video shadow-lg">
              <LazyMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13527.132282456461!2d80.19812033282243!3d13.049559569281836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266cf7fc2055b%3A0x775c590b9889052a!2sShyamala%20Towers!5e1!3m2!1sen!2sin!4v1749547804151!5m2!1sen!2sin"
                title="Chennai Office Map"
                previewAlt="Preview map of Chennai office location"
              />
            </div>
            <h4 className="text-2xl font-bold mb-3 text-[#ead57b]">Chennai Office</h4>
            <p className="text-white/90">
              Shyamala&nbsp;Towers, Saligramam, Chennai<br />
              📞 Tel: (916)&nbsp;922‑9200<br />
              📠 Fax: (916)&nbsp;922‑9200
            </p>
          </motion.div>

          {/* Canada */}
          <motion.div
            variants={rightSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl p-6 bg-blue-900 text-[#1e325c] shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-5 aspect-video shadow-lg">
              <LazyMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.2292421064894!2d-114.0746149230561!3d51.04988214402292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ffb182bd047%3A0x18a1e9b8c67c9569!2s500%204%20Ave%20SW%20Suit%202500%2C%20Calgary%2C%20AB%20T2P%202V6%2C%20Canada!5e0!3m2!1sen!2sus!4v1749551838940!5m2!1sen!2sus"
                title="Canada Office Map"
                previewAlt="Preview map of Calgary office location"
              />
            </div>
            <h4 className="text-2xl font-bold mb-3 text-[#ead57b]">Canada Office</h4>
            <p className="text-white/90">
              500&nbsp;4 Ave&nbsp;SW, Suite&nbsp;2500<br />
              Calgary, AB T2P 2V6, Canada
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Location);
