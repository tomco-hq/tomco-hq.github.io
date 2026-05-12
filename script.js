// Generic GitHub Pages site script.
console.log("site loaded");

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
