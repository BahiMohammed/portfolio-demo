function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});


let currentSectionIndex = 0; // Keep track of the current section index
const sectionIds = ['profile', 'about', 'experience', 'projects', 'contact'];

document.getElementById('scrollArrow').addEventListener('click', function () {
    // Get the next section
    if (currentSectionIndex < sectionIds.length - 1) {
        currentSectionIndex++; // Move to the next section
    }

    // Scroll smoothly to the next section
    let nextSection = document.getElementById(sectionIds[currentSectionIndex]);
    nextSection.scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener('scroll', function () {
    for (let i = 0; i < sectionIds.length; i++) {
        let section = document.getElementById(sectionIds[i]);
        let rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentSectionIndex = i; // Update the index based on the section in view
            break;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the section is in view
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the section is visible
            }
        });
    }, {
        threshold: 0.1  // Trigger when 50% of the section is in view
    });

    // Target all sections with the 'fade-in' class
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        observer.observe(section); // Start observing each section
    });
});


