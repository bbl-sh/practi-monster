// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
document.body.classList.toggle("dark-mode"); // Initialize theme

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button icon
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀️";
  }
});
