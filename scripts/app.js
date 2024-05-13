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

document.addEventListener('DOMContentLoaded', () => {
    const visitCounterElement = document.getElementById('visit-counter');
    let visitCount = localStorage.getItem('visitCount');

    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount);
    }

    visitCount += 1;
    localStorage.setItem('visitCount', visitCount);
    visitCounterElement.textContent = `Visitas: ${visitCount}`;

    // Lazy loading para imágenes y iframes
    const lazyElements = document.querySelectorAll('.lazy');
    
    const lazyLoad = (element) => {
        if (element.tagName === 'IFRAME' || element.tagName === 'IMG') {
            element.src = element.dataset.src;
            element.onload = () => {
                element.classList.add('loaded');
            }
        }
        element.classList.remove('lazy');
    };

    const onIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(onIntersection);

    lazyElements.forEach(element => {
        observer.observe(element);
    });
});

