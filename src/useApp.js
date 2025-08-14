import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useApp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const activateNavLink = () => {
      let scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', activateNavLink);

    return () => {
      window.removeEventListener('scroll', activateNavLink);
    };
  }, []);

  return {};
};

export default useApp;