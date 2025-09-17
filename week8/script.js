const videoList = [
  { id: 1, src: "stardust-1.mp4", name: "stardust" },
  { id: 2, src: "zenscape-1.mp4", name: "zenscape" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];

// -------------------------------------------------
// step 1: acces to the video
const myVideo = document.querySelector("#my-video");
console.log(myVideo);
// -------------------------------------------------

// ---------------play-pause button-----------------
// step1: get access to the right button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

// step 2: add evenListener for the click
playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// step3: add callback that plays or pauses the video
function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
// ---------------------------------------------------

// ---------------mute/unmute button-----------------
// step1: get access to the right button
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

// step 2: add evenListener for the click
muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// step3: add callback that plays or pauses the video
function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
// ---------------------------------------------------

// ---------------fastforward button-----------------
// step1: get access to the right button
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// step 2: add evenListener for the click
fastForwardButton.addEventListener("click", fastForwardVideo);

const fastForwardImg = document.querySelector("#fast-forward-img");
console.log(fastForwardImg);

// step3: add callback that plays or pauses the video
function fastForwardVideo() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
// --------------------------------------------------

// ---------------step button-----------------
// step1: get access to the right button
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);
const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

// step 2: add evenListener for the click
step1Button.addEventListener("click", gotoStep1);
step2Button.addEventListener("click", gotoStep2);

// step3: add callback that plays or pauses the video
function gotoStep1() {
  myVideo.currentTime = 17;
}
function gotoStep2() {
  myVideo.currentTime = 43;
}
// --------------------------------------------------

// ---------------like button-----------------
// step1: get access to the right button
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);
// step 1.2: get access to the text area abd also create a counter
let likes = 0;
const likesText = document.querySelector("#likes");
console.log(likesText);

// step 2: add evenListener for the click
heartButton.addEventListener("click", displayLikes);

// step3: add callback that plays or pauses the video
function displayLikes() {
  likes++;
  likesText.textContent = likes;
}
// --------------------------------------------------

// --------------------------------------------------
// ---------------progress bar-----------------
// step1: get access to progress bar
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

// step2: add eventListener
myVideo.addEventListener("timeupdate", updateProgress);

// step3: add function
function updateProgress() {
  let duration = (myVideo.currentTime / myVideo.duration) * 100;
  //   console.log(duration);
  progressBar.style.width = duration + "%";
}

// ---------------fullscreen button-----------------
// step1: get access to the right button
const fullScreenButton = document.querySelector("#fullscreen-button");
console.log(fullScreenButton);

// step 2: add evenListener for the click
fullScreenButton.addEventListener("click", goFullScreen);
myVideo.addEventListener("dblclick", goFullScreen);

// step3: add callback that plays or pauses the video
function goFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
// --------------------------------------------------

// ---------------playlist logic-----------------
// step1: get access to the right button
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);
const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);
const musicvideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicvideoButton);
// step 2: add evenListener for the click
stardustButton.addEventListener("click", function () {
  chooseVideo(0);
});

zenscapeButton.addEventListener("click", function () {
  chooseVideo(1);
});

musicvideoButton.addEventListener("click", function () {
  chooseVideo(2);
});

// step3: add callback (fuction)
function chooseVideo(no) {
  let currentVideo = videoList[no].src;
  let name = videoList[no].name;
  console.log(name);
  console.log(currentVideo);
  myVideo.src = currentVideo;
  myVideo.load();
  myVideo.play();
  currentVideo.textContent = name;
}
// --------------------------------------------------
