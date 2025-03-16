import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import myImage from "C:/Users/yeswa/myprofile/portfolio-website/portfolio/src/gojo.webp"; // Corrected relative path

function Home({ setShowNavbar }) {
  const navigate = useNavigate();

  const handleViewPortfolio = () => {
    setShowNavbar(true); // Show Navbar after clicking
    navigate("/about");  // Redirect to About Me section
  };

  return (
    <section className="home">
      <div className="home-content">
        <h1>Hey, I'm Yeswanth Sai Tirumalasetty</h1>
        <p>Passionate about Data, Machine Learning, and Automation.</p>
        <div className="buttons">
          <button className="btn" onClick={handleViewPortfolio}>View Portfolio</button>
          <a href="/contact" className="btn">Contact Me</a>
        </div>
      </div>
      <div className="home-image">
        <img src={myImage} alt="My Profile" />
      </div>
    </section>
  );
}

export default Home;
