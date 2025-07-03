import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

const scrollToTop = () => window.scrollTo(0, 0);

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 font-inter text-sm">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Locations */}
        <div>
          <img src={logo} alt="Visai Energy" className="w-50 h-20 mb-4" />
          <h2 className="text-xl font-lightbold mb-4 text-yellow-400">
            Our Locations
          </h2>
          <div className="text-white text-base space-y-4">
            {/* Canada */}
            <div>
              <h3 className="text-orange-400 text-lg flex items-center gap-2 font-semibold">
                <img
                  src="https://flagcdn.com/ca.svg"
                  alt="Canada Flag"
                  className="w-6 h-4 rounded-sm shadow-sm"
                />
                CANADA
              </h3>
              <p>
                Visai Energy Inc <br />
                500 - 4th Avenue SW, Suite 2500 <br />
                Calgary, T2P 2V6, Alberta <br />
                Ph: 403 604 9777
              </p>
            </div>
            {/* India */}
            <div>
              <h3 className="text-orange-400 text-lg flex items-center gap-2 font-semibold">
                <img
                  src="https://flagcdn.com/in.svg"
                  alt="India Flag"
                  className="w-6 h-4 rounded-sm shadow-sm"
                />
                INDIA
              </h3>
              <p>
                Visai Engineering India Pvt Ltd <br />
                136, Arcot Road, 3rd Floor Suite #325 <br />
                Shyamala Tower, Saligramam <br />
                Chennai 600093, Tamil Nadu, India <br />
                Ph: +91 72008 73833
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h2 className="text-yellow-400 text-lg font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-4">
            <li>
              <Link onClick={scrollToTop} to="/">
                › Home
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/about1">
                › About Us
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/careers">
                › Careers
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/contact">
                › Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-yellow-400 text-lg font-semibold mb-4">
            Our Services
          </h2>
          <ul className="space-y-4">
            <li>
              <Link onClick={scrollToTop} to="/safety">
                › Safety/Sustainability
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/software">
                › Software Tools
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/industries">
                › Industries
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/engineering">
                › Engineering Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Engineering Disciplines */}
        <div>
          <h2 className="text-yellow-400 text-lg font-semibold mb-4">
            Engineering Disciplines
          </h2>
          <ul className="space-y-4">
            <li>
              <Link onClick={scrollToTop} to="/processing">
                › Process Engineering
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/mechanical">
                › Mechanical Engineering
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/piping">
                › Piping Design and Engineering
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/civil">
                › Civil and Structural Engineering
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/electrical">
                › Electrical Engineering
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/telecom">
                › Telecom Engineering
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/procurement">
                › Procurement Support
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/document">
                › Document Control and Management
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/field">
                › As-Built and Field Services
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 text-center">
        <div className="flex justify-center gap-6 text-2xl text-white">
          <a
            href="https://www.linkedin.com/company/visai-energy-inc/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/Visaienergy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Visai Energy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
