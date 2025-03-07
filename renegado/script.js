document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário e o campo de pesquisa
    const searchForm = document.querySelector('.search-container');
    const searchInput = searchForm.querySelector('input[name="query"]');
    // Seleciona todas as figuras da galeria
    const figures = document.querySelectorAll('.image-gallery figure');
  
    // Impede que o formulário seja enviado
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  
    // Ao digitar no campo de pesquisa, filtra as imagens
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
  
      figures.forEach(function(figure) {
        // Obtém o texto do figcaption e o atributo alt da imagem
        const captionText = figure.querySelector('figcaption').textContent.toLowerCase();
        const altText = figure.querySelector('img').alt.toLowerCase();
  
        // Verifica se a consulta existe no caption ou no alt
        if (captionText.includes(query) || altText.includes(query)) {
          figure.style.display = ''; // Exibe a figura
        } else {
          figure.style.display = 'none'; // Oculta a figura
        }
      });
    });
  });
  