import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-yellow-400">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-300 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        onClick={scrollToTop} // Ensure the scroll to top is triggered
        className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
