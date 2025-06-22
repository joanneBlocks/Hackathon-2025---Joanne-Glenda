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
