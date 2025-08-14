import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">My Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="skill-icon"><i className="fas fa-code"></i></div>
            <h3>Programming Languages</h3>
            <p>
              Dart, C, C#, C++, JAVA, MATLAB (Image Processing), Python,
              Assembly 8086 and MIPS Assembly.
            </p>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="skill-icon"><i className="fas fa-globe"></i></div>
            <h3>Web Techniques</h3>
            <p>
              HTML5, CSS3, JavaScript, React.js, PHP, ASP.net(Web Forms +
              MVC), Node.Js(Express.Js framework + REST APIs) and Python(Flask
              Framework).
            </p>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="skill-icon"><i className="fas fa-database"></i></div>
            <h3>SQL And NoSQL DataBases</h3>
            <p>
              Microsoft SQL server, Oracle SQL, MySQl, SQLite, FireBase and
              MongoDB.
            </p>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="400">
            <div className="skill-icon"><i className="fas fa-mobile-alt"></i></div>
            <h3>Mobile App Development</h3>
            <p>
              Flutter(IOS, Android, macOs, Windows, Linux, Web),
              Firebase(Authentication, Firestore, Realtime Database), Dart,
              RiverPod, Rest APIS, Kotlin and Swift.
            </p>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="500">
            <div className="skill-icon"><i className="fas fa-network-wired"></i></div>
            <h3>Communication Systems</h3>
            <p>
              Experience with modern communication protocols, real-time
              communication systems, and implementing efficient serialization
              and data exchange mechanisms.
            </p>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="600">
            <div className="skill-icon"><i className="fas fa-tools"></i></div>
            <h3>Other Skills</h3>
            <p>
              Version control with Git, cross-platform app deployment,
              modularizing features in private Flutter packages, performance
              optimization, testing and debugging (unit and widget testing),
              encryption for data security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
