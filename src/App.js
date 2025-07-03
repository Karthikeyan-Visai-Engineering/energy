import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ImageSlider from "./components/ImageSlider";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Import ScrollToTop

import Home from "./pages/Home";
import About from "./pages/About";
import About1 from "./pages/About1";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Association from "./pages/Association";
import Industries from "./pages/Industries";
import Engineering from "./pages/Engineering";
import Safety from "./pages/Safety";
import Software from "./pages/Software";
import Location from "./pages/Location";

import Processing from "./pages/Processing";
import Electrical from "./pages/Electrical";
import Mechanical from "./pages/Mechanical";
import Civil from "./pages/Civil";
import Field from "./pages/Field";
import Telecom from "./pages/Telecom";
import Piping from "./pages/Piping";
import Procurement from "./pages/Procurement";
import Document from "./pages/Document";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-['Poppins','Urbanist','sans-serif'] bg-[#f9fafb] text-[#1e325c]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop /> {/* ✅ Add here */}
          <Header />
          <main className="pt-20">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ImageSlider />
                    <Home />
                    <About/>
                    <Engineering />
                    <Industries />
                    <Association />
                    <Safety />
                    <Software />
                    <Contact />
                  </>
                }
              />
              <Route path="/about1" element={<About1 />} />
              <Route path="/about" element={<About />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/association" element={<Association />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/software" element={<Software />} />
              <Route path="/location" element={<Location />} />
              <Route path="/contact" element={<Contact />} />

              {/* Services Pages */}
              <Route path="/processing" element={<Processing />} />
              <Route path="/electrical" element={<Electrical />} />
              <Route path="/civil" element={<Civil />} />
              <Route path="/field" element={<Field />} />
              <Route path="/telecom" element={<Telecom />} />
              <Route path="/piping" element={<Piping />} />
              <Route path="/procurement" element={<Procurement />} />
              <Route path="/mechanical" element={<Mechanical />} />
              <Route path="/document" element={<Document />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
