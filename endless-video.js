"use strict";
const endlessPoster = document.querySelector(".endless-video-poster");
if (endlessPoster) {
  endlessPoster.addEventListener("click", () => {
    const videoId = endlessPoster.dataset.youtubeId;
    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId || "")) return;
    const player = document.createElement("iframe");
    player.title = "Entangled Chaos — Endless Mode Gameplay and Instructions";
    player.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`;
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    endlessPoster.replaceWith(player);
    player.focus();
  });
}
