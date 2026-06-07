const themeLink = document.getElementById("theme-style");

// pega o tema salvo
const savedTheme = localStorage.getItem("theme");

// aplica o tema salvo ao carregar
if (savedTheme) {
    themeLink.href = savedTheme;
}

// função de toggle
function toggleTheme() {
    if (themeLink.href.includes("light.css")) {
        themeLink.href = "dark.css";
        localStorage.setItem("theme", "dark.css");
    } else {
        themeLink.href = "light.css";
        localStorage.setItem("theme", "light.css");
    }
}