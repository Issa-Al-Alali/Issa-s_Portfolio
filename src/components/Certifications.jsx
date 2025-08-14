import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Professional Development</span>
          <h2 className="section-title">My Certifications</h2>
        </div>
        <div className="certs-grid">
          <div className="cert-card" data-aos="fade-up" data-aos-delay="100">
            <div className="cert-image">
              <img src="/Images/flaskframework.jpg" alt="Flask Framework" />
            </div>
            <div className="cert-content">
              <h3>Python And Flask Framework</h3>
              <p className="cert-date">Feb 20, 2024</p>
              <a
                href="https://www.udemy.com/certificate/UC-92c5e674-523b-45dd-9f8a-61b36272b7e0/"
                target="_blank"
                className="btn-cert"
                >View Certificate</a
              >
            </div>
          </div>
          <div className="cert-card" data-aos="fade-up" data-aos-delay="200">
            <div className="cert-image">
              <img
                src="/Images/FlutterCertification.jpg"
                alt="Flutter & Firebase"
              />
            </div>
            <div className="cert-content">
              <h3>Flutter & Firebase: Build E-commerce & Admin</h3>
              <p className="cert-date">July 14, 2024</p>
              <a
                href="https://www.udemy.com/certificate/UC-b818914a-4088-48f8-86e4-2c295be48fa2/"
                target="_blank"
                className="btn-cert"
                >View Certificate</a
              >
            </div>
          </div>
          <div className="cert-card" data-aos="fade-up" data-aos-delay="300">
            <div className="cert-image">
              <img src="/Images/Flutter_Api.jpg" alt="Flutter API" />
            </div>
            <div className="cert-content">
              <h3>Flutter Masterclass (Dart, APIs, Firebase & More)</h3>
              <p className="cert-date">July 16, 2024</p>
              <a
                href="https://www.udemy.com/certificate/UC-07623b9a-7e68-4833-ad65-575c496e9c88/"
                target="_blank"
                className="btn-cert"
                >View Certificate</a
              >
            </div>
          </div>
          <div className="cert-card" data-aos="fade-up" data-aos-delay="400">
            <div className="cert-image">
              <img
                src="/Images/CyberSecurityBootcamp_Cer.jpg"
                alt="CyberSecurity Bootcamp"
              />
            </div>
            <div className="cert-content">
              <h3>CyberSecurity Bootcamp</h3>
              <p className="cert-date">July 16, 2024</p>
              <a
                href="https://www.udemy.com/certificate/UC-870011da-2ea4-4c61-9b43-a5e82560656a/"
                target="_blank"
                className="btn-cert"
                >View Certificate</a
              >
            </div>
          </div>
          <div className="cert-card" data-aos="fade-up" data-aos-delay="500">
            <div className="cert-image">
              <img
                src="/Images/NodeJsMasterClass.jpg"
                alt="NodeJs Masterclass"
              />
            </div>
            <div className="cert-content">
              <h3>NodeJs Masterclass (Express, MongoDB, OpenAI)</h3>
              <p className="cert-date">July 24, 2024</p>
              <a
                href="https://www.udemy.com/certificate/UC-ea4117dc-5b14-4916-bf7f-5835fce9462d/"
                target="_blank"
                className="btn-cert"
                >View Certificate</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
