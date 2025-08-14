import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>
        <div className="contact-content">
          <div
            className="contact-info"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3>Let's chat!</h3>
            <p>
              I'm always open to networking and exploring new opportunities.
              Feel free to reach out if you have any questions or just want to
              say hello.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>issa.al.alali@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+961 70 144 631</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Zahle, Lebanon</span>
              </div>
            </div>
            <div className="contact-social">
              <a
                href="https://www.linkedin.com/in/issaalalali"
                target="_blank"
                className="social-link"
                ><i className="fab fa-linkedin-in"></i
              ></a>
              <a
                href="https://www.udemy.com/user/issa-al-alali/"
                target="_blank"
                className="social-link"
                ><i className="fas fa-book"></i
              ></a>
              <a
                href="https://wa.link/3vpw42"
                target="_blank"
                className="social-link"
                ><i className="fab fa-whatsapp"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
