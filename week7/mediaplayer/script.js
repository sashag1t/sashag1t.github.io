const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseVideo);
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);
playPauseButton.addEventListener("click", playPauseVideo);

function playPauseVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.scr = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.scr = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);
function muteUnmmuteVideo() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.scr =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.scr = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
