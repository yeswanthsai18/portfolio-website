import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [showNavbar, setShowNavbar] = useState(false); // State to control Navbar visibility

  return (
    <Router>
      {showNavbar && <Navbar />} {/* Show Navbar only after clicking View Portfolio */}
      <Routes>
        <Route path="/" element={<Home setShowNavbar={setShowNavbar} />} /> {/* Pass setShowNavbar */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
