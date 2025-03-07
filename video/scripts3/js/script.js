document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video"); // Seleciona todos os vídeos na página

    // Função para tocar todos os vídeos
    const playAllVideos = () => {
        videos.forEach(video => {
            if (video.paused) {
                video.play();
            }
        });
        // Desabilita o botão Play quando pressionado
        document.getElementById("playButton").disabled = true;
        document.getElementById("pauseButton").disabled = false;
    };

    // Função para pausar todos os vídeos
    const pauseAllVideos = () => {
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
            }
        });
        // Desabilita o botão Pause quando pressionado
        document.getElementById("pauseButton").disabled = true;
        document.getElementById("playButton").disabled = false;
    };

    // Funções para os botões de controle
    document.getElementById("playButton").addEventListener("click", playAllVideos);
    document.getElementById("pauseButton").addEventListener("click", pauseAllVideos);

    // Tornando os botões de Play e Pause mais visíveis
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");

    // Inicialmente, o botão de Play estará ativo e o de Pause desabilitado
    playButton.disabled = false;
    pauseButton.disabled = true;
});
