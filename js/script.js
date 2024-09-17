/* Hamburger Menu */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* Copy Button */
document.getElementById('copy-button').addEventListener('click', function () {
    const textToCopy = document.getElementById('text-to-copy').innerText;

    navigator.clipboard.writeText(textToCopy).then(function () {
        alert('Text copied to clipboard');
    }).catch(function (error) {
        console.error('Failed to copy text: ', error);
    });
});

/* Dark Mode */
var themeBtns = document.querySelectorAll(".theme-btn");

themeBtns.forEach(function (btn) {
    btn.onclick = function () {
        document.body.classList.toggle("dark-theme");

        var isDarkTheme = document.body.classList.contains("dark-theme");
        var image = document.querySelector(".image1");
        if (isDarkTheme) {
            image.src = "assets/BrightLogo.png";
        } else {
            image.src = "assets/DarkLogo.png";
        }

        // Toggle visibility of moon and sun icons based on the theme
        var moonIcons = document.querySelectorAll(".moon-icon");
        var sunIcons = document.querySelectorAll(".sun-icon");

        moonIcons.forEach(function (moonIcon) {
            moonIcon.style.display = isDarkTheme ? "none" : "block";
        });

        sunIcons.forEach(function (sunIcon) {
            sunIcon.style.display = isDarkTheme ? "block" : "none";
        });
    };
});





