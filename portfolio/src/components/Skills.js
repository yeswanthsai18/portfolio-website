import React, { useEffect } from "react";
import "./Skills.css";
import {
  FaPython, FaDatabase, FaAws, FaJava, FaReact, FaDocker, FaGithub, FaChartBar,
} from "react-icons/fa";
import {
  SiMongodb, SiTensorflow, SiApachehadoop, SiPytorch, SiSnowflake, SiTableau, SiKeras, SiFlask, SiJupyter, SiCloudflare,
} from "react-icons/si";

function Skills() {
  useEffect(() => {
    const handleNavClick = () => {
      if (window.location.hash === "#skills") {
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", handleNavClick);
    return () => window.removeEventListener("hashchange", handleNavClick);
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#FFD43B" },
        { name: "SQL", icon: <FaDatabase />, color: "#00758f" },
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "JavaScript", icon: <FaReact />, color: "#f7df1e" },
        { name: "Scala", icon: <FaJava />, color: "#cc0000" },
        { name: "R", icon: <FaDatabase />, color: "#276DC3" },
        { name: "C", icon: <FaDatabase />, color: "#A8B9CC" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
        { name: "SQL Databases", icon: <FaDatabase />, color: "#00758f" },
        { name: "NoSQL Databases", icon: <FaDatabase />, color: "#4DB33D" },
        { name: "Snowflake", icon: <SiSnowflake />, color: "#56CCF2" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws />, color: "#ff9900" },
        { name: "Azure", icon: <SiCloudflare />, color: "#0089D6" }, // Updated Azure icon
        { name: "Docker", icon: <FaDocker />, color: "#0db7ed" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
      ],
    },
    {
      category: "Data Engineering & ML",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, color: "#ff6f00" },
        { name: "PyTorch", icon: <SiPytorch />, color: "#ee4c2c" },
        { name: "Hadoop", icon: <SiApachehadoop />, color: "#ffcc00" },
        { name: "Keras", icon: <SiKeras />, color: "#D00000" },
        { name: "Flask", icon: <SiFlask />, color: "#000000" },
        { name: "Jupyter Notebook", icon: <SiJupyter />, color: "#F37626" },
      ],
    },
    {
      category: "BI & Visualization Tools",
      skills: [
        { name: "Tableau", icon: <SiTableau />, color: "#E97627" },
        { name: "Power BI", icon: <FaChartBar />, color: "#f2c811" },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Professional Skills</h2>
      {skills.map((category, index) => (
        <div key={index} className="skill-category-container">
          <h3 className="skill-category">{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
