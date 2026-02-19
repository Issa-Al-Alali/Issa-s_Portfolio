import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Issa Al-Alali</h3>
            <p>Software Engineer | AI & Data Engineering</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Languages</h4>
              <ul>
                <li>Arabic - Mother Tongue</li>
                <li>English - Fluent</li>
                <li>Spanish - Beginner</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>General Skills</h4>
              <ul>
                <li>Ready and able to work under pressure</li>
                <li>Trustworthy in responsibilities</li>
                <li>Able to work with minimal supervision</li>
                <li>Outstanding communication skills</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Issa Al-Alali. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
