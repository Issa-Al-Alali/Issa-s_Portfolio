import React from "react";
import "./Hero.css";
import heroImage from "../assets/Images/issa.png";
import TypeWriter from "./TypeWriter";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Floating particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Scan line overlay */}
      <div className="scan-lines"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up" data-aos-delay="200">
            <h1 className="glitch" data-text="Issa Al-Alali">
              Issa Al-Alali
            </h1>

            <h2>
              <TypeWriter
                words={[
                  "AI & Data Engineering Specialist",
                  "Full-Stack Software Engineer",
                ]}
                speed={70}
                deleteSpeed={35}
                pause={2200}
              />
            </h2>

            <div className="hero-badges">
              <span className="hero-badge cloud-badge">
                <i className="fas fa-cloud"></i>
                Cloud-Ready — AWS EC2 &amp; S3
              </span>
              <span className="hero-badge mlops-badge">
                <i className="fas fa-cogs"></i>
                MLOps — MLflow · DVC · Docker
              </span>
            </div>

            <p>
              3+ years of professional engineering experience transitioning into
              MLOps, LLM Fine-tuning, and Scalable Data Pipelines. Expert in
              building scalable systems and API architecture, now applying deep
              learning and Big Data to enterprise-level challenges.
            </p>

            <div className="hero-info">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Zahle, Lebanon
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:issa.al.alali@gmail.com">
                  issa.al.alali@gmail.com
                </a>
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +961 70 144 631
              </p>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/issaalalali"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://wa.link/3vpw42"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://github.com/Issa-Al-Alali"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>

            <a href="#contact" className="btn-primary">
              <span className="btn-text">Contact Me</span>
              <i className="fas fa-arrow-right"></i>
              <span className="btn-shine"></span>
            </a>
          </div>

          <div className="hero-image" data-aos="fade-left" data-aos-delay="400">
            <div className="image-frame">
              <img src={heroImage} alt="Issa Al-Alali — Software Engineer" />
              <div className="image-ring"></div>
              <div className="image-ring ring-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
