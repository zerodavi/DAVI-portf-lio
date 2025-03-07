// Função para ativar o menu lateral
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');

menuToggle.addEventListener('click', function() {
    sideMenu.classList.toggle('closed'); // Alterna a visibilidade do menu lateral
});
