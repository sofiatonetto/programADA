document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(125, 42, 132, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.style.backgroundColor = '#7d2a84';
      navbar.style.backdropFilter = 'none';
    }

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((a) => {
      a.style.opacity = "0.7";
      if (a.getAttribute("href").includes(current)) {
        a.style.opacity = "1";
      }
    });
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbar.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "0.8s ease-out";
      }
    });
  }, { threshold: 0.1 });

  const revealElements = document.querySelectorAll('.section-title, .speaker-row, .gallery-item, .team-member, .p-destaque');
  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    observer.observe(el);
  });
});