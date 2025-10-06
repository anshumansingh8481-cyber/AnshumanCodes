// main.js - small interactions for navigation and footer year
document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle && navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // current year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;
});
