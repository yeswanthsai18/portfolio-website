import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import profileImage from "C:/Users/yeswa/myprofile/portfolio-website/portfolio/src/gojo.webp"; // Ensure the correct path

function Home() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  const roles = [
    "Data Scientist & AI Enthusiast",
    "Turning Data into Insights",
    "Building Scalable Data Pipelines",
    "Harnessing AI for Innovation",
    "Optimizing Data for Business Growth",
    "Predicting Trends with Machine Learning",
    "Crafting Intelligent Systems",
    "Transforming Raw Data into Smart Solutions"
  ];

  useEffect(() => {
    if (pause) {
      setTimeout(() => setPause(false), 2000); // 2-second pause between roles
      return;
    }

    const currentRole = roles[index % roles.length];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && text === currentRole) {
      setPause(true);
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting, pause]);

  // Handle Portfolio Click
  const handleViewPortfolio = () => {
    navigate("/about");
  };

  return (
    <section className="home">
      <div className="home-container">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>

        {/* Introduction Card */}
        <div className="intro-card">
          <h1>Hey, I'm Yeswanth Sai Tirumalasetty</h1>
          <h2><span className="typewriter">{text}</span></h2>
          <p className="intro-text">
            Data isn't just numbers; it's the key to unlocking potential, the foundation of informed decisions, 
            and the new language of business. I'm passionate about turning raw data into actionable insights, 
            empowering businesses with data-driven strategies, and providing data-driven solutions for a smarter world. 
            My purpose is to help you see the world through data, unlocking its power for better decisions, 
            because I believe the future is data-driven, and I'm here to help you navigate it.
          </p>

          {/* Buttons */}
          <div className="buttons">
            <button className="btn" onClick={handleViewPortfolio}>View Portfolio</button>
            <a href="/contact" className="btn contact-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
