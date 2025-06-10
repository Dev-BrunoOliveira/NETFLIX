document.addEventListener("DOMContentLoaded", function () {
  const watchButton = document.getElementById("watchButton");
  const videoContainer = document.getElementById("video-container");
  const trailerPlayer = document.getElementById("trailerPlayer");

  if (watchButton && videoContainer && trailerPlayer) {
    watchButton.addEventListener("click", function () {
      videoContainer.style.display = "flex";

      trailerPlayer.src = getTrailerURL();
    });

    const closeButton = document.getElementById("closeButton");
    if (closeButton) {
      closeButton.addEventListener("click", function () {
        videoContainer.style.display = "none";
        trailerPlayer.src = "";
      });
    }
  }
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".navbar nav");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");

      navMenu.classList.toggle("active");
    });
  }

  function getTrailerURL() {
    if (window.location.pathname.includes("series.html")) {
      return "https://www.youtube.com/embed/b9EkMc79ZSU?controls=1";
    } else {
      return "https://www.youtube.com/embed/zSWdZVtXT7E?controls=1";
    }
  }

  const movieRows = document.querySelectorAll(".movie-row");

  movieRows.forEach((row) => {
    const movieList = row.querySelector(".movie-list");
    if (movieList) {
      let isDown = false;
      let startX;
      let scrollLeft;

      movieList.addEventListener("mousedown", (e) => {
        isDown = true;
        movieList.classList.add("active");
        startX = e.pageX - movieList.offsetLeft;
        scrollLeft = movieList.scrollLeft;
      });

      movieList.addEventListener("mouseleave", () => {
        isDown = false;
        movieList.classList.remove("active");
      });

      movieList.addEventListener("mouseup", () => {
        isDown = false;
        movieList.classList.remove("active");
      });

      movieList.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - movieList.offsetLeft;
        const walk = (x - startX) * 2;
        movieList.scrollLeft = scrollLeft - walk;
      });

      movieList.addEventListener(
        "touchstart",
        (e) => {
          isDown = true;
          movieList.classList.add("active");
          startX = e.touches[0].pageX - movieList.offsetLeft;
          scrollLeft = movieList.scrollLeft;
        },
        { passive: true }
      );

      movieList.addEventListener("touchend", () => {
        isDown = false;
        movieList.classList.remove("active");
      });

      movieList.addEventListener("touchcancel", () => {
        isDown = false;
        movieList.classList.remove("active");
      });

      movieList.addEventListener(
        "touchmove",
        (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.touches[0].pageX - movieList.offsetLeft;
          const walk = (x - startX) * 2;
          movieList.scrollLeft = scrollLeft - walk;
        },
        { passive: false }
      );

      movieList.querySelectorAll(".movie-item").forEach((item) => {
        item.addEventListener("click", () => {
          console.log("Filme clicado!", item);
        });
      });
    }
  });
});
