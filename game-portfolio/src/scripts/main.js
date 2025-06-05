document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('portfolio-video');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');

    playButton.addEventListener('click', () => {
        videoElement.play();
    });

    pauseButton.addEventListener('click', () => {
        videoElement.pause();
    });
});