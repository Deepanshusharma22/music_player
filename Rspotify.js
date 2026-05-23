document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButtons = document.querySelectorAll(".imageButton");
    const playOverElements = document.querySelectorAll(".imageButton .playOver");

    playButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const songSrc = button.getAttribute("data-src");
            if (!songSrc) return;
            
            const fullSrc = new URL(songSrc, window.location.href).href;

            if (audioPlayer.src !== fullSrc) {
                audioPlayer.src = fullSrc;
                audioPlayer.play();
            } else {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                } else {
                    audioPlayer.pause();
                }
            }
            
            // Sync up specific visibility flags for play overlays
            playOverElements.forEach((over, i) => {
                if (i === index) {
                    over.style.opacity = audioPlayer.paused ? "0" : "1";
                } else {
                    over.style.opacity = "0";
                }
            });
        });
    });
});