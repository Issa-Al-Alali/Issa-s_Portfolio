import React from "react";
import "./Skills.css";

const Skills = () => {
  const flutterSkills = [
    {
      icon: "fas fa-mobile-alt",
      title: "Cross-Platform Development",
      description: "iOS, Android, macOS, Windows, Linux, and Web applications with a single codebase"
    },
    {
      icon: "fas fa-fire",
      title: "Firebase Integration",
      description: "Authentication, Firestore, Realtime Database, Cloud Functions, Storage, and Push Notifications"
    },
    {
      icon: "fas fa-plug",
      title: "API Integration",
      description: "REST APIs, WebSocket connections, and real-time data synchronization"
    },
    {
      icon: "fas fa-cubes",
      title: "State Management",
      description: "Riverpod, Provider, BLoC pattern, and efficient app architecture"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security & Performance",
      description: "Data encryption, secure storage, performance optimization, and memory management"
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Modular Architecture",
      description: "Private packages, feature modules, clean architecture, and scalable codebases"
    }
  ];

  const otherSkills = [
    {
      icon: "fas fa-code",
      title: "Programming Languages",
      description: "Dart, C, C#, C++, Java, MATLAB, Python, Assembly 8086 and MIPS Assembly",
      delay: 100,
    },
    {
      icon: "fas fa-globe",
      title: "Frontend Technologies",
      description: "React.js, Angular, HTML5, CSS3, JavaScript (ES6+), Vite",
      delay: 200,
    },
    {
      icon: "fas fa-server",
      title: "Backend Technologies",
      description: "Node.js (Express.js), Python (Flask, Django), PHP, ASP.NET, REST APIs",
      delay: 300,
    },
    {
      icon: "fas fa-database",
      title: "Databases",
      description: "SQL: MS SQL Server, Oracle, MySQL, SQLite. NoSQL: Firebase, MongoDB",
      delay: 400,
    },
    {
      icon: "fas fa-tools",
      title: "Development Tools",
      description: "Git, cross-platform deployment, testing frameworks, performance optimization",
      delay: 500,
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        {/* Main Flutter Section */}
        <div className="flutter-showcase" data-aos="fade-up" data-aos-delay="100">
          <div className="flutter-header">
            <div className="flutter-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="flutter-title">
              <h3>Mobile App Development</h3>
              <p>Flutter & Cross-Platform Solutions</p>
            </div>
          </div>
          
          <div className="flutter-grid">
            {flutterSkills.map((skill, index) => (
              <div 
                key={index}
                className="flutter-card" 
                data-aos="zoom-in" 
                data-aos-delay={200 + (index * 100)}
              >
                <div className="flutter-card-icon">
                  <i className={skill.icon}></i>
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills Section */}
        <div className="other-skills" data-aos="fade-up" data-aos-delay="800">
          <h3 className="other-skills-title">Additional Technical Skills</h3>
          <div className="skills-grid">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                data-aos="zoom-in"
                data-aos-delay={900 + skill.delay}
              >
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;