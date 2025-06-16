import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ImageSlider from "./components/ImageSlider";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Association from "./pages/Association";
import Industries from "./pages/Industries";
import Engineering from "./pages/Engineering";
import Safety from "./pages/Safety";
import Software from "./pages/Software";
import Location from "./pages/Location";

import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ImageSlider />
                  <Home />
                  <About />
                  <Engineering />
                  <Industries />
                  <Association />
                  <Safety />
                  <Software />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/association" element={<Association />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/software" element={<Software />} />
            <Route path="/career" element={<Career />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
