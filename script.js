document.addEventListener("DOMContentLoaded", function () {
  var moviePlayer = document.getElementById("moviePlayer");
  moviePlayer.pause();
});

document.getElementById("watchButton").addEventListener("click", function () {
  var videoContainer = document.querySelector("#video-container");
  var moviePlayer = document.getElementById("moviePlayer");

  videoContainer.style.display = "block";

  if (moviePlayer.requestFullscreen) {
    moviePlayer.requestFullscreen();
  } else if (moviePlayer.mozRequestFullScreen) {
    moviePlayer.mozRequestFullScreen();
  } else if (moviePlayer.webkitRequestFullscreen) {
    moviePlayer.webkitRequestFullscreen();
  } else if (moviePlayer.msRequestFullscreen) {
    moviePlayer.msRequestFullscreen();
  }

  moviePlayer.play();
});

function exitFullscreen() {
  var moviePlayer = document.getElementById("moviePlayer");
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

document.getElementById("closeButton").addEventListener("click", function () {
  exitFullscreen();

  var videoContainer = document.querySelector("#video-container");
  videoContainer.style.display = "none";
});
