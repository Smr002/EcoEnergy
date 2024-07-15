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
