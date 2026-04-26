document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navAnchors.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

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

    navAnchors.forEach((a) => {
      a.style.opacity = a.getAttribute("href").includes(current) ? "1" : "0.7";
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - navbar.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  const swiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  };

  new Swiper(".mySwiper", swiperOptions);

  new Swiper(".mySwiperReverse", {
    ...swiperOptions,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });
});

const sponsorForm = document.getElementById('sponsorForm');
const statusText = document.getElementById('formStatus');
const scriptURL = 'https://script.google.com/macros/s/AKfycbz4fjLpk85wAYjTdjWHGRGQ0jSg8-3k55fiXxVWdUOe_SqFUNouOCCakRLaQJ29WBPtwA/exec';

sponsorForm.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('submitBtn').disabled = true;
  statusText.innerText = "Enviando...";

  fetch(scriptURL, { method: 'POST', body: new FormData(sponsorForm)})
    .then(response => {
      statusText.innerText = "Sucesso! Verifique seu e-mail.";
      sponsorForm.reset();
      document.getElementById('submitBtn').disabled = false;
    })
    .catch(error => {
      statusText.innerText = "Erro ao enviar. Tente novamente.";
      document.getElementById('submitBtn').disabled = false;
    });
});