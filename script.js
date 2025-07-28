// script.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile navigation menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Close mobile navigation when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                // Optional: remove 'appear' if you want it to fade out when scrolled away
                // entry.target.classList.remove('appear');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Apply fade-in to all relevant sections and cards
    document.querySelectorAll('section.fade-in, .service-item, .package-card, .support-item, .contact-info, .contact-form').forEach(el => {
        observer.observe(el);
    });
});
