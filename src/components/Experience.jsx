import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">My Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/Images/amedaz.png" alt="Amedaz" />
              </div>
              <div className="timeline-info">
                <h3>Mobile App Developer</h3>
                <h4>Amedaz</h4>
                <span className="timeline-date">Sep 2024 - Present</span>
                <p>
                  Developing and maintaining cross-platform mobile apps using
                  <strong> FLUTTER</strong>, integrating APIs, Firebase, and
                  implementing state management with
                  <strong> Riverpod</strong>. Collaborating with
                  cross-functional teams to ensure project delivery within
                  deadlines.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/Images/freelance.webp" alt="Amedaz" />
              </div>
              <div className="timeline-info">
                <h3>Freelance Flutter Developer</h3>
                <h4>self-employed</h4>
                <span className="timeline-date">Feb 2022 - Present</span>
                <p>
                  Designed and developed custom Flutter application for
                  diverse clients, Collaborated directly with clients to
                  gather requirements and provide technical consulting,
                  Managed full development lifecycle from concept and UI/UX
                  design to development and maintenance.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/Images/megabee.png" alt="Megabee" />
              </div>
              <div className="timeline-info">
                <h3>Mobile App Developer Intern</h3>
                <h4>Megabee</h4>
                <span className="timeline-date">Aug 2023 - Sep 2023</span>
                <p>
                  Developed and maintained Mobile app using
                  <strong> FLUTTER</strong>. Worked with a team of engineers to
                  design, develop and test new features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
