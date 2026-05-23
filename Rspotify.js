document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButtons = document.querySelectorAll(".imageButton");
    const playOverElements = document.querySelectorAll(".imageButton .playOver");

    playButtons.forEach((button, index) => {
        button.addEventListener("click", async () => {

            const songSrc = button.dataset.src;

            if (!songSrc) {
                alert("Song path missing");
                return;
            }

            // Set song source
            audioPlayer.src = songSrc;

            // Show audio controls
            audioPlayer.style.display = "block";

            try {
                // Play song
                await audioPlayer.play();

                // Update play overlays
                playOverElements.forEach((over, i) => {
                    over.style.opacity = i === index ? "1" : "0";
                });

            } catch (error) {
                console.log("Audio Error:", error);
                alert("Song not found or browser blocked audio.");
            }
        });
    });

    // Reset overlays when song ends
    audioPlayer.addEventListener("ended", () => {
        playOverElements.forEach((over) => {
            over.style.opacity = "0";
        });
    });
});
