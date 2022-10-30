import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Newsletter from "./Components/Newsletter";

import "./index.css";

// Lazy Components
const Hero = lazy(() => import("./Components/Hero"));
const Footer = lazy(() => import("./Components/Footer"));
const Portfolio = lazy(() => import("./Components/Portfolio"));
const Navbar = lazy(() => import("./Components/Navbar"));
const Services = lazy(() => import("./Components/Services"));
const About = lazy(() => import("./Components/About"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Suspense fallback={<div>Loading...</div>}>
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
              <Navbar />
              <About />
              <Suspense fallback={<div>Loading...</div>}>
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
              <Navbar />
              <Services />
              <Suspense fallback={<div>Loading...</div>}>
                <Footer />
              </Suspense>
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Navbar />
              <Portfolio />
              <Suspense fallback={<div>Loading...</div>}>
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
