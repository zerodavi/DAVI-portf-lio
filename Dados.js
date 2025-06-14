// Botão do WhatsApp
document.getElementById("whatsappBtn").addEventListener("click", function () {
  window.open("https://wa.me/5586994070772?text=Olá!%20Gostaria%20de%20mais%20informações.", "_blank");
});

// Carrossel simples
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Troca automática a cada 5 segundos
setInterval(nextSlide, 5000);
document.getElementById("whatsappBtn").addEventListener("click", function () {
  window.open("https://wa.me/5586994070772?text=Olá!%20Gostaria%20de%20mais%20informações.", "_blank");
});
