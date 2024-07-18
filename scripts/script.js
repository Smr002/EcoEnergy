document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});
document.querySelector('.learn-more-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#target-section').scrollIntoView({ behavior: 'smooth' });
});


const carousel = document.querySelector(".carousel");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const cardWidth = carousel.clientWidth; 

let isDragging = false, startX, scrollLeft;


arrowLeft.addEventListener("click", () => {
    carousel.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
});

arrowRight.addEventListener("click", () => {
    carousel.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
});


carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add("active");
});

carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.classList.remove("active");
});

carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("active");
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; 
    carousel.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle-inner');

    circles.forEach(circle => {
        let percentage = circle.getAttribute('data-percentage');
        let angle = (percentage / 100) * 360;

        setTimeout(() => {
            circle.style.transform = `rotate(${angle}deg)`;
        }, 100);
    });
});
