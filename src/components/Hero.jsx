import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up" data-aos-delay="200">
            <h1>Issa Al Alali</h1>
            <h2>Mobile App Developer</h2>
            <p>
              Master's in Computer Science (M1 Completed) at Lebanese University
            </p>
            <div className="hero-info">
              <p><i className="fas fa-map-marker-alt"></i> Zahle, Lebanon</p>
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:issa.al.alali@gmail.com">issa.al.alali@gmail.com</a>
              </p>
              <p><i className="fas fa-phone"></i> +961 70 144 631</p>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/issaalalali" target="_blank" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.link/3vpw42" target="_blank" className="social-link"><i className="fab fa-whatsapp"></i></a>
              <a href="https://github.com/Issa-Al-Alali" target="_blank" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.udemy.com/user/issa-al-alali/" target="_blank" className="social-link"><i className="fas fa-book"></i></a>
            </div>
            <a href="#contact" className="btn-primary">Contact Me</a>
          </div>
          <div className="hero-image" data-aos="fade-left" data-aos-delay="400">
            <img src="/Images/issa.png" alt="Issa Al Alali" className="floating" />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
    </section>
  );
};

export default Hero;
