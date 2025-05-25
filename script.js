document.addEventListener("DOMContentLoaded", function () {
  const watchButton = document.getElementById("watchButton");
  const videoContainer = document.getElementById("video-container");

  if (watchButton && videoContainer) {
    watchButton.addEventListener("click", function () {
      videoContainer.style.display = "block";

      videoContainer.innerHTML = `
        <iframe id="trailerPlayer"
                width="100%"
                height="100%"
                src="${getTrailerURL()}"
                title="Trailer"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <button id="closeButton">Fechar</button>
      `;

      document.getElementById("closeButton").addEventListener("click", function () {
        videoContainer.style.display = "none";
        videoContainer.innerHTML = ""; 
      });
    });
  }

  function getTrailerURL() {
    
    if (window.location.pathname.includes("series.html")) {
      return "https://www.youtube.com/embed/b9EkMc79ZSU?controls=1"; 
    } else {
      return "https://www.youtube.com/embed/zSWdZVtXT7E?controls=1"; 
    }
  }
});
