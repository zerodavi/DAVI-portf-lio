document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".banner-slide");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 4000);
    }
    showSlides();

    // Menu Lateral
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", function () {
        sideMenu.classList.toggle("closed");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        sideMenu.classList.add("closed");
        overlay.classList.remove("active");
    });
});

// Seleciona os elementos do DOM
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

// Função para alternar a visibilidade do menu lateral
menuToggle.addEventListener('click', function() {
    sideMenu.classList.toggle('open'); // Alterna a classe 'open' no menu
    overlay.classList.toggle('show'); // Alterna a classe 'show' no overlay
});

// Quando o overlay for clicado, o menu será fechado
overlay.addEventListener('click', function() {
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
});
    

