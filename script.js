let btn = document.getElementsByClassName("shape")[0];
let btn_reset = document.getElementsByClassName("shape")[1];
let score = document.getElementsByClassName("score")[0];
let theme_icon = document.getElementsByClassName("theme-icon")[0];

var amount = 0;
var factor = 100;
const units = ["ml", "L"];

if (window.localStorage.getItem('score') != null) {
    amount = JSON.parse(window.localStorage.getItem('score'));
    if (amount < 900) {
        score.textContent = amount + units[0];
        console.log("Success reload ml");
    } else {
        score.textContent = amount / 1000 + units[1];
        console.log("Success reload L");
    }
} else {
    console.log("Fail reload, continue?");
}

btn.addEventListener("click", () => {
    amount += factor;
    if (amount < 900) {
        score.textContent = amount + units[0];
    } else {
        score.textContent = amount / 1000 + units[1];
    }
    window.localStorage.setItem('score', JSON.stringify(amount));
});

btn_reset.addEventListener("click", () => {
    if (amount != 0) {
        amount = 0;
        score.textContent = amount;
        window.localStorage.removeItem("score");
        console.log("Amount reset!");
    }
});

let theme_result = [];
let theme_index = 0;

// Fetch the themes once when the page loads
async function fetchThemes() {
    try {
        let response = await fetch('./themes.json');
        theme_result = await response.json();
        if (theme_result.length > 0) {
            // Apply the first theme initially
            applyTheme(theme_result[theme_index]);
        }
    } catch (error) {
        console.error('Error fetching themes:', error);
    }
}

// Function to apply a theme
function applyTheme(theme) {
    document.documentElement.style.setProperty("--primary-background-color", theme["--primary-background-color"]);
    document.documentElement.style.setProperty("--primary-text-color", theme["--primary-text-color"]);
    document.documentElement.style.setProperty("--primary-btn-color", theme["--primary-btn-color"]);
    document.documentElement.style.setProperty("--secondary-btn-color", theme["--secondary-btn-color"]);
    document.documentElement.style.setProperty("--theme-icon-fill", theme["--theme-icon-fill"]);
}

// Call fetchThemes to load the themes
fetchThemes();

theme_icon.addEventListener("click", () => {
    if (theme_result.length > 0) {
        // Increment the theme_index and wrap around if it exceeds the length of the theme array
        theme_index = (theme_index + 1) % theme_result.length;
        // Apply the next theme
        applyTheme(theme_result[theme_index]);
    } else {
        console.error('No themes available');
    }
});
