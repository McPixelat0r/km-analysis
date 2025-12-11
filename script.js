// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      mainNav?.classList.remove("open");
    }
  });
});

// Back-to-top button
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 320) {
      backToTopBtn.classList.add("show");
      backToTopBtn.classList.remove("hide");
    } else if (backToTopBtn.classList.contains("show")) {
      backToTopBtn.classList.add("hide");
      setTimeout(() => {
        backToTopBtn.classList.remove("show");
      }, 180);
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
