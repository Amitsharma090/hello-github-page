// Simple interactions for the starter page
const button = document.getElementById('clickButton');
const message = document.getElementById('message');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (button) {
  button.addEventListener('click', () => {
    message.textContent = 'You clicked the button! Nice work — try editing this file on GitHub.';
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (navLinks) navLinks.classList.remove('show');
  });
});
