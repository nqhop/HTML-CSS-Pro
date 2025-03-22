let playButton = document.getElementsByClassName("project-play")[0];
let video = document.getElementById("project-video");

playButton.addEventListener("click", function (event) {
    if (playButton.classList.contains("hidden")) {
        playButton.classList.remove("hidden");
        video.pause();
    } else {
        playButton.classList.add("hidden");
        video.play();
    }
});
