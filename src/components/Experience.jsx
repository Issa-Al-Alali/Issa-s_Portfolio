import React from "react";
import "./Experience.css";

import amedazImage from "../assets/Images/amedaz.png";
import freelanceImage from "../assets/Images/freelance.webp";
import megabeeImage from "../assets/Images/megabee.png";

const experienceData = [
  {
    image: amedazImage,
    alt: "Amedaz",
    title: "Mobile App Developer",
    company: "Amedaz",
    date: "Sep 2024 - Present",
    description: `Developing and maintaining cross-platform mobile apps using
                  <strong> FLUTTER</strong>, integrating APIs, Firebase, and
                  implementing state management with
                  <strong> Riverpod</strong>. Collaborating with
                  cross-functional teams to ensure project delivery within
                  deadlines.`,
  },
  {
    image: freelanceImage,
    alt: "Freelance",
    title: "Freelance Flutter Developer",
    company: "self-employed",
    date: "Feb 2022 - Present",
    description: `Designed and developed custom Flutter application for
                  diverse clients, Collaborated directly with clients to
                  gather requirements and provide technical consulting,
                  Managed full development lifecycle from concept and UI/UX
                  design to development and maintenance.`,
  },
  {
    image: megabeeImage,
    alt: "Megabee",
    title: "Mobile App Developer Intern",
    company: "Megabee",
    date: "Aug 2023 - Sep 2023",
    description: `Developed and maintained Mobile app using
                  <strong> FLUTTER</strong>. Worked with a team of engineers to
                  design, develop and test new features.`,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">My Experience</h2>
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
                  <h4>{job.company}</h4>
                  <span className="timeline-date">{job.date}</span>
                  <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
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
