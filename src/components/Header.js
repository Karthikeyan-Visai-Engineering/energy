import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about1" },
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
        { name: "As-Built and Field Services", to: "/field" },
        { name: "Telecom Engineering", to: "/telecom" },
      ],
    },
    { name: "Safety/Sustainability", to: "/safety" },
    { name: "Software Tools", to: "/software" },
    { name: "Industries", to: "/industries" },
    { name: "Association", to: "/association" },
    { name: "Location", to: "/location" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-lg font-semibold text-[#1e325c]">
            {navItems.map((item) =>
              !item.subItems ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="hover:text-yellow-600 hover:underline underline-offset-4 transition"
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span className="cursor-pointer hover:text-yellow-600 hover:underline underline-offset-4">
                    {item.name}
                  </span>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-4 w-80 bg-white/90 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-gray-200 px-4 py-4 z-50"
                      >
                        {item.subItems.map((sub) => (
                          <li key={sub.to} className="py-1">
                            <Link
                              to={sub.to}
                              className="block px-2 py-1 text-base text-[#1e325c] hover:bg-yellow-100 rounded-md transition"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-[#1e325c]"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 p-6 flex flex-col gap-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="self-end text-4xl text-[#1e325c]"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="text-xl font-semibold text-[#1e325c] space-y-4">
              {navItems.map((item) =>
                !item.subItems ? (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-yellow-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <details key={item.name}>
                    <summary className="cursor-pointer">{item.name}</summary>
                    <ul className="pl-4 mt-2 space-y-2 text-base">
                      {item.subItems.map((sub) => (
                        <li key={sub.to}>
                          <Link
                            to={sub.to}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-yellow-600"
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
