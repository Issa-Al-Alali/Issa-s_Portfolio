import React from "react";
import "./Projects.css";

import windowsImage from "../assets/Images/windows.jpg";
import whispersImage from "../assets/Images/Whispers.png";
import aquaImage from "../assets/Images/aqua.jpg";

const projectsData = [
  {
    image: windowsImage,
    alt: "Windows Towards Knowledge",
    title: "Windows Towards Knowledge",
    description:
      "A fully-functional online bookstore website using HTML, CSS and JavaScript",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    image: whispersImage,
    alt: "Whispering Walls",
    title: "Whispering Walls",
    description:
      "A fully-functional social media website with a chat, Developed using HMTL, CSS, JavaScript and PHP",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "#",
  },
  {
    image: aquaImage,
    alt: "AquaGreen",
    title: "AquaGreen - Senior Project",
    description: `Automated Aquaponic greenhouse, <strong>Arduino</strong> was
                integrated for hardware control and
                <strong> FLUTTER</strong> for a user-friendly mobile
                application connected to the system via bluetooth.`,
    tags: ["Flutter", "Arduino", "Bluetooth", "IoT"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
                <div className="project-overlay">
                  <a href={project.link} className="btn-project">
                    View Details
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
