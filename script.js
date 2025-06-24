
/* Order Now Button */

const button = document.querySelector('.button-creative');
const glow = button.querySelector('::before');

button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  button.style.setProperty('--x', `${x}px`);
  button.style.setProperty('--y', `${y}px`);
});

/* Back to Top Button */
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTopBtn");

  // Show/hide button on scroll
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Scroll to top on click
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Success Message 
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill out all fields before submitting.');
      return;
    }

    document.getElementById('successMessage').classList.remove('d-none');
    document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });

    this.reset();
  });


