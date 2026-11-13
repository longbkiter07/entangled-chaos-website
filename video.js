"use strict";
const playIntroduction = document.querySelector(".video-poster");
if (playIntroduction) {
  playIntroduction.addEventListener("click", () => {
    const player = document.createElement("iframe");
    player.title = "Entangled Chaos — How to Play & Particle Guide (Expressive Narration)";
    player.src = "https://www.youtube-nocookie.com/embed/ErnCMX5ljTc?rel=0&autoplay=1";
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    playIntroduction.replaceWith(player);
    player.focus();
  });
}
