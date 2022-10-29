import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Demos from "./Components/Demos";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
// import Slider from "./Components/Slider";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              {/* <Slider /> */}
              <Hero />
              <About />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/demos"
          element={
            <>
              <Navbar />
              <Demos />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
