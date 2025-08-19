import React from "react";
import "./Certifications.css";

import flaskImage from "../assets/Images/flaskframework.jpg";
import flutterFirebaseImage from "../assets/Images/FlutterCertification.jpg";
import flutterApiImage from "../assets/Images/Flutter_Api.jpg";
import cybersecurityImage from "../assets/Images/CyberSecurityBootcamp_Cer.jpg";
import nodejsImage from "../assets/Images/NodeJsMasterClass.jpg";

const certificationsData = [
  {
    image: flaskImage,
    alt: "Flask Framework",
    title: "Python And Flask Framework",
    date: "Feb 20, 2024",
    link: "https://www.udemy.com/certificate/UC-92c5e674-523b-45dd-9f8a-61b36272b7e0/",
  },
  {
    image: flutterFirebaseImage,
    alt: "Flutter & Firebase",
    title: "Flutter & Firebase: Build E-commerce & Admin",
    date: "July 14, 2024",
    link: "https://www.udemy.com/certificate/UC-b818914a-4088-48f8-86e4-2c295be48fa2/",
  },
  {
    image: flutterApiImage,
    alt: "Flutter API",
    title: "Flutter Masterclass (Dart, APIs, Firebase & More)",
    date: "July 16, 2024",
    link: "https://www.udemy.com/certificate/UC-07623b9a-7e68-4833-ad65-575c496e9c88/",
  },
  {
    image: cybersecurityImage,
    alt: "CyberSecurity Bootcamp",
    title: "CyberSecurity Bootcamp",
    date: "July 16, 2024",
    link: "https://www.udemy.com/certificate/UC-870011da-2ea4-4c61-9b43-a5e82560656a/",
  },
  {
    image: nodejsImage,
    alt: "NodeJs Masterclass",
    title: "NodeJs Masterclass (Express, MongoDB, OpenAI)",
    date: "July 24, 2024",
    link: "https://www.udemy.com/certificate/UC-ea4117dc-5b14-4916-bf7f-5835fce9462d/",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Professional Development</span>
          <h2 className="section-title">My Certifications</h2>
        </div>
        <div className="certs-grid">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.link}
              className="cert-card"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="cert-image">
                <img src={cert.image} alt={cert.alt} />
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-date">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cert"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
