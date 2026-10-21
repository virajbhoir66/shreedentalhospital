const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

document.getElementById('heroBookBtn').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('aboutBookBtn').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' });
});

const form = document.getElementById('appointmentForm');
const whatsAppNumber = '919075030207';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  let message = `*New Appointment Request - Shree Dental Care Shikrapur*%0A%0A`;
  message += `*Name:* ${data.name}%0A`;
  message += `*Phone:* ${data.phone}%0A`;
  if (data.email) message += `*Email:* ${data.email}%0A`;
  if (data.service) message += `*Service:* ${data.service}%0A`;
  if (data.date) message += `*Preferred Date:* ${data.date}%0A`;
  if (data.time) message += `*Preferred Time:* ${data.time}%0A`;
  if (data.message) message += `*Message:* ${data.message}%0A`;

  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${message}`;

  window.open(whatsAppUrl, '_blank');

  form.reset();
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -60px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .about-content, .about-img-wrapper, .doctor-card, .appointment-form, .contact-info, .ba-card, .review-card').forEach(el => {
  observer.observe(el);
});