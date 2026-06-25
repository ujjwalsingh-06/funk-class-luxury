/* ======================================
   FUNK CASUAL LUXURY
   Premium JavaScript
====================================== */

// ==============================
// Loader
// ==============================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    if (loader) {
      loader.classList.add("hide");
    }
  }, 1200);
});

// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if (navLinks) {
      navLinks.classList.remove("show");
    }

  });

});

// ==============================
// Scroll Reveal
// ==============================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

  revealElements.forEach(element => {

    const windowHeight = window.innerHeight;
    const top = element.getBoundingClientRect().top;

    if (top < windowHeight - 120) {

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==============================
// Animated Counter
// ==============================

const counters = document.querySelectorAll("[data-count]");

let counterStarted = false;

function startCounters() {

  if (counterStarted) return;

  counters.forEach(counter => {

    const target = Number(counter.dataset.count);

    let current = 0;

    const speed = target / 100;

    function updateCounter() {

      current += speed;

      if (current < target) {

        counter.innerText = Math.floor(current);

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target + "+";

      }

    }

    updateCounter();

  });

  counterStarted = true;

}

window.addEventListener("scroll", () => {

  const stats = document.querySelector(".stats-section");

  if (!stats) return;

  const top = stats.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {

    startCounters();

  }

});

// ==============================
// Navbar Background
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(0,0,0,0.92)";
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

  } else {

    navbar.style.background = "rgba(0,0,0,.75)";
    navbar.style.boxShadow = "none";

  }

});

// ==============================
// Active Navigation
// ==============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

  const href = link.getAttribute("href");

  if (href === currentPage || (currentPage === "" && href === "index.html")) {

    link.classList.add("active");

  }

});

// ==============================
// Smooth Button Hover Effect
// ==============================

document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-4px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0px)";

  });

});

// ==============================
// Image Lazy Loading
// ==============================

const lazyImages = document.querySelectorAll("img[data-src]");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const img = entry.target;

        img.src = img.dataset.src;

        img.removeAttribute("data-src");

        observer.unobserve(img);

      }

    });

  });

  lazyImages.forEach(img => observer.observe(img));

}

// ==============================
// Console Signature
// ==============================

console.log(
  "%cFUNK CASUAL LUXURY",
  "color:#d4af37;font-size:20px;font-weight:bold;"
);

console.log("Premium Website Developed by Web Buddy");
// Contact form to WhatsApp

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const interest = document.getElementById("interest").value.trim();
    const message = document.getElementById("message").value.trim();

    const text = `Hi FUNK CASUAL LUXURY,%0A%0AName: ${name}%0APhone: ${phone}%0AInterested In: ${interest}%0AMessage: ${message}`;

    window.open(`https://wa.me/918770539841?text=${text}`, "_blank");
  });
}
