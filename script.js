window.addEventListener("scroll", function () {
  document.querySelectorAll(".section").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

// Optional: Animate visible sections
window.addEventListener("scroll", function () {
  document.querySelectorAll(".section").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
const repeatObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // remove to re-trigger animation
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.section').forEach(section => {
  repeatObserver.observe(section);
});
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
