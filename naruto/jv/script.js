// Função para alternar a exibição do container de comentários
function toggleComentarioContainer(id) {
    const comentarioContainer = document.getElementById(id);
    comentarioContainer.style.display = (comentarioContainer.style.display === 'none' || comentarioContainer.style.display === '') ? 'block' : 'none';
}

// Função para adicionar um comentário na lista
function adicionarComentario(videoId) {
    const comentarioTexto = document.getElementById("comentario-texto" + videoId).value;
    
    if (comentarioTexto.trim() !== "") {
        const comentarioItem = document.createElement("p");
        comentarioItem.textContent = comentarioTexto;

        const comentarioLista = document.getElementById("comentario-lista" + videoId);
        comentarioLista.appendChild(comentarioItem);

        document.getElementById("comentario-texto" + videoId).value = "";
    } else {
        alert("Por favor, escreva um comentário antes de enviar.");
    }
}

// Inicialização para esconder os containers de comentários inicialmente
document.querySelectorAll('.comentario-container').forEach(container => {
    container.style.display = "none";
});
