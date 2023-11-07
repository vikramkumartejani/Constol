let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function nextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.transform = 'translateX(0)';
  }

  setInterval(nextSlide, 2000); // Change slide every 2 seconds