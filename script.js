// For dark button toggle:

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

// For 'Back to the top' toggle:
document.addEventListener("DOMContentLoaded", () =>{
    const backButton = document.getElementById("backToTop");
    if(backButton)
    {
        backButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
     });
    }
});