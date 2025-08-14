import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <div className="project-image">
              <img src="/Images/windows.jpg" alt="Windows Towards Knowledge" />
              <div className="project-overlay">
                <a href="#" className="btn-project">View Details</a>
              </div>
            </div>
            <div className="project-content">
              <h3>Windows Towards Knowledge</h3>
              <p>
                A fully-functional online bookstore website using HTML, CSS
                and JavaScript
              </p>
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <div className="project-image">
              <img src="/Images/Whispers.png" alt="Whispering Walls" />
              <div className="project-overlay">
                <a href="#" className="btn-project">View Details</a>
              </div>
            </div>
            <div className="project-content">
              <h3>Whispering Walls</h3>
              <p>
                A fully-functional social media website with a chat, Developed
                using HMTL, CSS, JavaScript and PHP
              </p>
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
              </div>
            </div>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <div className="project-image">
              <img src="/Images/aqua.jpg" alt="AquaGreen" />
              <div className="project-overlay">
                <a href="#" className="btn-project">View Details</a>
              </div>
            </div>
            <div className="project-content">
              <h3>AquaGreen - Senior Project</h3>
              <p>
                Automated Aquaponic greenhouse, <strong>Arduino</strong> was
                integrated for hardware control and
                <strong> FLUTTER</strong> for a user-friendly mobile
                application connected to the system via bluetooth.
              </p>
              <div className="project-tags">
                <span>Flutter</span>
                <span>Arduino</span>
                <span>Bluetooth</span>
                <span>IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
