const links = document.querySelectorAll(".nav-links a");
const current = location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}
