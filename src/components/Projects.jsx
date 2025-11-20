import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const githubUsername = "Issa-Al-Alali";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=100`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        // Filter out forked repos and select the 6 most recently pushed ones
        const filteredProjects = data.filter((repo) => !repo.fork).slice(0, 6);
        setProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, [githubUsername]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="project-content">
                <div className="project-header">
                  <i className="fab fa-github project-icon"></i>
                  <h3>{project.name.replace(/[-_]/g, " ")}</h3>
                </div>
                <p>{project.description || "No description provided."}</p>
                <div className="project-tags">
                  {project.topics.slice(0, 5).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project"
                >
                  <i className="fas fa-code"></i> Source
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project btn-live"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="more-projects-container">
          <a href="https://github.com/Issa-Al-Alali" target="_blank" rel="noopener noreferrer" className="btn-more-projects">
            View More on GitHub <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
