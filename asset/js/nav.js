document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Function to update active class based on scroll position
  function updateActiveNav() {
      let currentSection = "";

      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute("id");
          }
      });

      navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === currentSection) {
              link.classList.add("active");
          }
      });
  }

  // Call the function on scroll
  window.addEventListener("scroll", updateActiveNav);
});
