const toggleButton = document.getElementById("mode-toggle");
const modeIcon = document.getElementById("mode-icon");

// Elements that will change in dark mode
const darkModeElements = [document.body, document.querySelector(".navbar")];

// Check for saved user preference for dark mode (if any)
const userPrefersDark = localStorage.getItem("darkMode") === "enabled";

// Apply saved preference on load
if (userPrefersDark) {
  darkModeElements.forEach((el) => el.classList.add("dark-mode"));
  modeIcon.src = "dark-icon.png"; // Change to dark icon
}

// Toggle dark mode when button is clicked
toggleButton.addEventListener("click", () => {
  darkModeElements.forEach((el) => el.classList.toggle("dark-mode"));

  // Toggle icon image and save the user's preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    modeIcon.src = "dark-icon.png"; // Set dark mode icon
    localStorage.setItem("darkMode", "enabled");
  } else {
    modeIcon.src = "light-icon.png"; // Set light mode icon
    localStorage.setItem("darkMode", "disabled");
  }
});
