import React from "react";
import "./About.css";
import aboutImage from "../assets/Images/about.jpg";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">My Journey</h2>
        </div>
        <div className="about-content">
          <div
            className="about-image"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img src={aboutImage} alt="Issa Al Alali" />
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-delay="400">
            <h3>
              Mobile App Development Specialist | Computer Science Researcher
            </h3>
            <p>
              <i>
                Flutter Expert Bridging Academic Rigor with Production-Grade
                Solutions
              </i>
            </p>
            <p>
              As a dedicated Flutter developer at Amedaz, I architect
              cross-platform applications that leverage Firebase ecosystems,
              RiverPod state management, and REST API integrations while
              pursuing advanced research in distributed systems through my
              Master's in Computer Science at Lebanese University. This dual
              focus enables me to implement cutting-edge mobile solutions
              informed by academic insights into scalability and system
              architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
