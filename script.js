const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

const savedTheme = localStorage.getItem('nefxitoTheme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = 'Light mode';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
  localStorage.setItem('nefxitoTheme', isDark ? 'dark' : 'light');
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = 'Please complete all fields before sending.';
    return;
  }

  formFeedback.textContent = 'Thanks! Your message is ready to help you get started.';
  contactForm.reset();
});
