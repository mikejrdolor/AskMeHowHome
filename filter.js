document.addEventListener("DOMContentLoaded", () => {
  const propertyType = document.getElementById("propertyType");
  const location = document.getElementById("location");
  const listings = document.querySelectorAll(".listings .card");

  function filterProperties() {
    const typeValue = propertyType.value;
    const locationValue = location.value;

    listings.forEach((card) => {
      const matchesType = typeValue === "all" || card.classList.contains(typeValue);
      const matchesLocation = locationValue === "all" || card.classList.contains(locationValue);

      if (matchesType && matchesLocation) {
        card.style.display = "block"; // show
      } else {
        card.style.display = "none"; // hide
      }
    });
  }

  // Run filter when dropdown changes
  propertyType.addEventListener("change", filterProperties);
  location.addEventListener("change", filterProperties);

  // Run once on page load
  filterProperties();
});


    // Close and auto reappear
    function closeBanner() {
      const banner = document.getElementById('bounceBanner');
      banner.style.display = 'none';

      // Reappear after 10 seconds with fade-in + bounce
      setTimeout(() => {
        banner.style.display = 'inline-block';
        banner.style.animation = 'fadeIn 1s ease, bounce 2s infinite';
      }, 10000);
    }

    // Make banner draggable
    dragElement(document.getElementById("bounceBanner"));

    function dragElement(elmnt) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        // stop bounce while dragging
        elmnt.style.animation = "none";
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        elmnt.style.bottom = "auto"; // override fixed bottom
        elmnt.style.right = "auto";  // override fixed right
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        // resume bounce after drag
        elmnt.style.animation = "bounce 2s infinite";
      }
    }


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



