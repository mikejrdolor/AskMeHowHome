let currentSlide = 0;
    let slides = document.querySelectorAll(".testimonial-slide");
    let popup = document.getElementById("testimonialPopup");
    let slideInterval;

    // Show popup after 5 seconds
    window.onload = function() {
      setTimeout(() => {
        popup.style.display = "flex";
        startSlideshow();
      }, 5000);
    };

    // Slideshow function
    function startSlideshow() {
      slideInterval = setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
      }, 4000); // Change testimonial every 4 seconds
    }

    // Close popup
    function closePopup() {
      popup.style.display = "none";
      clearInterval(slideInterval);
    }
}