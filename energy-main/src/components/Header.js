import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Ensure it's compressed or converted to WebP

const navVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.1 },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Engineering Services", to: "/engineering" },
    { name: "Safety/Sustainability", to: "/safety" },
    { name: "Software Tools", to: "/software" },
    { name: "Industries", to: "/industries" },
    { name: "Association", to: "/association" },
    { name: "Career", to: "/career" },
    { name: "Location", to: "/location" },
    { name: "Contact", to: "/contact" },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#EFF5F5] shadow-md text-orange-900 border-b-2 border-gray-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.img
              src={logo}
              alt="Company Logo"
              className="w-24 h-16 object-contain"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex space-x-6 text-lg font-medium text-gray-900"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {navItems.map(({ name, to }) => (
              <motion.div key={name} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Link to={to} className="hover:text-red-600 transition-all duration-200">
                  {name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-yellow-600 text-3xl" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>

        {/* Progress bar under header */}
        <motion.div className="h-1 bg-white origin-left shadow-md" style={{ scaleX }} />
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="text-white text-2xl space-y-6 font-semibold">
              {navItems.map(({ name, to }) => (
                <motion.li key={name} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-red-400 transition-all"
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Header);
