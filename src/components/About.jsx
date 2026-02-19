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
            <img src={aboutImage} alt="Issa Al-Alali" />
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-delay="400">
            <h3>Software Engineer | Master's in AI & Data Engineering</h3>
            <p className="about-tagline">
              <i>
                Bridging 3+ Years of Production Engineering with AI & Big Data
                Specialization
              </i>
            </p>
            <p>
              Software Engineer with 3+ years of experience in full-stack and
              mobile development, currently specializing in AI and Data
              Engineering. Expert in building scalable systems and API
              architecture, now applying deep learning (PyTorch), MLOps (DVC,
              MLflow), and Big Data (Spark, Hadoop) to enterprise-level
              challenges. Proven ability to transition complex business logic
              into autonomous AI agents and automated CI/CD pipelines.
            </p>
            <div className="about-education">
              <div className="education-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <strong>Master's in AI & Data Engineering</strong>
                  <span>Lebanese University — Present</span>
                </div>
              </div>
              <div className="education-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <strong>B.Sc. in Computer Science</strong>
                  <span>Lebanese University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
