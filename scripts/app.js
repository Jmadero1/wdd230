const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.getElementById('nav');
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.classList.add('dark-mode');
        modeButton.textContent = "🔆";
    } else {
        main.classList.remove('dark-mode');
        modeButton.textContent = "🕶️";
    }
});

hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active'); 
});

