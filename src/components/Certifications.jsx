import React, { useState } from "react";
import "./Certifications.css";

// Keep your existing imports
import flaskImage from "../assets/Images/flaskframework.jpg";
import flutterFirebaseImage from "../assets/Images/FlutterCertification.jpg";
import flutterApiImage from "../assets/Images/Flutter_Api.jpg";
import cybersecurityImage from "../assets/Images/CyberSecurityBootcamp_Cer.jpg";
import nodejsImage from "../assets/Images/NodeJsMasterClass.jpg";
import microsoftCer from "../assets/Images/microsoftCer.png";
import linkedIn from "../assets/Images/linkedin.png";

const certificationsData = [
  {
    image: linkedIn,
    alt: "Some of my linkedIn Certificarion",
    title: "Some of my linkedIn Certificarion on my linkedin profile",
    date: "",
    link: "https://www.linkedin.com/in/issaalalali/",
  },
  {
    image: microsoftCer,
    alt: "Azure Fundemental Certification and other tophies",
    title: "Azure Fundemental Certification and other tophies",
    date: "",
    link: "https://learn.microsoft.com/en-us/users/issaalalali-9596/credentials/certification/azure-fundamentals?wt.mc_id=certnurture_eml14_email_wwl&tab=credentials-tab",
  },
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

// Lazy loading image component
const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`lazy-image-container ${className}`}>
      {!loaded && !error && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy" // Native lazy loading
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {error && (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 6 initially, all when showAll is true
  const displayedCerts = showAll
    ? certificationsData
    : certificationsData.slice(0, 6);
  const hasMore = certificationsData.length > 6;

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Professional Development</span>
          <h2 className="section-title">My Certifications</h2>
        </div>

        <div className="certs-grid">
          {displayedCerts.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className="cert-card"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="cert-image">
                <LazyImage
                  src={cert.image}
                  alt={cert.alt}
                  className="cert-img"
                />
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-date">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cert"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="show-more-container" data-aos="fade-up">
            <button
              className="btn-show-more"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show Less"
                : `Show ${certificationsData.length - 6} More`}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={showAll ? "rotate-180" : ""}
              >
                <path d="M7,10L12,15L17,10H7Z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
