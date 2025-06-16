import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
      name: "Engineering Services",
      subItems: [
        { name: "Processing Engineering", to: "/processing" },
        { name: "Mechanical Engineering", to: "/mechanical" },
        { name: "Piping Design and Engineering", to: "/piping" },
        { name: "Civil and Structural Engineering", to: "/civil" },
        { name: "Electrical Engineering", to: "/electrical" },
        { name: "Document Control and Management", to: "/document" },
        { name: "Procurement Support", to: "/procurement" },
        { name: "As-Built and Field Services", to: "field" },
        { name: "Telecom Engineering", to: "/telecom" },
      ],
    },
    { name: "Safety/Sustainability", to: "/safety" },
    { name: "Software Tools", to: "/software" },
    { name: "Industries", to: "/industries" },
    { name: "Association", to: "/association" },
    { name: "Career", to: "/career" },
    { name: "Location", to: "/location" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-orange-900 border-b-[6px] border-blue-600">
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
            {navItems.map((item) =>
              !item.subItems ? (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    className="hover:text-red-600 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ) : (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(window.dropdownTimer);
                    setDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    window.dropdownTimer = setTimeout(() => setDropdownOpen(false), 300);
                  }}
                >
                  <span className="cursor-pointer hover:text-red-600 transition-all duration-200">
                    {item.name}
                  </span>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-60 bg-white shadow-xl rounded-lg border border-gray-200 z-50"
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.to}
                            className="block px-5 py-3 hover:bg-blue-50 text-gray-800 font-medium transition-all duration-200"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-600 text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
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

            <ul className="text-white text-2xl space-y-6 font-semibold text-center">
              {navItems.map((item) =>
                !item.subItems ? (
                  <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-red-400"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ) : (
                  <details key={item.name} className="text-left text-white">
                    <summary className="cursor-pointer text-xl font-semibold">
                      {item.name}
                    </summary>
                    <ul className="pl-4 mt-2 space-y-2 text-lg">
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.to}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-red-400"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Header);
