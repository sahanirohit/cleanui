import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Newsletter from "./Components/Newsletter";
import Testimonials from "./Components/Testimonials";

import "./index.css";

// Lazy Components
const Hero = lazy(() => import("./Components/Hero"));
const Footer = lazy(() => import("./Components/Footer"));
const Portfolio = lazy(() => import("./Components/Portfolio"));
const Navbar = lazy(() => import("./Components/Navbar"));
const Services = lazy(() => import("./Components/Services"));
const About = lazy(() => import("./Components/About"));

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Newsletter />
                <Portfolio />
                <Footer />
              </Suspense>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <About />
                <div className="py-20">
                  <Newsletter />
                </div>
                <Footer />
              </Suspense>
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Services />
                <Footer />
              </Suspense>
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Portfolio />
                <Footer />
              </Suspense>
            </>
          }
        />
        <Route
          path="/testimonial"
          element={
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Testimonials />
                <Footer />
              </Suspense>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Contact />
                <Footer />
              </Suspense>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
