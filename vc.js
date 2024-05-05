document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');
    var playButton = document.getElementById('playButton');

    // Set the initial time to 20 seconds
    audio.currentTime = 20;

    // Try to play the audio immediately if autoplay is allowed
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay started successfully
            playButton.textContent = '⏸️';
        }).catch(error => {
            // Autoplay was prevented
            console.log('Autoplay prevented:', error);
        });
    }

    // Toggle playback with custom button
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = '⏸️';
        } else {
            audio.pause();
            playButton.textContent = '🔊';
        }
    });
});