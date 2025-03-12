// Menu Toggle
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky Header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove Menu Icon Toggle and Navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Reveal
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".scroll");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Dark Mode Toggle
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

console.log("Script Loaded"); // Cek apakah script.js dimuat

function setThemeMode(mode) {
  console.log("Setting theme to:", mode); // Debugging
  if (mode === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="bx bxs-sun"></i>'; // Ikon matahari
  } else {
    body.classList.remove("dark-mode");
    themeToggle.innerHTML = '<i class="bx bxs-moon"></i>'; // Ikon bulan
  }
}

// Cek tema yang tersimpan di localStorage
const savedTheme = localStorage.getItem("theme") || "light";
console.log("Saved theme from localStorage:", savedTheme); // Debugging
setThemeMode(savedTheme);

// Toggle Dark Mode saat diklik
themeToggle.addEventListener("click", () => {
  console.log("Theme toggle clicked!"); // Debugging
  const currentMode = body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("theme", currentMode);
  setThemeMode(currentMode);
});

// Inisialisasi Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Jumlah slide yang ditampilkan sekaligus
  spaceBetween: 30, // Jarak antar slide
  loop: true, // Loop slider
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Membuat bullet pagination bisa diklik
  },
});
