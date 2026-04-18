document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const backButton = document.getElementById("backToTop");

    /*  Sets up the dark mode toggle button
        switches between light and dark themes and updates the icon (🌙 / ☀️) */
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            /* Updates the button icon depending on whether dark mode is active */
            darkModeToggle.textContent =
                document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        });
    }

    /*  Sets up the back-to-top button:
        smoothly scrolls the page back to the top when clicked */
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});