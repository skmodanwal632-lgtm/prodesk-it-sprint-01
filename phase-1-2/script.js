const body = document.body;
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const savedTheme = localStorage.getItem("prodesk-theme");
if (savedTheme === "dark") body.classList.add("dark");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("prodesk-theme", body.classList.contains("dark") ? "dark" : "light");
});
