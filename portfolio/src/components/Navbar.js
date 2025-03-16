import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Import Home Icon
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Home Icon for Navigation */}
      <h2 className="logo">
        <Link to="/">
          <FaHome className="home-icon" />
        </Link>
      </h2>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Me</Link></li>
        <li><Link to="/skills" className={location.pathname === "/skills" ? "active" : ""}>Skills</Link></li>
        <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
        <li><Link to="/articles" className={location.pathname === "/articles" ? "active" : ""}>Articles</Link></li>
        <li><Link to="/education" className={location.pathname === "/education" ? "active" : ""}>Education</Link></li>
        <li><Link to="/experience" className={location.pathname === "/experience" ? "active" : ""}>Experience</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
