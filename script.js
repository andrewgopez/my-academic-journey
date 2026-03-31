const darkModeToggle = document.getElementById("darkModeToggle");

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    if(darkModeToggle)
    {
        darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️"; 
        } else {
            darkModeToggle.textContent = "🌙"; 
        }
    });
    }
});