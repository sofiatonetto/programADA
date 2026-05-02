document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  let ticking = false;

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

  const updateScrollState = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navAnchors.forEach((a) => {
      a.classList.toggle('active', a.getAttribute("href").includes(current));
    });

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }, { passive: true });

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
    grabCursor: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
  };

  new Swiper(".mySwiper", swiperOptions);
  new Swiper(".mySwiperReverse", {
    ...swiperOptions,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      reverseDirection: true,
    },
  });

  updateScrollState();
});

const sponsorForm = document.getElementById('sponsorForm');
const statusText = document.getElementById('formStatus');
const scriptURL = 'https://script.google.com/macros/s/AKfycbztkjBwa5cennfO1W_a674cMAAkN3jaeXZGeR4kngh9Ua6Y5NLvKrq-IH7r56s3p-lAVQ/exec';

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