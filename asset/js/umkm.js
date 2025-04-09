// JavaScript for slider functionality
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('.slider  ');
  
    sliders.forEach((slider) => {
      const slides = slider.querySelector('.slides');
      let currentIndex = 0;
      const slideCount = slides.children.length;
  
      setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 3000); // Change slide every 3 seconds
    });
  });
  