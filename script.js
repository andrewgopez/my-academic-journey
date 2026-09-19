document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const backButton = document.getElementById("backToTop");
    const hookDetails = document.querySelector(".hook-details");

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

    /*  Sets up the "Did I quit?" interaction:
        smoothly reveals the answer every time it is opened */
    if (hookDetails) {
        hookDetails.addEventListener("toggle", () => {
            const answer = hookDetails.querySelector(".hook-answer");

            if (hookDetails.open) {
                answer.classList.remove("show-answer");

                /* Forces the animation to restart every time */
                void answer.offsetWidth;

                answer.classList.add("show-answer");
            } else {
                answer.classList.remove("show-answer");
            }
        });
    }
});