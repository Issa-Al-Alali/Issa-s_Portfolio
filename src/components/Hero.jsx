import React from "react";
import "./Hero.css";
import heroImage from "../assets/Images/issa.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Floating particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up" data-aos-delay="200">
            <h1>Issa Al Alali</h1>
            <h2>Mobile App Developer</h2>
            <p>
              Master's in Computer Science (M1 Completed) at Lebanese
              University. Passionate about creating innovative mobile solutions
              and bringing ideas to life through code.
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
              <a
                href="https://www.udemy.com/user/issa-al-alali/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Udemy Courses"
              >
                <i className="fas fa-book"></i>
              </a>
            </div>

            <a href="#contact" className="btn-primary">
              Contact Me
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="hero-image" data-aos="fade-left" data-aos-delay="400">
            <img src={heroImage} alt="Issa Al Alali - Mobile App Developer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
