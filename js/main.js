const toggleButton = document.getElementById("mode-toggle");
const modeIcon = document.getElementById("mode-icon");

// Check for saved user preference for dark mode (if any)
const userPrefersDark = localStorage.getItem("darkMode") === "enabled";

// Apply saved preference on load
if (userPrefersDark) {
  document.body.classList.add("dark-mode");
  document.querySelector(".navbar").classList.add("dark-mode");
  modeIcon.src = "dark-icon.png"; // Change to dark icon
}

// Toggle dark mode when button is clicked
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".navbar").classList.toggle("dark-mode");

  // Toggle icon image and save the user's preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    modeIcon.src = "dark-icon.png"; // Set dark mode icon
    localStorage.setItem("darkMode", "enabled");
  } else {
    modeIcon.src = "light-icon.png"; // Set light mode icon
    localStorage.setItem("darkMode", "disabled");
  }
});
