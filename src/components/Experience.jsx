import React from "react";
import "./Experience.css";

import amedazImage from "../assets/Images/amedaz.png";
import freelanceImage from "../assets/Images/freelance.webp";
import megabeeImage from "../assets/Images/megabee.png";

const experienceData = [
  {
    image: amedazImage,
    alt: "Amedaz",
    title: "Mobile App Developer Lead",
    company: "Amedaz",
    type: "Full-time",
    date: "Sep 2024 - Present",
    points: [
      "Lead cross-platform mobile development using <strong>Flutter</strong>, focusing on offline data synchronization and complex SQL-based state management.",
      "Optimized application performance through efficient <strong>API integration</strong> and data orchestration patterns.",
      "Orchestrated professional <strong>CI/CD workflows</strong> and collaborated with cross-functional teams to deliver production-ready software.",
    ],
  },
  {
    image: freelanceImage,
    alt: "Freelance",
    title: "Full-Stack & Mobile App Developer",
    company: "Self-employed",
    type: "Freelance",
    date: "Feb 2022 - Present",
    points: [
      "Managed the full development lifecycle for diverse clients, from <strong>UI/UX design</strong> to backend and Firebase integration.",
      "Engineered custom mobile and web solutions, implementing <strong>RESTful APIs</strong> and robust data security practices.",
      "Demonstrated strong project management by successfully balancing client deliverables with academic studies.",
    ],
  },
  {
    image: megabeeImage,
    alt: "Mega-bee",
    title: "Flutter Developer Intern",
    company: "Mega-bee",
    type: "Internship",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Contributed to the design and testing of new features within a professional <strong>Agile</strong> environment.",
      "Worked with a team of engineers to design, develop, and test mobile app features using <strong>Flutter</strong>.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="timeline">
          {experienceData.map((job, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <img src={job.image} alt={job.alt} />
                </div>
                <div className="timeline-info">
                  <h3>{job.title}</h3>
                  <h4>
                    {job.company}
                    <span className="job-type">{job.type}</span>
                  </h4>
                  <span className="timeline-date">
                    <i className="fas fa-calendar-alt"></i>
                    {job.date}
                  </span>
                  <ul className="timeline-points">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: point }}
                      ></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
