import React from "react";
import "./About.css";
import profilePic from "C:/Users/yeswa/myprofile/portfolio-website/portfolio/src/gojo.webp"; // Add your image

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="text">
          <h2>About Me</h2>
          <p>
            I am <strong>Yeswanth Sai Tirumalasetty</strong>, a data-driven software engineer specializing in 
            <strong>data analytics, machine learning, and cloud-based solutions.</strong> With expertise in Python, SQL, 
            and Big Data technologies, I build <strong>scalable ETL workflows, predictive models, and AI-powered applications.</strong>
          </p>
          <p>
            Passionate about leveraging data for impactful insights, I thrive on solving complex problems and optimizing data-driven solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
