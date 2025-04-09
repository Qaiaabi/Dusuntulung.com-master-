document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const scrollUpButton = document.getElementById("scrollUp");
    const scrollDownButton = document.getElementById("scrollDown");

    let currentSectionIndex = 0;

    // Scroll to a specific section
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: "smooth" });
            currentSectionIndex = index;
        }
    }

    // Event listeners for buttons
    scrollUpButton.addEventListener("click", () => {
        scrollToSection(currentSectionIndex - 1);
    });

    scrollDownButton.addEventListener("click", () => {
        scrollToSection(currentSectionIndex + 1);
    });

    // Update the current section index when scrolling
    window.addEventListener("scroll", () => {
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
                currentSectionIndex = index;
            }
        });
    });
});
