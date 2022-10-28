import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
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
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
            </>
          }
        />
      </Routes>
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default App;
