// App.js
import React, { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/cursor";
import About from "./pages/about";
import Intro from "./pages/intro";
import Uiux from "./projects/uiux";
import Merch from "./projects/merchandise";
import Flex from "./projects/flex";
import Flyer from "./projects/flyer";
import Loading from "./components/loading";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Expertise from "./pages/expertise";
import Outro from "./pages/outro";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const state = location.state;
  
    if (state?.scrollTo) {
      const scrollTarget = state.scrollTo;
  
      setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          const yOffset = -60; // Adjust based on fixed navbar or padding
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300); // enough delay for full DOM render
    }
  }, [location]);
  

  return loading ? (
    <Loading onComplete={() => setLoading(false)} />
  ) : (
    <div className="app-wrapper">
      <CustomCursor />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="intro">
                <Intro />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="expertise">
                <Expertise />
              </div>
              <div id="outro">
                <Outro />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Navbar />
            </>
            
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/merchandise" element={<Merch />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/flyer" element={<Flyer />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>

     
    </div>
  );
}

export default App;
