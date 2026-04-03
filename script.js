// For dark button toggle:
// When the user clicks this button, the website switches between light and dark theme
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    if(darkModeToggle)
    {
        darkModeToggle.addEventListener("click", () => {
        
        // If true, toggle the 'dark-mode' class on the body
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️"; // Show sun icon in dark mode
        } else {
            darkModeToggle.textContent = "🌙"; // Show moon icon in light mode
        }
    });
    }
});

// For 'Back to the top' toggle:
// When the user clicks this button, the page scrolls smoothly back to the top
document.addEventListener("DOMContentLoaded", () =>{
    const backButton = document.getElementById("backToTop");
    if(backButton)
    {
        backButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
     });
    }
});