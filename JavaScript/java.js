// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-out",
  once: false,
  offset: 100,
});

// Add at the top of java.js
const themeToggle = document.querySelector(".theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateToggleIcon(currentTheme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
  const icon = themeToggle.querySelector("i");
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  icon.style.transform = theme === "dark" ? "rotate(360deg)" : "rotate(0deg)";
}

// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navMenu.classList.add("show");
    document.body.style.overflow = "hidden";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("show");
    document.body.style.overflow = "";
    menuOpen = false;
  }
});

// Close menu when nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("show");
    document.body.style.overflow = "";
    menuOpen = false;
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section");

function activateNavLink() {
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Header style on scroll
const header = document.querySelector(".header");

function toggleHeaderStyle() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Contact form submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Here you would typically send the form data to your server or email service
    // For now, we'll just log it and show a success message
    console.log("Form Data:", { name, email, subject, message });

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");

    // Reset form
    contactForm.reset();
  });
}

// Add scroll event listeners
window.addEventListener("scroll", activateNavLink);
window.addEventListener("scroll", toggleHeaderStyle);

// Initialize active nav link on page load
document.addEventListener("DOMContentLoaded", () => {
  activateNavLink();
  toggleHeaderStyle();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// Add a simple typing animation to the hero title
function typeWriter(element, text, speed = 100, callback) {
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  element.textContent = "";
  type();
}
